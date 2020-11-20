<template>
  <div class="biao">
    <el-table
      :data="scoreRankList"
      border
      :highlight-current-row="true"
      :cell-style="{ padding: '4px 0px' }"
      :row-style="{ height: '10px' }"
      :header-cell-style="{
        background: 'rgba(0,174,239,0.34)',
        color: '#fff',
        'border-bottom': '1px solid #00aeef',
      }"
      @current-change="handleCurrentChange"
    >
      <el-table-column label="排名" width="80" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.rn }}</span>
        </template>
      </el-table-column>
      <el-table-column label="客户" width="180" align="center">
        <template slot-scope="scope">
          {{ scope.row.cCusName }}
        </template>
      </el-table-column>
      <el-table-column label="得分" align="center">
        <template slot-scope="scope">
          <div class="num">{{ scope.row.score }}</div>
          <div class="jind">
            <el-progress
              :stroke-width="14"
              :percentage="scope.row.score*100/40"
              color="#67d7fd"
              :show-text="false"
            ></el-progress>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {reqScoreRanking} from '../../api/index'
export default {
  name: "Table",
  props:["scoreRankList"],
  data() {
    return {
      // 表格区域假数据
      tableData1: [
        {
          date: 1,
          name: "张三",
          address: "3847",
        },
        {
          date: 2,
          name: "李四",
          address: "3823",
        },
        {
          date: 3,
          name: "王五",
          address: "3711",
        },
        {
          date: 4,
          name: "谢晓",
          address: "3719",
        },
        {
          date: 5,
          name: "胡俊波",
          address: "3845",
        },
        {
          date: 6,
          name: "欧阳三",
          address: "3841",
        },
        {
          date: 7,
          name: "夏天",
          address: "3843",
        },
      ],
      currentRow:null,
    };
  },
  // props:["date"],
  mounted(){
    // this.getScoreRanking()
  },
  methods:{
    
    // 请求所有客户排名信息列表
    // async getScoreRanking(){
    //   console.log(this.date)
    //   const result = await reqScoreRanking(this.date,1,7)
    //   console.log(result)
    // },
    // 全局事件总线传递当前行数据回调
    handleCurrentChange(val){
      // console.log(val)
      this.currentRow = val
      // console.log(this.currentRow)
      this.$bus.$emit('addTodo',this.currentRow)
    }
  },
  computed:{

  }
};
</script>

<style>
.biao {
  width: 830px;
  height: 377px;
  margin: 0 auto 10px;
}
/* hover样式修改 */
.el-table--enable-row-hover .el-table__body tr:hover > td {
  background: rgba(252,176,24,0.1) !important;
  border: 1px solid #fad030 !important;
  font-size: 16px;
  color:#fff;
}
/* 选中行样式修改*/
.el-table .el-table__row{
  background-color: #051c2f;
  color:#fff;
}
.has-gutter th{
  background: #00aeef;
}



.jind {
  width: 367px;
  margin-left: 30px;
}
.jind .el-progress .el-progress-bar .el-progress-bar__outer {
  border-radius: 0;
  background-color: #051c2f;
}
.jind
  .el-progress
  .el-progress-bar
  .el-progress-bar__outer
  .el-progress-bar__inner {
  border-radius: 0;
}
.num {
  position: absolute;
  left: 440px;
  top: 12px;
  font-size: 14px;
}
</style>