<template>
  <el-container>
    <el-aside width="200px">
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
.el-container {
  height: 100vh;
}
</style>
