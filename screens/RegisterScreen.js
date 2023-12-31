import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  Image,
  KeyboardAvoidingView,
  TextInput,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import axios from "axios";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullName] = useState("");
  const navigation = useNavigation();
  const handleRegister = () => {
    const user = {
      fullname: fullname,
      email: email,
      password: password,
    };

    axios
      .post("http://172.16.1.216:8000/api/auth/register", user)
      .then((response) => {
        console.log(response);
        Alert.alert("Đăng ki thành công");
        setFullName("");
        setEmail("");
        setPassword("");
        navigation.replace("SignIn");
      })
      .catch((err) => {
        Alert.alert("Đăng kí thất bại");
        console.log("Registration failed", err);
      });
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
      }}
    >
      <View style={{ marginTop: 50 }}>
        <Image
          style={{ width: 150, height: 100 }}
          source={{
            uri: "https://www.voicoffee.com.vn/img_data/images/307461554234_logo-voicoffee.jpg",
          }}
        />
      </View>

      <KeyboardAvoidingView>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: "bold",
              marginTop: 50,
              color: "#041E42",
            }}
          >
            TẠO TÀI KHOẢN
          </Text>
        </View>

        <View style={{ marginTop: 30 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "#D0D0D0",
              paddingVertical: 5,
              borderRadius: 5,
              marginTop: 30,
            }}
          >
            <Ionicons
              name="ios-person"
              size={24}
              color="gray"
              style={{ marginLeft: 8 }}
            />
            <TextInput
              value={fullname}
              onChangeText={(text) => setFullName(text)}
              style={{
                color: "gray",
                marginVertical: 10,
                width: 300,
              }}
              placeholder="Họ và tên"
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "#D0D0D0",
              paddingVertical: 5,
              borderRadius: 5,
              marginTop: 10,
            }}
          >
            <MaterialIcons
              style={{ marginLeft: 8 }}
              name="email"
              size={24}
              color="gray"
            />

            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={{
                color: "gray",
                marginVertical: 10,
                width: 300,
              }}
              placeholder="Email"
            />
          </View>
        </View>

        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "#D0D0D0",
              paddingVertical: 5,
              borderRadius: 5,
              marginTop: 10,
            }}
          >
            <FontAwesome
              name="lock"
              size={24}
              color="gray"
              style={{ marginLeft: 11 }}
            />

            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
              style={{
                color: "gray",
                marginVertical: 10,
                width: 300,
              }}
              placeholder="Mật khẩu"
            />
          </View>
        </View>

        <View style={{ marginTop: 50 }} />

        <Pressable
          onPress={handleRegister}
          style={{
            width: 200,
            backgroundColor: "#B22222",
            borderRadius: 6,
            marginLeft: "auto",
            marginRight: "auto",
            padding: 15,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            Đăng kí
          </Text>
        </Pressable>

        <Pressable
          onPress={() => navigation.goBack()}
          style={{ marginTop: 15 }}
        >
          <Text style={{ textAlign: "center", color: "gray", fontSize: 16 }}>
            Đã có tài khoản, <Text style={{ color: "#B22222" }}>Đăng nhập</Text>
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
