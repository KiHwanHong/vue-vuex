export default {
    getCounter(state) {
        console.log('[campaign/geters] getCounter : ', state.counter);
        return state.counter;
    }
}