exports.ids = [2];
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

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return deleteArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return updateArticle; });
/* harmony import */ var _plugins_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);

const createArticle = data => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: '/api/articles',
    data
  });
};
const deleteArticle = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'DELETE',
    url: `/api/articles/${slug}`
  });
}; // 更新文章详情

const updateArticle = (slug, data) => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'PUT',
    url: `/api/articles/${slug}`,
    data
  });
};

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/index.vue?vue&type=template&id=40fe418b&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"article-page\">","</div>",[_vm._ssrNode("<div class=\"banner\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<h1>"+_vm._ssrEscape(_vm._s(_vm.article.title))+"</h1> "),_c('ArticleMeta',{attrs:{"article":_vm.article}})],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container page\">","</div>",[_vm._ssrNode("<div class=\"row article-content\"><div class=\"col-md-12\">"+(_vm._s(_vm.article.body))+"</div></div> <hr> "),_vm._ssrNode("<div class=\"article-actions\">","</div>",[_c('ArticleMeta',{attrs:{"article":_vm.article}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-xs-12 col-md-8 offset-md-2\">","</div>",[(_vm.user)?_c('ArticleComments',{attrs:{"article":_vm.article}}):_c('ArticleUnlogin')],1)])],2)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/index.vue?vue&type=template&id=40fe418b&

// EXTERNAL MODULE: ./api/articles.js
var articles = __webpack_require__(27);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(2);

// EXTERNAL MODULE: external "markdown-it"
var external_markdown_it_ = __webpack_require__(26);
var external_markdown_it_default = /*#__PURE__*/__webpack_require__.n(external_markdown_it_);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/article-meta.vue?vue&type=template&id=099c0aa0&scoped=true&
var article_metavue_type_template_id_099c0aa0_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-meta"},[_c('nuxt-link',{attrs:{"to":{
      name: 'profile',
      params: { username: _vm.article.author.username },
    }}},[_c('img',{attrs:{"src":_vm.article.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\" data-v-099c0aa0>","</div>",[_c('nuxt-link',{staticClass:"author",attrs:{"to":{
        name: 'profile',
        params: { username: _vm.article.author.username },
      }}},[_vm._v(_vm._s(_vm.article.author.username))]),_vm._ssrNode(" <span class=\"date\" data-v-099c0aa0>"+_vm._ssrEscape(_vm._s(_vm._f("date")(_vm.article.createdAt,"MMM DD,YYYY")))+"</span>")],2),_vm._ssrNode(" "),(!_vm.isAuthor)?_vm._ssrNode("<span data-v-099c0aa0>","</span>",[_vm._ssrNode("<button"+(_vm._ssrAttr("disabled",_vm.article.followDisabled))+(_vm._ssrClass("btn btn-sm btn-outline-secondary",{ active: _vm.article.author.following }))+" data-v-099c0aa0><i class=\"ion-plus-round\" data-v-099c0aa0></i>"+_vm._ssrEscape("\n       \n      "+_vm._s(_vm.article.author.following ? "Unfollow " : "Follow ")+_vm._s(_vm.article.author.username)+"\n    ")+"</button>\n      \n    <button"+(_vm._ssrAttr("disabled",_vm.article.favoriteDisabled))+(_vm._ssrClass("btn btn-sm btn-outline-primary",{ active: _vm.article.favorited }))+" data-v-099c0aa0><i class=\"ion-heart\" data-v-099c0aa0></i>"+_vm._ssrEscape("\n       \n      "+_vm._s(_vm.article.favorited ? "Unfavorite Article " : "Favorite Article")+"\n      ")+((_vm.article.favoritesCount > 0)?("<span class=\"counter\" data-v-099c0aa0>"+_vm._ssrEscape("("+_vm._s(_vm.article.favoritesCount)+")")+"</span>"):"<!---->")+"</button>")],2):_vm._ssrNode("<span data-v-099c0aa0>","</span>",[_c('nuxt-link',{staticClass:"btn btn-sm btn-outline-secondary",attrs:{"to":{ name: 'editor', params: { slug: _vm.article.slug } },"exact":""}},[_c('i',{staticClass:"ion-edit"}),_vm._v(" Edit Article\n    ")]),_vm._ssrNode(" <button"+(_vm._ssrAttr("disabled",_vm.article.deleteDisabled))+" class=\"btn btn-outline-danger btn-sm\" data-v-099c0aa0><i class=\"ion-trash-a\" data-v-099c0aa0></i> Delete Article\n    </button>")],2)],2)}
var article_metavue_type_template_id_099c0aa0_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/components/article-meta.vue?vue&type=template&id=099c0aa0&scoped=true&

