import { Button, StyleSheet, Text, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TabTwoScreen() {

  const fadeAnim = useSharedValue(0)
  const reanimatedStyle =  useAnimatedStyle(() => {
    return {
      opacity: fadeAnim.value
    }
  })

  const fadeIn = () => {
    fadeAnim.value = withTiming(1, { duration: 3000 })
  }

  const fadeOut = () => {
    fadeAnim.value = withTiming(0, { duration: 6000 })
  }

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={[styles.faddingContainer, reanimatedStyle]}>
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
