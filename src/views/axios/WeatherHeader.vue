<template>
  <div>
    <a-page-header class="pageheader"
      :title="weatherdis.city"
      :sub-title="weatherdis.air_tips"
    >
      <template slot="extra">
        <a-button key="1" type="primary" v-on:click="$emit('refresh')">
          刷新
        </a-button>
      </template>
      <div class="content">
        <div class="main">
          <a-descriptions size="small" :column="3">
            <a-descriptions-item v-for="(value,name,index) in weatherdis" :key="index">
              {{name}}: {{value}}
            </a-descriptions-item>
          </a-descriptions>
        </div>

      </div>
    </a-page-header>
  </div>
</template>
<script>
/**
 * 
 * air: "58"
air_level: "良"
air_tips: "空气好，可以外出活动，除极少数对污染物特别敏感的人群以外，对公众没有危害！"
city: "济南"
cityEn: "jinan"
cityid: "101120101"
co: "1"
co_desc: "优"
country: "中国"
countryEn: "China"
jinghuaqi: "关闭净化器"
kaichuang: "适宜开窗"
kouzhao: "不用佩戴口罩"
no2: "39"
no2_desc: "优"
o3: "136"
o3_desc: "优"
pm10: "66"
pm10_desc: "良"
pm25: "32"
pm25_desc: "优"
so2: "11"
so2_desc: "优"
update_time: "15:13"
waichu: "适宜外出"
yundong: "适宜运动"
*/
export default {
    props:['weatherdis'],
    created(){
        // console.log(this.weatherdis)
    }
}
</script>
<style>
tr:last-child td {
  padding-bottom: 0;
}
#components-page-header-demo-responsive .content {
  display: flex;
}
#components-page-header-demo-responsive .ant-statistic-content {
  font-size: 20px;
  line-height: 28px;
}
@media (max-width: 576px) {
  #components-page-header-demo-responsive .content {
    display: block;
  }

  #components-page-header-demo-responsive .main {
    width: 100%;
    margin-bottom: 12px;
  }
}
.pageheader{
    background-color: white;
}
</style>
