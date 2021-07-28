<template>
  <div id="home">
     <div @click="preview" class="button">预览</div>
    <div class="main">
      <monaco-editor
        class="monaco-editor"
        ref="monacoEditor"
        :code="code"
        @change="handleChange"
      ></monaco-editor>
 <div class="generated-component">
     <div id='loading'  ref="loading">loading...</div>
        <iframe
          id="iframe"
          ref="iframe"
          src="http://localhost:3000/#/test"
          frameborder="0"
          style="height: 100%; width: 100%;" 
        ></iframe>

      </div>
    </div>
  </div>
</template>

<script>
import MonacoEditor from '../components/MonacoEditor'
import {code} from '../assets/code';

export default {
  name: 'Home',
  components: {
    MonacoEditor
  },
  data() {
    return {
      code,
    }
  },
  methods: {
    handleChange(value) {
      this.code = value
    },
    preview() {
      this.$refs.loading.style.display = 'block';
      this.$refs.iframe.style.display = 'none';
      fetch('/build', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code: this.code }),
      })
        .then((response) => {
          console.log(response)
          this.$refs.loading.style.display = 'none';
          this.$refs.iframe.contentWindow.location.reload(true);
          this.$refs.iframe.style.display = 'block';
         
        })

    }
  }
}
</script>


<style>

.button {
  border-radius: 5px;
  display: inline-block;
  padding: 5px 10px;
  margin: 5px;
  cursor: pointer;
}
.main {
  display: flex;
  justify-content: center;
  border: 5px solid #eee;
  height: 400px;
}
.monaco-editor {
  flex: 1;
}
.generated-component {
  flex: 1;
  overflow: scroll;
}
#loading{
    text-align: center;
    display: none;
}

</style>