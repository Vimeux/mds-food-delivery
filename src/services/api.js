import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:4000',
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 10000
})

/* const old_getRestaurants = async () => {
  const response = await window.fetch('https://strapi.myidea.fr/restaurants')
  const result = await response.json()
  console.log(result)
  return result
} */

// méthode pour se connecter
const login = async (credentials) => {
  try {
    const response = await api.post('/auth/login', credentials)
    if (response.data && response.data.token) {
      window.localStorage.setItem('token', response.data.token)
    }
    return {
      error: false,
      data: response.data
    }
  } catch (error) {
    console.error(error)
    return {
      error: error,
      data: null
    }
  }
}

// méthode pour s'inscrire
const register = async (registerInfos) => {
  try {
    const response = await api.post('/auth/register', registerInfos)
    if (response.data && response.data.token) {
      window.localStorage.setItem('token', response.data.token)
    }
    return {
      error: null,
      data: response.data
    }
  } catch (error) {
    console.error(error)
    return {
      error: error,
      data: null
    }
  }
}

const getRestaurants = async () => {
  try {
    const response = await api.get('/restaurants')
    console.log(response.data)
    return response.data
  } catch (e) {
    console.log(e)
  }
}

const getProfile = async () => {
  try {
    const token = window.localStorage.getItem('token')
    if (token) {
      const response = await api.get('/me', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      return response.data
    }
  } catch (error) {
    console.log(error)
  }
}

export {
  register,
  login,
  getProfile,
  getRestaurants
}
