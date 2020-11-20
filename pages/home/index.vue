<template>
  <div>
    <div class="home-page">

  <div class="banner">
    <div class="container">
      <h1 class="logo-font">Nuxts-one</h1>
      <p>A place to share your knowledge.</p>
    </div>
  </div>

  <div class="container page">
    <div class="row">

      <div class="col-md-9">
        <div class="feed-toggle">
          <ul class="nav nav-pills outline-active">
            <li class="nav-item"  v-if="user">
              <nuxt-link 
                :to="{
                  name:'home',
                  query:{
                    tab:'your_feed'
                  }
                }" 
                class="nav-link disabled"
                :class="{
                  active: tab === 'your_feed'
                }"
                exact
                >Your Feed</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link
                :to="{
                  name:'home',
                  query:{
                    tab:'global_feed'
                  }
                }" 
               class="nav-link"
                :class="{
                  active: tab === 'global_feed'
                }"
                exact
               >Global Feed</nuxt-link>
            </li>
            <li class="nav-item" v-if="tag">
              <nuxt-link 
              :to="{
                name:'home',
                query:{
                  tab:'tag',
                  tag:tag
                }
              }"
              class="nav-link"
              :class="{
                active: tab === 'tag'
              }"
              exact
              >#{{tag}}</nuxt-link>
            </li>
          </ul>
        </div>

        <div class="article-preview" v-for="article in articles" :key="article.slug">
          <div class="article-meta">
            <nuxt-link :to="{
              name:'profile',
              params:{
                username:article.author.username
              }
            }"
            >
              <img :src="article.author.image" />
            </nuxt-link>
            <div class="info">
              <nuxt-link  :to="{
                name:'profile',
                params:{
                  username:article.author.username
                }
              }"
              class="author">{{article.author.username}}</nuxt-link>
              <span class="date">{{article.createdAt | date('MMM DD,YYYY') }}</span>
            </div>
            <button 
              class="btn btn-outline-primary btn-sm pull-xs-right"
              :class="{
                active: article.favorited
              }"
              :disabled="article.favoritedDisabled"
              @click="addFavorite(article)"
            >
              <i class="ion-heart"></i> 
              {{article.favoritesCount}}
            </button>
          </div>
          <nuxt-link 
            :to="{
              name:'article',
              params:{
                slug:article.slug
              }
            }"
            class="preview-link">
            <h1>{{article.title}}</h1>
            <p>{{article.description}}</p>
            <span>Read more...</span>
          </nuxt-link>
        </div>

      </div>

      <div class="col-md-3">
        <div class="sidebar">
          <p>Popular Tags</p>

          <div class="tag-list">
            <nuxt-link 
              v-for="item in tags" 
              :key="item"
              :to="{
                name:'home',
                query:{
                  tag:item,
                  tab:'tag'
                }
              }"
              class="tag-pill tag-default">{{item}}
            </nuxt-link>
          </div>
        </div>
      </div>

    </div>
  
    <nav>


    <ul class="pagination">

      <!-- ngRepeat: pageNumber in $ctrl.pageRange($ctrl.totalPages) -->
      <li class="page-item ng-scope" 
      v-for="item in totalPage" 
      :key="item"
      :class="{
        active: item === page
      }"
      >

        <nuxt-link 
        class="page-link ng-binding" 
        
        :to="{
          name:'home',
          query:{
            page:item,
            tag:$route.query.tag,
            tab:tab
          }
        }"
        >{{item}}</nuxt-link>

      </li>

    </ul>
  </nav>
  </div>

</div>
  </div>
</template>

<script>
import { 
  getArticles , 
  getTags ,  
  getFeedArticles,
  addFeedArticles,
  deleatFeedArticles,
 } from '@/api/articles'
import { mapState } from 'vuex'
export default {
  name:'HomeIndex',
  watchQuery:['page','tag','tab'],
  async asyncData({query,store}) {
    const page = Number.parseInt( query.page || 1)
    const limit = 10;
    const { tag } = query;
    const tab = query.tab || 'global_feed';
    const loadArticles = store.state.user && tab === 'your_feed' 
    ? getFeedArticles 
    : getArticles;
    const [ ArticleRes , tagRes ] = await Promise.all([
      loadArticles({
        limit,
        offset:(page - 1) * 10,
        tag
      }),
      getTags()
    ])
    const { articles , articlesCount }  = ArticleRes.data
    const { tags }  = tagRes.data
    
    articles.forEach(article => article.favoritedDisabled = false);
    return {
      articles,
      articlesCount,
      tags,
      limit,
      page,
      tag,
      tab: query.tab || 'global_feed' 
    }
  },
  computed: {
    ...mapState(['user']),
    totalPage() {
      return Math.ceil(this.articlesCount / this.limit)
    }
   
  },
  methods: {
    async addFavorite(articles){
      articles.favoritedDisabled = true
      if(articles.favorited){
        //取消点赞
        await deleatFeedArticles(articles.slug)
        articles.favorited = false
        articles.favoritesCount += -1
      } else{
        //添加点赞
        await addFeedArticles(articles.slug)
        articles.favorited = true
        articles.favoritesCount +=1
      }
      articles.favoritedDisabled = false
    }
  },
}
</script>

<style>
.pagination li .page-link{
  margin-bottom: 5px;
}
</style>