// src/PrivateRoute.tsx
import React from 'react';
import { useAuth } from './AuthContext';
import { View, Text, StyleSheet } from 'react-native';

const PrivateRoute = (Component: React.ComponentType<any>) => {
  return (props: any) => {
    const { isLoggedIn } = useAuth();
    if (!isLoggedIn) {
      return (
        <View style={styles.container}>
          <Text style={styles.text}>You must be logged in to access this page</Text>
        </View>
      );
    }
    return <Component {...props} />;
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  text: {
    color: '#fff',
    fontSize: 18,
  },
});

export default PrivateRoute;
