import 'package:codememaybe/home_screen.dart';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert' as convert;
import 'package:hive/hive.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';
import 'package:awesome_dialog/awesome_dialog.dart';
import 'package:codememaybe/application_screen.dart';

class LoginScreen extends StatelessWidget {
  Future<void> login(
    String email,
    String password,
    VoidCallback onSuccess,
    VoidCallback onError,
  ) async {
    var url = Uri.https(dotenv.get('BACKEND_API').toString(), 'api/user/login');

    try {
      var response = await http.post(
        url,
        headers: {'Content-Type': 'application/json'},
        body: convert.jsonEncode({'email': email, 'password': password}),
      );
      debugPrint('Body: ${convert.jsonEncode({
            'email': email,
            'password': password
          })}');
      debugPrint('Response status: ${response.statusCode}');
      debugPrint('Response body: ${response.body}');
      if (response.statusCode == 200) {
        debugPrint("Login successful");
        var boxName = dotenv.get('BOX_NAME').toString();
        var key = dotenv.get('BOX_JWT_KEY').toString();

        var keyBox = await Hive.openBox(boxName);
        var data = convert.jsonDecode(response.body);
        var token = data;
        keyBox.put(key, token);
        onSuccess();
      } else {
        debugPrint("Login failed: ${response.statusCode}");
        onError();
      }
    } catch (e) {
      debugPrint("Error during login: $e");
      onError();
    }
  }

  @override
  Widget build(BuildContext context) {
    final TextEditingController emailController = TextEditingController();
    final TextEditingController passwordController = TextEditingController();
    return Scaffold(
      body: Stack(
        children: <Widget>[
          // Pełnoekranowy obraz
          Positioned.fill(
            child: Image.asset(
              'images/login_background.jpg',
              fit: BoxFit.cover,
            ),
          ),
          Positioned.fill(
            child: Container(
              decoration: const BoxDecoration(
                gradient: LinearGradient(
                  colors: [Colors.transparent, Colors.black],
                  begin: Alignment.topCenter,
                  end: Alignment.bottomCenter,
                  stops: [0.3, 0.55],
                ),
              ),
            ),
          ),
          Align(
            alignment: Alignment.bottomCenter,
            child: SingleChildScrollView(
              physics: const BouncingScrollPhysics(),
              child: Container(
                height: MediaQuery.of(context).size.height / 2,
                padding: const EdgeInsets.all(20.0),
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  crossAxisAlignment: CrossAxisAlignment.stretch,
                  children: <Widget>[
                    TextFormField(
                      controller: emailController,
                      decoration: const InputDecoration(
                        labelText: 'Email',
                        border: OutlineInputBorder(),
                      ),
                    ),
                    const SizedBox(height: 20.0),
                    TextFormField(
                      controller: passwordController,
                      decoration: const InputDecoration(
                        labelText: 'Password',
                        border: OutlineInputBorder(),
                      ),
                      obscureText: true,
                    ),
                    const SizedBox(height: 40.0),
                    ElevatedButton(
                      child: const Text('Login'),
                      onPressed: () {
                        login(emailController.text, passwordController.text,
                            () {
                          // Try add navigation;

                          Navigator.push(
                            context,
                            MaterialPageRoute(
                                builder: (context) => ApplicationPage()),
                          );
                        }, () {
                          AwesomeDialog(
                            context: context,
                            dialogType: DialogType.error,
                            animType: AnimType.rightSlide,
                            headerAnimationLoop: false,
                            title: 'Error',
                            desc: 'Error occurred during logging!',
                            btnOkOnPress: () {},
                            btnOkIcon: Icons.cancel,
                            btnOkColor: Colors.red,
                          ).show();
                        });
                      },
                    ),
                  ],
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
