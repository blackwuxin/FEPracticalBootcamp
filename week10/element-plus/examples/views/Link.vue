
<template>
    <div class="page-link">
        <h2>Link 文字链接</h2>
        <Link></Link>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, toRefs, computed, h } from "vue";
import type { PropType } from 'vue';
import { Link } from "@/ele";

export default defineComponent({
    name: 'PageLink',
    components: { Link },
    setup(props, { emit, slots }) {
        return {
        }
    }
});
</script>

<style lang="scss" scoped>
</style>
