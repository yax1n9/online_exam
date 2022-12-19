<template>
  <div class="question" :class="{active:questionInfo.isChecked===true}" @click.stop="questionClick">
    <div class="left">
      <div @click.stop v-if="!operateVisible">
        <el-checkbox v-model="questionInfo.isChecked" @change="handleCheck"></el-checkbox>
      </div>
      <div class="content">
        <div class="top">
          <el-tag type="primary" effect="plain" size="mini">{{ index }}/{{ count }}</el-tag>
          <el-tag type="primary" effect="plain" size="mini">{{ question.type === 0 ? '单选' : '填空' }}</el-tag>
          <span v-html="question.title" style="margin-left: 5px; display: inline-block"></span>
        </div>
        <div class="bottom">
          分类：<span>{{ question.subjectName }}</span>
          <!--<span></span>作者：<span>系统管理员</span>-->
          <!--<span></span>更新于：<span>2022-10-21 17:18</span>-->
        </div>
      </div>
    </div>
    <div class="operate right" v-if="operateVisible">
      <!--<el-link icon="el-icon-edit" @click="editQuestion">编辑</el-link>-->
      <el-link icon="el-icon-delete" @click="deleteQuestion">删除</el-link>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Question',
  props: {
    question: {
      required: true,
      type: Object
    },
    // 操作按钮是否可视
    operateVisible: {
      type: Boolean,
      default: false
    },
    // 使用场景 0：选择试题ChooseQuestion  1：查询试题：SelectQuestion
    scene: {
      required: true,
      type: Number
    },
    // 按需传递的删除函数
    delQuestion: {
      type: Function
    },
    // index 序号
    index: {
      required: true,
      type: Number
    },
    // count 题目数量
    count: {
      required: true,
      type: Number
    }
  },
  data () {
    return {
      questionInfo: {}
    }
  },
  computed: {},
  watch: {
    question: {
      handler (newVal) {
        this.questionInfo = newVal
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    handleCheck () {
      this.$bus.$emit('switchIsCheck', this.questionInfo)
    },
    questionClick () {
      if (!this.operateVisible) {
        this.questionInfo.isChecked = !this.questionInfo.isChecked
        this.handleCheck()
      }
    },
    deleteQuestion () {
      this.$confirm('是否删除试题xxx', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // 根据使用场景不同，应该调用不同的处理函数
        // 触发删除事件
        if (this.scene === 0) {
          this.$bus.$emit('deleteQuestion', this.questionInfo)
        } else if (this.scene === 1) {
          // 查询试题场景
          console.log('删除')
          if (this.delQuestion) {
            this.delQuestion()
          }
        }
        this.$message.success('删除成功')
      }).catch(() => {
        this.$message.info('已取消删除')
      })
    },
    editQuestion () {
      // 执行修改操作
      // 根据使用场景不同，应该调用不同的处理函数
      // 1. 弹出修改操作对话框
      // 2. 可以修改题目，答案，正确答案，分值。。。
      // 3. 修改数据库中的数据(异常捕获)， 修改仓库数据，修改questionList copyQuestionList copyHasCheckedQuestionList
    }
  }
}
</script>

<style scoped lang="less">
.active {
  border: 1px solid deepskyblue !important;
}

.question {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  border: 1px solid #cccccc;
  border-radius: 10px;
  padding: 10px;
  transition: all 0.2s linear;

  &:hover {
    border-color: deepskyblue;
  }

  .left {
    display: flex;
    align-items: center;

    .content {
      margin-left: 10px;

      .bottom {
        margin-top: 10px;
        font-size: 13px;
        color: #888888;

        span {
          &:nth-child(even) {
            height: 10px;
            border-right: 2px solid #cccccc;
            margin: 0 8px;
          }
        }
      }
    }
  }

  .right {
    .el-link {
      margin-left: 5px;
    }
  }
}
</style>
