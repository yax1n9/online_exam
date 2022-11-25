<template>
  <div class="select-student">
    <!-- 搜索 -->
    <header>
      <div class="header-left">
        <el-button type="primary" size="medium">新增考生</el-button>
      </div>
      <div class="header-right">
        <el-input v-model="keyword" placeholder="输入关键词"></el-input>
        <el-button type="primary" size="medium" @click="goSearch">搜索</el-button>
      </div>
    </header>
    <!-- 表格 -->
    <div class="content">
      <el-table :data="studentList"
                style="width: 100%; height: 100%;"
                border
                height="100%"
      >
        <el-table-column
            type="index"
        ></el-table-column>
        <el-table-column
            prop="studentName"
            label="姓名"
        ></el-table-column>
        <el-table-column
            prop="studentGender"
            label="性别"
        ></el-table-column>
        <el-table-column
            prop="studentTel"
            label="联系方式"
        ></el-table-column>
        <el-table-column
            label="操作"
        >
          <template slot-scope="scope">
            <el-button size="mini" @click="editHandler(scope.row)">修改</el-button>
            <el-button size="mini" type="danger" @click="deleteHandler(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 分页 -->
    <footer>
      <el-pagination
          background
          layout="prev,pager,next"
          :page-size="pageSize"
          :page-count="pageCount"
          :total="total"
      ></el-pagination>
    </footer>
    <!-- 修改对话框 -->
    <el-dialog :visible="editDialogVisible" title="修改" width="30%">
      <el-form label-width="100px" ref="form" :rules="rules" :model="curStudent">
        <el-form-item label="姓名" prop="studentName">
          <el-input v-model="curStudent.studentName"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="studentGender">
          <el-select v-model="curStudent.studentGender">
            <el-option value="1" label="男"></el-option>
            <el-option value="0" label="女"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="联系方式" prop="studentTel">
          <el-input v-model="curStudent.studentTel"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitEdit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'SelectStudent',
  data () {
    return {
      keyword: '',
      studentList: [{
        studentName: '秦亚星',
        studentGender: '1',
        studentTel: 19818956551
      }],
      curStudent: {},
      editDialogVisible: false,
      deleteDialogVisible: false,
      pageSize: 13,
      pageCount: 1,
      total: 14,
      rules: {
        studentName: [
          {
            required: true,
            message: '请输入姓名',
            trigger: 'blur'
          },
          {
            min: 2,
            max: 12,
            message: '长度为2-12个字符',
            trigger: 'blur'
          }
        ],
        studentGender: [{
          required: true,
          message: '请选择性别',
          trigger: 'change'
        }],
        studentTel: [{
          required: true,
          message: '请输入合法的联系方式',
          pattern: /^1[345789]\d{9}$/,
          trigger: 'blur'
        }]
      }
    }
  },
  methods: {
    initStudentList () {
    },
    // 搜索
    goSearch () {
    },
    // 点击修改
    editHandler (student) {
      this.curStudent = JSON.parse(JSON.stringify(student))
      this.editDialogVisible = true
    },
    // 提交修改
    submitEdit () {
      this.$refs.form.validate((valid) => {
        if (valid) {
          // 提交 curStudent
          // 提示
          this.$message.success('修改成功')
          // 关闭dialog
          this.editDialogVisible = false
          // 刷新数据列表
          this.initStudentList()
        } else {
          this.$message.error('修改失败，请输入合法的信息')
        }
      })
    },
    // 点击删除
    deleteHandler (student) {
      // 确定框
      this.$confirm(`是否删除考生${this.curStudent.name}?`, '删除', {
        cancelButtonText: '取消',
        confirmButtonText: '确定',
        type: 'warning'
      }).then(() => {
        this.curStudent = student
        // 发送请求提交删除
        this.$message.success('删除成功')
      }).catch(() => {
        // 取消删除
        this.$message.info('取消删除')
      })
    }
  },
  created () {
    this.initStudentList()
  }
}
</script>

<style scoped lang="less">
.select-student {
  height: 100%;
  width: 100%;
  background-color: #fefefd;
  border-radius: 10px;
  padding: 10px;

  header {
    display: flex;
    justify-content: space-between;

    .header-right {
      width: 40%;
      text-align: right;

      .el-input {
        width: 50%;
      }

      .el-button {
        margin-left: 10px;
      }
    }
  }

  .content {
    height: calc(100% - 87px);
    margin-top: 10px;
  }

  footer {
    margin-top: 7px;
    text-align: right;
  }

  .el-dialog {
    .el-input, .el-select {
      width: 80%;
    }
  }
}
</style>
