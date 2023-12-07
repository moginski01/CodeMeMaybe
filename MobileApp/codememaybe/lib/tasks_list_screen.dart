import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
import 'package:awesome_dialog/awesome_dialog.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';
import 'package:hive/hive.dart';
import 'package:intl/intl.dart';
import "package:dev_icons/dev_icons.dart";
import "package:codememaybe/devIconHelper.dart";
import 'package:fluttertoast/fluttertoast.dart';
import 'dart:convert';

class TaskScreen extends StatefulWidget {
  @override
  _TaskScreenState createState() => _TaskScreenState();
}

class _TaskScreenState extends State<TaskScreen> {
  List<dynamic> tasks = [];
  String userToken = "";
  String userMail = "";
  FToast fToast = FToast();

  String _formatDate(String dateString) {
    final dateTime = DateTime.parse(dateString);
    final format = DateFormat('dd.MM.yyyy HH:mm');
    return format.format(dateTime);
  }

  IconData? getIcon(String technologyName) {
    return DevIconHelper.icons[technologyName];
  }

  @override
  void initState() {
    super.initState();
    fToast.init(context);
    fetchData();
  }

  Future<void> fetchData() async {
    try {
      var boxName = dotenv.get('BOX_NAME').toString();
      var key = dotenv.get('BOX_JWT_KEY').toString();
      var url = Uri.https(dotenv.get('BACKEND_API').toString(), 'api/tasks');
      var keyBox = await Hive.openBox(boxName);
      // var data = convert.jsonDecode(response.body);
      var userInfo = keyBox.get(key);
      userToken = userInfo['token'];
      userMail = userInfo['email'];

      debugPrint("userToken and mail:");
      debugPrint(userToken);
      debugPrint(userMail);

      final response = await http.post(
        url,
        headers: {
          'Authorization': 'Bearer $userToken',
          'Content-Type': 'application/json',
        },
        body: jsonEncode({'email': userMail}),
      );

      if (response.statusCode == 200) {
        setState(() {
          tasks = json.decode(response.body);
        });
        print(tasks);
      } else {
        print(
            'Wystąpił problem podczas pobierania danych: ${response.statusCode}');
      }
    } catch (error) {
      print('Wystąpił błąd: $error');
    }
  }

  void _showTaskDetailsDialog(Map<String, dynamic> task) {
    AwesomeDialog(
      context: context,
      dialogType: DialogType.info,
      animType: AnimType.rightSlide,
      title: 'Szczegóły zadania',
      desc: '''
        Content: ${task['content']}
        Koszt: '${task['koszt']} PLN'
        Data: ${_formatDate(task['data'])}
        Języki: ${task['languages'].join(', ')}
        ''',
      btnCancelOnPress: () {},
      btnOkOnPress: () async {
        try {
          final response = await http.patch(
            Uri.https(dotenv.get('BACKEND_API').toString(), 'api/tasks'),
            headers: {
              'Authorization': 'Bearer $userToken',
              'Content-Type': 'application/json',
            },
            body: jsonEncode({
              'email': userMail,
              'taskID': task['_id'], // Przekazanie ID zadania
            }),
          );

          if (response.statusCode == 200) {
            await fetchData();
            // Navigator.pop(context); // Zamknięcie AwesomeDialog
            print('Pomyślnie zaktualizowano zadanie.');
          } else {
            print(
                'Wystąpił problem podczas aktualizacji zadania: ${response.statusCode}');
          }
        } catch (error) {
          print('Wystąpił błąd: $error');
        }
      },
    ).show();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Lista tasków'),
      ),
      body: Center(
        child: tasks.isEmpty
            ? const CircularProgressIndicator()
            : ListView.builder(
                itemCount: tasks.length,
                itemBuilder: (context, index) {
                  return Card(
                    elevation: 3,
                    margin: const EdgeInsets.all(8),
                    child: ListTile(
                      onTap: () {
                        _showTaskDetailsDialog(tasks[index]);
                      },
                      title: Text(tasks[index]['content']),
                      subtitle: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: <Widget>[
                          const SizedBox(height: 10),
                          Text('Koszt: ${tasks[index]['koszt']} PLN'),
                          const SizedBox(height: 5),
                          Text('Data: ${_formatDate(tasks[index]['data'])}'),
                          const SizedBox(height: 10),
                          SingleChildScrollView(
                            scrollDirection: Axis.horizontal,
                            child: Row(
                              children: tasks[index]['languages']
                                  .map<Widget>((language) {
                                return Padding(
                                    padding: const EdgeInsets.symmetric(
                                        horizontal: 15.0),
                                    child: InkWell(
                                      onTap: () {
                                        Fluttertoast.showToast(
                                            msg: "Language: $language",
                                            toastLength: Toast.LENGTH_SHORT,
                                            gravity: ToastGravity.CENTER,
                                            timeInSecForIosWeb: 1,
                                            fontSize: 43.0);
                                      },
                                      child: Icon(
                                        getIcon(language),
                                        size: 30,
                                      ),
                                    ));
                              }).toList(),
                            ),
                          )
                        ],
                      ),
                    ),
                  );
                },
              ),
      ),
    );
  }
}
