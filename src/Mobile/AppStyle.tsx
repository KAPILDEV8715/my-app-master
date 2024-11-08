import { StyleSheet } from 'react-native';

const HomeStyle = StyleSheet.create({
  // Make sure the background takes the entire screen
  background: {
    flex: 1, // Ensure the background takes up the entire screen
    resizeMode: 'cover', // Ensure the image covers the whole screen
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
  },
  container: {
    flex: 1, // Allow the container to take full screen height
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    height: 100,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',  // Semi-transparent background for header
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    borderBottomWidth: 2,
    borderBottomColor: '#ddd',
  },
  welcomeText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  navbar: {
    flexDirection: 'row',  // Align buttons horizontally
    justifyContent: 'center',  // Center items horizontally
    marginTop: 20,
    paddingHorizontal: 10,
  },
  navScrollView: {
    flexDirection: 'row',  // Ensures scroll view content is horizontal
    alignItems: 'center',  // Align buttons vertically in the middle
  },
  navButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',  // Dark background for buttons with some opacity
    padding: 15,
    marginRight: 10,  // Space between buttons
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',  // Vertically center text inside the button
  },
  navButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default HomeStyle;
