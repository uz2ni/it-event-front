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
var konggoVar = { 
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
      ko:ko,
      isShowing : true, switch1: true,
      isNavOpen: false,  
      currentpage : 1, 
      tri : -1,tdname : '', 
      exampleItems:[], 
      customLabels, 
      loading:false, 
      color:'#008844', 
      fontSize: this.$store.state.fontSize,
      gwanliOpen:false,
      gicho:true,  ss:0, gwanliIndex:0, faQuestionCircle, faEdit, faChevronDown, faChevronUp ,faAngleDoubleDown,faAngleDoubleUp,faPrint,faChartBar,faFileExcel,faTrashAlt,
      loading1:true, loading2: true, konggono:'', kongsaname:'',fileContent:'',
      radio : 'jasasub1',
      faSearch,faCog,
      aa11s:[],aa12s:[],aa15s:[],aa17s:[],aa21s:[],aa22s:[],aa23s:[],aa24s:[],aa99s:[],aa100s:[], stop:[{"code":"","value":""}],
      bb11s:[],bb12s:[],bb15s:[],bb17s:[],bb21s:[],bb22s:[],bb23s:[],bb24s:[],bb99s:[],multiupjongs:[],multijiyuks:[],
      jasaupjong:[], gugunArr:[],
      upjongall:[],
      optionSelect:'',
      conditionsAll:'',
      svcselect:'1'
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
export default konggoVar;