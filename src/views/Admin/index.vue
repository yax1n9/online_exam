<template>
  <div class="admin-view">
    <el-container>
      <el-aside width="auto">
        <admin-side-menu/>
      </el-aside>
      <el-container>
        <el-header height="84px">
          <admin-header/>
        </el-header>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import AdminSideMenu from '@/components/SideMenu/AdminSideMenu'
import AdminHeader from '@/components/Header/AdminHeader'

export default {
  name: 'AdminView',
  components: {
    AdminSideMenu,
    AdminHeader
  }

}
</script>

<style scoped>
.el-header {
  background-color: #fdfdfe;
  color: #333;
  padding: 0;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
}

.el-main {
  height: 100%;
  background-color: #E9EEF3;
  color: #333;
}

.el-container {
  height: 100vh;
}
</style>
