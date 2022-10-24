<template>
  <div class="card-row">
    <el-row :gutter="20">
      <el-col :span="6">
        <greet-card/>
      </el-col>
      <el-col :span="18">
        <el-row :gutter="20">
          <el-col :span="12">
            <need-grade/>
          </el-col>
          <el-col :span="12">
            <month-exam/>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="24">
            <statistics-box/>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import GreetCard from '@/components/Home/CardRow/GreetCard'
import NeedGrade from '@/components/Home/CardRow/NeedGrade'
import MonthExam from '@/components/Home/CardRow/MonthExam'
import StatisticsBox from '@/components/Home/CardRow/StatisticsBox'

export default {
  name: 'CardRow',
  components: {
    GreetCard,
    NeedGrade,
    MonthExam,
    StatisticsBox
  }
}
</script>

<style scoped>

</style>
