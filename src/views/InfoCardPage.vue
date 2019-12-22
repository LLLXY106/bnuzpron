<template>
    <div style="height: 100%;margin-top: 42px">
        <el-row class="tac">
            <el-col :span="12">
                <el-menu
                        :default-active="activeIndex"
                        class="el-menu-vertical-demo"
                        router
                        @open="handleOpen"
                        @close="handleClose"
                >
                    <!--:default-active="$route.path"-->
                    <!--<el-menu-item index="/InfoCardPage/ShowInfo" @click="goTo('/InfoCardPage/ShowInfo') ">-->
                        <!--<i class="el-icon-menu"></i>-->
                        <!--<span slot="title">我的资料卡</span>-->
                    <!--</el-menu-item>-->
                    <el-menu-item index="/ModifyInfo">
                        <i class="el-icon-setting"></i>
                        <span slot="title">修改资料</span>
                    </el-menu-item>
                    <!--<el-menu-item index="/InfoCardPage/ModifyInfo" @click="goTo('/InfoCardPage/ModifyInfo')" >-->
                        <!--<i class="el-icon-setting"></i>-->
                        <!--<span slot="title">修改资料</span>-->
                    <!--</el-menu-item>-->
                    <!--<el-menu-item index="/InfoCardPage/ModifyPhoto" @click="goTo('/InfoCardPage/ModifyPhoto')" >-->
                        <!--<i class="el-icon-setting"></i>-->
                        <!--<span slot="title">修改头像</span>-->
                    <!--</el-menu-item>-->
                </el-menu>
            </el-col>
            <router-view></router-view>
        </el-row>
    </div>
</template>

<script>
    import ModifyInfo from "./ModifyInfo"
    export default {
        data() {
            return {};
        },

        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            goTo(path) {
                this.$router.replace(path);
                // this.$router.push(path);
                // window.location.href(path);
            }
        },
        compnent:{
            ModifyInfo
        }
    };
</script>

<style lang="stylus" scoped>
    .el-col-12{
        width: 20%;
        height: 570px
        border-right  1px #c9c9c9 solid
        background-color #fff
    }
</style>