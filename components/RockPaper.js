import React, { useState, useRef } from "react";
import { StyleSheet, SafeAreaView, Text, View, Animated } from "react-native";
import Constants from "expo-constants";
import DisplayResult from "./DisplayResult";
import Actions from "./Actions";
// import Header from "./Header";

export default function RockPaper() {
  const [userChoice, setUserChoice] = useState(0);
  const [computerChoice, setComputerChoice] = useState(0);
  const [result, setResult] = useState("");
  const [canPlay, setPlay] = useState(true);

  //Animasi

  const fadeAnimation = useRef(new Animated.Value(1)).current;

  function play(choice) {
    // ada tiga pilihan
    // batu
    // guting
    // kertas

    const randomComputerChoice = Math.floor(Math.random() * 3) + 1;
    let resultString = "";

    if (choice === 1) {
      resultString = randomComputerChoice === 3 ? "WIN" : "LOSE";
    } else if (choice === 2) {
      resultString = randomComputerChoice === 1 ? "WIN" : "LOSE";
    } else {
      resultString = randomComputerChoice === 2 ? "WIN" : "LOSE";
    }

    if (choice === randomComputerChoice) {
      resultString = "DRAW";
    }

    setUserChoice(choice);
    setComputerChoice(randomComputerChoice);

    // tunggu animasi hide untuk hasil

    setTimeout(() => {
      setResult(resultString);
    }, 300);

    // animasi hide untuk hasil dan menunjukan hasil baru
    Animated.sequence([
      Animated.timing(fadeAnimation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),

      Animated.timing(fadeAnimation, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();

    //mematikan action saat animasi berjalan

    setPlay(false);
    setTimeout(() => {
      setPlay(true);
    }, 600);
  }

  //balik ke tampilan awal
  return (
    <SafeAreaView style={styles.container}>
      {/* <Header /> */}
      <View style={styles.content}>
        <View style={styles.result}>
          <Animated.Text
            style={[styles.resultText, { opacity: fadeAnimation }]}
          >
            {result}
          </Animated.Text>
        </View>
        <View style={styles.screen}>
          {!result ? (
            <Text style={styles.readyText}>Ayo Main</Text>
          ) : (
            <DisplayResult
              userChoice={userChoice}
              computerChoice={computerChoice}
            />
          )}
        </View>
        <Actions play={play} canPlay={canPlay} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },

  content: {
    flex: 1,
    marginBottom: 5,
    backgroundColor: "whitesmoke",
  },

  result: {
    height: 100,
    justifyContent: "flex-end",
    alignItems: "center",
  },

  resultText: {
    fontSize: 48,
    fontWeight: "bold",
  },

  screen: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  readyText: {
    marginTop: -48,
    alignSelf: "center",
    textAlign: "center",
    width: "100",
    fontSize: 48,
    fontWeight: "bold",
  },
});
