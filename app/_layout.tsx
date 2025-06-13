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

const styles = StyleSheet.create((theme, rt) => ({
    container: {
        paddingTop: rt.insets.top,
        paddingBottom: rt.insets.bottom,
        paddingLeft: rt.insets.left,
        paddingRight: rt.insets.right
    },
}))