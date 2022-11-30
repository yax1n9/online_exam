<template>
  <div class="my-grades">
    <div class="content">
      <el-table
          ref="filterTable"
          :data="gradeList"
          height="100%"
          border
          style="width: 100%">
        <el-table-column
            prop="examDate"
            label="日期"
            sortable
            width="180"
            column-key="date"
        >
        </el-table-column>
        <el-table-column
            prop="examName"
            label="试卷名称">
        </el-table-column>
        <el-table-column
            prop="examSubject"
            label="分类">
        </el-table-column>
        <el-table-column
            prop="examScore"
            label="分数"
            width="100">
        </el-table-column>
        <el-table-column
            prop="isPass"
            label="是否及格"
            width="100"
            :filters="[{ text: '及格', value: 1 }, { text: '不及格', value: 0 }]"
            :filter-method="filterTag"
            filter-placement="bottom-end"
        >
          <template slot-scope="scope">
            <el-tag
                :type="scope.row.isPass === 1 ? 'success' : 'danger'"
                disable-transitions>{{ scope.row.isPass === 1 ? '及格' : '不及格' }}
            </el-tag>
          </template>
        </el-table-column>
      </el-table>
    </div>
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
export default {
  name: 'MyGrades',
  data () {
    return {
      gradeList: [{
        examDate: '2022-11-25',
        isPass: 1
      }, {
        examDate: '2022-11-26',
        isPass: 0
      }, {
        examDate: '2022-11-27',
        isPass: 1
      }],
      pageSize: 12,
      pageCount: 1,
      total: 10
    }
  },
  methods: {
    filterTag (val, row) {
      return row.isPass === val
    }
  }
}
</script>

<style scoped lang="less">
.my-grades {
  background-color: #fefefd;
  border-radius: 10px;
  padding: 20px;
  height: 100%;

  .content {
    height: calc(100% - 52px);
    overflow-y: auto;
  }

  footer {
    margin-top: 10px;
    text-align: right;
  }
}
</style>
