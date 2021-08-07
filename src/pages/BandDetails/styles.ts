import {StyleSheet} from 'react-native';
import theme from '../../themes';

const styles = StyleSheet.create({
  SafeContainer: {
    backgroundColor: '#000',
    flex: 1,
  },
  Container: {
    backgroundColor: '#000000',
    flex: 1,
  },
  ScrollView: {
    backgroundColor: theme[0].bg,
  },
  TracksBox: {
    width: '100%',
    height: 900,
    zIndex: 3,
    padding: 30,
    paddingTop: 0,
    backgroundColor: '#000',
  },
  masterTitle: {
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
    color: '#fff',
    marginLeft: 24,
  },
  mainBox: {
    width: '100%',
    height: 90,
    flexDirection: 'row',
    marginTop: 15,
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
  imgPerfilCover: {
    position: 'absolute',
    top: 40,
    right: 20,
    zIndex: 999,
    borderColor: 'white',
    borderRadius: 900,
  },
  textTrackPlays: {
    color: '#B1B1B1',
    fontSize: 12,
  },
});

export default styles;
