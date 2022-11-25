<template>
  <div class="tinymce-box">
    <Editor :id="tinymce_id" :init="init" v-model="content"></Editor>
  </div>
</template>

<script>
import tinymce from 'tinymce/tinymce'
import Editor from '@tinymce/tinymce-vue'
import 'tinymce/themes/silver'
import 'tinymce/plugins/table' // 引入表格插件
import 'tinymce/plugins/charmap' // 引入特殊字符插件

export default {
  name: 'TinyMCE',
  components: {
    Editor
  },
  props: {
    tinymce_id: {
      type: String,
      require: true
    }
  },
  data () {
    return {
      // tinymce 配置
      init: {
        language_url: '/tinymce/langs/zh_CN.js',
        language: 'zh_CN',
        skin_url: '/tinymce/skins/ui/oxide',
        content_css: '/tinymce/skins/content/default/content.min.css',
        height: 150,
        plugins: 'table charmap',
        toolbar: 'undo redo | bold italic underline | table charmap subscript superscript',
        branding: false,
        menubar: false,
        resize: false
        // 此处为图片上传处理函数，这个直接用了base64的图片形式上传图片，
        // 如需ajax上传可参考https://www.tiny.cloud/docs/configure/file-image-upload/#images_upload_handler
        // images_upload_handler: (blobInfo, success, failure) => {
        //   const img = 'data:image/jpeg;base64,' + blobInfo.base64()
        //   success(img)
        // }
      },
      content: ''
    }
  },
  created () {
    tinymce.init(this.init)
  }
}
</script>

<style scoped>

</style>
