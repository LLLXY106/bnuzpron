<template>
  <div id="container">
    <div id="header">
      <div class="header-layer"></div>
      <a class="header-link" target="_blank" href="http://localhost:8080/" data-loc-id="142"></a>
      <div class="h-center"></div>
    </div>
    <div class="title">
      <span class="span-tit">注册</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'registerTop'
}
</script>

<style lang="stylus" scoped>
  #header
    background url(../../assets/images/HeaderBG.png) transparent no-repeat center -10px
    position relative
    margin -42px auto 0
    .header-layer	
    	height 170px
      position absolute
      top 0px
      left 0px
      width 100%
      z-index 10
    .header-link
    	position absolute
    	top 0px
    	left 0px
    	width 100%
    	height 170px
    	z-index 10
    .h-center
    	width 960px
    	margin 0 auto
    	position relative
    	height 170px
    	transition .2s height
  .title
    width 980px
    height 28px
    margin 0 auto
    margin-top 20px
    margin-bottom 30px
    text-align center
    border-bottom 1px solid #ddd
    .span-tit
      font-size 45px
      height 56px
      line-height 56px
</style>