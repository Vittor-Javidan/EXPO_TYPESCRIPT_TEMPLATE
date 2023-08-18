import React from 'react';
import {styles} from './styles';
import {MotiView} from 'moti';
import HelloWorld from '@Components/HelloWorld';

export default function Home() {
  return (
    <MotiView
      style={styles.motiView}
      from={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{type: 'timing', duration: 500}}
    >
      <HelloWorld />
    </MotiView>
  );
}
