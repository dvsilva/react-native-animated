import { Button, StyleSheet, Text, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabTwoScreen() {
  // const fadeAnim = useRef(new Animated.Value(0)).current;
  // const moveAnim = useRef(new Animated.Value(0)).current;
  // const scaleAnim = useRef(new Animated.Value(0)).current;

  const fadeAnim = useSharedValue(0);
  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: fadeAnim.value,
    };
  });

  const fadeIn = () => {
    // const fadeInAnimation = Animated.timing(fadeAnim, {
    //   toValue: 1,
    //   duration: 3000,
    //   useNativeDriver: true,
    // });
    // // fadeInAnimation.start();

    // const moveAnimation = Animated.timing(moveAnim, {
    //   toValue: 200,
    //   duration: 3000,
    //   useNativeDriver: true,
    // });
    // const scaleAnimation = Animated.timing(scaleAnim, {
    //   toValue: 2,
    //   duration: 3000,
    //   useNativeDriver: true,
    // });
    // Animated.parallel([fadeInAnimation, moveAnimation, scaleAnimation]).start();

    fadeAnim.value = withTiming(1, { duration: 3000 });
  };

  const fadeOut = () => {
    // const fadeOutAnimation = Animated.timing(fadeAnim, {
    //   toValue: 0,
    //   duration: 6000,
    //   useNativeDriver: true,
    // })
    // const moveAnimation = Animated.timing(moveAnim, {
    //   toValue: 0,
    //   duration: 3000,
    //   useNativeDriver: true,
    // });
    // const scaleAnimation = Animated.timing(scaleAnim, {
    //   toValue: 0,
    //   duration: 3000,
    //   useNativeDriver: true,
    // });
    // Animated.parallel([
    //   fadeOutAnimation,
    //   moveAnimation,
    //   scaleAnimation,
    // ]).start();

    fadeAnim.value = withTiming(0, { duration: 6000 });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[
          styles.faddingContainer,
          reanimatedStyle,
          // {
          //   opacity: fadeAnim.value,
          //   transform: [{ translateY: moveAnim }, { scale: scaleAnim }],
          // },
        ]}
      >
        <Text>Olá mundo das animações</Text>
      </Animated.View>
      <View style={styles.actions}>
        <Button title="Fade IN" onPress={fadeIn} />
        <Button title="Fade OUT" onPress={fadeOut} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  actions: {
    flexBasis: 100,
    justifyContent: "space-evenly",
    marginVertical: 16,
  },
  faddingContainer: {
    padding: 20,
    backgroundColor: "powderblue",
  },
});
