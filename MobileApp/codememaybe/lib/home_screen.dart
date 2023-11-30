import 'package:flutter/material.dart';
import 'login_screen.dart';
import 'register_screen.dart';

class MyHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    var theme = Theme.of(context);
    var textTheme = theme.textTheme;

    return Scaffold(
      body: Container(
        child: Center(
          child: SingleChildScrollView(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                SizedBox(height: 30),
                Image.asset(
                  'images/logo.png',
                  width: 350,
                  height: 350,
                ),
                SizedBox(height: 20),
                Text(
                  'CodeMeMaybe',
                  style: textTheme.headline4?.copyWith(
                    color: const Color.fromARGB(255, 210, 223, 229),
                    fontWeight: FontWeight.bold,
                  ),
                ),
                SizedBox(height: 50),
                _buildButton(
                    title: 'Log in',
                    onPressed: () {
                      Navigator.push(
                        context,
                        MaterialPageRoute(builder: (context) => LoginScreen()),
                      );
                    },
                    context: context),
                SizedBox(height: 20),
                _buildButton(
                    title: 'Sign up',
                    onPressed: () {
                      Navigator.push(
                        context,
                        MaterialPageRoute(
                            builder: (context) => RegisterScreen()),
                      );
                    },
                    context: context),
                SizedBox(height: 30),
              ],
            ),
          ),
        ),
      ),
    );
  }

  Widget _buildButton(
      {required String title,
      required VoidCallback onPressed,
      required BuildContext context}) {
    return ElevatedButton(
      style: ElevatedButton.styleFrom(
        primary: Theme.of(context).primaryColor, // Kolor przycisku
        padding: EdgeInsets.symmetric(horizontal: 30, vertical: 15),
      ),
      onPressed: onPressed,
      child: Text(
        title,
        style: TextStyle(
            fontSize: 18, color: Colors.white), // Biały tekst na przycisku
      ),
    );
  }
}
