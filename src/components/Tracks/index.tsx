import React from 'react';
import {Image, Text, View} from 'react-native';

import styles from './styles';

const Tracks = () => {
  return (
    <>
      <View style={styles.mainBox}>
        <View style={styles.firstColumnContent}>
          <Text style={{color: '#FFF'}}>1</Text>
        </View>
        <View style={styles.secondColumnContent}>
          <Image
            source={{
              uri:
                'https://images-na.ssl-images-amazon.com/images/I/71ph8S-IJ2L._AC_SL1500_.jpg',
            }}
            style={{
              height: 52,
              width: 52,
              backgroundColor: '#FFF',
            }}
          />
        </View>
        <View style={styles.thirdColumnContent}>
          <Text style={[styles.textColor, {marginBottom: 5}]}>Music Name</Text>
          <Text style={styles.textTrackPlays}>9.999.999</Text>
        </View>
      </View>
    </>
  );
};

export default Tracks;
