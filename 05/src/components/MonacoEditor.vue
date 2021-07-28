<template>
  <div class="monaco-editor"></div>
</template>

<script>
import * as monaco from 'monaco-editor'

export default {
  props: {
    code: String,
  },
  data() {
    return {
      defaultOpts: {
        value: this.code || '',
        theme: 'vs',
        language: 'html',
      },
      monacoEditor: {},
    }
  },
  mounted() {
    this.monacoEditor = monaco.editor.create(this.$el, this.defaultOpts)
    this.monacoEditor.onDidChangeModelContent(() => {
      this.$emit('change', this.monacoEditor.getValue())
    })
  },
  unmounted() {
    this.monacoEditor.dispose()
  },
  methods: {
    getValue() {
      return this.monacoEditor.getValue()
    },
  },
}
</script>
