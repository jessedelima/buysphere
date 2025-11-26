import 'package:flutter/material.dart';
import '../models/app_model.dart';
import '../utils/colors.dart';

class AppCard extends StatelessWidget {
  final BuySphereApp app;
  final VoidCallback onTap;

  const AppCard({
    super.key,
    required this.app,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    return Card(
      elevation: 3,
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(16),
      ),
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(16),
        child: Container(
          padding: const EdgeInsets.all(16),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(16),
            gradient: LinearGradient(
              begin: Alignment.topLeft,
              end: Alignment.bottomRight,
              colors: [
                app.primaryColor.withOpacity(0.1),
                app.primaryColor.withOpacity(0.05),
              ],
            ),
          ),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Container(
                width: 48,
                height: 48,
                decoration: BoxDecoration(
                  color: app.primaryColor,
                  borderRadius: BorderRadius.circular(12),
                ),
                child: Icon(
                  app.icon,
                  color: BuySphereColors.white,
                  size: 28,
                ),
              ),
              const SizedBox(height: 12),
              Text(
                app.name,
                style: const TextStyle(
                  fontSize: 14,
                  fontWeight: FontWeight.bold,
                  color: BuySphereColors.textPrimary,
                ),
                textAlign: TextAlign.center,
                maxLines: 1,
                overflow: TextOverflow.ellipsis,
              ),
              const SizedBox(height: 4),
              Text(
                app.shortDescription,
                style: const TextStyle(
                  fontSize: 11,
                  color: BuySphereColors.textSecondary,
                ),
                textAlign: TextAlign.center,
                maxLines: 2,
                overflow: TextOverflow.ellipsis,
              ),
            ],
          ),
        ),
      ),
    );
  }
}

