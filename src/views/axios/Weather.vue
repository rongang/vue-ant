<template>
  <div>
    <div v-if="weather ? false : true">
      <a-spin size="large" class="loading" />
    </div>
    <div v-if="weather || false">
      <a-affix :offset-top="top">
       
      </a-affix> <weatherheader
          :weatherdis="weather.aqi"
          v-on:refresh="fetchData"
        ></weatherheader>
      <div style="margin-left: 24px">
        <a-radio-group :value="selectday" @change="handlechange">
          <a-radio-button
            v-for="(day, index) in weather.data"
            :key="index"
            :value="index"
          >
            {{ day.date }}
          </a-radio-button>
        </a-radio-group>
        <div
          v-for="(day, index) in weather.data"
          :key="index"
          v-show="index === selectday"
        >
          <a-row
            ><h1>{{ day.wea }}</h1>
            <p>{{ day.day }}</p></a-row
          >
          <a-list item-layout="horizontal" :data-source="day.index">
            <a-list-item slot="renderItem" slot-scope="item, index" :key="index">
              <a-list-item-meta
                :description="item.desc"
              >
                <a  slot="title" href="https://www.antdv.com/">{{
                  item.title+'\r'
                }}{{item.level}}</a>
                <a-avatar
                  slot="avatar"
                 style="backgroundColor:#1890ff"
                ><a-icon type="bulb"  theme="twoTone" /></a-avatar>
              </a-list-item-meta>
            </a-list-item>
          </a-list>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getNowWeather } from "@/api/weather.js";
import weatherheader from "./WeatherHeader";
/*
data: Array(7)
0:
air: "53"
air_level: "良"
air_tips: "空气好，可以外出活动，除极少数对污染物特别敏感的人群以外，对公众没有危害！"
alarm: Object
date: "2020-09-27"
day: "27日（星期日）"
hours: Array(17)
humidity: "44%"
index: Array(6)
pressure: "996"
sunrise: "06:02"
sunset: "18:02"
tem: "25"
tem1: "27"
tem2: "18"
visibility: "20.97km"
wea: "晴"
wea_day: "晴"
wea_day_img: "qing"
wea_img: "qing"
wea_night: "多云"
wea_night_img: "yun"
week: "星期日"
win: Array(2)
0: "南风"
1: "南风"
length: 2
__ob__: Observer {value: Array(2), dep: Dep, vmCount: 0}
__proto__: Array
win_meter: "小于12km/h"
win_speed: "<3级"
*/
export default {
  data() {
    return {
      selectday: 0,
      top: 0,
      weather:'',
    };
  },
  components: {
    weatherheader,
  },
  created() {
    let obj = {a:3}
    console.log(Object.getOwnPropertyDescriptors(obj))
    console.log("==============>"+process.env.VUE_APP_TITLE)
    setTimeout(() => {
      this.fetchData();
    }, 1000);
  },
  methods: {
    async fetchData() {
      console.log("fetchdata");
      var data = await getNowWeather();
      // console.log(data);
      this.weather = data;
    },
    handlechange(e) {
      this.selectday = e.target.value;
    },
  },
};
</script>

<style>
.loading {
  margin: 100px 50%;
}
</style>>