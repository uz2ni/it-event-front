import {ko} from 'vuejs-datepicker/dist/locale'
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons'
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faPrint } from '@fortawesome/free-solid-svg-icons'
import { faChartBar } from '@fortawesome/free-solid-svg-icons'
import { faFileExcel } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons'
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
      loading:false, 
      color:'#008844', 
      gicho:true,  ss:0, gwanliIndex:0, faQuestionCircle, faEdit, faChevronDown, faChevronUp ,faAngleDoubleDown,faAngleDoubleUp,faPrint,faChartBar,faFileExcel,faTrashAlt,
    } 
  },
  computed:{
    whereIam:{
      get(){
        return this.$store.state.sisl.konggos.whereIam
      },
      set(val){
        this.$store.state.sisl.konggos.whereIam = val;
      }
    },
  }
}
export default formVar;