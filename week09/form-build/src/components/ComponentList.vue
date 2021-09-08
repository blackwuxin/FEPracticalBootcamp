<template>
  <div class="container">
    <h3>组件列表</h3>
    <draggable
      :list="compList"
      :sort="false"
      draggable=".item"
      :group="{ name: 'comp', pull: 'clone', put: 'false' }"
      :clone="clone"
    >
      <div class="item" v-for="comp in compList" :key="comp.compName">{{ comp.label }}</div>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable';
import { v4 as uuidv4 } from 'uuid';
import compProp from './defaultProp';
export default {
  components: {
    draggable,
  },
  data() {
    return {
      compList: [
        {
          label: '输入框',
          compName: 'el-input',
        },
        {
          label: '下拉框',
          compName: 'el-select',
        },
        {
          label: '单选',
          compName: 'el-radio-group',
        },
        {
          label: '多选',
          compName: 'el-checkbox-group',
        },
      ],
    };
  },
  methods: {
    clone(obj) {
      let id = uuidv4();
      return { ...obj, id, ...compProp[obj.compName], field: id.substr(0, 8) };
    },
  },
};
</script>

<style lang="less">
.container {
  padding: 20px;
}
  .item {
            padding: 6px 12px;
            margin: 0px 10px 0px 10px;
            border: solid 1px #eee;
            background-color: #f1f1f1;
        }
</style>
