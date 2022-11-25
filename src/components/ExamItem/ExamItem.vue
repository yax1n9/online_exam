<template>
  <div class="exam-item">
    <el-card shadow="hover">
      <div class="exam-name">计算机网络期中</div>
      <div class="classify">计算机网络</div>
      <ul>
        <li>
          <i class="el-icon-date"></i>
          <span>2022-11-25</span>
        </li>
        <li>
          <i class="el-icon-time"></i>
          <span>限时120分钟</span>
        </li>
        <li>
          <i class="el-icon-notebook-1"></i>
          <span>满分100</span>
        </li>
      </ul>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'ExamItem',
  props: {
    examInfo: {
      // required: true,
      type: Object
    }
  }
}
</script>

<style scoped lang="less">
.exam-item {
  width: 350px;
  height: 180px;
  cursor: pointer;

  .el-card {

    height: 100%;
    width: 100%;

    /deep/ .el-card__body {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      .exam-name {
        font-size: 18px;
        font-weight: 700;
        color: #333333;
      }

      .classify {
        font-size: 16px;
        color: #8a8f97;
      }

      ul {
        display: flex;
        align-items: center;
        color: #8a8f97;

        li {
          margin-right: 10px;

          span {
            font-size: 14px;
            padding-left: 5px;
          }

          i {
            font-size: 16px;
            color: #409EFF;
          }
        }
      }
    }
  }
}
</style>
