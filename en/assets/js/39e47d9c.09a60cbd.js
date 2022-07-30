"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[408],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(n),f=o,y=m["".concat(s,".").concat(f)]||m[f]||l[f]||a;return n?r.createElement(y,c(c({ref:t},p),{},{components:n})):r.createElement(y,c({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var u=2;u<a;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},583:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>l,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={title:"JS \uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8\uc640 \uc2a4\ucf54\ud504 [\ubc88\uc5ed]",slug:"js-execution-context-and-scope",authors:["seungyoon"],tags:["JavaScript"],hide_table_of_contents:!1},c=void 0,i={permalink:"/en/blog/js-execution-context-and-scope",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2018-12-24-javascript-execution-context-and-scope-translation-korean.md",source:"@site/blog/2018-12-24-javascript-execution-context-and-scope-translation-korean.md",title:"JS \uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8\uc640 \uc2a4\ucf54\ud504 [\ubc88\uc5ed]",description:"\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\ub97c \ubc30\uc6b0\ub2e4 \ub9cc\ub098\uac8c \ub418\ub294 \uccab\ubc88\uc9f8 \ub09c\uad00. \uc2a4\ucf54\ud504\uc640 \uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8\ub77c\ub294 \uac1c\ub150\uc774\ub2e4.",date:"2018-12-24T00:00:00.000Z",formattedDate:"December 24, 2018",tags:[{label:"JavaScript",permalink:"/en/blog/tags/java-script"}],readingTime:18.195,hasTruncateMarker:!0,authors:[{name:"\uc624\uc2b9\uc724 (Seung-Yoon Oh)",title:"\ubc31\uc5d4\ub4dc \uc6f9 \uac1c\ubc1c\uc790",url:"https://github.com/feynubrick",email:"syoh8903@icloud.com",imageURL:"https://avatars.githubusercontent.com/u/26345285?v=4",key:"seungyoon"}],frontMatter:{title:"JS \uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8\uc640 \uc2a4\ucf54\ud504 [\ubc88\uc5ed]",slug:"js-execution-context-and-scope",authors:["seungyoon"],tags:["JavaScript"],hide_table_of_contents:!1}},s={authorsImageUrls:[void 0]},u=[],p={toc:u};function l(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\ub97c \ubc30\uc6b0\ub2e4 \ub9cc\ub098\uac8c \ub418\ub294 \uccab\ubc88\uc9f8 \ub09c\uad00. \uc2a4\ucf54\ud504\uc640 \uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8\ub77c\ub294 \uac1c\ub150\uc774\ub2e4.\n\uc774 \uac1c\ub150\uc744 \ub354 \uc798 \uc774\ud574\ud574 \ubcf4\uae30 \uc704\ud574 \uac80\uc0c9\uc744 \ud558\ub2e4\uac00 ",(0,o.kt)("a",{parentName:"p",href:"https://weeklywebwisdom.com/2017/09/08/javascript-execution-context-and-scope/"},"\uc88b\uc740 \ub0b4\uc6a9\uc774 \ub4e4\uc5b4\uc788\ub294 \uae00"),"\uc744 \ubc1c\uacac\ud588\ub2e4.\n\uc601\uc5b4\ub85c\ub41c \uae00\uc774\ub77c\uc11c \ub098 \uc790\uc2e0\uc5d0\uac8c \ub3c4\uc6c0\uc774 \ub420\uae4c \ud574\uc11c \uacf5\ubd80\ud558\ub294 \uacb8 \ubc88\uc5ed\uc744 \ud574\ubd24\ub2e4.\n\uc774 \uacfc\uc815\uc5d0\uc11c \ub0b4\uc6a9\uc744 \uc774\ud574\ud558\ub824\ud574\ubcf4\ub2c8 \uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8\uc640 \uc2a4\ucf54\ud504\uc5d0 \ub300\ud574 \uc870\uae08 \ub354 \uc798 \uc774\ud574\ud560 \uc218 \uc788\uac8c \ub418\uc5c8\ub2e4."))}l.isMDXComponent=!0}}]);