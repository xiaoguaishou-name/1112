<template>
  <div>
    <!-- 外部容器 -->
    <div class="container" :class="[this.isShowMask ? 'show' : 'hidden']">
      <!-- <div class="mask" v-show="isShowMask"> -->
      <!-- 头部栏 -->
      <Header></Header>
      <!-- 主要内容区 -->
      <div id="main">
        <div class="main-header clearfix">
          <!-- 左侧栏 -->
          <div class="left">
            <div class="left-item1">
              <div class="carbon-price">品质特性</div>
              <div class="pie" @click="showQualityArea">
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
              <div class="power">
                <div class="power-header">能力评估</div>
                <div class="power-main" @click="showPowerArea">
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
              <div class="shop">
                <div class="shop-header">均衡购货评价</div>
                <div class="shop-main" @click="showShopArea">
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
                    <span>当前客户信息：{{ this.customerName }}</span>
                  </div>
                  <div class="firstNum">{{ this.customerNum[0] }}</div>
                  <i>,</i>
                  <div class="secondNum">{{ this.customerNum[1] }}</div>
                  <div class="thirdNum">{{ this.customerNum[2] }}</div>
                  <div class="fourthNum">{{ this.customerNum[3] }}</div>
                </div>
                <div class="info-right">
                  <el-date-picker
                    v-model="date"
                    type="date"
                    placeholder="选择日期"
                  >
                  </el-date-picker>
                  <a @click="showEntrance">填报入口</a>
                </div>
              </div>
              <!-- 得分图形展示区域 -->
              <!-- <div class="score">
                <div class="fill"></div>
              </div> -->
              <div class="progress">
                <el-progress
                  :stroke-width="22"
                  :percentage="score"
                  color="#fcb018"
                  :show-text="false"
                ></el-progress>
              </div>
              <!-- <Progress></Progress> -->
              <!-- 表格区域 -->
              <Table></Table>
              <!-- 分页 -->
              <!-- <el-pagination
                background
                layout="prev, pager, next, jumper"
                :page-count="20"
              >
              </el-pagination> -->
              <Pagination></Pagination>
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
                <!-- 头部区域 -->
                <div class="mHeader">
                  <el-form-item label="客户名称">
                    <el-select
                      v-model="form.cCusName"
                      placeholder="请选择客户名称"
                    >
                      <el-input
                        placeholder="请输入客户名称查询"
                        suffix-icon="el-icon-search"
                        v-model="form.cCusName2"
                      >
                      </el-input>
                      <el-option label="张三" value="shanghai"></el-option>
                      <el-option label="王五" value="beijing"></el-option>
                      <el-option label="李四" value="shenzhen"></el-option>
                      <el-option label="谢晓" value="guangzhou"></el-option>
                      <el-option label="胡俊波" value="nanchang"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="填报日期">
                    <el-date-picker
                      v-model="form.sysDate"
                      type="date"
                      placeholder="请选择填报日期"
                    >
                    </el-date-picker>
                  </el-form-item>
                </div>
                <!-- 品质特性区域 -->
                <div class="quality-area">
                  <div class="gHeader">
                    <span>品质特性</span>
                  </div>
                  <el-form-item label="产能规模">
                    <el-select
                      v-model="form.proSca"
                      placeholder="请选择产能规模"
                    >
                      <el-option label="0" value="0"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="行业地位">
                    <el-select
                      v-model="form.status"
                      placeholder="请选择行业地位"
                    >
                      <el-option label="0：其他" value="0"></el-option>
                      <el-option
                        label="1：在当地销售规模处于前十"
                        value="1"
                      ></el-option>
                      <el-option
                        label="2：在当地销售规模处于前三"
                        value="2"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="业务关系持续期">
                    <el-select
                      v-model="form.duration"
                      placeholder="请选择业务关系持续期"
                    >
                      <el-option label="0：其他" value="0"></el-option>
                      <el-option
                        label="1：与本公司的业务关系持续2-12个月"
                        value="1"
                      ></el-option>
                      <el-option
                        label="3：与本公司的业务关系持续1-2年"
                        value="3"
                      ></el-option>
                      <el-option
                        label="5：与本公司的业务关系持续2年以上"
                        value="5"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="业务关系强度">
                    <el-select
                      v-model="form.relDeg"
                      placeholder="请选择业务关系强度"
                    >
                      <el-option
                        label="1：偶尔在本公司提货"
                        value="1"
                      ></el-option>
                      <el-option
                        label="2：以本公司为次供货商"
                        value="2"
                      ></el-option>
                      <el-option
                        label="3：与本公司为主供货商"
                        value="3"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </div>
                <!-- 能力评价区域 -->
                <div class="power-area">
                  <div class="gHeader">
                    <span>能力评价</span>
                  </div>
                  <el-form-item label="吸货能力">
                    <el-radio-group v-model="form.power" text-color="#00b294">
                      <el-radio label="40" border>40</el-radio>
                      <el-radio label="30" border>30</el-radio>
                      <el-radio label="20" border>20</el-radio>
                      <el-radio label="10" border>10</el-radio>
                      <el-radio label="5" border>5</el-radio>
                      <div class="forty">
                        <div class="forty-item">时间周期（季度）</div>
                        <div class="forty-item">碳品吸货能力>=8000吨；</div>
                        <div class="forty-item">轻质化煤焦油1号>=3000吨；</div>
                        <div class="forty-item">轻质化煤焦油2号>=800吨；</div>
                      </div>
                      <div class="thirty">
                        <div class="thirty-item">时间周期（季度）</div>
                        <div class="thirty-item">碳品吸货能力>=6000吨；</div>
                        <div class="thirty-item">轻质化煤焦油1号>=2000吨；</div>
                        <div class="thirty-item">轻质化煤焦油2号>=500吨；</div>
                      </div>
                      <div class="twenty">
                        <div class="twenty-item">时间周期（季度）</div>
                        <div class="twenty-item">碳品吸货能力>=4000吨；</div>
                        <div class="twenty-item">轻质化煤焦油1号>=1000吨；</div>
                        <div class="twenty-item">轻质化煤焦油2号>=300吨；</div>
                      </div>
                      <div class="ten">
                        <div class="ten-item">时间周期（季度）</div>
                        <div class="ten-item">碳品吸货能力>=2000吨；</div>
                        <div class="ten-item">轻质化煤焦油1号>=500吨；</div>
                        <div class="ten-item">轻质化煤焦油2号>=100吨；</div>
                      </div>
                      <div class="five">
                        <div class="five-item">时间周期（季度）</div>
                        <div class="five-item">碳品吸货能力&lt;2000吨</div>
                        <div class="five-item">轻质化煤焦油1号&lt;500吨；</div>
                        <div class="five-item">轻质化煤焦油2号&lt;100吨；</div>
                      </div>
                    </el-radio-group>
                  </el-form-item>
                </div>
                <!-- 均衡购货评价区域 -->
                <div class="shop-area">
                  <div class="gHeader">
                    <span>均衡购货评价</span>
                  </div>
                  <el-form-item label="均衡购货能力">
                    <el-radio-group v-model="form.shop">
                      <el-radio :label="20">20：每月购货天数>=20天；</el-radio>
                      <el-radio :label="15">15：每月购货天数>=15天；</el-radio>
                      <el-radio :label="10">10：每月购货天数>=10天；</el-radio>
                      <el-radio :label="5">5：每月购货天数&lt;10天；</el-radio>
                    </el-radio-group>
                  </el-form-item>
                </div>
                <!-- 信用评价区域 -->
                <div class="credit-area">
                  <div class="gHeader">
                    <span>信用评价</span>
                  </div>
                  <el-form-item label="现金比例">
                    <el-input
                      v-model="form.cashRat"
                      placeholder="得分"
                    ></el-input>
                    <span>得分= (现金金额/销售总金额)*15</span>
                  </el-form-item>
                  <el-form-item label="配合度">
                    <el-select
                      v-model="form.cooperDeg1"
                      placeholder="默认为0"
                      style="width: 523px"
                    >
                      <el-option label="0：其他" value="0"></el-option>
                      <el-option
                        label="3：承兑汇票补充证明材料在规定期限内（一周内）返回"
                        value="3"
                      ></el-option>
                    </el-select>
                    <el-select
                      v-model="form.cooperDeg2"
                      placeholder="默认为0"
                      style="width: 523px"
                    >
                      <el-option label="0：其他" value="0"></el-option>
                      <el-option
                        label="3：合同、发货确认单据等在规定期限内（一周内）返回"
                        value="3"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </div>
                <!-- 多元化采购区域 -->
                <div class="purchase-area">
                  <div class="gHeader">
                    <span>多元化采购</span>
                  </div>
                  <el-form-item label="多元化采购能力">
                    <el-select
                      v-model="form.purchase"
                      placeholder="请选择多元化采购能力"
                    >
                      <el-option label="0：其他" value="0"></el-option>
                      <el-option
                        label="4：客户兰炭采购品种>=2类（大料、中料、小料、焦面）"
                        value="4"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </div>
                <!-- 带动作用区域 -->
                <div class="drive-area">
                  <div class="gHeader">
                    <span>带动作用</span>
                  </div>
                  <el-form-item label="带动作用">
                    <el-select
                      v-model="form.driveEff"
                      placeholder="请选择带动作用"
                    >
                      <el-option label="0：其他" value="0"></el-option>
                      <el-option
                        label="1：当天购买产品起末要带动作用"
                        value="1"
                      ></el-option>
                      <el-option
                        label="3：当天购买产品起次要带动作用"
                        value="3"
                      ></el-option>
                      <el-option
                        label="5：当天购买产品起首要带动作用"
                        value="5"
                      ></el-option>
                    </el-select>
                    <span
                      >前提（二者满足之一即触发）：a.
                      库存超出警戒值期间有购买产品厂家;b.
                      产品滞销5天及以上有购买产品厂家；</span
                    >
                  </el-form-item>
                </div>
                <!-- 客户类型区域 -->
                <div class="customer-area">
                  <div class="gHeader">
                    <span>客户类型</span>
                  </div>
                  <el-form-item label="性质">
                    <el-select v-model="form.category" placeholder="请选择性质">
                      <el-option label="3：贸易商客户" value="3"></el-option>
                      <el-option label="5：终端客户" value="5"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="区域">
                    <el-select v-model="form.region" placeholder="请选择区域">
                      <el-option label="0：陕西省内客户" value="0"></el-option>
                      <el-option label="2：陕西省外客户" value="2"></el-option>
                    </el-select>
                  </el-form-item>
                </div>
                <!-- 采购比重区域 -->
                <div class="proportion-area">
                  <div class="gHeader">
                    <span>采购比重评估</span>
                  </div>
                  <el-form-item label="采购比重">
                    <el-select
                      v-model="form.purPro"
                      placeholder="请选择采购比重"
                    >
                      <el-option label="0：其他" value="0"></el-option>
                      <el-option
                        label="1：当天采购量占末要需求量"
                        value="1"
                      ></el-option>
                      <el-option
                        label="3：当天采购量占次要需求量"
                        value="3"
                      ></el-option>
                      <el-option
                        label="5：当天采购量占主要需求量"
                        value="5"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </div>
                <!-- 采购均价评估 -->
                <div class="average-area">
                  <div class="gHeader">
                    <span>采购均价评估</span>
                  </div>
                  <el-form-item label="采购均价">
                    <el-input
                      v-model="form.averagePrice"
                      placeholder="得分"
                    ></el-input>
                    <span
                      >得分：（客户的平均采购价格-当季度销售均价）/5
                      &nbsp;&nbsp;备注：多个产品算均值(吸货得分前三名才能得此附加分)</span
                    >
                  </el-form-item>
                </div>
              </el-form>
            </div>
            <!-- 填报区域底部 -->
            <div class="entrance-bottom">
              <el-button size="mini" @click="closeEntrance">取消</el-button>
              <el-button type="primary" @click="onSubmit" size="mini"
                >提交</el-button
              >
            </div>
          </div>
          <!-- 右侧栏 -->
          <div class="right">
            <div class="right-item1">
              <div class="diversification">多元化采购</div>
              <div class="circular" @click="showPurchaseArea">
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
                  <div class="drive-main" @click="showDriveArea">
                    <img src="./image/17.png" alt="" />
                    <span>5</span>
                  </div>
                </div>
                <div class="drive">
                  <div class="drive-header">采购比重</div>
                  <div class="drive-main" @click="showProportionArea">
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
              <div class="coverage" @click="showCreditArea">
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
              <div class="coverage2" @click="showAverageArea">
                <div class="coverage2-left">
                  <el-table
                    :data="tableData"
                    border
                    size="mini"
                    height="168px"
                    width="476px"
                  >
                    <el-table-column prop="title"> </el-table-column>
                    <el-table-column prop="num1" label="大料" width="60">
                    </el-table-column>
                    <el-table-column prop="num2" label="中料" width="60">
                    </el-table-column>
                    <el-table-column prop="num3" label="小料">
                    </el-table-column>
                    <el-table-column prop="num4" label="焦面">
                    </el-table-column>
                    <el-table-column prop="num5" label="面煤">
                    </el-table-column>
                  </el-table>
                </div>
                <div class="coverage2-right">
                  <img src="./image/19.png" alt="" />
                  <span>3865</span>
                  <i>采购均价得分</i>
                </div>
              </div>
            </div>
            <div class="footer-item">
              <div class="credit">客户类型</div>
              <div class="coverage" @click="showCustomerArea">
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
          <!-- 单独的品质特性填报入口 -->
          <div v-show="isShowQualityArea" class="qualityArea">
            <el-form :model="form" ref="form">
              <!-- 填报区域头部 -->
              <div class="entrance-header">
                <div class="hLeft">
                  <span>品质特性</span>
                </div>
                <div class="hRight" @click="closeQualityArea">X</div>
              </div>
              <!-- 品质特性区域 -->
              <div class="quality-area">
                <el-form-item label="产能规模">
                  <el-select v-model="form.proSca" placeholder="请选择产能规模">
                    <el-option label="0" value="0"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="行业地位">
                  <el-select v-model="form.status" placeholder="请选择行业地位">
                    <el-option label="0：其他" value="0"></el-option>
                    <el-option
                      label="1：在当地销售规模处于前十"
                      value="1"
                    ></el-option>
                    <el-option
                      label="2：在当地销售规模处于前三"
                      value="2"
                    ></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="业务关系持续期">
                  <el-select
                    v-model="form.duration"
                    placeholder="请选择业务关系持续期"
                  >
                    <el-option label="0：其他" value="0"></el-option>
                    <el-option
                      label="1：与本公司的业务关系持续2-12个月"
                      value="1"
                    ></el-option>
                    <el-option
                      label="3：与本公司的业务关系持续1-2年"
                      value="3"
                    ></el-option>
                    <el-option
                      label="5：与本公司的业务关系持续2年以上"
                      value="5"
                    ></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="业务关系强度">
                  <el-select
                    v-model="form.relDeg"
                    placeholder="请选择业务关系强度"
                  >
                    <el-option
                      label="1：偶尔在本公司提货"
                      value="1"
                    ></el-option>
                    <el-option
                      label="2：以本公司为次供货商"
                      value="2"
                    ></el-option>
                    <el-option
                      label="3：与本公司为主供货商"
                      value="3"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </div>
              <!-- 填报区域底部 -->
              <div class="entrance-bottom">
                <el-button size="mini" @click="closeQualityArea"
                  >取消</el-button
                >
                <el-button type="primary" @click="updateQualityArea" size="mini"
                  >提交</el-button
                >
              </div>
            </el-form>
          </div>
          <!-- 单独的能力评估填报入口 -->
          <div v-show="isShowPowerArea" class="powerArea">
            <el-form :model="form" ref="form">
              <!-- 填报区域头部 -->
              <div class="entrance-header">
                <div class="hLeft">
                  <span>能力评估</span>
                </div>
                <div class="hRight" @click="closePowerArea">X</div>
              </div>
              <!-- 能力评价区域 -->
              <div class="power-area">
                <el-form-item label="吸货能力">
                  <el-radio-group v-model="form.power" text-color="#00b294">
                    <el-radio label="40" border>40</el-radio>
                    <el-radio label="30" border>30</el-radio>
                    <el-radio label="20" border>20</el-radio>
                    <el-radio label="10" border>10</el-radio>
                    <el-radio label="5" border>5</el-radio>
                    <div class="forty">
                      <div class="forty-item">时间周期（季度）</div>
                      <div class="forty-item">碳品吸货能力>=8000吨；</div>
                      <div class="forty-item">轻质化煤焦油1号>=3000吨；</div>
                      <div class="forty-item">轻质化煤焦油2号>=800吨；</div>
                    </div>
                    <div class="thirty">
                      <div class="thirty-item">时间周期（季度）</div>
                      <div class="thirty-item">碳品吸货能力>=6000吨；</div>
                      <div class="thirty-item">轻质化煤焦油1号>=2000吨；</div>
                      <div class="thirty-item">轻质化煤焦油2号>=500吨；</div>
                    </div>
                    <div class="twenty">
                      <div class="twenty-item">时间周期（季度）</div>
                      <div class="twenty-item">碳品吸货能力>=4000吨；</div>
                      <div class="twenty-item">轻质化煤焦油1号>=1000吨；</div>
                      <div class="twenty-item">轻质化煤焦油2号>=300吨；</div>
                    </div>
                    <div class="ten">
                      <div class="ten-item">时间周期（季度）</div>
                      <div class="ten-item">碳品吸货能力>=2000吨；</div>
                      <div class="ten-item">轻质化煤焦油1号>=500吨；</div>
                      <div class="ten-item">轻质化煤焦油2号>=100吨；</div>
                    </div>
                    <div class="five">
                      <div class="five-item">时间周期（季度）</div>
                      <div class="five-item">碳品吸货能力&lt;2000吨</div>
                      <div class="five-item">轻质化煤焦油1号&lt;500吨；</div>
                      <div class="five-item">轻质化煤焦油2号&lt;100吨；</div>
                    </div>
                  </el-radio-group>
                </el-form-item>
              </div>
              <!-- 填报区域底部 -->
              <div class="entrance-bottom">
                <el-button size="mini" @click="closePowerArea">取消</el-button>
                <el-button type="primary" @click="updatePowerArea" size="mini"
                  >提交</el-button
                >
              </div>
            </el-form>
          </div>
          <!-- 单独的均衡购货评价填报入口 -->
          <div v-show="isShowShopArea" class="shopArea">
            <el-form :model="form" ref="form">
              <!-- 填报区域头部 -->
              <div class="entrance-header">
                <div class="hLeft">
                  <span>均衡购货评价</span>
                </div>
                <div class="hRight" @click="closeShopArea">X</div>
              </div>
              <!-- 均衡购货评价区域 -->
              <div class="shop-area">
                <el-form-item label="均衡购货能力">
                  <el-radio-group v-model="form.shop">
                    <el-radio :label="20">20：每月购货天数>=20天；</el-radio>
                    <el-radio :label="15">15：每月购货天数>=15天；</el-radio>
                    <el-radio :label="10">10：每月购货天数>=10天；</el-radio>
                    <el-radio :label="5">5：每月购货天数&lt;10天；</el-radio>
                  </el-radio-group>
                </el-form-item>
              </div>
              <!-- 填报区域底部 -->
              <div class="entrance-bottom">
                <el-button size="mini" @click="closeShopArea">取消</el-button>
                <el-button type="primary" @click="updateShopArea" size="mini"
                  >提交</el-button
                >
              </div>
            </el-form>
          </div>
          <!-- 单独的信用评价填报入口 -->
          <div v-show="isShowCreditArea" class="creditArea">
            <el-form :model="form" ref="form">
              <!-- 填报区域头部 -->
              <div class="entrance-header">
                <div class="hLeft">
                  <span>信用评价</span>
                </div>
                <div class="hRight" @click="closeCreditArea">X</div>
              </div>
              <!-- 信用评价区域 -->
              <div class="credit-area">
                <el-form-item label="现金比例">
                  <el-input
                    v-model="form.cashRat"
                    placeholder="得分"
                  ></el-input>
                  <span>得分= (现金金额/销售总金额)*15</span>
                </el-form-item>
                <el-form-item label="配合度">
                  <el-select
                    v-model="form.cooperDeg1"
                    placeholder="默认为0"
                    style="width: 523px"
                  >
                    <el-option label="0：其他" value="0"></el-option>
                    <el-option
                      label="3：承兑汇票补充证明材料在规定期限内（一周内）返回"
                      value="3"
                    ></el-option>
                  </el-select>
                  <el-select
                    v-model="form.cooperDeg2"
                    placeholder="默认为0"
                    style="width: 523px"
                  >
                    <el-option label="0：其他" value="0"></el-option>
                    <el-option
                      label="3：合同、发货确认单据等在规定期限内（一周内）返回"
                      value="3"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </div>
              <!-- 填报区域底部 -->
              <div class="entrance-bottom">
                <el-button size="mini" @click="closeCreditArea">取消</el-button>
                <el-button type="primary" @click="updateCreditArea" size="mini"
                  >提交</el-button
                >
              </div>
            </el-form>
          </div>
          <!-- 单独的客户类型填报入口 -->
          <div v-show="isShowCustomerArea" class="customerArea">
            <el-form :model="form" ref="form">
              <!-- 填报区域头部 -->
              <div class="entrance-header">
                <div class="hLeft">
                  <span>客户类型</span>
                </div>
                <div class="hRight" @click="closeCustomerArea">X</div>
              </div>
              <!-- 客户类型区域 -->
              <div class="customer-area">
                <el-form-item label="性质">
                  <el-select v-model="form.category" placeholder="请选择性质">
                    <el-option label="3：贸易商客户" value="3"></el-option>
                    <el-option label="5：终端客户" value="5"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="区域">
                  <el-select v-model="form.region" placeholder="请选择区域">
                    <el-option label="0：陕西省内客户" value="0"></el-option>
                    <el-option label="2：陕西省外客户" value="2"></el-option>
                  </el-select>
                </el-form-item>
              </div>
              <!-- 填报区域底部 -->
              <div class="entrance-bottom">
                <el-button size="mini" @click="closeCustomerArea"
                  >取消</el-button
                >
                <el-button
                  type="primary"
                  @click="updateCustomerArea"
                  size="mini"
                  >提交</el-button
                >
              </div>
            </el-form>
          </div>
          <!-- 单独的多元化采购填报入口 -->
          <div v-show="isShowPurchaseArea" class="purchaseArea">
            <el-form :model="form" ref="form">
              <!-- 填报区域头部 -->
              <div class="entrance-header">
                <div class="hLeft">
                  <span>多元化采购</span>
                </div>
                <div class="hRight" @click="closePurchaseArea">X</div>
              </div>
              <!-- 多元化采购区域 -->
              <div class="purchase-area">
                <el-form-item label="多元化采购能力">
                  <el-select
                    v-model="form.purchase"
                    placeholder="请选择多元化采购能力"
                  >
                    <el-option label="0：其他" value="0"></el-option>
                    <el-option
                      label="4：客户兰炭采购品种>=2类（大料、中料、小料、焦面）"
                      value="4"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </div>
              <!-- 填报区域底部 -->
              <div class="entrance-bottom">
                <el-button size="mini" @click="closePurchaseArea"
                  >取消</el-button
                >
                <el-button
                  type="primary"
                  @click="updatePurchaseArea"
                  size="mini"
                  >提交</el-button
                >
              </div>
            </el-form>
          </div>
          <!-- 单独的带动作用填报入口 -->
          <div v-show="isShowDriveArea" class="driveArea">
            <el-form :model="form" ref="form">
              <!-- 填报区域头部 -->
              <div class="entrance-header">
                <div class="hLeft">
                  <span>带动作用</span>
                </div>
                <div class="hRight" @click="closeDriveArea">X</div>
              </div>
              <!-- 带动作用区域 -->
              <div class="drive-area">
                <el-form-item label="带动作用">
                  <el-select
                    v-model="form.driveEff"
                    placeholder="请选择带动作用"
                  >
                    <el-option label="0：其他" value="0"></el-option>
                    <el-option
                      label="1：当天购买产品起末要带动作用"
                      value="1"
                    ></el-option>
                    <el-option
                      label="3：当天购买产品起次要带动作用"
                      value="3"
                    ></el-option>
                    <el-option
                      label="5：当天购买产品起首要带动作用"
                      value="5"
                    ></el-option>
                  </el-select>
                  <span
                    >前提（二者满足之一即触发）：a.
                    库存超出警戒值期间有购买产品厂家;b.
                    产品滞销5天及以上有购买产品厂家；</span
                  >
                </el-form-item>
              </div>
              <!-- 填报区域底部 -->
              <div class="entrance-bottom">
                <el-button size="mini" @click="closeDriveArea">取消</el-button>
                <el-button type="primary" @click="updateDriveArea" size="mini"
                  >提交</el-button
                >
              </div>
            </el-form>
          </div>
          <!-- 单独的采购比重填报入口 -->
          <div v-show="isShowProportionArea" class="proportionArea">
            <el-form :model="form" ref="form">
              <!-- 填报区域头部 -->
              <div class="entrance-header">
                <div class="hLeft">
                  <span>采购比重</span>
                </div>
                <div class="hRight" @click="closeProportionArea">X</div>
              </div>
              <!-- 采购比重区域 -->
              <div class="proportion-area">
                <el-form-item label="采购比重">
                  <el-select v-model="form.purPro" placeholder="请选择采购比重">
                    <el-option label="0：其他" value="0"></el-option>
                    <el-option
                      label="1：当天采购量占末要需求量"
                      value="1"
                    ></el-option>
                    <el-option
                      label="3：当天采购量占次要需求量"
                      value="3"
                    ></el-option>
                    <el-option
                      label="5：当天采购量占主要需求量"
                      value="5"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </div>
              <!-- 填报区域底部 -->
              <div class="entrance-bottom">
                <el-button size="mini" @click="closeProportionArea"
                  >取消</el-button
                >
                <el-button
                  type="primary"
                  @click="updateProportionArea"
                  size="mini"
                  >提交</el-button
                >
              </div>
            </el-form>
          </div>
          <!-- 单独的采购均价填报入口 -->
          <div v-show="isShowAverageArea" class="averageArea">
            <el-form :model="form" ref="form">
              <!-- 填报区域头部 -->
              <div class="entrance-header">
                <div class="hLeft">
                  <span>采购均价</span>
                </div>
                <div class="hRight" @click="closeAverageArea">X</div>
              </div>
              <!-- 采购均价评估 -->
              <div class="average-area">
                <el-form-item label="采购均价">
                  <el-input
                    v-model="form.averagePrice"
                    placeholder="得分"
                  ></el-input>
                  <span
                    >得分：（客户的平均采购价格-当季度销售均价）/5
                    &nbsp;&nbsp;备注：多个产品算均值(吸货得分前三名才能得此附加分)</span
                  >
                </el-form-item>
              </div>
              <!-- 填报区域底部 -->
              <div class="entrance-bottom">
                <el-button size="mini" @click="closeAverageArea"
                  >取消</el-button
                >
                <el-button type="primary" @click="updateAverageArea" size="mini"
                  >提交</el-button
                >
              </div>
            </el-form>
          </div>
        </div>
      </div>
    </div>
    <!-- </div> -->
  </div>
