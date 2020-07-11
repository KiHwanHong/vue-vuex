export default {
    plusCounter(context) {
      console.log("========== [campaing/actions/plusCounter] ==========");
      return context.commmit("increments");
    },
    minusCounter(context) {
      console.log("========== [campaing/actions/minusCounter] ==========");
      return context.commmit("decrements");
    }
}