import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    margin: 10,
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
    fontFamily: 'Ubuntu', 
    fontSize: 26, 
    margin: 15,
  },

  button: {
    borderWidth: 2,
    borderRadius: 20,
    margin: 15,
    paddingHorizontal: 50,
    backgroundColor: '#98246d'

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

/*  workContainer: {
    flex: 1,
    padding: 20,
  },*/

  workItem: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#ffe0fb',
    paddingBottom: 15,
    marginBottom: 10,

  },

  workIcon: {
    flexDirection: 'row', 
    alignItems: 'flex-start', 
    marginBottom: 5,
    marginRight: 10,
  },

  workText: {
    marginBottom: 5,
    marginLeft: 10,
  },

  /*deleteButton: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
  },
  deleteText: {
    color: 'white',
    fontWeight: 'bold',
  },*/

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

  radioButton: {
    flexDirection: 'row',
    alignItems: "center",
    paddingLeft: 20,
    color: '#98246d',
    margin: 5
  },

  radioContainer: {
    borderWidth: 1,
    borderColor: '#b8b2b7',
    borderRadius: 5,
    margin: 10,
    padding: 1,
  },

  radioHeading: {
    fontSize: 18,
    margin: 10,
    paddingLeft: 5,
  }
  
});


export { styles };
