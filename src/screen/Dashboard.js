import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Home = () => {
  const [transactions, setTransactions] = useState([]);
  const [transactionName, setTransactionName] = useState("");
  const [transactionAmount, setTransactionAmount] = useState("");
  const [transactionCategory, setTransactionCategory] = useState("");
  const [transactionTags, setTransactionTags] = useState("");

  const handleAddTransaction = () => {
    if (transactionName && transactionAmount) {
      const newTransaction = {
        id: transactions.length,
        name: transactionName,
        amount: parseFloat(transactionAmount),
        category: transactionCategory,
        tags: transactionTags.split(",").map((tag) => tag.trim()),
      };
      setTransactions([...transactions, newTransaction]);
      setTransactionName("");
      setTransactionAmount("");
      setTransactionCategory("");
      setTransactionTags("");
    }
  };

  const calculateTotalExpenses = () => {
    return transactions.reduce(
      (total, transaction) => total + transaction.amount,
      0
    );
  };

  const calculateBalance = () => {
    return 0; // Implement your balance calculation logic here
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Expense Tracker</Text>
        </View>

        {/* Add Transaction */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Add Transaction</Text>
          <TextInput
            style={styles.input}
            placeholder="Transaction Name"
            value={transactionName}
            onChangeText={(text) => setTransactionName(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Amount"
            keyboardType="numeric"
            value={transactionAmount}
            onChangeText={(text) => setTransactionAmount(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Category"
            value={transactionCategory}
            onChangeText={(text) => setTransactionCategory(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Tags (comma separated)"
            value={transactionTags}
            onChangeText={(text) => setTransactionTags(text)}
          />
          <TouchableOpacity
            style={styles.addButton}
            onPress={handleAddTransaction}
          >
            <Text style={styles.buttonText}>Add</Text>
          </TouchableOpacity>
        </View>

        {/* Transactions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Transactions</Text>
          <View>
            {transactions.map((transaction) => (
              <View key={transaction.id} style={styles.transactionItem}>
                <Text>{transaction.name}</Text>
                <Text>${transaction.amount}</Text>
                <Text>Category: {transaction.category}</Text>
                <Text>Tags: {transaction.tags.join(", ")}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Dashboard */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Dashboard</Text>
          <View style={styles.dashboardItem}>
            <Text style={styles.dashboardLabel}>Total Expenses</Text>
            <Text style={styles.dashboardValue}>
              ${calculateTotalExpenses()}
            </Text>
          </View>
          <View style={styles.dashboardItem}>
            <Text style={styles.dashboardLabel}>Balance</Text>
            <Text style={styles.dashboardValue}>${calculateBalance()}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  header: {
    alignItems: "center",
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ddd",
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  addButton: {
    backgroundColor: "#007AFF",
    alignItems: "center",
    paddingVertical: 8,
    borderRadius: 8,
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
  },
  transactionItem: {
    flexDirection: "column",
    marginBottom: 12,
  },
  dashboardItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  dashboardLabel: {
    fontSize: 16,
  },
  dashboardValue: {
    fontSize: 16,
    color: "rgb(43, 65, 214)",
    fontWeight: "bold",
  },
});

export default Home;
