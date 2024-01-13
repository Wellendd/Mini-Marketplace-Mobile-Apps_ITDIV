import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  Alert,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {RootStackScreenProps} from '../navigator/types';
import styleDetails from './Detail.styles';
import {useAppDispatch, useAppSelector} from '../redux/hook';
import {add, remove} from '../myProducts/redux/myProductSlice';
import {addCoin, removeCoin} from '../minigames/redux/coinBalance';

export type DetailParamList = {
  productID: string;
  productTitle: string;
};

type ProductDetail = {
  id: string;
  title: string;
  price: number;
  description: string;
  image: string;
};

const Detail = ({navigation, route}: RootStackScreenProps<'Detail'>) => {
  // Used for MyProduct list
  const [productDetail, setProductDetail] = useState<ProductDetail | null>(
    null,
  );

  const dispatch = useAppDispatch();

  // Getting Coin Balance
  const balance = useAppSelector(c => c.CoinBalance.balance);

  //
  const isMyProduct = useAppSelector(state =>
    state.products.products.some(p => p.id === route.params.productID),
  );

  // Getting Product from API by productID
  const getProductDetails = async () => {
    const response = await fetch(
      `https://fakestoreapi.com/products/${route.params.productID}`,
    );

    const productDetails = await response.json();
    setProductDetail(productDetails);
  };

  useEffect(() => {
    getProductDetails();
  }, [route.params.productID]);

  // Validate Buy Button
  const handleButtonPress = () => {
    const productName = route.params.productTitle;
    const productPrice = productDetail?.price || 0;
    const newbalance = balance - productPrice;
    if (productPrice < balance) {
      dispatch(
        add({
          id: productDetail?.id || '',
          title: productDetail?.title || '',
          price: productPrice,
          image: productDetail?.image || '',
        }),
      );
      dispatch(removeCoin(productPrice));

      Alert.alert(
        'Success!',
        `${productName} was bought successfully!\nYour current balance is ${newbalance.toFixed(
          2,
        )}.`,
        [
          {
            text: 'OK',
            style: 'default',
          },
        ],
        {cancelable: false},
      );
    }
  };

  // Validate Sell Button
  const handleSellPress = () => {
    const productName = route.params.productTitle;
    const productPrice = productDetail?.price || 0;

    dispatch(remove(route.params.productID));
    dispatch(addCoin(productPrice));

    const newbalance = balance + productPrice;

    Alert.alert(
      'Success!',
      `${productName} was sold successfully!\nYour current balance is ${newbalance.toFixed(
        2,
      )}.`,
      [
        {
          text: 'OK',
          style: 'default',
        },
      ],
      {cancelable: false},
    );
  };

  if (!productDetail) {
    return (
      <View style={styleDetails.detailProduct}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styleDetails.detailProduct}>
          <Image
            source={{uri: productDetail.image}}
            style={styleDetails.imageDetails}></Image>
          <View style={styleDetails.detailsContainer}>
            <View>
              <Text style={styleDetails.nameProduct}>
                {productDetail.title}
              </Text>
              <Text style={styleDetails.priceText}>Price</Text>
              <Text style={styleDetails.priceProduct}>
                {productDetail.price} coins
              </Text>
              <Text style={styleDetails.descriptionText}>Description</Text>
              <Text style={styleDetails.descriptionProduct}>
                {productDetail.description}
              </Text>
            </View>

            {/* Validate item if the item inside myProduct, then show Sell button, else show buy button */}
            {isMyProduct ? (
              <TouchableOpacity
                style={styleDetails.sellButton}
                onPress={() => {
                  handleSellPress();
                }}>
                <Text style={styleDetails.sellButtonText}>Sell</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styleDetails.buyButton}
                onPress={() => {
                  handleButtonPress();
                }}>
                <Text style={styleDetails.buyButtonText}>Buy</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Detail;
