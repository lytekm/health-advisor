// app/_layout.tsx
import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from '@/src/theme/ThemeProvider';
import { useTheme } from '@/src/theme/useTheme';
import { Box } from '@/src/components/UI/Themed';
import { Navbar } from '@/src/components/UI/Navbar';

export default function RootLayout() {
  return (
    <ThemeProvider>
      <AppShell />
    </ThemeProvider>
  );
}

function AppShell() {
  const t = useTheme();
  return (
    <Box style={{ flex: 1, backgroundColor: t.colors.bg }}>
      <StatusBar style={t.isDark ? 'light' : 'dark'} />
      {/* 👇 This renders the active route (e.g., app/index.tsx) INSIDE ThemeProvider */}
      <Slot />
      <Navbar />
    </Box>
  );
}
