<template>
  <el-row type="flex" class="row-bg" justify="center">
    <el-col :span="12">
      <el-form :model="newOrder" >
        <el-form-item label="运单号">
          <el-input v-model="newOrder.id" placeholder="运单号"></el-input>
        </el-form-item>
        <el-form-item label="收件人">
          <el-input v-model="newOrder.owner" placeholder="收件人"></el-input>
        </el-form-item>
        <el-form-item label="手机号码">
          <el-input v-model="newOrder.phone" placeholder="手机号码"></el-input>
        </el-form-item>
        <el-form-item label="重量">
          <el-input v-model="newOrder.weight" placeholder="重量"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">添加</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>

</template>

<script>
    export default {
        name: "Add",
        data(){
          return{
            newOrder:{
              id:"",
              owner:"",
              phone:"",
              weight:0
            }
          }
        },
        methods:{
          onSubmit(){
            this.$store.dispatch("addOrder",this.newOrder);
            this.$router.push("/");
            this.$store.dispatch("getOrders");
          }
        }
    }
</script>

<style scoped>

</style>
