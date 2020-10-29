<template>
  <div>
     <div class="card comment-form" >
          <div class="card-block">
            <textarea class="form-control" placeholder="Write a comment..." rows="3"
            v-model="body"
            ></textarea>
          </div>
          <div class="card-footer">
            <img src="http://i.imgur.com/Qr71crq.jpg" class="comment-author-img" />
            <button @click="onSubmit()" class="btn btn-sm btn-primary">
             Post Comment
            </button>
          </div>
        </div>
        
        <div class="card" v-for="comment in comments" :key="comment.id">
          <div class="card-block">
            <p class="card-text">{{comment.body}}</p>
          </div>
          <div class="card-footer">
            <nuxt-link 
              :to="{
                name:'profile',
                params:{
                  username:comment.author.username
                }
              }"
              class="comment-author">
              <img :src="comment.author.image" class="comment-author-img" />
            </nuxt-link>
            &nbsp;
            <nuxt-link 
            :to="{
              name:'profile',
              params:{
                username:comment.author.username
              }
            }"
            class="comment-author">{{comment.author.username}}</nuxt-link>
            <span class="date-posted">{{comment.createdAt | date('MMM DD,YYYY')}}</span>
            <span class="mod-options" @click="deleteComment(comment.id)">
              <i class="ion-trash-a"></i>
            </span>
          </div>
        </div>

  </div>
</template>

<script>
import { getComments, addComments , deleteComments } from '@/api/articles'
export default {
  props:{
    article:{
      type:Object,
      required:true
    }
  },
  data() {
    return {
      comments:[],
      body: ""
    }
  },
  async mounted() {
    const { data } = await getComments(this.article.slug);
    console.log({data})
    this.comments = data.comments;
  },
  methods: {
    async deleteComment(commentId){
      const comments = this.comments
      const index = comments.findIndex((item) => item.id == commentId)
      comments.splice(index , 1)
      const slug = this.article.slug;
      await deleteComments(slug,commentId);
    },
    async onSubmit(){
      const { data } = await addComments(this.article.slug,this.body);
      this.comments.unshift(data.comment)
      this.body = ''
    }
  },
}
</script>

<style>

</style>