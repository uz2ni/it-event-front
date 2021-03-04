<template>
  <div>
    <div>이벤트 등록하기</div>
    <div>아래의 양식을 작성해 주세요</div>
    <div>
      <table>
        <tr>
          <td>행사명</td>
          <td><input type="text" name="" id=""></td>
        </tr>
        <tr>
          <td>호스트명</td>
          <td><input type="text" name="" id=""></td>
        </tr>
        <tr>
          <td>호스트 전화번호</td>
          <td>
            <input type="text" name="" id="">-
            <input type="text" name="" id="">-
            <input type="text" name="" id="">
          </td>
        </tr>
        <tr>
          <td>호스트 이메일</td>
          <td>
            <input type="text" name="" id="">@
            <input type="text" name="" id="">
          </td>
        </tr>
        <tr>
          <td>행사시작일</td>
          <td>
            <datepicker :disabled-dates="disabledDates" :language="ko" :format="customFormatter" :value="date1" v-model="date1"></datepicker>
          </td>
        </tr>
        <tr>
          <td>행사종료일</td>
          <td>
            <datepicker :disabled-dates="disabledDates" :language="ko" :format="customFormatter" :value="date1" v-model="date1"></datepicker>
          </td>
        </tr>
        <tr>
          <td>장소</td>
          <td><input type="text" name="" id=""></td>
        </tr>
        <tr>
          <td>행사내용</td>
          <td><input type="text" name="" id=""></td>
        </tr>
        <tr>
          <td>참여인원</td>
          <td></td>
        </tr>
        <tr>
          <td>대표이미지 등록</td>
          <td></td>
        </tr>
        <tr>
          <td>예약</td>
          <td></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import formVar from './form.js';
export default {
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
}
</script>

<style>

</style>