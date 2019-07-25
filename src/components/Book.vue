<template>
  <el-row type="flex" class="row-bg" justify="center">
    <el-col :span="12">
      <el-form :model="bookInfo" >
        <el-form-item label="运单号">
          <el-input v-model="bookInfo.id" placeholder="运单号"></el-input>
        </el-form-item>
        <el-form-item label="预定时间">
          <el-date-picker
            v-model="bookInfo.bookingTime"
            type="datetime"
            placeholder="选择日期时间"
            default-time="12:00:00">
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit()">添加</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
    export default {
        name: "Book",
        data(){
          return{
            bookInfo:{
              id:"",
              bookingTime:""
            }
          }
        },
        methods:{
          onSubmit(){
            this.$store.dispatch("bookOrderTime",this.bookInfo);
            this.$router.push("/");

          }
        }
    }
</script>

<style scoped>

</style>
