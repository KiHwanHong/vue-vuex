<template>
  <div class="Container-Layout-Main">
    <b-navbar class="Container-ToolBar p-0">
      <img class="Image-ShowHeader" src="@/assets/headerImage.jpg"/>
    </b-navbar>
    <menu-bar class="mt-2"/>
    <div>
      <container/>
    </div>
  </div>
</template>

<script>
import MenuBar from '@/components/Menubar.vue'
import Container from '@/components/Container.vue'

export default {
  components:{
    MenuBar,
    Container
  },
}
</script>

<style scoped>
.Container-Layout-Main {
    width: 100%;
    height: 1000px;
}
.Container-ToolBar {
  width: 100%;
  height: 60px;
  justify-content: center;
  align-items: center;
}
.Image-ShowHeader {
  width: 100%;
  height: 100%;
}
</style>