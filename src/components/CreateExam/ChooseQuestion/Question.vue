<template>
  <div class="question">
    <el-checkbox></el-checkbox>
    <div class="content">
      <div class="top">
        <el-tag type="primary" effect="plain" size="mini">1/10</el-tag>
        <el-tag type="primary" effect="plain" size="mini">单选</el-tag>
        <el-tag type="primary" effect="plain" size="mini">10分</el-tag>
        这是一道单项选择题（）
      </div>
      <div class="bottom">
        分类：<span>计算机网络</span>
        <span></span>作者：<span>系统管理员</span>
        <span></span>更新于：<span>2022-10-21 17:18</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Question'
}
</script>

<style scoped lang="less">
.question {
  display: flex;
  align-items: center;
  margin-top: 10px;
  border: 1px solid #cccccc;
  border-radius: 10px;
  padding: 10px;
  transition: all 0.2s linear;

  &:hover {
    border-color: deepskyblue;
  }

  .content {
    margin-left: 10px;

    .bottom {
      margin-top: 10px;
      font-size: 13px;
      color: #888888;

      span {
        &:nth-child(even) {
          height: 10px;
          border-right: 2px solid #cccccc;
          margin: 0 8px;
        }
      }
    }
  }
}
</style>
