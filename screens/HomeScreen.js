import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const auth = getAuth();
  const navigation = useNavigation();

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
  };
  return (
    <View style={styles.container}>
      <Text>Email: {auth.currentUser?.email} </Text>
      <TouchableOpacity style={styles.button} onPress={handleSignout}>
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#0782f9",
    width: "60%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 40,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
});
