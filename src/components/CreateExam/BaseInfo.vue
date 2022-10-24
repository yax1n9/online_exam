<template>
  <div class="base-info">
    <div class="content">
      <div class="title">试卷标题</div>
      <el-input placeholder="请输入试卷标题"></el-input>
      <div class="title">试卷分类</div>
      <el-select value="" placeholder="请选择试卷分类"></el-select>
      <div class="title">试卷封面</div>
      <el-upload
          class="cover-uploader"
          action=""
          :show-file-list="false"
          :on-success="handleCoverSuccess"
          :before-upload="beforeCoverUpload">
        <img v-if="imageUrl" :src="imageUrl" class="cover">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseInfo',
  data () {
    return {
      imageUrl: ''
    }
  },
  methods: {
    handleCoverSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeCoverUpload (file) {
      const isPNG = file.type === 'image/png'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isPNG) {
        this.$message.error('上传头像图片只能是 PNG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isPNG && isLt2M
    }
  }
}
</script>

<style scoped lang="less">
.base-info {
  height: 100%;
  display: flex;
  justify-content: center;
  background-color: #fefefd;
  padding: 20px;
  border-radius: 10px;

  .content {
    width: 500px;

    .el-select, .el-input {
      width: 500px;
    }

    .title {
      font-size: 18px;
      margin: 25px 0 10px 0;
    }

    .cover-uploader, .el-upload {
      width: 240px;
      height: 180px;
      border: 1px dashed #cccccc;
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;

      &:hover {
        border-color: #409EFF;
      }

      .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 240px;
        height: 180px;
        line-height: 180px;
        text-align: center;
      }

      .cover {
        width: 240px;
        height: 180px;
        display: block;
      }
    }
  }
}
</style>
