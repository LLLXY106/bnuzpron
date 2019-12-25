<template>
	<div class="menu">
		<div class="menu-wrapper">
			<ul class="nav-menu">
				<MenuItem  v-for="(i,index) in classify" :item="i" :key="index"></MenuItem>
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
					id: 1,
					home: true
				},
				{
					title: '动画',
					num: 11,
					id: 2,
				},
				{
					title: '番剧',
					num: 22,
					id: 3,
				},
				{
					title: '音乐',
					num: 33,
					id: 4,
				},
				{
					title: '舞蹈',
					num: 44,
					id: 5,
				},
				{
					title: '游戏',
					num: 55,
					id: 6,
				},
				{
					title: '科技',
					num: 66,
					id: 7,
				},
				{
					title: '生活',
					num: 77,
					id: 8
				},
				{
					title: '鬼畜',
					num: 88,
					id: 9
				},
				{
					title: '时尚',
					num: 99,
					id: 10
				},
				{
					title: '广告',
					num: 111,
					id: 12
				},
				{
					title: '娱乐',
					num: 222,
					id: 13
				},
				{
					title: '影视',
					num: 333,
					id: 14
				},  
				{
					title: '直播',
					num: 444,
					id: 15,
					sequare: true
				},
				{
					title: '广场',
					num: 555,
					id: 16,
					live: true
				}
			]
		}
	},
	components: {
		MenuItem
	},

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
				padding-right 60px
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