// EXTERNAL MODULE: ./api/editor.js
var editor = __webpack_require__(30);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/article-meta.vue?vue&type=script&lang=js&
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



/* harmony default export */ var article_metavue_type_script_lang_js_ = ({
  name: "ArticleMeta",
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  computed: { ...Object(external_vuex_["mapState"])(["user"]),

    isAuthor() {
      return this.article.author.username === this.user.username;
    }

  },

  data() {
    return {};
  },

  methods: {
    async onFollow(article) {
      try {
        if (!this.user) return this.$router.push("/login");
        article.followDisabled = true; // 禁用点击

        if (article.author.following) {
          // 取消关注
          await Object(articles["f" /* deleteFollow */])(article.author.username);
          article.author.following = false;
        } else {
          // 添加关注
          await Object(articles["c" /* addFollow */])(article.author.username);
          article.author.following = true;
        }

        article.followDisabled = false; // 允许点击
      } catch (err) {
        console.log(err);
      }
    },

    async onFavorite(article) {
      try {
        if (!this.user) return this.$router.push("/login");
        article.favoriteDisabled = true; // 禁用点击

        if (article.favorited) {
          // 取消点赞
          await Object(articles["d" /* deleatFeedArticles */])(article.slug);
          article.favorited = false;
          article.favoritesCount -= 1;
        } else {
          // 添加点赞
          await Object(articles["b" /* addFeedArticles */])(article.slug);
          article.favorited = true;
          article.favoritesCount += 1;
        }

        article.favoriteDisabled = false; // 允许点击
      } catch (err) {
        console.log(err);
      }
    },

    async deleteArticle(article) {
      try {
        article.deleteDisabled = true;
        const {
          data
        } = await Object(editor["b" /* deleteArticle */])(article.slug);

        if (JSON.stringify(data) === "{}") {
          this.$router.push("/");
        } else {
          console.log("出错了");
        }

        article.deleteDisabled = false;
      } catch (err) {
        console.log(err);
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/article/components/article-meta.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_article_metavue_type_script_lang_js_ = (article_metavue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/article/components/article-meta.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_article_metavue_type_script_lang_js_,
  article_metavue_type_template_id_099c0aa0_scoped_true_render,
  article_metavue_type_template_id_099c0aa0_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "099c0aa0",
  "2fc42434"
  
)

/* harmony default export */ var article_meta = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/article-comments.vue?vue&type=template&id=984cec9c&
var article_commentsvue_type_template_id_984cec9c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"card comment-form\"><div class=\"card-block\"><textarea placeholder=\"Write a comment...\" rows=\"3\" class=\"form-control\">"+_vm._ssrEscape(_vm._s(_vm.body))+"</textarea></div> <div class=\"card-footer\"><img src=\"http://i.imgur.com/Qr71crq.jpg\" class=\"comment-author-img\"> <button class=\"btn btn-sm btn-primary\">\n           Post Comment\n          </button></div></div> "),_vm._l((_vm.comments),function(comment){return _vm._ssrNode("<div class=\"card\">","</div>",[_vm._ssrNode("<div class=\"card-block\"><p class=\"card-text\">"+_vm._ssrEscape(_vm._s(comment.body))+"</p></div> "),_vm._ssrNode("<div class=\"card-footer\">","</div>",[_c('nuxt-link',{staticClass:"comment-author",attrs:{"to":{
              name:'profile',
              params:{
                username:comment.author.username
              }
            }}},[_c('img',{staticClass:"comment-author-img",attrs:{"src":comment.author.image}})]),_vm._ssrNode("\n           \n          "),_c('nuxt-link',{staticClass:"comment-author",attrs:{"to":{
            name:'profile',
            params:{
              username:comment.author.username
            }
          }}},[_vm._v(_vm._s(comment.author.username))]),_vm._ssrNode(" <span class=\"date-posted\">"+_vm._ssrEscape(_vm._s(_vm._f("date")(comment.createdAt,'MMM DD,YYYY')))+"</span> <span class=\"mod-options\"><i class=\"ion-trash-a\"></i></span>")],2)],2)})],2)}
var article_commentsvue_type_template_id_984cec9c_staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/components/article-comments.vue?vue&type=template&id=984cec9c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/article-comments.vue?vue&type=script&lang=js&
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

/* harmony default export */ var article_commentsvue_type_script_lang_js_ = ({
  props: {
    article: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      comments: [],
      body: ""
    };
  },

  async mounted() {
    const {
      data
    } = await Object(articles["i" /* getComments */])(this.article.slug);
    console.log({
      data
    });
    this.comments = data.comments;
  },

  methods: {
    async deleteComment(commentId) {
      const comments = this.comments;
      const index = comments.findIndex(item => item.id == commentId);
      comments.splice(index, 1);
      const slug = this.article.slug;
      await Object(articles["e" /* deleteComments */])(slug, commentId);
    },

    async onSubmit() {
      const {
        data
      } = await Object(articles["a" /* addComments */])(this.article.slug, this.body);
      this.comments.unshift(data.comment);
      this.body = '';
    }

  }
});
// CONCATENATED MODULE: ./pages/article/components/article-comments.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_article_commentsvue_type_script_lang_js_ = (article_commentsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/article/components/article-comments.vue



