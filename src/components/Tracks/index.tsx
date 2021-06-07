import React, {useEffect, useState} from 'react';
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  NativeModules,
  NativeEventEmitter,
  Platform,
} from 'react-native';
const {RNSoundPlayer} = NativeModules;

import styles from './styles';
import SoundPlayer from 'react-native-sound-player';
import Sound from 'react-native-sound';
import useSound from 'react-native-use-sound';

const Tracks = ({name, item, index, preview_url}: any) => {
  const [playing, setPlaying] = useState(false);

  const [play, pause, stop, data] = useSound(preview_url, {
    soundEnabled: playing,
  });

  const handlePlay = () => {
    setPlaying(true);
    if (data.isPlaying) {
      stop();

      setPlaying(false);
    } else {
      play();
    }
  };

  return (
    <>
      <TouchableOpacity
        style={styles.mainBox}
        onPress={() => {
          handlePlay();
        }}>
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
          <Text style={[styles.textColor, {marginBottom: 5}]}>{name}</Text>
          <Text style={styles.textTrackPlays}>{}</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default Tracks;
