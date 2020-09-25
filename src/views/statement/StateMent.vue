<template>
  <div>
    <h3>计数器（点击加一）</h3>
    <hr />
    <h3 @click="increment">{{ count }}</h3>
    <h3>获取开方值</h3>
    <hr />
    <h3>{{ countSqrt }}</h3>
    <h3>做加法</h3>
    <hr />
    <input type="text" v-model="num" />
    {{ num }}
    <button @click="add">add</button>
  </div>
</template>

<script>
import { mapGetters, mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      num: 0,
      // count:this.$store.state.count
    };
  },
  computed: {
    // count() {
    //   return this.$store.state.count;
    // },
    ...mapState({
      count: "count",
      countSqrt: (state) => state.countSqrt,
    }),
    ...mapGetters({
      // 把 `this.doneCount` 映射为 `this.$store.getters.doneTodosCount`
      countSqrt: "countSqrt",
    }),
  },
  methods: {
    // ...mapMutations({
    //   Add: "increment",
    // }),
    ...mapMutations(['increment']),
    // increament() {
    //   this.$store.commit("increment");
    //   // this.counter++;
    // },
    add() {
      this.$store.commit("add", parseInt(this.num));
    },
  },
};
</script>

<style>
</style>>