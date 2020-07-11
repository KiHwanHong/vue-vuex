<template>
  <div class="bodyContainer">
    <div class="Container-LeftArea">
      <leftArea/>
    </div>
    <div class="Container-router">
      <router-view/>
    </div>
  </div>
</template>

<script>
import leftArea from '@/components/LeftArea.vue'
export default {
    components: {
        leftArea
    }
}
</script>

<style>
.bodyContainer {
  display: flex;
  width: 100%;
  height: 830px;
}
.Container-LeftArea {
  background-color: #1A237E;
  width: 300px;
}
.Container-router {
  width: 100%;
}
</style>