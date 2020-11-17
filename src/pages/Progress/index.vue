<template>
  <div>
    <div class="progress">
      <el-progress
        :stroke-width="22"
        :percentage="80"
        color="#fcb018"
        :show-text="false"
      ></el-progress>
    </div>
  </div>
</template>

<script>
export default {
  name: "Progress",
};
</script>

<style>
.progress{
  width:830px;
  margin:20px 0 10px 22px;
}
.progress .el-progress .el-progress-bar .el-progress-bar__outer{
  border-radius: 0;
  background-color: #051c2f;
  border:1px solid #fcb018;
}
.progress .el-progress .el-progress-bar .el-progress-bar__outer .el-progress-bar__inner{
  border-radius: 0;
}
</style>