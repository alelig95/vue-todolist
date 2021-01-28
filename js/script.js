new Vue({
  el: '#root',
  data: {
    list: [

    ],
    value: ''
 },
 methods : {
   submit: function () {
     this.list.push(this.value)
   },
   deleteElement: function () {
     this.list.splice(this.value, 1)
   }
 }
 });
Vue.config.devtools = true;
