import React from 'react';
import {Link} from 'expo-router';
import {Text, View} from 'react-native';
import {styles} from './styles';
import {MotiView} from 'moti';

export default function Home() {
  return (
    <MotiView
      style={styles.motiView}
      from={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{type: 'timing', duration: 500}}>
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
    </MotiView>
  );
}
