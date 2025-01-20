import {
  bounce,
  ping,
  pulse,
  shimmer,
  spin,
} from 'react-native-css-animations';

import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Animated from 'react-native-reanimated';
import Fontisto from '@expo/vector-icons/Fontisto';
import Entypo from '@expo/vector-icons/Entypo';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import MaskedView from '@react-native-masked-view/masked-view';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.label}>Spin</Text>
      <View style={styles.button}>
        {/* Spin animation ⬇️ */}
        <Animated.View style={spin}>
          <EvilIcons name="spinner-3" size={24} color="white" />
        </Animated.View>
        <Text style={styles.buttonText}>Loading...</Text>
      </View>

      <Text style={styles.label}>Ping</Text>
      <View style={styles.recording}>
        <Fontisto name="camera" size={18} color="black" />
        <View style={styles.notification} />
        {/* Ping animation ⬇️ */}
        <Animated.View style={[styles.notification, ping]} />
      </View>

      <Text style={styles.label}>Pulse</Text>
      <View style={styles.skeletonContainer}>
        <Animated.View style={[styles.skeletonAvatar, pulse]} />
        <Animated.View style={[styles.skeletonText, pulse]} />
      </View>

      <Text style={styles.label}>Bounce</Text>
      {/* Bounce animation ⬇️ */}
      <Animated.View style={[styles.arrow, bounce]}>
        <Entypo name="chevron-down" size={24} color="black" />
      </Animated.View>

      {(Platform.OS === 'ios' || Platform.OS === 'android') && (
        <>
          <Text style={styles.label}>Shimmer</Text>
          <View style={styles.shimmerContainer}>
            <MaskedView
              style={styles.mask}
              maskElement={
                <View style={styles.skeletonContainer}>
                  <Animated.View style={styles.skeletonAvatar} />
                  <Animated.View style={styles.skeletonText} />
                </View>
              }
            >
              {/* Shimmer animation ⬇️ */}
              <Animated.View style={[styles.gradientContainer, shimmer]}>
                <LinearGradient
                  colors={['#e2e8f0', '#f8fafc', '#e2e8f0']}
                  locations={[0.46, 0.5, 0.54]}
                  start={{ x: 0, y: -5 }}
                  end={{ x: 1, y: 5 }}
                  style={styles.gradient}
                />
              </Animated.View>
            </MaskedView>
          </View>
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 24,
    margin: 24,
  },
  label: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 18,
    marginTop: 24,
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#3b82f6',
    borderRadius: 8,
    gap: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  recording: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: '#e2e8f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  notification: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: 'red',
  },
  skeletonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  skeletonAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#e2e8f0',
    marginRight: 12,
  },
  skeletonText: {
    height: 24,
    width: 150,
    borderRadius: 8,
    backgroundColor: '#e2e8f0',
  },
  arrow: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#e2e8f0',
  },
  shimmerContainer: {
    width: '100%',
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mask: {
    height: 48,
    width: 210,
  },
  gradientContainer: {
    flex: 1,
    width: '300%',
    marginHorizontal: '-100%',
  },
  gradient: {
    flex: 1,
    width: '100%',
  },
});
