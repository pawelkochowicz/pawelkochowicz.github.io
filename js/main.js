!function(c){var e={};function n(r){if(e[r])return e[r].exports;var t=e[r]={i:r,l:!1,exports:{}};return c[r].call(t.exports,t,t.exports,n),t.l=!0,t.exports}n.m=c,n.c=e,n.d=function(c,e,r){n.o(c,e)||Object.defineProperty(c,e,{enumerable:!0,get:r})},n.r=function(c){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(c,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(c,"__esModule",{value:!0})},n.t=function(c,e){if(1&e&&(c=n(c)),8&e)return c;if(4&e&&"object"==typeof c&&c&&c.__esModule)return c;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:c}),2&e&&"string"!=typeof c)for(var t in c)n.d(r,t,function(e){return c[e]}.bind(null,t));return r},n.n=function(c){var e=c&&c.__esModule?function(){return c.default}:function(){return c};return n.d(e,"a",e),e},n.o=function(c,e){return Object.prototype.hasOwnProperty.call(c,e)},n.p="",n(n.s=0)}([function(module,exports,__webpack_require__){"use strict";eval('\r\nconsole.log(`Hello world!`);\r\n\r\n\r\nconst list = document.querySelector(\'.list--js\')\r\n\r\nfetch(\'https://api.github.com/users/pawelkochowicz/repos?sort=updated&direction=desc\')\r\n    .then(resp => resp.json())\r\n    .then(resp => {\r\n        const repos = resp;\r\n        for (const repo of repos) {\r\n            const { name, description, html_url, homepage } = repo;\r\n            list.innerHTML +=\r\n                `<li class="project">\r\n          <img class="project__logo" src="../assets/img/Github Icon.svg" alt="#">\r\n          <h4 class="project__title">${name}</h4>\r\n          <p class="project__description">${description}</p>\r\n          <footer class="project__links">\r\n            <a class="project__links--demo" href="${homepage}">Demo</a>\r\n            <a class="project__links--github" href="${html_url}">Github</a>\r\n          </footer>\r\n          </li>`\r\n        }\r\n    })\r\n\r\n    .catch(err => {\r\n        console.log("Can\'t connect to github api.")\r\n    })\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhO0FBQ2I7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsd0NBQXdDO0FBQzNEO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxLQUFLO0FBQzVDLDRDQUE0QyxZQUFZO0FBQ3hEO0FBQ0Esb0RBQW9ELFNBQVM7QUFDN0Qsc0RBQXNELFNBQVM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSyIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbmNvbnNvbGUubG9nKGBIZWxsbyB3b3JsZCFgKTtcclxuXHJcblxyXG5jb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QtLWpzJylcclxuXHJcbmZldGNoKCdodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL3Bhd2Vsa29jaG93aWN6L3JlcG9zP3NvcnQ9dXBkYXRlZCZkaXJlY3Rpb249ZGVzYycpXHJcbiAgICAudGhlbihyZXNwID0+IHJlc3AuanNvbigpKVxyXG4gICAgLnRoZW4ocmVzcCA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVwb3MgPSByZXNwO1xyXG4gICAgICAgIGZvciAoY29uc3QgcmVwbyBvZiByZXBvcykge1xyXG4gICAgICAgICAgICBjb25zdCB7IG5hbWUsIGRlc2NyaXB0aW9uLCBodG1sX3VybCwgaG9tZXBhZ2UgfSA9IHJlcG87XHJcbiAgICAgICAgICAgIGxpc3QuaW5uZXJIVE1MICs9XHJcbiAgICAgICAgICAgICAgICBgPGxpIGNsYXNzPVwicHJvamVjdFwiPlxyXG4gICAgICAgICAgPGltZyBjbGFzcz1cInByb2plY3RfX2xvZ29cIiBzcmM9XCIuLi9hc3NldHMvaW1nL0dpdGh1YiBJY29uLnN2Z1wiIGFsdD1cIiNcIj5cclxuICAgICAgICAgIDxoNCBjbGFzcz1cInByb2plY3RfX3RpdGxlXCI+JHtuYW1lfTwvaDQ+XHJcbiAgICAgICAgICA8cCBjbGFzcz1cInByb2plY3RfX2Rlc2NyaXB0aW9uXCI+JHtkZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICA8Zm9vdGVyIGNsYXNzPVwicHJvamVjdF9fbGlua3NcIj5cclxuICAgICAgICAgICAgPGEgY2xhc3M9XCJwcm9qZWN0X19saW5rcy0tZGVtb1wiIGhyZWY9XCIke2hvbWVwYWdlfVwiPkRlbW88L2E+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzPVwicHJvamVjdF9fbGlua3MtLWdpdGh1YlwiIGhyZWY9XCIke2h0bWxfdXJsfVwiPkdpdGh1YjwvYT5cclxuICAgICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICAgICAgPC9saT5gXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkNhbid0IGNvbm5lY3QgdG8gZ2l0aHViIGFwaS5cIilcclxuICAgIH0pXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n')}]);