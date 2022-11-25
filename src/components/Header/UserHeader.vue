<template>
  <div class="user-header">
    <div class="logo">
      <i class="el-icon-reading"></i>
      <span>在线考试</span>
    </div>
    <el-menu :default-active="$route.path" class="el-menu-demo" mode="horizontal" router>
      <el-menu-item index="/user/myexams">我的考试</el-menu-item>
      <el-menu-item index="/user/mygrades">我的成绩</el-menu-item>
    </el-menu>
    <div class="avatar">
      <el-dropdown>
        <el-avatar size="medium" class="el-dropdown-link">yx</el-avatar>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserHeader',
  methods: {
    logout () {
      // 清空本地存储
      // 返回登录页面
      this.$router.push({ name: 'login' })
    }
  }
}
</script>

<style scoped lang="less">
.user-header {
  height: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e6e6e6;

  .logo {
    position: relative;
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 10px 0 20px;

    .el-icon-reading {
      font-size: 30px;
    }

    span {
      padding: 0 10px;
    }
  }

  .avatar {
    position: absolute;
    right: 10px;
    top: 10px;

    .el-dropdown-link {
      cursor: pointer;
    }
  }
}
</style>
