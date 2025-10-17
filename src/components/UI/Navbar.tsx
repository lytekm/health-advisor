// src/components/ui/Navbar.tsx
import React from 'react';
import { View, Pressable } from 'react-native';
import { Link, usePathname } from 'expo-router';
import { Text } from '@/src/components/UI/Themed';
import { useTheme } from '@/src/theme/useTheme';

const links = [
  { name: 'Home', href: '/' },
  { name: 'Auth', href: '/auth' },
  { name: 'Camera', href: '/camera' },
];

export const Navbar = () => {
  const pathname = usePathname();
  const t = useTheme();

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderTopWidth: 2,
        borderTopColor: t.colors.border,
        paddingVertical: t.spacing.lg,
        backgroundColor: t.colors.surface,
      }}
    >
      {links.map((link) => {
        const active = pathname === link.href;
        return (
          <Link key={link.href} href={link.href} asChild>
            <Pressable>
              <Text
                variant="label"
                style={{
                  color: active ? t.colors.primary : t.colors.textMuted,
                }}
              >
                {link.name}
              </Text>
            </Pressable>
          </Link>
        );
      })}
    </View>
  );
};
