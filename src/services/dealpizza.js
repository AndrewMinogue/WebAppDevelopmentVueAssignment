import Api from '@/services/api'

export default {
  fetchPizzaDeals () {
    return Api().get('/pizzadeal')
  },
  fetchPizzaDeal (id) {
    return Api().get(`/pizzadeal/${id}`)
  },
  postPizzaDeal (pizzas) {
    return Api().post('/pizzadeal', pizzas,{ headers: {'Content-type': 'application/json'} })
  },
  upvotePizzaDeal (id) {
    return Api().put(`/pizzadeal/${id}/rating`)
  },
  deletePizzaDeal (id) {
    return Api().delete(`/pizzadeal/${id}`)
  },
  putPizzaDeal (id, pizzadeal) {
    console.log('REQUESTING ' + pizzadeal._id + ' ' +
      JSON.stringify(pizzadeal, null, 5))
    return Api().put(`/pizzadeal/${id}`, pizzadeal,
      { headers: {'Content-type': 'application/json'} })
  }

}
