import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';
import 'package:flutter_stripe/flutter_stripe.dart';
import 'package:http/http.dart' as http;

var paymentValue = 0;
var taskID = "";
var email= "";
var token = "";
class HomeScreen extends StatefulWidget {
  // int paymentValue = 0;
  HomeScreen(int test,String taskID, String email, String token, {super.key}){
    paymentValue = test*100;//100 po to bo jako grosze taktuje
    taskID = taskID;
    email = email;
    token = token;
    debugPrint("test112121");
    debugPrint(paymentValue.toString());
    // debugPrint(paymentValue as String?);

  }

  // const HomeScreen({Key? key}) : super(key: key);

  @override
  _HomeScreenState createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  Map<String, dynamic>? paymentIntent;
  // int paymentValue = 0;
  // _HomeScreenState(int test){
  //   paymentValue = test;
  // }

  @override
  void initState() {
    super.initState();
    makePayment(11); // Wywołaj funkcję makePayment() automatycznie po wejściu na ekran
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Stripe Payment'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            TextButton(
              child: const Text('Buy Now'),
              onPressed: () async {
                await makePayment(11);
              },
            ),
          ],
        ),
      ),
    );
  }

  Future<void> makePayment(int value) async {
    var val = value;
    try {
      paymentIntent = await createPaymentIntent('1111', 'GBP');

      var gpay = PaymentSheetGooglePay(merchantCountryCode: "GB",
          currencyCode: "GBP",
          testEnv: true);

      //STEP 2: Initialize Payment Sheet
      await Stripe.instance
          .initPaymentSheet(
          paymentSheetParameters: SetupPaymentSheetParameters(
              paymentIntentClientSecret: paymentIntent![
              'client_secret'], //Gotten from payment intent
              style: ThemeMode.light,
              merchantDisplayName: 'Abhi',
              googlePay: gpay))
          .then((value) {});

      //STEP 3: Display Payment sheet
      displayPaymentSheet();
    } catch (err) {
      debugPrint(err as String?);
    }
  }

  displayPaymentSheet() async {
    try {
      await Stripe.instance.presentPaymentSheet().then((value) async {//przez dodanie asynca może sie wyjebac

        print("Payment Successfully");
        Map<String, dynamic> requestData = {
        'email': email,
        'taskID': taskID,
      };
      
      // Nagłówek z tokenem Bearer
      Map<String, String> headers = {
        'Authorization': 'Bearer $token',
        'Content-Type': 'application/json', // Określenie typu zawartości
      };
      
      // Adres URI do zapytania POST
      String backendAPI = Uri.https(dotenv.get('BACKEND_API').toString(), 'api/tasks/updatePaymentStatus').toString();

      // Wykonanie żądania POST
      var response = await http.post(
        Uri.parse(backendAPI),
        headers: headers,
        body: jsonEncode(requestData), // Dane przekazane jako ciało żądania
      );

      // Sprawdzenie odpowiedzi
      if (response.statusCode == 200) {
        print('Request Successful: ${response.body}');
        // Obsługa odpowiedzi z serwera tutaj
      } else {
        print('Request Failed: ${response.statusCode}');
        // Obsługa błędu związana z żądaniem
      }
    
      });
    } catch (e) {
      print('$e');
    }
  }

  createPaymentIntent(String amount, String currency) async {
    try {
      Map<String, dynamic> body = {
        'amount': paymentValue.toString(), 
        'currency': currency,
      };
      var stripeKey = dotenv.get('STRIPE_SECRET').toString();

      var response = await http.post(
        Uri.parse('https://api.stripe.com/v1/payment_intents'),
        headers: {
          'Authorization': 'Bearer $stripeKey',
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: body,
      );
      return json.decode(response.body);
    } catch (err) {
      throw Exception(err.toString());
    }
  }
}
