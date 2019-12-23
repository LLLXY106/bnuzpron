<template>
    <div class="bg">
        <TopContainer></TopContainer>
        <div class="hd">
            <div class="dim"><p STYLE="font-size:44px;font-weight: bolder;line-height: 90px;letter-spacing:10px;">投稿</p><p STYLE="font-size:16px;letter-spacing:4px;">CONTRIBUTE</p></div>
        </div>
        <div style="width:100%;margin-top: 30px">
            <div class="title">请输入视频标题：
                <el-input v-model="form.name" style="width: 30%;margin-bottom: 30px"></el-input>
            </div>
            <el-upload
                    class="upload-demo"
                    drag
                    ref="upload"
                    action="/api/Contribute"
                    :limit="1"
                    :data="form"
                    :before-upload="beforeAvatarUpload"
                    :on-preview="handlePreview"
                    :file-list="fileList"
                    :auto-upload="false">
                <i class="el-icon-upload"></i>
                <!--      <el-button slot="trigger" size="small" type="primary">选取文件</el-button>-->
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                <div slot="tip" class="el-upload__tip">只能上传MP4文件，且不超过20M</div>
            </el-upload>
            <el-button style="margin-left: 10px;margin-top: 30px" size="small" type="success" @click="submitUpload">
                上传到服务器
            </el-button>
        </div>
    </div>
</template>

<script type="text/javascript">
    import TopContainer from '../components/common/TopContainer'
    export default {
        components: {
            TopContainer
        },
        data() {
            return {
                fileList: [],
                form: {
                    name: ''
                }
            };
        },
        methods: {
            beforeAvatarUpload(file) {
                const isMP4 = file.type === 'video/mp4';
                // const isMP4 = ['video/mp4','video.flv'].includes(file.type);
                const isLt20M = file.size / 1024 / 1024 < 20;

                if (!isMP4) {
                    this.$message.error('上传视频只能是 MP4 格式!');
                }
                if (!isLt20M) {
                    this.$message.error('上传视频大小不能超过 20MB!');
                }
                return isMP4 && isLt20M;
            },
            submitUpload() {
                this.$refs.upload.submit();
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePreview(file) {
                console.log(file);
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .bg {
        width: 100%;
        height: 100%;
        background-image url("../assets/images/contribute_bg.jpg")
        background-size cover
        background-repeat repeat
        background-position center 0
        position fixed
        top 0
        left 0
        min-width 1000px
        z-index -10
        zoom 1
    }
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

    .upload-demo {
        /*border: 1px red solid;*/
    }

    .title {
        /*border: 1px red solid;*/
    }
    .hd{
        width 100%
        height 140px
        position: relative;
        background:url("../assets/images/contribute_hd.jpg") no-repeat top

    }
    .dim{
        width 100%
        height 140px
        background-color: rgba(0,0,0,.6);
        color white
        font-family "微软雅黑", sans-serif
        text-align center
    }
</style>
