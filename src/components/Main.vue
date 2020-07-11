<template>
  <div>
    <div class="Container-Main">
      <p>Vuex TEST용입니다</p>
    </div>
    <div class="Container-Main">
      <p>data : {{ getCounter }} / </p>
      <button @click="plusData"> + </button>
      <span> / </span>
      <button @click="minusData"> - </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations} from 'vuex';

export default {
  computed: {
    ...mapGetters({
      getCounter: 'campaign/getCounter',
    })
  },
  methods: {
    ...mapMutations({
      plusData:'campaign/increments',
      minusData:'campaign/decrements'
    }),
  }
}
</script>

<style>
.Container-Main {
  justify-content: center;
  display: flex;
}
</style>