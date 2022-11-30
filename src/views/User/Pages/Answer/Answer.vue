<template>
  <div class="answer">
    <el-container>
      <el-header height="80px">
        <header>
          <div class="header-left">计算机网络 - 期末考试</div>
          <div class="header-right">满分100分 剩余120min</div>
        </header>
      </el-header>
      <el-container>
        <el-aside width="315px">
          <div class="aside-option-card">
            <ul class="aside-top">
              <li>
                <i class="current"></i>
                <span>当前</span>
              </li>
              <li>
                <i class="has-answer"></i>
                <span>已答</span>
              </li>
              <li>
                <i class="no-answer"></i>
                <span>未答</span>
              </li>
              <li>
                <i class="mark"></i>
                <span>标记</span>
              </li>
            </ul>
            <ul class="aside-content">
              <li>选择题</li>
              <li
                  v-for="(item,index) in chooseQuestionList"
                  :key="index"
                  @click="changeCurrent(index)"
                  :class="{'current':currentIndex===index,
                   'has-answer':item.isAnswer && currentIndex!==index,
                   'no-answer':!item.isAnswer && currentIndex!==index,
                   'mark':item.isMark && currentIndex!==index
                  }"
              >
                {{ index + 1 }}
              </li>
            </ul>
            <div class="aside-footer">
              <el-button type="primary" size="medium" @click="submitAnswer">提交试卷</el-button>
            </div>
          </div>
        </el-aside>
        <el-container>
          <el-main>
            <div class="answer-area">
              <div class="question-title">
                <span>{{ currentIndex + 1 }}. </span>{{ chooseQuestionList[currentIndex].questionTitle }}
              </div>
              <div class="options">
                <!-- 绑定到答案列表上 -->
                <el-radio-group v-model="chooseQuestionAnswerList[currentIndex]" @input="changeAnsState">
                  <el-radio v-for="item in chooseQuestionList[currentIndex].options"
                            :key="item.optionId"
                            :label="item.optionId">
                    {{ item.optionName }}
                  </el-radio>
                </el-radio-group>
              </div>
            </div>
          </el-main>
          <el-footer height="80px">Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Answer',
  data () {
    return {
      chooseQuestionList: [
        {
          questionTitle: '这是第一道选择题',
          options: [
            {
              optionId: 0,
              optionName: '选项A'
            },
            {
              optionId: 1,
              optionName: '选项B'
            },
            {
              optionId: 2,
              optionName: '选项C'
            }
          ],
          isAnswer: false,
          isMark: false
        },
        {
          questionTitle: '这是第二道选择题',
          options: [
            {
              optionId: 0,
              optionName: '选项A'
            },
            {
              optionId: 1,
              optionName: '选项B'
            }
          ],
          isAnswer: false,
          isMark: false
        },
        {
          questionTitle: '这是第三道选择题',
          options: [
            {
              optionId: 0,
              optionName: '选项A'
            },
            {
              optionId: 1,
              optionName: '选项B'
            },
            {
              optionId: 2,
              optionName: '选项C'
            },
            {
              optionId: 3,
              optionName: '选项D'
            }
          ],
          isAnswer: false,
          isMark: false
        }
      ],
      chooseQuestionAnswerList: [], // 选择的答案
      currentIndex: 0
    }
  },
  methods: {
    // 初始化选择题列表
    initChooseQuestionList () {
      console.log('初始化选择题列表')
      // 拿到列表后可能需要给列表添加 isAnswer, isMark两个属性
    },
    // 点击题目选项卡
    changeCurrent (index) {
      this.currentIndex = index
      // 更改题目区域内容
    },
    // 提交试卷
    submitAnswer () {
      console.log('检查答题情况，剩余时间，提交试卷')
    },
    // 当某选择题有答案时就更新左侧对应的样式
    changeAnsState () {
      this.chooseQuestionList[this.currentIndex].isAnswer = true
    }
  },
  created () {
    // 请求试卷信息
    console.log(this.$route.query)
    this.initChooseQuestionList()
  }
}
</script>

<style scoped lang="less">
// 当前
.current {
  border: 1px solid #409EFF !important;
}

// 已答
.has-answer {
  background-color: #67C23A;
}

// 未答
.no-answer {
  background-color: #409EFF;
}

// 标记
.mark {
  background-color: #F56C6C !important;
}

.answer {
  height: 100%;
  width: 100%;

  header {
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    background-color: #fefefd;

    .header-left {
      font-size: 18px;
      color: #000000;
    }

    .header-right {
      font-size: 16px;
      color: #555555;
    }
  }

  .aside-option-card {
    height: 100%;
    padding: 10px;

    .aside-top {
      display: flex;
      justify-content: space-around;
      padding: 20px;
      //margin-top: 10px;
      border: 1px solid #cccccc;
      border-radius: 5px;
      background-color: #fefefd;

      li {
        i {
          display: block;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          border: 1px solid #cccccc;
        }
      }
    }

    .aside-content {
      height: calc(100% - 150px);
      border: 1px solid #cccccc;
      border-radius: 5px;
      background-color: #fefefd;
      padding: 10px 20px;
      margin-top: 10px;

      li {
        display: inline-block;
        width: 30px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        font-size: 16px;
        border-radius: 50%;
        border: 1px solid #cccccc;
        margin: 5px 10px;
        cursor: pointer;

        &:first-child {
          display: block;
          width: 100%;
          text-align: left;
          cursor: default;
          border: none;
        }
      }
    }

    .aside-footer {
      width: 100%;
      text-align: center;
      margin-top: 10px;

      .el-button {
        width: 100%;
      }
    }
  }

  .answer-area {
    width: 100%;
    height: 100%;
    background-color: #fefefd;
    border-radius: 5px;
    border: 1px solid #cccccc;
    padding: 5% 10%;

    .options {
      margin-top: 30px;

      .el-radio {
        display: block;
        margin-bottom: 10px;

        // 选项过长时换行显示  ::deep
        .el-radio__label {
          width: 100% !important;
          text-overflow: ellipsis;
          white-space: normal;
          line-height: 18px;
        }
      }
    }
  }

  .el-container {
    height: 100%;

    .el-header, .el-footer {
      background-color: #B3C0D1;
      color: #333;
      padding: 0;
      line-height: 80px;
    }

    .el-aside {
      background-color: #E9EEF3;
      color: #333;
    }

    .el-main {
      padding: 10px 10px 10px 0;
      background-color: #E9EEF3;
      color: #333;
    }
  }
}
</style>
