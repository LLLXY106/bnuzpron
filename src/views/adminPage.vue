<template>
  <div>
    <adminForm></adminForm>
    <user-manage></user-manage>
  </div>
</template>

<script>
import adminForm from '../components/adminPage/adminForm'
import userManage from '../components/adminPage/userManage'
export default {
  components: {
    adminForm,
    userManage
  }
}
</script>