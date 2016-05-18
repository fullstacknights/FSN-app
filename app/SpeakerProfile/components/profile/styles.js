import { Dimensions, StyleSheet } from 'react-native';

export default StyleSheet.create({
  modal: {
    height: 340,
    width: (Dimensions.get('window').width - 20)
  },
  modalClose: {
    alignSelf: 'flex-end'
  },
  modalTop: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalTopText: {
    fontSize: 20,
    color: '#2C3E50'
  },
  speakerImg: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10
  },
  modalBottom: {
    flex: 1,
    backgroundColor: '#2C3E50',
    padding: 20
  },
  modalBottomContent: {
    flex: 1
  },
  modalBottomText: {
    textAlign: 'center',
    color: 'white'
  },
  modalIcons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  modalIconCircle: {
    borderColor: '#50E3C2',
    borderWidth: 2,
    width: 40,
    height: 40,
    borderRadius: 50,
    padding: 6,
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalIcon: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
