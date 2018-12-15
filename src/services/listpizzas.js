import Api from '@/services/api'

export default {
  fetchPizzas () {
    return Api().get('/pizzas')
  },
  fetchOrder (id) {
    return Api().get(`/pizzas/${id}`)
  },
  postPizza (pizzas) {
    return Api().post('/pizzas', pizzas,{ headers: {'Content-type': 'application/json'} })
  },
  upvoteOrder (id) {
    return Api().put(`/pizzas/${id}/rating`)
  },
  deleteOrder (id) {
    return Api().delete(`/pizzas/${id}`)
  },
  putOrder (id, pizzas) {
    console.log('REQUESTING ' + pizzas._id + ' ' +
      JSON.stringify(pizzas, null, 5))
    return Api().put(`/pizzas/${id}`, pizzas,
      { headers: {'Content-type': 'application/json'} })
  }

}
