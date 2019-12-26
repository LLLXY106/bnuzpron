<template>
  <div id="recommend-right">
    <commonVideo v-for="(i,index) in tempList " :item="i" :key="index"></commonVideo>
  </div>
</template>

<script>
import commonVideo from './commonVideo'
import Global from '../common/Global'
export default {
  name: 'recommendRight',
  data(){
    return {
      tempList: [],
     
			animateList:[
        {
          id: 5,
          title: '「新海诚系」如果以后能够 走得更稳更远了 就去见她吧',
          headsrc: '/img/Videohead/5.jpg'
        },
        {
          id: 6,
          title: '【FGO手书】致冥界之花',
          headsrc: '/img/Videohead/6.jpg'
        },
        {
          id: 7,
          title: '精灵宝可梦天津版第21集:林中对线',
          headsrc: '/img/Videohead/7.jpg'
        },
        {
          id: 8,
          title: '【十四期】遇到PUA该如何应对，阿卡丽来教你；渣男EZ的枯燥生活',
          headsrc: '/img/Videohead/8.jpg'
        }
      ],
      scienceList:[
        {
          id: 3,
          title: '火锅之神在此！如何优雅地吃一个撒尿牛丸？',
          headsrc: '/img/Videohead/3.jpg'
        },
        {
          id: 3,
          title: '火锅之神在此！如何优雅地吃一个撒尿牛丸？',
          headsrc: '/img/Videohead/3.jpg'
        },
        {
          id: 3,
          title: '火锅之神在此！如何优雅地吃一个撒尿牛丸？',
          headsrc: '/img/Videohead/3.jpg'
        },
        {
          id: 3,
          title: '火锅之神在此！如何优雅地吃一个撒尿牛丸？',
          headsrc: '/img/Videohead/3.jpg'
        },
      ],
      musicList:[
        {
          id: 2,
          title: '【RADWIMPS】《天气之子》片中曲『グランドエスケープ』完整版 MV【中字】',
          headsrc: '/img/Videohead/2.jpg'
        },
        {
          id: 2,
          title: '【RADWIMPS】《天气之子》片中曲『グランドエスケープ』完整版 MV【中字】',
          headsrc: '/img/Videohead/2.jpg'
        },
        {
          id: 2,
          title: '【RADWIMPS】《天气之子》片中曲『グランドエスケープ』完整版 MV【中字】',
          headsrc: '/img/Videohead/2.jpg'
        },
        {
          id: 2,
          title: '【RADWIMPS】《天气之子》片中曲『グランドエスケープ』完整版 MV【中字】',
          headsrc: '/img/Videohead/2.jpg'
        },
      ],
      gameList:[
        {
          id: 4,
          title: '程序员嫌椅子不舒服，辞去工作苦心研究，做出了世界第一把电竞椅',
          headsrc: '/img/Videohead/4.jpg'
        },
        {
          id: 4,
          title: '程序员嫌椅子不舒服，辞去工作苦心研究，做出了世界第一把电竞椅',
          headsrc: '/img/Videohead/4.jpg'
        },
        {
          id: 4,
          title: '程序员嫌椅子不舒服，辞去工作苦心研究，做出了世界第一把电竞椅',
          headsrc: '/img/Videohead/4.jpg'
        },
        {
          id: 4,
          title: '程序员嫌椅子不舒服，辞去工作苦心研究，做出了世界第一把电竞椅',
          headsrc: '/img/Videohead/4.jpg'
        },
      ],
    }
  },
  // created() {
  //   var url = "/api/videoList";
  //   this.$http.get(url).then(
  //     function(res) {
  //       var result = res.data;
  //       this.tempList = result;
  //       console.log(this.tempList);
  //     }, function() {
  //       console.log("请求处理失败");
  //     }
  //   )
  // },
  components: {
    commonVideo
  },
  methods:{
    toVideo(num) {
      window.location.href = 'VideoPage?id=' + num;
      // this.$router.push({name:'VideoPage',query: {id:'1'}})
    }
  },
  mounted() {
    var url = "/api/videoList";
      this.$http.get(url).then(
        function(res) {
          var result = res.data;
          if(this.$cookies.get("recId") == null || this.$cookies.get("recId") == " ") {
            this.tempList = result;
          }
          console.log(this.tempList);
        }, function() {
          console.log("请求处理失败");
        }
      )

    if(this.$cookies.get("recId") == 2) {
      this.tempList = this.animateList;
    } else if(this.$cookies.get("recId") == 3) {
      this.tempList = this.scienceList;
    } else if(this.$cookies.get("recId") == 4) {
      this.tempList = this.musicList;
    } else if(this.$cookies.get("recId") == 5) {
      this.tempList = this.gameList;
    }
  }
}
</script>

<style lang="stylus" scoped>
  #recommend-right
    height 280px
    position relative
    overflow hidden

</style>
