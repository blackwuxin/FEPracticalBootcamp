<template>
  <div class="page-button">
    <h2>Button 按钮</h2>

    <Button></Button>

    <br />

    <ButtonGroup>
      <Button>左</Button>
      <Button>中</Button>
      <Button>右</Button>
    </ButtonGroup>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, toRefs, computed, h } from "vue";
import type { PropType } from "vue";
import { Button, ButtonGroup } from "@/ele";

export default defineComponent({
  name: "PageButton",
  components: { Button },
  setup(props, { emit, slots }) {
    return {};
  },
});
</script>

<style lang="scss" scoped></style>
