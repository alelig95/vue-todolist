new Vue({
  el: '#root',
  data: {
    list: [ ],
    value: ''
 },
 methods : {
   submit: function () {
     this.list.push(this.value);
     this.value = '';
   },
   deleteElement: function (index) {
     this.list.splice(index, 1);
   }
 }
 });
Vue.config.devtools = true;
