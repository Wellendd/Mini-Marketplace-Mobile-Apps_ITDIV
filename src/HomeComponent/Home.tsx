import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './Home.styles';
import SearchIcon from '../assets/SearchIcon';
import ArrowIcon from '../assets/arrowIcon';
import ListViewIcon from '../assets/ListViewIcon';
import {RootStackScreenProps} from '../navigator/types';
import {useAppSelector} from '../redux/hook';
import GridViewIcon from '../assets/GridViewIcon';

export type HomeParamList = undefined;

interface Product {
  id: string;
  title: string;
  image: string;
  price: string;
}

const Home = ({navigation}: RootStackScreenProps<'Home'>) => {
  // Used for SearchBox
  const [searchText, setSearchText] = useState('');

  // Used for product List
  const [products, setProducts] = useState<Product[] | null>(null);

  // Used for Searching Product
  const [filteredProducts, setFilteredProducts] = useState<Product[] | null>(
    null,
  );

  // To Validate Grid/View List
  const [isGridView, setIsGridView] = useState(false);

  // Get Coin Balance
  const balance = useAppSelector(c => c.CoinBalance.balance);

  // Getting data from API
  const getData = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const dataResponse = await response.json();
    setProducts(dataResponse);
    setFilteredProducts(dataResponse);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (products) {
      const filtered = products.filter(item =>
        item.title.toLowerCase().includes(searchText.toLowerCase()),
      );
      setFilteredProducts(filtered);
    }
  }, [searchText, products]);

  // Function to toggle Grid / View list
  const toggleView = () => {
    setIsGridView(prev => !prev);
  };

  return (
    <SafeAreaView style={styles.backgroundHome}>
      <View style={styles.Container}>
        {/* Search Box */}
        <View style={styles.searchBox}>
          <Text>{SearchIcon(styles.SearchLogo)}</Text>
          <TextInput
            style={styles.input}
            placeholder="Search Product..."
            onChangeText={text => setSearchText(text)}
            value={searchText}
          />
        </View>

        {/* My Products */}
        <TouchableOpacity
          style={styles.myProductButton}
          onPress={() => {
            navigation.navigate('MyProducts');
          }}>
          <Text style={styles.myProductText}>My Products</Text>
          <Text style={styles.myProductArrow}>
            {ArrowIcon(styles.myProductArrow)}
          </Text>
        </TouchableOpacity>

        {/* Coin Balance */}
        <View style={styles.coinBalance}>
          <Text style={styles.coinBalances}>{balance.toFixed(2)}</Text>
          <Text style={styles.myCoins}>My Coins</Text>
        </View>
      </View>

      {/* Product List */}
      <View style={styles.availableProducts}>
        <View style={styles.Container2}>
          <View style={styles.head}>
            <Text style={styles.availableText}>Available Products</Text>

            {/* Toggle Grid/View List */}
            <TouchableOpacity onPress={toggleView}>
              <Text>
                {isGridView
                  ? GridViewIcon(styles.viewIcon)
                  : ListViewIcon(styles.viewIcon)}
              </Text>
            </TouchableOpacity>
          </View>

          {/* Printing ProductList */}
          {filteredProducts ? (
            <View style={styles.productContainer}>
              {isGridView ? (
                <FlatList
                  data={filteredProducts}
                  numColumns={2} // Adjust as needed
                  key={isGridView ? 'grid' : 'list'}
                  renderItem={({item}) => (
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate('Detail', {
                          productID: item.id,
                          productTitle: item.title,
                        })
                      }>
                      <View style={styles.gridproducts}>
                        <Image
                          source={{uri: item.image}}
                          style={styles.gridimageProduct}
                        />
                        <View style={styles.gridproductInfo}>
                          <Text style={styles.gridproductName}>
                            {item.title.length > 25
                              ? `${item.title.slice(0, 25)}...`
                              : item.title}
                          </Text>
                          <Text style={styles.gridproductPrice}>
                            {item.price} coins
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  )}
                  showsVerticalScrollIndicator={false}
                />
              ) : (
                <FlatList
                  data={filteredProducts}
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
                          style={styles.imageProduct}
                        />
                        <View style={styles.productInfo}>
                          <Text style={styles.productName}>{item.title}</Text>
                          <Text style={styles.productPrice}>
                            {item.price} coins
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  )}
                  showsVerticalScrollIndicator={false}
                />
              )}
            </View>
          ) : (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size={'large'} />
            </View>
          )}

          {/* Minigame button */}
          <TouchableOpacity
            style={styles.floatingButton}
            onPress={() => {
              navigation.navigate('Minigame');
            }}>
            <Image
              source={require('./../assets/egg-full.png')}
              style={styles.floatingButtonImage}></Image>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
