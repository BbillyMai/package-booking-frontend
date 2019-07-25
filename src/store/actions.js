import axios from 'axios'
const baseUrl = "http://localhost:8888/packageOrders/"

export default {

  getOrders({commit}){
    axios.get(baseUrl).then(response=>{
      commit('loadOrders',response.data)
    }).catch(error=>console.log(error.toString()));
  },
  addOrder({},obj){
    axios.post(baseUrl,obj).then(()=>{

    })
  },
  confirmOrder({commit},id){
    axios.put(baseUrl+id).then(()=>{

    });
  },
  bookOrderTime({},obj){
    axios.put(baseUrl+obj.id,{
      params: {
        bookingTime:obj.bookingTime
      }
    })
  }
}
