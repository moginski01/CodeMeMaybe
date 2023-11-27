import 'package:bottom_navy_bar/bottom_navy_bar.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(MyPage());
}

class MyPage extends StatefulWidget {
  @override
  State<MyPage> createState() => _MyPageState();
}

class _MyPageState extends State<MyPage> {
  int currentIndex = 0;
  late PageController _pageController;

  @override
  void initState() {
    super.initState();
    _pageController = PageController();
  }

  @override
  void dispose() {
    _pageController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        home: Scaffold(
      appBar: AppBar(title: Text("Hello")),
      body: SizedBox.expand(
        child: PageView(
          controller: _pageController,
          onPageChanged: (index) {
            setState(() {
              currentIndex = index;
            });
          },
        ),
      ),
      bottomNavigationBar: BottomNavyBar(
          onItemSelected: (index) {
            setState(() {
              _pageController.jumpToPage(index);
            });
          },
          items: <BottomNavyBarItem>[
            BottomNavyBarItem(title: Text('R1'), icon: Icon(Icons.home)),
            BottomNavyBarItem(
                title: Text('R2'),
                icon: Icon(Icons.screen_search_desktop_rounded)),
            BottomNavyBarItem(title: Text('R3'), icon: Icon(Icons.person_3)),
          ]),
    ));
  }
}
