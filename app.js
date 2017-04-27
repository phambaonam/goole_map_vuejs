const app = require('express')();
const path = require('path');
const expressVue = require('express-vue')
app.engine('vue', expressVue);
app.set('view engine', 'vue');
app.set('views', path.join(__dirname, '/views'));
app.set('vue', {
    componentsDir: path.join(__dirname, '/views/components'),
    defaultLayout: 'layout'
});
app.listen(4000,  ()=> {
    console.log('Server listening on port 4000!')
});
app.get('/',(req,res)=>{
    let scope = {
        vue: {
            head: {
                title: 'Map',
                meta : [
                    {script :'https://maps.googleapis.com/maps/api/js?key=AIzaSyAsB1OF-sOPmmMd9bwLpJfJfrdumJ_A6dI&callback=initMap'},
                    {script:'https://cdnjs.cloudflare.com/ajax/libs/vue/2.2.6/vue.min.js'}
                ]
            },
        }
    };
    res.render('map',scope)
});