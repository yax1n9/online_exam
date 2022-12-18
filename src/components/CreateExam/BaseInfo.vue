<template>
  <div class="base-info">
    <div class="content">
      <el-form ref="form" :model="baseInfo" :rules="rules" label-position="top" label-width="100px">
        <el-form-item label="试卷标题" prop="examName">
          <el-input v-model="baseInfo.examName" placeholder="请输入试卷标题"></el-input>
        </el-form-item>

        <el-form-item label="试卷分类" prop="examSubject">
          <el-select v-model="baseInfo.examSubject" placeholder="请选择分类（科目）">
            <el-option
                v-for="item in subjectList"
                :key="item.subjectId"
                :label="item.name"
                :value="item.subjectId">
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="试卷封面">
          <el-upload
              class="cover-uploader"
              action="http://localhost:8080/files"
              :show-file-list="false"
              :on-success="handleCoverSuccess"
              :before-upload="beforeCoverUpload">
            <img v-if="baseInfo.imageName" :src="`http://localhost:8080/files/${this.baseInfo.imageName}`" class="cover"
                 alt="封面">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'BaseInfo',
  data () {
    return {
      baseInfo: {
        examName: '',
        examSubject: undefined,
        imageName: null
      },
      rules: {
        examName: [
          {
            required: true,
            message: '试卷标题不能为空',
            trigger: 'blur'
          }
        ],
        examSubject: [
          {
            required: true,
            message: '试卷分类不能为空',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  computed: {
    ...mapState('createExam', ['subjectList'])
  },
  methods: {
    /**
     * 图片上传成功后的回调
     * @param res
     * @param file
     */
    handleCoverSuccess (res, file) {
      this.baseInfo.imageName = res.data
      this.baseInfo.imageName = this.baseInfo.imageName.substring(this.baseInfo.imageName.lastIndexOf('/') + 1)
      // 请求成功后后端会返回图片的url地址，使用这个地址回显图片
    },
    /**
     * 图片上传前的回调
     * @param file
     * @returns {boolean}
     */
    beforeCoverUpload (file) {
      const isPNG = file.type === 'image/png'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isPNG) {
        this.$message.error('上传图片只能是 PNG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传图片大小不能超过 2MB!')
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
