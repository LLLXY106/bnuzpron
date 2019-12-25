<template>
  <div>
    <adminForm></adminForm>
    <userCommentManage></userCommentManage>
  </div>
</template>

<script>
import adminForm from '../components/adminPage/adminForm'
import userCommentManage from '../components/adminPage/userCommentManage'
export default {
  components: {
    adminForm,
    userCommentManage
  }
}
</script>