</template>

<script>
import Header from "../../components/Header";
// import Progress from "../Progress/index";
import Table from "../Table/index";
import Pagination from "../Pagination/index";
export default {
  name: "Supply",
  data() {
    return {
      date: "",
      // 控制显示与隐藏
      isShowMask: false,
      isShow: false,
      isShowQualityArea: false,
      isShowPowerArea: false,
      isShowShopArea: false,
      isShowCreditArea: false,
      isShowCustomerArea: false,
      isShowPurchaseArea: false,
      isShowDriveArea: false,
      isShowProportionArea: false,
      isShowAverageArea: false,
      // 定义初始客户的数据
      customerName: "王五",
      customerNum: "3711",
      form: {
        // 必须传给后台数据
        cCusName: "", //客户名称
        sysDate: "", //系统日期
        proSca: "", //产能规模
        status: "", //行业地位
        relDeg: "", //业务关系强度
        cashRat: "", //现金比例
        cooperDeg1: "", //配合度1
        cooperDeg2: "", //配合度2
        driveEff: "", //带动作用
        category: "", //客户性质
        region: "", //客户区域
        purPro: "", //采购比重
        // 非必须
        cCusName2: "", //搜索框搜索名
        duration: "", //业务关系持续期
        power: "", //吸货能力
        shop: "", //均衡购货能力
        purchase: "", //多元化采购
        averagePrice: "", //采购均价
      },
      // 采购均价左侧区域假数据
      tableData: [
        {
          title: "客户本季度采购均价",
          num1: "1",
          num2: "2",
          num3: "3",
          num4: "4",
          num5: "5",
        },
        {
          title: "本季度所有采购均价",
          num1: "1",
          num2: "2",
          num3: "3",
          num4: "4",
          num5: "5",
        },
        {
          title: "差价",
          num1: "1",
          num2: "2",
          num3: "3",
          num4: "4",
          num5: "5",
        },
      ],
    };
  },
  mounted() {
    this.$bus.$on("addTodo", this.addTodo);
  },
  methods: {
    // 点击展开填报入口回调
    showEntrance() {
      this.isShow = true;
      this.isShowMask = true;
    },
    // 点击x关闭填报(或取消关闭填报)
    closeEntrance() {
      this.isShow = false;
      this.isShowMask = false;
    },
    // 点击提交填报回调
    onSubmit() {
      console.log(this.form);
      this.isShow = false;
      this.isShowMask = false;
      this.$message.success("填报提交成功");
    },
    // 点击展示单独的品质特性填报入口
    showQualityArea() {
      this.isShowQualityArea = true;
      this.isShowMask = true;
    },
    // 点击x或取消关闭单独的品质特性填报入口
    closeQualityArea() {
      this.isShowQualityArea = false;
      this.isShowMask = false;
    },
    // 点击提交更新品质特性回调
    updateQualityArea() {
      console.log(this.form);
      this.isShowQualityArea = false;
      this.isShowMask = false;
      this.$message.success("更新品质特性成功");
    },
    // 点击展示单独的能力评估填报入口
    showPowerArea() {
      this.isShowPowerArea = true;
      this.isShowMask = true;
    },
    // 点击x或取消关闭能力评估填报入口
    closePowerArea() {
      this.isShowPowerArea = false;
      this.isShowMask = false;
    },
    // 点击提交更新能力评估回调
    updatePowerArea() {
      console.log(this.form);
      this.isShowPowerArea = false;
      this.isShowMask = false;
      this.$message.success("更新能力评估成功");
    },
    // 点击展示单独的均衡购货评价填报入口
    showShopArea() {
      this.isShowShopArea = true;
      this.isShowMask = true;
    },
    // 点击x或取消关闭均衡购货评价填报入口
    closeShopArea() {
      this.isShowShopArea = false;
      this.isShowMask = false;
    },
    // 点击提交更新均衡购货评价回调
    updateShopArea() {
      console.log(this.form);
      this.isShowShopArea = false;
      this.isShowMask = false;
      this.$message.success("更新均衡购货评价成功");
    },
    // 点击展示单独的信用评价填报入口
    showCreditArea() {
      this.isShowCreditArea = true;
      this.isShowMask = true;
    },
    // 点击x或取消关闭信用评价填报
    closeCreditArea() {
      this.isShowCreditArea = false;
      this.isShowMask = false;
    },
    // 点击提交更新信用评价
    updateCreditArea() {
      console.log(this.form);
      this.isShowCreditArea = false;
      this.isShowMask = false;
      this.$message.success("更新信用评价成功");
    },
    // 点击展示单独的客户类型填报入口
    showCustomerArea() {
      this.isShowCustomerArea = true;
      this.isShowMask = true;
    },
    // 点击x或取消关闭单独的客户填报
    closeCustomerArea() {
      this.isShowCustomerArea = false;
      this.isShowMask = false;
    },
    // 点击提交后的更新客户类型回调
    updateCustomerArea() {
      console.log(this.form);
      this.isShowCustomerArea = false;
      this.isShowMask = false;
      this.$message.success("客户类型更新成功");
    },
    // 点击展示多元化采购单独填报入口
    showPurchaseArea() {
      this.isShowPurchaseArea = true;
      this.isShowMask = true;
    },
    // 点击x或取消关闭多元化采购单独填报入口
    closePurchaseArea() {
      this.isShowPurchaseArea = false;
      this.isShowMask = false;
    },
    // 点击提交后更新多元化采购
    updatePurchaseArea() {
      console.log(this.form);
      this.isShowPurchaseArea = false;
      this.isShowMask = false;
      this.$message.success("多元化采购更新成功");
    },
    // 点击展示带动作用填报
    showDriveArea() {
      this.isShowDriveArea = true;
      this.isShowMask = true;
    },

    // 点击x或取消关闭带动作用填报
    closeDriveArea() {
      this.isShowDriveArea = false;
      this.isShowMask = false;
    },

    // 点击提交更新带动作用
    updateDriveArea() {
      console.log(this.form);
      this.isShowDriveArea = false;
      this.isShowMask = false;
      this.$message.success("带动作用更新成功");
    },
    // 点击展示采购比重填报
    showProportionArea() {
      this.isShowProportionArea = true;
      this.isShowMask = true;
    },
    // 点击x或取消关闭采购比重填报
    closeProportionArea() {
      this.isShowProportionArea = false;
      this.isShowMask = false;
    },
    // 点击提交更新采购比重
    updateProportionArea() {
      console.log(this.form);
      this.isShowProportionArea = false;
      this.isShowMask = false;
      this.$message.success("采购比重更新成功");
    },
    // 点击展示单独的采购均价填报
    showAverageArea() {
      this.isShowAverageArea = true;
      this.isShowMask = true;
    },
    // 点击x或取消关闭采购均价填报
    closeAverageArea() {
      this.isShowAverageArea = false;
      this.isShowMask = false;
    },
    // 点击提交更新采购均价
    updateAverageArea() {
      console.log(this.form);
      this.isShowAverageArea = false;
      this.isShowMask = false;
      this.$message.success("采购均价更新成功");
    },
    // 点击表格内容动态修改页面客户信息回调
    addTodo(newVal) {
      this.customerName = newVal.name;
      this.customerNum = newVal.address;
    },
  },
  // 计算属性
  computed: {
    score: function () {
      return this.customerNum*100 / 4000;
    },
  },
  components: {
    Header,
    // Progress,
    Table,
    Pagination,
  },
};
</script>

