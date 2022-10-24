<template>
  <div class="quick-box">
    <el-row>
      <div class="title">快捷操作</div>
      <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6">
        <div class="quick-op">
          <span>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-tianjia"></use>
            </svg>
          </span>
          <span>创建考试</span>
        </div>
      </el-col>
      <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6">
        <div class="quick-op">
          <span>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-addpersonnel-01"></use>
            </svg>
          </span>
          <span>添加考生</span>
        </div>
      </el-col>
      <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6">
        <div class="quick-op">
          <span>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-changjianwenti"></use>
            </svg>
          </span>
          <span>添加题目</span>
        </div>
      </el-col>
      <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6">
        <div class="quick-op">
          <span>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-chengjichaxun"></use>
            </svg>
          </span>
          <span>成绩查询</span>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'QuickBox'
}
</script>

<style scoped lang="less">

.quick-box {
  margin-top: 20px;
  box-shadow: 0 5px 10px 0 rgb(0 0 0 / 5%);

  .el-row {
    background-color: #fdfdfe;
    border-radius: 10px;
    padding: 10px;

    .title {
      font-size: 18px;
      font-weight: 700;
      padding: 5px;
    }

    .el-col {
      display: flex;
      justify-content: center;

      .quick-op {
        width: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
        margin: 5px;
        border: 1px solid #cccccc;
        border-radius: 5px;
        cursor: pointer;
        transition: all 0.2s linear;

        &:hover {
          border: 1px solid #333333;
        }

        span {
          margin-right: 10px;
        }
      }
    }

  }
}
</style>
