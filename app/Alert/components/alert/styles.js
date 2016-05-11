import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  modalContainer: {
    flexDirection: 'column',
    padding: 10
  },
  modalTop: {
    flex: 1
  },
  modalBottom: {
    flex: 1,
    alignItems: 'center'
  },
  modalMessageWrapper: {
    marginLeft: 20,
    marginRight: 20
  },
  modalMessage: {
    color: 'white',
    textAlign: 'center'
  },
  modalTopContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalHeaderWrapper: {
    padding: 10
  },
  modalHeader: {
    color: 'white',
    fontSize: 24
  },
  modalIconWrapper: {
    flex: 2,
    justifyContent: 'flex-end'
  },
  modalIcon: {
    borderWidth: 3,
    borderColor: 'white',
    padding: 20,
    borderRadius: 50,
    margin: 20
  },
  modalSuccess: {
    backgroundColor: '#13C448'
  },
  modalClose: {
    alignSelf: 'flex-end'
  },
  modalButtonWrapper: {
    flexDirection: 'column',
    flex: 1,
    borderWidth: 1,
    borderColor: 'white',
    margin: 20
  },
  modalButton: {
    flexDirection: 'column',
    backgroundColor: 'white'
  },
  modalButtonSuccessText: {
    color: '#13C448'
  },
  button: {
    borderRadius: 3,
    marginTop: 18,
    marginBottom: 20,
    padding: 15
  }
});
