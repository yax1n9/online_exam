<!--<template>-->
<!--  <div class="add-dialog">-->
<!--    <el-dialog :title="dialogType===1?'添加考试':'编辑考试'" :visible="addDialogVisible" @close="closeDialog">-->
<!--      <el-form label-width="120px">-->
<!--        <el-form-item label="试卷">-->
<!--          <el-select filterable value=""></el-select>-->
<!--        </el-form-item>-->
<!--        <el-form-item label="学院">-->
<!--          <el-select filterable value=""></el-select>-->
<!--        </el-form-item>-->
<!--        <el-form-item label="专业">-->
<!--          <el-select filterable value=""></el-select>-->
<!--        </el-form-item>-->
<!--        <el-form-item label="科目">-->
<!--          <el-select filterable value=""></el-select>-->
<!--        </el-form-item>-->
<!--        <el-form-item label="年级">-->
<!--          <el-select filterable value=""></el-select>-->
<!--        </el-form-item>-->
<!--        <el-form-item label="考试日期">-->
<!--          <el-date-picker-->
<!--              type="datetimerange"-->
<!--              range-separator="至"-->
<!--              start-placeholder="开始日期"-->
<!--              end-placeholder="结束日期">-->
<!--          </el-date-picker>-->
<!--        </el-form-item>-->
<!--        <el-form-item label="持续时间(min)">-->
<!--          <el-input autocomplete="off" disabled></el-input>-->
<!--        </el-form-item>-->
<!--        <el-form-item label="总分">-->
<!--          <el-input autocomplete="off"></el-input>-->
<!--        </el-form-item>-->
<!--        <el-form-item label="考试类型">-->
<!--          <el-select filterable value=""></el-select>-->
<!--        </el-form-item>-->
<!--      </el-form>-->
<!--      <div slot="footer" class="dialog-footer">-->
<!--        <el-button @click.native="SWITCH_ADD_DIALOG_VISIBLE">取 消</el-button>-->
<!--        <el-button type="primary" @click.native="SWITCH_ADD_DIALOG_VISIBLE">确 定</el-button>-->
<!--      </div>-->
<!--    </el-dialog>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--import { mapState, mapMutations } from 'vuex'-->

<!--export default {-->
<!--  // eslint-disable-next-line vue/multi-word-component-names-->
<!--  name: 'Dialog',-->
<!--  props: {-->
<!--    dialogType: {-->
<!--      default: 1,-->
<!--      type: Number-->
<!--    }-->
<!--  },-->
<!--  computed: {-->
<!--    ...mapState('selectExam', ['addDialogVisible'])-->
<!--  },-->
<!--  methods: {-->
<!--    ...mapMutations('selectExam', ['SWITCH_ADD_DIALOG_VISIBLE']),-->
<!--    closeDialog () {-->
<!--      if (this.addDialogVisible) {-->
<!--        this.SWITCH_ADD_DIALOG_VISIBLE()-->
<!--      }-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<style scoped>-->

<!--/deep/ .el-dialog {-->
<!--  margin-top: 8vh !important;-->
<!--}-->

<!--.el-select, .el-input {-->
<!--  width: 500px;-->
<!--}-->
<!--</style>-->
