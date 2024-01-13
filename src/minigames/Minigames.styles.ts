import {StyleSheet} from 'react-native';

const styleMinigames = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 30,
    gap: 60,
  },
  coinsContainer: {
    flexDirection: 'row',
    gap: 25,
    justifyContent: 'center',
  },
  goldCoin: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  silverCoin: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bronzeCoin: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  coinImage: {
    width: 45,
    height: 45,
  },
  prizeContainer: {
    width: '80%',
    alignItems: 'center',
    alignSelf: 'center',
    gap: 30,
  },
  clickText: {
    fontSize: 24,
    color: 'black',
    textAlign: 'center',
  },
  eggImage: {
    width: 150,
    height: 225,
  },
  congratsText: {
    textAlign: 'center',
    fontWeight: '800',
    fontSize: 26,
    color: 'black',
  },
  gotCoin: {
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
  },
  gotCoin2: {
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
    fontWeight: '700',
  },
  images: {},
  coinImages: {
    width: 70,
    height: 70,
    alignSelf: 'center',
  },
});

export default styleMinigames;
