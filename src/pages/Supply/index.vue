<template>
  <div>
    <!-- 外部容器 -->
    <div class="container">
      <!-- 头部栏 -->
      <Header></Header>
      <!-- 主要内容区 -->
      <div id="main">
        <div class="main-header clearfix">
          <!-- 左侧栏 -->
          <div class="left">
            <div class="left-item1">
              <div class="carbon-price">品质特性</div>
              <div class="pie">
                <ul>
                  <li>
                    <img src="./image/12.png" alt="" />
                    <span>产品规模</span>
                    <i>2</i>
                    <img src="./image/20.png" alt="" />
                    <img src="./image/22.png" alt="" />
                  </li>
                  <li>
                    <img src="./image/12.png" alt="" />
                    <span>行业地位</span>
                    <i>0</i>
                    <img src="./image/20.png" alt="" />
                    <img src="./image/22.png" alt="" />
                  </li>
                  <li>
                    <img src="./image/12.png" alt="" />
                    <span>业务关系持续期</span>
                    <i>5</i>
                    <img src="./image/20.png" alt="" />
                    <img src="./image/22.png" alt="" />
                  </li>
                  <li>
                    <img src="./image/12.png" alt="" />
                    <span>业务关系强度</span>
                    <i>3</i>
                    <img src="./image/20.png" alt="" />
                    <img src="./image/22.png" alt="" />
                  </li>
                </ul>
                <div class="quality">
                  <img src="./image/21.png" alt="" />
                  <i>12</i>
                  <span>品质特效</span>
                  <img src="./image/22.png" alt="" />
                </div>
              </div>
            </div>
            <div class="left-item2">
              <div class="evaluate">
                <div class="evaluate-header">能力评估</div>
                <div class="evaluate-main">
                  <img src="./image/28.png" alt="" />
                  <div class="desp">
                    <div>
                      <span>40</span>
                    </div>
                    <div>
                      <i>吸货能力</i>
                    </div>
                  </div>
                </div>
              </div>
              <div class="evaluate">
                <div class="evaluate-header">均衡购货评价</div>
                <div class="evaluate-main">
                  <img src="./image/28.png" alt="" />
                  <div class="desp">
                    <div>
                      <span>20</span>
                    </div>
                    <div>
                      <i>均衡购货能力</i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 中间内容区 -->
          <div class="mainItem">
            <div class="customer">客户排名</div>
            <div class="rectangle">
              <div class="info">
                <div class="info-left">
                  <div class="fullName">
                    <span>当前客户信息：王&nbsp;五</span>
                  </div>
                  <div class="firstNum">3</div>
                  <i>,</i>
                  <div class="secondNum">7</div>
                  <div class="thirdNum">1</div>
                  <div class="fourthNum">1</div>
                </div>
                <div class="info-right">
                  <a @click="showEntrance">填报入口</a>
                </div>
              </div>
              <div class="score">
                <div class="fill"></div>
              </div>
              <!-- 表格区域 -->
              <table>
                <tr>
                  <th>排名</th>
                  <th>客户</th>
                  <th>得分</th>
                </tr>
                <tr>
                  <td>1</td>
                  <td>张三</td>
                  <td>
                    <div class="process">
                      <div class="process-score">
                        <div class="score-number"></div>
                      </div>
                      <span>3847</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>李四</td>
                  <td>
                    <div class="process">
                      <div class="process-score">
                        <div class="score-number"></div>
                      </div>
                      <span>3823</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>王五</td>
                  <td>
                    <div class="process">
                      <div class="process-score">
                        <div class="score-number"></div>
                      </div>
                      <span>3811</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>谢晓</td>
                  <td>
                    <div class="process">
                      <div class="process-score">
                        <div class="score-number"></div>
                      </div>
                      <span>3847</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>胡俊波</td>
                  <td>
                    <div class="process">
                      <div class="process-score">
                        <div class="score-number"></div>
                      </div>
                      <span>3847</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>欧阳三</td>
                  <td>
                    <div class="process">
                      <div class="process-score">
                        <div class="score-number"></div>
                      </div>
                      <span>3847</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>夏天</td>
                  <td>
                    <div class="process">
                      <div class="process-score">
                        <div class="score-number"></div>
                      </div>
                      <span>3847</span>
                    </div>
                  </td>
                </tr>
              </table>
              <!-- 分页 -->
              <el-pagination
                background
                layout="prev, pager, next, jumper"
                :page-count="20"
              >
              </el-pagination>
            </div>
          </div>
          <!-- 填报入口区域 -->
          <div v-show="isShow" class="entrance">
            <!-- 填报区域头部 -->
            <div class="entrance-header">
              <div class="hLeft">
                <span>填报入口：王五</span>
              </div>
              <div class="hRight" @click="closeEntrance">X</div>
            </div>
            <div class="entrance-main">
              <el-form ref="form" :model="form" label-width="80px">
                <div class="mHeader">
                  <el-form-item label="填报人姓名">
                    <el-select v-model="form.region" placeholder="王五">
                      <el-input
                        placeholder="请输入姓名查询"
                        prefix-icon="el-icon-search"
                        v-model="input2"
                      >
                      </el-input>
                      <el-option label="张三" value="shanghai"></el-option>
                      <el-option label="王五" value="beijing"></el-option>
                      <el-option label="李四" value="shenzhen"></el-option>
                      <el-option label="谢晓" value="guangzhou"></el-option>
                      <el-option label="胡俊波" value="nanchang"></el-option>
                    </el-select>
                  </el-form-item>
                </div>
              </el-form>
            </div>
            <!-- 填报区域底部 -->
            <div class="entrance-bottom">
              <el-button size="mini">取消</el-button>
              <el-button type="primary" @click="onSubmit" size="mini"
                >提交</el-button
              >
            </div>
          </div>
          <!-- 右侧栏 -->
          <div class="right">
            <div class="right-item1">
              <div class="diversification">多元化采购</div>
              <div class="circular">
                <div class="smallLogo">
                  <img src="./image/12.png" alt="" />
                  <span>多元化采购能力</span>
                  <i>3</i>
                </div>
                <ul class="graphical">
                  <li>
                    <span>大料</span>
                  </li>
                  <li>
                    <span>中料</span>
                  </li>
                  <li>
                    <span>小料</span>
                  </li>
                  <li>
                    <span>焦面</span>
                  </li>
                </ul>
              </div>
              <div class="right-item2">
                <div class="drive">
                  <div class="drive-header">带动作用</div>
                  <div class="drive-main">
                    <img src="./image/17.png" alt="" />
                    <span>5</span>
                  </div>
                </div>
                <div class="drive">
                  <div class="drive-header">采购比重</div>
                  <div class="drive-main">
                    <img src="./image/16.png" alt="" />
                    <span>5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 底部栏 -->
          <div class="footer">
            <div class="footer-item">
              <div class="credit">信用评价</div>
              <div class="coverage">
                <div class="chart">
                  <img src="./image/18.png" alt="" />
                  <i class="numa">15</i>
                  <div class="money">
                    <img src="./image/15.png" alt="" />
                    <span>现金比例</span>
                  </div>
                </div>
                <div class="chart">
                  <img src="./image/18.png" alt="" />
                  <i class="numb">6</i>
                  <div class="group">
                    <img src="./image/13.png" alt="" />
                    <span>配合度</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="footer-item2">
              <div class="credit">采购均价</div>
              <div class="coverage2">
                <div class="coverage2-left">
                  <ul class="secondary">
                    <li class="jack">
                      <span>中料</span>
                    </li>
                    <li class="mary">
                      <i>4532</i>
                    </li>
                    <li class="jack">
                      <span>轻质化煤焦油1</span>
                    </li>
                    <li class="mary">
                      <i>4953</i>
                    </li>
                    <li class="jack">
                      <span>轻质化煤焦油2</span>
                    </li>
                    <li class="mary">
                      <i>3802</i>
                    </li>
                  </ul>
                  <div class="reduce">
                    <img src="./image/27.png" alt="" />
                  </div>
                  <div class="price">
                    <div class="price-left">季度销售均价</div>
                    <div class="price-right">0</div>
                  </div>
                </div>
                <div class="coverage2-right">
                  <div class="bery">
                    <img src="./image/29.png" alt="" />
                  </div>
                  <div class="cery">
                    <span>5</span>
                  </div>
                  <div class="dery">
                    <img src="./image/23.png" alt="" />
                  </div>
                  <div class="eery">
                    <img src="./image/19.png" alt="" />
                    <span>3865</span>
                    <i>采购均价</i>
                  </div>
                </div>
              </div>
            </div>
            <div class="footer-item">
              <div class="credit">客户类型</div>
              <div class="coverage">
                <div class="chart">
                  <img src="./image/18.png" alt="" />
                  <i class="numb">5</i>
                  <div class="money">
                    <img src="./image/15.png" alt="" />
                    <span>性质</span>
                  </div>
                </div>
                <div class="chart">
                  <img src="./image/18.png" alt="" />
                  <i class="numb">2</i>
                  <div class="group">
                    <img src="./image/14.png" alt="" />
                    <span>区域</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../../components/Header";
