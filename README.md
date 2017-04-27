## Hướng Dẫn chèn ảnh google map vào trang web bằng vue.js
   
## Phải có Latitude , Longitude, api_key do google map cung cấp.

## module được sử dụng:
* [express](https://expressjs.com/)
* [express-vue](https://www.npmjs.com/package/express-vue)
   
## Demo mẫu trên trang HTML 

```html
<div id="map" style="border:1px solid green;width: 600px;height: 600px ">

</div>
<script>
    function initMap() {
        let uluru = {lat: 21.0320199027105, lng: 105.784398727119};
        let map = new google.maps.Map(document.getElementById('map'), {
            zoom: 15,
            center: uluru,
            scrollwheel: false
        });
        let marker = new google.maps.Marker({
            position: uluru,
            map: map
        });
    }
</script>
<script async defer
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAsB1OF-sOPmmMd9bwLpJfJfrdumJ_A6dI&callback=initMap">
</script>
```

## Các bước tiến hành:
* Lấy key api_key google map [tại đây](https://developers.google.com/maps/documentation/javascript/get-api-key)
* Tạo file app.js
```javascript
const express = require('express');
const app = express();
const path = require('path');
const expressVue = require('express-vue')
app.engine('vue', expressVue);
app.set('view engine', 'vue');
app.set('views', path.join(__dirname, '/views'));
app.set('vue', {
    componentsDir: path.join(__dirname, '/views/components'),
    defaultLayout: 'layout'
});
app.listen(3000, function () {
    console.log('Server listening on port 3000!')
});
app.get('/',(req,res)=>{
    let scope = {
        vue: {
            head: {
                title: 'Chi Tiet',
                meta : [
                    {script : 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAsB1OF-sOPmmMd9bwLpJfJfrdumJ_A6dI&callback=initMap'},
                    {script:'https://cdnjs.cloudflare.com/ajax/libs/vue/2.2.6/vue.min.js'}
                ]
            },
        }
    };
    res.render('map',scope)
});
```
* Tạo 1 folder có tên là " views", bên trong tạo 1 file map.vue có nội dung như sau:
```vue
<template>
    <div id="map" style="width:auto;height: 500px;"></div>
</template>

<script>

    // Vue
    export default {
        data() {
            return {
            }
        },
        mounted() {
            this.initMap();
        },
        methods: {
            initMap: function() {
                let uluru = new google.maps.LatLng({lat : 21.0320199027105 , lng : 105.784398727119 });
                let map = new google.maps.Map(document.getElementById('map'), {
                    zoom: 15,
                    center: uluru,
                    scrollwheel: false
                });
                var marker = new google.maps.Marker({
                    position: uluru,
                    map: map
                });

            }
        }
    }
</script>
```
* file package.json
```json
{
"dependencies": {
    "express": "^4.15.2",
    "express-vue": "^3.9.11",
    "path": "^0.12.7"
  }
}
```
## Cách chạy:
* npm i
* node app.js