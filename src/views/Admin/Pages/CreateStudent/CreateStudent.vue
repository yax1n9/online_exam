<template>
  <div class="create-student">
    <div class="content">
      <el-form ref="form" :model="student" label-width="80px" label-position="top" :rules="rules">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="student.name" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="gender">
          <el-select v-model="student.gender" placeholder="请选择性别">
            <el-option value="1" label="男"></el-option>
            <el-option value="0" label="女"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="联系方式" prop="tel">
          <el-input v-model="student.tel" placeholder="请输入联系方式(手机)"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitInsert">提交</el-button>
          <el-button @click="reset">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CreateStudent',
  data () {
    return {
      student: {
        name: '',
        gender: '',
        tel: ''
      },
      rules: {
        name: [
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
        gender: [
          {
            required: true,
            message: '请选择性别',
            trigger: 'change'
          }
        ],
        tel: [
          {
            required: true,
            message: '请输入有效的联系方式',
            pattern: /^1[345789]\d{9}$/,
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    submitInsert () {
      this.$refs.form.validate((valid) => {
        if (valid) {
          // 提交添加请求
          // 根据请求结果提示
          this.$message.success('添加成功')
        } else {
          // alert('添加失败，请填入合法的数据！')
          this.$message.error('添加考生失败，请填入合法的数据！')
        }
      })
    },
    reset () {
      // 重置表单
      this.$refs.form.resetFields()
    }
  }
}
</script>

<style scoped lang="less">
.create-student {
  height: 100%;
  width: 100%;
  background-color: #fefefd;
  border-radius: 10px;
  padding: 10px;

  .content {
    width: 30%;
    height: 100%;
    margin: 0 auto;
    padding: 10px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
