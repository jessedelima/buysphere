import 'package:flutter/material.dart';
import '../../utils/colors.dart';

class BuyBankScreen extends StatelessWidget {
  const BuyBankScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('BuyBank'),
        backgroundColor: BuySphereColors.buyBank,
      ),
      body: const Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(
              Icons.credit_card,
              size: 80,
              color: BuySphereColors.buyBank,
            ),
            SizedBox(height: 20),
            Text(
              'BuyBank',
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
                'Serviços bancários completos e modernos com conta corrente, poupança e investimentos',
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

