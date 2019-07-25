<template>
    <span>
      <el-button type="primary" @click="bookOrder">预约</el-button>
      <el-button type="primary" @click="setFlag('ALL')">All</el-button>
      <el-button type="primary" @click="setFlag('Aleady_Book')">已预约</el-button>
      <el-button type="primary" @click="setFlag('Aleady_withdrew')">已取件</el-button>
      <el-button type="primary" @click="setFlag('no_withdrew')">未取件</el-button>
      <el-button type="primary" @click="goAddPage">添加</el-button>

    </span>
</template>

<script>
    export default {
        name: "ButtonGroup",
      data(){
        return{}
      },
      methods:{
        goAddPage(){
          this.$router.push("/add")
        },
        bookOrder(){
          this.$router.push("/book")
        },
        setFlag(flag){
          this.$store.state.flag=flag;
        }
      }
    }
</script>

<style scoped>

</style>
