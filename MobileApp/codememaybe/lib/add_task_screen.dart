import 'package:flutter/material.dart';
import 'package:awesome_dialog/awesome_dialog.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
import 'package:flutter_dotenv/flutter_dotenv.dart';
import 'package:hive/hive.dart';


class AddTaskScreen extends StatefulWidget {
  @override
  _AddTaskScreenState createState() => _AddTaskScreenState();
}

class _AddTaskScreenState extends State<AddTaskScreen> {
  TextEditingController taskController = TextEditingController();
  TextEditingController costController = TextEditingController();
  TextEditingController languageController = TextEditingController();
  String userToken = "";
  String userMail = "";

  @override
  void dispose() {
    taskController.dispose();
    costController.dispose();
    languageController.dispose();
    super.dispose();
  }

  Future<void> _sendPostRequest(String content, int cost, List<String> languages) async {
    const apiUrl = 'http://10.0.2.2:4000/api/tasks/new_task'; // Zastąp to adresem URL twojego endpointu API
    var boxName = dotenv.get('BOX_NAME').toString();
    var key = dotenv.get('BOX_JWT_KEY').toString();

    var keyBox = await Hive.openBox(boxName);
    // var data = convert.jsonDecode(response.body);
    var userInfo = keyBox.get(key);
    userToken = userInfo['token'];
    userMail = userInfo['email'];


    final newTaskData = {
      'content': content,
      'cost': cost.toString(),
      'languages': languages,
      'authorEmail': userMail,
    };

    try {
      final response = await http.post(
        Uri.parse(apiUrl),
        headers: {
          'Authorization': 'Bearer $userToken',
          'Content-Type': 'application/json',
        },
        body: jsonEncode(newTaskData),
      );

      if (response.statusCode == 200) {
        // Tutaj obsłuż odpowiedź, jeśli jest potrzebne
        print('Sukces: ${response.body}');
      } else {
        // Obsługa błędu
        print('Błąd: ${response.reasonPhrase}');
        print('tresc: ${response.body}');
      }
    } catch (e) {
      // Obsługa błędów podczas żądania HTTP
      print('Wystąpił błąd: $e');
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Dodaj zadanie'),
      ),
      body: Padding(
        padding: EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: <Widget>[
            TextFormField(
              controller: taskController,
              maxLines: 10,
              decoration: InputDecoration(
                labelText: 'Treść zadania',
                border: OutlineInputBorder(),
              ),
            ),
            SizedBox(height: 20),
            TextFormField(
              controller: costController,
              keyboardType: TextInputType.numberWithOptions(decimal: true),
              decoration: InputDecoration(
                labelText: 'Koszt',
                border: OutlineInputBorder(),
              ),
            ),
            SizedBox(height: 20),
            TextFormField(
              controller: languageController,
              decoration: InputDecoration(
                labelText: 'Języki',
                border: OutlineInputBorder(),
              ),
            ),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: () {
                // Wyświetlenie AwesomeDialog po kliknięciu przycisku "Dodaj"
                String taskText = taskController.text;
                int costText = int.tryParse(costController.text) ?? 0;
                String languageText = languageController.text;
                List<String> languagesList = languageText.split(',').map((language) => language.trim()).toList();

                AwesomeDialog(
                  context: context,
                  dialogType: DialogType.info,
                  animType: AnimType.rightSlide,
                  title: 'Task details',
                  desc: 'Zadanie: $taskText\nKoszt: $costText\nJęzyki: $languageText',
                  btnCancelOnPress: () {},
                  btnOkOnPress: () async {
                    await _sendPostRequest(taskText, costText, languagesList);
                  },
                )..show();
              },
              child: Text('Dodaj'),
            ),
          ],
        ),
      ),
    );
  }
}
