import React from 'react';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';
import Colors from '_constants/Colors';
import { TabBarIcon } from '_components/TabBarIcon';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="(index)"
        // TODO: Type
        options={(): any => ({
          title: 'Feed',
          tabBarIcon: ({ color }: any) => (
            <TabBarIcon name="list" color={color} />
          ),
        })}
      />
    </Tabs>
  );
}

//
