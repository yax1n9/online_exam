<template>
  <div class="insert">
    <el-tabs v-model="activeName" type="card">
      <el-tab-pane label="单选题" name="singleChoose" style="overflow-y: auto">
        <div class="content">
          <div class="title">
            <h2>题干</h2>
            <TinyMCE ref="title" tinymce_id="title"></TinyMCE>
          </div>
          <div class="options">
            <div class="option" v-for="(item,index) in question.options" :key="item.id">
              <h2>选项（{{ getCapital(index) }}）</h2>
              <TinyMCE :ref="'tinyMce'+index" :tinymce_id="'tinyMce'+index"></TinyMCE>
            </div>
            <el-button type="primary" @click="addOption">添加选项</el-button>
          </div>
          <div class="real-option">
            <h2>正确选项</h2>
            <el-radio-group v-model="question.answer">
              <el-radio :label="index" v-for="(item,index) in question.options" :key="item.id">
                {{ getCapital(index) }}
              </el-radio>
            </el-radio-group>
          </div>
          <div class="subject">
            <h2>试题分类</h2>
            <el-select v-model="question.subject">
              <el-option value="0" label="计算机网络"></el-option>
            </el-select>
          </div>
          <div class="score">
            <h2>分数</h2>
            <el-input type="number" v-model="question.score"></el-input>
          </div>
          <el-button type="primary" @click="submitAdd">确认添加</el-button>
        </div>
      </el-tab-pane>
      <el-tab-pane label="填空题" name="fillBlank">填空题</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import TinyMCE from '@/components/TinyMCE/TinyMCE'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Insert',
  components: {
    TinyMCE
  },
  props: {
    // ChooseQuestion 中请求的分类列表
    subjectList: {
      require: true,
      type: Array
    }
  },
  data () {
    return {
      activeName: 'singleChoose',
      // 单选题的题目格式
      question: {
        title: '',
        options: [
          {
            id: 0,
            content: ''
          },
          {
            id: 1,
            content: ''
          }
        ],
        answer: undefined,
        // 试题分类 科目
        subject: undefined,
        // 题目类型 单选，填空等
        type: 0,
        score: 10
      }
    }
  },
  methods: {
    getCapital (val) {
      return String.fromCharCode(val + 65)
    },
    addOption () {
      this.question.options.push({
        id: this.question.options.length,
        content: ''
      })
    },
    submitAdd () {
      // 题干
      if (this.$refs.title.content.trim() === '') {
        return this.$message.warning('您还没有设置题干，请设置')
      } else {
        this.question.title = this.$refs.title.content.trim()
      }
      // 选项
      for (let i = 0; i < this.question.options.length; i++) {
        if (this.$refs[`tinyMce${i}`][0].content.trim() === '') {
          return this.$message.warning('您还没有设置选项，请设置')
        } else {
          this.question.options[i].content = this.$refs[`tinyMce${i}`][0].content.trim()
        }
      }
      // 答案
      if (this.question.answer === undefined) {
        return this.$message.warning('您还没有设置正确答案！')
      }
      // 分类
      if (this.question.subject === undefined) {
        return this.$message.warning('您还没有设置试题分类！')
      }
      // 分数
      // 题干、选项、答案、分类、分数都添加后 发送请求提交数据
      // 添加到题库， 添加到选中
      console.log(this.question)
      this.$message.success('成功啦')
    }
  }
}
</script>

<style scoped lang="less">
.insert {
  height: 90%;
  width: 100%;

  .el-tabs {
    .el-tab-pane {
      .content {
        h2 {
          padding: 15px 0 10px;
        }

        .el-button {
          margin-top: 15px;
        }

        .el-select, .el-input {
          width: 40%;
        }
      }
    }
  }
}
</style>
