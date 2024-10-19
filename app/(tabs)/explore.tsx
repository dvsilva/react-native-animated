import { useRef } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TabTwoScreen() {

  const fadeAnim = useRef(new Animated.Value(0)).current

  const fadeIn = () => {
    const animation = Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true
    })
    animation.start()
  }

  const fadeOut = () => {
    const animation = Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 6000,
      useNativeDriver: true
    })
    animation.start()
  }

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={[styles.faddingContainer, {
        opacity: fadeAnim
      }]}>
        <Text>
          Olá mundo das animações
        </Text>
      </Animated.View>
      <View style={styles.actions}>
        <Button title='Fade IN' onPress={fadeIn}/>
        <Button title='Fade OUT' onPress={fadeOut}/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  actions: {
    flexBasis: 100,
    justifyContent: 'space-evenly',
    marginVertical: 16
  },
  faddingContainer: {
    padding: 20,
    backgroundColor: 'powderblue'
  }
});
