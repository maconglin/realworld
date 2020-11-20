/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{183:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return c})),r.d(t,"c",(function(){return l}));var n=r(60),o=function(data){return Object(n.b)({method:"POST",url:"/api/users/login",data:data})},c=function(data){return Object(n.b)({method:"POST",url:"/api/users/",data:data})},l=function(data){return Object(n.b)({method:"PUT",url:"/api/user",data:data})}},184:function(e,t,r){var n,o;!function(c){if(void 0===(o="function"==typeof(n=c)?n.call(t,r,t,e):n)||(e.exports=o),!0,e.exports=c(),!!0){var l=window.Cookies,d=window.Cookies=c();d.noConflict=function(){return window.Cookies=l,d}}}((function(){function e(){for(var i=0,e={};i<arguments.length;i++){var t=arguments[i];for(var r in t)e[r]=t[r]}return e}function t(s){return s.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function r(n){function o(){}function c(t,r,c){if("undefined"!=typeof document){"number"==typeof(c=e({path:"/"},o.defaults,c)).expires&&(c.expires=new Date(1*new Date+864e5*c.expires)),c.expires=c.expires?c.expires.toUTCString():"";try{var l=JSON.stringify(r);/^[\{\[]/.test(l)&&(r=l)}catch(e){}r=n.write?n.write(r,t):encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var d="";for(var m in c)c[m]&&(d+="; "+m,!0!==c[m]&&(d+="="+c[m].split(";")[0]));return document.cookie=t+"="+r+d}}function l(e,r){if("undefined"!=typeof document){for(var o={},c=document.cookie?document.cookie.split("; "):[],i=0;i<c.length;i++){var l=c[i].split("="),d=l.slice(1).join("=");r||'"'!==d.charAt(0)||(d=d.slice(1,-1));try{var m=t(l[0]);if(d=(n.read||n)(d,m)||t(d),r)try{d=JSON.parse(d)}catch(e){}if(o[m]=d,e===m)break}catch(e){}}return e?o[e]:o}}return o.set=c,o.get=function(e){return l(e,!1)},o.getJSON=function(e){return l(e,!0)},o.remove=function(t,r){c(t,"",e(r,{expires:-1}))},o.defaults={},o.withConverter=r,o}((function(){}))}))},268:function(e,t,r){"use strict";r.r(t);r(29);var n=r(3),o=(r(33),r(183)),c=r(184),l={middleware:"notAuthenticated",name:"LoginIndex",data:function(){return{user:{username:"",email:"",passworld:""},errors:{}}},computed:{isLogin:function(){return"login"===this.$route.name}},methods:{onSubmit:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!e.isLogin){t.next=7;break}return t.next=4,Object(o.a)({user:e.user});case 4:t.t0=t.sent,t.next=10;break;case 7:return t.next=9,Object(o.b)({user:e.user});case 9:t.t0=t.sent;case 10:r=t.t0,data=r.data,console.log(data),e.$store.commit("setUser",data.user),c.set("user",data.user),e.$router.push("/"),t.next=22;break;case 18:t.prev=18,t.t1=t.catch(0),console.dir(t.t1),e.errors=t.t1.response.data.errors;case 22:case"end":return t.stop()}}),t,null,[[0,18]])})))()}}},d=r(20),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"auth-page"},[r("div",{staticClass:"container page"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6 offset-md-3 col-xs-12"},[r("h1",{staticClass:"text-xs-center"},[e._v(e._s(e.isLogin?"Sign up":"Sign in"))]),e._v(" "),r("p",{staticClass:"text-xs-center"},[e.isLogin?r("nuxt-link",{attrs:{to:"./register"}},[e._v("Have an account?")]):r("nuxt-link",{attrs:{to:"./login"}},[e._v("Need an account?")])],1),e._v(" "),r("ul",{staticClass:"error-messages"},[e._l(e.errors,(function(t,n){return e._l(t,(function(t,o){return r("li",{key:o},[e._v("\n                  "+e._s(n)+" "+e._s(t)+"\n                ")])}))}))],2),e._v(" "),r("form",{on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[e.isLogin?e._e():r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.username,expression:"user.username"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Your Name",required:""},domProps:{value:e.user.username},on:{input:function(t){t.target.composing||e.$set(e.user,"username",t.target.value)}}})]),e._v(" "),r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"}],staticClass:"form-control form-control-lg",attrs:{type:"email",placeholder:"Email",required:""},domProps:{value:e.user.email},on:{input:function(t){t.target.composing||e.$set(e.user,"email",t.target.value)}}})]),e._v(" "),r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],staticClass:"form-control form-control-lg",attrs:{type:"password",placeholder:"Password",required:"",minlength:"8"},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||e.$set(e.user,"password",t.target.value)}}})]),e._v(" "),r("button",{staticClass:"btn btn-lg btn-primary pull-xs-right"},[e._v("\n              "+e._s(e.isLogin?"Sign up":"Sign in")+"\n            ")])])])])])])])}),[],!1,null,null,null);t.default=component.exports}}]);