let dataOption = {};
export default function parse2Code(array) {
  dataOption = { form: {} };
  let temp = `
    <template>
        <el-form :model="form">
        ${array
          .map((i) => {
            return parseItem(i);
          })
          .join("")}
        </el-form>
    </template>
    
    <script>
        export default{
            data(){
                return ${JSON.stringify(dataOption)}
            }
        }
    </script>
    `;

  return temp;
}

function parseItem(item) {
  return `<el-form-item label="${item.label}">
        <${item.compName} v-model="form['${item.field}']">${parseOptions(
    item.option,
    item.compName,
    item.field,
    item.option
  )}</${item.compName}>
    </el-form-item>`;
}

function parseOptions(options, compName, field, option) {
  if (options) dataOption["Option" + field] = option;
  if (compName === "el-select") {
    return `<el-option
            v-for="(childOption, idx) in Option${field}"
            :key="idx"
            :value="childOption.value"
            :label="childOption.label"
          >
            {{ childOption.label }}
          </el-option>`;
  } else if (compName === "el-checkbox-group") {
    return `<el-checkbox
        v-for="(childOption, idx) in Option${field}"
        :key="idx"
        :label="childOption.value"
      >
        {{ childOption.label }}
      </el-checkbox>`;
  } else if (compName === "el-radio-group") {
    return `        <el-radio
        v-for="(childOption, idx) in Option${field}"
        :key="idx"
        :label="childOption.value"
      >
        {{ childOption.label }}
      </el-radio>`;
  } else {
    return "";
  }
}
