import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  backgroundHome: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#8874ac',
  },
  Container: {
    width: '90%',
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: 'white',
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 15,
  },
  SearchLogo: {
    width: 30,
    height: 30,
  },
  input: {
    flex: 1,
    fontSize: 18,
    paddingLeft: 15,
  },
  myProductButton: {
    backgroundColor: 'white',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 170,
  },
  myProductText: {
    fontSize: 18,
    color: 'black',
    fontWeight: '500',
  },
  myProductArrow: {
    width: 15,
    height: 20,
    justifyContent: 'center',
  },
  availableProducts: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginTop: 15,
  },
  Container2: {
    width: '85%',
  },
  availableText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  viewIcon: {
    width: 35,
    height: 35,
  },
  head: {
    paddingTop: 25,
    paddingBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  productContainer: {
    height: Dimensions.get('window').height * 0.65,
  },

  //ListView
  products: {
    width: '95%',
    elevation: 5,
    borderRadius: 8,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 15,
    padding: 10,
    margin: 8,
  },
  imageProduct: {
    height: 50,
    width: 50,
    alignSelf: 'center',
  },
  productInfo: {
    width: '100%',
  },
  productName: {
    fontSize: 16,
    width: '70%',
    fontWeight: 'bold',
    color: 'black',
  },
  productPrice: {
    fontSize: 15,
    color: 'black',
  },

  //GridView
  gridproducts: {
    flexDirection: 'column',
    elevation: 5,
    borderRadius: 8,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
    gap: 5,
    margin: 10,
    width: 150,
  },
  gridimageProduct: {
    width: 65,
    height: 65,
  },

  gridproductInfo: {
    width: '70%',
  },
  gridproductName: {
    textAlign: 'left',
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  gridproductPrice: {
    color: 'black',
    fontSize: 14,
  },

  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  floatingButton: {
    position: 'absolute',
    bottom: 16,
    right: 0,
    backgroundColor: 'white',
    borderRadius: 50,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
  },
  floatingButtonImage: {
    width: 25,
    height: 27,
  },
  coinBalance: {
    position: 'absolute',
    right: 0,
    top: '65%',
    transform: [{translateY: -12}],
    backgroundColor: 'white',
    elevation: 10,
    paddingVertical: 10,
    paddingLeft: 40,
    paddingRight: 18,
    borderRadius: 10,
    alignItems: 'flex-end',
    justifyContent: 'center',
    zIndex: 10,
  },
  coinBalances: {
    fontSize: 30,
    color: '#7947e1',
    fontWeight: '900',
  },
  myCoins: {
    fontSize: 16,
  },
});

export default styles;
