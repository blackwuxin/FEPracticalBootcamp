   <template>
   
  <div class="main">
    <el-form label-width="80px" v-model="compList">
      <draggable
        :list="compList"
        group="comp"
        class="editor"
        chosenClass="chosen"
      >
        <div v-for="(comp, index) in compList" :key="comp.id">
          <el-form-item :label="comp.label" class="item">
            <template v-if="comp.compName === 'el-input'">
              <el-input placeholder="请输入内容"></el-input>
            </template>
            <template v-if="comp.compName === 'el-select'">
              <el-select placeholder="请选择">
                <el-option
                  v-for="item in [
                    {
                      value: '选项1',
                      label: '黄金糕',
                    },
                    {
                      value: '选项2',
                      label: '双皮奶',
                    },
                  ]"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </template>
            <template v-if="comp.compName === 'el-radio'">
              <el-radio label="1">备选项</el-radio>
            </template>
            <template v-if="comp.compName === 'el-checkbox'">
              <el-checkbox>备选项1</el-checkbox>
              <el-checkbox>备选项2</el-checkbox>
            </template>
          </el-form-item>
        </div>
      </draggable>
    </el-form>
    <div>
      <el-button type="primary" @click="preview">显示JSON配置</el-button>
      <div id="preview"></div>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import * as monaco from "monaco-editor";

let data =[
  {
    "label": "输入框",
    "compName": "el-input",
    "id": "1"
  },
  {
    "label": "输入框",
    "compName": "el-input",
    "id": "bda207ef-7abe-4931-a105-21f95c85cc1e"
  },
  {
    "label": "下拉框",
    "compName": "el-select",
    "id": "60b6b97a-642a-4f3a-bf3c-2cd346d93056"
  }
];

export default {
  data() {
    return {
      compList: data,
      activeIndex: null,
      currentData: {},
    };
  },
  components: {
    draggable,
  },

  mounted() {
    this.text = monaco.editor.create(document.getElementById("preview"), {
      value: "",
      language: "json",
      theme: "vs-dark",
    });
  },

  methods: {
    preview() {
      this.text.setValue(JSON.stringify(this.compList,null,2));
    },
  },
};
</script>

<style lang="less" scoped>
.editor {
  height: 1000px;
  width: 500px;
}

.main {
  display: flex;
}

#preview {
  margin-top: 10px;
  height: 1000px;
  width: 500px;
}
.chosen {
  border: solid 2px #3089dc !important;
}
.item {
  margin: 10px;
  cursor: move;
}
</style>
