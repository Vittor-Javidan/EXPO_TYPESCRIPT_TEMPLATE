import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';


export default function HelloWorld() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Hello World</Text>
        <Text style={styles.subtitle}>
          This is the first page of your app.
        </Text>
      </View>
      <Link href={'/Page2'} style={styles.link}>
        Page 2
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#000',
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    maxWidth: 960,
    marginHorizontal: 'auto',
  },
  title: {
    fontSize: 64,
    fontWeight: 'bold',
    color: '#38434D',
  },
  subtitle: {
    fontSize: 36,
    color: '#38434D',
  },
  link: {
    color: '#38434D',
  },
});
