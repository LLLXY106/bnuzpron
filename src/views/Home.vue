<template>
  <div>
    <TopContainer></TopContainer>
    <Header></Header>
  </div>
</template>

<script>
import TopContainer from '../components/common/TopContainer'
import Header from '../components/common/Header'
export default {
  name: 'App',
  components: {
    TopContainer,
    Header,
  }
}
</script>

<style>
@import "../assets/css/public.css";
@import "../assets/css/reset.css";

</style>
