<template>
  <div>
    <el-pagination
      background
      layout="prev, pager, next, jumper"
      :page-count="20"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "Pagination",
};
</script>

<style scoped>

/* 重写elementUI分页样式 */
.el-pagination {
  margin: 10px 0 0 133px;
}
.el-pagination.is-background .btn-prev:disabled{
  color:#fff;
}
.el-pagination.is-background .btn-prev {
  font-size: 16px;
  color: #fff;
  background-color: transparent;
  border: 1px solid #00b294;
}
.el-pagination.is-background .btn-next {
  font-size: 16px;
  color: #fff;
  background-color: transparent;
  border: 1px solid #00b294;
}
.el-pagination.is-background .el-pager li {
  color: #fff;
  background-color: transparent;
  border: 1px solid #00b294;
}
.el-pagination.is-background .el-pager li:not(.disabled).active {
  background: linear-gradient(#0d96b1 0%, #00b294 100%);
  color: #fff;
}
.el-pagination.is-background .el-pager li.active {
  color: #fff;
  cursor: default;
}
.el-pagination.is-background .el-pager li:hover {
  color: #235464;
}
.el-pagination.is-background .el-pager li:not(.disabled):hover {
  color: #235464;
}
.el-pagination.is-background .el-pager li:not(.disabled).active:hover {
  background-color: #235464;
  color: #fff;
}
.el-pagination.is-background span {
  color: #fff;
}
.el-pagination__editor.el-input .el-input__inner {
  color: #fff;
  background-color: transparent;
  border: 1px solid #00b294;
}
</style>