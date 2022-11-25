<template>
  <div class="admin-side-menu">
    <el-menu
        :default-active="$route.path"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        :collapse="isCollapse"
        class="el-menu-vertical-demo"
        router
    >
      <div class="title">
        <i class="el-icon-reading"></i>
        <h4 v-show="!isCollapse">在线考试系统</h4>
      </div>
      <el-menu-item index="/admin/home">
        <i class="el-icon-s-home"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-collection"></i>
          <span>试卷管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/admin/examselect">试卷查询</el-menu-item>
          <el-menu-item index="/admin/examcreate">创建试卷</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span>题库管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/admin/questionselect">题目查询</el-menu-item>
          <el-menu-item index="/admin/questioncreate">添加题目</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-s-data"></i>
          <span>成绩统计</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/admin/gradeselect">考生成绩</el-menu-item>
          <el-menu-item index="/admin/gradestatistic">成绩分段</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-user-solid"></i>
          <span>考生管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/admin/studentselect">考生查询</el-menu-item>
          <el-menu-item index="/admin/studentcreate">添加考生</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'AdminSideMenu',
  data () {
    return {
      menuList: []
    }
  },
  computed: {
    ...mapState('asideMenu', ['isCollapse'])
  },
  methods: {},
  created () {
  }
}
</script>

<style scoped lang="less">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 250px;
  min-height: 400px;
}

.admin-side-menu {
  height: 100vh;

  .el-menu {
    height: 100vh;
    border: none;

    .title {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 70px;
      line-height: 70px;
      font-size: 18px;
      color: white;

      i {
        font-size: 24px;
      }

      h4 {
        margin-left: 10px;
      }
    }
  }
}
</style>
