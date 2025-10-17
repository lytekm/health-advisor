import { Box, Text } from '@/src/components/UI/Themed';
import { useTheme } from '@/src/theme/useTheme';

export default function HomePage() {
  const t = useTheme();
  return (
    <Box
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: t.colors.bg,
      }}
    >
      <Text variant="headline">🏠 Home Page</Text>
      <Text muted>Welcome to your health scoring app MVP.</Text>
    </Box>
  );
}
