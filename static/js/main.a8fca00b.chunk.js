(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{19:function(e,t,n){e.exports=n(31)},28:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(4),c=n.n(o),s=n(8),i=n(3),l=n(17),u=n(18);n(28),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var h={searchField:""},d={robots:[],isPending:!1,error:""},m=(n(29),n(5)),E=n(6),b=n(9),g=n(7),p=n(10),f=function(e){var t=e.name,n=e.email,o=e.id,c=e.username;return a.a.createElement(r.Fragment,null,a.a.createElement("div",{className:"tc bg-light-green dib br2 pa3 ma2 grow bw2 shadow-5"},a.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(o,"?200x200")}),a.a.createElement("div",null,a.a.createElement("h2",null,t),a.a.createElement("p",null,n),a.a.createElement("h3",null,c))))},v=function(e){var t=e.robots;return a.a.createElement("div",null,t.map((function(e,n){return a.a.createElement(f,{key:t[n].id,id:t[n].id,name:t[n].name,email:t[n].email,username:t[n].username})})))},O=function(e){var t=e.searchChange;return a.a.createElement("div",{className:"pa2"},a.a.createElement("input",{type:"search",className:"pa3 ba b--green bg-lightest-blue",placeholder:"search robots",onChange:t}))},R=function(e){return a.a.createElement("div",{style:{overflow:"auto",height:"800px"}},e.children)},S=(n(30),function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(b.a)(this,Object(g.a)(t).call(this,e))).state={hasError:!1},n}return Object(p.a)(t,e),Object(E.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0}),console.log(e,t)}},{key:"render",value:function(){return this.state.hasError?a.a.createElement("h1",null,"Something went wrong,"):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),t}(r.Component)),y=function(){return function(e){var t;e({type:"REQUEST_ROBOTS_PENDING"}),(t="https://jsonplaceholder.typicode.com/users",fetch(t).then((function(e){return e.json()}))).then((function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})})).catch((function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})}))}},j=function(e){function t(){return Object(m.a)(this,t),Object(b.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,o=e.robots,c=e.isPending,s=o.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return c?a.a.createElement("h1",null,"Loading"):a.a.createElement(r.Fragment,null,a.a.createElement("div",{className:"tc"},a.a.createElement("h1",{className:"f1"},"Robot friends"),a.a.createElement(O,{searchChange:n}),a.a.createElement(R,null,a.a.createElement(S,null,a.a.createElement(v,{robots:s})))))}}]),t}(r.Component),w=Object(s.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCHFIELD",payload:t.target.value})},onRequestRobots:function(){return e(y())}}}))(j),C=Object(l.createLogger)(),_=Object(i.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCHFIELD":return Object.assign({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),F=Object(i.d)(_,Object(i.a)(u.a,C));c.a.render(a.a.createElement(s.a,{store:F},a.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[19,1,2]]]);
//# sourceMappingURL=main.a8fca00b.chunk.js.map