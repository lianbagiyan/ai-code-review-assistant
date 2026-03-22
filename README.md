# AI Code Review Assistant

AI-powered code review assistant for frontend developers.

This project is a frontend tool that lets users paste code into an editor, choose a review mode, and receive structured feedback focused on code quality and developer experience.

## Features

- Monaco Editor integration
- Multiple review modes:
  - Readability
  - Best practices
  - React patterns
  - Performance risks
  - Release risk
- Structured review output
- Clean dark UI
- Mock fallback for demo mode

## Tech Stack

- React
- TypeScript
- Vite
- Monaco Editor
- OpenAI API
- CSS

## Why this project

Linters, formatters, and type systems are great at catching syntax and rule-based issues.  
This project explores a different layer of code review by focusing on:

- maintainability
- React-specific patterns
- readability
- release risks
- developer experience

The goal is not to replace ESLint, TypeScript, tests, or QA, but to complement them with structured AI-assisted review.

## Demo Mode

OpenAI API usage requires active billing.  
To keep the project fully demonstrable without requiring a live API connection, the app includes mock review fallback data.

This allows the interface and review flow to be tested and presented even when the API is unavailable.

## Screenshots

Add screenshots here.

## Local Setup

```bash
npm install
npm run dev
```
