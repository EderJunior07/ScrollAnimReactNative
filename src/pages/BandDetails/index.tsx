import React, {useContext, useEffect, useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Animated,
  LogBox,
  TouchableOpacity,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Extrapolate} from 'react-native-reanimated';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Tracks from '../../components/Tracks';
import {RectButton} from 'react-native-gesture-handler';
LogBox.ignoreAllLogs;

//https://medium.com/@thomasswolfs/react-native-the-full-authentication-flow-chapter-1-building-our-react-native-app-1e1d594a9830

const Main = () => {
  const [scrollY, setScrollY] = useState(new Animated.Value(0));

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <TouchableOpacity
        style={{
          zIndex: 21,
          width: 50,
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
          left: 10,
          top: 45,
          borderRadius: 5,
          position: 'absolute',
        }}>
        <Ionicons name="arrow-back" color="#FFF" size={24} />
      </TouchableOpacity>

      <RectButton
        rippleColor={'black'}
        style={{
          zIndex: 999,
          bottom: 30,
          right: 30,
          width: 70,
          height: 70,
          borderRadius: 70,
          backgroundColor: '#1DB954',
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          position: 'absolute',
        }}>
        <Ionicons name={'play'} size={24} style={{left: 2.5}} />
      </RectButton>

      <Animated.Text
        style={{
          color: '#FFF',
          position: 'absolute',
          fontSize: 18,
          alignSelf: 'center',
          top: 50,
          zIndex: 999,
          opacity: scrollY.interpolate({
            inputRange: [10, 160, 185],
            outputRange: [0, 0.5, 1],
            extrapolate: Extrapolate.CLAMP,
          }),
        }}>
        Billie Eilish
      </Animated.Text>

      <SafeAreaView style={styles.SafeContainer}>
        <Animated.View
          style={{
            zIndex: 20,
            justifyContent: 'center',
            width: '100%',
            backgroundColor: 'black',
            height: 110,
            position: 'absolute',
            opacity: scrollY.interpolate({
              inputRange: [10, 160, 185],
              outputRange: [0, 0, 1],
              extrapolate: Extrapolate.CLAMP,
            }),
          }}
        />

        <View style={{flex: 0.8, alignItems: 'flex-end', paddingRight: 20}}>
          <Animated.Image
            source={{
              uri:
                'https://i.insider.com/60d0fd85db3f80001848d11a?width=1136&format=jpeg',
            }}
            style={{
              position: 'absolute',
              top: 40,
              right: 20,
              zIndex: 999,
              borderRadius: 200,
              borderColor: '#FFF',
              width: scrollY.interpolate({
                inputRange: [10, 160, 185],
                outputRange: [150, 100, 60],
                extrapolate: Extrapolate.CLAMP,
              }),
              height: scrollY.interpolate({
                inputRange: [10, 160, 185],
                outputRange: [150, 100, 60],
                extrapolate: Extrapolate.CLAMP,
              }),
              borderWidth: scrollY.interpolate({
                inputRange: [10, 160, 185],
                outputRange: [6, 4, 0],
                extrapolate: Extrapolate.CLAMP,
              }),
            }}
            resizeMode="cover"
          />
        </View>

        <Animated.ScrollView
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {y: scrollY},
                },
              },
            ],
            {useNativeDriver: false},
          )}>
          <View style={{overflow: 'hidden'}}>
            <Animated.Image
              source={{
                uri: 'https://pbs.twimg.com/media/D2zCwXdU4AAnzHN.jpg',
              }}
              style={{
                width: '100%',
                height: 600,
                transform: [
                  {
                    scaleX: scrollY.interpolate({
                      inputRange: [10, 160, 185],
                      outputRange: [1, 1.5, 1.75],
                      extrapolate: Extrapolate.CLAMP,
                    }),
                  },
                  {
                    scaleY: scrollY.interpolate({
                      inputRange: [10, 160, 185],
                      outputRange: [1, 1.5, 1.75],
                      extrapolate: Extrapolate.CLAMP,
                    }),
                  },
                ],
              }}
              resizeMode={'cover'}
            />
            <View
              style={{
                zIndex: 9999,
                flexDirection: 'row',
                top: -250,
              }}>
              <View style={{flex: 1, alignItems: 'center'}}>
                <Animated.Text
                  style={{
                    color: '#FFF',
                    fontFamily: 'Poppins-Bold',
                    fontSize: 64,
                    opacity: scrollY.interpolate({
                      inputRange: [10, 160, 185],
                      outputRange: [1, 0.5, 0],
                      extrapolate: Extrapolate.CLAMP,
                    }),
                  }}>
                  Billie Eilish
                </Animated.Text>
                <Animated.Text
                  style={{
                    color: '#FFF',
                    fontSize: 10,
                    letterSpacing: 2,
                    opacity: scrollY.interpolate({
                      inputRange: [10, 160, 185],
                      outputRange: [1, 0.5, 0],
                      extrapolate: Extrapolate.CLAMP,
                    }),
                  }}>
                  52.996.376 OUVINTES MENSAIS
                </Animated.Text>
              </View>
            </View>
            <LinearGradient
              style={[StyleSheet.absoluteFill, {zIndex: 2}]}
              start={{x: 0, y: 0.3}}
              end={{x: 0, y: 1}}
              colors={['transparent', 'black', 'black']}
            />
          </View>

          <Animated.View
            style={
              (styles.TracksBox,
              [
                {
                  top: scrollY.interpolate({
                    inputRange: [10, 160, 185],
                    outputRange: [-200, -290, -450],
                    extrapolate: Extrapolate.CLAMP,
                  }),
                },
              ])
            }>
            <Text style={styles.masterTitle}>Músicas</Text>
            <TouchableOpacity style={styles.mainBox}>
              <View style={styles.firstColumnContent}>
                <Text style={{color: 'white'}}>1</Text>
              </View>
              <View style={styles.secondColumnContent}>
                <Image
                  source={{
                    uri:
                      'https://i.scdn.co/image/ab67616d0000b2732a038d3bf875d23e4aeaa84e',
                  }}
                  style={{
                    height: 52,
                    width: 52,
                    backgroundColor: '#FFF',
                  }}
                />
              </View>
              <View style={styles.thirdColumnContent}>
                <Text style={[styles.textColor, {marginBottom: 5}]}>
                  Billie Eilish
                </Text>
                <Text style={styles.textTrackPlays}>Happier Than Ever</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mainBox}>
              <View style={styles.firstColumnContent}>
                <Text style={{color: 'white'}}>1</Text>
              </View>
              <View style={styles.secondColumnContent}>
                <Image
                  source={{
                    uri:
                      'https://i.scdn.co/image/ab67616d0000b2732a038d3bf875d23e4aeaa84e',
                  }}
                  style={{
                    height: 52,
                    width: 52,
                    backgroundColor: '#FFF',
                  }}
                />
              </View>
              <View style={styles.thirdColumnContent}>
                <Text style={[styles.textColor, {marginBottom: 5}]}>
                  Billie Eilish
                </Text>
                <Text style={styles.textTrackPlays}>Happier Than Ever</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mainBox}>
              <View style={styles.firstColumnContent}>
                <Text style={{color: 'white'}}>1</Text>
              </View>
              <View style={styles.secondColumnContent}>
                <Image
                  source={{
                    uri:
                      'https://i.scdn.co/image/ab67616d0000b2732a038d3bf875d23e4aeaa84e',
                  }}
                  style={{
                    height: 52,
                    width: 52,
                    backgroundColor: '#FFF',
                  }}
                />
              </View>
              <View style={styles.thirdColumnContent}>
                <Text style={[styles.textColor, {marginBottom: 5}]}>
                  Billie Eilish
                </Text>
                <Text style={styles.textTrackPlays}>Happier Than Ever</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mainBox}>
              <View style={styles.firstColumnContent}>
                <Text style={{color: 'white'}}>1</Text>
              </View>
              <View style={styles.secondColumnContent}>
                <Image
                  source={{
                    uri:
                      'https://i.scdn.co/image/ab6761610000e5ebed3b89aa602145fde71a163a',
                  }}
                  style={{
                    height: 52,
                    width: 52,
                    backgroundColor: '#FFF',
                  }}
                />
              </View>
              <View style={styles.thirdColumnContent}>
                <Text style={[styles.textColor, {marginBottom: 5}]}>
                  Billie Eilish
                </Text>
                <Text style={styles.textTrackPlays}>Happier Than Ever</Text>
              </View>
            </TouchableOpacity>
          </Animated.View>
        </Animated.ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Main;
