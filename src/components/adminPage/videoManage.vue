<template>
  <div>
    <div class="content">
      <!-- 标题 -->
      <div class="content-title">
        <span>
          <i class="fa fa-video-camera" aria-hidden="true"></i>
          视频管理
        </span>
      </div>

      <!-- 列表信息 -->
      <div class="col-md-12">
            <div class="tile">
                <div class="tile-body">
                    <div class="panel-body">
                        <table class="table table-striped" id="videoMsg"> <!-- v-for="(item, index) in dataList" :key="index" -->
                            <thead>
                              <tr>
                                  <th>视频Id</th>
                                  <th>视频题目</th>
                                  <th>分区</th>
                                  <th>类型</th>
                                  <th>播放次数</th>
                                  <th>&nbsp;&nbsp;操作</th>
                              </tr>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
                        <div class="pull-right">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
  
<script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/1.10.20/js/jquery.dataTables.js"></script>
<script>
import axios from 'axios';
export default {
  name: 'videoManage',
  data() {
    return {
      id: '',
      dataList:[]
    }
  },
  created() {
    var url = '/api/videoList';
    var result;
    this.$http.get(url).then(
      function(res) {
        result = res.data;
        console.log(result);
        
        $.each(result, function(i) {
          var seq = i+1; //序号
          var str="<tr id='" + result[i].id + "'>"
          + "<td style='padding-top: 18px; text-align: center;'>" + result[i].id + "</td>"
          + "<td><input style=\"text-align:center;\" class=\"form-control input-sm\" type=\"text\" value='"
          + result[i].title + "' size=\"15\" disabled></td>"
          + "<td><input style=\"text-align:center;\" class=\"form-control input-sm\" type=\"text\" value='"
          + result[i].area + "' size=\"5\" disabled></td>"
          + "<td><input style=\"text-align:center;\" class=\"form-control input-sm\" type=\"text\" value='"
          + result[i].type + "' size=\"5\" disabled></td>"
          + "<td><input style=\"text-align:center;\" class=\"form-control input-sm\" type=\"text\" value='"
          + result[i].play + "' size=\"5\" disabled></td>"
          + "<td><button title='删除' style='margin-left:5px;border-radius:50%;width:40px;height:40px' type=\"button\" id='"
          + result[i].id + "' class=\"btn btn-primary btn-xs btnMod\"><i class='fa fa-trash' aria-hidden='true'></i></button>"
          +"</td></tr>"
            
            $("#videoMsg tbody").append(str);
        });
      }, function() {
        console.log("请求处理失败");
      }
    )
  },
  mounted: function(){
    //删除
    $(document).on('click','button',function(){
          // alert(this.id);
        $.ajax({
          url: '/api/deleteVideo',
          type: 'post',
          dataType: 'json',
          data: {
            id: this.id
          },
          success: function(response) {
            console.log(response);
            alert("删除成功");
            window.location.href = "/adminPage";
          }
        })
    })
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/css/admin.css'
  .content 
    margin-left 230px
    min-height calc(95vh - 50px)
    margin-top 50px
    padding 30px
    background-color #e5e5e5
    transition margin-left .3s ease
    display block
    .content-title
      display flex
      -webkit-box-align center
      align-items center
      -webkit-box-pack justify
      justify-content space-between
      -webkit-box-orient horizontal
      -webkit-box-direction normal
      flex-direction row
      background-color #FFF
      margin -30px -30px 30px
      padding 10px 20px
      box-shadow 0 1px 2px rgba(0,0,0,0.1)
      font-size 35px
    .col-md-12
      -webkit-box-flex 0
      flex 0 0 100%
      max-width 100%
      position: relative
      width 100%
      min-height 1px
      padding-right 15px
      padding-left 15px
      .tile
        position relative
        background #fff
        border-radius 3px
        padding 20px
        box-shadow 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2)
        transition all .3s ease-in-out
        .table
          width 100%
          max-width 100%
          margin-bottom 1rem
          background-color transparent
  
</style>