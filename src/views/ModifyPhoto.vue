<template>
    <div class="bg">
        <TopContainer></TopContainer>
        <Tabs></Tabs>
        <!--<h1>修改头像</h1>-->
        <div style="margin-top: 50px">
            <el-upload
                    action="/api/ModifyPhoto"
                    list-type="picture-card"
                    :on-preview="handlePictureCardPreview"
                    :on-remove="handleRemove"
                    :auto-upload="false">
                <i class="el-icon-plus"></i>
            </el-upload>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件</div>
            <el-dialog :visible.sync="dialogVisible">
                <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>
            <el-button style="margin-left: 10px;margin-top: 30px" size="small" type="success" @click="submitUpload">
                上传头像
            </el-button>
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
                dialogImageUrl: '',
                dialogVisible: false
            };
        },
        methods: {
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG) {
                    this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            },
            submitUpload() {
                this.$refs.upload.submit();
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