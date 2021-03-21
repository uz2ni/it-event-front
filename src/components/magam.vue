<template>
  <div>
    <div class="list">
      <div v-for="(list,i) in lists" :key="list.i" class="listArea">
        <div class="listBox"></div>
        <div class="listDate">{{list.date}}   <span>・ {{list.cate}}</span></div>
        <div class="listTitle">{{list.title}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
data(){
    return{
      lists:[
        {
          'title':'Flutter Engage Extended Korea',
          'date':'2021/04/01',
          'cate':'온라인'
        },
        {
          'title':'NVIDIA JETSON DEVELOPER MEETUP',
          'date':'2021/04/03',
          'cate':'오프라인'
        },
        {
          'title':'Live온라인:도커 / k8s / 클라우드(AWS) 네트워크 완전 정복',
          'date':'2021/04/10',
          'cate':'오프라인'
        },
        {
          'title':'🐰엘리스 스쿨🐰 화상강의 코딩 선생님 모집엘리스 스쿨 화상강의 코딩 선생님 모집',
          'date':'2021/05/01',
          'cate':'온라인'
        },
        {
          'title':'3test webinar',
          'date':'2021/04/30',
          'cate':'오프라인'
        },
        {
          'title':'4test webinar',
          'date':'2021/05/02',
          'cate':'온라인'
        },
        {
          'title':'5test webinar',
          'date':'2021/04/28',
          'cate':'오프라인'
        },
        {
          'title':'6test webinar',
          'date':'2021/04/15',
          'cate':'온라인'
        },
        {
          'title':'7test webinar',
          'date':'2021/04/01',
          'cate':'온라인'
        },
      ]
    }
  }
}
</script>

<style scoped>
.list{
  text-align: left;
}
.listBox{
  height:236px;
  width:236px;
  border:1px solid #dae1e6;
  border-radius: 4px;
  margin:0 40px;
  cursor:pointer;
}
.listArea{
  margin:50px auto 0 auto;
  display: inline-block;
}
.listTitle{
  width:236px;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  margin:0 40px;
  cursor:pointer;
}
.listDate{
  width:236px;
  text-align: left;
  margin:10px 40px 0 40px;
  cursor:pointer;
}
.listDate span{
  margin-left:5px;
}
</style>
