export default {
    increments(state) {
      state.counter++;
      console.log("[campaing/increments] counter : ",state.counter);
    },
    decrements(state) {
      state.counter--;
      console.log("[campaing/decrements] counter : ", state.counter);
    }
}