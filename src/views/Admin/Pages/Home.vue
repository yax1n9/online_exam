<template>
  <div class="admin-home">
    <card-row/>
    <quick-box/>
    <examing/>
  </div>
</template>

<script>
import QuickBox from '@/components/Home/QuickBox'
import Examing from '@/components/Home/Examing'
import CardRow from '@/components/Home/CardRow'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home',
  components: {
    QuickBox,
    Examing,
    CardRow
  },
  mounted () {
    // 获取首页信息
    this.$store.dispatch('adminHome/initHomeData')
  }
}
</script>

<style scoped lang="less">
</style>