<style>
/* 外部容器 */
.container {
  height: 100%;
  width: 100%;
}
.container.show {
  height: 100%;
  width: 100%;
  position: relative;
  z-index: 4;
  background: rgba(0, 0, 0, 0.5);
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
  left: 34px;
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
/* 设置hover效果 */
.container #main .main-header .left .left-item1 .pie:hover {
  cursor: pointer;
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
.container #main .main-header .left .left-item2 .power,
.container #main .main-header .left .left-item2 .shop {
  box-sizing: border-box;
  width: 48%;
  border: 1px solid #235464;
}
.container #main .main-header .left .left-item2 .power .power-header,
.container #main .main-header .left .left-item2 .shop .shop-header {
  height: 40px;
  font-size: 16px;
  line-height: 40px;
  padding-left: 16px;
  text-align: left;
  color: #ffffff;
  border-bottom: 1px solid #136878;
}
.container #main .main-header .left .left-item2 .power .power-main,
.container #main .main-header .left .left-item2 .shop .shop-main {
  display: flex;
  justify-content: space-around;
  margin: 52px 0 0 24px;
}
/* 设置hover效果 */
.container #main .main-header .left .left-item2 .power .power-main:hover,
.container #main .main-header .left .left-item2 .shop .shop-main:hover {
  cursor: pointer;
}
.container #main .main-header .left .left-item2 .power .power-main img,
.container #main .main-header .left .left-item2 .shop .shop-main img {
  width: 89px;
  height: 128px;
}
.container #main .main-header .left .left-item2 .power .power-main .desp,
.container #main .main-header .left .left-item2 .shop .shop-main .desp {
  white-space: pre-wrap;
  margin: 12px 0 0 6px;
  text-align: left;
}
.container #main .main-header .left .left-item2 .power .power-main .desp > div,
.container #main .main-header .left .left-item2 .shop .shop-main .desp > div {
  white-space: pre-wrap;
  margin: 5px 10px 0;
}
.container
  #main
  .main-header
  .left
  .left-item2
  .power
  .power-main
  .desp
  > div
  > span,
.container
  #main
  .main-header
  .left
  .left-item2
  .shop
  .shop-main
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
  .power
  .power-main
  .desp
  > div
  > i,
.container
  #main
  .main-header
  .left
  .left-item2
  .shop
  .shop-main
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
  left: 513px;
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
  /* left: 178px; */
  left: 188px;
  width: 28px;
  height: 40px;
  line-height: 40px;
  color: #19f1f9;
  font-size: 20px;
  font-weight: 700;
  font-family: DIN Alternate Bold, DIN Alternate Bold-Bold;
  opacity: 0.67;
  border: 1px solid #5a9cff;
  text-align: center;
}
.container #main .main-header .mainItem .rectangle .info .info-left > i {
  position: absolute;
  top: 9px;
  /* left: 212px; */
  left: 222px;
}
.container #main .main-header .mainItem .rectangle .info .info-left .secondNum {
  position: absolute;
  top: -14px;
  /* left: 218px; */
  left: 228px;
  width: 28px;
  height: 40px;
  line-height: 40px;
  color: #19f1f9;
  font-size: 20px;
  font-weight: 700;
  font-family: DIN Alternate Bold, DIN Alternate Bold-Bold;
  opacity: 0.67;
  border: 1px solid #5a9cff;
  text-align: center;
}
.container #main .main-header .mainItem .rectangle .info .info-left .thirdNum {
  position: absolute;
  top: -14px;
  /* left: 252px; */
  left: 262px;
  width: 28px;
  height: 40px;
  line-height: 40px;
  color: #19f1f9;
  font-size: 20px;
  font-weight: 700;
  font-family: DIN Alternate Bold, DIN Alternate Bold-Bold;
  opacity: 0.67;
  border: 1px solid #5a9cff;
  text-align: center;
}
.container #main .main-header .mainItem .rectangle .info .info-left .fourthNum {
  position: absolute;
  top: -14px;
  /* left: 286px; */
  left: 296px;
  width: 28px;
  height: 40px;
  line-height: 40px;
  color: #19f1f9;
  font-size: 20px;
  font-weight: 700;
  opacity: 0.67;
  border: 1px solid #5a9cff;
  text-align: center;
}
/* 设置填报入口前日期的样式 */
.el-picker-panel.el-date-picker.el-popper[x-placement^="bottom"] {
  margin-top: 20px;
}
.container
  #main
  .main-header
  .mainItem
  .rectangle
  .info
  .info-right
  .el-date-editor {
  width: 164px;
  height: 17px;
  margin-right: 16px;
}
.container
  #main
  .main-header
  .mainItem
  .rectangle
  .info
  .info-right
  .el-date-editor
  .el-input__inner {
  color: #33fff7;
}
.el-icon-date:before {
  color: #33fff7;
}
.container #main .main-header .mainItem .rectangle .info .info-right > a {
  text-decoration: underline;
  font-size: 16px;
  color: #18e3ed;
}
/* .container
  #main
  .main-header
  .mainItem
  .rectangle
  .el-progress
  .el-progress-bar {
  margin-top: 20px;
  margin-left: 22px;
  width: 830px;
}
.container
  #main
  .main-header
  .mainItem
  .rectangle
  .el-progress
  .el-progress-bar
  .el-progress-bar__outer {
  border-radius: 0;
}
.container
  #main
  .main-header
  .mainItem
  .rectangle
  .el-progress
  .el-progress-bar
  .el-progress-bar__outer
  .el-progress-bar__inner {
  border-radius: 0;
} */
/* 得分展示图形区域 */
/* .progress {
  width: 840px;
  margin: 0px 0 8px 0;
}
.el-progress-bar__outer {
  border-radius: 0;
}
.el-progress-bar__inner {
  border-radius: 0;
} */
.progress {
  width: 830px;
  margin: 20px 0 10px 22px;
}
.progress .el-progress .el-progress-bar .el-progress-bar__outer {
  border-radius: 0;
  background-color: #051c2f;
  border: 1px solid #fcb018;
}
.progress
  .el-progress
  .el-progress-bar
  .el-progress-bar__outer
  .el-progress-bar__inner {
  border-radius: 0;
}

