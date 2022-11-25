<template>
  <div class="create-question">
    <el-tabs v-model="activeName" type="card" @tab-click="tabHandle">
      <el-tab-pane label="选择题" name="singleChoose">
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
      <el-tab-pane label="填空题" name="fillBlank">填空题开发中。。。</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import TinyMCE from '@/components/TinyMCE/TinyMCE'

export default {
  name: 'CreateQuestion',
  components: {
    TinyMCE
  },
  data () {
    return {
      activeName: 'singleChoose',
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
    tabHandle (tab) {
      // tab.index可以用来判断是哪个页
    },
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
      console.log('提交添加')
    }
  }
}
</script>

<style scoped lang="less">
.create-question {
  height: 100%;
  background-color: #fefefd;
  border-radius: 10px;
  padding: 10px;

  .content {
    height: 78vh;
    overflow-y: auto;
    padding: 0 10px;

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
</style>
