<template>
  <div class="exam-info" :class="{active:examInfo.isCheck===true}">
    <el-row :gutter="10">
      <el-col :span="1">
        <div class="check-box">
          <el-checkbox v-model="examInfo.isCheck" @change="handleCheck"></el-checkbox>
        </div>
      </el-col>
      <el-col :span="23">
        <div class="detail-box">
          <div class="cover">
            <img src="../../assets/img/exam_cover_default.png" alt="">
          </div>
          <div class="detail">
            <div class="detail-top">
              <div class="detail-left">
                <div class="header">
                  <p class="title">试卷1</p>
                  <el-tag type="primary">草稿</el-tag>
                </div>
                <ul class="detail-list">
                  <li>默认分类</li>
                  <li>固定试题</li>
                  <li>总分100分</li>
                  <li>共10道题</li>
                  <li>限制120分钟</li>
                </ul>
              </div>
              <!--<div class="finish-num">-->
              <!--  <i>0</i>-->
              <!--  <p>已考次数</p>-->
              <!--</div>-->
              <el-button type="primary">发布</el-button>
            </div>
            <div class="operates">
              <div class="create-info">
                <span class="create-by">系统管理员</span>
                <span class="create-time">创建于2022/10/19</span>
              </div>
              <ul class="btns">
                <li>置顶试卷</li>
                <li></li>
                <li>预览考试</li>
                <li></li>
                <li>管理试题</li>
                <li></li>
                <li>设置</li>
              </ul>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'ExamInfo',
  data () {
    return {
      examInfo: {}
    }
  },
  props: {
    exam: {
      require: true,
      type: Object
    }
  },
  methods: {
    handleCheck () {
      this.$bus.$emit('switchIsCheck', this.examInfo)
    }
  },
  created () {
    this.examInfo = this.exam
  }
}
</script>

<style scoped lang="less">
.active {
  border: 1px solid deepskyblue !important;
}

.exam-info {
  width: 100%;
  height: 140px;
  background-color: #fefefd;
  box-shadow: 0 5px 10px 0 rgb(0 0 0 / 5%);
  padding: 16px;
  border-radius: 10px;
  border: 1px solid #cccccc;
  margin-top: 10px;

  &:hover {
    border: 1px solid deepskyblue;
  }

  .check-box {
    width: 100%;
    height: 108px;
    text-align: center;
    line-height: 108px;
  }

  .detail-box {
    display: flex;
    //margin-left: 10px;

    .cover {
      overflow: hidden;
      width: 140px;
      height: 105px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .detail {
      width: 100%;
      //display: flex;
      //justify-content: space-between;
      margin-left: 20px;

      .detail-top {
        width: 100%;
        display: flex;
        justify-content: space-between;

        .detail-left {
          .header {
            display: flex;
            align-items: center;

            .title {
              font-size: 18px;
              font-weight: 700;
              margin-right: 5px;
            }
          }

          .detail-list {
            margin-top: 15px;
            display: flex;
            font-size: 14px;
            color: #707070;

            li {
              margin-right: 10px;
              padding-right: 10px;
              border-right: 1px solid #cccccc;

              &:last-child {
                border-right: none;
              }
            }

          }
        }

        .finish-num {
          i {
            font-size: 40px;
            color: #0086b3;
          }

          p {
            font-size: 14px;
            color: #888888;
          }
        }

        .el-button {
          width: 70px;
          height: 38px;
        }
      }

      .operates {
        display: flex;
        justify-content: space-between;
        margin-top: 16px;

        .create-info {
          font-size: 14px;
          color: #888888;

          .create-by {
            margin-right: 10px;
          }
        }

        .btns {
          display: flex;

          li {
            font-size: 14px;
            color: darkblue;
            cursor: pointer;

            &:hover {
              color: royalblue;
            }

            &:nth-child(even) {
              width: 1px;
              height: 15px;
              background-color: #cccccc;
              margin: 0 10px;
              cursor: default;
            }
          }
        }
      }
    }
  }
}
</style>
