exports.ids = [4];
exports.modules = {

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return getTags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return getFeedArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addFeedArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return deleatFeedArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return deleteComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return addFollow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return deleteFollow; });
/* harmony import */ var _plugins_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);

const getArticles = params => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: '/api/articles',
    params
  });
};
const getTags = () => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: '/api/tags'
  });
};
const getFeedArticles = params => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: '/api/articles/feed',
    params
  });
};
const addFeedArticles = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: `/api/articles/${slug}/favorite`
  });
};
const deleatFeedArticles = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'DELETE',
    url: `/api/articles/${slug}/favorite`
  });
};
const getArticle = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: `/api/articles/${slug}`
  });
};
const getComments = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: `/api/articles/${slug}/comments`
  });
};
const addComments = (slug, body) => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: `/api/articles/${slug}/comments`,
    data: {
      body
    }
  });
};
const deleteComments = (slug, id) => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'DELETE',
    url: `/api/articles/${slug}/comments/${id}`
  });
}; // 添加关注

const addFollow = username => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: `/api/profiles/${username}/follow`
  });
}; // 取消关注

const deleteFollow = username => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'DELETE',
    url: `/api/profiles/${username}/follow`
  });
};

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/profile/index.vue?vue&type=template&id=23168b1d&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"profile-page"},[_vm._ssrNode("<div class=\"user-info\" data-v-23168b1d><div class=\"container\" data-v-23168b1d><div class=\"row\" data-v-23168b1d><div class=\"col-xs-12 col-md-10 offset-md-1\" data-v-23168b1d><img"+(_vm._ssrAttr("src",_vm.profile.image))+" class=\"user-img\" data-v-23168b1d> <h4 data-v-23168b1d>"+_vm._ssrEscape(_vm._s(_vm.profile.username))+"</h4> <p data-v-23168b1d>"+_vm._ssrEscape("\n            "+_vm._s(_vm.profile.bio)+"\n          ")+"</p> <button"+(_vm._ssrClass("btn btn-sm btn-outline-secondary action-btn",{ active: _vm.profile.following }))+" data-v-23168b1d><i class=\"ion-plus-round\" data-v-23168b1d></i>"+_vm._ssrEscape("\n             \n            Follow "+_vm._s(_vm.profile.username)+" \n          ")+"</button></div></div></div></div> "),_vm._ssrNode("<div class=\"container\" data-v-23168b1d>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-23168b1d>","</div>",[_vm._ssrNode("<div class=\"col-xs-12 col-md-10 offset-md-1\" data-v-23168b1d>","</div>",[_vm._ssrNode("<div class=\"articles-toggle\" data-v-23168b1d>","</div>",[_vm._ssrNode("<ul class=\"nav nav-pills outline-active\" data-v-23168b1d>","</ul>",[_vm._ssrNode("<li class=\"nav-item\" data-v-23168b1d>","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{active: _vm.tab === 'my'},attrs:{"exact":"","to":{
                name: 'profile',
                params: {
                  profile: _vm.profile.username
                },
                query: {
                  tab: 'my'
                }
              }}},[_vm._v("My Articles")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\" data-v-23168b1d>","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{active: _vm.tab === 'favorited'},attrs:{"exact":"","to":{
                  name: 'profile',
                  params: {
                    profile: _vm.profile.username
                  },
                  query: {
                    tab: 'favorited'
                  }
                }}},[_vm._v("Favorited Articles")])],1)],2)]),_vm._ssrNode(" "),_vm._l((_vm.articles),function(article){return _vm._ssrNode("<div class=\"article-preview\" data-v-23168b1d>","</div>",[_vm._ssrNode("<div class=\"article-meta\" data-v-23168b1d>","</div>",[_c('nuxt-link',{attrs:{"to":{
              name: 'profile',
              params: {
                username: article.author.username
              }
            }}},[_c('img',{attrs:{"src":article.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\" data-v-23168b1d>","</div>",[_c('nuxt-link',{staticClass:"author",attrs:{"to":{
                  name: 'profile',
                  params: {
                    username: article.author.username
                  }
                }}},[_vm._v("\n                "+_vm._s(article.author.username)+"\n              ")]),_vm._ssrNode(" <span class=\"date\" data-v-23168b1d>"+_vm._ssrEscape(_vm._s(_vm._f("date")(article.createdAt,'MMM DD, YYYY')))+"</span>")],2),_vm._ssrNode(" <button"+(_vm._ssrAttr("disabled",article.favoriteDisabled))+(_vm._ssrClass("btn btn-outline-primary btn-sm pull-xs-right",{active: article.favorited}))+" data-v-23168b1d><i class=\"ion-heart\" data-v-23168b1d></i>"+_vm._ssrEscape(" "+_vm._s(article.favoritesCount)+"\n              ")+"</button>")],2),_vm._ssrNode(" "),_c('nuxt-link',{staticClass:"preview-link",attrs:{"to":{
            name: 'article',
            params: {
              slug: article.slug
            }
          }}},[_c('h1',[_vm._v(_vm._s(article.title))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(article.description))]),_vm._v(" "),_c('span',[_vm._v("Read more...")]),_vm._v(" "),_c('ul',{staticClass:"tag-list"},_vm._l((article.tagList),function(tag){return _c('li',{key:tag,staticClass:"tag-default tag-pill tag-outline"},[_vm._v("\n                "+_vm._s(tag)+"\n              ")])}),0)])],2)}),_vm._ssrNode(" "),_vm._ssrNode("<nav data-v-23168b1d>","</nav>",[_vm._ssrNode("<ul class=\"pagination\" data-v-23168b1d>","</ul>",_vm._l((_vm.totalPage),function(item){return _vm._ssrNode("<li"+(_vm._ssrClass("page-item",{active: item === _vm.page}))+" data-v-23168b1d>","</li>",[_c('nuxt-link',{staticClass:"page-link",attrs:{"to":{
                  name: 'profile',
                  params: {
                    username: _vm.profile.username
                  },
                  query: {
                    page: item,
                    tab: _vm.tab
                  }
                }}},[_vm._v(_vm._s(item))])],1)}),0)])],2)])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/profile/index.vue?vue&type=template&id=23168b1d&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(2);

