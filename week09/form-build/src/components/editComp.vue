<script>
export default {
  props: ["value", "comp"],
  data() {
    return { arrayData: [] };
  },
  render(h) {
    return h(
      this.comp,
      {
        attrs: {
          value:
            this.comp === "el-checkbox-group" ? this.arrayData : this.value,
        },
        on: {
          input: (e) => {
            if (this.comp === "el-checkbox-group") {
              this.arrayData = e;
              this.$emit("update:value", this.arrayData);
            } else {
              this.$emit("update:value", e);
            }
          },
          change: (e) => {
            if (this.comp === "el-checkbox-group") {
              this.arrayData = e;
            } else {
              this.$emit("update:value", e);
            }
          },
        },
      },
      [this.$slots.default]
    );
  },
};
</script>