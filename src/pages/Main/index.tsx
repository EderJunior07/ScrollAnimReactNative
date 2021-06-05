import React, {useState} from 'react';
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
import onLogin from '../../services/AuthenticateHandler';
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
        onPress={() => onLogin()}
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
        Her's
      </Animated.Text>

      <SafeAreaView style={styles.SafeContainer}>
        <Animated.View
          style={{
            zIndex: 20,
            justifyContent: 'center',
            width: '100%',
            backgroundColor: '#000',
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
                'https://images-na.ssl-images-amazon.com/images/I/71ph8S-IJ2L._AC_SL1500_.jpg',
            }}
            style={{
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
              borderRadius: 900,
              borderWidth: scrollY.interpolate({
                inputRange: [10, 160, 185],
                outputRange: [6, 4, 0],
                extrapolate: Extrapolate.CLAMP,
              }),
              position: 'absolute',
              top: 40,
              right: 20,
              zIndex: 999,
              borderColor: '#FFF',
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
                uri:
                  'https://www.londoninstereo.com/lisnew/wp-content/uploads/2018/08/hers.jpg',
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
              resizeMode="cover"
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
                    fontSize: 62,
                    opacity: scrollY.interpolate({
                      inputRange: [10, 160, 185],
                      outputRange: [1, 0.5, 0],
                      extrapolate: Extrapolate.CLAMP,
                    }),
                  }}>
                  Her's
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
                  1.905.532 OUVINTES MENSAIS
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
            style={[
              styles.TracksBox,
              {
                top: scrollY.interpolate({
                  inputRange: [10, 160, 185],
                  outputRange: [-200, -290, -450],
                  extrapolate: Extrapolate.CLAMP,
                }),
              },
            ]}>
            <Text style={styles.masterTitle}>Músicas</Text>
            {[...Array(5)].map((_, i) => (
              <Tracks key={i} />
            ))}
          </Animated.View>
        </Animated.ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Main;
