import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';

function ProductScreen() {
  // Simulando uma lista de produtos com imagens
  const products = [
    { id: 1, name: 'Caminha para filhote', image: require('../../assets/images/cama-para-cachorros-trend-xadrez-anymous.png') },
    // { id: 2, name: 'Produto 2', image: require('./images/product2.jpg') },
    // { id: 3, name: 'Produto 3', image: require('./images/product3.jpg') },
    // Adicione mais produtos com suas respectivas imagens conforme necessário
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {products.map((product) => (
        <View key={product.id} style={styles.productItem}>
          <Image
            source={product.image}
            style={styles.productImage}
            resizeMode="cover"
          />
          <Text style={styles.productName}>{product.name}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },
  productItem: {
    backgroundColor: 'white',
    width: '80%',
    marginBottom: 20,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  productImage: {
    width: '100%',
    height: 200, // Altura da imagem
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 16,
  },
});

export default ProductScreen;