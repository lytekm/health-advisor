# Health Advisor App (name pending)

This is a simple application for tracking your calories and macros based on your specific fitness goals.

## Features

### Macro and Calorie tracking

Scan foods and create meals for easy tracking of calories and macros throughout the day.

### Health Scoring

Foods you scan get a health score based on how good they are for you and how much they align with your current goals.

### Analytics

Analyze your eating habits over different time frame to find gaps in your nutrition.

### Excersise tracking

Track your excersise and create workout plans and goals for yourself.

## Strcuture

### File structure

```
myfitnessapp/
├── app/                          # (if using Expo Router v3+)
│   ├── _layout.tsx               # Root layout for navigation stack/tabs
│   ├── index.tsx                 # Home screen
│   ├── scan/                     # Barcode scanner flow
│   │   ├── index.tsx
│   │   └── result.tsx
│   ├── profile/
│   │   ├── index.tsx
│   │   └── edit.tsx
│   └── settings/
│       └── index.tsx
│
├── src/
│   ├── api/                      # API clients and services
│   │   ├── foodApi.ts            # Handles fetching food info by barcode
│   │   ├── authApi.ts
│   │   └── index.ts
│   │
│   ├── components/               # Reusable UI components
│   │   ├── common/
│   │   │   ├── Button.tsx
│   │   │   ├── TextInput.tsx
│   │   │   ├── Card.tsx
│   │   │   └── Loader.tsx
│   │   ├── food/
│   │   │   ├── FoodCard.tsx
│   │   │   └── FoodScore.tsx
│   │   └── layout/
│   │       ├── Header.tsx
│   │       └── ScreenContainer.tsx
│   │
│   ├── contexts/                 # React Context providers
│   │   ├── AuthContext.tsx
│   │   ├── UserGoalsContext.tsx
│   │   └── ThemeContext.tsx
│   │
│   ├── hooks/                    # Custom reusable hooks
│   │   ├── useAuth.ts
│   │   ├── useFetch.ts
│   │   ├── useScanner.ts
│   │   └── useDebounce.ts
│   │
│   ├── models/                   # TypeScript interfaces & types
│   │   ├── Food.ts
│   │   ├── User.ts
│   │   ├── Goal.ts
│   │   └── index.ts
│   │
│   ├── navigation/               # Navigation configuration (if not using Expo Router)
│   │   ├── AppNavigator.tsx
│   │   └── AuthNavigator.tsx
│   │
│   ├── screens/                  # (If not using /app routing)
│   │   ├── HomeScreen.tsx
│   │   ├── ScanScreen.tsx
│   │   ├── FoodDetailScreen.tsx
│   │   ├── LoginScreen.tsx
│   │   ├── RegisterScreen.tsx
│   │   └── SettingsScreen.tsx
│   │
│   ├── services/                 # Core logic or native integrations
│   │   ├── barcodeScanner.ts     # wraps expo-camera or vision
│   │   ├── nutritionScore.ts     # your scoring algorithm
│   │   └── storage.ts            # AsyncStorage abstraction
│   │
│   ├── theme/                    # Theme & design tokens
│   │   ├── colors.ts
│   │   ├── spacing.ts
│   │   └── typography.ts
│   │
│   ├── utils/                    # General utilities and helpers
│   │   ├── formatters.ts
│   │   ├── validators.ts
│   │   └── constants.ts
│   │
│   └── index.ts                  # Entry point for exports, helpers, etc.
│
├── assets/                       # Images, icons, fonts
│   ├── images/
│   ├── icons/
│   └── fonts/
│
├── .env                          # API keys, endpoints, etc.
├── app.config.ts                 # Expo config file
├── tsconfig.json
├── package.json
└── README.md
```
