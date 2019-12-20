<template>
  <div>
    <div class="main_panel">
			<div class="content_panel">
				<div class="header">
					<div class="header-title">
						<span id="tit">BNUZPRON管理员端</span>
					</div>
					<span id="tit2">BNUZPRON!!</span>
          <ul class="app-nav">
            <li class="dropdown">
              <a class="app-nav-item" title="首页" href="/">
                <i class="fa fa-home"></i>
              </a>
            </li>
            <li class="dropdown">
              <a class="app-nav-item" title="退出" @click="exit">
                <i class="fa fa-sign-out" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
				</div>
				<div class="sidebar">
					<!-- 头像、名字、职位 -->
					<div class="sidebar_head">
						<img class="head_icon" src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2513711717,3607386518&fm=26&gp=0.jpg" style="border-radius: 50%" width="70" height="70">
						<div>
								<p class="student_name">admin</p>
								<p class="position">管理员</p>
						</div>
					</div>
					<!-- 侧边栏菜单 -->
					<ul class="sidebar_menu">
							<li class="treeview">
									<a class="menu_item" href="/adminPage" data-toggle="treeview">
											<i class="menu_icon fa fa-users"></i>
											<span class="menu_label">用户管理</span>
											<i class="fa fa-angle-right"></i>
									</a>
							</li>
							<li class="treeview">
									<a class="menu_item" href="#" data-toggle="treeview">
											<i class="menu_icon fa fa-bar-chart"></i>
											<span class="menu_label">视频管理</span>
											<i class="fa fa-angle-right"></i>
									</a>
							</li>
							<li class="treeview" href="#" data-toggle="treeview">
									<a class="menu_item" href="#">
											<i class="menu_icon fa fa-commenting"></i>
											<span class="menu_label">评论管理</span>
											<i class="fa fa-angle-right"></i>
									</a>
							</li>
					</ul>
				</div>
				<user-manage></user-manage>
			</div>
		</div>
  </div>
</template>

<script>
import userManage from './userManage'
export default {
  name: 'adminForm',
  components: {
    userManage
  },
  methods: {
    exit: function() {
      this.$cookies.set("username", '', -1);
      this.$cookies.set("password", '', -1);
      window.location.href = "/";
    }
  },
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/css/admin.css'
body {
  /* width: 1480px; */
  width: 100%;
  height: 100%;
  font-size: .875rem;
  line-height: 1.5;
  color: #212529;
  text-align: left;
}

.main_panel {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

.content_panel {
  width: 98%;
  height: 98%;
  margin-top: 12px;
  margin-left: 12px;
  margin-right: 12px;
  padding: 0;
}

.header {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  width: 100%;
  padding-right: 30px;
  display: flex;
  background-color: #ffafc9;
  z-index: 1030;
}

.header-title {
  flex: 0 0 auto;
  display: block;
  width: 230px;
  background-color: #f45a8d;
}

#tit {
  color: #fff;
  text-align: center;
  font-family: 'Niconne';
  padding: 0 15px;
  font-size: 20px;
  font-weight: bold;
  line-height: 50px;
  flex: 0 0 auto;
  display: block;
  width: 230px;
  background-color: #f45a8d;
}

#tit2 {
  font-size: 150%;
  font-weight: bold;
  color: #fff;
  display: inline-flex;
  align-items: center;
  box-sizing: border-box;
  line-height: 1.5;
  padding-left: 70px;
}

.app-nav {
  -webkit-box-flex: 1;
  flex: 1 0 auto;
  display: flex;
  margin-bottom: 0;
  -webkit-box-pack: end;
  justify-content: flex-end;
  padding-left: 0;
  list-style: none;
}

.dropdown {
  position: relative;
}

.app-nav-item {
  display: block;
  padding: 15px;
  line-height: 20px;
  color: #fff;
  transition: background-color .3s ease;
}

.app-nav-item:hover {
  background-color rgba(255,255,255,0.3)
}

.sidebar {
  width: 261px;
  /* width: 15%; */
  height: 420px;
  display: block;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  padding-top: 55px;
  width: 230px;
  overflow: auto;
  z-index: 10;
  box-shadow: 0 8px 17px rgba(0,0,0,0.2);
  transition: left .3s ease,width .3s ease;
  /* background-color: #fff; */
}

.sidebar::-webkit-scrollbar {
  width: 6px;
  background: rgba(0,0,0,0.2);
}

li {
  display: list-item;
}

.sidebar_menu {
  height: 100%;
  margin-bottom: 0;
  padding-left: 0;
  padding-bottom: 40px;
  list-style: none;
}

.sidebar_head {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  padding: 10px;
  /* margin-bottom: 5px; */
  color: #20272b
}

.head_icon {
  -webkit-box-flex: 0;
  flex: 0 0 auto;
  margin-right: 15px
}

.position {
  white-space: nowrap;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  margin-bottom: 0;
  margin-top: 0px;
}

.student_name {
  font-size: 17px;
  line-height: 1.3;
  margin-bottom: 0;
}

.menu_item {
  position: relative;
  display: flex;
  align-items: center;
  padding: 12px 15px;
  font-size: 1.08em;
  border-left: 3px;
  color: #f45a8d;
  overflow: hidden;
}

.menu_item:hover,
.munu_item:focus {
  background: #1ab394;
  border-left-color: #009688;
  text-decoration: none;
  color: #fff;
}

.menu_icon {
  flex: 0 0 auto;
  width: 25px;
}

.menu_label {
  white-space: nowrap;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
}

.treeview {
  border-bottom-right-radius: 0;
  background-color: dimgray;
}

.treeview:hover {
  opacity: 1;
  max-height: 100vh;
  visibility: visible;
  z-index: 10;
}

.treeview-indicator {
  -webkit-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  transform: rotate(90deg);
  -webkit-transform-origin: center;
  -ms-transform-origin: center;
  transform-origin: center;
  -webkit-transition: -webkit-transform .3s ease;
  transition: -webkit-transform .3s ease;
  -o-transition: transform .3s ease;
  transition: transform .3s ease;
  transition: transform .3s ease, -webkit-transform .3s ease
}

.content_title {
  padding-left: 20px;
  margin: 0;
  font-size: 30px;
  display: inline-block;
}

.modal-body {
  width: 85%;
  height: 400px;
  position: relative;
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  padding: 1rem;
  margin: 0 auto;
}

.choosebox {
  width: 200px;
  height: 30px;
  margin-left: 15px;
  padding: 0;
  display: inline-block;
}
</style>