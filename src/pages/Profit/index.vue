<template>
  <div>
    <!-- 外层容器 -->
    <div class="profit-container">
      <!-- 主要内容区 -->
      <div class="profit-main">
        <!-- 主要内容区头部 -->
        <div class="profit-header">
          <img src="./image/4.png" alt="" class="run" />
          <img src="./image/3.png" alt="" class="profit-num" />
          <img src="./image/3.png" alt="" class="profit-num" />
          <img src="./image/3.png" alt="" class="profit-num" />
          <img src="./image/3.png" alt="" class="profit-num" />
          <img src="./image/3.png" alt="" class="profit-num" />
          <img src="./image/3.png" alt="" class="profit-num" />
          <img src="./image/3.png" alt="" class="profit-num" />
          <span>元</span>
          <i>0</i>
          <i>1</i>
          <i>0</i>
          <i>2</i>
          <i>7</i>
          <i>8</i>
          <i>3</i>
        </div>
        <!-- 主要内容区 内容区域 -->
        <div class="main-area">
          <!-- 兰炭区域 -->
          <div class="main-area-left">
            <!-- 兰炭区域头部 -->
            <div class="main-area-left_header">
              <div class="lanT">兰炭销售单价</div>
              <el-input placeholder="请输入内容" v-model="input" clearable>
              </el-input>
            </div>
            <div>
              <img src="./image/jian.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profit",
  data(){
    return{
      input:"",
    }
  }
};
</script>

<style>
/* 外层容器 */
.profit-container {
  width: 100%;
  height: 100%;
}
/* 主要内容区 */
.profit-main {
  box-sizing: border-box;
  width: 1890px;
  height: 959px;
  background: url(./image/kuang.png) no-repeat;
  background-size: cover;
  margin: 0 auto;
}
/* 主要内容区头部 */
.profit-header {
  position: relative;
  padding-top: 69px;
  margin-left: 576px;
}
.profit-header .run {
  padding-right: 22px;
  width: 192px;
  height: 53px;
}
.profit-header .profit-num {
  padding-right: 8px;
  width: 48px;
  height: 56px;
}
.profit-header > span {
  position: absolute;
  top: 80px;
  font-size: 33px;
  font-family: SJcujihei Regular, SJcujihei Regular-Regular;
  font-weight: 400;
  text-align: left;
  color: #00eaff;
}
.profit-header > i {
  position: absolute;
  font-size: 44px;
  font-family: SJcujihei Regular, SJcujihei Regular-Regular;
  text-align: left;
  color: #00eaff;
}
.profit-header > i:nth-of-type(1) {
  top: 70px;
  left: 226px;
}
.profit-header > i:nth-of-type(2) {
  top: 70px;
  left: 282px;
}
.profit-header > i:nth-of-type(3) {
  top: 70px;
  left: 338px;
}
.profit-header > i:nth-of-type(4) {
  top: 70px;
  left: 394px;
}
.profit-header > i:nth-of-type(5) {
  top: 70px;
  left: 450px;
}
.profit-header > i:nth-of-type(6) {
  top: 70px;
  left: 506px;
}
.profit-header > i:nth-of-type(7) {
  top: 70px;
  left: 562px;
}
/* 主要内容区头部伪类线 */
.profit-header::before {
  position: absolute;
  content: "";
  left: -278px;
  top: 174px;
  width: 1239px;
  height: 1px;
  background: #03feff;
}
/* 主要内容区 内容区域 */
.main-area{
  margin-top:77px;
  margin:77px 51px 0 51px;
  /* background: #bfa; */
}
/* 兰炭区域 */
/* 兰炭区域头部 */
.main-area-left_header{
  position: relative;
  margin-left:132px;
}
.main-area-left_header .lanT{
  width: 218px;
  height: 37px;
  line-height: 37px;
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  color:#ffffff;
  background: linear-gradient(#0d96b1 0%, #00b294 100%);
}
/* 输入框的样式 */
.main-area-left_header .el-input{
  width: 218px;
  height: 37px;
}
.main-area-left_header .el-input .el-input__inner{
  border-radius: 0;
  background-color: rgba(14,36,44,0);
  border: 1px solid #03feff;
  color:#00eaff;
}
/* 兰炭区域头部伪类 */
.main-area-left_header::before{
  position: absolute;
  top:-30px;
  left:114px;
  content:"";
  width: 1px;
  height: 30px;
  background: #03feff;
}
</style>