<template>
  <div class="img">
    <div class="top">
      <van-icon name="fire" color="red" />
      <span>热搜</span>
      <!-- <img src="../../assets/images/hotsearch.jpg" alt /> -->
    </div>
    <van-notice-bar
      text="惊愕！美国三分之一新冠肺炎死亡病例竟来自同一种地方，更令人担忧的是…"
      left-icon="volume-o"
      :scrollable="true"
    />
    <div class="hot">
      <ul>
        <li v-for="item in musicTab" :key="item.articleId">
          <div>
            <div class="content">
              <img :src="item.bannerImgUrl" alt />
            </div>
            <div>
              <div>
                <p>{{item.updateTime}}</p>
                <p style="color: #333;">{{item.title}}...</p>
              </div>
            </div>
            <div class="bottom">
              <van-tag color="#f2826a">{{item.articleSource}}</van-tag>
              <router-link :to="'/newDetails/'+item.articleId">Read more</router-link>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { getHotsNews } from "../../api/Cms-api.js";
export default {
  props: {
    title: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      musicTab: {
        title: ""
      }
    };
  },
  methods: {
    getTabNews() {
      getHotsNews(2, 6).then(res => {
        // debugger;
        this.musicTab = res.rows;
        console.log(this.musicTab);
      });
    }
  },
  created() {
    this.getTabNews();
  },
  components: {
    getHotsNews
  }
};
</script>
<style lang='less' scoped>
.img {
  width: 100%;
}
.top {
  margin: 5px 40%;
  font-size: 18px;
}
.top span {
  font-family: "楷体";
}
p {
  text-align: center;
}
li {
  margin: 10px;
  border: 1px dashed #cccccc;
}
.content {
  display: flex;
}
.content img {
  width: 100%;
  height: 150px;
}
.bottom {
  display: flex;
  justify-content: space-around;
}
</style>
