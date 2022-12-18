<template>
  <div class="greet-card">
    <el-card>
      <div slot="header" class="header-img">
        <img src="https://wpimg.wallstcn.com/e7d23d71-cf19-4b90-a1cc-f56af8c0903d.png" alt="">
      </div>
      <div class="content">
        <div class="user-title">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-taiyang"></use>
          </svg>
          早上好！{{ name }}
        </div>
        <div class="current-box">
          <div class="current-examinee">
            <p class="title">当前考试人数</p>
            <i>0</i>
          </div>
          <div class="current-exam">
            <p class="title">正在考试试卷</p>
            <i>{{ currentExamCount }}</i>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import jwtDecode from 'jwt-decode'
import { mapGetters } from 'vuex'

export default {
  name: 'GreetCard',
  data () {
    return {
      name: ''
    }
  },
  computed: {
    ...mapGetters('adminHome', ['currentExamCount'])
  },
  mounted () {
    this.name = jwtDecode(localStorage.getItem('token')).name
  }
}
</script>

<style scoped lang="less">
.greet-card {
  .el-card {
    border-radius: 10px;

    /deep/ .el-card__header {
      padding: 0;
      border-bottom: none;

      .header-img {
        height: 164px;
        transition: all 0.2s linear;

        img {
          width: 100%;
          height: 100%;
        }

        &:hover {
          transform: scale(1.1, 1.1);
          filter: contrast(120%);
        }
      }
    }

    .content {
      .user-title {
        display: flex;
        align-items: center;
        font-size: 18px;
        font-weight: 700;
      }

      .current-box {
        display: flex;
        justify-content: space-around;
        margin-top: 10px;
        font-size: 14px;
        color: #888888;

        .current-exam, .current-examinee {
          i {
            font-size: 36px;
            color: #0086b3;
          }
        }
      }
    }
  }
}
</style>
