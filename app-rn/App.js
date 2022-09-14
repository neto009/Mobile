import { StyleSheet, Text, View, Image } from 'react-native';
import placa1 from './assets/img/placa1.png';
import placa2 from './assets/img/placa2.png';
import placa3 from './assets/img/placa3.png';
import placa4 from './assets/img/placa4.png';

export default function App() {
  return (
    
    <View>
      <Text style={styles.title}>Prática Layout FlexBox</Text>
      <View style={styles.container}>
        <View style={styles.linhaPlacas}>
          <Image source = {placa1} style={styles.image}/>
          <Image source = {placa2} style={styles.image}/>
        </View>
        <View style={styles.linhaPlacas}>
          <Image source = {placa3} style={styles.image}/>
          <Image source = {placa4} style={styles.image}/>
        </View>
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center'
  },

  linhaPlacas: {
    flex: 1,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center'
  },

  image: {
    width: 200,
    height: 200,
    border: "1px solid",
    borderRadius: 20,
    margin: 3,
  },

  title: {
    borderColor: "#20232a",
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    padding: 20
  }
});
