const mockData = {
  "reason": "查询成功",
  "result": {
      "city": "苏州",
      "realtime": {
          "temperature": "4",
          "humidity": "82",
          "info": "阴",
          "wid": "02",
          "direct": "西北风",
          "power": "3级",
          "aqi": "80"
      },
      "future": [
          {
              "date": "2019-02-22",
              "temperature": "1/7℃",
              "weather": "小雨转多云",
              "wid": {
                  "day": "07",
                  "night": "01"
              },
              "direct": "北风转西北风"
          },
          {
              "date": "2019-02-23",
              "temperature": "2/11℃",
              "weather": "多云转阴",
              "wid": {
                  "day": "01",
                  "night": "02"
              },
              "direct": "北风转东北风"
          },
          {
              "date": "2019-02-24",
              "temperature": "6/12℃",
              "weather": "多云",
              "wid": {
                  "day": "01",
                  "night": "01"
              },
              "direct": "东北风转北风"
          },
          {
              "date": "2019-02-25",
              "temperature": "5/12℃",
              "weather": "小雨转多云",
              "wid": {
                  "day": "07",
                  "night": "01"
              },
              "direct": "东北风"
          },
          {
              "date": "2019-02-26",
              "temperature": "5/11℃",
              "weather": "多云转小雨",
              "wid": {
                  "day": "01",
                  "night": "07"
              },
              "direct": "东北风"
          }
      ]
  },
  "error_code": 0
};

(function() {
  const app = {
    loading: false,
    cardTemplate: document.querySelector('.cardTemplate'),
    spin: document.querySelector('.spin'),
    addCityDialog: document.querySelector('.dialog-wrapper'),
    addCityBtn: document.querySelector('#add'),
    refreshBtn: document.querySelector('#refresh'),
    daysOfWeek: ['周一' ,'周二', '周三', '周四', '周五', '周六', '周日'],
    cities: [],
  }

  /*****************************************************************************
   *
   * Add eventlistener
   *
   ****************************************************************************/

   app.addCityBtn.addEventListener('click', function() {

   })


  app.updateCardData = function(data) {

  }

  app.getWeatherData = function(city, callback) {
    const xhr = new XMLHttpRequest()
    //非常不推荐的写法 这个key应该在服务端获取 但我就是懒 有什么办法
    const key = 'a02eede5e6d54d954a1d1c67d3395f78';
    var url = `http://apis.juhe.cn/simpleWeather/query?city=${encodeURI(city)}&key=${key}`
    xhr.onreadystatechange = callback.bind(this, xhr.response);
    xhr.open('GET', url);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=utf-8')
    xhr.send();
  }

  app.addCity = function(city) {
    this.cities.push(city)
  }

  app.toggleDialog = function(visibility) {
    if(visibility) {
      app.addCityDialog.classList.remove('visible')
    }else {
      app.addCityDialog.classList.add('visible')
    }
  }

  app.getWeatherData('beijing', function(res){
    console.log(res)
  });
})();