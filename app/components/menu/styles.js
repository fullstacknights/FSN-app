import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative'
  },
  banner: {
    alignItems: 'center',
    height: 200
  },
  backImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: null,
    height: 200
  },
  logo: {
    marginTop: 15,
    marginBottom: 20,
    width: 100,
    height: 100
  },
  bannerText: {
    backgroundColor: 'transparent',
    color: 'white',
    fontWeight: 'bold'
  },
  headerText: {
    fontSize: 20,
    marginBottom: 5
  },
  navAndTickets: {
    flex: 1,
    justifyContent: 'space-between'
  },
  nav: {
    flex: 1,
    marginTop: 20,
    paddingLeft: 50
  },
  navLink: {
    color: '#233140',
    marginBottom: 20,
    fontSize: 16,
    fontWeight: '600'
  },
  ticketsButton: {
    backgroundColor: '#F59523',
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    padding: 15,
    borderRadius: 5
  },
  ticketsText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  }
});
