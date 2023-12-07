import 'dart:convert';
import 'package:flutter_stripe/flutter_stripe.dart';
import 'package:http/http.dart' as http;
import 'package:flutter/material.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';
import 'package:fluttertoast/fluttertoast.dart';
import 'package:hive/hive.dart';
import 'package:codememaybe/homescreen.dart';
import "package:codememaybe/devIconHelper.dart";
import 'package:intl/intl.dart';

class MyTaskScreen extends StatefulWidget {
  @override
  _MyTaskScreenState createState() => _MyTaskScreenState();
}

class _MyTaskScreenState extends State<MyTaskScreen> {
  List<dynamic> tasks = [];
  String userToken = "";
  String userMail = "";
  FToast fToast = FToast();
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
      var mode = "delegated";
      var url = Uri.https(
          dotenv.get('BACKEND_API').toString(), '/api/tasks/my_tasks');
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
        body: jsonEncode({'email': userMail, 'mode': mode}),
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

  IconData? getIcon(String technologyName) {
    return DevIconHelper.icons[technologyName];
  }

 String _formatDate(String dateString) {
    final dateTime = DateTime.parse(dateString);
    final format = DateFormat('dd.MM.yyyy HH:mm');
    return "Data: ${format.format(dateTime)}";
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
                  return Container(
                    margin: const EdgeInsets.all(8),
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(8),
                      border: Border.all(color: Colors.grey),
                    ),
                    child: ListTile(
                      onTap: (){
                       
                      },
                      title: Text(tasks[index]['content'] ?? ''),
                      subtitle: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: <Widget>[
                          const SizedBox(height: 10),
                          Text('Koszt: ${tasks[index]['koszt']} PLN'),
                          const SizedBox(height: 5),
                          Text(_formatDate(tasks[index]['data'])),
                          const SizedBox(height: 10),
                          SingleChildScrollView(
                            scrollDirection: Axis.horizontal,
                            child: Row(
                              children:
                                  (tasks[index]['languages'] as List<dynamic>)
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
                                        fontSize: 18.0,
                                      );
                                    },
                                    child: Icon(
                                        getIcon(language),
                                        size: 30,
                                      ),
                                  ),
                                );
                              }).toList(),
                            ),
                          )
                        ],
                      ),
                      trailing: IconButton(
                        icon: Icon(Icons.arrow_forward),
                        onPressed: (){
                          
                          Navigator.push(
                            context,
                            // String taskID, String email, String token
                            MaterialPageRoute(builder: (context) => HomeScreen(tasks[index]['koszt'],tasks[index]['_id'],userMail,userToken)),
                          );
                          // Pusta funkcja wykonująca się po naciśnięciu przycisku
                        },
                      ),
                    ),
                  );
                },
              ),
      ),
    );
  }
}
