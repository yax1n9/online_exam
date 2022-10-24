<template>
  <div class="examing">
    <el-row>
      <div class="header">
        <div class="title">进行中的考试</div>
        <div class="tip">
          <p>正在进行的考试：<i>0</i>&nbsp;个</p>
          <p>未完成人数：<i>0</i>&nbsp;人</p>
        </div>
      </div>
      <div class="content">
        <el-table border height="100%" style="width: 100%;">
          <el-table-column label="考试名称">
            <!--计算机组成原理-->
          </el-table-column>
          <el-table-column label="考试时间">
            <!--2022-10-19 08:58:00 至 2022-10-31 23:55:00-->
          </el-table-column>
          <el-table-column label="未完成人数">
            <!--10-->
          </el-table-column>
          <el-table-column label="操作">
            <!--查看考试监控-->
          </el-table-column>
        </el-table>
        <el-pagination
            background
            layout="prev, pager, next"
            :current-page="1"
            :page-size="10"
            :total="10">
        </el-pagination>
      </div>
    </el-row>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Examling'
}
</script>

<style scoped lang="less">
.examing {
  margin-top: 20px;
  box-shadow: 0 5px 10px 0 rgb(0 0 0 / 5%);

  .el-row {
    background-color: #fdfdfe;
    border-radius: 10px;
    padding: 10px;

    .header {
      display: flex;
      justify-content: space-between;

      .title {
        font-size: 18px;
        font-weight: 700;
        padding: 5px;
      }

      .tip {
        display: flex;

        p {
          font-size: 14px;
          margin-left: 10px;

          i {
            font-weight: 700;
            color: #ee9900;
          }
        }
      }
    }

    .content {
      margin-top: 10px;
      text-align: right;

      .el-pagination {
        margin-top: 10px;
      }
    }
  }
}
</style>
