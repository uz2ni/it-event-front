import {ko} from 'vuejs-datepicker/dist/locale'
const customLabels = {
  first: '<<',
  last: '>>',
  previous: '<',
  next: '>'
};
var formVar = { 
  data: function () { 
    return { 
      disabledDates: {
        // https://github.com/charliekassel/vuejs-datepicker README
        customPredictor: function(date) {
          // disables the date if it is a of 5
          if(date.getDate() > new Date(2020, 1, 15)){
            return true
          }
        }
      },
      date1 : new Date(new Date().getFullYear(), new Date().getMonth(),  new Date().getDate()),
      date2 : new Date(new Date().getFullYear(), new Date().getMonth(),  new Date().getDate()),
      ko:ko,
      cf_onlineYN:'online',
      loading:false, 
      customLabels,
      color:'#008844', 
      onlineyn:true
    } 
  },
  computed:{
    whereIam:{
      get(){
      },
      set(val){
      }
    },
  }
}
export default formVar;