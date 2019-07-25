<template>
  <div>
  <el-row type="flex" class="row-bg" justify="center">
    <el-col :span="12"><div class="grid-content bg-purple-light"><ButtonGroup/></div></el-col>
  </el-row>
  <el-row type="flex" class="row-bg" justify="center">
    <el-col :span="12">
      <PackageOrders/>
    </el-col>
  </el-row>
  </div>
</template>

<script>
    import ButtonGroup from './ButtonGroup'
    import PackageOrders from './PackageOrders'
    export default {
        name: "Main",
        components:{
          ButtonGroup,
          PackageOrders
        }
    }
</script>

<style scoped>

  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: left;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }



</style>
