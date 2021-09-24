const getRestaurants = async () => {
  const response = await window.fetch('https://strapi.myidea.fr/restaurants')
  const result = await response.json()
  console.log(result)
  return result
}

module.exports = {
  getRestaurants
}