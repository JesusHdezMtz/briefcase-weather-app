(function(t){function e(e){for(var s,o,i=e[0],c=e[1],l=e[2],d=0,m=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&m.push(r[o][0]),r[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(m.length)m.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,i=1;i<a.length;i++){var c=a[i];0!==r[c]&&(s=!1)}s&&(n.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},r={app:0},n=[];function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/briefcase-weather-app/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"2ebb":function(t,e,a){"use strict";a("42f2")},"358a":function(t,e,a){},"420b":function(t,e,a){t.exports=a.p+"img/006-cloudy day.49e3993c.svg"},"42f2":function(t,e,a){},"4c24":function(t,e,a){t.exports=a.p+"img/044-sunny.b2d46ee2.svg"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("router-view")],1)},n=[],o=a("2877"),i=a("6544"),c=a.n(i),l=a("7496"),u={},d=Object(o["a"])(u,r,n,!1,null,null,null),m=d.exports;c()(d,{VApp:l["a"]});var p=a("8c4f"),h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"background full-size"},[a("v-row",{staticClass:"full-size mx-0"},[a("v-col",{staticClass:"pa-0 ma-0",attrs:{cols:"12",xs:"12",sm:"12",md:"4",lg:"4",xl:"4"}},[a("basePrincipalCard")],1),a("v-col",{staticClass:"pa-0 ma-0",attrs:{cols:"12",xs:"12",sm:"12",md:"8",lg:"8",xl:"8"}},[a("v-container",{staticClass:"px-5"},[a("v-row",t._l(t.days,(function(t,e){return a("v-col",{key:e,attrs:{cols:"12",xs:"12",sm:"6",md:"3",lg:"3",xl:"3"}},[a("baseSecondaryCard",{attrs:{time:t.time,state:t.weather_state,min_tem:t.min_temp,max_tem:t.max_temp}})],1)})),1)],1),a("v-container",{staticClass:"px-2"},[a("p",{staticClass:"white--text text-size-md font px-5"},[a("v-icon",{attrs:{size:"30",color:"yellow"}},[t._v("mdi-map-marker")]),t._v(" Today's highlight ")],1),a("v-row",{staticClass:"full-size mx-0"},t._l(t.cardsOneRow,(function(t,e){return a("v-col",{key:e,attrs:{cols:"12",xs:"12",sm:"12",md:"6",lg:"6",xl:"6"}},[a("baseTertiaryCard",{attrs:{title:t.title,data:t.data,measure:t.measure}})],1)})),1),a("v-row",{staticClass:"full-size mx-0"},t._l(t.cardsTwoRow,(function(t,e){return a("v-col",{key:e,attrs:{cols:"12",xs:"12",sm:"12",md:"6",lg:"6",xl:"6"}},[a("baseTertiaryCard",{attrs:{title:t.title,data:t.data,measure:t.measure}})],1)})),1)],1),a("div",{staticClass:"white--text text-size-xss px-5 pb-5"},[t._v("Icons made by "),a("a",{attrs:{href:"https://www.flaticon.com/authors/freepik",title:"Freepik"}},[t._v(" Freepik")]),t._v(" from "),a("a",{attrs:{href:"https://www.flaticon.com/",title:"Flaticon"}},[t._v("www.flaticon.com")])])],1)],1)],1)},_=[],f=a("5530"),w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"full-size"},[a("v-card",{staticClass:"text-center background-image",attrs:{width:"100%",height:"100%",color:"#31334a"}},[a("v-toolbar",{staticClass:"pt-4",attrs:{dark:"",color:"#31334a",flat:""}},[a("v-text-field",{attrs:{"hide-details":"","prepend-icon":"mdi-magnify","single-line":"",label:"Search City"},model:{value:t.location,callback:function(e){t.location=e},expression:"location"}}),a("v-btn",{staticClass:"mx-2 black--text",attrs:{rounded:"",color:"white",disabled:t.button},on:{click:t.searchWeather}},[t._v(" Search ")]),a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,r=e.attrs;return[a("v-icon",t._g(t._b({attrs:{color:"white",size:"39",dark:""}},"v-icon",r,!1),s),[t._v(" mdi-information ")])]}}])},[a("span",[t._v("Only the most popular cities in the world are enabled.")]),a("br"),a("span",[t._v("More information in: https://www.metaweather.com/")])])],1),a("div",{staticClass:"pt-16"}),a("v-img",{staticClass:"mx-auto",attrs:{src:t.setWeatherIcon,width:"100",height:"100"}}),a("p",{staticClass:"white--text text-size-xl font"},[t._v(" "+t._s(t.the_temp)),a("span",{staticClass:"grey--text text-size-md font"},[t._v("℃")])]),a("p",{staticClass:"white--text text-size-small"},[t._v(t._s(t.weather_state_name))]),a("v-icon",{staticClass:"mb-2 pt-10",attrs:{size:"25",color:"grey"}},[t._v("mdi-calendar")]),a("p",{staticClass:"grey--text text-size-xs"},[t._v("Today")]),a("p",{staticClass:"white--text text-size-smalll pb-5"},[a("v-icon",{staticClass:"mb-2",attrs:{size:"30",color:"yellow"}},[t._v("mdi-map-marker")]),t._v(" "+t._s(t.title)+" "+t._s(t.location_type)+" ")],1)],1),a("v-snackbar",{attrs:{timeout:t.timeout},scopedSlots:t._u([{key:"action",fn:function(e){var s=e.attrs;return[a("v-btn",t._b({attrs:{color:"red",text:""},on:{click:function(e){t.snackbar=!1}}},"v-btn",s,!1),[t._v(" Close ")])]}}]),model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v(" "+t._s(t.text)+" ")]),a("v-snackbar",{attrs:{timeout:t.timeout},scopedSlots:t._u([{key:"action",fn:function(e){var s=e.attrs;return[a("v-btn",t._b({attrs:{color:"red",text:""},on:{click:function(e){t.snackbar=!1}}},"v-btn",s,!1),[t._v(" Close ")])]}}]),model:{value:t.snackbar2,callback:function(e){t.snackbar2=e},expression:"snackbar2"}},[t._v(" "+t._s(t.text2)+" ")])],1)},b=[],v=(a("b65f"),a("ac1f"),a("5319"),a("2f62")),x=a("bc3a"),y=a.n(x),g=a("ad83"),C=a.n(g),k=a("85fb"),V=a.n(k),O=a("6760"),z=a.n(O),T=a("df2c"),j=a.n(T),S=a("7a99"),M=a.n(S),R=a("bbbc"),I=a.n(R),W=a("8161"),P=a.n(W),F=a("420b"),E=a.n(F),U=a("4c24"),$=a.n(U),A={name:"BasePrincipalCard",data:function(){return{location:"",button:!1,snackbar:!1,text:"CITY NOT FOUND",snackbar2:!1,text2:"WRITE A CITY",timeout:3e3}},computed:Object(f["a"])(Object(f["a"])({},Object(v["c"])(["title","location_type","time","weather_state_name","weather_state_abbr","the_temp"])),{},{setWeatherIcon:function(){switch(this.weather_state_abbr){case"sn":return C.a;case"sl":return V.a;case"h":return z.a;case"t":return j.a;case"hr":return M.a;case"lr":return I.a;case"s":return I.a;case"hc":return P.a;case"lc":return E.a;case"c":return $.a;default:return $.a}}}),methods:Object(f["a"])({searchWeather:function(){var t=this;""!=this.location?(this.button=!0,y.a.get("https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query="+this.location.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()).then((function(e){0==e.data.length?(t.button=!1,t.snackbar=!0):t.getWeather(e.data[0].woeid)}))):this.snackbar2=!0},getWeather:function(t){var e=this;y.a.get("https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/"+t).then((function(t){if(0!=t.data.length)return console.log(t),e.setValuesbyResponse(t.data),void(e.button=!1);e.button=!1,console.error("Woeid not found")}))},setValuesbyResponse:function(t){this.setValues([t.title,t.location_type,t.time,t.consolidated_weather[0].weather_state_name,t.consolidated_weather[0].weather_state_abbr,Math.trunc(t.consolidated_weather[0].the_temp),Math.trunc(t.consolidated_weather[0].min_temp),Math.trunc(t.consolidated_weather[0].max_temp),Math.trunc(t.consolidated_weather[0].wind_speed),Math.trunc(t.consolidated_weather[0].visibility),t.consolidated_weather[0].air_pressure,t.consolidated_weather[0].humidity]),this.setValuesTomorrow([t.consolidated_weather[1].applicable_date,t.consolidated_weather[1].weather_state_abbr,Math.trunc(t.consolidated_weather[1].min_temp),Math.trunc(t.consolidated_weather[1].max_temp)]),this.setValuesSecond([t.consolidated_weather[2].applicable_date,t.consolidated_weather[2].weather_state_abbr,Math.trunc(t.consolidated_weather[2].min_temp),Math.trunc(t.consolidated_weather[2].max_temp)]),this.setValuesThird([t.consolidated_weather[3].applicable_date,t.consolidated_weather[3].weather_state_abbr,Math.trunc(t.consolidated_weather[3].min_temp),Math.trunc(t.consolidated_weather[3].max_temp)]),this.setValuesFourth([t.consolidated_weather[4].applicable_date,t.consolidated_weather[4].weather_state_abbr,Math.trunc(t.consolidated_weather[4].min_temp),Math.trunc(t.consolidated_weather[4].max_temp)])}},Object(v["b"])(["setValues","setValuesTomorrow","setValuesSecond","setValuesThird","setValuesFourth"]))},B=A,N=(a("6c25"),a("8336")),D=a("b0af"),H=a("132d"),J=a("adda"),Y=a("2db4"),q=a("8654"),L=a("71d9"),G=a("3a2f"),K=Object(o["a"])(B,w,b,!1,null,"6123f2f8",null),Q=K.exports;c()(K,{VBtn:N["a"],VCard:D["a"],VIcon:H["a"],VImg:J["a"],VSnackbar:Y["a"],VTextField:q["a"],VToolbar:L["a"],VTooltip:G["a"]});var X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-card",{attrs:{width:"100%",height:"150",color:"#31334a"}},[a("v-container",{staticClass:"text-center"},[a("p",{staticClass:"grey--text text-size-xs"},[t._v(t._s(t.time))]),a("v-img",{staticClass:"mx-auto",attrs:{src:t.setWeatherIcon,width:"50",height:"50"}}),a("v-row",{staticClass:"pt-4"},[a("span",{staticClass:"mx-auto white--text text-size-xs"},[t._v(t._s(t.min_tem)+" "),a("span",{staticClass:"white--text text-size-xss"},[t._v("℃")])]),a("span",{staticClass:"mx-auto grey--text text-size-xs"},[t._v(t._s(t.max_tem)+" "),a("span",{staticClass:"grey--text text-size-xss"},[t._v("℃")])])])],1)],1)],1)},Z=[],tt={name:"BaseSecondaryCard",props:["time","state","min_tem","max_tem"],computed:{setWeatherIcon:function(){switch(this.state){case"sn":return C.a;case"sl":return V.a;case"h":return z.a;case"t":return j.a;case"hr":return M.a;case"lr":return I.a;case"s":return I.a;case"hc":return P.a;case"lc":return E.a;case"c":return $.a;default:return $.a}}}},et=tt,at=(a("6ece8"),a("a523")),st=a("0fd9"),rt=Object(o["a"])(et,X,Z,!1,null,"c3960be4",null),nt=rt.exports;c()(rt,{VCard:D["a"],VContainer:at["a"],VImg:J["a"],VRow:st["a"]});var ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"full-size"},[a("v-card",{attrs:{width:"100%",height:"200",color:"#31334a"}},[a("v-container",{staticClass:"text-center"},[a("p",{staticClass:"white--text text-size-xs pt-5"},[t._v(t._s(t.title))]),a("p",{staticClass:"white--text text-size-l font"},[t._v(t._s(t.data)),a("span",{staticClass:"grey--text text-size-md font"},[t._v(" "+t._s(t.measure))])])])],1)],1)},it=[],ct={props:["title","data","measure"]},lt=ct,ut=(a("2ebb"),Object(o["a"])(lt,ot,it,!1,null,"7a194774",null)),dt=ut.exports;c()(ut,{VCard:D["a"],VContainer:at["a"]});var mt={components:{basePrincipalCard:Q,baseSecondaryCard:nt,baseTertiaryCard:dt},data:function(){return{}},computed:Object(f["a"])({},Object(v["c"])(["cardsOneRow","cardsTwoRow","days"]))},pt=mt,ht=(a("a7e2"),a("62ad")),_t=Object(o["a"])(pt,h,_,!1,null,"4cfca10e",null),ft=_t.exports;c()(_t,{VCol:ht["a"],VContainer:at["a"],VIcon:H["a"],VRow:st["a"]}),s["a"].use(p["a"]);var wt=[{path:"/",name:"Home",component:ft}],bt=new p["a"]({base:"/briefcase-weather-app/",routes:wt}),vt=bt;s["a"].use(v["a"]);var xt=new v["a"].Store({state:{title:"Winterfell",location_type:"Castle",time:"Unknown date",weather_state_name:"Snow",weather_state_abbr:"sn",the_temp:-5,min_temp:-20,max_temp:-2,cardsOneRow:[{title:"Wind Speed",data:"15",measure:"mph"},{title:"Humidity",data:"89",measure:"%"}],cardsTwoRow:[{title:"Visibility",data:"1.8",measure:"miles"},{title:"Air Pressure",data:"998",measure:"mb"}],days:[{time:"Unknown date",weather_state:"sn",min_temp:-5,max_temp:-3},{time:"Unknown date",weather_state:"sn",min_temp:-10,max_temp:-5},{time:"Unknown date",weather_state:"sn",min_temp:-20,max_temp:-4},{time:"Unknown date",weather_state:"sn",min_temp:-10,max_temp:2}]},mutations:{setValues:function(t,e){t.title=e[0],t.location_type=e[1],t.time=e[2],t.weather_state_name=e[3],t.weather_state_abbr=e[4],t.the_temp=e[5],t.min_temp=e[6],t.max_temp=e[7],t.cardsOneRow[0].data=e[8],t.cardsTwoRow[0].data=e[9],t.cardsTwoRow[1].data=e[10],t.cardsOneRow[1].data=e[11]},setValuesTomorrow:function(t,e){t.days[0].time=e[0],t.days[0].weather_state=e[1],t.days[0].min_temp=e[2],t.days[0].max_temp=e[3]},setValuesSecond:function(t,e){t.days[1].time=e[0],t.days[1].weather_state=e[1],t.days[1].min_temp=e[2],t.days[1].max_temp=e[3]},setValuesThird:function(t,e){t.days[2].time=e[0],t.days[2].weather_state=e[1],t.days[2].min_temp=e[2],t.days[2].max_temp=e[3]},setValuesFourth:function(t,e){t.days[3].time=e[0],t.days[3].weather_state=e[1],t.days[3].min_temp=e[2],t.days[3].max_temp=e[3]}},actions:{},modules:{}}),yt=a("2106"),gt=a.n(yt),Ct=(a("5363"),a("f309"));s["a"].use(Ct["a"]);var kt=new Ct["a"]({icons:{iconfont:"mdi"}});s["a"].config.productionTip=!1,new s["a"]({router:vt,VueAxios:gt.a,axios:y.a,store:xt,vuetify:kt,render:function(t){return t(m)}}).$mount("#app")},6760:function(t,e,a){t.exports=a.p+"img/013-hail.52514eb9.svg"},"6a52":function(t,e,a){},"6c25":function(t,e,a){"use strict";a("6a52")},"6ece8":function(t,e,a){"use strict";a("8cb3")},"7a99":function(t,e,a){t.exports=a.p+"img/023-rain.d7eb9516.svg"},8161:function(t,e,a){t.exports=a.p+"img/026-cloud.688b0939.svg"},"85fb":function(t,e,a){t.exports=a.p+"img/045-snow.ac0ebcc2.svg"},"8cb3":function(t,e,a){},a7e2:function(t,e,a){"use strict";a("358a")},ad83:function(t,e,a){t.exports=a.p+"img/018-snowfall.ca610098.svg"},bbbc:function(t,e,a){t.exports=a.p+"img/035-rainy day.2c9edff8.svg"},df2c:function(t,e,a){t.exports=a.p+"img/020-storm.a59bdd65.svg"}});
//# sourceMappingURL=app.ee7683e5.js.map