import { StyleSheet } from 'react-native';

const HomeStyle = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#e0f7fa', 
  },
  mainContainer: {
    flex: 1,
    padding: 20,
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start', 
  },
  userPhoto: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  usernameText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00796b',
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00796b', // Darker shade of blue
  },
  contentContainer: {
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  contentText: {
    fontSize: 16,
    color: '#004d40',
    textAlign: 'center',
  },
  navbarContainer: {
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  navScrollView: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  navButton: {
    padding: 10,
    backgroundColor: '#00796b',
    borderRadius: 5,
    marginHorizontal: 5,
  },
  navButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default HomeStyle;
