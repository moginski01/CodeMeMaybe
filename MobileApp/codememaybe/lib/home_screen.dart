import 'package:flutter/material.dart';
import 'login_screen.dart';
import 'register_screen.dart';

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
              child: Text('Zaloguj'),
            ),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: () {
                // Naciśnięcie przycisku przechodzi do ekranu rejestracji
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => RegisterScreen()),
                );
              },
              child: Text('Zarejestruj'),
            ),
          ],
        ),
      ),
    );
  }
}
