<template>
  <div class="app-wrapper" :class="{hideSidebar:!sidebar.opened}">
    <layout-navbar></layout-navbar>
    <layout-sidebar class="sidebar-container"></layout-sidebar>
    <div class="main-container">
      <!-- <layout-tags></layout-tags> -->
      <layout-app-main></layout-app-main>
      <!-- <div class="bottom">
        <p>
          <a href="#" target="_blank">
            <svg-icon icon-class="github"></svg-icon>
          </a>
        </p>
        <p>
          Copyright
          <svg-icon icon-class="copyright"></svg-icon>2019
        </p>
      </div> -->
    </div>
  </div>
</template>

<script>
import layoutNavbar from './../components/layoutNavbar'
import layoutSidebar from './../components/layoutSidebar'
// import layoutTags from './../components/layoutTags'
import layoutAppMain from './../components/layoutAppMain'

export default {
  name: 'layout',
  components: {
    layoutNavbar,
    layoutSidebar,
    // layoutTags,
    layoutAppMain
  },
  computed: {
    sidebar () {
      return this.$store.state.app.sidebar
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "src/styles/mixin.scss";
.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}
.bottom {
  height: 150px;
  padding-top: 60px;
  p {
    text-align: center;
    color: rgba(0, 0, 0, 0.45);
    font-size: 14px;
  }
}
.sidebar-container{
  z-index: 9 !important;
  position: absolute;
  top: 59px !important;
  box-shadow: none !important;
}
.main-container {
  background-color: #f8fafd;
}
</style>
