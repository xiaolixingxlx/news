import { Journalismlist, getMusicMv, getMusicComment } from '../../api/Cms-api.js'
export default {
  namespaced: true,
  state: {
    data: {},
    musicMv: {},
    artistName: '',
    name: {},
    comment: {},
  },
  mutations: {
    newsContent(state, payload) {
      state.data = payload.data
    },
    musicMvContent(state, payload) {
      state.musicMv = payload.musicMv
      state.artistName = payload.artistName
      state.name = payload.name
    },
    musicMvComment(state, payload) {
      state.comment = payload.comment

    }
  },
  actions: {
    //新闻热榜
    newsContent(context, payload) {
      // debugger
      Journalismlist(payload.articleId).then(res => {
        // debugger
        // data=res.data

        context.commit("newsContent", { data: res.data })
      });
    },
    //音乐mv
    musicMvContent(context, payload) {
      // debugger
      getMusicMv(payload.id).then(res => {
        // debugger
        // this.musicTab = res.song_list;
        context.commit('musicMvContent', { musicMv: res.data.brs[240], artistName: res.data.artistName, name: res.data.name })
      });
    },
    //音乐评论
    musicMvComment(context, payload) {
      getMusicComment(payload.id).then(result => {
        // debugger
        context.commit('musicMvComment', { comment: result.comments })
      })
    }
  }
}
