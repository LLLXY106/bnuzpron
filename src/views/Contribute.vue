<template>
    <div>
        <input type="file" name="file" @change="changeFile"/><br/>
        <button @click="sendAjax">发送请求</button>
        <br/>
        <p>已经上传{{rate}}%</p>
    </div>
</template>

<script>
  export default {
    name: "Contribute",
    data: {
      file: {},
      rate: 0
    },
    methods: {
      sendAjax: function () {
        var fd = new FormData();      //创建form对象
        fd.append("file", this.file);        //通过append向form对象添加数据
        axios.post("/api/addVideo", fd, {
          onUploadProgress: (progressEvent) => {      //这里要用箭头函数
            //不然这个this的指向会有问题
            this.rate = parseInt((progressEvent.loaded / progressEvent.total) * 100);
          }
        });
      },
      changeFile: function (e) {
        this.file = e.target.files[0];
      },
      cancle: function () {

      }
    }
  }
</script>
