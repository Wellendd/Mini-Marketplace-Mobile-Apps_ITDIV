import {StyleSheet} from 'react-native';

const styleDetails = StyleSheet.create({
  detailProduct: {
    paddingVertical: 20,
    paddingHorizontal: 25,
    overflow: 'scroll',
  },
  imageDetails: {
    width: 250,
    height: 250,
    alignSelf: 'center',
    marginBottom: 20,
  },
  detailsContainer: {
    borderTopWidth: 1,
    gap: 30,
  },
  nameProduct: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginVertical: 10,
  },
  priceText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  priceProduct: {
    marginTop: 5,
    fontSize: 14,
    color: 'black',
  },
  descriptionText: {
    marginTop: 15,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  descriptionProduct: {
    marginTop: 5,
    color: 'black',
    fontSize: 14,
  },
  buyButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8874ac',
    padding: 10,
    borderRadius: 5,
    elevation: 5,
    marginBottom: 30,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  sellButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 5,
    elevation: 5,
    marginBottom: 30,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  buyButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  sellButtonText: {
    color: '#8874ac',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default styleDetails;
