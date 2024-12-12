import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

export default function PurchasePass() {

  const handleCardPress = (passType: string, price: string) => {
    Alert.alert(
      "Confirmar Compra",
      `Você tem certeza que quer comprar o passe de ${passType} por $${price}?`,
      [
        { text: "Cancelar", style: "cancel" },
        { 
          text: "Sim", 
          onPress: () => {
            console.log("Compra Confirmada!");
            showConfirmationMessage(passType);
          } 
        },
      ]
    );
  };

  const showConfirmationMessage = (passType: string) => {
    Alert.alert(
      "Compra Realizada",
      `Você comprou com sucesso o passe de ${passType}!`,
      [{ text: "OK" }]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha o Seu Passe</Text>

      {/* Card for 30 Minutes Pass */}
      <TouchableOpacity
        style={[styles.card, styles.cardShort]}
        onPress={() => handleCardPress("30 minutos", "2.50")}
      >
        <Text style={styles.cardTitle}>30 Minutos</Text>
        <Text style={styles.cardPrice}>$2.50</Text>
      </TouchableOpacity>

      {/* Card for 24 Hours Pass */}
      <TouchableOpacity
        style={[styles.card, styles.cardLong]}
        onPress={() => handleCardPress("24 horas", "10.00")}
      >
        <Text style={styles.cardTitle}>24 Horas</Text>
        <Text style={styles.cardPrice}>$10.00</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  card: {
    width: '90%',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  cardShort: {
    backgroundColor: '#FFCCBC',
  },
  cardLong: {
    backgroundColor: '#BBDEFB',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  cardPrice: {
    fontSize: 18,
    color: '#555',
    marginTop: 5,
  },
});
