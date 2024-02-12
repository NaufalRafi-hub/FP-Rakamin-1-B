// src/GameScreen.js
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const Home = () => {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);

  const choices = ['Rock', 'Paper', 'Scissors'];

  const getRandomChoice = () => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  };

  const determineWinner = (user, computer) => {
    if (user === computer) return 'It\'s a tie!';
    if (
      (user === 'Rock' && computer === 'Scissors') ||
      (user === 'Paper' && computer === 'Rock') ||
      (user === 'Scissors' && computer === 'Paper')
    ) {
      return 'You win!';
    } else {
      return 'Computer wins!';
    }
  };

  const handleUserChoice = (choice) => {
    const computerChoice = getRandomChoice();
    const result = determineWinner(choice, computerChoice);

    setUserChoice(choice);
    setComputerChoice(computerChoice);
    setResult(result);
  };

  return (
    <View>
      <Text>Choose your move:</Text>
      {choices.map((choice) => (
        <Button
          key={choice}
          title={choice}
          onPress={() => handleUserChoice(choice)}
        />
      ))}
      {userChoice && computerChoice && result && (
        <View>
          <Text>Your choice: {userChoice}</Text>
          <Text>Computer's choice: {computerChoice}</Text>
          <Text>{result}</Text>
        </View>
      )}
    </View>
  );
};

export default Home;
