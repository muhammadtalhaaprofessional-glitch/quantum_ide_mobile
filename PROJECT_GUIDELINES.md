# Quantum IDE Mobile - Project Guidelines

## Project Goal

Build a professional Android/iOS application for Quantum IDE using React Native + Expo.

This mobile application is NOT a copy of the website.

It is a native mobile experience that communicates with the existing FastAPI backend.

---

## Tech Stack

- Expo SDK 57
- React Native
- TypeScript
- Expo Router
- Zustand
- Axios
- React Hook Form
- Zod
- AsyncStorage
- Expo Secure Store

---

## Architecture

Presentation Layer
↓

Services Layer
↓

API Layer
↓

FastAPI Backend
↓

SQLite Database

---

## Folder Structure

src/

app/

components/

api/

services/

store/

theme/

hooks/

types/

utils/

constants/

assets/

---

## Rules

Never call APIs directly inside screens.

Never hardcode colors.

Keep screens under 300 lines.

Reusable UI belongs inside components.

Business logic belongs inside services.

API requests belong inside api.

Global state belongs inside store.

---

## Design

Theme:

Premium

Dark

Futuristic

Inspired by:

- IBM Quantum
- GitHub Dark
- VS Code
- Apple Vision Pro

---

## Code Quality

Always use TypeScript.

Prefer reusable components.

Avoid duplicate code.

Explain every generated file before creating it.

Never remove existing functionality without asking.
