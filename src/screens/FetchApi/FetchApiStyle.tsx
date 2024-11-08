import { StyleSheet } from "react-native";
const FetchApiStyle = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
      },
      container: {
        padding: 20,
        alignItems: 'center',
        backgroundColor: 'rgba(0, 51, 102, 0.6)', // semi-transparent blue overlay
      },
      headerText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#e6f2ff',
        marginBottom: 20,
      },
      card: {
        backgroundColor: '#003366', // darker blue for card background
        borderRadius: 8,
        padding: 15,
        marginVertical: 10,
        width: '90%',
      },
      cardText: {
        color: '#e6f2ff',
        fontSize: 16,
        marginVertical: 2,
      },
      loadingText: {
        color: '#e6f2ff',
        fontSize: 18,
        marginVertical: 20,
      },
      backButton: {
        backgroundColor: '#00509e',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 20,
      },
      backButtonText: {
        color: '#e6f2ff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
      },
})
export default FetchApiStyle ;