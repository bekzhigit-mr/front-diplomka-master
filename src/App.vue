<template>
<!--  <div>-->
<!--    <page-header @back="$router.push({ name: 'home' })" :title="pageTitle"></page-header>-->
<!--  </div>-->
  <router-view></router-view>
</template>

<script>
import Highcharts from 'highcharts';
import enableExporting from 'highcharts/modules/exporting';
// import PageHeader from "@/components/PageHeader.vue";

enableExporting(Highcharts);


export default {
  name: 'App',
  // components: {
  //   PageHeader,
  // },
  computed: {
    pageTitle() {
      return "test";
    },
  },
  created() {
    this.$router.push({ name: "main" });
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.anychart-ui-support {
  height: 500px !important;
}
</style>
