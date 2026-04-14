import { View, Text, TouchableOpacity, StyleSheet, Animated, ImageBackground } from 'react-native';
import { useState, useRef, useEffect } from 'react';

const questions = [
  {
    id: '1',
    question: 'What is the goat OP Prison server',
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    correct: 'AkumaMC',
  },
  {
    id: '2',
    question: 'What is the Best Movie of All Time',
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    correct: 'Ambulance',
  },
  {
    id: '3',
    question: 'Your question here?',
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    correct: 'Option A',
  },
  {
    id: '4',
    question: 'Your question here?',
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    correct: 'Option A',
  },
  {
    id: '5',
    question: 'Your question here?',
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    correct: 'Option A',
  },
  {
    id: '6',
    question: 'Your question here?',
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    correct: 'Option A',
  },
  {
    id: '7',
    question: 'Your question here?',
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    correct: 'Option A',
  },
  {
    id: '8',
    question: 'Your question here?',
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    correct: 'Option A',
  },
  {
    id: '9',
    question: 'Your question here?',
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    correct: 'Option A',
  },
  {
    id: '10',
    question: 'Your question here?',
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    correct: 'Option A',
  },
  {
    id: '11',
    question: 'Your question here?',
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    correct: 'Option A',
  },
  {
    id: '12',
    question: 'Your question here?',
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    correct: 'Option A',
  },
];

const endMessages = [
  { min: 0, max: 5, message: "Looks like someone needs to spend more time together! 😅" },
  { min: 6, max: 10, message: "Not bad! You know them pretty well 😄" },
  { min: 11, max: 13, message: "Impressive! You really know your stuff 🌟" },
  { min: 14, max: 15, message: "Perfect score! You're basically the same person 🎉" },
];

export default function GameScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const current = questions[currentIndex];

  const getEndMessage = () => {
    return endMessages.find((m) => score >= m.min && score <= m.max)?.message ?? '';
  };

  const handleAnswer = (option: string) => {
    if (selectedAnswer) return;
    setSelectedAnswer(option);
    if (option === current.correct) setScore((s) => s + 1);

    setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start(() => {
        if (currentIndex + 1 >= questions.length) {
          setFinished(true);
        } else {
          setCurrentIndex((i) => i + 1);
          setSelectedAnswer(null);
          Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
          }).start();
        }
      });
    }, 1000);
  };

  const handleReplay = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setFinished(false);
    fadeAnim.setValue(1);
  };

  const getOptionStyle = (option: string) => {
    if (!selectedAnswer) return styles.option;
    if (option === current.correct) return [styles.option, styles.correct];
    if (option === selectedAnswer) return [styles.option, styles.wrong];
    return [styles.option, styles.dimmed];
  };

  if (finished) {
    return (
        <View style={styles.overlay}>
          <Text style={styles.finishedEmoji}>🎂</Text>
          <Text style={styles.finishedScore}>{score} / {questions.length}</Text>
          <Text style={styles.finishedMessage}>{getEndMessage()}</Text>
          <TouchableOpacity style={styles.replayButton} onPress={handleReplay}>
            <Text style={styles.replayText}>Play Again</Text>
          </TouchableOpacity>
        </View>
    );
  }

  return (
      <View style={styles.overlay}>
        <Text style={styles.progress}>{currentIndex + 1} / {questions.length}</Text>
        <Animated.View style={{ opacity: fadeAnim, width: '100%', alignItems: 'center' }}>
          <Text style={styles.question}>{current.question}</Text>
          {current.options.map((option) => (
            <TouchableOpacity
              key={option}
              style={getOptionStyle(option)}
              onPress={() => handleAnswer(option)}
              activeOpacity={0.8}
            >
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </Animated.View>
        <Text style={styles.score}>Score: {score}</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  progress: { color: '#fff', fontSize: 14, marginBottom: 16, opacity: 0.8 },
  question: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 32,
    lineHeight: 30,
  },
  option: {
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.3)',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  correct: { backgroundColor: 'rgba(80,200,80,0.6)', borderColor: '#4caf50' },
  wrong: { backgroundColor: 'rgba(200,60,60,0.6)', borderColor: '#f44336' },
  dimmed: { opacity: 0.4 },
  optionText: { color: '#fff', fontSize: 16, textAlign: 'center' },
  score: { color: '#fff', fontSize: 14, marginTop: 24, opacity: 0.8 },
  finishedEmoji: { fontSize: 72, marginBottom: 16 },
  finishedScore: { fontSize: 52, fontWeight: 'bold', color: '#fff', marginBottom: 12 },
  finishedMessage: { fontSize: 18, color: '#fff', textAlign: 'center', marginBottom: 32, lineHeight: 26 },
  replayButton: {
    backgroundColor: '#d45f2e',
    paddingHorizontal: 40,
    paddingVertical: 16,
    borderRadius: 30,
  },
  replayText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});