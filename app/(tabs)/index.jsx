import { StyleSheet, Text } from 'react-native';


export default function HomeScreen() {
  return (
    <>
      {/* New tales: */}
      <Text styles={styles.titleContainer}>New Tales</Text>

      {/* Trending tales: */}

      {/* Viewed tales: */}
    </>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
});
