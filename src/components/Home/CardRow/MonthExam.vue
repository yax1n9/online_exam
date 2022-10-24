<template>
  <div class="month-exam">
    <div class="examed-count">
      <p class="title">本月已考次数</p>
      <i>0</i>
    </div>
    <span></span>
    <div class="residue-count">
      <p class="title">本月剩余考试</p>
      <i>0</i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MonthExam'
}
</script>

<style scoped lang="less">
.month-exam {
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  box-shadow: 0 5px 10px 0 rgb(0 0 0 / 5%);
  padding: 40px;
  background: url("../../../assets/img/monthExamed.jpg") no-repeat;
  background-size: 100% 100%;

  span {
    width: 3px;
    height: 65px;
    background-color: #cccccc;
  }

  .examed-count, .residue-count {
    width: 50%;
    text-align: center;

    .title{
      font-size: 16px;
      color: #888888;
    }

    i{
      font-size: 40px;
      color: #ee9900;
    }
  }
}
</style>