/* 表格区域样式 */

/* 重写elementUI分页样式 */
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
  /* top: 30px; */
  top: 34px;
  /* left: 1090px; */
  left: 570px;
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
  overflow: auto;
}
/* 定义滚动条的样式 */
.container #main .main-header .entrance .entrance-main::-webkit-scrollbar {
  width: 6px;
}
.container
  #main
  .main-header
  .entrance
  .entrance-main::-webkit-scrollbar-thumb {
  background: #275ba5;
  border-radius: 6px;
}
.container #main .main-header .entrance .entrance-main .el-form .mHeader {
  position: relative;
  margin: 18px 0 18px 38px;
  /* border-bottom:1px solid #184f7d; */
}
.container
  #main
  .main-header
  .entrance
  .entrance-main
  .el-form
  .mHeader::after {
  position: absolute;
  z-index: 4;
  bottom: -24px;
  content: "";
  height: 1px;
  width: 700px;
  background-color: #184f7d;
}
/* 修改填报头部区域elementUI的样式 */
.container
  #main
  .main-header
  .entrance
  .entrance-main
  .el-form
  .mHeader
  .el-form-item__label {
  font-size: 12px;
  color: #fff;
}
.container
  #main
  .main-header
  .entrance
  .entrance-main
  .el-form
  .mHeader
  .el-form-item__content
  .el-select
  .el-input--suffix
  > input {
  width: 584px;
  height: 35px;
  background: rgba(3, 20, 46, 0.3);
  border: 1px solid #0797a7;
  font-size: 12px;
  color: #fff;
  border-radius: 2px;
}
/* 下拉框样式更改设置 */
.el-popper[x-placement^="bottom"] {
  margin-top: -2px;
}
.el-select-dropdown__item > span {
  font-size: 12px;
  color: #fff;
}
.el-select-dropdown {
  z-index: 5;
  border: 1px solid #0797a7;
  border-radius: 0;
  background: #072042;
  margin: 0;
  overflow: auto;
}
/* 下拉搜索框样式更改设置 */
.el-select-dropdown
  .el-scrollbar
  .el-select-dropdown__wrap
  .el-select-dropdown__list
  .el-input--suffix
  .el-input__inner {
  width: 560px;
  height: 31px;
  padding-left: 12px;
  margin: 2px 11px 0 11px;
  background: rgba(3, 20, 46, 0.3);
  border: 1px solid #0797a7;
  color: #fff;
  font-size: 12px;
}
.el-select-dropdown__list .el-input--suffix .el-input__suffix {
  right: 20px;
}
/* hover选择内容效果样式更改设置 */
.el-select-dropdown__item.hover,
.el-select-dropdown__item:hover {
  background: #113565;
}
/* 下拉框伪类小三角不要 */
.el-popper .popper__arrow,
.el-popper .popper__arrow::after {
  border: none;
}
.el-scrollbar__bar.is-horizontal,
.el-scrollbar__bar.is-vertical {
  height: 0;
  width: 0;
  top: 0;
  left: 0;
}
/* 日期行修改样式 */
.el-date-editor.el-input {
  width: 584px;
  height: 35px;
}
.el-date-editor.el-input .el-input__inner {
  background: rgba(3, 20, 46, 0.3);
  border: 1px solid #0797a7;
  font-size: 12px;
  color: #fff;
}
/* 日期表样式修改 */
/* .el-picker-panel.el-date-picker{
  color:#fff;
  background: #072042;
} */
/* 品质区域样式 */
.container #main .main-header .entrance .entrance-main .el-form .quality-area {
  position: relative;
  margin-top: 37px;
  margin-left: 48px;
}
.container
  #main
  .main-header
  .entrance
  .entrance-main
  .el-form
  .quality-area::after {
  position: absolute;
  z-index: 4;
  left: -12px;
  bottom: -24px;
  content: "";
  height: 1px;
  width: 700px;
  background-color: #184f7d;
}
.container
  #main
  .main-header
  .entrance
  .entrance-main
  .el-form
  .quality-area
  .gHeader {
  position: relative;
  font-size: 16px;
  color: #33fff7;
}
.container
  #main
  .main-header
  .entrance
  .entrance-main
  .el-form
  .quality-area
  .gHeader::before {
  position: absolute;
  top: 5px;
  left: -10px;
  content: "";
  width: 4px;
  height: 12px;
  background: #33fff7;
}
/* 修改品质特性区域elementUI样式 */
.container
  #main
  .main-header
  .entrance
  .entrance-main
  .el-form
  .quality-area
  .el-form-item {
  margin-top: 14px;
  margin-left: 4px;
}
.container
  #main
  .main-header
  .entrance
  .entrance-main
  .el-form
  .quality-area
  .el-form-item
  .el-form-item__label {
  text-align: left;
  color: #fff;
  font-size: 12px;
}
.container
  #main
  .main-header
  .entrance
  .entrance-main
  .el-form
  .quality-area
  .el-form-item:nth-last-of-type(2)
  .el-form-item__label {
  line-height: 24px;
}
.container
  #main
  .main-header
  .entrance
  .entrance-main
  .el-form
  .quality-area
  .el-form-item:nth-last-of-type(1)
  .el-form-item__label {
  line-height: 24px;
}
.container
  #main
  .main-header
  .entrance
  .entrance-main
  .el-form
  .quality-area
  .el-form-item
  .el-form-item__content
  .el-select
  .el-input {
  width: 584px;
  height: 35px;
}
.container
  #main
  .main-header
  .entrance
  .entrance-main
  .el-form
  .quality-area
  .el-form-item
  .el-form-item__content
  .el-select
  .el-input
  .el-input__inner {
  color: #fff;
  font-size: 12px;
  background: rgba(3, 20, 46, 0.3);
  border: 1px solid #0797a7;
}
.container
  #main
  .main-header
  .entrance
  .entrance-main
  .el-form
  .quality-area
  .el-form-item
  .el-form-item__content
  .el-select
  .el-input
  .el-input__inner
  .el-input__suffix {
  top: 10px;
}
/* 能力评价区域 */
.container #main .main-header .entrance .entrance-main .el-form .power-area {
  position: relative;
  margin-top: 37px;
  margin-left: 48px;
}
.container
  #main
  .main-header
  .entrance
  .entrance-main
  .el-form
  .power-area::after {
  position: absolute;
  z-index: 4;
  left: -12px;
  bottom: -24px;
  content: "";
  height: 1px;
  width: 700px;
  background-color: #184f7d;
}
.container
  #main
  .main-header
  .entrance
  .entrance-main
  .el-form
  .power-area
  .gHeader {
  position: relative;
  font-size: 16px;
  color: #33fff7;
}
.container
  #main
  .main-header
  .entrance
  .entrance-main
  .el-form
  .power-area
  .gHeader::before {
  position: absolute;
  top: 5px;
  left: -10px;
  content: "";
  width: 4px;
  height: 12px;
  background: #33fff7;
}
/* 修改能力评价区域elementUI的样式 */
.container
  #main
  .main-header
  .entrance
  .entrance-main
  .el-form
  .power-area
  .el-form-item {
  margin-top: 14px;
  margin-left: 4px;
}
.container
  #main
  .main-header
  .entrance
  .entrance-main
  .el-form
  .power-area
  .el-form-item
  .el-form-item__label {
  text-align: left;
  color: #fff;
  font-size: 12px;
}
.container
  #main
  .main-header
  .entrance
  .entrance-main
  .el-form
  .power-area
  .el-form-item
  .el-form-item__content
  .el-radio-group {
  font-size: 12px;
}
.container
  #main
  .main-header
  .entrance
  .entrance-main
  .el-form
  .power-area
  .el-form-item
  .el-form-item__content
  .el-radio-group
  .el-radio {
  width: 187px;
  height: 127px;
  margin-right: 2px;
  color: #fff;
  font-size: 14px;
  border: 1px solid #2294d5;
}
.container
  #main
  .main-header
  .entrance
  .entrance-main
  .el-form
  .power-area
  .el-form-item
  .el-form-item__content
  .el-radio-group
  .el-radio
  .el-radio__input.is-checked
  + .el-radio__label {
  color: #fff;
}
.container
  #main
  .main-header
  .entrance
  .entrance-main
  .el-form
  .power-area
  .el-form-item
  .el-form-item__content
  .el-radio-group
  .el-radio
  .el-radio__input {
  vertical-align: top;
}
.container
  #main
  .main-header
  .entrance
  .entrance-main
  .el-form
  .power-area
  .el-form-item
  .el-form-item__content
  .el-radio-group
  .el-radio
  .el-radio__input
  .el-radio__inner {
  border-radius: 0;
  border-color: #32fdf6;
  background: none;
}
.container
  #main
  .main-header
  .entrance
  .entrance-main
  .el-form
  .power-area
  .el-form-item
  .el-form-item__content
  .el-radio-group
  .el-radio
  .el-radio__input
  .el-radio__inner::after {
  width: 0;
  height: 0;
  border-radius: 0;
  background: none;
  position: static;
}
.container
  #main
  .main-header
  .entrance
  .entrance-main
  .el-form
  .power-area
  .el-form-item
  .el-form-item__content
  .el-radio-group
  .el-radio
  .el-radio__input.is-checked
  .el-radio__inner::after {
  transform: none;
  content: "\2714";
  color: #32fdf6;
}
.container
  #main
  .main-header
  .entrance
  .entrance-main
  .el-form
  .power-area
  .el-form-item
  .el-form-item__content
  .el-radio-group
  .el-radio {
  background: #0c3265;
}
.container
  #main
  .main-header
  .entrance
  .entrance-main
  .el-form
  .power-area
  .el-form-item
  .el-form-item__content
  .el-radio-group
  .el-radio.is-checked {
  background: linear-gradient(#0d96b1 0%, #00b294 100%);
}
.container
  #main
  .main-header
  .entrance
  .entrance-main
  .el-form
  .power-area
  .el-form-item
  .el-form-item__content
  .el-radio-group
  .el-radio:nth-of-type(4) {
  width: 187px;
  height: 127px;
  margin-left: 0;
  margin-right: 2px;
  margin-top: 10px;
}
.container
  #main
  .main-header
  .entrance
  .entrance-main
  .el-form
  .power-area
  .el-form-item
  .el-form-item__content
  .el-radio-group
  .forty {
  position: absolute;
  top: 36px;
  left: 1px;
  width: 185px;
  height: 90px;
  color: #fff;
  background: rgba(3, 20, 46, 0.3);
}
.container
  #main
  .main-header
  .entrance
  .entrance-main
  .el-form
  .power-area
  .el-form-item
  .el-form-item__content
  .el-radio-group
  .forty:hover {
  cursor: pointer;
}
.container
  #main
  .main-header
  .entrance
  .entrance-main
  .el-form
  .power-area
  .el-form-item
  .el-form-item__content
  .el-radio-group
  .forty
  .forty-item {
  padding-left: 10px;
  padding-top: 4px;
}

.container
  #main
  .main-header
  .entrance
  .entrance-main
  .el-form
  .power-area
  .el-form-item
  .el-form-item__content
  .el-radio-group
  .thirty {
  position: absolute;
  top: 36px;
  left: 200px;
  width: 185px;
  height: 90px;
  color: #fff;
  background: rgba(3, 20, 46, 0.3);
}
.container
  #main
  .main-header
  .entrance
  .entrance-main
  .el-form
  .power-area
  .el-form-item
  .el-form-item__content
  .el-radio-group
  .thirty:hover {
  cursor: pointer;
}
.container
  #main
  .main-header
  .entrance
  .entrance-main
  .el-form
  .power-area
  .el-form-item
  .el-form-item__content
  .el-radio-group
  .thirty
  .thirty-item {
  padding-left: 10px;
  padding-top: 4px;
}

.container
  #main
  .main-header
  .entrance
  .entrance-main
  .el-form
  .power-area
  .el-form-item
  .el-form-item__content
  .el-radio-group
  .twenty {
  position: absolute;
  top: 36px;
  left: 399px;
  width: 185px;
  height: 90px;
  color: #fff;
  background: rgba(3, 20, 46, 0.3);
}
.container
  #main
  .main-header
  .entrance
  .entrance-main
  .el-form
  .power-area
  .el-form-item
  .el-form-item__content
  .el-radio-group
  .twenty:hover {
  cursor: pointer;
}
.container
  #main
  .main-header
  .entrance
  .entrance-main
  .el-form
  .power-area
  .el-form-item
  .el-form-item__content
  .el-radio-group
  .twenty
  .twenty-item {
  padding-left: 10px;
  padding-top: 4px;
}

.container
  #main
  .main-header
  .entrance
  .entrance-main
  .el-form
  .power-area
  .el-form-item
  .el-form-item__content
  .el-radio-group
  .ten {
  position: absolute;
  top: 173px;
  left: 1px;
  width: 185px;
  height: 90px;
  color: #fff;
  background: rgba(3, 20, 46, 0.3);
}
.container
  #main
  .main-header
  .entrance
  .entrance-main
  .el-form
  .power-area
  .el-form-item
  .el-form-item__content
  .el-radio-group
  .ten:hover {
  cursor: pointer;
}
.container
  #main
  .main-header
  .entrance
  .entrance-main
  .el-form
  .power-area
  .el-form-item
  .el-form-item__content
  .el-radio-group
  .ten
  .ten-item {
  padding-left: 10px;
  padding-top: 6px;
}

.container
  #main
  .main-header
  .entrance
  .entrance-main
  .el-form
  .power-area
  .el-form-item
  .el-form-item__content
  .el-radio-group
  .five {
  z-index: 10;
  position: absolute;
  top: 173px;
  left: 200px;
  width: 185px;
  height: 90px;
  color: #fff;
  background: rgba(3, 20, 46, 0.3);
}
.container
  #main
  .main-header
  .entrance
  .entrance-main
  .el-form
  .power-area
  .el-form-item
  .el-form-item__content
  .el-radio-group
  .five:hover {
  cursor: pointer;
}
.container
  #main
  .main-header
  .entrance
  .entrance-main
  .el-form
  .power-area
  .el-form-item
  .el-form-item__content
  .el-radio-group
  .five
  .five-item {
  padding-left: 10px;
  padding-top: 6px;
}
/* 均衡购货评价 */
.container #main .main-header .entrance .entrance-main .el-form .shop-area {
  position: relative;
  margin-top: 37px;
  margin-left: 48px;
}
.container
  #main
  .main-header
  .entrance
  .entrance-main
  .el-form
  .shop-area::after {
  position: absolute;
  z-index: 4;
  left: -12px;
  bottom: 0px;
  content: "";
  height: 1px;
  width: 700px;
  background-color: #184f7d;
}
.container
  #main
  .main-header
  .entrance
  .entrance-main
  .el-form
  .shop-area
  .gHeader {
  position: relative;
  font-size: 16px;
  color: #33fff7;
}
.container
  #main
  .main-header
  .entrance
  .entrance-main
  .el-form
  .shop-area
  .gHeader::before {
  position: absolute;
  top: 5px;
  left: -10px;
  content: "";
  width: 4px;
  height: 12px;
  background: #33fff7;
}

