import 'package:codememaybe/add_task_screen.dart';
import 'package:codememaybe/my_tasks_screen.dart';
import 'package:codememaybe/tasks_list_screen.dart';
import 'package:flutter/material.dart';
import 'my_tasks_screen.dart';
class Nav extends StatefulWidget {
  @override
  _NavState createState() => _NavState();
}

class _NavState extends State<Nav> {
  int _selectedIndex = 0;
  List<Widget> widgetList = [
    TaskScreen(),
    AddTaskScreen(),
    MyTaskScreen(),
  ];
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: widgetList[_selectedIndex],
      ),
      bottomNavigationBar: BottomNavigationBar(
        onTap: (index) {
          setState(() {
            _selectedIndex = index;
          });
        },
        currentIndex: _selectedIndex,
        items: const <BottomNavigationBarItem>[
          BottomNavigationBarItem(
            icon: Icon(Icons.home),
            label: 'Lista zgłoszeń',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.message),
            label: 'Dodaj zgłoszenie',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.person),
            label: 'Moje zgłoszenia',
          ),
        ],
      ),
    );
  }
}
