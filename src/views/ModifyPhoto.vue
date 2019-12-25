<template>
    <div class="bg">
        <TopContainer></TopContainer>
        <Tabs></Tabs>
        <!--<h1>修改头像</h1>-->
        <div style="margin-top: 100px">
            <el-upload
                    class="upload-demo"
                    ref="upload"
                    action="/api/ModifyPhoto"
                    :data="form"
                    :on-preview="handlePreview"
                    :on-remove="handleRemove"
                    :file-list="fileList"
                    :auto-upload="false">
                <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
        </div>
    </div>
</template>
<script type="text/javascript">
    import Tabs from '../components/InfoCardPage/Tabs'
    import TopContainer from '../components/common/TopContainer'
    export default {
        components: {
            Tabs,
            TopContainer
        },
        data() {
            return {
                fileList: [
                    {name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'},
                    {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}
                    ],
                form: {
                    username: this.$cookies.get("username")
                }
            };
        },
        methods: {
            submitUpload() {
                if (!this.isLogin) {
                    alert("你还没有登录噢~")
                } else {
                    this.$refs.upload.submit();
                }
            },
            handleRemove(file, fileList) {
                if (!this.isLogin) {
                    alert("你还没有登录噢~")
                } else {
                    console.log(file, fileList);
                }
            },
            handlePreview(file) {
                if (!this.isLogin) {
                    alert("你还没有登录噢~")
                } else {
                    console.log(file);
                }
            }
        },
        mounted(){
            if (this.$cookies.get("username") != null && this.$cookies.get("password") != null) {
                // console.log(this.$cookies.get("username"), this.$cookies.get("password"));
                //改变登录状态
                this.isLogin = true;
            }
        }
    }
</script>
<style lang="stylus" scoped>
    .bg {
        width: 100%;
        height: 100%;
        background-image url("../assets/images/photo_bg (2).jpg")
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
</style>