<template>
  <div class="choose">
    <div class="top">
      <el-checkbox label="全选"></el-checkbox>
      <el-select value="" placeholder="试题分类">
        <el-option value="1" label="计算机网络"></el-option>
      </el-select>
      <el-select value="" placeholder="选择题型">
        <el-option value="1" label="选择题"></el-option>
        <el-option value="2" label="填空题"></el-option>
      </el-select>
    </div>
    <div class="content">
      <question/>
      <question/>
      <question/>
      <question/>
      <question/>
      <question/>
    </div>
  </div>
</template>

<script>
import Question from '@/components/CreateExam/ChooseQuestion/Question'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Choose',
  components: {
    Question
  }
}
</script>

<style scoped lang="less">
.choose {
  height: 100%;

  .top {
    .el-checkbox {
      margin-right: 10px;
    }

    .el-select {
      width: 150px;
      margin-right: 10px;
    }
  }

  .content {
    height: 500px;
    width: 100%;
    overflow-y: scroll;
  }
}
</style>
