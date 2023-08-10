import React from 'react';
import { ExpoRoot } from 'expo-router';

declare var require: {
  context: (path: string, deep?: boolean, filter?: RegExp) => any;
};

// Create a client

export function App() {
  return <ExpoRoot context={require.context('./src/app')} />;
}
