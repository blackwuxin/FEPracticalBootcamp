<template>
  <ul v-infinite-scroll="load" class="infinite-list" style="overflow: auto">
    <li v-for="i in count" :key="i" class="infinite-list-item">{{ i }}</li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { InfiniteScroll } from "@/ele";
export default defineComponent({
  setup() {
    const count = ref(0)
    const load = () => {
      count.value += 2
    }
    return {
      count,
      load,
    }
  },
  directives:{
      InfiniteScroll
  }
})
</script>

<style lang="scss">
.infinite-list {
  height: 300px;
  padding: 0;
  margin: 0;
  list-style: none;

  .infinite-list-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    background: #ecf5ff;
    margin: 10px;
    color: #409eff;
    & + .list-item {
      margin-top: 10px;
    }
  }
}
</style>