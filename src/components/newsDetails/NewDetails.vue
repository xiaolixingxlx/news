<template>
  <div>
    <div>
      <div class="top">
      <van-nav-bar title="新闻" left-text="返回" right-text="按钮" left-arrow @click-left="onClickLeft" />
      </div>
      <div class="box">
        <div>
          <span>{{data.title}}</span>
        </div>
        <p>来自{{data.articleSource}}</p>
        <section>
          <p v-html="data.content" class="content">{{data.content}}</p>
        </section>
      </div>
      <div class="mui-card">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <div class="bottom">
              <van-icon name="thumb-circle-o" title="点赞" />  <van-icon name="star-o" />  <van-icon name="smile-comment-o" />
            </div>
            <div class="bottomIcon">
              <span @click="getLike">点赞</span> <span>收藏</span> <span>评论</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {Toast} from 'vant'
import { Journalismlist } from "../../api/Cms-api.js";
export default {
  props: {
    articleId: [Number]
  },
  computed: {
    data() {
      return this.$store.state.cmsNews.data;
    }
  },
  methods: {
    onClickLeft() {
      this.$router.back();
    },
    getLike(){
      Toast('点赞成功');
    }
  },
  created() {
    this.$store.dispatch("cmsNews/newsContent", {
      articleId: this.$route.params.articleId
    });
  },
  components: {
    Journalismlist
  }
};
</script>
<style lang='less' scoped>
.box {
  margin: 20px;
}

.van-nav-bar {
  background-color: #efeff4;
}
img {
  width: 10%;
}

/deep/ section img {
  width: 100%;
}
/deep/ section p .art_p {
  color: #000;
  font-size: 14px;
  text-indent: 2em;
}
section {
  width: 100%;
}
figure {
  width: 100%;
}
.mui-card-content {
  background-color: #efeff4;
}
.bottom {
  display: flex;
  padding: 5px;
  justify-content: space-around;
}
.bottomIcon {
  font-size: 12px;
  display: flex;
  justify-content: space-around;
}
</style>
