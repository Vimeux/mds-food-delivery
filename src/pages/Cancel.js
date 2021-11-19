import { Link } from 'react-router-dom'

function Cancel () {
  return (
    <div className='container'>
      <h1>OUPS 🤭, le paiement n'est pas passé</h1>
      <Link to='order'>
        <button>
          Réessayer
        </button>
      </Link>
    </div>
  )
}

export default Cancel