/* 修改均衡购货区域elelmentUI样式 */
.container
  #main
  .main-header
  .entrance
  .entrance-main
  .el-form
  .shop-area
  .el-form-item {
  margin-top: 14px;
  margin-left: 4px;
}
.container
  #main
  .main-header
  .entrance
  .entrance-main
  .el-form
  .shop-area
  .el-form-item
  .el-form-item__label {
  text-align: left;
  color: #fff;
  font-size: 12px;
  line-height: 18px;
}
.container
  #main
  .main-header
  .entrance
  .entrance-main
  .el-form
  .shop-area
  .el-form-item
  .el-form-item__content
  .el-radio-group
  .el-radio {
  margin-right: 2px;
  margin-bottom: 20px;
}
.container
  #main
  .main-header
  .entrance
  .entrance-main
  .el-form
  .shop-area
  .el-form-item
  .el-form-item__content
  .el-radio-group
  .el-radio
  .el-radio__input
  .el-radio__inner {
  width: 11px;
  height: 11px;
  background: none;
  border: 1px solid #3fb1be;
}
.container
  #main
  .main-header
  .entrance
  .entrance-main
  .el-form
  .shop-area
  .el-form-item
  .el-form-item__content
  .el-radio-group
  .el-radio
  .el-radio__input
  .el-radio__inner::after {
  background: #3fb1be;
}
.container
  #main
  .main-header
  .entrance
  .entrance-main
  .el-form
  .shop-area
  .el-form-item
  .el-form-item__content
  .el-radio-group
  .el-radio
  .el-radio__label {
  padding-left: 4px;
  color: #fff;
  font-size: 12px;
}
/* 信用评价区域 */
.container #main .main-header .entrance .entrance-main .el-form .credit-area {
  position: relative;
  margin-top: -6px;
  margin-left: 48px;
}
.container
  #main
  .main-header
  .entrance
  .entrance-main
  .el-form
  .credit-area::after {
  position: absolute;
  z-index: 4;
  left: -12px;
  bottom: -14px;
  content: "";
  height: 1px;
  width: 700px;
  background-color: #184f7d;
}
.container
  #main
  .main-header
  .entrance
  .entrance-main
  .el-form
  .credit-area
  .gHeader {
  position: relative;
  font-size: 16px;
  color: #33fff7;
}
.container
  #main
  .main-header
  .entrance
  .entrance-main
  .el-form
  .credit-area
  .gHeader::before {
  position: absolute;
  top: 5px;
  left: -10px;
  content: "";
  width: 4px;
  height: 12px;
  background: #33fff7;
}
/* 修改信用评价区域elementUI的样式 */
.container
  #main
  .main-header
  .entrance
  .entrance-main
  .el-form
  .credit-area
  .el-form-item {
  margin-top: 14px;
  margin-left: 4px;
}
.container
  #main
  .main-header
  .entrance
  .entrance-main
  .el-form
  .credit-area
  .el-form-item
  .el-form-item__label {
  text-align: left;
  color: #fff;
  font-size: 12px;
}
.container
  #main
  .main-header
  .entrance
  .entrance-main
  .el-form
  .credit-area
  .el-form-item
  .el-form-item__content
  > .el-input {
  width: 100px;
  margin-bottom: 10px;
}
.container
  #main
  .main-header
  .entrance
  .entrance-main
  .el-form
  .credit-area
  .el-form-item
  .el-form-item__content
  .el-select
  .el-input {
  width: 582px;
  margin-bottom: 20px;
}
.container
  #main
  .main-header
  .entrance
  .entrance-main
  .el-form
  .credit-area
  .el-form-item
  .el-form-item__content
  > span {
  padding-left: 15px;
  color: #fff;
}
.container
  #main
  .main-header
  .entrance
  .entrance-main
  .el-form
  .credit-area
  .el-form-item
  .el-form-item__content
  .el-input.is-disabled
  .el-input__inner {
  text-align: center;
}
.container
  #main
  .main-header
  .entrance
  .entrance-main
  .el-form
  .credit-area
  .el-form-item
  .el-form-item__content
  .el-input
  .el-input__inner {
  background: rgba(3, 20, 46, 0.3);
  color: #fff;
  border: 1px solid #0797a7;
}
.container
  #main
  .main-header
  .entrance
  .entrance-main
  .el-form
  .credit-area
  .el-form-item
  .el-form-item__content
  .el-select {
  width: 100%;
}

.el-select-dropdown .el-select-dropdown__list {
  padding: 0;
}

/* 多元化采购区域 */
.container #main .main-header .entrance .entrance-main .el-form .purchase-area {
  position: relative;
  margin-top: 27px;
  margin-left: 48px;
}
.container
  #main
  .main-header
  .entrance
  .entrance-main
  .el-form
  .purchase-area::after {
  position: absolute;
  z-index: 4;
  left: -12px;
  bottom: -14px;
  content: "";
  height: 1px;
  width: 700px;
  background-color: #184f7d;
}
.container
  #main
  .main-header
  .entrance
  .entrance-main
  .el-form
  .purchase-area
  .gHeader {
  position: relative;
  font-size: 16px;
  color: #33fff7;
}
.container
  #main
  .main-header
  .entrance
  .entrance-main
  .el-form
  .purchase-area
  .gHeader::before {
  position: absolute;
  top: 5px;
  left: -10px;
  content: "";
  width: 4px;
  height: 12px;
  background: #33fff7;
}
.container
  #main
  .main-header
  .entrance
  .entrance-main
  .el-form
  .purchase-area
  .el-form-item
  .el-form-item__content
  .el-select {
  width: 582px;
}
.container
  #main
  .main-header
  .entrance
  .entrance-main
  .el-form
  .purchase-area
  .el-form-item
  .el-form-item__content
  .el-select
  .el-input
  .el-input__inner {
  border: 1px solid #0797a7;
  background: rgba(3, 20, 46, 0.3);
  color: #fff;
}
/* 修改多元化采购区域elementUI样式 */
.container
  #main
  .main-header
  .entrance
  .entrance-main
  .el-form
  .purchase-area
  .el-form-item {
  margin-top: 14px;
  margin-left: 4px;
}
.container
  #main
  .main-header
  .entrance
  .entrance-main
  .el-form
  .purchase-area
  .el-form-item
  .el-form-item__label {
  text-align: left;
  color: #fff;
  font-size: 12px;
  line-height: 24px;
}
/* 带动作用区域 */
.container #main .main-header .entrance .entrance-main .el-form .drive-area {
  position: relative;
  margin-top: 27px;
  margin-left: 48px;
}
.container
  #main
  .main-header
  .entrance
  .entrance-main
  .el-form
  .drive-area::after {
  position: absolute;
  z-index: 4;
  left: -12px;
  bottom: -14px;
  content: "";
  height: 1px;
  width: 700px;
  background-color: #184f7d;
}
.container
  #main
  .main-header
  .entrance
  .entrance-main
  .el-form
  .drive-area
  .gHeader {
  position: relative;
  font-size: 16px;
  color: #33fff7;
}
.container
  #main
  .main-header
  .entrance
  .entrance-main
  .el-form
  .drive-area
  .gHeader::before {
  position: absolute;
  top: 5px;
  left: -10px;
  content: "";
  width: 4px;
  height: 12px;
  background: #33fff7;
}
.container
  #main
  .main-header
  .entrance
  .entrance-main
  .el-form
  .drive-area
  .el-form-item
  .el-form-item__content
  > span {
  color: #fff;
  font-size: 12px;
}
/* 带动作用区域修改elementUI样式 */
.container
  #main
  .main-header
  .entrance
  .entrance-main
  .el-form
  .drive-area
  .el-form-item
  .el-form-item__content
  .el-select {
  width: 582px;
  margin-right: 18px;
}
.container
  #main
  .main-header
  .entrance
  .entrance-main
  .el-form
  .drive-area
  .el-form-item
  .el-form-item__content
  .el-select
  .el-input
  .el-input__inner {
  border: 1px solid #0797a7;
  background: rgba(3, 20, 46, 0.3);
  color: #fff;
}
.container
  #main
  .main-header
  .entrance
  .entrance-main
  .el-form
  .drive-area
  .el-form-item {
  margin-top: 14px;
  margin-left: 4px;
}
.container
  #main
  .main-header
  .entrance
  .entrance-main
  .el-form
  .drive-area
  .el-form-item
  .el-form-item__label {
  text-align: left;
  color: #fff;
  font-size: 12px;
}
/* 客户类型区域 */
.container #main .main-header .entrance .entrance-main .el-form .customer-area {
  position: relative;
  margin-top: 27px;
  margin-left: 48px;
}
.container
  #main
  .main-header
  .entrance
  .entrance-main
  .el-form
  .customer-area::after {
  position: absolute;
  z-index: 4;
  left: -12px;
  bottom: -24px;
  content: "";
  height: 1px;
  width: 700px;
  background-color: #184f7d;
}
.container
  #main
  .main-header
  .entrance
  .entrance-main
  .el-form
  .customer-area
  .gHeader {
  position: relative;
  font-size: 16px;
  color: #33fff7;
}
.container
  #main
  .main-header
  .entrance
  .entrance-main
  .el-form
  .customer-area
  .gHeader::before {
  position: absolute;
  top: 5px;
  left: -10px;
  content: "";
  width: 4px;
  height: 12px;
  background: #33fff7;
}

