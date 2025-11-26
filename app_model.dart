import 'package:flutter/material.dart';

class AppModel {
  final String id;
  final String name;
  final String description;
  final IconData icon;
  final Color color;
  final List<String> features;
  final String route;

  AppModel({
    required this.id,
    required this.name,
    required this.description,
    required this.icon,
    required this.color,
    required this.features,
    required this.route,
  });
}

class BuySphereApp {
  final String id;
  final String name;
  final String shortDescription;
  final String fullDescription;
  final IconData icon;
  final Color primaryColor;
  final List<String> features;
  final String route;
  final bool isActive;

  BuySphereApp({
    required this.id,
    required this.name,
    required this.shortDescription,
    required this.fullDescription,
    required this.icon,
    required this.primaryColor,
    required this.features,
    required this.route,
    this.isActive = true,
  });
}

