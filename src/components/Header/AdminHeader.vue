<template>
  <div class="header">
    <div class="top">
      <span class="el-icon-menu" @click="COLLAPSE"></span>
      <el-dropdown>
        <el-avatar shape="circle" fit="fill"
                   src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
                   class="el-dropdown-link"
        ></el-avatar>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item divided>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="(item,index) in $route.meta.label" :key="index">{{ item }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'AdminHeader',
  methods: {
    ...mapMutations('asideMenu', ['COLLAPSE'])
  }
}
</script>

<style scoped lang="less">
.header {
  .top {
    height: 54px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    box-shadow: 0 1px 4px rgb(0 21 41 / 8%);

    .el-icon-menu {
      font-size: 20px;
      cursor: pointer;
    }

    .el-dropdown {
      .el-dropdown-link {
        cursor: pointer;
      }
    }
  }

  .el-breadcrumb {
    margin: 8px 0 0 20px;
  }
}
</style>
