<template>
  <div class="statistic-grade">
    <!-- 选择类别，选择试卷 -->
    <header>
      <el-cascader
          placeholder="选择试卷"
          :props="props"
          clearable
          @change="getGradeListByExamId"
      ></el-cascader>
    </header>
    <div class="content">
      <div id="statisticGrade"></div>
    </div>
  </div>
</template>

<script>
import { statisticGradeOption } from '@/plugins/echartsOptions'
// import Echarts from '@/plugins/echarts'

export default {
  name: 'StatisticGrade',
  data () {
    const _this = this
    return {
      subject: undefined,
      exam: undefined,
      props: {
        lazy: true,
        lazyLoad (node, resolve) {
          console.log(_this)
          const { level } = node
          console.log(level)
          if (level === 0) {
            // 请求subject列表 resolve
            resolve([
              {
                value: 0,
                label: '计算机网络'
              },
              {
                value: 1,
                label: 'web'
              }
            ])
          } else if (level === 1) {
            // node.value 请求 exam 列表， node.value 值设置为subjectId
            resolve([
              {
                value: 0,
                label: '期中',
                leaf: true
              },
              {
                value: 1,
                label: '期末',
                leaf: true
              }
            ])
          }
        }
      },
      statisticGradeChart: {},
      statisticGradeOption: statisticGradeOption
    }
  },
  methods: {
    // 通过选中的考试 请求该考试的所有考生成绩
    getGradeListByExamId () {
      // 已经选中了试卷，调用接口请求当前考试的成绩列表
      // 处理数据，绘制图表
      console.log(111)
      this.drawChart()
    },
    drawChart () {
      this.statisticGradeChart.id && this.statisticGradeChart.dispose()
      this.statisticGradeChart = this.$echarts.init(document.getElementById('statisticGrade'))
      this.statisticGradeChart.setOption(this.statisticGradeOption)
      this.$nextTick(() => {
        window.addEventListener('resize', () => {
          this.statisticGradeChart.resize()
        })
      })
    }
  }
}
</script>

<style scoped lang="less">
.statistic-grade {
  height: 100%;
  background-color: #fefefd;
  border-radius: 10px;
  padding: 10px;

  header {
  }

  .content {
    margin-top: 10px;
    width: 100%;
    height: 90%;

    #statisticGrade {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
