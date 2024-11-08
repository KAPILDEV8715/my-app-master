import { StyleSheet } from 'react-native';

const HomeStyle = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',

  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
  },
  header: {
    width: '100%',
    paddingVertical: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',  
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  headerContainer: {
    paddingVertical: 20,
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',  
    borderRadius: 10,
    paddingBottom:20,
  },
  welcomeText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  navbarContainer: {
    paddingTop:20,
    width: '100%',
    alignItems: 'flex-end',
    paddingRight: 10,
    justifyContent: 'center',
  },
  navbar: {
    flexDirection: 'row',
  },
  navScrollView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  navButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 15,
    marginHorizontal: 5,
    borderRadius: 5,
    alignItems: 'center',
  },
  navButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default HomeStyle;


// import { StyleSheet } from 'react-native';

// const HomeStyle = StyleSheet.create({
//   background: {
//     flex: 1,
//     resizeMode: 'contain',
//   },
//   container: {
//     flex: 1,
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   header: {
//     width: '100%',
//     paddingVertical: 20,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',  
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   welcomeText: {
//     fontSize: 24,
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   navbarContainer: {
//     // flex: 1,
//     width: '100%',
//     alignItems: 'flex-end', // Align navbar buttons to the right
//     paddingRight: 10, // Add padding to right for spacing
//     justifyContent: 'center',
//   },
//   navbar: {
//     flexDirection: 'row',
//   },
//   navScrollView: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   navButton: {
//     backgroundColor: 'rgba(0, 0, 0, 0.7)',
//     padding: 15,
//     marginHorizontal: 5,
//     borderRadius: 5,
//     alignItems: 'center',
//   },
//   navButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: '600',
//   },
// });

// export default HomeStyle;