export default {
  name: "Supply",
  data() {
    return {
      isShow: false,
      form: {
        region: "",  
      },
      input2:"",
    };
  },
  methods: {
    // 点击展开填报入口回调
    showEntrance() {
      this.isShow = true;
    },
    // 点击x关闭填报
    closeEntrance() {
      this.isShow = false;
    },
    onSubmit() {
      console.log("submit");
    },
  },
  components: {
    Header,
  },
};
</script>

<style>
/* 外部容器 */
.container {
  height: 100%;
  width: 100%;
}

/* 主要内容区 */
.container #main {
  box-sizing: border-box;
  width: 1890px;
  height: 959px;
  /* margin: 2px 18px 12px 12px; */
  background: url(./image/kuang.png) no-repeat;
  background-size: cover;
  margin: 0 auto;
}

/* 清除浮动 */
.container #main.clearfix:after,
.container #main.clearfix:before {
  content: "";
  display: block;
  clear: both;
}

.container #main .main-header {
  width: 100%;
  height: 100%;
  position: relative;
}

.container #main .main-header.clearfix:after,
.container #main .main-header.clearfix:before {
  content: "";
  display: block;
  clear: both;
}
/* 左侧栏 */
.container #main .main-header .left {
  position: absolute;
  left: 44px;
  top: 31px;
  width: 453px;
  height: 609px;
}
.container #main .main-header .left .left-item1 {
  width: 453px;
}
.container #main .main-header .left .left-item1 .carbon-price {
  box-sizing: border-box;
  color: #ffffff;
  /* height: 43px; */
  font-size: 18px;
  padding: 13px 0 11px 22px;
  background: url(./image/background\ -right.png) no-repeat;
}
/* 品质特性 */
.container #main .main-header .left .left-item1 .pie {
  box-sizing: border-box;
  width: 453px;
  height: 279px;
  border: 1px solid #235464;
  display: flex;
  justify-content: space-between;
}
.container #main .main-header .left .left-item1 .pie > ul > li:nth-of-type(1) {
  width: 197px;
  height: 52px;
  margin: 19px 0 0 21px;
  text-align: center;
}
.container #main .main-header .left .left-item1 .pie > ul > li {
  position: relative;
  width: 197px;
  height: 52px;
  margin: 11px 0 0 21px;
  text-align: center;
}
/* 线条的样式 */
.container #main .main-header .left .left-item1 .pie > ul > li::before {
  content: "";
  position: absolute;
  width: 33px;
  height: 0;
  right: -50px;
  bottom: 26px;
  border: 0.5px solid #03feff;
}
.container #main .main-header .left .left-item1 .pie > ul > li::after {
  content: "";
  position: absolute;
  height: 60px;
  width: 0;
  right: -50px;
  bottom: -35px;
  border: 0.5px solid #03feff;
}
.container
  #main
  .main-header
  .left
  .left-item1
  .pie
  > ul
  > li:nth-of-type(4):after {
  content: "";
  position: absolute;
  height: 33px;
  width: 0;
  right: -50px;
  bottom: 26px;
  border: none;
}
.container #main .main-header .left .left-item1 .pie > ul > li img {
  width: 98%;
  height: 98%;
}
.container
  #main
  .main-header
  .left
  .left-item1
  .pie
  > ul
  > li
  img:nth-of-type(2) {
  position: absolute;
  /* z-index:4; */
  top: 22.5px;
  left: 210px;
  width: 5px;
  height: 5px;
}
.container
  #main
  .main-header
  .left
  .left-item1
  .pie
  > ul
  > li
  img:nth-of-type(3) {
  position: absolute;
  /* z-index:4; */
  top: 20px;
  left: 240px;
  width: 11px;
  height: 11px;
}
.container #main .main-header .left .left-item1 .pie > ul > li span {
  position: absolute;
  left: 16px;
  top: 20px;
  width: 63px;
  height: 16px;
  font-size: 16px;
  font-family: PingFang SC Regular, PingFang SC Regular-Regular;
  color: #fff;
  white-space: nowrap;
}
.container #main .main-header .left .left-item1 .pie > ul > li i {
  position: absolute;
  top: 10px;
  right: 22px;
  font-size: 26px;
  font-family: DIN Alternate Bold, DIN Alternate Bold-Bold;
  /* font-weight: 700; */
  text-align: left;
  color: #1ee3f3;
}
.container #main .main-header .left .left-item1 .pie .quality {
  width: 147px;
  height: 147px;
  position: relative;
  margin: 65px 20px 67px 0;
}
/* 线条的样式 */
.container #main .main-header .left .left-item1 .pie .quality::before {
  position: absolute;
  left: -16px;
  top: 70px;
  content: "";
  width: 14px;
  height: 0;
  border: 0.5px solid #1ee3f3;
}
.container #main .main-header .left .left-item1 .pie .quality img {
  width: 147px;
  height: 147px;
}
.container
  #main
  .main-header
  .left
  .left-item1
  .pie
  .quality
  img:nth-of-type(2) {
  position: absolute;
  top: 66px;
  left: -2px;
  width: 11px;
  height: 11px;
}
.container #main .main-header .left .left-item1 .pie .quality i {
  position: absolute;
  top: 44px;
  left: 54px;
  font-size: 26px;
  font-family: DIN Alternate Bold, DIN Alternate Bold-Bold;
  text-align: left;
  color: #1ee3f3;
}
.container #main .main-header .left .left-item1 .pie .quality span {
  position: absolute;
  top: 74px;
  left: 42px;
  font-size: 16px;
  font-family: PingFang SC Regular, PingFang SC Regular-Regular;
  color: #fff;
  white-space: nowrap;
}
.container #main .main-header .left .left-item2 {
  width: 453px;
  height: 271px;
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
}
.container #main .main-header .left .left-item2 .evaluate {
  box-sizing: border-box;
  width: 48%;
  border: 1px solid #235464;
}
.container #main .main-header .left .left-item2 .evaluate .evaluate-header {
  height: 40px;
  font-size: 16px;
  line-height: 40px;
  padding-left: 16px;
  text-align: left;
  color: #ffffff;
  border-bottom: 1px solid #136878;
}
.container #main .main-header .left .left-item2 .evaluate .evaluate-main {
  display: flex;
  justify-content: space-around;
  margin: 52px 0 0 24px;
}
.container #main .main-header .left .left-item2 .evaluate .evaluate-main img {
  width: 89px;
  height: 128px;
}
.container #main .main-header .left .left-item2 .evaluate .evaluate-main .desp {
  white-space: pre-wrap;
  margin: 12px 0 0 6px;
  text-align: left;
}
.container
  #main
  .main-header
  .left
  .left-item2
  .evaluate
  .evaluate-main
  .desp
  > div {
  white-space: pre-wrap;
  margin: 5px 10px 0;
}
.container
  #main
  .main-header
  .left
  .left-item2
  .evaluate
  .evaluate-main
  .desp
  > div
  > span {
  font-size: 28px;
  color: #fff;
}
.container
  #main
  .main-header
  .left
  .left-item2
  .evaluate
  .evaluate-main
  .desp
  > div
  > i {
  font-size: 18px;
  color: #fff;
}
/* 中间内容区 */
.container #main .main-header .mainItem {
  width: 874px;
  height: 609px;
  position: absolute;
  top: 31px;
  left: 523px;
}
.container #main .main-header .mainItem .customer {
  box-sizing: border-box;
  /* height: 43px; */
  font-size: 18px;
  color: #ffffff;
  padding: 13px 0 11px 22px;
  background: url(./image/background\ -main.png) no-repeat;
}
.container #main .main-header .mainItem .rectangle {
  box-sizing: border-box;
  height: 566px;
  border: 1px solid #235464;
}
.container #main .main-header .mainItem .rectangle .info {
  position: relative;
  display: flex;
  justify-content: space-between;
  margin: 40px 21px 0 21px;
}
.container #main .main-header .mainItem .rectangle .info .info-left {
  display: flex;
  font-size: 18px;
  color: #18e3ed;
}
.container #main .main-header .mainItem .rectangle .info .info-left .fullName {
  margin-right: 10px;
}
.container #main .main-header .mainItem .rectangle .info .info-left .firstNum {
  position: absolute;
  top: -14px;
  left: 178px;
  width: 28px;
  height: 40px;
  line-height: 40px;
  color: #19f1f9;
  font-size: 20px;
  font-weight: bold;
  font-family: DIN Alternate Bold, DIN Alternate Bold-Bold;
  opacity: 0.67;
  border: 1px solid #5a9cff;
  text-align: center;
}
.container #main .main-header .mainItem .rectangle .info .info-left > i {
  position: absolute;
  top: 9px;
  left: 212px;
}
.container #main .main-header .mainItem .rectangle .info .info-left .secondNum {
  position: absolute;
  top: -14px;
  left: 218px;
  width: 28px;
  height: 40px;
  line-height: 40px;
  color: #19f1f9;
  font-size: 20px;
  font-weight: bold;
  font-family: DIN Alternate Bold, DIN Alternate Bold-Bold;
  opacity: 0.67;
  border: 1px solid #5a9cff;
  text-align: center;
}
.container #main .main-header .mainItem .rectangle .info .info-left .thirdNum {
  position: absolute;
  top: -14px;
  left: 252px;
  width: 28px;
  height: 40px;
  line-height: 40px;
  color: #19f1f9;
  font-size: 20px;
  font-weight: bold;
  font-family: DIN Alternate Bold, DIN Alternate Bold-Bold;
  opacity: 0.67;
  border: 1px solid #5a9cff;
  text-align: center;
}
.container #main .main-header .mainItem .rectangle .info .info-left .fourthNum {
  position: absolute;
  top: -14px;
  left: 286px;
  width: 28px;
  height: 40px;
  line-height: 40px;
  color: #19f1f9;
  font-size: 20px;
  font-weight: bold;
  opacity: 0.67;
  border: 1px solid #5a9cff;
  text-align: center;
}
.container #main .main-header .mainItem .rectangle .info .info-right > a {
  text-decoration: underline;
  font-size: 16px;
  color: #18e3ed;
}
.container #main .main-header .mainItem .rectangle .score {
  box-sizing: border-box;
  width: 832px;
  height: 22px;
  border: 1px solid #fcb018;
  margin: 18px 17px 13px 21px;
}
.container #main .main-header .mainItem .rectangle .score .fill {
  width: 785px;
  height: 20px;
  background: #fcb018;
}
/* 表格区域样式 */
.container #main .main-header .mainItem .rectangle > table {
  position: relative;
  width: 832px;
  margin: 0 17px 0 21px;
}
/* 伪类 */
.container #main .main-header .mainItem .rectangle > table::before {
  position: absolute;
  left: 82px;
  content: "";
  width: 0;
  height: 389px;
  opacity: 0.34;
  border: 0.5px solid #00aeef;
}
.container #main .main-header .mainItem .rectangle > table::after {
  position: absolute;
  top: 0;
  left: 332px;
  content: "";
  width: 0;
  height: 389px;
  opacity: 0.34;
  border: 0.5px solid #00aeef;
}
.container #main .main-header .mainItem .rectangle > table > tr:nth-of-type(1) {
  height: 48px;
  background: rgba(0, 174, 239, 0.34);
}
.container #main .main-header .mainItem .rectangle > table > tr > th {
  font-size: 16px;
  text-align: center;
  color: #ffffff;
}
.container
  #main
  .main-header
  .mainItem
  .rectangle
  > table
  > tr
  > th:nth-of-type(3) {
  text-align: left;
  padding-left: 30px;
}
.container #main .main-header .mainItem .rectangle > table > tr {
  height: 48px;
  border: 1px solid #00aeef;
}

