import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useAppSelector} from '../redux/hook';
import styles from '../HomeComponent/Home.styles';
import {RootStackScreenProps} from '../navigator/types';

export type MyProductsParamList = undefined;

const MyProducts = ({navigation}: RootStackScreenProps<'MyProducts'>) => {
  // Getting item has bought
  const products = useAppSelector(state => state.products.products);

  return (
    <View style={styles.productContainer}>
      <FlatList
        data={products}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Detail', {
                productID: item.id,
                productTitle: item.title,
              })
            }>
            <View style={styles.products}>
              <Image
                source={{uri: item.image}}
                style={styles.imageProduct}></Image>
              <View>
                <Text style={styles.productName}>{item.title}</Text>
                <Text style={styles.productPrice}>{item.price}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default MyProducts;
