import { Box, Text } from '@/src/components/UI/Themed';
import { useTheme } from '@/src/theme/useTheme';

export default function CameraPage() {
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
      <Text variant="headline">📷 Camera Page</Text>
      <Text muted>This will be the barcode scanner screen.</Text>
    </Box>
  );
}
