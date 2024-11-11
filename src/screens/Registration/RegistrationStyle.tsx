import { StyleSheet } from "react-native";

const RegistrationStyle = StyleSheet.create ({
    container: { flex: 1 },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    padding: 20,
    borderRadius: 10,
    width: '90%', 
    alignItems: 'center', 
  },
  input: {
    height: 60,
    width:350,
    borderColor: '#000000',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
    borderRadius: 8,
    fontSize: 16,
    backgroundColor: '#ffffff', 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333333', 
  },
  button: {
    backgroundColor: '#008CBA', 
    borderRadius: 5,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 12,
    width: 330, 
  },
  buttonText: { color: '#ffffff', fontWeight: 'bold', fontSize: 16 },
  error: { color: 'red', fontSize: 14, marginBottom: 12 },
  backButtonContainer: {
    marginTop: 20,
  },
  backButton: {
    backgroundColor: '#008CBA', 
    borderRadius: 5,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 12,
    width: 330, 
    alignContent:'center',

  },
  backButtonText: {
    color: '#ffffff',
    textAlign: 'center',
  },
})

export default RegistrationStyle;