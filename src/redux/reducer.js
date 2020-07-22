import {combineReducers} from 'redux'

// State
const initialStateLogin = {
  username: 'Test',
  password: '',
  dataUser: {
    username: '',
    noKk: '',
    namaKk: '',
    namaLengkap: ''
  }
};

const initialStateRegister = {
  username: '',
  password: '',
  noKl: ''
}

// Reducer
const LoginReducer = (state = initialStateLogin, action) => {
  if (action.type === 'SET_USER_DATA') {
    return {
      ...state,
      dataUser: action.data
    }
  }
  if (action.type === 'DESTROY_USER') {
    return {
      dataUser: undefined
    }
  }
  return state
};

const RegisterReducer = (state = initialStateRegister, action) => {
  return state
}

const reducer = combineReducers({
  LoginReducer,
  RegisterReducer
});

export default reducer;