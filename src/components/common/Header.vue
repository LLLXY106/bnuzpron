<template>
  <div class="header"> <!--style="background-image:url(assets/images/HeaderBG.png);"-->
  	<div class="header-layer"></div>
  	<a class="header-link" target="_blank" href="http://www.bilibili.com" data-loc-id="142"></a>
  	<div class="h-center">
  		<a href="#" class="logo"></a> <!--  style="background-image:url(../../assets/images/bili-logo.png);" -->
      <search class="msearch"></search>

  	</div>
    <Menu></Menu>
  </div>
</template>

<script>
import Search from './Search'
import Menu from './Menu'
export default {
  components: {
    Search,
    Menu
  }
}
</script>

<style lang="stylus" scoped>
 .header
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
    	.logo
    		position absolute
    		width 220px
    		height 105px
    		left 24px
    		top 55px
    		background url(../../assets/images/bili-logo.png) transparent no-repeat left center
    		z-index 100
    	.banner-title
    		position absolute
    		top 114px
    		left 255px
    		line-height 20px
    		padding 6px 10px
    		background-color rgba(0, 0, 0, 0.68)
    		color #fff
    		border-radius 4px
    		font-size 14px
    		max-width 350px
    		transition .2s
</style>
