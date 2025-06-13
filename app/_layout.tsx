import { StyleSheet, Text, View } from 'react-native';

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
