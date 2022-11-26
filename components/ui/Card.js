import { StyleSheet, View } from "react-native";
import Colors from "../../constants/Colors";

function Card({children}){
    return <View style={styles.Card}>
        {children}
    </View>
}

export default Card;

const styles = StyleSheet.create({
  
    Card: {
      justifyContent: "center",
      alignItems: "center",
      marginHorizontal: 24,
      marginTop: 100,
      borderRadius: 8,
      padding: 16,
      backgroundColor: Colors.primary800,
      elevation: 4,
      shadowColor: "black",
      shadowOffset: { width: 0, height: 10 },
      shadowRadius: 6,
      shadowOpacity: 0.3,
    },
    
  });