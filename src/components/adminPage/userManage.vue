<template>
  <div>
    <div class="content">
      <div class="content-title">
        <span>
          <i class="fa fa-users" aria-hidden="true"></i>
          用户管理
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'userManage'
}
</script>

<style lang="stylus" scoped>
.content {
  margin-left: 230px;
  min-height: calc(95vh - 50px);
  margin-top: 50px;
  padding: 30px;
  background-color: #e5e5e5;
  transition: margin-left .3s ease;
  display: block;
}

.content-title {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;
  background-color: #FFF;
  margin: -30px -30px 30px;
  padding: 10px 20px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.1);
  font-size 35px
}

.radar_panel {
  display: flex;
  flex-wrap: wrap;
  margin-left: -15px;
  margin-right: -15px;
}
</style>