import React, { useEffect } from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import db, { createTables, insertDefaultPasses, insertDefaultStations, insertDefaultBikes, fetchPasses } from '../database/db';

export default function Layout() {
  useEffect(() => {
    try {
      createTables();
      insertDefaultPasses();
      insertDefaultStations();  
      insertDefaultBikes();
      fetchPasses((data: any) => console.log('Passes:', data));
    } catch (error) {
      console.error('Error during database initialization:', error);
    }
  }, []);

  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = 'home-outline';

          if (route.name === 'index') iconName = focused ? 'home' : 'home-outline';
          else if (route.name === 'Stations') iconName = focused ? 'map' : 'map-outline';
          else if (route.name === 'PurchasePass') iconName = focused ? 'card' : 'card-outline';
          else if (route.name === 'BikeScreen') iconName = focused ? 'bicycle' : 'bicycle-outline';

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#00C853',
        tabBarInactiveTintColor: '#B0BEC5',
      })}
    >
      <Tabs.Screen name="index" options={{ title: 'Home', href: '/' }} />
      <Tabs.Screen name="Stations" options={{ title: 'Mapa', href: '/Stations' }} />
      <Tabs.Screen name="PurchasePass" options={{ title: 'Comprar Passe', href: '/PurchasePass' }} />
      <Tabs.Screen name="BikeScreen" options={{ title: 'Bicicletas', href: '/BikeScreen' }} />
      <Tabs.Screen
        name="Scanner"
        options={{
          href: null, 
          tabBarStyle: { display: 'none' }, 
        }}
      />
    </Tabs>
  );
}
