import 'package:flutter/material.dart';
import 'login_screen.dart';
import 'register_screen.dart';
import 'tasks_list_screen.dart';
import 'add_task_screen.dart'; // Dodane importowanie pliku add_task_screen.dart

class MyHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Ekran główny'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            ElevatedButton(
              onPressed: () {
                // Naciśnięcie przycisku przechodzi do ekranu logowania
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => LoginScreen()),
                );
              },
              child: Text('Log in'),
            ),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => RegisterScreen()),
                );
              },
              child: Text('Sign up'),
            ),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: () {
                // Naciśnięcie przycisku przechodzi do ekranu listy zadań (TaskScreen)
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => TaskScreen()),
                );
              },
              child: Text('Lista zadań'),
            ),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: () {
                // Naciśnięcie przycisku przechodzi do ekranu dodawania zadania (AddTaskScreen)
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => AddTaskScreen()),
                );
              },
              child: Text('Dodaj zadanie'),
            ),
          ],
        ),
      ),
    );
  }
}
