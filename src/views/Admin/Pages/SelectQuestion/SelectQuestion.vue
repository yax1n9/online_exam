<template>
  <div class="select-question">
    <!-- 搜索 添加 -->
    <header>
      <div class="header-left">
        <el-select v-model="object" placeholder="请选择分类">
          <el-option :value="0" label="计算机网络"></el-option>
        </el-select>
        <el-input v-model="keyword" placeholder="请输入关键字"
                  prefix-icon="el-icon-search"
                  style="margin-left: 8px; width: 50%">
        </el-input>
        <el-button type="primary" style="margin-left: 8px">搜索</el-button>
      </div>
      <div class="header-right">
        <el-button type="primary">新建题目</el-button>
      </div>
    </header>

    <!-- 表格主体 -->
    <div class="content">
      <question v-for="item in questionList"
                :key="item.id"
                :operate-visible="true"
                :question="item"
                :scene="1"
                :del-question="deleteQuestion"
      ></question>
    </div>

    <!-- 分页 -->
    <footer>
      <el-pagination
          background
          layout="prev, pager, next"
          :page-size="pageSize"
          :page-count="pageCount"
          :total="total">
      </el-pagination>
    </footer>
  </div>
</template>

<script>
import Question from '@/components/QuestionInfo/Question'

export default {
  name: 'SelectQuestion',
  components: {
    Question
  },
  data () {
    return {
      questionList: [{ questionId: 1 }, { questionId: 2 }, { questionId: 3 }, { questionId: 4 }, { questionId: 5 }, { questionId: 6 }, { questionId: 7 }, { questionId: 8 }],
      object: undefined,
      keyword: '',
      pageSize: 10,
      pageCount: 1,
      total: 20
    }
  },
  methods: {
    initQuestionList () {
      // 初始化题库列表
    },
    deleteQuestion () {
      // 提交删除试题请求
      console.log('提交删除试题请求')
      // 重新请求试题列表
      this.initQuestionList()
    }
  },
  created () {
    this.initQuestionList()
  }
}
</script>

<style scoped lang="less">
.select-question {
  height: 100%;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fefefd;
    border-radius: 10px;
    padding: 10px;

    .header-left {
      display: flex;
      align-items: center;
    }
  }

  .content {
    height: 85%;
    background-color: #fefefd;
    border-radius: 10px;
    padding: 10px;
    margin-top: 10px;
    overflow-y: auto;
  }

  footer {
    margin-top: 10px;
    text-align: right;

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