.container #main .main-header .mainItem .rectangle > table > tr > td {
  height: 48px;
  /* line-height: 48px; */
  font-size: 14px;
  color: #fff;
  text-align: center;
}
.container
  #main
  .main-header
  .mainItem
  .rectangle
  > table
  > tr
  > td:nth-of-type(1) {
  width: 10%;
}
.container
  #main
  .main-header
  .mainItem
  .rectangle
  > table
  > tr
  > td:nth-of-type(2) {
  width: 30%;
}
.container
  #main
  .main-header
  .mainItem
  .rectangle
  > table
  > tr
  > td:nth-of-type(3) {
  width: 60%;
}
.container
  #main
  .main-header
  .mainItem
  .rectangle
  > table
  > tr
  > td:nth-of-type(3)
  .process {
  position: relative;
}
.container
  #main
  .main-header
  .mainItem
  .rectangle
  > table
  > tr
  > td:nth-of-type(3)
  .process
  .process-score {
  width: 370px;
  margin-left: 30px;
  border: 1px solid #051c2f;
  background: #051c2f;
}
.container
  #main
  .main-header
  .mainItem
  .rectangle
  > table
  > tr
  > td:nth-of-type(3)
  .process
  .process-score
  .score-number {
  width: 363px;
  height: 14px;
  background: rgba(103, 215, 253, 0.5);
}
.container
  #main
  .main-header
  .mainItem
  .rectangle
  > table
  > tr
  > td:nth-of-type(3)
  .process
  > span {
  position: absolute;
  top: 0;
  right: 52px;
}
/* 重写elementUI样式 */
.container #main .main-header .mainItem .rectangle .el-pagination {
  margin: 10px 0 0 133px;
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
/* 填报区域 */
.container #main .main-header .entrance {
  box-sizing: border-box;
  position: absolute;
  top: 30px;
  left: 1090px;
  z-index: 4;
  width: 760px;
  height: 892px;
  background: rgba(9, 38, 78, 0.9);
  border: 1px solid #2294d5;
}
/*  填报区域头部样式  */
.container #main .main-header .entrance .entrance-header {
  position: fixed;
  top: 138px;
  width: 758px;
  height: 50px;
  line-height: 50px;
  font-size: 18px;
  color: #fff;
  background: rgba(19, 74, 145, 0.38);
  display: flex;
  justify-content: space-between;
}
.container #main .main-header .entrance .entrance-header .hLeft {
  margin-left: 19px;
}
.container #main .main-header .entrance .entrance-header .hRight {
  margin-right: 20px;
}
.container #main .main-header .entrance .entrance-header .hRight:hover {
  color: #e1a630;
  cursor: pointer;
}
/* 填报区域主体区域 */
.container #main .main-header .entrance .entrance-main {
  margin-top: 50px;
  width: 758px;
  height: 767px;
}
.container #main .main-header .entrance .entrance-main .el-form .mHeader {
  margin: 68px 0 28px 0;
}
/* 填报区域底部样式 */
.container #main .main-header .entrance .entrance-bottom {
  position: fixed;
  top: 955px;
  width: 758px;
  height: 73px;
  background: #09264e;
  box-shadow: 0px 0px 40px 0px rgba(12, 21, 48, 0.3);
  /* margin:auto; */
}
.container #main .main-header .entrance .entrance-bottom .el-button--default {
  width: 84px;
  height: 30px;
  position: absolute;
  top: 22px;
  left: 297px;
  background: #09264e;
  border: 1px solid #2294d5;
  border-radius: 4px;
  color: #fff;
}
.container #main .main-header .entrance .entrance-bottom .el-button--primary {
  width: 84px;
  height: 30px;
  position: absolute;
  top: 22px;
  left: 391px;
  background: #2294d5;
  border-radius: 4px;
}
/* 右侧栏 */
.container #main .main-header .right {
  width: 453px;
  height: 609px;
  position: absolute;
  left: 1423px;
  top: 31px;
}
.container #main .main-header .right .right-item1 .diversification {
  box-sizing: border-box;
  /* height: 44px; */
  font-size: 18px;
  color: #ffffff;
  padding: 13px 0 11px 22px;
  background: url(./image/background\ -right.png) no-repeat;
}
.container #main .main-header .right .right-item1 .circular {
  position: relative;
  box-sizing: border-box;
  width: 453px;
  height: 279px;
  border: 1px solid #235464;
}
.container #main .main-header .right .right-item1 .circular .smallLogo {
  position: relative;
  z-index: 3;
  width: 227px;
  height: 52px;
  margin: 39px 113px 0;
}
/* 线的样式 */
.container #main .main-header .right .right-item1 .circular .smallLogo::before {
  position: absolute;
  bottom: -40px;
  left: 64px;
  content: "";
  width: 104px;
  height: 0;
  opacity: 0.3;
  border: 0.5px dashed #fff;
}
.container #main .main-header .right .right-item1 .circular .smallLogo::after {
  position: absolute;
  bottom: -40px;
  left: 118px;
  content: "";
  width: 0;
  height: 38px;
  opacity: 0.3;
  border: 0.5px dashed #fff;
}
.container #main .main-header .right .right-item1 .circular .smallLogo > img {
  width: 100%;
  height: 100%;
}
.container #main .main-header .right .right-item1 .circular .smallLogo > span {
  white-space: nowrap;
  position: absolute;
  top: 22px;
  left: 32px;
  font-size: 16px;
  color: #fff;
}
.container #main .main-header .right .right-item1 .circular .smallLogo > i {
  position: absolute;
  top: 12px;
  left: 182px;
  font-size: 30px;
  color: #32fdf6;
}
.container #main .main-header .right .right-item1 .circular .graphical {
  display: flex;
}
.container
  #main
  .main-header
  .right
  .right-item1
  .circular
  .graphical
  > li:nth-child(1) {
  position: relative;
  width: 84px;
  height: 84px;
  border-radius: 50%;
  border-width: 1px;
  border-style: dashed;
  opacity: 0.3;
  border-color: #ffffff;
  margin: 80px 21px 0 32px;
}
/* 线的样式 */
.container
  #main
  .main-header
  .right
  .right-item1
  .circular
  .graphical
  > li:nth-child(1)::before {
  position: absolute;
  top: -98px;
  left: 40px;
  content: "";
  width: 0;
  height: 94px;
  border: 0.5px dashed #fff;
}
.container
  #main
  .main-header
  .right
  .right-item1
  .circular
  .graphical
  > li:nth-child(1)::after {
  position: absolute;
  top: -98px;
  left: 40px;
  content: "";
  height: 0;
  width: 36px;
  border: 0.5px dashed #fff;
}
.container
  #main
  .main-header
  .right
  .right-item1
  .circular
  .graphical
  > li:nth-child(1)
  > span {
  position: absolute;
  text-align: center;
  top: 12px;
  left: 10px;
  height: 63px;
  line-height: 63px;
  width: 63px;
  font-size: 16px;
  font-family: PingFang SC Semibold, PingFang SC Semibold-Semibold;
  font-weight: bold;
  color: #07233f;
  border-radius: 50%;
  background-color: #fff;
}
.container
  #main
  .main-header
  .right
  .right-item1
  .circular
  .graphical
  > li:nth-child(2) {
  position: relative;
  width: 84px;
  height: 84px;
  border-radius: 50%;
  border-width: 1px;
  border-style: dashed;
  border-color: #fb6f38;
  margin: 80px 20px 0 0;
}
/* 线的样式 */
.container
  #main
  .main-header
  .right
  .right-item1
  .circular
  .graphical
  > li:nth-child(2)::before {
  position: absolute;
  top: -40px;
  left: 37px;
  content: "";
  width: 0;
  opacity: 0.3;
  height: 34px;
  border: 0.5px dashed #fff;
}
.container
  #main
  .main-header
  .right
  .right-item1
  .circular
  .graphical
  > li:nth-child(2)
  > span {
  position: absolute;
  text-align: center;
  top: 12px;
  left: 10px;
  height: 63px;
  line-height: 63px;
  width: 63px;
  font-size: 16px;
  font-family: PingFang SC Semibold, PingFang SC Semibold-Semibold;
  font-weight: bold;
  color: #07233f;
  border-radius: 50%;
  background-color: #fb6f38;
}
.container
  #main
  .main-header
  .right
  .right-item1
  .circular
  .graphical
  > li:nth-child(3) {
  position: relative;
  width: 84px;
  height: 84px;
  border-radius: 50%;
  border-width: 1px;
  border-style: dashed;
  border-color: #f1e291;
  margin: 80px 21px 0 0;
}
/* 线的样式 */
.container
  #main
  .main-header
  .right
  .right-item1
  .circular
  .graphical
  > li:nth-child(3)::before {
  position: absolute;
  top: -43px;
  left: 38px;
  content: "";
  width: 0;
  height: 38px;
  opacity: 0.3;
  border: 0.5px dashed #fff;
}
.container
  #main
  .main-header
  .right
  .right-item1
  .circular
  .graphical
  > li:nth-child(3)
  > span {
  position: absolute;
  text-align: center;
  top: 12px;
  left: 10px;
  height: 63px;
  line-height: 63px;
  width: 63px;
  font-size: 16px;
  font-family: PingFang SC Semibold, PingFang SC Semibold-Semibold;
  font-weight: bold;
  color: #07233f;
  border-radius: 50%;
  background-color: #f1e291;
}
.container
  #main
  .main-header
  .right
  .right-item1
  .circular
  .graphical
  > li:nth-child(4) {
  position: relative;
  width: 84px;
  height: 84px;
  border-radius: 50%;
  border-width: 1px;
  border-style: dashed;
  border-color: #62dbe4;
  margin: 80px 0 0 0;
}
.container
  #main
  .main-header
  .right
  .right-item1
  .circular
  .graphical
  > li:nth-child(4)
  > span {
  position: absolute;
  text-align: center;
  top: 12px;
  left: 10px;
  height: 63px;
  line-height: 63px;
  width: 63px;
  font-size: 16px;
  font-family: PingFang SC Semibold, PingFang SC Semibold-Semibold;
  font-weight: bold;
  color: #07233f;
  border-radius: 50%;
  background-color: #62dbe4;
}
/* 线的样式 */
.container
  #main
  .main-header
  .right
  .right-item1
  .circular
  .graphical
  > li:nth-child(4)::before {
  position: absolute;
  top: -98px;
  left: 40px;
  content: "";
  width: 0;
  height: 94px;
  opacity: 0.3;
  border: 0.5px dashed #fff;
}
.container
  #main
  .main-header
  .right
  .right-item1
  .circular
  .graphical
  > li:nth-child(4)::after {
  position: absolute;
  top: -98px;
  left: -10px;
  content: "";
  height: 0;
  width: 44px;
  opacity: 0.3;
  border: 0.5px dashed #fff;
}
.container #main .main-header .right .right-item2 {
  height: 271px;
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
}
.container #main .main-header .right .right-item2 .drive {
  box-sizing: border-box;
  width: 49%;
  border: 1px solid #235464;
}
.container #main .main-header .right .right-item2 .drive .drive-header {
  height: 40px;
  font-size: 16px;
  line-height: 40px;
  padding-left: 16px;
  text-align: left;
  color: #ffffff;
  border-bottom: 1px solid #136878;
}
.container #main .main-header .right .right-item2 .drive .drive-main {
  margin: 10px 49px;
  position: relative;
}
.container #main .main-header .right .right-item2 .drive .drive-main > img {
  width: 100%;
  height: 100%;
}
.container #main .main-header .right .right-item2 .drive .drive-main > span {
  position: absolute;
  color: #fff;
  font-size: 30px;
  top: 74px;
  left: 54px;
}
/* 底部栏 */
.container #main .footer {
  width: 1830px;
  height: 273px;
  position: absolute;
  top: 665px;
  left: 44px;
  display: flex;
  justify-content: space-between;
}
.container #main .footer .footer-item {
  width: 530px;
}
.container #main .footer .footer-item2 {
  width: 729px;
}
/* 底部三栏头部 */
.container #main .footer .footer-item .credit {
  box-sizing: border-box;
  width: 100%;
  /* height: 43px; */
  font-size: 18px;
  color: #ffffff;
  padding: 13px 0 11px 22px;
  background: url(./image/background\ -footer.png) no-repeat;
}
.container #main .footer .footer-item2 .credit {
  box-sizing: border-box;
  width: 100%;
  /* height: 43px; */
  font-size: 18px;
  color: #ffffff;
  padding: 13px 0 11px 22px;
  background: url(./image/30.png) no-repeat;
}
/* 底部左右栏样式 */
.container #main .footer .footer-item .coverage {
  display: flex;
  justify-content: space-around;
  box-sizing: border-box;
  height: 224px;
  border: 1px solid #235464;
}
.container #main .footer .footer-item .coverage .chart {
  position: relative;
}
.container #main .footer .footer-item .coverage .chart > img {
  height: 159px;
  width: 138px;
}
.container #main .footer .footer-item .coverage .chart .numa {
  position: absolute;
  top: 50px;
  left: 44px;
  font-size: 42px;
  font-family: DIN Alternate Bold, DIN Alternate Bold-Bold;
  font-weight: bold;
  text-align: left;
  color: #fff;
}
.container #main .footer .footer-item .coverage .chart .numb {
  position: absolute;
  top: 50px;
  left: 56px;
  font-size: 42px;
  font-family: DIN Alternate Bold, DIN Alternate Bold-Bold;
  font-weight: bold;
  text-align: left;
  color: #fff;
}
.container #main .footer .footer-item .coverage .chart .money {
  box-sizing: border-box;
  position: absolute;
  bottom: 17px;
  left: -30px;
  width: 200px;
  height: 47px;
  line-height: 45px;
  border: 1px solid #54e9ff;
  border-radius: 24px;
  text-align: center;
}
.container #main .footer .footer-item .coverage .chart .money > img {
  vertical-align: text-bottom;
  width: 25px;
  height: 24px;
  padding-right: 8px;
}
.container #main .footer .footer-item .coverage .chart .money > span {
  font-size: 18px;
  font-family: PingFang SC Regular, PingFang SC Regular-Regular;
  font-weight: 400;
  color: #fff;
}
.container #main .footer .footer-item .coverage .chart .group {
  box-sizing: border-box;
  position: absolute;
  bottom: 17px;
  left: -30px;
  width: 200px;
  height: 47px;
  line-height: 45px;
  border: 1px solid #54e9ff;
  border-radius: 24px;
  text-align: center;
}
.container #main .footer .footer-item .coverage .chart .group > img {
  vertical-align: text-bottom;
  width: 25px;
  height: 24px;
  padding-right: 8px;
}
.container #main .footer .footer-item .coverage .chart .group > span {
  font-size: 18px;
  font-family: PingFang SC Regular, PingFang SC Regular-Regular;
  font-weight: 400;
  color: #fff;
}
/* 底部中间栏样式 */
.container #main .footer .footer-item2 .coverage2 {
  height: 224px;
  box-sizing: border-box;
  border: 1px solid #235464;
  display: flex;
}

