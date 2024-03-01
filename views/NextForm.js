import { Text, View, Button,StyleSheet, TextInput } from 'react-native';

const style = StyleSheet.create({
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
    checkBoxContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    checkBoxLabel: {
      marginLeft: 8,
      color: '#fff',
    },
  });
const Nextform = ({navigation, route}) => {
    return (
      <View style={style.container}>
        <Text style={style.heading}>Remplir le carnet de vaccination de votre enfant</Text>
        {/* First text with no input */}
        <Text>nom du vaccin</Text>
        {/* TextInput below each text except the first one */}
        <TextInput style={style.input} placeholder="le nom vaccin" />
        {/* <View style={styles.checkBoxContainer}>
          <CheckBox  />
          <Text style={styles.checkBoxLabel}>Pas de vaccin</Text>
        </View> */}
        <View>
        <Button title="retour" />
        <Button title="terminer" />
        </View>
        
      </View>
    );
  };

  export default Nextform;