<template>
  <div style="margin-top: 200px">
    <el-form>
      <el-form-item label="文件" label-width="120px">
        <el-upload class="upload-demo" action="" :auto-upload="false" :limit="1" ref="upload" :http-request="upload"
                   multiple>
          <el-button size="small" type="primary">模拟上传2</el-button>
        </el-upload>
      </el-form-item>
      <el-button class="btn" size="small" type="primary" @click="upload">确定上传2</el-button>
    </el-form>


  </div>
</template>

<script>
  export default {
    data() {
      return {
        fileList: [{
          name: 'food.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }, {
          name: 'food2.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }]
      };
    },
    methods: {
      upload() {
        const formData = new FormData()
        const file = this.$refs.upload.uploadFiles[0]
        const headerConfig = { headers: { 'Content-Type': 'multipart/form-data' }}
        if (!file) { // 若未选择文件
          alert('请选择文件')
          return
        }
        formData.append('file', file.raw)
        this.$http.post('/api/Contribute', formData, headerConfig).then(res => {
          console.log(res)
        })
      },
    }
  }
</script>

<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }

  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }

  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