// EXTERNAL MODULE: ./plugins/request.js
var request = __webpack_require__(7);

// CONCATENATED MODULE: ./api/profile.js
 // 获取用户信息

const getProfiles = username => {
  return Object(request["b" /* request */])({
    method: 'GET',
    url: `/api/profiles/${username}`
  });
};
// EXTERNAL MODULE: ./api/articles.js
var api_articles = __webpack_require__(27);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/profile/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var profilevue_type_script_lang_js_ = ({
  name: 'UserProfile',
  watchQuery: ['tab', 'page'],

  async asyncData(context) {
    const {
      tab = 'my',
      page = 1
    } = context.query;
    const {
      username
    } = context.params;
    const limit = 5;
    const offset = (page - 1) * limit;
    const articleParams = tab === 'my' ? {
      author: username
    } : {
      favorited: username
    };
    articleParams.limit = limit;
    articleParams.offset = offset;
    const [profileRes, articlesRes] = await Promise.all([getProfiles(username), Object(api_articles["h" /* getArticles */])(articleParams)]);
    const {
      profile
    } = profileRes.data;
    const {
      articles,
      articlesCount
    } = articlesRes.data;
    articles.forEach(article => article.favoriteDisabled = false);
    return {
      tab,
      limit,
      page,
      profile,
      articles,
      articlesCount
    };
  },

  computed: { ...Object(external_vuex_["mapState"])(['user']),

    totalPage() {
      return Math.ceil(this.articlesCount / this.limit);
    }

  },
  methods: {
    async onFavorite(article) {
      if (!this.user) return this.$router.push('/login');
      article.favoriteDisabled = true; // 禁用点击

      if (article.favorited) {
        // 取消点赞
        await deleteFavorite(article.slug);
        article.favorited = false;
        article.favoritesCount -= 1;
      } else {
        // 添加点赞
        await Object(api_articles["b" /* addFeedArticles */])(article.slug);
        article.favorited = true;
        article.favoritesCount += 1;
      }

      article.favoriteDisabled = false; // 允许点击
    },

    async onFollow(author) {
      if (!this.user) return this.$router.push('/login');
      author.followDisabled = true; // 禁用点击

      if (author.following) {
        // 取消点赞
        await Object(api_articles["f" /* deleteFollow */])(author.username);
        author.following = false;
        author.favoritesCount -= 1;
      } else {
        // 添加点赞
        await Object(api_articles["c" /* addFollow */])(author.username);
        author.following = true;
        author.followesCount += 1;
      }

      author.followDisabled = false; // 允许点击
    }

  }
});
// CONCATENATED MODULE: ./pages/profile/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_profilevue_type_script_lang_js_ = (profilevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/profile/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_profilevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "23168b1d",
  "9c102d14"
  
)

/* harmony default export */ var pages_profile = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=4.js.map