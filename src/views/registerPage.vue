<template>
  <div>
    <top-container></top-container>
    <register-top></register-top>
    <register-content></register-content>
  </div>
</template>

<script>
import TopContainer from '../components/common/TopContainer'
import registerTop from '../components/Register/registerTop'
import registerContent from '../components/Register/registerContent'
export default {
  name: 'registerPage',
  components: {
    TopContainer,
    registerTop,
    registerContent
  }
}
</script>

<style lang="stylus" scoped>

</style>