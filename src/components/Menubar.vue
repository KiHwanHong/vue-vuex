<template>
  <div class="Container-Menubar">
    <b-button variant="primary" to="main">첫화면</b-button>
    <b-button variant="primary" style="margin-left:20px" to="subMain">두번째화면</b-button>
    <div style="margin-left:20px">
      <span>현재시간 : {{ datenow }}</span>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  data() {
      return {
          datenow: '',
      }
  },
  mounted() {
        this.timeSetting();
    },
    methods: {
      timeSetting(){
        // 확인하기
        // let self = this;
        this.datenow = moment().format('YYYY/MM/DD hh:mm:ss');
        // setTimeout(self.timeSetting, 1000);
        setTimeout(this.timeSetting, 1000);
      }
    }
}
</script>

<style scoped>
.Container-Menubar{
  display: flex;
  justify-content: center;
  max-width: 100%;
}
</style>