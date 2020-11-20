(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{181:function(t,e,r){"use strict";r.d(e,"h",(function(){return c})),r.d(e,"k",(function(){return o})),r.d(e,"j",(function(){return l})),r.d(e,"b",(function(){return m})),r.d(e,"d",(function(){return d})),r.d(e,"g",(function(){return f})),r.d(e,"i",(function(){return v})),r.d(e,"a",(function(){return h})),r.d(e,"e",(function(){return O})),r.d(e,"c",(function(){return j})),r.d(e,"f",(function(){return _}));var n=r(60),c=function(t){return Object(n.b)({method:"GET",url:"/api/articles",params:t})},o=function(){return Object(n.b)({method:"GET",url:"/api/tags"})},l=function(t){return Object(n.b)({method:"GET",url:"/api/articles/feed",params:t})},m=function(t){return Object(n.b)({method:"POST",url:"/api/articles/".concat(t,"/favorite")})},d=function(t){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(t,"/favorite")})},f=function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t)})},v=function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t,"/comments")})},h=function(t,body){return Object(n.b)({method:"POST",url:"/api/articles/".concat(t,"/comments"),data:{body:body}})},O=function(t,e){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(t,"/comments/").concat(e)})},j=function(t){return Object(n.b)({method:"POST",url:"/api/profiles/".concat(t,"/follow")})},_=function(t){return Object(n.b)({method:"DELETE",url:"/api/profiles/".concat(t,"/follow")})}},185:function(t,e,r){"use strict";r.d(e,"a",(function(){return c})),r.d(e,"b",(function(){return o})),r.d(e,"c",(function(){return l}));var n=r(60),c=function(data){return Object(n.b)({method:"POST",url:"/api/articles",data:data})},o=function(t){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(t)})},l=function(t,data){return Object(n.b)({method:"PUT",url:"/api/articles/".concat(t),data:data})}},264:function(t,e,r){"use strict";r.r(e);r(77),r(30),r(31),r(13),r(61);var n=r(43),c=(r(29),r(3)),o=r(181),l=r(32),m=r(204),d=r.n(m),f=r(185);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var O={name:"ArticleMeta",props:{article:{type:Object,required:!0}},computed:h(h({},Object(l.b)(["user"])),{},{isAuthor:function(){var t;return this.article.author.username===(null===(t=this.user)||void 0===t?void 0:t.username)}}),data:function(){return{}},methods:{onFollow:function(article){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t.user){e.next=3;break}return e.abrupt("return",t.$router.push("/login"));case 3:if(article.followDisabled=!0,!article.author.following){e.next=10;break}return e.next=7,Object(o.f)(article.author.username);case 7:article.author.following=!1,e.next=13;break;case 10:return e.next=12,Object(o.c)(article.author.username);case 12:article.author.following=!0;case 13:article.followDisabled=!1,e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),console.log(e.t0);case 19:case"end":return e.stop()}}),e,null,[[0,16]])})))()},onFavorite:function(article){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t.user){e.next=3;break}return e.abrupt("return",t.$router.push("/login"));case 3:if(article.favoriteDisabled=!0,!article.favorited){e.next=11;break}return e.next=7,Object(o.d)(article.slug);case 7:article.favorited=!1,article.favoritesCount-=1,e.next=15;break;case 11:return e.next=13,Object(o.b)(article.slug);case 13:article.favorited=!0,article.favoritesCount+=1;case 15:article.favoriteDisabled=!1,e.next=21;break;case 18:e.prev=18,e.t0=e.catch(0),console.log(e.t0);case 21:case"end":return e.stop()}}),e,null,[[0,18]])})))()},deleteArticle:function(article){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var r,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,article.deleteDisabled=!0,e.next=4,Object(f.b)(article.slug);case 4:r=e.sent,data=r.data,"{}"===JSON.stringify(data)?t.$router.push("/"):console.log("出错了"),article.deleteDisabled=!1,e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))()}}},j=r(20),_=Object(j.a)(O,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"article-meta"},[r("nuxt-link",{attrs:{to:{name:"profile",params:{username:t.article.author.username}}}},[r("img",{attrs:{src:t.article.author.image}})]),t._v(" "),r("div",{staticClass:"info"},[r("nuxt-link",{staticClass:"author",attrs:{to:{name:"profile",params:{username:t.article.author.username}}}},[t._v(t._s(t.article.author.username))]),t._v(" "),r("span",{staticClass:"date"},[t._v(t._s(t._f("date")(t.article.createdAt,"MMM DD,YYYY")))])],1),t._v(" "),t.isAuthor?r("span",[r("nuxt-link",{staticClass:"btn btn-sm btn-outline-secondary",attrs:{to:{name:"editor",params:{slug:t.article.slug}},exact:""}},[r("i",{staticClass:"ion-edit"}),t._v(" Edit Article\n    ")]),t._v(" "),r("button",{staticClass:"btn btn-outline-danger btn-sm",attrs:{disabled:t.article.deleteDisabled},on:{click:function(e){return e.preventDefault(),t.deleteArticle(t.article)}}},[r("i",{staticClass:"ion-trash-a"}),t._v(" Delete Article\n    ")])],1):r("span",[r("button",{staticClass:"btn btn-sm btn-outline-secondary",class:{active:t.article.author.following},attrs:{disabled:t.article.followDisabled},on:{click:function(e){return t.onFollow(t.article)}}},[r("i",{staticClass:"ion-plus-round"}),t._v("\n       \n      "+t._s(t.article.author.following?"Unfollow ":"Follow ")+t._s(t.article.author.username)+"\n    ")]),t._v("\n      \n    "),r("button",{staticClass:"btn btn-sm btn-outline-primary",class:{active:t.article.favorited},attrs:{disabled:t.article.favoriteDisabled},on:{click:function(e){return t.onFavorite(t.article)}}},[r("i",{staticClass:"ion-heart"}),t._v("\n       \n      "+t._s(t.article.favorited?"Unfavorite Article ":"Favorite Article")+"\n      "),t.article.favoritesCount>0?r("span",{staticClass:"counter"},[t._v("("+t._s(t.article.favoritesCount)+")")]):t._e()])])],1)}),[],!1,null,"77e2d0ec",null).exports,C=(r(260),{props:{article:{type:Object,required:!0}},data:function(){return{comments:[],body:""}},mounted:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var r,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.i)(t.article.slug);case 2:r=e.sent,data=r.data,console.log({data:data}),t.comments=data.comments;case 6:case"end":return e.stop()}}),e)})))()},methods:{deleteComment:function(t){var e=this;return Object(c.a)(regeneratorRuntime.mark((function r(){var n,c,l;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=e.comments,c=n.findIndex((function(e){return e.id==t})),n.splice(c,1),l=e.article.slug,r.next=6,Object(o.e)(l,t);case 6:case"end":return r.stop()}}),r)})))()},onSubmit:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var r,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.a)(t.article.slug,t.body);case 2:r=e.sent,data=r.data,t.comments.unshift(data.comment),t.body="";case 6:case"end":return e.stop()}}),e)})))()}}}),w={name:"ArticleUnlogin"};function y(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var x={name:"ArticleIndex",components:{ArticleMeta:_,ArticleComments:Object(j.a)(C,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"card comment-form"},[r("div",{staticClass:"card-block"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.body,expression:"body"}],staticClass:"form-control",attrs:{placeholder:"Write a comment...",rows:"3"},domProps:{value:t.body},on:{input:function(e){e.target.composing||(t.body=e.target.value)}}})]),t._v(" "),r("div",{staticClass:"card-footer"},[r("img",{staticClass:"comment-author-img",attrs:{src:"http://i.imgur.com/Qr71crq.jpg"}}),t._v(" "),r("button",{staticClass:"btn btn-sm btn-primary",on:{click:function(e){return t.onSubmit()}}},[t._v("\n           Post Comment\n          ")])])]),t._v(" "),t._l(t.comments,(function(e){return r("div",{key:e.id,staticClass:"card"},[r("div",{staticClass:"card-block"},[r("p",{staticClass:"card-text"},[t._v(t._s(e.body))])]),t._v(" "),r("div",{staticClass:"card-footer"},[r("nuxt-link",{staticClass:"comment-author",attrs:{to:{name:"profile",params:{username:e.author.username}}}},[r("img",{staticClass:"comment-author-img",attrs:{src:e.author.image}})]),t._v("\n           \n          "),r("nuxt-link",{staticClass:"comment-author",attrs:{to:{name:"profile",params:{username:e.author.username}}}},[t._v(t._s(e.author.username))]),t._v(" "),r("span",{staticClass:"date-posted"},[t._v(t._s(t._f("date")(e.createdAt,"MMM DD,YYYY")))]),t._v(" "),r("span",{staticClass:"mod-options",on:{click:function(r){return t.deleteComment(e.id)}}},[r("i",{staticClass:"ion-trash-a"})])],1)])}))],2)}),[],!1,null,null,null).exports,ArticleUnlogin:Object(j.a)(w,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"col-xs-12 col-md-8 offset-md-2"},[e("div",{staticStyle:{display:"none"},attrs:{"show-authed":"true"}},[e("list-errors",{staticClass:"ng-isolate-scope",attrs:{from:"$ctrl.commentForm.errors"}},[e("ul",{staticClass:"error-messages ng-hide",attrs:{"ng-show":"$ctrl.errors"}})]),this._v(" "),this._m(0)],1),this._v(" "),e("p",{staticStyle:{display:"inherit"},attrs:{"show-authed":"false"}},[e("nuxt-link",{attrs:{to:"/login"}},[this._v("Sign in")]),this._v(" or\n      "),e("nuxt-link",{attrs:{to:"/register"}},[this._v("sign up")]),this._v(" to add comments\n      on this article.\n    ")],1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("form",{staticClass:"card comment-form ng-pristine ng-valid",attrs:{"ng-submit":"$ctrl.addComment()"}},[e("div",{staticClass:"card-block"},[e("textarea",{staticClass:"form-control ng-pristine ng-untouched ng-valid ng-empty",attrs:{placeholder:"Write a comment...",rows:"3","ng-model":"$ctrl.commentForm.body"}})]),this._v(" "),e("div",{staticClass:"card-footer"},[e("img",{staticClass:"comment-author-img"}),this._v(" "),e("button",{staticClass:"btn btn-sm btn-primary",attrs:{type:"submit"}},[this._v("\n            Post Comment\n          ")])])])}],!1,null,null,null).exports},asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var r,n,data,article,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.params,e.next=3,Object(o.g)(r.slug);case 3:return n=e.sent,data=n.data,article=data.article,c=new d.a,article.body=c.render(article.body),e.abrupt("return",{article:article});case 9:case"end":return e.stop()}}),e)})))()},head:function(){return{title:"".concat(this.article.title,"-RellWorld"),meta:[{hid:"description",name:"description",content:"this.article.description"}]}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(l.b)(["user"]))},k=Object(j.a)(x,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"article-page"},[r("div",{staticClass:"banner"},[r("div",{staticClass:"container"},[r("h1",[t._v(t._s(t.article.title))]),t._v(" "),r("ArticleMeta",{attrs:{article:t.article}})],1)]),t._v(" "),r("div",{staticClass:"container page"},[r("div",{staticClass:"row article-content"},[r("div",{staticClass:"col-md-12",domProps:{innerHTML:t._s(t.article.body)}})]),t._v(" "),r("hr"),t._v(" "),r("div",{staticClass:"article-actions"},[r("ArticleMeta",{attrs:{article:t.article}})],1),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-xs-12 col-md-8 offset-md-2"},[t.user?r("ArticleComments",{attrs:{article:t.article}}):r("ArticleUnlogin")],1)])])])])}),[],!1,null,null,null);e.default=k.exports}}]);