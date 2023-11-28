import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
import 'package:awesome_dialog/awesome_dialog.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';
import 'package:hive/hive.dart';
import 'dart:convert' as convert;


class TaskScreen extends StatefulWidget {
  @override
  _TaskScreenState createState() => _TaskScreenState();
}

class _TaskScreenState extends State<TaskScreen> {
  List<dynamic> tasks = [];
  String userToken = "";
  String userMail = "";
  
  
  @override
  void initState() {
    super.initState();
    fetchData();
  }


  Future<void> fetchData() async {
    try {
      var boxName = dotenv.get('BOX_NAME').toString();
      var key = dotenv.get('BOX_JWT_KEY').toString();

      var keyBox = await Hive.openBox(boxName);
      // var data = convert.jsonDecode(response.body);
      var userInfo = keyBox.get(key);
      userToken = userInfo['token'];
      userMail = userInfo['email'];

      debugPrint("userToken and mail:");
      debugPrint(userToken);
      debugPrint(userMail);
      

      final response = await http.post(
        Uri.parse('http://10.0.2.2:4000/api/tasks'),
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
        print('Wystąpił problem podczas pobierania danych: ${response.statusCode}');
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
        Koszt: ${task['koszt']}
        Data: ${task['data']}
        Języki: ${task['languages'].join(', ')}
        ''',
      btnCancelOnPress: () {},
      btnOkOnPress: () async {
        try {
          final response = await http.patch(
            Uri.parse('http://10.0.2.2:4000/api/tasks'),
            headers: {
              'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDI5OGZkMmExYTc3YzU4ZTUxYThjMjYiLCJpYXQiOjE3MDExMDYxNjksImV4cCI6MTcwMTM2NTM2OX0.BHn3EK1-oLVTJhqkQXwx-l5jvfCitNc6uhyirGKJFwA',
              'Content-Type': 'application/json',
            },
            body: jsonEncode({
              'email': 'test@gmail.com',
              'taskID': task['_id'], // Przekazanie ID zadania
            }),
          );

          if (response.statusCode == 200) {
            await fetchData();
            // Navigator.pop(context); // Zamknięcie AwesomeDialog
            print('Pomyślnie zaktualizowano zadanie.');
          } else {
            print('Wystąpił problem podczas aktualizacji zadania: ${response.statusCode}');
          }
        } catch (error) {
          print('Wystąpił błąd: $error');
        }
      },
    )..show();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Lista tasków'),
      ),
      body: Center(
        child: tasks.isEmpty
            ? CircularProgressIndicator()
            : ListView.builder(
                itemCount: tasks.length,
                itemBuilder: (context, index) {
                  return Card(
                    elevation: 3,
                    margin: EdgeInsets.all(8),
                    child: ListTile(
                      onTap: () {
                        _showTaskDetailsDialog(tasks[index]);
                      },
                      title: Text(tasks[index]['content']),
                      subtitle: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: <Widget>[
                          Text('Koszt: ${tasks[index]['koszt']}'),
                          Text('Data: ${tasks[index]['data']}'),
                          Text('Języki: ${tasks[index]['languages'].join(', ')}'),
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
