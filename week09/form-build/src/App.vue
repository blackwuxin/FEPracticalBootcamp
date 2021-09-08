<template>
  <el-container style="border: 1px solid #eee">
   <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <comp-list @compClone="compClone" />
    </el-aside>
    <el-main>
      <editor :currentComp="currentComp" />
    </el-main>
  </el-container>
</template>

<script>
import CompList from "./components/ComponentList.vue";
import editor from "./components/editor.vue";

export default {
  components: { CompList, editor },
  data() {
    return {
      currentComp: null,
    };
  },
  methods: {
    compClone(val) {
      this.currentComp = val;
    },
  },
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
</style>
