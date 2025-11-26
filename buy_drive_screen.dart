import 'package:flutter/material.dart';
import '../../utils/colors.dart';

class BuyDriveScreen extends StatelessWidget {
  const BuyDriveScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('BuyDrive'),
        backgroundColor: BuySphereColors.buyDrive,
      ),
      body: const Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(
              Icons.location_on,
              size: 80,
              color: BuySphereColors.buyDrive,
            ),
            SizedBox(height: 20),
            Text(
              'BuyDrive',
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
                'Transporte de pessoas e pequenas entregas com mapa interativo móvel',
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

