<template>
  <div>
    <div class="row">
      <h1 style="border-style: solid; border-width: 1px">
        存取当前时间： {{ time }}
      </h1>
      <a-button @click="set" type="primary"> 存储</a-button>
      <p />
      <a-button @click="get" type="primary"> 获取 </a-button>
    </div>
  </div>
</template>

<script>
import storage from "store";
export default {
  data() {
    return {
      time: "",
    };
  },
  methods: {
    set() {
      // var mydate = new Date()

      storage.set("time", new Date().toLocaleString());
    },
    get() {
      this.time = storage.get("time");
    },
  },
};
</script>

<style>
.row {
  display: -moz-box;
  box-pack: center;
  box-align: center;
}
</style>>