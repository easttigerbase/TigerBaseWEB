<template>
  <v-card class="editor">
    <div class="checkbox">
      <input type="checkbox" id="editable" v-model="editable">
      <label for="editable">editable</label>
    </div>
    <v-chip-group class="content">
      <v-icon color="blue" class="mr-3"
      >mdi-tag</v-icon>
    <v-chip  v-for="(i,idx) in item.chip" :key="idx" color="blue"  text-color="white">
      {{i}}
    </v-chip>
    </v-chip-group>
    <editor-content class="content" :editor="editor" />
  </v-card>
</template>

<script>
import StarterKit from '@tiptap/starter-kit'
import { Editor, EditorContent } from '@tiptap/vue-2'

export default {
  components: {
    EditorContent,
  },
  props:{
    boardId:String,
  },
  data() {
    return {
      editor: null,
      editable: false,
      item : {content:'as'},
    }
  },

  mounted() {
    fetch('/api/v1/board/'+this.boardId,{
      headers:{
        'Content-Type':'application/json'
      }
    }).then((response) => response.json()).then((data)=> {
        this.item = data;
    }).finally(()=>{
      this.editor = new Editor({
        editable: this.editable,
        content: this.item,
        extensions: [
          StarterKit,
        ],
      })
    })


  },

  watch: {
    editable() {
      this.editor.setEditable(this.editable)
    },
  },

  beforeUnmount() {
    this.editor.destroy()
  },
}
</script>

<style lang="scss">
/* Basic editor styles */
.ProseMirror {
  > * + * {
    margin-top: 0.75em;
  }
}
.editor{
  margin-top: 1rem;
   margin-left: 8rem;
  margin-right: 8rem;
  height: 100%;
}
.content{
  margin-top: 1rem;
  margin-left: 2rem;
  margin-right: 2rem;
}
.checkbox {
  margin-bottom: 1rem;

  input[type="checkbox"] {
    margin-right: 0.5rem;
  }
}

[contenteditable=false] {

  cursor: not-allowed;
}
</style>