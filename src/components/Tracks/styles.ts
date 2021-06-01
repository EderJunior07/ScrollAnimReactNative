import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  SafeContainer: {
    width: '100%',
    height: 900,
    zIndex: 3,
    padding: 30,
    backgroundColor: '#000',
  },
  masterTitle: {
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
    color: '#fff',
  },
  mainBox: {
    width: '100%',
    height: 90,
    flexDirection: 'row',
    marginTop: 20,
  },
  firstColumnContent: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondColumnContent: {
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  thirdColumnContent: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 5,
  },
  textColor: {
    color: '#FFF',
  },
  textTrackPlays: {
    color: '#B1B1B1',
    fontSize: 12,
  },
});

export default styles;
