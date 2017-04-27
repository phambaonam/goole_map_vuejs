<template>
    <div id="map" style="width:auto;height: 500px;"></div>
</template>
<script>
    export default {
        data() {
            return {
            }
        },
        mounted() {
            this.initMap();
        },
        methods: {
            initMap: () =>{
                let uluru = new google.maps.LatLng({lat : 21.0320199027105 , lng : 105.784398727119 });
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
        }
    }
</script>

