import Ajax from '../ajax/Ajax'

// 请求所有客户信息列表数据(填报左侧选择和填报页面选择客户下拉框)
export  const reqCustomerInfos = (sysDate) => Ajax({
  url:'/shanMei/largeScreen/custom/customerInfos',
  method:'GET',
  params:{
    sysDate
  }
})


// 请求所有客户总得分排名信息（填报左侧选择）
export const reqScoreRanking = (sysDate,pageNum,pageSize) => Ajax({
  url:'/shanMei/largeScreen/custom/scoreRanking',
  method:'GET',
  params:{
    sysDate,
    pageNum,
    pageSize
  }
})


// 根据日期和编码获取指定的用户信息(填报页面选择完客户信息后，即下拉框选中客户名后)
export const reqShortCustomerInfo = (sysDate,cCusCode) => Ajax({
  url:'/shanMei/largeScreen/custom/customerInfo',
  method:"GET",
  params:{
    sysDate,
    cCusCode
  }
})

// 客户完整信息更新
export const updateCustomerInfos = (sysDate, cCusCode,proSca,status,relDurScore,relDeg,absorbScore,banPurScore,cashRat,cooperDeg1,cooperDeg2,divPurScore,driveEff,category,region,purPro,purScore) => Ajax({
  url:'/shanMei/largeScreen/custom/update',
  method:'POST',
  params:{
    sysDate, 
    cCusCode,
    proSca,
    status,
    relDurScore,
    relDeg,
    absorbScore,
    banPurScore,
    cashRat,
    cooperDeg1,
    cooperDeg2,
    divPurScore,
    driveEff,
    category,
    region,
    purPro,
    purScore
  }
})

// 品质特性更新
export const updateQualityInfos = (sysDate,cCusCode,proSca,status,relDurScore) => Ajax({
  url:'/shanMei/largeScreen/custom/update',
  method:'POST',
  params:{
    sysDate,
    cCusCode,
    proSca,
    status,
    relDurScore
  }
})