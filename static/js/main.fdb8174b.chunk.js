(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{112:function(e,t,n){},113:function(e,t,n){"use strict";n.r(t);var i=n(1),a=n.n(i),o=n(189),r=n(40);test("renders learn react link",(function(){var e=(0,Object(o.a)(a.a.createElement(r.default,null)).getByText)(/learn react/i);expect(e).toBeInTheDocument()}))},156:function(e,t,n){"use strict";n.r(t);n(478)},196:function(e,t,n){e.exports=n(45)},200:function(e,t,n){var i={".":45,"./":45,"./App":40,"./App.css":53,"./App.js":40,"./App.test":113,"./App.test.js":113,"./Images/AlexaTimetable.jpg":472,"./Images/Spotify.png":473,"./Images/WitchPython.PNG":474,"./Images/WitchUnity.PNG":475,"./Images/colour scheme.PNG":476,"./Project":76,"./Project.js":76,"./ProjectData":77,"./ProjectData.js":77,"./ProjectGrid":75,"./ProjectGrid.js":75,"./Socials":74,"./Socials.js":74,"./index":45,"./index.css":112,"./index.js":45,"./logo.svg":477,"./serviceWorker":78,"./serviceWorker.js":78,"./setupTests":156,"./setupTests.js":156};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}a.keys=function(){return Object.keys(i)},a.resolve=o,e.exports=a,a.id=200},40:function(e,t,n){"use strict";n.r(t);var i=n(41),a=n(42),o=n(44),r=n(43),c=n(1),s=n.n(c),l=(n(53),n(74)),u=n(75),m=n(77),p=n(194),d=(n(617),function(e){Object(o.a)(n,e);var t=Object(r.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement("div",null,s.a.createElement("h1",{className:"header"},"Janey Slinger Portfolio"),s.a.createElement(l.default,null)),s.a.createElement("div",null,s.a.createElement(p.a,{className:"content"},s.a.createElement(u.default,{data:m.default}))))}}]),n}(c.Component));t.default=d},45:function(e,t,n){"use strict";n.r(t);var i=n(1),a=n.n(i),o=n(20),r=n.n(o),c=(n(112),n(40)),s=n(78);r.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(c.default,null)),document.getElementById("root")),s.unregister()},472:function(e,t,n){e.exports=n.p+"static/media/AlexaTimetable.0e81101b.jpg"},473:function(e,t,n){e.exports=n.p+"static/media/Spotify.30221af5.png"},474:function(e,t,n){e.exports=n.p+"static/media/WitchPython.e931d73e.PNG"},475:function(e,t,n){e.exports=n.p+"static/media/WitchUnity.7a1ca09b.PNG"},476:function(e,t,n){e.exports=n.p+"static/media/colour scheme.b7732b49.PNG"},477:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},53:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var i=n(41),a=n(42),o=n(44),r=n(43),c=n(1),s=n.n(c),l=(n(53),function(e){Object(o.a)(n,e);var t=Object(r.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={},e}return Object(a.a)(n,[{key:"render",value:function(){return s.a.createElement("div",{className:"Socials"},s.a.createElement("p",{className:"social"},"janeyslinger@gmail.com"),s.a.createElement("p",{className:"social"},"Twitter"),s.a.createElement("p",{className:"social"},"Linkedin"),s.a.createElement("p",{className:"social"},"Github"))}}]),n}(c.Component));t.default=l},75:function(e,t,n){"use strict";n.r(t);var i=n(41),a=n(42),o=n(44),r=n(43),c=n(1),s=n.n(c),l=n(76),u=function(e){Object(o.a)(n,e);var t=Object(r.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){var e=this.props.data.projects;return s.a.createElement("div",null,e.map((function(e){return s.a.createElement(l.default,{key:e.name,project:e})})))}}]),n}(c.Component);t.default=u},76:function(e,t,n){"use strict";n.r(t);var i=n(1),a=n.n(i),o=n(28),r=n(195);n(53);t.default=function(e){return a.a.createElement(o.a,{style:{border:"2px solid #BAB2B5"}},a.a.createElement(o.a.Img,{variant:"top",src:n(200)(""+e.project.img)}),a.a.createElement(o.a.Body,{className:"cardContent"},a.a.createElement(o.a.Title,null,e.project.name),a.a.createElement(o.a.Subtitle,null,"Python"),a.a.createElement(o.a.Text,null,e.project.description),a.a.createElement(o.a.Footer,null,a.a.createElement(r.a,{style:{backgroundColor:"#AC3B61",border:"2px solid #AC3B61",color:"white",borderRadius:"3px",textTransform:"uppercase"},href:e.project.url},"View Code"))))}},77:function(e,t,n){"use strict";n.r(t);t.default={projects:[{name:"Alexa Timetable Skill",description:"An Alexa Skill to load an ical file (designed for University of Nottingham timetables) and provide information specialised to a university timetable format. Developed for my 3rd year dissertation.",img:"./Images/AlexaTimetable.jpg",url:"https://github.com/JaneySlinger/Alexa-Timetable-Skill-Dissertation-Code"},{name:"Witch Game Unity",description:"A puzzle and item collection game about a witch gathering ingredients for a potion. Made in Unity using C#",img:"./Images/WitchUnity.PNG",url:"https://github.com/JaneySlinger/Witch-Game-Unity"},{name:"Witch Game Python",description:"A top-down game about a witch finding ingredients for her potion. Uses python arcade library.",img:"./Images/WitchPython.PNG",url:"https://github.com/JaneySlinger/Witch_Game_01"},{name:"Spotfiy Top Tracks for the Month",description:"ReactJS website to load the most listened to songs on Spotify for a user in the past 4 months.",img:"./Images/Spotify.png",url:"https://github.com/JaneySlinger/spotify-top-month-tracks"},{name:"Alexa Timetable Skill",description:"An Alexa Skill to load an ical file (designed for University of Nottingham timetables) and provide information specialised to a university timetable format. Developed for my 3rd year dissertation.",img:"./Images/AlexaTimetable.jpg",url:"https://github.com/JaneySlinger/Alexa-Timetable-Skill-Dissertation-Code"},{name:"Witch Game Unity",description:"A puzzle and item collection game about a witch gathering ingredients for a potion. Made in Unity using C#",img:"./Images/WitchUnity.PNG",url:"https://github.com/JaneySlinger/Witch-Game-Unity"},{name:"Witch Game Python",description:"A top-down game about a witch finding ingredients for her potion. Uses python arcade library.",img:"./Images/WitchPython.PNG",url:"https://github.com/JaneySlinger/Witch_Game_01"},{name:"Spotfiy Top Tracks for the Month",description:"ReactJS website to load the most listened to songs on Spotify for a user in the past 4 months.",img:"./Images/Spotify.png",url:"https://github.com/JaneySlinger/spotify-top-month-tracks"}]}},78:function(e,t,n){"use strict";n.r(t),n.d(t,"register",(function(){return a})),n.d(t,"unregister",(function(){return r}));var i=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function a(e){if("serviceWorker"in navigator){if(new URL("/portfolio",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/portfolio","/service-worker.js");i?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var i=n.headers.get("content-type");404===n.status||null!=i&&-1===i.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):o(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):o(t,e)}))}}function o(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}function r(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}}},[[196,1,2]]]);
//# sourceMappingURL=main.fdb8174b.chunk.js.map