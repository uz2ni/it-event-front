<template>
  <div>
    <div class="main_txt">개발자를 위한 컨퍼런스 아카이빙 사이트
      <div class="searchBox">
        <div><input type="text" id="search" placeholder="컨퍼런스명 검색"></div>
        <div>
          <select name="onlineyn" id="onlineyn" v-model="onlineyn">
            <option value="00">전체</option>
            <option value="01">온라인</option>
            <option value="02">오프라인</option>
          </select>
        </div>
        <div>
          <select name="whom" id="whom" v-model="whom">
            <option value="00">전체</option>
            <option value="01">개발자</option>
            <option value="02">기획자</option>
            <option value="03">디자이너</option>
          </select>
        </div>
        <div><button type="button" class="searchBtn"></button>FIND</div>
      </div>
    </div>
    <div class="list">
      <div v-for="(i,list) in lists" :key="list.idx">
        <div>{{list.nickname}}</div>
        <div>{{list.height}}</div>
      </div>
    </div>
  </div>
  
</template>

<script>
import axios from 'axios';
export default {
  data(){
    return{
      onlineyn:'00',
      whom:'00',
      lists:[]
    }
  },
  created(){
    this.callList();
  },
  methods:{
    async callList(){
      try{
        const res = await axios.get('https://it-event-back.herokuapp.com?id=1')
        this.lists = res.data;
        console.log(this.lists)
      }catch(e){
        console.log(e);
      }
    }
  }
}
</script>

<style scoped>
*:focus{
  outline: none;
}
.main_txt{
  padding-top:100px;
  width:100%;
  height:100vh;
  max-height:300px;
  background-color:#000000;
  margin:0;
}
.searchBox{
  width:80%;
  /* border:1px solid #575757; */
  height:50px;
  border-radius:25px;
  margin:150px auto 30px auto;
}
.list{
  height:700px;
}
#search{
  height:48px;
  width:35%;
  padding-left:50px;
  border-radius: 25px 0 0 25px;
  border:none;
  float:left;
}
#onlineyn, #whom{
  height:50px;
  width:20%;
  padding:0 20px;
  float:left;
  border:none;
  margin-left:1px;
}
.searchBtn{
  width:15%;
  height:50px;
  float:left;
  margin-left:1px;
  border:none;
  border-radius:0 25px 25px 0;
  background-color:#ffffff;
}
</style>
