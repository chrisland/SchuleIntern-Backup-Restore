(function(e){function t(t){for(var a,r,l=t[0],o=t[1],u=t[2],c=0,v=[];c<l.length;c++)r=l[c],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&v.push(s[r][0]),s[r]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);d&&d(t);while(v.length)v.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,l=1;l<n.length;l++){var o=n[l];0!==s[o]&&(a=!1)}a&&(i.splice(t--,1),e=r(r.s=n[0]))}return e}var a={},s={app:0},i=[];function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var d=o;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("551c"),n("8a81");var a=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e._m(0),e._m(1),"server"==e.steps?n("Server",{attrs:{apiRoot:e.apiRoot}}):e._e(),"settings"==e.steps?n("Settings",{attrs:{apiRoot:e.apiRoot,userValues:e.values}}):e._e(),"install"==e.steps?n("Restore",{attrs:{apiRoot:e.apiRoot,userValues:e.values}}):e._e()],1)},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",[n("ul",[n("li",[n("a",{attrs:{href:"https://www.schule-intern.de",target:"_blank"}},[e._v("SchuleIntern Homepage")])]),n("li",[n("a",{attrs:{href:"http://doku.schule-intern.de/display/ADMINHANDBUCH",target:"_blank"}},[e._v("Adminhandbuch")])]),n("li",[n("a",{attrs:{href:"https://www.schule-intern.de/forum/",target:"_blank"}},[e._v("Support Forum")])]),n("li",[n("a",{attrs:{href:"https://www.github.com/schuleintern",target:"_blank"}},[e._v("Github")])]),n("li",[e._v("Backup-Restore Version 0.1")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[n("div",{staticClass:"logo"}),n("div",{staticClass:"title"},[n("h2",[e._v("Wiederherstellung")]),n("h1",[e._v("SchuleIntern")])])])}],r=(n("ac6a"),n("cadf"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"server"},[a("div",{staticClass:"outer-box"},[e._m(0),a("div",{staticClass:"box box-bg-white"},[a("h3",[e._v("Server Test")]),a("ul",[a("li",[a("div",{staticClass:"box-long"},[e._v("\n            Schreibrechte im Übergeordnetem Verzeichnis\n            "),a("div",{staticClass:"info"},[e._v("\n              "+e._s(e.values.upperDir)+"\n            ")])]),a("div",{staticClass:"box-icon"},[!e.loading&&e.values.upperDirWriteable?a("img",{attrs:{src:n("7bae"),alt:"ok",title:"ok"}}):e.loading||e.values.upperDirWriteable?e._e():a("img",{attrs:{src:n("b463"),alt:"error",title:"error"}}),e.loading?a("img",{attrs:{src:n("8f5e"),alt:"loading",title:"loading"}}):e._e()])]),a("li",[a("div",{staticClass:"box-long"},[e._v("\n            PHP Version\n            "),a("div",{staticClass:"info"},[e._v("\n              Min. 7.2 - Installiert: "+e._s(e.values.phpVersion)+"\n            ")])]),a("div",{staticClass:"box-icon"},[!e.loading&&e.values.phpVersionCompare?a("img",{attrs:{src:n("7bae"),alt:"ok",title:"ok"}}):e.loading||0!=e.values.phpVersionCompare?e._e():a("img",{attrs:{src:n("b463"),alt:"error",title:"error"}}),e.loading?a("img",{attrs:{src:n("8f5e"),alt:"loading",title:"loading"}}):e._e()])]),a("li",[a("div",{staticClass:"box-long"},[e._v("\n            PHP Zip Erweiterung\n          ")]),a("div",{staticClass:"box-icon"},[!e.loading&&e.values.zipEnable?a("img",{attrs:{src:n("7bae"),alt:"ok",title:"ok"}}):e.loading||0!=e.values.zipEnable?e._e():a("img",{attrs:{src:n("b463"),alt:"error",title:"error"}}),e.loading?a("img",{attrs:{src:n("8f5e"),alt:"loading",title:"loading"}}):e._e()])])]),a("div",{staticClass:"btn-box"},[0==e.btnState?a("button",{staticClass:"btn",on:{click:e.refresh}},[e._v("Erneut Testen")]):e._e()])])]),a("div",{staticClass:"btn-outer-box"},[e.btnState?a("button",{staticClass:"btn",on:{click:e.next}},[e._v("Weiter")]):e._e()])])}),l=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"boxlist"},[n("h2",[e._v("Wiederherstellen Ihres SchuleIntern Backups.")]),n("p",[e._v("\n        Bitte legen Sie sich folgende Daten bereit:\n      ")]),n("ul",{staticClass:"ullist"},[n("li",[e._v("SchuleIntern Backupdatei im *.zip Format")]),n("li",[e._v("Zugangsdaten für Ihre MySQL / MariaDB Datenbank")])])])}],o=n("bc3a"),u=n.n(o),d={name:"Server",props:{apiRoot:String},data:function(){return{values:!1,btnState:!1,loading:!1}},created:function(){this.init()},methods:{init:function(){var e=this;this.loading=!0,u.a.get(this.apiRoot+"restore.php?action=server").then((function(t){e.setData(t.data)})).catch((function(t){e.setData({upperDirWriteable:!1,phpVersionCompare:!1,phpVersion:!1}),console.error(t)}))},setData:function(e){this.values=e,this.required()?this.btnState=!0:this.btnState=!1,this.loading=!1},required:function(){return!!(this.values.upperDirWriteable&&this.values.phpVersionCompare&&this.values.phpVersion)},refresh:function(){this.init()},next:function(){if(!this.required())return!1;EventBus.$emit("done--step",{server:!0})}}},c=d,v=n("2877"),p=Object(v["a"])(c,r,l,!1,null,"947a9994",null),m=p.exports,g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"settings"},[n("form",{on:{submit:function(e){e.preventDefault()}}},[n("div",{staticClass:"btn-outer-box"},[n("button",{staticClass:"btn",on:{click:e.install}},[e._v("Installieren")])]),n("div",{staticClass:"outer-box"},[n("div",{staticClass:"box box-bg-white"},[n("h3",{staticClass:"header-box green"},[e._v("Einstellungen")]),n("ul",[n("li",{staticClass:"box-input"},[e._v("\n            Schulname\n            "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.values.name,expression:"values.name"}],attrs:{type:"text",name:"name",placeholder:"z.B. Staatliches Digitalgymnasium",required:"true"},domProps:{value:e.values.name},on:{input:function(t){t.target.composing||e.$set(e.values,"name",t.target.value)}}}),n("div",{staticClass:"input-underline"})]),n("li",{staticClass:"box-input"},[e._v("\n            Schulnummer\n            "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.values.nummer,expression:"values.nummer"}],attrs:{type:"text",name:"nummer",placeholder:"0123",required:"true"},domProps:{value:e.values.nummer},on:{input:function(t){t.target.composing||e.$set(e.values,"nummer",t.target.value)}}}),n("div",{staticClass:"input-underline"},[e._v("Vierstellig mit führender Null")])]),n("li",{staticClass:"box-input"},[e._v("\n            Name der Seite\n            "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.values.name1,expression:"values.name1"}],attrs:{type:"text",name:"name1",placeholder:"RSU",maxlength:"10",minlength:"2",required:"true"},domProps:{value:e.values.name1},on:{input:function(t){t.target.composing||e.$set(e.values,"name1",t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.values.name2,expression:"values.name2"}],attrs:{type:"text",name:"name2",placeholder:"intern",maxlength:"10",minlength:"2",required:"true"},domProps:{value:e.values.name2},on:{input:function(t){t.target.composing||e.$set(e.values,"name2",t.target.value)}}}),n("div",{staticClass:"input-underline"},[e._v("Zweiteilig. z.B. RSU intern")])]),n("li",{staticClass:"box-input"},[e._v("\n            Modus für Elternbenutzer\n            "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.values.elternbenutzer,expression:"values.elternbenutzer"}],attrs:{required:"true"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.values,"elternbenutzer",t.target.multiple?n:n[0])}}},[n("option",{attrs:{value:"ASV_CODE"}},[e._v("Registrierungscodes")]),n("option",{attrs:{value:"ASV_MAIL"}},[e._v("E-Mailadresse aus ASV Import verwenden")])])]),n("li",{staticClass:"box-input"},[e._v("\n            Stundenplan Software\n            "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.values.stundenplan,expression:"values.stundenplan"}],attrs:{required:"true"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.values,"stundenplan",t.target.multiple?n:n[0])}}},[n("option",{attrs:{value:"UNTIS"}},[e._v("UNTIS")]),n("option",{attrs:{value:"SPM++"}},[e._v("SPM++ / VPM++")]),n("option",{attrs:{value:"TIME2007"}},[e._v("TIME2007")]),n("option",{attrs:{value:"WILLI"}},[e._v("WILLI")])])]),n("li",{staticClass:"box-input"},[e._v("\n            Notenverwaltung aktivieren?\n            "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.values.notenverwaltung,expression:"values.notenverwaltung"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.values,"notenverwaltung",t.target.multiple?n:n[0])}}},[n("option",{attrs:{value:"false"}},[e._v("Nein")]),n("option",{attrs:{value:"true"}},[e._v("Ja")])]),e._m(0)])]),n("h3",{staticClass:"header-box"},[e._v("System")]),n("ul",[n("li",{staticClass:"box-input"},[e._v("\n            URL zur Index.php\n            "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.values.uri,expression:"values.uri"}],attrs:{type:"text",placeholder:"https://",required:"true"},domProps:{value:e.values.uri},on:{input:function(t){t.target.composing||e.$set(e.values,"uri",t.target.value)}}}),e._m(1)]),n("li",{staticClass:"box-input"},[e._v("\n            Schlüssel für Cron Jobs\n            "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.values.cronkey,expression:"values.cronkey"}],attrs:{type:"text",placeholder:"",required:"true"},domProps:{value:e.values.cronkey},on:{input:function(t){t.target.composing||e.$set(e.values,"cronkey",t.target.value)}}}),n("div",{staticClass:"input-underline"},[e._v("\n              Mindestens 20 Stellen, max 30 Stellen\n            ")])]),n("li",{staticClass:"box-input"},[e._v("\n            Schlüssel für API\n            "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.values.apikey,expression:"values.apikey"}],attrs:{type:"text",placeholder:"",required:"true"},domProps:{value:e.values.apikey},on:{input:function(t){t.target.composing||e.$set(e.values,"apikey",t.target.value)}}}),n("div",{staticClass:"input-underline"},[e._v("\n              Mindestens 20 Stellen, max 30 Stellen\n            ")])]),n("li",{staticClass:"box-input"},[e._v("\n              Zu installierende Verson wählen \n              "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.values.branch,expression:"values.branch"}],attrs:{required:"true"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.values,"branch",t.target.multiple?n:n[0])}}},e._l(e.values.branches,(function(t,a){return n("option",{key:a,domProps:{value:t.Name}},[e._v(e._s(t.Desc))])})),0),n("div",{staticClass:"input-underline"},[e._v("\n                Ausgewählte Version wird vom Updateserver heruntergeladen.\n              ")])])])]),n("div",{staticClass:"box box-bg-white"},[n("h3",{staticClass:"header-box red"},[e._v("Datenbank")]),n("ul",[e._m(2),n("li",{staticClass:"box-input"},[e._v("\n            Datenbank - Host\n            "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.values.dbhost,expression:"values.dbhost"}],attrs:{type:"text",name:"dbhost",placeholder:"z.B. localhost",required:"true"},domProps:{value:e.values.dbhost},on:{input:function(t){t.target.composing||e.$set(e.values,"dbhost",t.target.value)}}})]),n("li",{staticClass:"box-input"},[e._v("\n            Datenbank - Port\n            "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.values.dbport,expression:"values.dbport"}],attrs:{type:"text",name:"dbport",placeholder:"",required:"true"},domProps:{value:e.values.dbport},on:{input:function(t){t.target.composing||e.$set(e.values,"dbport",t.target.value)}}})]),n("li",{staticClass:"box-input"},[e._v("\n            Datenbank - Benutzername\n            "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.values.dbuser,expression:"values.dbuser"}],attrs:{type:"text",name:"dbuser",placeholder:"z.B. root",required:"true"},domProps:{value:e.values.dbuser},on:{input:function(t){t.target.composing||e.$set(e.values,"dbuser",t.target.value)}}})]),n("li",{staticClass:"box-input"},[e._v("\n            Datenbank - Passwort\n            "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.values.dbpass,expression:"values.dbpass"}],attrs:{type:"text",name:"dbpass",placeholder:"z.B. secret"},domProps:{value:e.values.dbpass},on:{input:function(t){t.target.composing||e.$set(e.values,"dbpass",t.target.value)}}})]),n("li",{staticClass:"box-input"},[e._v("\n            Datenbank - Datenbankname\n            "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.values.dbname,expression:"values.dbname"}],attrs:{type:"text",name:"dbname",placeholder:"z.B. schuleinterndatenbank",required:"true"},domProps:{value:e.values.dbname},on:{input:function(t){t.target.composing||e.$set(e.values,"dbname",t.target.value)}}})])]),n("h3",{staticClass:"header-box blue"},[e._v("Administratorzugang")]),n("ul",[n("li",{staticClass:"box-input"},[e._v("\n            E-Mail\n            "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.values.adminemail,expression:"values.adminemail"}],attrs:{type:"text",name:"adminemail",required:"true"},domProps:{value:e.values.adminemail},on:{input:function(t){t.target.composing||e.$set(e.values,"adminemail",t.target.value)}}})]),n("li",{staticClass:"box-input"},[e._v("\n            Benutzername\n            "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.values.adminuser,expression:"values.adminuser"}],attrs:{type:"text",required:"true"},domProps:{value:e.values.adminuser},on:{input:function(t){t.target.composing||e.$set(e.values,"adminuser",t.target.value)}}})]),n("li",{staticClass:"box-input"},[e._v("\n            Passwort\n            "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.values.adminpass,expression:"values.adminpass"}],attrs:{type:"text",required:"true"},domProps:{value:e.values.adminpass},on:{input:function(t){t.target.composing||e.$set(e.values,"adminpass",t.target.value)}}}),n("div",{staticClass:"input-underline text-red"},[e._v("\n              Bitte merken!\n            ")])])])])]),n("div",{staticClass:"btn-outer-box"},[n("button",{staticClass:"btn",on:{click:e.install}},[e._v("Installieren")])])])])},h=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"input-underline"},[n("strong",[e._v("Bitte beachten:")]),n("br"),e._v("Die Notenverwaltung ist bisher nur für Gymnasien und die Klassenstunden 5 bis 9 einsetzbar.\n            ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"input-underline"},[n("strong",[e._v("Beachten Sie bitte folgende Hinweise:")]),n("ul",[n("li",[e._v("Wenn Sie SSL verwenden (Empfohlen!), dann geben Sie hier bitte die URL mit https beginnend ein!")]),n("li",[e._v("Stellen Sie bitte am Server die automatische Umleitung auf SSL aus! Dies übernimmt die Software für Sie.")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{staticClass:"box-input"},[n("strong",[e._v("Bitte beachten Sie, dass die Datenbank bereits angelegt sein muss.")])])}],b=(n("7f7f"),{name:"Settings",props:{apiRoot:String,userValues:Object},data:function(){return{values:{}}},created:function(){this.userValues.name?this.setData(this.userValues):this.init()},methods:{init:function(){var e=this;u.a.get(this.apiRoot+"restore.php?action=settings").then((function(t){e.setData(t.data)})).catch((function(e){console.error(e)}))},setData:function(e){this.values=e},required:function(){return!!(this.values.name&&this.values.nummer&&this.values.name1&&this.values.name2&&this.values.uri&&this.values.stundenplan&&this.values.elternbenutzer&&this.values.branch&&this.values.cronkey&&this.values.apikey&&this.values.dbhost&&this.values.dbport&&this.values.dbname&&this.values.dbuser&&this.values.adminemail&&this.values.adminuser&&this.values.adminpass)},install:function(){if(!this.required())return console.log("error: required"),!1;this.values.branches=!1,EventBus.$emit("done--step",{settings:!0,values:this.values})}}}),_=b,f=Object(v["a"])(_,g,h,!1,null,"5396a63a",null),x=f.exports,C=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"settings"},[a("div",{staticClass:"outer-box"},[e.install?a("div",{staticClass:"box"},[e._m(0),a("ul",[a("li",[a("div",{staticClass:"box-long"},[e._v("\n            Daten vom Server laden und entpacken\n            "),a("div",{staticClass:"text-red"},[e._v(e._s(e.list.downloadBranch.msg))])]),a("div",{staticClass:"box-icon"},[1==e.list.downloadBranch.install&&1==e.list.downloadBranch.return?a("img",{attrs:{src:n("7bae"),alt:"ok",title:"ok"}}):e._e(),0==e.list.downloadBranch.install&&0==e.list.downloadBranch.return?a("img",{attrs:{src:n("b463"),alt:"error",title:"error"}}):e._e(),"loading"==e.list.downloadBranch?a("img",{attrs:{src:n("8f5e"),alt:"loading",title:"loading"}}):e._e()])]),a("li",[a("div",{staticClass:"box-long"},[e._v("\n            Webserver Basisverzeichnis befüllen (CSS, JS, Bilder)\n            "),a("div",{staticClass:"text-red"},[e._v(e._s(e.list.moveFiles.msg))])]),a("div",{staticClass:"box-icon"},[1==e.list.moveFiles.install&&1==e.list.moveFiles.return?a("img",{attrs:{src:n("7bae"),alt:"ok",title:"ok"}}):e._e(),0==e.list.moveFiles.install&&0==e.list.moveFiles.return?a("img",{attrs:{src:n("b463"),alt:"error",title:"error"}}):e._e(),"loading"==e.list.moveFiles?a("img",{attrs:{src:n("8f5e"),alt:"loading",title:"loading"}}):e._e()])]),a("li",[a("div",{staticClass:"box-long"},[e._v("\n            Konfigurationsdatei schreiben (data/config/config.php)\n            "),a("div",{staticClass:"text-red"},[e._v(e._s(e.list.makeConfig.msg))])]),a("div",{staticClass:"box-icon"},[1==e.list.makeConfig.install&&1==e.list.makeConfig.return?a("img",{attrs:{src:n("7bae"),alt:"ok",title:"ok"}}):e._e(),0==e.list.makeConfig.install&&0==e.list.makeConfig.return?a("img",{attrs:{src:n("b463"),alt:"error",title:"error"}}):e._e(),"loading"==e.list.makeConfig?a("img",{attrs:{src:n("8f5e"),alt:"loading",title:"loading"}}):e._e()])]),a("li",[a("div",{staticClass:"box-long"},[e._v("\n            Tabellen in der Datenbank erstellen\n            "),a("div",{staticClass:"text-red"},[e._v(e._s(e.list.initDbTable.msg))])]),a("div",{staticClass:"box-icon"},[1==e.list.initDbTable.install&&1==e.list.initDbTable.return?a("img",{attrs:{src:n("7bae"),alt:"ok",title:"ok"}}):e._e(),0==e.list.initDbTable.install&&0==e.list.initDbTable.return?a("img",{attrs:{src:n("b463"),alt:"error",title:"error"}}):e._e(),"loading"==e.list.initDbTable?a("img",{attrs:{src:n("8f5e"),alt:"loading",title:"loading"}}):e._e()])]),a("li",[a("div",{staticClass:"box-long"},[e._v("\n            Administrator Zugang setzen\n            "),a("div",{staticClass:"text-red"},[e._v(e._s(e.list.preSettingsSql.msg))])]),a("div",{staticClass:"box-icon"},[1==e.list.preSettingsSql.install&&1==e.list.preSettingsSql.return?a("img",{attrs:{src:n("7bae"),alt:"ok",title:"ok"}}):e._e(),0==e.list.preSettingsSql.install&&0==e.list.preSettingsSql.return?a("img",{attrs:{src:n("b463"),alt:"error",title:"error"}}):e._e(),"loading"==e.list.preSettingsSql?a("img",{attrs:{src:n("8f5e"),alt:"loading",title:"loading"}}):e._e()])]),a("li",[a("div",{staticClass:"box-long"},[e._v("\n            Versenden der Zugangsdaten an den Admin\n            "),a("div",{staticClass:"text-red"},[e._v(e._s(e.list.sendMail.msg))])]),a("div",{staticClass:"box-icon"},[1==e.list.sendMail.install?a("img",{attrs:{src:n("7bae"),alt:"ok",title:"ok"}}):e._e(),0==e.list.sendMail.install?a("img",{attrs:{src:n("b463"),alt:"error",title:"error"}}):e._e(),"loading"==e.list.sendMail?a("img",{attrs:{src:n("8f5e"),alt:"loading",title:"loading"}}):e._e()])]),a("li",[a("div",{staticClass:"box-long"},[e._v("\n            Temporäre Daten löschen\n            "),a("div",{staticClass:"text-red"},[e._v(e._s(e.list.removeFolder.msg))])]),a("div",{staticClass:"box-icon"},[1==e.list.removeFolder.install&&1==e.list.removeFolder.return?a("img",{attrs:{src:n("7bae"),alt:"ok",title:"ok"}}):e._e(),0==e.list.removeFolder.install&&0==e.list.removeFolder.return?a("img",{attrs:{src:n("b463"),alt:"error",title:"error"}}):e._e(),"loading"==e.list.removeFolder?a("img",{attrs:{src:n("8f5e"),alt:"loading",title:"loading"}}):e._e()])])]),e.loading?e._e():a("button",{staticClass:"btn",on:{click:e.back}},[e._v("Zurück")])]):e._e(),0==e.install?a("div",{staticClass:"outer-install"},[e._m(1),e._m(2),a("div",{staticClass:"box"},[a("h3",[e._v("1. Cronjobs")]),a("p",[e._v("Folgende Cronjobs müssen noch bei Ihrem Hoster angelegt werden:")]),a("p"),a("ul",[a("li",{staticClass:"padding-tb"},[a("div",[a("div",{staticClass:"input-small"},[e._v(e._s(e.cronUrl1))]),a("div",{staticClass:"input-underline"},[e._v("Alle 15 Minuten")])])]),a("li",[a("div",{staticClass:"padding-tb"},[a("div",{staticClass:"input-small"},[e._v(e._s(e.cronUrl2))]),a("div",{staticClass:"input-underline"},[e._v("Alle 3 Minuten")])])])]),a("h3",[e._v("2. Domian")]),a("p",[e._v("Falls noch nicht geschehen ändern Sie bitte den Pfad der Domain direkt auf den 'www' Ordner. Die Einstellungen dazu können Sie bei Ihrem Webhoster vornehmen.")])]),a("div",{staticClass:"box"},[a("h3",[e._v("3. Installationsordner entfernen")]),a("p",[e._v('Damit keine weitere Installation durchgeführt werden kann, muss der "install" Ordner vom Server gelöscht werden')]),0==e.loadingDeleteFolder?a("button",{staticClass:"btn red",on:{click:e.deleteFolder}},[e._v("Jetzt löschen")]):e._e(),"done"==e.loadingDeleteFolder?a("img",{staticClass:"icon-done",attrs:{src:n("7bae"),alt:"ok",title:"ok"}}):e._e(),"error"==e.loadingDeleteFolder?a("div",{staticClass:"box-red"},[e._v(e._s(e.loadingDeleteFolderError))]):e._e(),1==e.loadingDeleteFolder?a("img",{staticClass:"icon-done",attrs:{src:n("8f5e"),alt:"loading",title:"loading"}}):e._e(),a("h3",[e._v("4. Support-Forum")]),a("p",[e._v("Falls Sie Fragen oder Anregungen haben besuchen Sie unser Forum. Dort können mit der Community Lösungen, Probleme oder Wünsche besprochen werden.")]),a("button",{staticClass:"btn yellow",on:{click:e.openWebsite}},[e._v("https://www.schule-intern.de")]),a("div",{staticClass:"spacer-top"}),a("h2",[e._v("Viel Erfolg mit Ihrer Installation der SchuleIntern Software!")]),a("button",{staticClass:"btn",on:{click:e.openSystem}},[e._v("Zur Website")])])]):e._e()])])},S=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h4",{staticClass:"text-red"},[e._v("Die Installation kann einige Zeit in Anspruch nehmen."),n("br"),e._v("Bitte haben Sie Geduld."),n("br"),n("br")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"box-full box-done"},[n("h2",[e._v("Herzlichen Glückwunsch")]),n("h3",[e._v("Die Installation war erfolgreich!")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"box-full"},[n("h1",[e._v("Und jetzt?")]),n("p",{staticClass:"text-red"},[n("strong",[e._v("Um das System in den Beriebszustand zu versetzen und abzusichern, müssen Sie noch folgendes erledigen:")])])])}],w=(n("ac4d"),n("a481"),n("456d"),{name:"Restore",props:{apiRoot:String,userValues:Object},data:function(){return{loading:!1,install:!0,loadingDeleteFolder:!1,loadingDeleteFolderError:"Das Löschen war nicht erfolgreich. Bitte löschen Sie den Ordner manuell!",cronUrl1:"",cronUrl2:"",list:{downloadBranch:!1,moveFiles:!1,makeConfig:!1,initDbTable:!1,preSettingsSql:!1,sendMail:!1,removeFolder:!1}}},created:function(){this.load()},methods:{load:function(){for(var e=Object.keys(this.list),t=!1,n=0,a=e;n<a.length;n++){var s=a[n];t||0!=this.list[s]||(t=s)}if(t){var i=new URLSearchParams;for(var r in this.userValues)i.append(r,this.userValues[r]);this.loading=!0,this.list[t]="loading";var l=this;u.a.post(this.apiRoot+"restore.php?action="+t,i).then((function(e){l.loading=!1,l.list[t]=e.data,1==e.data.install?l.load():(e.data.return.errorMsg&&(l.list[t].msg=e.data.return.errorMsg),l.list[t].return=!1)})).catch((function(e){l.loading=!1,l.list[t]={install:!1,return:!1}}))}else{this.cronUrl1=this.userValues.uri.replace("index.php","cron.php?cronkey="+this.userValues.cronkey),this.cronUrl2=this.userValues.uri.replace("index.php","cron.php?cronkey="+this.userValues.cronkey+"&cronName=MailSender"),this.install=!1;var o=!0,d=!1,c=void 0;try{for(var v,p=e[Symbol.iterator]();!(o=(v=p.next()).done);o=!0){var m=v.value;0==this.list[m]&&(this.install=!0)}}catch(g){d=!0,c=g}finally{try{o||null==p.return||p.return()}finally{if(d)throw c}}}},back:function(){EventBus.$emit("done--step",{server:!0})},deleteFolder:function(){var e=this;this.loadingDeleteFolder=!0,u.a.get(this.apiRoot+"restore.php?action=deleteFolder").then((function(t){1==t.data.install?e.loadingDeleteFolder="done":e.loadingDeleteFolder="error"})).catch((function(t){e.loadingDeleteFolder="error",console.error(t)}))},openWebsite:function(){var e=window.open("https://www.schule-intern.de/forum/","_blank");e.focus()},openSystem:function(){if(this.userValues.uri){var e=window.open(this.userValues.uri,"_blank");e.focus()}}}}),k=w,y=Object(v["a"])(k,C,S,!1,null,"cdf0d18c",null),D=y.exports,P={name:"app",components:{Server:m,Settings:x,Restore:D},data:function(){return{apiRoot:"./",dataPost:{},steps:"server",values:{}}},created:function(){var e=this,t=this;EventBus.$on("done--step",(function(n){1==n.server&&(e.steps="settings"),1==n.settings&&n.values&&(t.values=n.values,e.steps="install")}))},methods:{}},$=P,B=Object(v["a"])($,s,i,!1,null,null,null),F=B.exports;window.EventBus=new a["a"],a["a"].config.productionTip=!1,n("6672"),document.title="SchuleIntern Backup Restore",new a["a"]({render:function(e){return e(F)}}).$mount("#app")},6672:function(e,t,n){},"7bae":function(e,t,n){e.exports=n.p+"img/check.ce19ee14.svg"},"8f5e":function(e,t,n){e.exports=n.p+"img/spinner.803ae640.gif"},b463:function(e,t,n){e.exports=n.p+"img/cancel.9bf4b416.svg"}});
//# sourceMappingURL=app.1ccea832.js.map