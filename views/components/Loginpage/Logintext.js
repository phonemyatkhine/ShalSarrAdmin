import React,{ useState }from 'react';
import { TouchableOpacity, StyleSheet, Text , View,TextInput} from 'react-native';
import { Button } from 'react-native'
import Ripple from 'react-native-material-ripple';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';


const fetchFonts = () => {
return Font.loadAsync({
'Satisfy-Regular': require('../../../assets/fonts/Satisfy-Regular.ttf'),
});
};


function Logintext() {
  const[dataLoaded,setDataLoaded] = useState(false);
  const [value, onChangeText] = React.useState('Useless Placeholder');

  if(!dataLoaded){
    return(
      <AppLoading
       startAsync={fetchFonts}
       onFinish={()=> setDataLoaded (true)}
       />
    );

  }

  return (

    <View style= {styles.container}>
      <Text style={styles.text}>   Shal Sarr   </Text>
      <Text>Admin Application</Text>
    </View>


  );

}
export default Logintext ;


const styles = StyleSheet.create ({

   container: {

  
    alignItems: 'center',
   },
  text:
  {

     fontFamily: "Satisfy-Regular",
    color:'#000',
    fontSize:76,

  },
  input: {
    backgroundColor:'#f5f5f5',
   margin: 20,
   marginBottom: 0,
   width:337,
   height: 34,
   paddingHorizontal: 10,
   borderRadius: 4,
   borderColor: '#ccc',
   borderWidth: 1,
   fontSize: 16,
 },

})
