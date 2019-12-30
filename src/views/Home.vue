<template>
  <div>
    <TopContainer></TopContainer>
    <Header></Header>
    <Content></Content>
  </div>
</template>

<script>
import TopContainer from '../components/common/TopContainer'
import Header from '../components/common/Header'
import Content from '../components/HomePage/Content'
export default {
  name: 'App',
  components: {
    TopContainer,
    Header,
    Content,
  },
}
</script>

<style>
@import "../assets/css/public.css";
@import "../assets/css/reset.css";

</style>
