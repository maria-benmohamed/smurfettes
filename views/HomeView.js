import { Text, View, Button,StyleSheet, TextInput } from 'react-native';

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#FA9884',
      flex: 1,
      paddingTop: '20%',
      alignItems: 'center',
    },
    heading: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
      color:'#fff',
      textAlign:'center',
    },
    input: {
      
      height: 40,
      width: '80%',
      paddingHorizontal: 10,
      marginBottom: 20,
      borderBottomColor: '#000000',
      borderBottomWidth: 1,
    },
  });
  
const HomeView = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Remplir le carnet de vaccination de votre enfant</Text>
      {/* First text with no input */}
      <Text>nom</Text>
      {/* TextInput below each text except the first one */}
      <TextInput style={styles.input} placeholder="Entrez le nom" />
      <Text>date de naissance</Text>
      <TextInput style={styles.input} placeholder="Entrez la date de naissance" />
      <Text>sexe</Text>
      <TextInput style={styles.input} placeholder="Entrez le sexe" />
      <Text>groupe sanguin</Text>
      <TextInput style={styles.input} placeholder="Entrez le groupe sanguin" />
      <Text>allergies connues</Text>
      <TextInput style={styles.input} placeholder="Entrez les allergies connues" />
      <Button
       title="suivant" 
       style={styles.btn}
       onPress={() =>
      navigation.navigate('next')
      }
       />
    </View>
  );
};
export default HomeView;