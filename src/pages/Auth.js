
import '../components/styles/Auth.css'
// composant sous forme de fonction
import { useEffect, useState } from 'react'
import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm'
import UserInfos from '../components/UserInfos'

import { getProfile, login, register } from '../services/api'

// nouvelle méthode
function Auth () {
  // Initalisation des états locaux

  const [error, setError] = useState(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isRegister, setIsRegister] = useState(false)
  const [profil, setProfil] = useState(null)

  // Applelé à chaque montage dans le DOM
  useEffect(() => {
    const token = window.localStorage.getItem('token')
    if (token) {
      setIsLoggedIn(true)
    }
  }, [])

  // Soumission du formulaire
  const handleSubmit = async (infos) => {
    let data
    if (isRegister) {
      data = await register(infos)
    } else {
      // Appel de la fonction d'API login
      data = await login(infos)
    }
    // Gestion des Erreurs
    if (data.error) {
      setError(data.error)
    } else {
      setError(null)
    }
    // affichage des données
    const token = window.localStorage.getItem('token')
    if (token) {
      setIsLoggedIn(true)
    }
  }

  const handleLoadProfile = async () => {
    const profile = await getProfile()
    setProfil(profile)
  }

  const logout = () => {
    setIsLoggedIn(false)
    window.localStorage.removeItem('token')
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
