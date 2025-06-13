import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

export default function RootLayout() {
  return (
    <View style={styles.container}>
      <Text>
        Correct insets
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
