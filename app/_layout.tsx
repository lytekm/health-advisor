// app/_layout.tsx
import { Stack } from 'expo-router';
import { ThemeProvider } from '@/src/theme/ThemeProvider';
import { useTheme } from '@/src/theme/useTheme';
import { Box } from '@/src/components/UI/Themed';
import { StatusBar } from 'expo-status-bar';

function AppShell() {
  const t = useTheme();
  return (
    <Box style={{ flex: 1, backgroundColor: t.colors.bg }}>
      <StatusBar style={t.isDark ? 'light' : 'dark'} />
      <Stack screenOptions={{ headerShown: false }} />
    </Box>
  );
}

export default function Root() {
  return (
    <ThemeProvider>
      <AppShell />
    </ThemeProvider>
  );
}
