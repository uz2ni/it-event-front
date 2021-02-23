<template>
  <div>
    <div class="main_txt">개발자를 위한 컨퍼런스 아카이빙 사이트
      <div class="searchBox">
        <div><input type="text" placeholder="컨퍼런스명 검색"></div>
        <div>
          <select name="" id="">
            <option value="00">전체</option>
            <option value="01">온라인</option>
            <option value="02">오프라인</option>
          </select>
        </div>
        <div>
          <select name="" id="">
            <option value="00">개발자</option>
            <option value="01">기획자</option>
            <option value="02">디자이너</option>
          </select>
        </div>
      </div>
    </div>
    <div class="list"></div>
  </div>
  
</template>

<script>
export default {

}
</script>

<style scoped>

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
  border:1px solid #575757;
  height:50px;
  border-radius:25px;
  margin:150px auto 30px auto;
}
.list{
  height:700px;
}
</style>
