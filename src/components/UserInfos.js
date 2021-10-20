function UserInfos ({ logout }) {
  return (
    <div>
      <h2>Vous etes connecté</h2>
      <button onClick={logout}>Se déconnecter</button>
    </div>
  )
}

export default UserInfos
