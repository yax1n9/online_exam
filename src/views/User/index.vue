<template>
  <div class="user-view">
    <el-container>
      <el-header>
        <user-header/>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import UserHeader from '@/components/Header/UserHeader'

export default {
  name: 'UserView',
  components: {
    UserHeader
  }
}
</script>

<style scoped lang="less">
.user-view {
  width: 100%;
  height: 100%;

  .el-container {
    height: 100%;
    margin-bottom: 40px;

    .el-header {
      color: #333;
      //height: 80px;
      padding: 0;
    }

    .el-main {
      background-color: #E9EEF3;
      //padding: 0;
      color: #333;
      //text-align: center;
    }
  }
}
</style>
