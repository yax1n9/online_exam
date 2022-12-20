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
            <!--../../assets/img/exam_cover_default.png-->
            <img :src="`http://localhost:8080/files/${examInfo.cover}`" alt="">
          </div>
          <div class="detail">
            <div class="detail-top">
              <div class="detail-left">
                <div class="header">
                  <p class="title">{{ examInfo.title }}</p>
                  <!--<el-tag type="primary">草稿</el-tag>-->
                </div>
                <ul class="detail-list">
                  <li>{{ examInfo.subjectName }}</li>
                  <li>总分100分</li>
                  <li>共10道题</li>
                  <li>限制{{ keepTime(examInfo.startTime, examInfo.endTime) }} 分钟</li>
                </ul>
              </div>
              <!--<div class="finish-num">-->
              <!--  <i>0</i>-->
              <!--  <p>已考次数</p>-->
              <!--</div>-->
              <el-button type="primary" @click="settingDialogVisible = true">设置</el-button>
            </div>
            <div class="operates">
              <div class="create-info">
                <span class="create-by">考试时间：</span>
                <span class="create-time">{{ formatTime(examInfo.startTime) }} - {{
                    formatTime(examInfo.endTime)
                  }}</span>
              </div>
              <!--<ul class="btns">-->
              <!--<li>置顶试卷</li>-->
              <!--<li></li>-->
              <!--<li>预览考试</li>-->
              <!--<li></li>-->
              <!--<li>管理试题</li>-->
              <!--<li></li>-->
              <!--<li>设置</li>-->
              <!--</ul>-->
            </div>
          </div>
        </div>
      </el-col>
    </el-row>

    <!-- 设置对话框 -->
    <el-dialog :visible.sync="settingDialogVisible" :title="`设置《${examInfo.title}》`">
      <el-form ref="form" :model="examInfo" label-width="80px">
        <el-form-item label="标题">
          <el-input v-model="examInfo.title"></el-input>
        </el-form-item>
        <el-form-item label="分类">
          <el-select v-model="examInfo.subjectId">
            <el-option
                v-for="item in subjectList"
                :key="item.subjectId"
                :value="item.subjectId"
                :label="item.name"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="封面">
          <el-upload
              class="cover-uploader"
              action="http://localhost:8080/files"
              :show-file-list="false"
              :on-success="handleCoverSuccess"
              :before-upload="beforeCoverUpload">
            <img v-if="examInfo.cover" :src="`http://localhost:8080/files/${examInfo.cover}`" class="cover"
                 alt="封面">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import moment from 'moment'
import { selectSubjectList } from '@/api'

export default {
  name: 'ExamInfo',
  props: {
    exam: {
      required: true,
      type: Object
    }
  },
  data () {
    return {
      examInfo: {},
      settingDialogVisible: false,
      subjectList: []
    }
  },
  methods: {
    async initSubjectList () {
      const res = await selectSubjectList()
      if (res.data.success) {
        this.subjectList = res.data.data
      } else {
        await this.initSubjectList()
      }
    },
    /**
     * 图片上传成功后的回调
     * @param res
     * @param file
     */
    handleCoverSuccess (res, file) {
      this.examInfo.cover = res.data
      this.examInfo.cover = this.examInfo.cover.substring(this.examInfo.cover.lastIndexOf('/') + 1)
      // 请求成功后后端会返回图片的url地址，使用这个地址回显图片
    },
    /**
     * 图片上传前的回调
     * @param file
     * @returns {boolean}
     */
    beforeCoverUpload (file) {
      const isPNG = file.type === 'image/png'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isPNG) {
        this.$message.error('上传图片只能是 PNG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传图片大小不能超过 2MB!')
      }
      return isPNG && isLt2M
    },
    handleCheck () {
      this.$bus.$emit('switchIsCheck', this.examInfo)
    },
    /**
     * 返回持续时间
     * @param startTime
     * @param endTime
     */
    keepTime (startTime, endTime) {
      return (moment(endTime).diff(moment(startTime))) / 1000 / 60
    },
    /**
     * 返回格式化后的时间
     * @param time
     */
    formatTime (time) {
      return moment(time).format('YYYY-MM-DD HH:mm')
    }
  },
  created () {
    this.examInfo = JSON.parse(JSON.stringify(this.exam))
    this.initSubjectList()
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
