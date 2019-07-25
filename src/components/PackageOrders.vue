<template>
  <el-table
    :data="orders"
    style="width: 100%">
    <el-table-column
      prop="id"
      label="运单号"
      width="180">
    </el-table-column>
    <el-table-column
      prop="owner"
      label="收件人"
      width="180">
    </el-table-column>
    <el-table-column
      prop="phone"
      label="电话">
    </el-table-column>
    <el-table-column
      prop="status"
      label="状态">
    </el-table-column>
    <el-table-column value-format="yyyy-MM-dd HH:mm:ss"
      prop="bookingTime"
      label="预约时间">
    </el-table-column>
    <el-table-column
      label="操作">
      <template slot-scope="scope">
        <el-button v-if="scope.row.status !== '已取件'" @click="handleConfirm(scope.row)">确认收货</el-button>
      </template>
    </el-table-column>
  </el-table>


</template>

<script>
    import OrderItem from './OrderItem'
    export default {
        name: "PackageOrders",
        components:{
          OrderItem
        },
        computed:{
          orders(){
            switch (this.$store.state.flag){
              case 'ALL':
                return this.$store.state.orders;
              case "Aleady_Book":
                return this.$store.state.orders.filter(order=>order.status==="已预约");
              case "Aleady_withdrew":
                return this.$store.state.orders.filter(order=>order.status==="已取件");
              case "no_withdrew":
                return this.$store.state.orders.filter(order=>order.status==="未取件");
              default:
                return this.$store.state.orders;
            }


          }
        },
        mounted(){
          this.$store.dispatch('getOrders');
        },
        methods:{
          handleConfirm(row){
            this.$store.dispatch("confirmOrder",row.id);
            this.$store.dispatch("getOrders");
          }
        }
    }
</script>

<style scoped>

</style>
