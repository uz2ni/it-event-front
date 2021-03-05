<template>
  <div class="enrollForm">
    <div class="title">Yay! 새로운 이벤트를 만들어 볼까요?</div>
    <div class="sub_title">그러기 위해서는 몇개의 정보가 필요해요! <br>아래의 양식을 작성해 주세요 </div>
    <div>
      <table class="tableClass">
        <tr>
          <th>행사명</th>
          <td><input type="text" name="cf_name" id="cf_name"></td>
        </tr>
        <tr>
          <th>호스트명</th>
          <td><input type="text" name="cf_host" id="cf_host"></td>
        </tr>
        <tr>
          <th>호스트 전화번호</th>
          <td>
            <input type="text" name="cf_hp1" id="cf_hp1">-
            <input type="text" name="cf_hp2" id="cf_hp2">-
            <input type="text" name="cf_hp3" id="cf_hp3">
          </td>
        </tr>
        <tr>
          <th>호스트 이메일</th>
          <td>
            <input type="text" name="cf_email1" id="cf_email1">@
            <input type="text" name="cf_email2" id="cf_email2">
          </td>
        </tr>
        <tr>
          <th>행사시작일</th>
          <td>
            <datepicker :disabled-dates="disabledDates" :language="ko" :format="customFormatter" :value="date1" v-model="date1"></datepicker>
          </td>
        </tr>
        <tr>
          <th>행사종료일</th>
          <td>
            <datepicker :disabled-dates="disabledDates" :language="ko" :format="customFormatter" :value="date1" v-model="date1"></datepicker>
          </td>
        </tr>
        <tr>
          <th>장소</th>
          <td><input type="text" name="" id=""></td>
        </tr>
        <tr>
          <th>참여인원</th>
          <td><input type="text" name="" id=""></td>
        </tr>
        <tr>
          <th>대표이미지 등록</th>
          <td><input type="file" name="thumbnail" id="thumbnail"></td>
        </tr>
        <tr>
          <th>행사내용</th>
          <td><textarea name="Text1" cols="40" rows="5"></textarea></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
var moment = require('moment');
moment().format();
import $ from 'jquery'
import Datepicker from 'vuejs-datepicker';
import bootstrap from '../../lib/bootstrap.css'
import bootstrapselect from '../../lib/bootstrap-select.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import formVar from './form.js';
export default {
  name:'endrollForm',
  mixins: [formVar],
  components:{
    Datepicker,
    FontAwesomeIcon,
  },
  mounted() { //업종 mounted와 updated안하면 dom에서 bootstrap-select로 바인딩이 안됨
    const $selectpicker = $(this.$el).find('.selectpicker');
    $selectpicker.selectpicker();
  },
  updated() {
    $(this.$el).find('.selectpicker').selectpicker('refresh');
    $(this.$refs.upjongcode).selectpicker('refresh');
  },
  methods:{
    customFormatter(date) {   //datepicker 기본포맷
      return moment(date).format('YYYY/MM/DD');
    },
  }
}
</script>

<style scoped>
.enrollForm{
  padding:100px;
  height:100%;
}
.tableClass{
  width:100%;
}
.tableClass th,td{
  text-align:left;
  height: 30px;
}
.title{
  font-size:2.2vw;
  height:40px;
}
.sub_title{
  font-size:1.8vw;
  margin-bottom:30px;
}
input[readonly]{
  width:206px;
}
</style>