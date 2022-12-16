<template>
  <div class="examing">
    <el-row>
      <div class="header">
        <div class="title">进行中的考试</div>
        <div class="tip">
          <p>正在进行的考试：<i>{{ currentExamCount }}</i>&nbsp;个</p>
          <p>未完成人数：<i>0</i>&nbsp;人</p>
        </div>
      </div>
      <div class="content">
        <el-table border height="290px" style="width: 100%;" :data="onGoingExamList">
          <el-table-column label="试卷名称" prop="title">
          </el-table-column>
          <el-table-column label="试卷分类" prop="subjectName">
          </el-table-column>
          <el-table-column label="结束时间" prop="endTime">
            <template slot-scope="scope">
              {{ formatTime(scope.row.endTime) }}
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-link type="primary" @click="submitExam(scope.row.examId)">立即收卷</el-link>
            </template>
          </el-table-column>
        </el-table>
        <!--<el-pagination-->
        <!--    background-->
        <!--    layout="prev, pager, next"-->
        <!--    :current-page.sync="currentPage"-->
        <!--    :page-size="pageSize"-->
        <!--    :total="total">-->
        <!--</el-pagination>-->
      </div>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import moment from 'moment'
import { modifyExamById } from '@/api'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Examling',
  data () {
    return {
      // currentPage: 1,
      // pageSize: 5,
      // total: 0
    }
  },
  computed: {
    ...mapGetters('adminHome', ['currentExamCount', 'onGoingExamList'])
  },
  methods: {
    formatTime (time) {
      return moment(time).format('YYYY-MM-DD HH:mm:ss')
    },
    async submitExam (examId) {
      // 提交修改把对应试卷状态改为结束 is_begin=0 is_end=1
      console.log(examId)
      const params = {
        examId: examId,
        isBegin: 0,
        isEnd: 1
      }
      const res = await modifyExamById(params)
      if (res.data.success) {
        this.$message.success('修改成功！')
        // 重新请求数据
      }
    }
  }
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
