<template>
    <div>
        <div>
            排行榜
            <div v-for="items in sortVideo">
                    标题：{{items.title}}
                    总播放次数:{{items.play}}
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "RankingList",
    data() {
      return {
        Video: []
      }
    },
    computed: {
      sortVideo() {
        return sortNum(this.Video, 'play')
      }
    },
    methods: {
      getVideoList() {
        var url = "/api/getVideoList";
        this.$http.get(url, {}, {}).then(function (data) {
          // console.log(data.body);
          this.Video = data.body;
        }, function (response) {
          console.log(response);
        })
      },
      show() {
        console.log(this.Video);
      }
    },
    mounted() {
      this.getVideoList();
    }
  }

  function sortNum(array, key) {
    return array.sort(function (a, b) {
      var x = a[key];
      var y = b[key];
      return ((x<y)?-1:(x>y)?1:0)
    })
  }

</script>
