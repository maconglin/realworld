<template>
  <div id="app">
     <nav class="navbar navbar-light">
      <div class="container">
        <a class="navbar-brand" href="index.html">conduits</a>
        <ul class="nav navbar-nav pull-xs-right">
          <li class="nav-item">
            <!-- Add "active" class when you're on that page" -->
            <nuxt-link 
              class="nav-link " 
              to="/"
              exact
              >Home</nuxt-link>
          </li>
          <template v-if="user">
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/editor?">
              <i class="ion-compose"></i>&nbsp;New Post
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/settings">
              <i class="ion-gear-a"></i>&nbsp;Settings
              </nuxt-link>
            </li>
              <li class="nav-item">
              <nuxt-link :to='{
                name:"profile",
                params:{
                  username:user.username
                }
              }' class="nav-link">
                <img class="user-pic"
                :src="user.image">
                {{user.username}}
              </nuxt-link>
            </li>
          </template>
          <template v-else>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/login">
              <i class="ion-gear-a"></i>&nbsp;Sign up
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/register">
              <i class="ion-gear-a"></i>&nbsp;Sign in
              </nuxt-link>
            </li>
          
          </template>
        </ul>
      </div>
    </nav>
    <!-- 子路由 -->
    <nuxt-child/>
    <!-- 子路由 -->
    <!-- 底部导航 -->
     <footer>
      <div class="container">
        <a href="/" class="logo-font">conduit</a>
        <span class="attribution">
          An interactive learning project from <a href="https://thinkster.io">Thinkster</a>. Code &amp; design licensed under MIT.
        </span>
      </div>
    </footer>
     <!-- 底部导航 -->
  </div>
</template>
<script type="text/javascript">
import { mapState } from 'vuex'
export default {
  name: "LayoutIndex",
  data() {
    return {

    }
  },
  components: {
  },
  computed: {
    ...mapState(['user'])
  },
}
</script>

<style lang="stylus" scoped>
</style>
