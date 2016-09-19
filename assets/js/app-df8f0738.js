!function(){"use strict";angular.module("app",["ngSanitize","services"]).config(["$locationProvider",function(t){t.html5Mode(!0)}]).controller("AppController",["api","$timeout","$scope","request","$location","$window",function(t,n,e,r,o,a){function i(){$(".page .container > .projects .project .image").css("height",200*$(".page .container > .projects .project .image").width()/380)}function u(){}$(document).ready(function(){e.$apply(function(){n(function(){$(".pages").css("opacity",1),n(function(){$(".page .container > .contact").css("opacity",1),n(function(){$(".page .container > .heading, .page .container > .description").css("opacity",1),n(function(){$(".page .container > .projects").css("opacity",1),n(function(){$(".page .container > .copyright").css("opacity",1)},150)},150)},150)},150)},150)}),i(),u()}),$(window).resize(function(){i()}),$(window).scroll(function(){u()}),$("a").on("dragstart",function(t){return t.preventDefault(),!1})}])}(),function(){"use strict";angular.module("services.api",[]).service("api",["request",function(t){function n(n,e){n||(n={}),t.get("http://localhost:8888/images?radius=100000&longitude=0&latitude=0",null,function(t,n,r){e(t,n,r)})}var e=this;e.getImages=n}])}(),function(){"use strict";angular.module("services.request",[]).service("request",["$http","$q",function(t,n){function e(t,n,e){var r=n?"?"+l(n):"",o={method:"GET",url:t+r,withCredentials:!0};s(o,e)}function r(t,n,e){var r={method:"POST",url:t,data:n,withCredentials:!0};s(r,e)}function o(t,n,e){var r={method:"POST",url:t,withCredentials:!0};r.transformRequest=angular.identity,r.headers={"Content-Type":void 0},r.data=d(n),s(r,e)}function a(t,n,e){var r={method:"PUT",url:t,data:n,withCredentials:!0};s(r,e)}function i(t,n,e){var r={method:"PUT",url:t,withCredentials:!0};r.transformRequest=angular.identity,r.headers={"Content-Type":void 0},r.data=d(n),s(r,e)}function u(t,n,e){var r={method:"DELETE",url:t,data:n,withCredentials:!0};s(r,e)}function c(t,n,e){var r={method:"DELETE",url:t,withCredentials:!0};r.transformRequest=angular.identity,r.headers={"Content-Type":void 0},r.data=d(n),s(r,e)}function s(n,e){t(n).then(function(t){e(null,t.data,{status:t.status,url:t.config.url})},function(t){e(t.data.error,null,{status:t.status,url:t.config.url})})}function l(t){var n,e,r,o,a,i,u,c="";for(n in t)if(e=t[n],e instanceof Array)for(u=0;u<e.length;++u)a=e[u],r=n+"["+u+"]",i={},i[r]=a,c+=param(i)+"&";else if(e instanceof Object)for(o in e)a=e[o],r=n+"["+o+"]",i={},i[r]=a,c+=param(i)+"&";else void 0!==e&&null!==e&&(c+=encodeURIComponent(n)+"="+encodeURIComponent(e)+"&");return c.length?c.substr(0,c.length-1):c}function d(t){var n=new FormData;for(var e in t)if(t.hasOwnProperty(e)){var r=t[e];n.append(e,r)}return n}var f=this;f.get=e,f.post=r,f.multipartPost=o,f.put=a,f.multipartPut=i,f["delete"]=u,f.multipartDelete=c}])}(),function(){"use strict";angular.module("services",["services.utils","services.request","services.api"])}(),function(){"use strict";angular.module("services.utils",[]).service("utils",[function(){function t(t){for(var n=0,e=t.length,r=0;r<e;r++)t[r]>n&&(n=t[r]);return n}function n(t,n){return Math.floor(Math.random()*(n-t))+t}function e(t,n){n=n||"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(var e=[],r=0;r<t;r++){var o=Math.floor(Math.random()*n.length);e.push(n.substring(o,o+1))}return e.join("")}function r(t){var n=";base64,";if(t.indexOf(n)==-1){var e=t.split(","),r=e[0].split(":")[1],o=decodeURIComponent(e[1]);return new Blob([o],{type:r})}for(var e=t.split(n),r=e[0].split(":")[1],o=window.atob(e[1]),a=o.length,i=new Uint8Array(a),u=0;u<a;++u)i[u]=o.charCodeAt(u);return new Blob([i],{type:r})}function o(t,n){var e=document.createElement("a");document.body.appendChild(e),e.style="display: none";var r=window.URL.createObjectURL(t);e.href=r,e.download=n,e.click(),window.URL.revokeObjectURL(r)}function a(t){function n(t){var r=e(t.data().$isolateScope),o=e(t.data().$scope),a=o.concat(r);return angular.forEach(t.children(),function(t){a=a.concat(n(angular.element(t)))}),a}function e(t){return t?t.$$watchers||[]:[]}t=angular.element(t||document.documentElement);return n(t)}function i(t,n){if(t&&n)return t.replace(/\:(\w+)/g,function(t,e){if(n.hasOwnProperty(e))return n[e]})}var u=this;u.maxNumberInArray=t,u.randomInteger=n,u.randomString=e,u.dataURLToBlob=r,u.saveBlob=o,u.getWatchers=a,u.merge=i}])}();