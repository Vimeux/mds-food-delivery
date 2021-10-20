import { useState } from 'react'
import TextInput from './textInput'

function RegisterForm({ submit, error }) {
  // stockage des données du formulaire
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: ''
  })

  // gestion de la saisie du formulaire
  const handleChange = (event) => {
    setFormData({
      ...formData, // ... siginifie que l'on garde ce que l'on a déja et on rajoute
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    submit(formData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Inscription</h2>
      <div>
        <TextInput
          name='firstName'
          label='Prénom : '
          value={formData.firstName}
          onChange={handleChange}
        />
        <TextInput
          name='lastName'
          label='Nom : '
          value={formData.lastName}
          onChange={handleChange}
        />
        <TextInput
          type='email'
          name='email'
          label='email : '
          value={formData.email}
          onChange={handleChange}
        />
        <TextInput
          type='password'
          name='password'
          label='Mot de passe : '
          value={formData.password}
          onChange={handleChange}
        />
        <TextInput
          name='phone'
          label='Téléphone : '
          value={formData.phone}
          onChange={handleChange}
        />
      </div>
      <input type='submit' value="S'inscrire" />
    </form>
  )
}

export default RegisterForm
