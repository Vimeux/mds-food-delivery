import { createContext, useContext, useEffect, useReducer } from 'react'
import { login } from '../services/api'

const AuthContext = createContext()

const actionType = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  ERROR: 'ERRROR'
}

const initialState = JSON.parse(window.localStorage.getItem('AUTH')) || {
  token: null,
  user: null,
  error: null,
  loading: false
}

const AuthReducer = (state, action) => {
  switch (action.type) {
    case actionType.LOGIN:
      return {
        ...initialState, token: action.data.token, user: action.data.user
      }
    case actionType.ERROR:
      return {
        ...initialState, error: action.data.error
      }
    case actionType.LOGOUT:
      window.localStorage.removeItem('AUTH')
      return initialState
    default:
      throw new Error(`Unhandled action type : ${action.type}`)
  }
}

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState)

  useEffect(() => {
    window.localStorage.setItem('AUTH', JSON.stringify(state))
  }, [state])

  return <AuthContext.Provider value={{ state, dispatch }}>{children}</AuthContext.Provider>
}

const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('UseAuth must be used inside a AuthProvider')
  }
  return context
}

const loginUser = async (credentials, dispatch) => {
  try {
    const data = await login(credentials)
    dispatch({
      type: actionType.LOGIN,
      data: { user: data.user, token: data.token }
    })
  } catch (error) {
    dispatch({
      type: actionType.ERROR,
      data: { error: error.message }
    })
  }
}

export {
  AuthProvider,
  useAuth,
  actionType,
  loginUser
}
