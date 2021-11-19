import { useState } from 'react'
import OrderForm from '../components/OrderForm'
import OrderResume from '../components/OrderResume'
import { useAuth } from '../contexts/AuthContext'
import { useCart } from '../contexts/CardContext'
import { createPaymentSession } from '../services/api'

function Order () {
  const { state: { cart, total } } = useCart()
  const { state: { user } } = useAuth()
  console.log(JSON.stringify(user))

  const [formData, setFormData] = useState({
    firstName: user ? user.firstName : '',
    lastName: user ? user.lastName : '',
    email: user ? user.email : '',
    phone: user ? user.phone : '',
    address: user ? user.address : ''
  })

  const handlePayment = async (e) => {
    e.preventDefault()
    // on enregistre les infos de l'utilisateur dans le localstorage pour les réutiliser
    window.localStorage.setItem('ORDER_USER', JSON.stringify(formData))
    const result = await createPaymentSession(cart, formData)
    console.log(JSON.stringify(result))
    if (result && result.url) {
      window.location = result.url
    }
  }

  return (
    <div>
      <OrderResume cart={cart} total={total} />
      <OrderForm data={formData} onChange={setFormData} />
      <button onClick={handlePayment} disabled={cart.length < 1}>
        Commander Maintenant
      </button>
    </div>
  )
}

export default Order
