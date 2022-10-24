<template>
  <div class="need-grade">
    <div class="text-info">
      <p class="title">待批改试卷</p>
      <i>0</i>
    </div>
    <span>去批卷</span>
  </div>
</template>

<script>
export default {
  name: 'NeedGrade'
}
</script>

<style scoped lang="less">
.need-grade {
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  box-shadow: 0 5px 10px 0 rgb(0 0 0 / 5%);
  padding: 40px;
  background: url("../../../assets/img/needGrade.jpg") no-repeat;
  background-size: 100% 100%;

  .text-info {
    .title {
      font-size: 16px;
      color: #888888;
    }

    i {
      font-size: 40px;
      color: #1baf9a;
    }
  }

  span {
    width: 100px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 14px;
    color: #1baf9a;
    border: 1px solid #1baf9a;
    border-radius: 15px;
    margin-right: 20px;
    cursor: pointer;
    transition: all 0.2s linear;

    &:hover {
      background-color: #1baf9a;
      color: #ffffff;
    }
  }
}
</style>
