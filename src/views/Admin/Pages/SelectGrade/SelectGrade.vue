<template>
  <div class="select-grade">
    <!-- 搜索 -->
    <header>
      <el-input type="text" placeholder="请输入关键词" v-model="keyword"></el-input>
      <el-button type="primary" size="medium" @click="goSearch">搜索</el-button>
    </header>
    <!-- 表格主体 -->
    <div class="content">
      <el-table
          :data="studentList"
          border
          height="100%"
      >
        <el-table-column
            type="index"
            width="50">
        </el-table-column>
        <el-table-column
            prop="name"
            label="姓名"
        ></el-table-column>
        <el-table-column
            prop="phoneNum"
            label="电话"
        ></el-table-column>
        <el-table-column
            label="操作"
        >
          <template slot-scope="scope">
            <el-button
                size="mini"
                @click="handleSelect(scope.row)">查看成绩
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 分页符 -->
    <footer>
      <el-pagination
          background
          layout="prev, pager, next"
          :page-size="pageSize"
          :page-count="pageCount"
          :total="total">
      </el-pagination>
    </footer>

    <!-- 成绩对话框 -->
    <el-dialog title="成绩详情" :visible.sync="gradeDialogVisible">
      <!-- 姓名 筛选 -->
      <div class="top">
        <span>{{ curStudent.name }}的</span>
        <el-select v-model="subject" placeholder="选择分类" size="mini" @change="getHistoryGradeList">
          <el-option :value="0" label="计算机网络"></el-option>
        </el-select>
        <span>成绩</span>
      </div>
      <!-- 图表 -->
      <div class="chart" id="gradeChart">成绩图表</div>
      <span slot="footer" class="dialog-footer">
        <!--<el-button @click="gradeDialogVisible = false">取 消</el-button>-->
        <el-button type="primary" @click="confirmBtn">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { historyGradeOption } from '@/plugins/echartsOptions'

export default {
  name: 'SelectGrade',
  data () {
    return {
      keyword: '',
      studentList: [
        {
          studentId: 0,
          name: '秦亚星',
          phoneNum: '19818956551'
        },
        {
          studentId: 1,
          name: '秦亚星',
          phoneNum: '19818956551'
        },
        {
          studentId: 2,
          name: '秦亚星',
          phoneNum: '19818956551'
        },
        {
          studentId: 3,
          name: '秦亚星',
          phoneNum: '19818956551'
        }, {
          studentId: 4,
          name: '秦亚星',
          phoneNum: '19818956551'
        }, {
          studentId: 5,
          name: '秦亚星',
          phoneNum: '19818956551'
        }, {
          studentId: 6,
          name: '秦亚星',
          phoneNum: '19818956551'
        },
        {
          studentId: 7,
          name: '秦亚星',
          phoneNum: '19818956551'
        },
        {
          studentId: 8,
          name: '秦亚星',
          phoneNum: '19818956551'
        },
        {
          studentId: 9,
          name: '秦亚星',
          phoneNum: '19818956551'
        },
        {
          studentId: 10,
          name: '秦亚星',
          phoneNum: '19818956551'
        },
        {
          studentId: 11,
          name: '秦亚星',
          phoneNum: '19818956551'
        }
      ],
      pageSize: 12,
      pageCount: 1,
      total: 10,
      gradeDialogVisible: false,
      curStudent: {},
      subject: undefined,
      historyGradeList: [{
        studentId: 0,
        studentName: '秦亚星',
        subjectId: 0,
        subjectName: '计算机网络',
        historyGradeList: [
          {
            subjectId: 0,
            examId: 0,
            examName: '计网1',
            date: '2022/11/23 10:48:00',
            grade: 88
          },
          {
            subjectId: 0,
            examId: 1,
            examName: '计网2',
            date: '2022/11/23 10:48:00',
            grade: 99
          },
          {
            subjectId: 0,
            examId: 2,
            examName: '计网3',
            date: '2022/11/23 10:48:00',
            grade: 78
          },
          {
            subjectId: 0,
            examId: 3,
            examName: '计网4',
            date: '2022/11/23 10:48:00',
            grade: 80
          },
          {
            subjectId: 0,
            examId: 4,
            examName: '计网5',
            date: '2022/11/23 10:48:00',
            grade: 67
          }
        ]
      }],
      gradeChart: {},
      gradeChartOption: historyGradeOption
    }
  },
  methods: {
    goSearch () {
    },
    // 分类改变时触发
    handleSelect (student) {
      this.gradeDialogVisible = true
      this.curStudent = student
      this.getHistoryGradeList()
    },
    // 发送请求拿数据并处理赋值给图表
    getHistoryGradeList () {
      // 处理gradeChart需要的数据
      // 绘制图表
      this.drawChart()
    },
    drawChart () {
      this.$nextTick(() => {
        this.gradeChart = this.$echarts.init(document.getElementById('gradeChart'))
        this.gradeChart.setOption(this.gradeChartOption)
        window.addEventListener('resize', () => {
          this.gradeChart.resize()
        })
      })
    },
    confirmBtn () {
      this.gradeDialogVisible = false
      this.gradeChart.dispose()
    }
  }
}
</script>

<style scoped lang="less">
.select-grade {
  height: 100%;
  background-color: #fefefd;
  border-radius: 10px;
  padding: 10px;

  header {
    .el-input {
      width: 200px;
    }

    .el-button {
      margin-left: 10px;
    }
  }

  .content {
    margin-top: 10px;
    height: calc(100% - 87px);
  }

  footer {
    margin-top: 7px;
    text-align: right;
  }

  #gradeChart {
    height: 300px;
  }
}
</style>
