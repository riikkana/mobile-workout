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
    color: 'black',
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
    flexDirection: 'row', // ikonin ja teksti vierekkäin
    alignItems: 'center',
    paddingHorizontal: 30,
    padding: 5,
    borderColor: '#6b7280',
    borderWidth: 1,
    borderRadius: 5,
  },

  modal: {
    flex: 1,
    paddingTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white', // ettei taustasivu näy
  },

  container2: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingVertical: 24,
    paddingHorizontal: 12,


  },
  item2: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: 'transparent',
    borderRadius: 5,
    borderWidth: 1,
  },

  text2: {
    fontSize: 13,
    fontWeight: '600',
    color: '#6b7280',
  },

  HISTORYSUMMARYNAPIT: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#98246d',
    color: 'white', // tarkista onko tämä erillinen text
    borderRadius: 5,
    borderWidth: 1,
    margin: 5,
  },

  workContainer: {
    flex: 1,
    padding: 20,
  },

  workHeading: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  workItem: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#ffe0fb',
    paddingBottom: 15,
    marginBottom: 5,

  },

  deleteButton: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
  },
  deleteText: {
    color: 'white',
    fontWeight: 'bold',
  },

  distanceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  
  distanceBox: {
    backgroundColor: '#98246d',
    padding: 10,
    borderRadius: 8,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  
  distanceSport: {
    fontSize: 16,
    fontWeight: 'white',
  },
  
  distanceValue: {
    fontSize: 14,
    color: 'white',
  },
  
});


export { styles };
