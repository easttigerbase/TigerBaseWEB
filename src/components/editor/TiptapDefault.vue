<template>
  <v-sheet v-if="editor" class="pa-10">
    <v-card style="min-height:600px">
      <v-card-title class="mr-5 ml-5">
        <v-icon >mdi-pen</v-icon><strong class="ml-2">EDIT</strong>
        <v-spacer></v-spacer>
        <v-btn  style="background-color: #FFFFFF" v-on:click="this.uploadBorad"  >
          <v-icon color="blue">mdi-file-upload-outline</v-icon>
        </v-btn>
      </v-card-title>

      <MenuBar :editor="editor" class="pa-2"></MenuBar>
      <v-card-text>
        <ChipEditor @chips="getChips"></ChipEditor>
      </v-card-text>
      <v-card-text  >
        <editor-content :editor="editor" class=""></editor-content>
      </v-card-text>

    </v-card>
  </v-sheet>
</template>

<script>
import StarterKit from '@tiptap/starter-kit'
import { Editor, EditorContent } from '@tiptap/vue-2'
import TextStyle from '@tiptap/extension-text-style'
import { Color } from '@tiptap/extension-color'
import FontFamily from '@tiptap/extension-font-family'
import TextAlign from '@tiptap/extension-text-align'
import Image from '@tiptap/extension-image'
import MenuBar from "@/components/editor/MenuBar";
import Document from '@tiptap/extension-document';
import Placeholder from '@tiptap/extension-placeholder'
import ChipEditor from "@/components/editor/ChipEditor";
const CustomDocument = Document.extend({
  content: 'heading block*',
})

export default {
  components: {
    EditorContent,MenuBar,ChipEditor
  },

  data() {
    return {
      editor: null,
      chips:null,
    }
  },
  methods:{
    getChips(chips){
      this.chips = chips;
    },
    uploadBorad(){
      var board = this.editor.getJSON();
      const title =  {"title":board.content[0].content[0].text};
      const chips = {"chip":this.chips};
      Object.assign(board,chips);
      Object.assign(board,title);
      console.log(board);
      fetch('/api/v1/board',{
        method:"POST",
        headers: {
          "Content-Type": "application/json",
        },
        body:JSON.stringify(board) ,

      }).then(node=>{
        console.log(node);
      })
    }
  }
  ,
  mounted() {
    this.editor = new Editor({
      extensions: [
        CustomDocument,
        StarterKit.configure({
          document: false,
        }),
        TextStyle,
        Color,
        FontFamily,
        TextAlign.configure({
          types: ['heading', 'paragraph'],
        }),
        Image,
        Placeholder.configure({
          placeholder: ({ node }) => {
            if (node.type.name === 'heading') {
              return '제목을 입력하세요'
            }
            return '_'
          },
        }),
      ],
          autofocus:true,

    }

      )
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


.ProseMirror .is-empty::before {
  content: attr(data-placeholder);
  float: left;
  color: #ced4da;
  pointer-events: none;
  height: 0;
}
.ProseMirror:fullscreen{

}
.ProseMirror:focus {
  outline: none;
}
.v-btn{
  margin: 5px;
}

</style>