/* 修改客户类型区域elementUI样式 */
.container
  #main
  .main-header
  .entrance
  .entrance-main
  .el-form
  .customer-area
  .el-form-item
  .el-form-item__content
  .el-select {
  width: 582px;
  margin-right: 18px;
}
.container
  #main
  .main-header
  .entrance
  .entrance-main
  .el-form
  .customer-area
  .el-form-item
  .el-form-item__content
  .el-select
  .el-input
  .el-input__inner {
  border: 1px solid #0797a7;
  background: rgba(3, 20, 46, 0.3);
  color: #fff;
}
.container
  #main
  .main-header
  .entrance
  .entrance-main
  .el-form
  .customer-area
  .el-form-item {
  margin-top: 14px;
  margin-left: 4px;
}
.container
  #main
  .main-header
  .entrance
  .entrance-main
  .el-form
  .customer-area
  .el-form-item
  .el-form-item__label {
  text-align: left;
  color: #fff;
  font-size: 12px;
}
/* 采购比重区域 */
.container
  #main
  .main-header
  .entrance
  .entrance-main
  .el-form
  .proportion-area {
  position: relative;
  margin-top: 37px;
  margin-left: 48px;
}
.container
  #main
  .main-header
  .entrance
  .entrance-main
  .el-form
  .proportion-area::after {
  position: absolute;
  z-index: 4;
  left: -12px;
  bottom: -24px;
  content: "";
  height: 1px;
  width: 700px;
  background-color: #184f7d;
}
.container
  #main
  .main-header
  .entrance
  .entrance-main
  .el-form
  .proportion-area
  .gHeader {
  position: relative;
  font-size: 16px;
  color: #33fff7;
}
.container
  #main
  .main-header
  .entrance
  .entrance-main
  .el-form
  .proportion-area
  .gHeader::before {
  position: absolute;
  top: 5px;
  left: -10px;
  content: "";
  width: 4px;
  height: 12px;
  background: #33fff7;
}
/* 修改采购比重区域elementUI样式 */
.container
  #main
  .main-header
  .entrance
  .entrance-main
  .el-form
  .proportion-area
  .el-form-item
  .el-form-item__content
  .el-select {
  width: 582px;
  margin-right: 18px;
}
.container
  #main
  .main-header
  .entrance
  .entrance-main
  .el-form
  .proportion-area
  .el-form-item
  .el-form-item__content
  .el-select
  .el-input
  .el-input__inner {
  border: 1px solid #0797a7;
  background: rgba(3, 20, 46, 0.3);
  color: #fff;
}
.container
  #main
  .main-header
  .entrance
  .entrance-main
  .el-form
  .proportion-area
  .el-form-item {
  margin-top: 14px;
  margin-left: 4px;
}
.container
  #main
  .main-header
  .entrance
  .entrance-main
  .el-form
  .proportion-area
  .el-form-item
  .el-form-item__label {
  text-align: left;
  color: #fff;
  font-size: 12px;
}
/* 采购均价区域 */
.container #main .main-header .entrance .entrance-main .el-form .average-area {
  position: relative;
  margin-top: 37px;
  margin-left: 48px;
}
.container
  #main
  .main-header
  .entrance
  .entrance-main
  .el-form
  .average-area::after {
  position: absolute;
  z-index: 4;
  left: -12px;
  bottom: -24px;
  content: "";
  height: 1px;
  width: 700px;
  background-color: #184f7d;
}
.container
  #main
  .main-header
  .entrance
  .entrance-main
  .el-form
  .average-area
  .gHeader {
  position: relative;
  font-size: 16px;
  color: #33fff7;
}
.container
  #main
  .main-header
  .entrance
  .entrance-main
  .el-form
  .average-area
  .gHeader::before {
  position: absolute;
  top: 5px;
  left: -10px;
  content: "";
  width: 4px;
  height: 12px;
  background: #33fff7;
}

/* 修改购均价区域elementUI样式 */
.container
  #main
  .main-header
  .entrance
  .entrance-main
  .el-form
  .average-area
  .el-form-item
  .el-form-item__content
  .el-input {
  width: 100px;
  margin-right: 500px;
  text-align: center;
}
.container
  #main
  .main-header
  .entrance
  .entrance-main
  .el-form
  .average-area
  .el-form-item
  .el-form-item__content
  > span {
  color: #fff;
}
.container
  #main
  .main-header
  .entrance
  .entrance-main
  .el-form
  .average-area
  .el-form-item
  .el-form-item__content
  .el-input
  .el-input__inner {
  border: 1px solid #0797a7;
  background: rgba(3, 20, 46, 0.3);
  color: #fff;
}
.container
  #main
  .main-header
  .entrance
  .entrance-main
  .el-form
  .average-area
  .el-form-item {
  margin-top: 14px;
  margin-left: 4px;
}
.container
  #main
  .main-header
  .entrance
  .entrance-main
  .el-form
  .average-area
  .el-form-item
  .el-form-item__label {
  text-align: left;
  color: #fff;
  font-size: 12px;
}
/* 填报区域底部样式 */
.container #main .main-header .entrance .entrance-bottom {
  position: fixed;
  top: 955px;
  width: 758px;
  height: 73px;
  background: #09264e;
  box-shadow: 0px 0px 40px 0px rgba(12, 21, 48);
}
/* 修改填报区域底部俩按钮elementUI样式 */
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
  left: 1413px;
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
/* 设置hover效果 */
.container #main .main-header .right .right-item1 .circular:hover {
  cursor: pointer;
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
/* 设置hover效果 */
.container #main .main-header .right .right-item2 .drive .drive-main:hover {
  cursor: pointer;
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
  top: 655px;
  left: 34px;
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
  height: 229px;
  border: 1px solid #235464;
}
/* 设置hover效果 */
.container #main .footer .footer-item .coverage:hover {
  cursor: pointer;
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
  bottom: 20px;
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
  bottom: 20px;
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
  height: 229px;
  box-sizing: border-box;
  border: 1px solid #235464;
  display: flex;
  justify-content: space-between;
}
/* 设置hover效果 */
.container #main .footer .footer-item2 .coverage2:hover {
  cursor: pointer;
}
/* 采购均价左边区域样式 */
.container #main .footer .footer-item2 .coverage2 .coverage2-left {
  width: 477px;
  height: 190px;
  margin: 24px 0 17px 19px;
}
/* 修改采购均价左侧表格ele样式 */
.container #main .footer .footer-item2 .coverage2 .coverage2-left .el-table th {
  background: linear-gradient(#0d96b1 0%, #00b294 100%);
  color: #fff;
  font-size: 12px;
  text-align: center;
}
.container #main .footer .footer-item2 .coverage2 .coverage2-left .el-table tr {
  background: #051c2f;
}
.container
  #main
  .footer
  .footer-item2
  .coverage2
  .coverage2-left
  .el-table__row
  .cell {
  text-align: center;
  color: #fff;
  font-size: 12px;
}
.container
  #main
  .footer
  .footer-item2
  .coverage2
  .coverage2-left
  .el-table__row
  .el-table_1_column_1 {
  text-align: left;
}
.container
  #main
  .footer
  .footer-item2
  .coverage2
  .coverage2-left
  .el-table--enable-row-hover
  .el-table__body
  tr:hover
  > td {
  background: #051c2f;
}
.container
  #main
  .footer
  .footer-item2
  .coverage2
  .coverage2-left
  .el-table--border
  td {
  border-right: 1px solid #0a5a83;
}
.container #main .footer .footer-item2 .coverage2 .coverage2-left .el-table td {
  border-bottom: 1px solid #0a5a83;
}
.container
  #main
  .footer
  .footer-item2
  .coverage2
  .coverage2-left
  .el-table--scrollable-x
  .el-table__body-wrapper {
  overflow: hidden;
}
.container
  #main
  .footer
  .footer-item2
  .coverage2
  .coverage2-left
  .el-table--border::after,
.container
  #main
  .footer
  .footer-item2
  .coverage2
  .coverage2-left
  .el-table--group::after,
.container
  #main
  .footer
  .footer-item2
  .coverage2
  .coverage2-left
  .el-table::before {
  background-color: #051c2f;
}
.container
  #main
  .footer
  .footer-item2
  .coverage2
  .coverage2-left
  .el-table--border
  th {
  border-color: #051c2f;
}
.container
  #main
  .footer
  .footer-item2
  .coverage2
  .coverage2-left
  .el-table
  th.is-leaf {
  border: 1px solid #051c2f;
}
.container
  #main
  .footer
  .footer-item2
  .coverage2
  .coverage2-left
  .el-table--border,
.container
  #main
  .footer
  .footer-item2
  .coverage2
  .coverage2-left
  .el-table--group {
  border: 1px solid #051c2f;
}
/* 采购均价右侧样式 */
.container #main .footer .footer-item2 .coverage2 .coverage2-right {
  position: relative;
  width: 179px;
  height: 179px;
  display: flex;
  margin: 25px 25px 25px 0;
}
.container #main .footer .footer-item2 .coverage2 .coverage2-right > img {
  width: 100%;
  height: 100%;
}
.container #main .footer .footer-item2 .coverage2 .coverage2-right > span {
  position: absolute;
  top: 54px;
  left: 60px;
  font-size: 24px;
  color: #32fdf6;
}
.container #main .footer .footer-item2 .coverage2 .coverage2-right > i {
  position: absolute;
  top: 90px;
  left: 48px;
  font-size: 14px;
  color: #fff;
}

/* .container #main .footer .footer-item2 .coverage2 .coverage2-left {
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
} */
/* 线的样式 */
/* .container
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
} */
/* 线的样式 */
/* .container
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
  display: flex;
}
.container #main .footer .footer-item2 .coverage2 .coverage2-right .bery {
  width: 30px;
  height: 30px;
  margin: 94px 0 99px 17px;
  position: relative;
} */
/* 线的样式 */
/* .container
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
} */
/* 线的样式 */
/* .container
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
} */
/* 线的样式 */
/* .container
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
} */

