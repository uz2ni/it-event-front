<template>
  <div class="nav">
    <div class="headerLeft" >
      <router-link to="main" tag="li"></router-link>
    </div>
    <div class="headerRight">
      <router-link tag="li" to="main"><li>홈</li></router-link>
      <router-link tag="li" to="online"><li>온라인</li></router-link>
      <router-link tag="li" to="free"><li>무료</li></router-link>
      <router-link tag="li" to="magam"><li>곧!마감</li></router-link>
      <router-link tag="li" to="mogakco"><li>모각코</li></router-link>
    </div>
  </div>
</template>

<script>
import mainPage from './main.vue';
import online from './online.vue';
import free from './free.vue';
import magam from './magam.vue';
import mogakco from './mogakco.vue';
export default {
  components: {
    mainPage,online,free,magam,mogakco
  }
}
</script>

<style scoped>
.nav{
  width:100%;
  margin:0px auto;
  padding-top:15px;
  padding-bottom:15px;
  height:30px;
  color:#fff;
  background-color:#000000;
  border-bottom:1px solid #575757;
}
.headerLeft{
  color: fff;
  float:left;
  padding: 5px 8px 0 5px;
  
}
.headerLeft img{
  margin-top:-18px;
  margin-left: 40px;
}
.headerLeft li{
  margin-right:3px;
  list-style: none;
  float:left;
  padding:3px;
  cursor: pointer;
}
.headerLeft a{
  color:#fff;
  text-decoration: none;
  padding-right:50px;
  cursor: pointer;
}
.headerRight{
  color: fff;
  float:right;
  padding: 5px 20px 0 20px;
  
}
.headerRight .router-link-exact-active{
  color: #40E0D0;
  font-weight: bold;
}
.headerRight a{
  color:fff;
  text-decoration: none;
  cursor: pointer;
}
.headerRight li{
  width:70px;
  float:left;
  list-style: none;
  text-align: center;
  cursor: pointer;
}
.headerRight li:hover{
  color:#40E0D0;
}
.headerRight li .router-link-exact-active{
  color:#40E0D0;;
}
a:link{
  color:#fff;
}
a:visited{
  color:#fff;
}
</style>