function article_comments_injectStyles (context) {
  
  
}

/* normalize component */

var article_comments_component = Object(componentNormalizer["a" /* default */])(
  components_article_commentsvue_type_script_lang_js_,
  article_commentsvue_type_template_id_984cec9c_render,
  article_commentsvue_type_template_id_984cec9c_staticRenderFns,
  false,
  article_comments_injectStyles,
  null,
  "1c9019d5"
  
)

/* harmony default export */ var article_comments = (article_comments_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/article-unlogin.vue?vue&type=template&id=1a33e073&
var article_unloginvue_type_template_id_1a33e073_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"col-xs-12 col-md-8 offset-md-2\">","</div>",[_vm._ssrNode("<div show-authed=\"true\" style=\"display: none;\">","</div>",[_c('list-errors',{staticClass:"ng-isolate-scope",attrs:{"from":"$ctrl.commentForm.errors"}},[_c('ul',{staticClass:"error-messages ng-hide",attrs:{"ng-show":"$ctrl.errors"}})]),_vm._ssrNode(" <form ng-submit=\"$ctrl.addComment()\" class=\"card comment-form ng-pristine ng-valid\"><div class=\"card-block\"><textarea placeholder=\"Write a comment...\" rows=\"3\" ng-model=\"$ctrl.commentForm.body\" class=\"form-control ng-pristine ng-untouched ng-valid ng-empty\"></textarea></div> <div class=\"card-footer\"><img class=\"comment-author-img\"> <button type=\"submit\" class=\"btn btn-sm btn-primary\">\n            Post Comment\n          </button></div></form>")],2),_vm._ssrNode(" "),_vm._ssrNode("<p show-authed=\"false\" style=\"display: inherit;\">","</p>",[_c('nuxt-link',{attrs:{"to":"/login"}},[_vm._v("Sign in")]),_vm._ssrNode(" or\n      "),_c('nuxt-link',{attrs:{"to":"/register"}},[_vm._v("sign up")]),_vm._ssrNode(" to add comments\n      on this article.\n    ")],2)],2)])}
var article_unloginvue_type_template_id_1a33e073_staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/components/article-unlogin.vue?vue&type=template&id=1a33e073&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/article-unlogin.vue?vue&type=script&lang=js&
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
/* harmony default export */ var article_unloginvue_type_script_lang_js_ = ({
  name: "ArticleUnlogin"
});
// CONCATENATED MODULE: ./pages/article/components/article-unlogin.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_article_unloginvue_type_script_lang_js_ = (article_unloginvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/article/components/article-unlogin.vue





/* normalize component */

var article_unlogin_component = Object(componentNormalizer["a" /* default */])(
  components_article_unloginvue_type_script_lang_js_,
  article_unloginvue_type_template_id_1a33e073_render,
  article_unloginvue_type_template_id_1a33e073_staticRenderFns,
  false,
  null,
  null,
  "a52d3ac2"
  
)

/* harmony default export */ var article_unlogin = (article_unlogin_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/index.vue?vue&type=script&lang=js&
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






/* harmony default export */ var articlevue_type_script_lang_js_ = ({
  name: 'ArticleIndex',
  components: {
    ArticleMeta: article_meta,
    ArticleComments: article_comments,
    ArticleUnlogin: article_unlogin
  },

  async asyncData({
    params
  }) {
    const {
      data
    } = await Object(articles["g" /* getArticle */])(params.slug);
    const {
      article
    } = data;
    const md = new external_markdown_it_default.a();
    article.body = md.render(article.body);
    return {
      article
    };
  },

  head() {
    return {
      title: `${this.article.title}-RellWorld`,
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'this.article.description'
      }]
    };
  },

  computed: { ...Object(external_vuex_["mapState"])(['user'])
  }
});
// CONCATENATED MODULE: ./pages/article/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_articlevue_type_script_lang_js_ = (articlevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/article/index.vue



function article_injectStyles (context) {
  
  
}

/* normalize component */

var article_component = Object(componentNormalizer["a" /* default */])(
  pages_articlevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  article_injectStyles,
  null,
  "406a54ba"
  
)

/* harmony default export */ var pages_article = __webpack_exports__["default"] = (article_component.exports);

/***/ })

};;
//# sourceMappingURL=2.js.map