/* 单独的品质特性填报入口 */
.container #main .qualityArea {
  position: absolute;
  width: 760px;
  height: 374px;
  /* left: 500px; */
  left: 510px;
  top: 30px;
  z-index: 5;
  background: rgba(9, 38, 78, 0.9);
  border: 1px solid #2294d5;
}
/* 单独的品质特性填报入口头部样式 */
.container #main .qualityArea .el-form .entrance-header {
  position: fixed;
  top: 138px;
  width: 759px;
  height: 50px;
  line-height: 50px;
  font-size: 18px;
  color: #fff;
  background: rgba(19, 74, 145, 0.38);
  display: flex;
  justify-content: space-between;
}
.container #main .qualityArea .el-form .entrance-header .hLeft {
  margin-left: 19px;
}
.container #main .qualityArea .el-form .entrance-header .hRight {
  margin-right: 20px;
}
.container #main .qualityArea .el-form .entrance-header .hRight:hover {
  color: #e1a630;
  cursor: pointer;
}
/* 单独的品质特性 品质特性区域样式 */
.container #main .qualityArea .el-form .quality-area {
  position: relative;
  margin-top: 57px;
  margin-left: 38px;
}
/* 修改单独的品质特性 品质特性区域elementUI样式 */
.container #main .qualityArea .el-form .quality-area .el-form-item {
  margin-top: 14px;
  margin-left: 4px;
}
.container
  #main
  .qualityArea
  .el-form
  .quality-area
  .el-form-item
  .el-form-item__label {
  text-align: left;
  color: #fff;
  font-size: 12px;
}
.container
  #main
  .qualityArea
  .el-form
  .quality-area
  .el-form-item:nth-last-of-type(2)
  .el-form-item__label {
  line-height: 24px;
}
.container
  #main
  .qualityArea
  .el-form
  .quality-area
  .el-form-item:nth-last-of-type(1)
  .el-form-item__label {
  line-height: 24px;
}
.container
  #main
  .qualityArea
  .el-form
  .quality-area
  .el-form-item
  .el-form-item__content
  .el-select
  .el-input {
  width: 584px;
  height: 35px;
}
.container
  #main
  .qualityArea
  .el-form
  .quality-area
  .el-form-item
  .el-form-item__content
  .el-select
  .el-input
  .el-input__inner {
  color: #fff;
  font-size: 12px;
  background: rgba(3, 20, 46, 0.3);
  border: 1px solid #0797a7;
}
.container
  #main
  .qualityArea
  .el-form
  .quality-area
  .el-form-item
  .el-form-item__content
  .el-select
  .el-input
  .el-input__inner
  .el-input__suffix {
  top: 10px;
}
/* 单独的品质特性填报入口底部样式 */
.container #main .qualityArea .el-form .entrance-bottom {
  position: fixed;
  top: 439px;
  width: 759px;
  height: 73px;
  background: #09264e;
  box-shadow: 0px 0px 40px 0px rgba(12, 21, 48);
}
/* 修改单独的品质特性填报入口底部elementUI样式  */
.container #main .qualityArea .el-form .entrance-bottom .el-button--default {
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
.container #main .qualityArea .el-form .entrance-bottom .el-button--primary {
  width: 84px;
  height: 30px;
  position: absolute;
  top: 22px;
  left: 391px;
  background: #2294d5;
  border-radius: 4px;
}
/* 单独的能力评估填报入口 */
.container #main .powerArea {
  position: absolute;
  width: 760px;
  height: 474px;
  /* left: 500px; */
  left: 510px;
  top: 30px;
  z-index: 5;
  background: rgba(9, 38, 78, 0.9);
  border: 1px solid #2294d5;
}
/* 单独的能力评估填报入口头部样式 */
.container #main .powerArea .el-form .entrance-header {
  position: fixed;
  top: 138px;
  width: 759px;
  height: 50px;
  line-height: 50px;
  font-size: 18px;
  color: #fff;
  background: rgba(19, 74, 145, 0.38);
  display: flex;
  justify-content: space-between;
}
.container #main .powerArea .el-form .entrance-header .hLeft {
  margin-left: 19px;
}
.container #main .powerArea .el-form .entrance-header .hRight {
  margin-right: 20px;
}
.container #main .powerArea .el-form .entrance-header .hRight:hover {
  color: #e1a630;
  cursor: pointer;
}
/* 单独的能力评估填报入口 能力评价区域样式 */
.container #main .powerArea .el-form .power-area {
  position: relative;
  margin-top: 37px;
  margin-left: 48px;
}
/* 修改能力评价区域elementUI的样式 */
.container #main .powerArea .el-form .power-area .el-form-item {
  margin-top: 64px;
  margin-left: 0px;
}
.container
  #main
  .powerArea
  .el-form
  .power-area
  .el-form-item
  .el-form-item__label {
  text-align: left;
  color: #fff;
  font-size: 12px;
}
.container
  #main
  .powerArea
  .el-form
  .power-area
  .el-form-item
  .el-form-item__content
  .el-radio-group {
  font-size: 12px;
}
.container
  #main
  .powerArea
  .el-form
  .power-area
  .el-form-item
  .el-form-item__content
  .el-radio-group
  .el-radio {
  width: 187px;
  height: 127px;
  margin-right: 2px;
  color: #fff;
  font-size: 14px;
  border: 1px solid #2294d5;
}
.container
  #main
  .powerArea
  .el-form
  .power-area
  .el-form-item
  .el-form-item__content
  .el-radio-group
  .el-radio
  .el-radio__input.is-checked
  + .el-radio__label {
  color: #fff;
}
.container
  #main
  .powerArea
  .el-form
  .power-area
  .el-form-item
  .el-form-item__content.el-radio-group
  .el-radio
  .el-radio__input {
  vertical-align: top;
}
.container
  #main
  .powerArea
  .el-form
  .power-area
  .el-form-item
  .el-form-item__content
  .el-radio-group
  .el-radio
  .el-radio__input
  .el-radio__inner {
  border-radius: 0;
  border-color: #32fdf6;
  background: none;
}
.container
  #main
  .powerArea
  .el-form
  .power-area
  .el-form-item.el-form-item__content
  .el-radio-group
  .el-radio
  .el-radio__input
  .el-radio__inner::after {
  width: 0;
  height: 0;
  border-radius: 0;
  background: none;
  position: static;
}
.container
  #main
  .powerArea
  .el-form
  .power-area
  .el-form-item
  .el-form-item__content
  .el-radio-group
  .el-radio
  .el-radio__input.is-checked
  .el-radio__inner::after {
  transform: none;
  content: "\2714";
  color: #32fdf6;
  background: none;
  position: absolute;
  top: -1px;
  left: 0px;
}
.container
  #main
  .powerArea
  .el-form
  .power-area
  .el-form-item
  .el-form-item__content
  .el-radio-group
  .el-radio {
  background: #0c3265;
}
.container
  #main
  .powerArea
  .el-form
  .power-area
  .el-form-item
  .el-form-item__content
  .el-radio-group
  .el-radio.is-checked {
  background: linear-gradient(#0d96b1 0%, #00b294 100%);
}
.container
  #main
  .powerArea
  .el-form
  .power-area
  .el-form-item
  .el-form-item__content
  .el-radio-group
  .el-radio:nth-of-type(4) {
  width: 187px;
  height: 127px;
  margin-left: 0;
  margin-right: 2px;
  margin-top: 10px;
}
.container
  #main
  .powerArea
  .el-form
  .power-area
  .el-form-item
  .el-form-item__content
  .el-radio-group
  .forty {
  position: absolute;
  top: 76px;
  left: 1px;
  width: 185px;
  height: 90px;
  color: #fff;
  background: rgba(3, 20, 46, 0.3);
}
.container
  #main
  .powerArea
  .el-form
  .power-area
  .el-form-item
  .el-form-item__content
  .el-radio-group
  .forty:hover {
  cursor: pointer;
}
.container
  #main
  .powerArea
  .el-form
  .power-area
  .el-form-item
  .el-form-item__content
  .el-radio-group
  .forty
  .forty-item {
  padding-left: 10px;
  padding-top: 4px;
}

.container
  #main
  .powerArea
  .el-form
  .power-area
  .el-form-item
  .el-form-item__content
  .el-radio-group
  .thirty {
  position: absolute;
  top: 76px;
  left: 200px;
  width: 185px;
  height: 90px;
  color: #fff;
  background: rgba(3, 20, 46, 0.3);
}
.container
  #main
  .powerArea
  .el-form
  .power-area
  .el-form-item
  .el-form-item__content
  .el-radio-group
  .thirty:hover {
  cursor: pointer;
}
.container
  #main
  .powerArea
  .el-form
  .power-area
  .el-form-item
  .el-form-item__content
  .el-radio-group
  .thirty
  .thirty-item {
  padding-left: 10px;
  padding-top: 4px;
}

.container
  #main
  .powerArea
  .el-form
  .power-area
  .el-form-item
  .el-form-item__content
  .el-radio-group
  .twenty {
  position: absolute;
  top: 76px;
  left: 399px;
  width: 185px;
  height: 90px;
  color: #fff;
  background: rgba(3, 20, 46, 0.3);
}
.container
  #main
  .powerArea
  .el-form
  .power-area
  .el-form-item
  .el-form-item__content
  .el-radio-group
  .twenty:hover {
  cursor: pointer;
}
.container
  #main
  .powerArea
  .el-form
  .power-area
  .el-form-item
  .el-form-item__content
  .el-radio-group
  .twenty
  .twenty-item {
  padding-left: 10px;
  padding-top: 4px;
}

.container
  #main
  .powerArea
  .el-form
  .power-area
  .el-form-item
  .el-form-item__content
  .el-radio-group
  .ten {
  position: absolute;
  top: 213px;
  left: 1px;
  width: 185px;
  height: 90px;
  color: #fff;
  background: rgba(3, 20, 46, 0.3);
}
.container
  #main
  .powerArea
  .el-form
  .power-area
  .el-form-item
  .el-form-item__content
  .el-radio-group
  .ten:hover {
  cursor: pointer;
}
.container
  #main
  .powerArea
  .el-form
  .power-area
  .el-form-item
  .el-form-item__content
  .el-radio-group
  .ten
  .ten-item {
  padding-left: 10px;
  padding-top: 6px;
}

.container
  #main
  .powerArea
  .el-form
  .power-area
  .el-form-item
  .el-form-item__content
  .el-radio-group
  .five {
  z-index: 10;
  position: absolute;
  top: 213px;
  left: 200px;
  width: 185px;
  height: 90px;
  color: #fff;
  background: rgba(3, 20, 46, 0.3);
}
.container
  #main
  .powerArea
  .el-form
  .power-area
  .el-form-item
  .el-form-item__content
  .el-radio-group
  .five:hover {
  cursor: pointer;
}
.container
  #main
  .powerArea
  .el-form
  .power-area
  .el-form-item
  .el-form-item__content
  .el-radio-group
  .five
  .five-item {
  padding-left: 10px;
  padding-top: 6px;
}
/* 单独的能力评估填报入口底部样式  */
.container #main .powerArea .el-form .entrance-bottom {
  position: fixed;
  /* top: 439px; */
  top: 538px;
  width: 759px;
  height: 73px;
  background: #09264e;
  box-shadow: 0px 0px 40px 0px rgba(12, 21, 48);
}
/* 修改单独的能力评估填报入口底部elementUI样式  */
.container #main .powerArea .el-form .entrance-bottom .el-button--default {
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
.container #main .powerArea .el-form .entrance-bottom .el-button--primary {
  width: 84px;
  height: 30px;
  position: absolute;
  top: 22px;
  left: 391px;
  background: #2294d5;
  border-radius: 4px;
}
/* 单独的均衡购货评价填报入口样式 */
.container #main .shopArea {
  position: absolute;
  width: 760px;
  height: 274px;
  /* left: 500px; */
  left: 510px;
  top: 30px;
  z-index: 5;
  background: rgba(9, 38, 78, 0.9);
  border: 1px solid #2294d5;
}
/* 单独的均衡购货评价填报入口头部样式 */
.container #main .shopArea .el-form .entrance-header {
  position: fixed;
  top: 138px;
  width: 759px;
  height: 50px;
  line-height: 50px;
  font-size: 18px;
  color: #fff;
  background: rgba(19, 74, 145, 0.38);
  display: flex;
  justify-content: space-between;
}
.container #main .shopArea .el-form .entrance-header .hLeft {
  margin-left: 19px;
}
.container #main .shopArea .el-form .entrance-header .hRight {
  margin-right: 20px;
}
.container #main .shopArea .el-form .entrance-header .hRight:hover {
  color: #e1a630;
  cursor: pointer;
}
/* 修改单独的均衡购货 均衡购货区域elelmentUI样式 */
.container #main .shopArea .el-form-item {
  margin-top: 64px;
  margin-left: 32px;
}
.container #main .shopArea .el-form-item .el-form-item__label {
  text-align: left;
  color: #fff;
  font-size: 12px;
  line-height: 18px;
  margin-bottom: 16px;
}
.container
  #main
  .shopArea
  .el-form-item
  .el-form-item__content
  .el-radio-group
  .el-radio {
  margin-right: 2px;
  margin-bottom: 20px;
}
.container
  #main
  .shopArea
  .el-form-item
  .el-form-item__content
  .el-radio-group
  .el-radio
  .el-radio__input
  .el-radio__inner {
  width: 11px;
  height: 11px;
  background: none;
  border: 1px solid #3fb1be;
}
.container
  #main
  .shopArea
  .el-form-item
  .el-form-item__content
  .el-radio-group
  .el-radio
  .el-radio__input
  .el-radio__inner::after {
  background: #3fb1be;
}
.container
  #main
  .shopArea
  .el-form-item
  .el-form-item__content
  .el-radio-group
  .el-radio
  .el-radio__label {
  padding-left: 4px;
  color: #fff;
  font-size: 12px;
}
/* 单独的均衡购货评价填报入口底部样式 */
.container #main .shopArea .el-form .entrance-bottom {
  position: fixed;
  top: 340px;
  width: 759px;
  height: 73px;
  background: #09264e;
  box-shadow: 0px 0px 40px 0px rgba(12, 21, 48);
}
/* 修改单独的均衡购货评价填报入口底部elementUI样式  */
.container #main .shopArea .el-form .entrance-bottom .el-button--default {
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
.container #main .shopArea .el-form .entrance-bottom .el-button--primary {
  width: 84px;
  height: 30px;
  position: absolute;
  top: 22px;
  left: 391px;
  background: #2294d5;
  border-radius: 4px;
}
/* 单独的信用评价填报入口样式 */
.container #main .creditArea {
  position: absolute;
  width: 760px;
  height: 374px;
  /* left: 500px; */
  left: 510px;
  top: 30px;
  z-index: 5;
  background: rgba(9, 38, 78, 0.9);
  border: 1px solid #2294d5;
}
/* 单独的信用评价填报入口头部样式 */
.container #main .creditArea .el-form .entrance-header {
  position: fixed;
  top: 138px;
  width: 759px;
  height: 50px;
  line-height: 50px;
  font-size: 18px;
  color: #fff;
  background: rgba(19, 74, 145, 0.38);
  display: flex;
  justify-content: space-between;
}
.container #main .creditArea .el-form .entrance-header .hLeft {
  margin-left: 19px;
}
.container #main .creditArea .el-form .entrance-header .hRight {
  margin-right: 20px;
}
.container #main .creditArea .el-form .entrance-header .hRight:hover {
  color: #e1a630;
  cursor: pointer;
}
/* 修改信用评价 信用评价区域elementUI的样式 */
.container #main .creditArea .el-form-item {
  margin-top: 64px;
  margin-left: 30px;
}
.container #main .creditArea .el-form-item:nth-of-type(2) {
  margin-top: 14px;
  margin-left: 30px;
}
.container #main .creditArea .el-form-item .el-form-item__label {
  text-align: left;
  color: #fff;
  font-size: 12px;
}
.container #main .creditArea .el-form-item .el-form-item__content > .el-input {
  width: 100px;
  margin-bottom: 10px;
}
.container
  #main
  .creditArea
  .el-form-item
  .el-form-item__content
  .el-select
  .el-input {
  width: 582px;
  margin-bottom: 20px;
}
.container #main .creditArea .el-form-item .el-form-item__content > span {
  padding-left: 15px;
  color: #fff;
}
.container
  #main
  .creditArea
  .el-form-item
  .el-form-item__content
  .el-input.is-disabled
  .el-input__inner {
  text-align: center;
}
.container
  #main
  .creditArea
  .el-form-item
  .el-form-item__content
  .el-input
  .el-input__inner {
  background: rgba(3, 20, 46, 0.3);
  color: #fff;
  border: 1px solid #0797a7;
}
.container
  #main
  .creditArea
  .el-form-item
  .el-form-item__content
  .el-select:nth-of-type(2) {
  margin-left: 53px;
}

.el-select-dropdown .el-select-dropdown__list {
  padding: 0;
}

