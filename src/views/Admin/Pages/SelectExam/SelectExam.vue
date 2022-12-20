<template>
  <div class="select-exam">
    <header>
      <div class="header-left">
        <el-checkbox v-model="isFullCheck" label="全选" @change="allChange"></el-checkbox>
        <el-button type="primary" @click="$router.push({name:'exam_create'})">新建试卷</el-button>
      </div>
      <div class="header-right">
        <!--<el-select value="" placeholder="考试状态" clearable>-->
        <!--  <el-option value="1" label="草稿"></el-option>-->
        <!--  <el-option value="3" label="未开始"></el-option>-->
        <!--  <el-option value="2" label="考试中"></el-option>-->
        <!--  <el-option value="4" label="已结束"></el-option>-->
        <!--</el-select>-->
        <el-input v-model="keyword" placeholder="请输入关键字" prefix-icon="el-icon-search" @change="initExamList" clearable @clear="initExamList"></el-input>
      </div>
    </header>
    <el-empty description="暂无数据" v-if="!tableList[0]"></el-empty>
    <div class="exam-list" v-if="tableList[0]">
      <exam-info
          v-for="item in tableList"
          :key="item.examId"
          :exam="item"/>
    </div>
    <footer>
      <el-pagination
          background
          layout="prev, pager, next"
          @current-change="initExamList"
          :current-page.sync="currentPage"
          :page-size="pageSize"
          :total="total">
      </el-pagination>
    </footer>
  </div>
</template>

<script>
import ExamInfo from '@/components/ExamInfo/ExamInfo'
import { getExamPageByCondition } from '@/api'

export default {
  name: 'SelectExam',
  components: {
    ExamInfo
  },
  data () {
    return {
      tableList: [],
      keyword: null,
      isFullCheck: false,
      currentPage: 1,
      pageSize: 5,
      total: 0
    }
  },
  computed: {},
  methods: {
    /**
     * 初始化请求试卷列表
     */
    async initExamList () {
      const params = {}
      if (this.keyword) {
        params.title = this.keyword
      }
      const res = await getExamPageByCondition(this.currentPage, this.pageSize, params)
      if (res.data.success) {
        this.tableList = res.data.data.records
        this.total = res.data.data.total
        this.handleTableList(false)
      }
    },
    /**
     * 处理列表数据，为每一条数据设置响应式多选框状态
     */
    handleTableList (val) {
      this.tableList.forEach(item => {
        if (item.isCheck === undefined) {
          this.$set(item, 'isCheck', val)
        } else {
          item.isCheck = val
        }
      })
    },
    /**
     *  全选时触发
     */
    allChange () {
      if (this.isFullCheck) {
        this.handleTableList(true)
      } else {
        this.handleTableList(false)
      }
    },
    /**
     *  自定义事件
     * @param examInfo
     */
    switchIsCheck (examInfo) {
      // 先更新全选状态
      if (examInfo.isCheck) {
        this.isFullCheck = !this.tableList.some(item => !item.isCheck)
      } else {
        this.isFullCheck = false
      }
      // 找到对应考试信息并修改状态
      this.tableList.some(item => {
        if (item.examId === examInfo.examId) {
          item.isCheck = examInfo.isCheck
          return true
        } else {
          return false
        }
      })
    }
  },
  created () {
    this.initExamList()
    // ExamInfo中触发的事件，切换当前页面全选按钮的状态
    this.$bus.$on('switchIsCheck', this.switchIsCheck)
  }
}
</script>

<style scoped lang="less">
.select-exam {
  height: 100%;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    background-color: #fefefd;
    z-index: 2;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 5px 10px 0 rgb(0 0 0 / 5%);

    .header-left {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-left: 10px;

      .el-button {
        margin-left: 20px;
      }
    }

    .header-right {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .el-select {
        width: 110px;
      }

      .el-input {
        margin-left: 10px;
        width: 200px;
      }
    }
  }

  .exam-list {
    display: flex;
    flex-direction: column;
  }

  footer {
    text-align: right;
    margin-top: 10px;

    /deep/ .el-pagination {

      .el-pager {
        li {
          background-color: #fff;
        }
      }

      .btn-prev, .btn-next {
        background-color: #fff;
      }
    }
  }
}
</style>
