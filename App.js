import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View, Image} from 'react-native';

export default function App() {
  const [productName, setProductName] = useState('');
  const [products, setProducts] = useState([]);

  function addProduct() {
    const trimmedName = productName.trim();
    if (!trimmedName) return;

    setProducts((currentProducts) => [...currentProducts, trimmedName]);
    setProductName('');
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <StatusBar style="dark" />
        <Image source={require("./assets/imgfundo.png")}
            style={styles.imagem}
            resizeMode="contain"/>
        <Text style={styles.motivacao}>Vamos as compras </Text>
        <Text style={styles.title}>Lista de compras</Text>
        <Text style={styles.description}>Anote o que está faltando em casa.</Text>

        <View style={styles.form}>
          <TextInput
            value={productName}
            onChangeText={setProductName}
            onSubmitEditing={addProduct}
            placeholder="Ex.: Leite, pão, frutas"
            placeholderTextColor="#8A918B"
            returnKeyType="done"
            style={styles.input}
            accessibilityLabel="Nome do produto"
          />
          <Pressable
            onPress={addProduct}
            style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
            accessibilityRole="button"
            accessibilityLabel="Adicionar produto"
          >
            <Text style={styles.buttonText}>Adicionar</Text>
          </Pressable>
        </View>

        <View style={styles.listHeader}>
          <Text style={styles.listTitle}>Produtos</Text>
          <Text style={styles.count}>{products.length}</Text>
        </View>

        <View style={styles.productList}>
          {products.length === 0 ? (
            <Text style={styles.emptyMessage}>Sua lista está vazia. Adicione um produto acima.</Text>
          ) : (
            products.map((product, index) => (
              <View key={`${product}-${index}`} style={styles.productRow}>
                <View style={styles.productDot} />
                <Text style={styles.productName}>{product}</Text>
              </View>
            ))
          )}
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fccc60',
  },
  content: {
    flexGrow: 1,
    width: '100%',
    maxWidth: 560,
    alignSelf: 'center',
    paddingHorizontal: 24,
    paddingTop: 72,
    paddingBottom: 32,
  },
  imagem: {
    width: '100%',
    height: 450,
    marginBottom: 24,
  },
  motivacao: {
    color: '#728a2c',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1,
    marginBottom: 10,
  },
  title: {
    color: '#df3566',
    fontSize: 30,
    fontWeight: '700',
  },
  description: {
    fontSize: 16,
    marginTop: 8,
    marginBottom: 28,
     fontWeight: '700',
     color: '#ff9b3d', 
  },
  form: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 32,
  },
  input: {
    flex: 1,
    minWidth: 0,
    height: 52,
    borderWidth: 1,
    borderColor: '#ff9b3d',
    borderRadius: 8,
    backgroundColor: '#fffbfb',
    paddingHorizontal: 14,
    color: '#ff9b3d',
    fontSize: 15,
     fontWeight: '700',
  },
  button: {
    minHeight: 52,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 18,
    borderRadius: 8,
    backgroundColor: '#728a2c',
  },
  buttonPressed: {
    backgroundColor: '#bac664',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },
  listHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#728a2c',
  },
  listTitle: {
    color: '#df3566',
    fontSize: 18,
    fontWeight: '700',
  },
  count: {
    color: '#728a2c',
    fontSize: 14,
    fontWeight: '700',
  },
  productList: {
    paddingTop: 8,
    paddingBottom: 24,
  },
  emptyMessage: {
    color: '#ff9b3d',
    fontSize: 15,
    lineHeight: 22,
    paddingVertical: 18,
     fontWeight: '700',
  },
  productRow: {
    minHeight: 52,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#728a2c',
  },
  productDot: {
    width: 8,
    height: 8,
    marginRight: 12,
    borderRadius: 4,
    backgroundColor: '#ff98af',
  },
  productName: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '700',

  },
});
