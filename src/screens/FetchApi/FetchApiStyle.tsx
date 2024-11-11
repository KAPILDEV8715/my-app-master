import {StyleSheet} from 'react-native';

const FetchApiStyle = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  container: {
    padding: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  textInput: {
    width: '100%',
    height: 50,
    paddingHorizontal: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
  },
  fetchButton: {
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
    marginBottom: 20,
  },
  fetchButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  card: {
    width: '100%',
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  cardText: {
    fontSize: 16,
    color: '#333',
  },
  loadingText: {
    fontSize: 18,
    color: '#555',
  },
  backButton: {
    backgroundColor: '#00509e',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default FetchApiStyle;
