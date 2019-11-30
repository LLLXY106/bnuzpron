<template>
	<div class="menu">
		<div class="menu-wrapper">
			<ul class="nav-menu">
				<MenuItem  v-for="i in classify" :item="i" :key="i"></MenuItem>
			</ul>
			<div class="menu-r">
				<a href="#"><div class="jump-gif"></div></a>
			</div>
		</div>
	</div>
</template>

<script>
import MenuItem from './MenuItem'
export default {
	data() {
		return {
			showMobileLink: false,
			classify: [
				{
					title: '首页',
					num: 0,
					home: true
				},
				{
					title: '动画',
					num: 11
				},
				{
					title: '番剧',
					num: 22
				},
				{
					title: '音乐',
					num: 33
				},
				{
					title: '舞蹈',
					num: 44
				},
				{
					title: '游戏',
					num: 55
				},
				{
					title: '科技',
					num: 66
				},
				{
					title: '生活',
					num: 77
				},
				{
					title: '鬼畜',
					num: 88
				},
				{
					title: '时尚',
					num: 99
				},
				{
					title: '广告',
					num: 111
				},
				{
					title: '娱乐',
					num: 222
				},
				{
					title: '影视',
					num: 333
				}, {
					title: '影视',
					num: 444
				}, 
				{
					title: '直播',
					num: 555,
					sequare: true
				},
				{
					title: '广场',
					num: 666,
					live: true
				}
			]
		}
	},
	components: {
		MenuItem
	}
}
</script>

<style lang="stylus" scoped>
	.menu
		width 100%
		background #fff
		.menu-wrapper
			position relative
			width 980px
			margin 0 auto
			padding 6px 0
			z-index 100
			.nav-menu
				zoom 1
				display inline-block
				vertical-align top
				height 50px
			.menu-r
				position absolute
				right 0px
				top 0px
				height 50px
				padding 6px 0
				.random-p
					width 80px
					height 44px
					margin 3px 12px
					display inline-block
					vertical-align top
					overflow hidden
					img
						display block
						max-width 100%
						height 100%
						margin 0 auto
				.jump-gif
					display inline-block
					vertical-align top
					margin 3px 0
					width 58px
					height 44px
					background url(../../assets/images/jump.gif) center center no-repeat
					position relative
					overflow visible
</style>