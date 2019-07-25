export default {
  loadOrders(state,data){
    state.orders = data
  },
  confirm(state,id){
    state.orders.filter(order=>order.id==id)
  }
}
