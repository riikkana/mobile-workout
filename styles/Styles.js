import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingTop: 50,
      margin: 10,
      //alignItems: 'center',
      //justifyContent: 'center',
    },
  
    important: {
      color: 'red',
      fontSize: 30
    },
  
    box: {
      borderWidth: 1
    },

    calText: {
        fontSize: 16, 
        marginLeft: 10,
        padding: 5
    },

    heading: {
        color:'black',
        fontSize: 26, 
        fontStyle: "italic",
        margin: 15
    },

    button: {
        borderWidth: 2,
        borderRadius: 20,
        margin: 15,
        paddingHorizontal: 50,
        
    },

    pressable: {
        flexDirection: 'row', // Asettaa ikonin ja tekstin vierekkäin
        alignItems: 'center',
        paddingHorizontal: 30,
        padding: 5,
        borderColor: '#ddd',
        borderWidth: 1,
      },

    modal: {
        flex: 1,
        paddingTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white', // Tämä varmistaa, ettei taustasivu näy
      },
    
      container2: {
        flexDirection: 'row',
        backgroundColor: 'white',
        paddingVertical: 24,
        paddingHorizontal: 12,
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        
      },
      item2: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        backgroundColor: 'transparent',
        borderRadius: 6,
        borderWidth: 1,
      },
      text2: {
        fontSize: 13,
        fontWeight: '600',
        color: '#6b7280',
      },

  });

  export { styles };