.container #main .footer .footer-item2 .coverage2 .coverage2-left {
  /* box-sizing: border-box; */
  width: 274px;
  height: 201px;
  border: 1px dashed #03feff;
  margin: 14px 0 14px 39px;
  display: flex;
  justify-content: space-between;
  border-radius: 6px;
}
.container #main .footer .footer-item2 .coverage2 .coverage2-left .secondary {
  box-sizing: border-box;
  margin: 4px 0 4px 4px;
  border: 1px solid #03feff;
}
.container
  #main
  .footer
  .footer-item2
  .coverage2
  .coverage2-left
  .secondary
  .jack {
  position: relative;
  width: 139px;
  height: 30px;
  font-size: 14px;
  line-height: 30px;
  color: #fff;
  text-align: center;
  background: linear-gradient(#0d96b1 0%, #00b294 100%);
}
/* 线的样式 */
.container
  #main
  .footer
  .footer-item2
  .coverage2
  .coverage2-left
  .secondary
  .jack::before {
  position: absolute;
  bottom: -1px;
  right: -26px;
  content: "";
  width: 22px;
  height: 0;
  border: 0.5px solid #00b294;
}
.container
  #main
  .footer
  .footer-item2
  .coverage2
  .coverage2-left
  .secondary
  .jack:nth-of-type(3)::before {
  position: absolute;
  bottom: -1px;
  right: -12px;
  content: "";
  width: 8px;
  height: 0;
  border: 0.5px solid #00b294;
}
.container
  #main
  .footer
  .footer-item2
  .coverage2
  .coverage2-left
  .secondary
  .jack::after {
  position: absolute;
  bottom: -45px;
  right: -28px;
  content: "";
  width: 0;
  height: 44px;
  border: 0.5px solid #00b294;
}
.container
  #main
  .footer
  .footer-item2
  .coverage2
  .coverage2-left
  .secondary
  .jack:nth-of-type(3):after {
  position: absolute;
  bottom: -61px;
  right: -28px;
  content: "";
  width: 0;
  height: 44px;
  border: 0.5px solid #00b294;
}
.container
  #main
  .footer
  .footer-item2
  .coverage2
  .coverage2-left
  .secondary
  .jack:nth-of-type(5):after {
  position: absolute;
  bottom: -1px;
  right: -9px;
  content: "";
  width: 0;
  height: 10px;
  border: none;
}
.container
  #main
  .footer
  .footer-item2
  .coverage2
  .coverage2-left
  .secondary
  .mary {
  width: 139px;
  height: 30px;
  font-size: 16px;
  line-height: 36px;
  text-align: center;
  color: #03feff;
}
.container #main .footer .footer-item2 .coverage2 .coverage2-left .reduce {
  width: 30px;
  height: 30px;
  margin: 81px 0 88px 8px;
}
.container
  #main
  .footer
  .footer-item2
  .coverage2
  .coverage2-left
  .reduce
  > img {
  width: 98%;
  height: 98%;
}
.container #main .footer .footer-item2 .coverage2 .coverage2-left .price {
  position: relative;
  box-sizing: border-box;
  width: 74px;
  height: 124px;
  border: 1px solid #03feff;
  margin: 34px 5px 38px 0;
  display: flex;
}
/* 线的样式 */
.container
  #main
  .footer
  .footer-item2
  .coverage2
  .coverage2-left
  .price::before {
  position: absolute;
  top: 60px;
  left: -6px;
  content: "";
  width: 3px;
  height: 0;
  border: 0.5px solid #03feff;
}
.container
  #main
  .footer
  .footer-item2
  .coverage2
  .coverage2-left
  .price
  .price-left {
  box-sizing: border-box;
  width: 32px;
  height: 122px;
  text-align: center;
  background: linear-gradient(#0d96b1 0%, #00b294 100%);
  font-size: 14px;
  padding: 10px 9px;
  color: #fff;
}
.container
  #main
  .footer
  .footer-item2
  .coverage2
  .coverage2-left
  .price
  .price-right {
  width: 50px;
  height: 122px;
  line-height: 122px;
  text-align: center;
  font-size: 20px;
  color: #fff;
}
.container #main .footer .footer-item2 .coverage2 .coverage2-right {
  /* position: relative; */
  display: flex;
}
.container #main .footer .footer-item2 .coverage2 .coverage2-right .bery {
  width: 30px;
  height: 30px;
  margin: 94px 0 99px 17px;
  position: relative;
}
/* 线的样式 */
.container
  #main
  .footer
  .footer-item2
  .coverage2
  .coverage2-right
  .bery::before {
  position: absolute;
  left: -18px;
  top: 14px;
  content: "";
  width: 16px;
  height: 0;
  border: 0.5px solid #03feff;
}
.container #main .footer .footer-item2 .coverage2 .coverage2-right .bery > img {
  width: 100%;
  height: 100%;
}
.container #main .footer .footer-item2 .coverage2 .coverage2-right .cery {
  position: relative;
  box-sizing: border-box;
  width: 50px;
  height: 50px;
  border: 1px solid #32fdf6;
  border-radius: 50%;
  margin: 86px 0 89px 17px;
}
/* 线的样式 */
.container
  #main
  .footer
  .footer-item2
  .coverage2
  .coverage2-right
  .cery::before {
  position: absolute;
  left: -18px;
  top: 21px;
  content: "";
  height: 0;
  width: 15px;
  border: 0.5px solid #03feff;
}
.container
  #main
  .footer
  .footer-item2
  .coverage2
  .coverage2-right
  .cery
  > span {
  position: absolute;
  top: 7px;
  left: 17px;
  font-size: 24px;
  color: #03feff;
}
.container #main .footer .footer-item2 .coverage2 .coverage2-right .dery {
  position: relative;
  width: 47px;
  height: 23px;
  margin: 98px 0 102px 26px;
}
/* 线的样式 */
.container
  #main
  .footer
  .footer-item2
  .coverage2
  .coverage2-right
  .dery::before {
  position: absolute;
  top: 10px;
  left: -26px;
  content: "";
  height: 0;
  width: 98px;
  border: 0.5px solid #03feff;
}
.container #main .footer .footer-item2 .coverage2 .coverage2-right .dery > img {
  width: 100%;
  height: 100%;
}
.container #main .footer .footer-item2 .coverage2 .coverage2-right .eery {
  position: relative;
  width: 179px;
  height: 179px;
  margin: 21px 39px 25px 12px;
}
.container #main .footer .footer-item2 .coverage2 .coverage2-right .eery > img {
  width: 100%;
  height: 100%;
}
.container
  #main
  .footer
  .footer-item2
  .coverage2
  .coverage2-right
  .eery
  > span {
  position: absolute;
  top: 60px;
  left: 58px;
  font-size: 26px;
  color: #32fdf6;
}
.container #main .footer .footer-item2 .coverage2 .coverage2-right .eery > i {
  position: absolute;
  top: 100px;
  left: 58px;
  font-size: 16px;
  color: #fff;
}
</style>