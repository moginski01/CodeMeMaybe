import 'package:flutter/material.dart';
import 'package:hive/hive.dart';
import 'home_screen.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';
import 'package:path_provider/path_provider.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:flutter_stripe/flutter_stripe.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();

  await dotenv.load(fileName: ".env");
  Stripe.publishableKey = dotenv.get('STRIPE_PUBLISHABLE_KEY').toString();
  var directory = await getApplicationDocumentsDirectory();
  Hive.init(directory.path);

  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      darkTheme: _buildTheme(Brightness.dark),
      themeMode: ThemeMode.dark,
      home: MyHomePage(),
    );
  }

  ThemeData _buildTheme(brightness) {
    var baseTheme = ThemeData(brightness: brightness);

    return baseTheme.copyWith(
      textTheme: GoogleFonts.openSansTextTheme(baseTheme.textTheme),
    );
  }
}


//STRAJP DZIALA OD TEGO!
// import 'package:flutter/material.dart';
// import 'package:flutter_stripe/flutter_stripe.dart';
// import 'homescreen.dart';

// void main() async {
//   //Initialize Flutter Binding
//   WidgetsFlutterBinding.ensureInitialized();

//   Stripe.publishableKey =
//   "pk_test_51NEGSLI2JMankXJAbQWSEFsjZKBiIzUCmfgOsotbREAwTCVdRRMDUW6LAghkZU6ACMrP2bkKcmpd2s2iuzP9J9tW00zXgOXWMF";

//   runApp(MyApp());
// }

// class MyApp extends StatelessWidget {
//   @override
//   Widget build(BuildContext context) {
//     return MaterialApp(
//       theme: ThemeData(
//         primarySwatch: Colors.green,
//       ),
//       //initial route
//       home: HomeScreen(),
//     );
//   }
// }
