exports.ids = [3];
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

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/editor/index.vue?vue&type=template&id=05d59215&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"editor-page"},[_vm._ssrNode("<div class=\"container page\" data-v-05d59215><div class=\"row\" data-v-05d59215><div class=\"col-md-10 offset-md-1 col-xs-12\" data-v-05d59215><form data-v-05d59215><fieldset data-v-05d59215><fieldset class=\"form-group\" data-v-05d59215><input type=\"text\" required=\"required\" placeholder=\"Article Title\""+(_vm._ssrAttr("value",(_vm.article.title)))+" class=\"form-control form-control-lg\" data-v-05d59215></fieldset> <fieldset class=\"form-group\" data-v-05d59215><input type=\"text\" required=\"required\" placeholder=\"What's this article about?\""+(_vm._ssrAttr("value",(_vm.article.description)))+" class=\"form-control\" data-v-05d59215></fieldset> <fieldset class=\"form-group\" data-v-05d59215><textarea rows=\"8\" placeholder=\"Write your article (in markdown)\" required=\"required\" class=\"form-control\" data-v-05d59215>"+(_vm._s(_vm.article.body))+"</textarea></fieldset> <fieldset class=\"form-group\" data-v-05d59215><input type=\"text\" placeholder=\"Enter tags\""+(_vm._ssrAttr("value",(_vm.newTag)))+" class=\"form-control\" data-v-05d59215> <div class=\"tag-list\" data-v-05d59215>"+(_vm._ssrList((_vm.article.tagList),function(tag,i){return ("<span class=\"tag-default tag-pill\" data-v-05d59215><i class=\"ion-close-round\" data-v-05d59215></i>"+_vm._ssrEscape("\n                  "+_vm._s(tag)+"\n              ")+"</span>")}))+"</div></fieldset> <button"+(_vm._ssrAttr("disabled",_vm.publishDisabled))+" type=\"button\" class=\"btn btn-lg pull-xs-right btn-primary\" data-v-05d59215>Publish Article</button></fieldset></form></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/editor/index.vue?vue&type=template&id=05d59215&scoped=true&

// EXTERNAL MODULE: ./api/articles.js
var articles = __webpack_require__(27);

// EXTERNAL MODULE: ./api/editor.js
var editor = __webpack_require__(30);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/editor/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var editorvue_type_script_lang_js_ = ({
  middleware: ["authenticated"],
  name: "EditorArticle",

  data() {
    return {
      newTag: '',
      publishDisabled: false,
      article: {
        title: "",
        description: "",
        body: "",
        tagList: []
      }
    };
  },

  components: {},

  mounted() {
    this.getArticle();
  },

  computed: {
    slug() {
      return this.$route.params.slug;
    }

  },
  methods: {
    async getArticle() {
      try {
        if (!this.slug) return;
        const {
          data
        } = await Object(articles["g" /* getArticle */])(this.slug);
        this.article = data.article;
      } catch (err) {
        console.log(err);
      }
    },

    enterTag() {
      this.article.tagList.push(this.newTag);
      this.newTag = '';
    },

    removeTag(i) {
      this.article.tagList.splice(i, 1);
    },

    async submitArticle() {
      try {
        this.publishDisabled = true;
        const {
          data
        } = this.slug ? await Object(editor["c" /* updateArticle */])(this.slug, this.article) : await Object(editor["a" /* createArticle */])(this.article);

        if (data.article) {
          this.article = data.article;
          this.$router.push({
            name: 'article',
            params: {
              slug: this.article.slug
            }
          });
        } else {
          console.log('出错了');
        }

        this.publishDisabled = false;
      } catch (err) {
        console.log(err);
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/editor/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_editorvue_type_script_lang_js_ = (editorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/editor/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_editorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "05d59215",
  "4b229cf6"
  
)

/* harmony default export */ var pages_editor = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=3.js.map