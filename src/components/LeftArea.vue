<template>
  <div class="Container-LeftArea-Main"> 
    <div class="Container-Img ml-3 mr-3">
      <img class="Image-ShowRandom rounded-circle " src="https://picsum.photos/510/300?random" alt="John">
    </div>
    <div>
      <div class="Container-something">
        <span class="text-white">HI~~</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.Container-LeftArea-Main {
  width: 100%;
  height: 100%;
}
.Image-ShowRandom {
  width: 100%;
  height: 200px;
  border: 2px solid #f0f0f2;
}
.Container-Img {
  margin-top: 10px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
}
.Container-something {
  display: flex;
  justify-content: center;
}
</style>