/* 单独的信用评价填报入口底部样式 */
.container #main .creditArea .el-form .entrance-bottom {
  position: fixed;
  top: 438px;
  width: 759px;
  height: 73px;
  background: #09264e;
  box-shadow: 0px 0px 40px 0px rgba(12, 21, 48);
}
/* 修改单独的信用评价填报入口底部elementUI样式  */
.container #main .creditArea .el-form .entrance-bottom .el-button--default {
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
.container #main .creditArea .el-form .entrance-bottom .el-button--primary {
  width: 84px;
  height: 30px;
  position: absolute;
  top: 22px;
  left: 391px;
  background: #2294d5;
  border-radius: 4px;
}
/* 单独的客户类型填报入口样式 */
.container #main .customerArea {
  position: absolute;
  width: 760px;
  height: 274px;
  left: 460px;
  top: 30px;
  z-index: 5;
  background: rgba(9, 38, 78, 0.9);
  border: 1px solid #2294d5;
}
/* 单独的客户类型填报入口头部样式 */
.container #main .customerArea .el-form .entrance-header {
  position: fixed;
  top: 138px;
  width: 759px;
  height: 50px;
  line-height: 50px;
  font-size: 18px;
  color: #fff;
  background: rgba(19, 74, 145, 0.38);
  display: flex;
  justify-content: space-between;
}
.container #main .customerArea .el-form .entrance-header .hLeft {
  margin-left: 19px;
}
.container #main .customerArea .el-form .entrance-header .hRight {
  margin-right: 20px;
}
.container #main .customerArea .el-form .entrance-header .hRight:hover {
  color: #e1a630;
  cursor: pointer;
}
/* 单独的客户类型 客户类型区域样式 */
.container #main .customerArea {
  position: relative;
  margin-left: 48px;
}

/* 修改客户类型区域elementUI样式 */
.container #main .customerArea .el-form-item .el-form-item__content .el-select {
  width: 582px;
  margin-right: 18px;
}
.container
  #main
  .customerArea
  .el-form-item
  .el-form-item__content
  .el-select
  .el-input
  .el-input__inner {
  border: 1px solid #0797a7;
  background: rgba(3, 20, 46, 0.3);
  color: #fff;
}
.container #main .customerArea .el-form-item {
  margin-top: 74px;
  margin-left: 24px;
}
.container #main .customerArea .el-form-item:nth-of-type(2) {
  margin-top: 12px;
}
.container #main .customerArea .el-form-item .el-form-item__label {
  text-align: left;
  color: #fff;
  font-size: 12px;
}

/* 单独的客户类型填报入口底部样式 */
.container #main .customerArea .el-form .entrance-bottom {
  position: fixed;
  top: 340px;
  width: 759px;
  height: 73px;
  background: #09264e;
  box-shadow: 0px 0px 40px 0px rgba(12, 21, 48);
}
/* 修改单独的类型填报入口底部elementUI样式  */
.container #main .customerArea .el-form .entrance-bottom .el-button--default {
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
.container #main .customerArea .el-form .entrance-bottom .el-button--primary {
  width: 84px;
  height: 30px;
  position: absolute;
  top: 22px;
  left: 391px;
  background: #2294d5;
  border-radius: 4px;
}
/* 单独的多元化采购填报入口样式 */
.container #main .purchaseArea {
  position: absolute;
  width: 760px;
  height: 244px;
  /* left: 500px; */
  left: 510px;
  top: 30px;
  z-index: 5;
  background: rgba(9, 38, 78, 0.9);
  border: 1px solid #2294d5;
}

/* 单独的客多元化采购填报入口头部样式 */
.container #main .purchaseArea .el-form .entrance-header {
  position: fixed;
  top: 138px;
  width: 759px;
  height: 50px;
  line-height: 50px;
  font-size: 18px;
  color: #fff;
  background: rgba(19, 74, 145, 0.38);
  display: flex;
  justify-content: space-between;
}
.container #main .purchaseArea .el-form .entrance-header .hLeft {
  margin-left: 19px;
}
.container #main .purchaseArea .el-form .entrance-header .hRight {
  margin-right: 20px;
}
.container #main .purchaseArea .el-form .entrance-header .hRight:hover {
  color: #e1a630;
  cursor: pointer;
}
/* 多元化采购区域 */
.container #main .purchaseArea .el-form .purchase-area {
  position: relative;
  margin-top: 77px;
  margin-left: 42px;
}
.container
  #main
  .purchaseArea
  .el-form
  .purchase-area
  .el-form-item
  .el-form-item__content
  .el-select {
  width: 582px;
}
.container
  #main
  .purchaseArea
  .el-form
  .purchase-area
  .el-form-item
  .el-form-item__content
  .el-select
  .el-input
  .el-input__inner {
  border: 1px solid #0797a7;
  background: rgba(3, 20, 46, 0.3);
  color: #fff;
}
/* 修改多元化采购区域elementUI样式 */
.container #main .purchaseArea .el-form .purchase-area .el-form-item {
  margin-top: 14px;
  margin-left: 4px;
}
.container
  #main
  .purchaseArea
  .el-form
  .purchase-area
  .el-form-item
  .el-form-item__label {
  text-align: left;
  color: #fff;
  font-size: 12px;
  /* line-height: 24px; */
}

/* 单独的多元化采购填报入口底部样式 */
.container #main .purchaseArea .el-form .entrance-bottom {
  position: fixed;
  top: 309px;
  width: 759px;
  height: 73px;
  background: #09264e;
  box-shadow: 0px 0px 40px 0px rgba(12, 21, 48);
}
/* 修改单独的多元化采购填报入口底部elementUI样式  */
.container #main .purchaseArea .el-form .entrance-bottom .el-button--default {
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
.container #main .purchaseArea .el-form .entrance-bottom .el-button--primary {
  width: 84px;
  height: 30px;
  position: absolute;
  top: 22px;
  left: 391px;
  background: #2294d5;
  border-radius: 4px;
}
/* 单独的带动作用填报入口样式 */
.container #main .driveArea {
  position: absolute;
  width: 760px;
  height: 244px;
  /* left: 500px; */
  left: 510px;
  top: 30px;
  z-index: 5;
  background: rgba(9, 38, 78, 0.9);
  border: 1px solid #2294d5;
}
/* 单独的多元化填报入口头部样式 */
.container #main .driveArea .el-form .entrance-header {
  position: fixed;
  top: 138px;
  width: 759px;
  height: 50px;
  line-height: 50px;
  font-size: 18px;
  color: #fff;
  background: rgba(19, 74, 145, 0.38);
  display: flex;
  justify-content: space-between;
}
.container #main .driveArea .el-form .entrance-header .hLeft {
  margin-left: 19px;
}
.container #main .driveArea .el-form .entrance-header .hRight {
  margin-right: 20px;
}
.container #main .driveArea .el-form .entrance-header .hRight:hover {
  color: #e1a630;
  cursor: pointer;
}
/* 单独的带动作用 带动作用区域样式 */
.container #main .driveArea .el-form .drive-area {
  position: relative;
  margin-top: 27px;
  margin-left: 48px;
}
.container
  #main
  .driveArea
  .el-form
  .drive-area
  .el-form-item
  .el-form-item__content
  > span {
  color: #fff;
  font-size: 12px;
}
/* 带动作用区域修改elementUI样式 */
.container
  #main
  .driveArea
  .el-form
  .drive-area
  .el-form-item
  .el-form-item__content
  .el-select {
  width: 582px;
  margin-right: 18px;
}
.container
  #main
  .driveArea
  .el-form
  .drive-area
  .el-form-item
  .el-form-item__content
  .el-select
  .el-input
  .el-input__inner {
  border: 1px solid #0797a7;
  background: rgba(3, 20, 46, 0.3);
  color: #fff;
}
.container #main .driveArea .el-form .drive-area .el-form-item {
  margin-top: 64px;
  margin-left: -8px;
}
.container
  #main
  .driveArea
  .el-form
  .drive-area
  .el-form-item
  .el-form-item__label {
  text-align: left;
  color: #fff;
  font-size: 12px;
}
/* 单独的带动作用填报入口底部样式 */
.container #main .driveArea .el-form .entrance-bottom {
  position: fixed;
  top: 309px;
  width: 759px;
  height: 73px;
  background: #09264e;
  box-shadow: 0px 0px 40px 0px rgba(12, 21, 48);
}
/* 修改单独的带动作用填报入口底部elementUI样式  */
.container #main .driveArea .el-form .entrance-bottom .el-button--default {
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
.container #main .driveArea .el-form .entrance-bottom .el-button--primary {
  width: 84px;
  height: 30px;
  position: absolute;
  top: 22px;
  left: 391px;
  background: #2294d5;
  border-radius: 4px;
}
/* 单独的采购比重填报入口 */
.container #main .proportionArea {
  position: absolute;
  width: 760px;
  height: 244px;
  /* left: 500px; */
  left: 510px;
  top: 30px;
  z-index: 5;
  background: rgba(9, 38, 78, 0.9);
  border: 1px solid #2294d5;
}
/* 单独的采购比重填报入口头部样式 */
.container #main .proportionArea .el-form .entrance-header {
  position: fixed;
  top: 138px;
  width: 759px;
  height: 50px;
  line-height: 50px;
  font-size: 18px;
  color: #fff;
  background: rgba(19, 74, 145, 0.38);
  display: flex;
  justify-content: space-between;
}
.container #main .proportionArea .el-form .entrance-header .hLeft {
  margin-left: 19px;
}
.container #main .proportionArea .el-form .entrance-header .hRight {
  margin-right: 20px;
}
.container #main .proportionArea .el-form .entrance-header .hRight:hover {
  color: #e1a630;
  cursor: pointer;
}
.container #main .proportionArea .el-form .proportion-area {
  position: relative;
  margin-top: 77px;
  margin-left: 28px;
}
/* 修改采购比重区域elementUI样式 */
.container
  #main
  .proportionArea
  .el-form
  .proportion-area
  .el-form-item
  .el-form-item__content
  .el-select {
  width: 582px;
  margin-right: 18px;
}
.container
  #main
  .proportionArea
  .el-form
  .proportion-area
  .el-form-item
  .el-form-item__content
  .el-select
  .el-input
  .el-input__inner {
  border: 1px solid #0797a7;
  background: rgba(3, 20, 46, 0.3);
  color: #fff;
}
.container #main .proportionArea .el-form .proportion-area .el-form-item {
  margin-top: 14px;
  margin-left: 4px;
}
.container
  #main
  .proportionArea
  .el-form
  .proportion-area
  .el-form-item
  .el-form-item__label {
  text-align: left;
  color: #fff;
  font-size: 12px;
}

/* 单独的采购比重填报入口底部样式 */
.container #main .proportionArea .el-form .entrance-bottom {
  position: fixed;
  top: 309px;
  width: 759px;
  height: 73px;
  background: #09264e;
  box-shadow: 0px 0px 40px 0px rgba(12, 21, 48);
}
/* 修改单独的采购比重填报入口底部elementUI样式  */
.container #main .proportionArea .el-form .entrance-bottom .el-button--default {
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
.container #main .proportionArea .el-form .entrance-bottom .el-button--primary {
  width: 84px;
  height: 30px;
  position: absolute;
  top: 22px;
  left: 391px;
  background: #2294d5;
  border-radius: 4px;
}

/* 单独的采购均价填报入口样式 */
.container #main .averageArea {
  position: absolute;
  width: 760px;
  height: 244px;
  /* left: 500px; */
  left: 510px;
  top: 30px;
  z-index: 5;
  background: rgba(9, 38, 78, 0.9);
  border: 1px solid #2294d5;
}
/* 单独的采购均价填报入口头部样式 */
.container #main .averageArea .el-form .entrance-header {
  position: fixed;
  top: 138px;
  width: 759px;
  height: 50px;
  line-height: 50px;
  font-size: 18px;
  color: #fff;
  background: rgba(19, 74, 145, 0.38);
  display: flex;
  justify-content: space-between;
}
.container #main .averageArea .el-form .entrance-header .hLeft {
  margin-left: 19px;
}
.container #main .averageArea .el-form .entrance-header .hRight {
  margin-right: 20px;
}
.container #main .averageArea .el-form .entrance-header .hRight:hover {
  color: #e1a630;
  cursor: pointer;
}
/* 单独的采购均价 采购均价区域样式 */
.container #main .averageArea .el-form .average-area {
  position: relative;
  margin-top: 67px;
  margin-left: 28px;
}
/* 修改购均价区域elementUI样式 */
.container
  #main
  .averageArea
  .el-form
  .average-area
  .el-form-item
  .el-form-item__content
  .el-input {
  width: 100px;
  margin-right: 550px;
  text-align: center;
}
.container
  #main
  .averageArea
  .el-form
  .average-area
  .el-form-item
  .el-form-item__content
  > span {
  color: #fff;
}
.container
  #main
  .averageArea
  .el-form
  .average-area
  .el-form-item
  .el-form-item__content
  .el-input
  .el-input__inner {
  border: 1px solid #0797a7;
  background: rgba(3, 20, 46, 0.3);
  color: #fff;
}
.container #main .averageArea .el-form .average-area .el-form-item {
  margin-top: 14px;
  margin-left: 4px;
}
.container
  #main
  .averageArea
  .el-form
  .average-area
  .el-form-item
  .el-form-item__label {
  text-align: left;
  color: #fff;
  font-size: 12px;
}

/* 单独的采购比重填报入口底部样式 */
.container #main .averageArea .el-form .entrance-bottom {
  position: fixed;
  top: 309px;
  width: 759px;
  height: 73px;
  background: #09264e;
  box-shadow: 0px 0px 40px 0px rgba(12, 21, 48);
}
/* 修改单独的采购比重填报入口底部elementUI样式  */
.container #main .averageArea .el-form .entrance-bottom .el-button--default {
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
.container #main .averageArea .el-form .entrance-bottom .el-button--primary {
  width: 84px;
  height: 30px;
  position: absolute;
  top: 22px;
  left: 391px;
  background: #2294d5;
  border-radius: 4px;
}
</style>