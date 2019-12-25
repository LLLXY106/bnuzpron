<template>
  <div>
    <adminForm></adminForm>
    <video-manage></video-manage>
  </div>
</template>

<script>
import adminForm from '../components/adminPage/adminForm'
import videoManage from '../components/adminPage/videoManage'
export default {
  components: {
    adminForm,
    videoManage
  }
}
</script>