<template>
  <div class="create-done">
    <el-result icon="success" title="试卷创建完成" subTitle="去试卷列表发布试卷">
      <template slot="extra">
        <el-button type="primary" size="medium" @click="$router.push({name:'exam_select'})">试卷列表</el-button>
      </template>
    </el-result>
  </div>
</template>

<script>
export default {
  name: 'CreateDone'
}
</script>

<style scoped lang="less">
.create-done {
  height: 100%;
  background-color: #fefefd;
  border-radius: 10px;

  .el-result {
    height: 100%;
  }
}
</style>
