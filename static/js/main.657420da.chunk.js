(this.webpackJsonpkanban=this.webpackJsonpkanban||[]).push([[0],{21:function(e,t,a){e.exports=a(42)},26:function(e,t,a){},27:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(18),c=a.n(s),o=a(2),i=a(3),l=a(6),m=a(5),d=(a(26),a(27),a(4));function u(e){var t="/board/"+e.timeId;return r.a.createElement(d.b,{to:t,onClick:function(t,a){t.currentTarget.id;localStorage.setItem("cardText",e.boardText)},className:"preview",activeClassName:"active"},r.a.createElement("div",{className:"card-text"},e.boardText))}a(37);var b=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={editing:!1},n}return Object(i.a)(a,[{key:"onSubmit",value:function(e){e.preventDefault();var t=this.boardInput.value.trim(),a=this.props.formNum;t&&this.props.onAdd&&this.props.onAdd(t,a),this.boardInput.value=""}},{key:"setEditing",value:function(e){this.setState({editing:e})}},{key:"render",value:function(){var e=this;return this.state.editing?r.a.createElement("form",{className:"boardPreview",onSubmit:function(t){return e.onSubmit(t)}},r.a.createElement("div",{className:"board-add-button"},r.a.createElement("p",{className:"board-add-button-text"},"\u041d\u043e\u0432\u0430\u044f \u0434\u043e\u0441\u043a\u0430")),r.a.createElement("input",{type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0434\u043e\u0441\u043a\u0438",className:"add-board-input",ref:function(t){return e.boardInput=t}}),r.a.createElement("div",{className:"buttons-block"},r.a.createElement("button",{className:"button add-button"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"),r.a.createElement("button",{className:"button cancel-button",onClick:function(){return e.setEditing(!1)}},"\u041e\u0442\u043c\u0435\u043d\u0430"))):r.a.createElement("div",{className:"open-add-button",onClick:function(){return e.setEditing(!0)}},r.a.createElement("div",{className:"main-button",href:"#"},r.a.createElement("p",null,"\u041d\u043e\u0432\u0430\u044f \u0434\u043e\u0441\u043a\u0430")))}}]),a}(r.a.Component),p=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){return Object(o.a)(this,a),t.call(this,e)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.previews.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement(u,e))}));return r.a.createElement("div",null,r.a.createElement(b,{formNum:this.props.id,onAdd:this.props.onAdd}),r.a.createElement("ul",{className:"board_list"},e))}}]),a}(r.a.Component),v=a(10),f=a(14);a(38);function g(e){var t="/modal/"+e.timeId;return r.a.createElement(d.b,{to:t,onClick:function(t,a){t.currentTarget.id;localStorage.setItem("cardText",e.taskText)},activeClassName:"active",className:"task-card",draggable:"true",id:[e.timeId],onDragStart:e.onDragStart},r.a.createElement("div",{className:"card-text"},e.taskText))}a(39);var E=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={editing:!1},n}return Object(i.a)(a,[{key:"onSubmit",value:function(e){e.preventDefault();var t=this.textInput.value.trim(),a=this.props.formNum;t&&this.props.onAdd&&this.props.onAdd(t,a),this.textInput.value=""}},{key:"setEditing",value:function(e){this.setState({editing:e})}},{key:"render",value:function(){var e=this;return this.state.editing?r.a.createElement("form",{className:"card add-task-form",onSubmit:function(t){return e.onSubmit(t)}},r.a.createElement("input",{type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0441\u043f\u0438\u0441\u043a\u0430",className:"task-input",ref:function(t){return e.textInput=t}}),r.a.createElement("div",{className:"buttons-block"},r.a.createElement("button",{className:"button add-button"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"),r.a.createElement("button",{className:"button cancel-button",onClick:function(){return e.setEditing(!1)}},"\u041e\u0442\u043c\u0435\u043d\u0430"))):r.a.createElement("div",{className:"open-add-button",onClick:function(){return e.setEditing(!0)}},r.a.createElement("div",{className:"main-button",href:"#"},r.a.createElement("div",{className:"img"}),r.a.createElement("p",null,"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0441\u043f\u0438\u0441\u043e\u043a")))}}]),a}(r.a.Component),N=(a(40),function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){return Object(o.a)(this,a),t.call(this,e)}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.props.cards.map((function(t,a){return r.a.createElement("li",{key:a},r.a.createElement(g,Object.assign({},t,{onDragStart:e.props.onDragStart})))}));return r.a.createElement("div",null,r.a.createElement("ul",{className:"list",onDragOver:this.props.onDragOver,onDrop:this.props.onDrop},t,r.a.createElement("li",{className:"add-list-wrapper"},r.a.createElement(E,{formNum:this.props.id,onAdd:this.props.onAdd}))))}}]),a}(r.a.Component));a(41);function h(e){var t=localStorage.getItem("cardText");return r.a.createElement("div",{className:"modal-screen"},r.a.createElement("div",{className:"modal-block"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("div",{className:"modal-card-text"},t),r.a.createElement(d.b,{to:"/board",activeClassName:"active",className:"modal-link"},r.a.createElement("div",{className:"close-img"}))),r.a.createElement("div",{className:"modal-block-text"},r.a.createElement("a",{className:"modal-text"},"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435")),r.a.createElement("button",{className:"modal-button"},r.a.createElement("a",{className:"modal-button-text"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"))))}var O=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var n;if(Object(o.a)(this,a),(n=t.call(this,e)).onDragStart=function(e,t){var a={taskId:e.currentTarget.id,fromList:t};localStorage.setItem("dragInfo",JSON.stringify(a))},n.onDragOver=function(e){e.preventDefault()},n.onDrop=function(e,t){var a=localStorage.getItem("dragInfo"),r=localStorage.getItem("lists"),s=JSON.parse(r),c=JSON.parse(a),o=s[c.fromList].cards,i=o.find((function(e){return e.timeId==c.taskId})),l=o.findIndex((function(e){return e.timeId==c.taskId}));s[c.fromList].cards.splice(l,1),s[t].cards.push(Object(f.a)(Object(f.a)({},i),{},{listNumber:parseInt(t)})),n.setState({lists:s}),localStorage.setItem("lists",JSON.stringify(s))},localStorage.getItem("lists")){var r=localStorage.getItem("lists"),s=JSON.parse(r);n.state={lists:s}}else n.state={lists:[{title:"{props.cardText}",id:0,cards:[{listNumber:0,timeId:"demo-card",taskText:""}]}]},localStorage.setItem("lists",JSON.stringify(n.state.lists));return n}return Object(i.a)(a,[{key:"addTask",value:function(e,t){var a=localStorage.getItem("lists"),n=JSON.parse(a),r={taskText:e,listNumber:t,timeId:(new Date).valueOf()};n[t].cards.push(r),this.setState({lists:n}),localStorage.setItem("lists",JSON.stringify(n));localStorage.getItem("cardText")}},{key:"render",value:function(){var e=this,t=this.state.lists.map((function(t,a){return r.a.createElement("li",{className:"list-wrapper",key:a},r.a.createElement(N,Object.assign({},t,{onAdd:function(t,a){return e.addTask(t,a)},onDragStart:function(a,n){return e.onDragStart(a,"".concat(t.id))},onDragOver:function(t){return e.onDragOver(t)},onDrop:function(a,n){e.onDrop(a,"".concat(t.id))}})))}));return r.a.createElement(d.a,{basename:"/board"},r.a.createElement("div",{className:"board-screen"},r.a.createElement("div",{className:"modal-card-text"},this.props.boardText),r.a.createElement(d.b,{to:"/",activeClassName:"active",className:"exit"},r.a.createElement("div",{className:"close-img"})),r.a.createElement(v.a,{path:"/modal",component:h}),r.a.createElement("div",{className:"board"},r.a.createElement("ul",{className:"lists"},t))))}}]),a}(r.a.Component),S=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var n;if(Object(o.a)(this,a),n=t.call(this,e),localStorage.getItem("boards")){var r=localStorage.getItem("boards"),s=JSON.parse(r);n.state={boards:s}}else n.state={boards:[{id:0,previews:[{listNumber:0,timeId:"demo-card",boardText:""}]}]},localStorage.setItem("boards",JSON.stringify(n.state.boards));return n}return Object(i.a)(a,[{key:"addTaskCard",value:function(e,t){var a=localStorage.getItem("boards"),n=JSON.parse(a),r={boardText:e,listNumber:t,timeId:(new Date).valueOf()};n[t].previews.push(r),this.setState({boards:n}),localStorage.setItem("boards",JSON.stringify(n))}},{key:"render",value:function(){var e=this,t=this.state.boards.map((function(t,a){return r.a.createElement("li",{className:"list-wrapper",key:a},r.a.createElement(p,Object.assign({},t,{onAdd:function(t,a){return e.addTaskCard(t,a)}})))}));return r.a.createElement(d.a,{basename:"/"},r.a.createElement(v.a,{path:"/board",component:O}),r.a.createElement(v.a,{path:"/",component:a}),r.a.createElement("div",{className:"board"},r.a.createElement("ul",{className:"boards"},t)))}}]),a}(r.a.Component);c.a.render(r.a.createElement(S,null),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.657420da.chunk.js.map