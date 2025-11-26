import 'package:flutter/material.dart';
import '../../utils/colors.dart';

class BuyConnectScreen extends StatelessWidget {
  const BuyConnectScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('BuyConnect'),
        backgroundColor: BuySphereColors.buyConnect,
      ),
      body: const Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(
              Icons.people,
              size: 80,
              color: BuySphereColors.buyConnect,
            ),
            SizedBox(height: 20),
            Text(
              'BuyConnect',
              style: TextStyle(
                fontSize: 24,
                fontWeight: FontWeight.bold,
                color: BuySphereColors.textPrimary,
              ),
            ),
            SizedBox(height: 10),
            Padding(
              padding: EdgeInsets.symmetric(horizontal: 40),
              child: Text(
                'Rede social completa com perfil profissional, fotos e chat integrado',
                textAlign: TextAlign.center,
                style: TextStyle(
                  fontSize: 16,
                  color: BuySphereColors.textSecondary,
                ),
              ),
            ),
            SizedBox(height: 30),
            Text(
              'Em desenvolvimento...',
              style: TextStyle(
                fontSize: 14,
                color: BuySphereColors.textMuted,
                fontStyle: FontStyle.italic,
              ),
            ),
          ],
        ),
      ),
    );
  }
}

