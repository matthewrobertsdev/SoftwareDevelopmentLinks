(this["webpackJsonplearn-software-development"]=this["webpackJsonplearn-software-development"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(7),i=n.n(r),c=(n(13),n(14),n(1)),l=function e(t,n){Object(c.a)(this,e),this.url=t,this.title=n},s=new l("https://developer.apple.com/documentation/","Apple Docs"),u=new l("https://docs.swift.org/swift-book/LanguageGuide/TheBasics.html","Swift Docs"),h=new l("https://www.raywenderlich.com","RayWenderlich.com"),p=new l("https://developer.android.com","Android Docs"),m=new l("https://www.w3schools.com/","w3schools"),d=new l("https://developer.mozilla.org/en-US/","Mozilla Docs"),w=new l("https://www.freecodecamp.org","Free Code Camp"),f=new l("https://reactjs.org/tutorial/tutorial.html","React JS Tutorial"),v=new l("https://github.com/facebook/create-react-app","Create React App"),b=new l("https://www.geeksforgeeks.org","Geeks for Geeks"),y=new l("https://docs.oracle.com/javase/tutorial/index.html","Oracle's Java Tutorials"),g=new l("https://docs.oracle.com/javase/tutorial/java/index.html","Java Language"),k=new l("https://dev.mysql.com/doc/refman/8.0/en/","MySQL Docs"),j=new l("https://dev.mysql.com/downloads/","MySQL Downloads"),O=new l("https://github.com/","Github"),E=new l("https://stackoverflow.com","Stack Overflow"),S=new l("https://www.python.org","Python"),D=new l("https://docs.python.org/3/","Python 3 Docs"),A=new l("https://docs.python.org/3/tutorial/index.html","Python 3 Tutorial"),L=new l("https://docs.python.org/3/library/index.html","Python 3 Library"),M=function e(t,n){Object(c.a)(this,e),this.linkModel=t,this.info=n},I=new M(s,"Apple's docs for all things Apple."),C=new M(u,"Swift is used by developers for writing apps for Apple devices.  It is open source.  This tutorial can be read cover to cover or gone through less thoroughly."),P=new M(h,"Great tutorials for developing for iOS or Android."),G=new M(p,"Android Documentation for Developers"),J=new M(m,"Simple guides to web development concepts."),Q=new M(d,"Comprehensive documentation for html, css, and javascript."),N=new M(w,"Great exercise based learning and practice for web development."),T=new M(f,"Introduction to JSX and React with this tutorial."),x=new M(v,"Github page for Create React App, a development tool for making apps with React easy."),R=new M(E,"Questions and anwers about coding, with voting on questions and answers and stored questions and answers from the past."),W=new M(b,"Useful overviews of such topics as individual data structures."),q=new M(y,"Link to overview of Java tutorials by Oracle.  Individual API's are more easily accessible by search engine."),z=new M(g,"Tutorial on the Java computer language that can help get you coding."),B=new M(k,"Documentation on MySQL and using MySql that contains a tutorial that teaches you the commands for working with a MySQL database."),U=new M(j,"You can download MySQL (the MySQL server) and other software such as the MySQL Workbench GUI."),F=new M(O,"A website for storing code repositories under the Git version control system."),H=new M(S,"Python.org is the home page of Python."),X=new M(D,"Home of the python 3 official documentation."),Y=new M(A,"The tutorial on the python language.  It can be read cover to cover or less throughly, but some topics expect you to have read previous topics."),$=new M(L,"The documentation for the Python 3 library, which has all of the built-in language features."),K=function e(t,n){Object(c.a)(this,e),this.infos=[],this.title=t,this.infos=n},V=[new K("Apple and Swift",[I,C]),new K("Mobile Development",[P]),new K("Android Development",[G]),new K("Web Development",[J,Q,N]),new K("React",[T,x]),new K("All Purpose Info",[R,W]),new K("Java",[q,z]),new K("MySQL",[B,U]),new K("Github",[F]),new K("Python",[H,X,Y,$])];var Z=function(){return a.a.createElement("div",null,a.a.createElement("br",null),a.a.createElement("br",null))},_=function e(t,n){Object(c.a)(this,e),this.links=[],this.title=t,this.links=n},ee=[new _("Apple and Swift",[s,u]),new _("Mobile Development",[h]),new _("Android Development",[p]),new _("Web Development",[m,d,w]),new _("React Web Framework",[f,v]),new _("All Purpose Coding",[E,b]),new _("Java",[y,g]),new _("MySQL Database",[k,j]),new _("Github",[O]),new _("Python",[S,D,A,L])],te=n(2),ne=n(4),oe=n(3),ae=n(5),re=function(e){function t(){return Object(c.a)(this,t),Object(ne.a)(this,Object(oe.a)(t).apply(this,arguments))}return Object(ae.a)(t,e),Object(te.a)(t,[{key:"render",value:function(){return a.a.createElement("a",{href:this.props.link.url,className:"link-button"},this.props.link.title)}}]),t}(a.a.Component),ie=function(e){function t(){return Object(c.a)(this,t),Object(ne.a)(this,Object(oe.a)(t).apply(this,arguments))}return Object(ae.a)(t,e),Object(te.a)(t,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("h2",{className:"heading-color h3-size"},this.props.model.title),this.createSection())}},{key:"createSection",value:function(){return this.props.model.links.map((function(e){return a.a.createElement("span",null,a.a.createElement(re,{link:e}),a.a.createElement("br",{className:"hide-for-not-small"}))}))}}]),t}(a.a.Component),ce=function(e){function t(){return Object(c.a)(this,t),Object(ne.a)(this,Object(oe.a)(t).apply(this,arguments))}return Object(ae.a)(t,e),Object(te.a)(t,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("h1",{className:"heading-color"},"The Summary"),this.createSection())}},{key:"createSection",value:function(){return this.props.model.map((function(e){return a.a.createElement(ie,{model:e})}))}}]),t}(a.a.Component),le=function(e){function t(){return Object(c.a)(this,t),Object(ne.a)(this,Object(oe.a)(t).apply(this,arguments))}return Object(ae.a)(t,e),Object(te.a)(t,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(re,{link:this.props.linkInfo.linkModel}),a.a.createElement("span",{className:"text-on-background"},this.props.linkInfo.info))}}]),t}(a.a.Component),se=function(e){function t(){return Object(c.a)(this,t),Object(ne.a)(this,Object(oe.a)(t).apply(this,arguments))}return Object(ae.a)(t,e),Object(te.a)(t,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("h2",{className:"heading-color"},this.props.model.title),this.createSection())}},{key:"createSection",value:function(){return this.props.model.infos.map((function(e){return a.a.createElement("div",null,a.a.createElement(le,{linkInfo:e}),a.a.createElement("br",null))}))}}]),t}(a.a.Component),ue=function(e){function t(){return Object(c.a)(this,t),Object(ne.a)(this,Object(oe.a)(t).apply(this,arguments))}return Object(ae.a)(t,e),Object(te.a)(t,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("h1",{className:"heading-color"},"In Detail"),this.createSection())}},{key:"createSection",value:function(){return this.props.model.map((function(e){return a.a.createElement("div",null,a.a.createElement(se,{model:e}),a.a.createElement("br",null))}))}}]),t}(a.a.Component);var he=function(){return a.a.createElement("div",{className:"App"},a.a.createElement("h1",{className:"heading-color"},"Software Development Links: An Incomplete List"),a.a.createElement(ce,{model:ee}),a.a.createElement(Z,null),a.a.createElement(ue,{model:V}),a.a.createElement(Z,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));document.title="Software Development Links",i.a.render(a.a.createElement(he,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.a6b2512e.chunk.js.map