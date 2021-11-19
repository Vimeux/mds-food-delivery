import DishesListItem from "./DishesListItem"

function DishesList ({ dishes }) {
  if (!dishes || dishes.lenght < 1) {
    return (
      <h3>Aucun plat</h3>
    )
  }
  return (
    <div className='list-container'>
      {dishes.map(dish => {
        return (
          <DishesListItem key={dish._id} dish={dish} />
        )
      })}
    </div>
  )
}

export default DishesList
