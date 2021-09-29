
<template>
  <div class="page-alert">
    <h2>Alert 警告</h2>

    <Alert title="成功提示的文案" type="success"> </Alert>
    <Alert title="消息提示的文案" type="info"> </Alert>
    <Alert title="警告提示的文案" type="warning"> </Alert>
    <Alert title="错误提示的文案" type="error"> </Alert>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, toRefs, computed, h } from 'vue';
import type { PropType } from 'vue';
import { Alert } from '@/ele';

export default defineComponent({
  name: 'PageAlert',
  components: { Alert },
  setup(props, { emit, slots }) {
    return {};
  },
});
</script>

<style lang="scss" scoped>
</style>
