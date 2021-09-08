   <template>
  <div class="main">
    <el-form label-width="80px" v-model="formData">
      <draggable :list="compList" group="comp" class="editor" draggable=".item">
        <div
          v-for="(comp, index) in compList"
          :key="comp.id"
          :option="comp"
          :class="{ active: activeIndex === index }"
          @click="chooseItem(comp, index)"
        >
          <el-form-item :label="comp.label">
            <edit-comp :value.sync="formData[comp.field]" :comp="comp.compName">
              <template v-if="comp.optionComp === 'el-option'">
                <el-option
                  v-for="(childOption, idx) in comp.option"
                  :key="idx"
                  :value="childOption.value"
                  :label="childOption.label"
                >
                  {{ childOption.label }}
                </el-option>
              </template>
              <template v-if="comp.optionComp === 'el-radio'">
                <el-radio
                  v-for="(childOption, idx) in comp.option"
                  :key="idx"
                  :label="childOption.value"
                >
                  {{ childOption.label }}
                </el-radio>
              </template>
              <template v-if="comp.optionComp === 'el-checkbox'">
                <el-checkbox
                  v-for="(childOption, idx) in comp.option"
                  :key="idx"
                  :label="childOption.value"
                >
                  {{ childOption.label }}
                </el-checkbox>
              </template>
            </edit-comp>
          </el-form-item>
          <button @click="handleDelete(index)">删除</button>
        </div>
      </draggable>
    </el-form>
       <div>


      <button @click="preview">预览</button>
      <div id="preview"></div>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import * as monaco from "monaco-editor";
import parse2Code from "./parser";
import editComp from './editComp.vue';

export default {
  data() {
    return {
      compList: [],
      formData: {},
      activeIndex: null,
      currentData: {},
    };
  },
  components: {
    draggable,
    editComp
  },

  mounted() {
    this.ITextModal = monaco.editor.create(document.getElementById("preview"), {
      value: "//输入代码",
      language: "html",
      folding: true,
      theme: "vs-dark",
      scrollbar: {
        verticalScrollbarSize: 14,
        horizontalScrollbarSize: 14,
      },
      formatOnPaste: true,
      renderValidationDecorations: "on",
      automaticLayout: true,
    });
  },

  methods: {
    handleDelete(index) {
      this.compList.splice(index, 1);
    },
    chooseItem(item, index) {
      this.activeIndex = index;
      this.currentData = item;
    },
    preview() {
      this.ITextModal.setValue(parse2Code(this.compList));
    },
  },
};
</script>

<style lang="less" scoped>
.editor {
  height: 1000px;
  width: 800px;
  outline: 1px solid;
}

.main {
  display: flex;
}
.active {
  outline: 1px solid red;
}

#preview {
  width: 800px;
  height: 600px;
}
</style>
