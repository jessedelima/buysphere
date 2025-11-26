import 'package:flutter/material.dart';
import 'screens/home_screen.dart';
import 'screens/apps/buy_connect_screen.dart';
import 'screens/apps/buy_drive_screen.dart';
import 'screens/apps/buy_bank_screen.dart';
import 'utils/colors.dart';

void main() {
  runApp(const BuySphereApp());
}

class BuySphereApp extends StatelessWidget {
  const BuySphereApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'BuySphere',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        primarySwatch: MaterialColor(
          BuySphereColors.primary.value,
          <int, Color>{
            50: BuySphereColors.primary.withOpacity(0.1),
            100: BuySphereColors.primary.withOpacity(0.2),
            200: BuySphereColors.primary.withOpacity(0.3),
            300: BuySphereColors.primary.withOpacity(0.4),
            400: BuySphereColors.primary.withOpacity(0.5),
            500: BuySphereColors.primary,
            600: BuySphereColors.primary.withOpacity(0.7),
            700: BuySphereColors.primary.withOpacity(0.8),
            800: BuySphereColors.primary.withOpacity(0.9),
            900: BuySphereColors.primary,
          },
        ),
        primaryColor: BuySphereColors.primary,
        scaffoldBackgroundColor: BuySphereColors.background,
        appBarTheme: const AppBarTheme(
          backgroundColor: BuySphereColors.primary,
          foregroundColor: BuySphereColors.white,
          elevation: 0,
        ),
        elevatedButtonTheme: ElevatedButtonThemeData(
          style: ElevatedButton.styleFrom(
            backgroundColor: BuySphereColors.primary,
            foregroundColor: BuySphereColors.white,
            shape: RoundedRectangleBorder(
              borderRadius: BorderRadius.circular(12),
            ),
          ),
        ),
        cardTheme: CardTheme(
          elevation: 2,
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(12),
          ),
        ),
        fontFamily: 'OpenSans',
      ),
      home: const HomeScreen(),
      routes: {
        '/home': (context) => const HomeScreen(),
        '/buyconnect': (context) => const BuyConnectScreen(),
        '/buydrive': (context) => const BuyDriveScreen(),
        '/buybank': (context) => const BuyBankScreen(),
        // Adicionar outras rotas conforme necessário
      },
    );
  }
}

