<template>
    <div  class="nav" style="border: 1px #f6f6f6 solid">
        <el-menu :default-active="activeIndex"
                 class="el-menu-demo"
                 mode="horizontal"
                 router
                 @select="handleSelect">
            <el-menu-item index="/ShowInfo">
                我的资料卡
            </el-menu-item>
            <el-menu-item index="/ModifyInfo">
                修改资料
            </el-menu-item>
            <el-menu-item index="/ModifyPhoto">
                修改头像
            </el-menu-item>
        </el-menu>
    </div>
</template>
<script>
    export default {
        name: 'Tab',
        data() {
            return {
                activeIndex: '/home'
            }
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath)
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .el-col-4{
        width 20%
    }
</style>