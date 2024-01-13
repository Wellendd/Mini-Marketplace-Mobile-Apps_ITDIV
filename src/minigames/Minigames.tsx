import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {RootStackScreenProps} from '../navigator/types';
import styleMinigames from './Minigames.styles';
import {addCoin} from './redux/coinBalance';
import {useAppDispatch} from '../redux/hook';

export type MinigameParamList = undefined;

const Minigames = ({}: RootStackScreenProps<'Minigame'>) => {
  // To validate prize
  const [prizeClaimed, setPrizeClaimed] = useState(false);

  // Used for showing prize
  const [coin, setCoin] = useState('');

  // Used for showing Prize
  const [temp, setTemp] = useState(0);

  const dispatch = useAppDispatch();

  // Randomize Prize
  const generateRandomPrize = () => {
    const randomNum = Math.floor(Math.random() * 3);
    switch (randomNum) {
      case 0:
        setCoin('gold coin');
        setTemp(100);
        return 100;
      case 1:
        setCoin('silver coin');
        setTemp(50);
        return 50;
      case 2:
        setCoin('bronze coin');
        setTemp(20);
        return 20;
      default:
        return 0;
    }
  };

  // Validate Egg (Prize)
  const handleEggClick = () => {
    if (!prizeClaimed) {
      const prize = generateRandomPrize();
      dispatch(addCoin(prize));
      setPrizeClaimed(true);
    }
  };
  return (
    <View style={styleMinigames.container}>
      {/* Coin Prize List */}
      <View style={styleMinigames.coinsContainer}>
        <View style={styleMinigames.goldCoin}>
          <Image
            source={require('../assets/gold-coin.png')}
            style={styleMinigames.coinImage}
          />
          <Text>100</Text>
        </View>

        <View style={styleMinigames.silverCoin}>
          <Image
            source={require('../assets/silver-coin.png')}
            style={styleMinigames.coinImage}
          />
          <Text>50</Text>
        </View>

        <View style={styleMinigames.bronzeCoin}>
          <Image
            source={require('../assets/bronze-coin.png')}
            style={styleMinigames.coinImage}
          />
          <Text>20</Text>
        </View>
      </View>

      {/* Validate is prize already claimed or no */}
      {prizeClaimed ? (
        <View style={styleMinigames.prizeContainer}>
          <View>
            <Text style={styleMinigames.congratsText}>Congratulations!</Text>
            <Text style={styleMinigames.gotCoin}>You got a {coin}!</Text>
          </View>

          <TouchableOpacity style={styleMinigames.images}>
            {coin === 'gold coin' && (
              <Image
                source={require('../assets/gold-coin.png')}
                style={styleMinigames.coinImages}></Image>
            )}
            {coin === 'silver coin' && (
              <Image
                source={require('../assets/silver-coin.png')}
                style={styleMinigames.coinImages}></Image>
            )}
            {coin === 'bronze coin' && (
              <Image
                source={require('../assets/bronze-coin.png')}
                style={styleMinigames.coinImages}></Image>
            )}

            <Image
              source={require('../assets/egg-broken.png')}
              style={styleMinigames.eggImage}></Image>
          </TouchableOpacity>
          <Text style={styleMinigames.gotCoin2}>
            {temp} coins have been added to your balance
          </Text>
        </View>
      ) : (
        <View style={styleMinigames.prizeContainer}>
          <Text style={styleMinigames.clickText}>
            Click on the egg to get your prize!
          </Text>
          <TouchableOpacity onPress={handleEggClick}>
            <Image
              source={require('../assets/egg-full.png')}
              style={styleMinigames.eggImage}></Image>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Minigames;
