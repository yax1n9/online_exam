<template>
  <div class="login">
    <div class="login-box">
      <h2>账号登录</h2>
      <div class="ipt-box">
        <el-row class="username">
          <el-col :span="6" class="label">用户名</el-col>
          <el-col :span="16">
            <el-input
                v-model="username"
                placeholder="请输入用户名"
                clearable :minlength="6"
                maxlength="16"></el-input>
          </el-col>
        </el-row>
        <el-row class="password">
          <el-col :span="6" class="label">密码</el-col>
          <el-col :span="16">
            <el-input
                v-model="password"
                placeholder="请输入密码"
                :show-password="true"
                :minlength="6"
                maxlength="16"></el-input>
          </el-col>
        </el-row>
      </div>
      <el-button type="primary" @click="goLogin">登录</el-button>
      <div class="other-link">
        <a class="link" @click="findPassword">找回密码</a>
        <span>没有账号？<a class="link" @click="goRegister">去注册</a></span>
      </div>
    </div>
  </div>
</template>

<script>
import { login } from '@/api'

export default {
  name: 'LoginView.vue',
  data () {
    return {
      username: 'teacher',
      password: 'teacher'
    }
  },
  methods: {
    // 点击登录
    async goLogin () {
      const res = await login({
        username: this.username,
        password: this.password
      })
      // console.log(res)
      if (res.data.code === 200) {
        // 返回的数据中的 token 解析并存在 localstorage 中，用于自动登录进入首页
        localStorage.setItem('token', res.data.data.token.substring(7))
        this.$message.success(res.data.message)
        // 跳转到首页
        await this.$router.push({ name: 'home' })
      } else {
        this.$message.error(res.data.message)
      }
    },
    // 找回密码
    findPassword () {
      console.log('找回密码')
    },
    // 去注册
    goRegister () {
      console.log('去注册')
    }
  }
}
</script>

<style scoped lang="less">
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: #ddd url('../assets/img/loginbg.png') no-repeat center;

  .login-box {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 500px;
    height: 350px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 5px 5px 5px #888888;
    text-align: center;

    h2 {
      margin-top: 20px;
    }

    .ipt-box {
      .username, .password {
        height: 40px;
        margin-top: 20px;
      }

      .label {
        height: 40px;
        line-height: 40px;
      }
    }
  }

  .el-button {
    width: 320px;
    margin: 0 auto;
  }

  .other-link {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 10px;
    font-size: 14px;
    color: #999;

    .link {
      cursor: pointer;

      &:hover {
        color: #555;
      }
    }
  }
}
</style>
