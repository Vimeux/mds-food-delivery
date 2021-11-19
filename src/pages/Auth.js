
import '../components/styles/Auth.css'
// composant sous forme de fonction
import { useEffect, useState } from 'react'
import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm'
import UserInfos from '../components/UserInfos'

import { getProfile, register } from '../services/api'

import { loginUser, useAuth, actionType } from '../contexts/AuthContext'

// nouvelle méthode
function Auth () {
  // Initalisation des états locaux
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isRegister, setIsRegister] = useState(false)
  const [profil, setProfil] = useState(null)
  const { dispatch, state: { error, user, loading } } = useAuth()

  useEffect(() => {
    if (user) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }
  }, [user])

  // Soumission du formulaire
  const handleSubmit = async (infos) => {
    let data
    if (isRegister) {
      data = await register(infos)
    } else {
      // Appel de la fonction d'API login
      await loginUser(infos, dispatch)
    }
  }

  const handleLoadProfile = async () => {
    const profile = await getProfile()
    setProfil(profile)
  }

  const logout = () => {
    dispatch({
      type: actionType.LOGOUT
    })
  }

  return (
    <div>
      {
        isLoggedIn
          ? <UserInfos
              logout={logout}
            />
          : (
            <div>
              {
                isRegister
                  ? <RegisterForm
                      submit={handleSubmit}
                      error={error}
                    />
                  : <LoginForm
                      submit={handleSubmit}
                      error={error}
                    />
              }
              <h3 href='#' onClick={() => setIsRegister(!isRegister)} className='register'>
                {isRegister ? 'Se connecter' : "S'inscrire"}
              </h3>
            </div>
            )
      }
      <button onClick={handleLoadProfile}>Load Profile</button>
      <p>{profil && JSON.stringify(profil)}</p>
    </div>
  )
}

export default Auth
