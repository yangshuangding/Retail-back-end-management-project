// 布局侧边栏
<template>
  <scroll-bar>
    <el-menu
      mode="vertical"
      :default-active="$route.path"
      :collapse="isCollapse"
      text-color="#303133"
    >
      <sidebar-item :routes="permission_routers"></sidebar-item>
    </el-menu>
  </scroll-bar>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './layoutSidebarItem'
import ScrollBar from '@/components/ScrollBar'

export default {
  name: 'layoutSidebar',
  components: { SidebarItem, ScrollBar },
  computed: {
    ...mapGetters(['permission_routers', 'sidebar']),
    isCollapse () {
      return !this.sidebar.opened
    }
  }
}
</script>

<style lang="scss" scoped>
.el-menu {
  box-shadow: 0;
}
</style>
