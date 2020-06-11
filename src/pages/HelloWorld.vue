<template>
  <!-- 首页 -->

  <div class="hello">
    <!-- 顶部 -->
    <div>
      <span class="div1">书刊</span>
      <div><router-link to="/searchpage">
        <van-search v-model="value" shape="round" background="tomato" placeholder="请输入搜索关键词"  class="search">

        </van-search>
        </router-link>
      </div>
    </div>
    <!-- 轮播图 -->
    <swipe></swipe>
    <!--   内容部分 -->

    <jpurnalism></jpurnalism>
  </div>
</template>

<script>
import swipe from "../components/homepage/Swipe";
import jpurnalism from "../components/homepage/JournaLism";
export default {
  name: "HelloWorld",
  data() {
    return {
      value: "",
      active: ""
    };
  },
  components: {
    jpurnalism,
    swipe
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
 margin-bottom: 60px;
}
.div1 {
  float: left;
  background-color: tomato;
  text-align: center;
  display: table-cell;
  vertical-align: middle;
  height: 37px;
  padding-top: 17px;
  padding-left: 9px;
  font-size: 17px;
}
.div1 span {
  padding-top: 20px;
}
</style>
