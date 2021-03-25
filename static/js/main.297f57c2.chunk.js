(this.webpackJsonpneko=this.webpackJsonpneko||[]).push([[0],{56:function(e,t,a){},57:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(27),s=a.n(r),i=(a(56),a(11)),o=a(12),d=a(14),l=a(13),p=(a(57),a(33)),u=a.n(p),b=a(48),j=a(29),h=a(23),O=a(19),v=a(26),f=a(2),g=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(f.jsx)(v.a,{children:Object(f.jsxs)(v.a.Group,{controlId:"breedSelection",children:[Object(f.jsx)(v.a.Label,{children:"Breed"}),Object(f.jsxs)(v.a.Control,{as:"select",custom:!0,onChange:this.props.wasChanged,value:this.props.selectedBreed,disabled:0===this.props.breeds.length,children:[Object(f.jsx)("option",{value:"DEFAULT",disabled:!0,children:"Select breed"}),this.props.breeds.map((function(e){return Object(f.jsx)("option",{value:e.id,children:e.name},e.id)}))]})]})})}}]),a}(n.Component),E=a(16),C=a(20),_=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(f.jsx)(O.a,{md:{span:3},sm:{span:6},children:Object(f.jsxs)(E.a,{className:"mb-3",children:[Object(f.jsx)(E.a.Img,{variant:"top",src:this.props.catDetails.url}),Object(f.jsx)(E.a.Body,{children:Object(f.jsx)(C.b,{to:"/"+this.props.catDetails.id,className:"btn btn-primary btn-block",children:"View details"})})]})})}}]),a}(n.Component),m=a(51),x=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(f.jsx)(h.a,{children:Object(f.jsxs)(O.a,{children:[Object(f.jsx)(m.a,{variant:"success",disabled:this.props.isLoading||this.props.isDisabled,onClick:this.props.wasClicked,className:"mt-3",children:this.props.isLoading?"Loading cats\u2026":"Load more"})," "]})})}}]),a}(n.Component),S="FETCH_BREEDS_REQUEST",T="FETCH_BREEDS_SUCCESS",y="FETCH_BREEDS_FAILURE",D="SELECT_BREED",B=a(21),A=a.n(B),P=function(){return function(e){e({type:S});var t={headers:{"x-api-key":Object({NODE_ENV:"production",PUBLIC_URL:"/neko",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_CAT_API_KEY}};A.a.get("https://api.thecatapi.com/v1/breeds",t).then((function(t){var a;e((a=t.data,{type:T,payload:a}))})).catch((function(t){e(function(e){return{type:y,payload:e}}(t.message))}))}},L="FETCH_CATS_REQUEST",k="FETCH_CATS_SUCCESS",R="FETCH_CATS_FAILURE",F="INCREMENT_PAGINATION_PAGE",N="SELECTED_BREED_CHANGE",I=function(e,t){return function(a){var n={headers:{"x-api-key":Object({NODE_ENV:"production",PUBLIC_URL:"/neko",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_CAT_API_KEY},params:{breed_id:e,order:"asc",limit:5,page:t}};A.a.get("https://api.thecatapi.com/v1/images/search",n).then((function(e){var t;a((t=e.data,{type:k,payload:t})),a({type:F})})).catch((function(e){a(function(e){return{type:R,payload:e}}(e.message))}))}},H=a(22),U=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).onSelectBreed=function(){var t=Object(b.a)(u.a.mark((function t(a){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.target.value,t.next=3,e.props.selectBreed(n);case 3:return t.next=5,e.props.selectedBreedChange();case 5:e.props.fetchCats(e.props.selectedBreed,e.props.paginationPage);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return Object(f.jsxs)(j.a,{children:[Object(f.jsx)(h.a,{children:Object(f.jsx)(O.a,{children:Object(f.jsx)("h1",{className:"mt-3",children:"Cat Browser"})})}),Object(f.jsx)(h.a,{children:Object(f.jsx)(O.a,{md:{span:3},sm:{span:6},children:Object(f.jsx)(g,{wasChanged:this.onSelectBreed,selectedBreed:this.props.selectedBreed,breeds:this.props.breeds})})}),Object(f.jsx)(h.a,{children:this.props.cats.length>0?this.props.cats.map((function(e){return Object(f.jsx)(_,{catDetails:e},e.id)})):Object(f.jsx)(O.a,{children:"No cats available"})}),this.props.canLoadMore?Object(f.jsx)(x,{isLoading:this.props.loading,isDisabled:0===this.props.cats.length,wasClicked:function(){return e.props.fetchCats(e.props.selectedBreed,e.props.paginationPage)}}):null]})}},{key:"componentDidMount",value:function(){this.props.fetchBreeds()}}]),a}(n.Component),w=Object(H.b)((function(e){return{loading:e.breed.loading||e.cat.loading,breeds:e.breed.breeds,cats:e.cat.cats,breedError:e.breed.error,catError:e.cat.error,selectedBreed:e.breed.selectedBreed,paginationPage:e.cat.paginationPage,canLoadMore:e.cat.canLoadMore}}),(function(e){return{selectBreed:function(t){return e(function(e){return{type:D,payload:e}}(t))},selectedBreedChange:function(){return e({type:N})},fetchBreeds:function(){return e(P())},fetchCats:function(t,a){return e(I(t,a))}}}))(U),K=(a(84),function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e,t,a,n,c,r,s,i,o,d,l;return Object(f.jsx)(j.a,{children:null!=(null===(e=this.state)||void 0===e?void 0:e.catDetails)?Object(f.jsxs)(E.a,{children:[Object(f.jsx)(E.a.Header,{children:Object(f.jsx)(C.b,{to:"/",className:"btn btn-primary",children:"Back"})}),Object(f.jsx)(E.a.Img,{variant:"top",src:null===(t=this.state)||void 0===t||null===(a=t.catDetails)||void 0===a?void 0:a.url}),Object(f.jsxs)(E.a.Body,{children:[Object(f.jsx)(E.a.Title,{children:null===(n=this.state)||void 0===n||null===(c=n.catDetails)||void 0===c?void 0:c.breeds[0].name}),Object(f.jsxs)("h6",{children:["Origin: ",null===(r=this.state)||void 0===r||null===(s=r.catDetails)||void 0===s?void 0:s.breeds[0].origin]}),Object(f.jsx)("h6",{children:null===(i=this.state)||void 0===i||null===(o=i.catDetails)||void 0===o?void 0:o.breeds[0].temperament}),Object(f.jsx)(E.a.Text,{children:null===(d=this.state)||void 0===d||null===(l=d.catDetails)||void 0===l?void 0:l.breeds[0].description})]})]}):Object(f.jsx)("h3",{className:"center-fixed",children:"Loading..."})})}},{key:"fetchCatImage",value:function(){var e=this,t=this.props.match.params.id,a={headers:{"x-api-key":Object({NODE_ENV:"production",PUBLIC_URL:"/neko",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_CAT_API_KEY},params:{image_id:t}};A.a.get("https://api.thecatapi.com/v1/images/"+t,a).then((function(t){e.setState({catDetails:t.data})})).catch((function(e){console.log(e.message)}))}},{key:"componentDidMount",value:function(){var e=this,t=this.props.cats.find((function(t){return t.id===e.props.match.params.id}));null==t?this.fetchCatImage():this.setState({catDetails:t})}}]),a}(n.Component)),M=Object(H.b)((function(e){return{cats:e.cat.cats}}))(K),W=a(7),G=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(f.jsx)("div",{className:"App",children:Object(f.jsx)(C.a,{children:Object(f.jsxs)(W.c,{children:[Object(f.jsx)(W.a,{exact:!0,path:"/",component:w}),Object(f.jsx)(W.a,{path:"/:id",component:M})]})})})}}]),a}(n.Component),V=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,86)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))},Y=a(24),J=a(50),Q=a(6),q={loading:!1,breeds:[],error:"",selectedBreed:"DEFAULT"},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return Object(Q.a)(Object(Q.a)({},e),{},{loading:!0});case T:return Object(Q.a)(Object(Q.a)({},e),{},{loading:!1,breeds:t.payload,error:""});case y:return Object(Q.a)(Object(Q.a)({},e),{},{loading:!1,breeds:[],error:t.payload});case D:return Object(Q.a)(Object(Q.a)({},e),{},{selectedBreed:t.payload});default:return Object(Q.a)({},e)}},X=a(37),Z={loading:!1,cats:[],error:"",paginationPage:1,canLoadMore:!0},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L:return Object(Q.a)(Object(Q.a)({},e),{},{loading:!0});case k:return Object(Q.a)(Object(Q.a)({},e),{},{loading:!1,cats:[].concat(Object(X.a)(e.cats),Object(X.a)(t.payload)),error:"",canLoadMore:t.payload.length>0});case R:return Object(Q.a)(Object(Q.a)({},e),{},{loading:!1,cats:[],error:t.payload});case F:return Object(Q.a)(Object(Q.a)({},e),{},{paginationPage:e.paginationPage+1});case N:return Object(Q.a)(Object(Q.a)({},e),{},{cats:[],paginationPage:1,canLoadMore:!0});default:return Object(Q.a)({},e)}},ee=Object(Y.d)(Object(Y.c)({breed:z,cat:$}),Object(Y.a)(J.a));s.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(H.a,{store:ee,children:Object(f.jsx)(G,{})})}),document.getElementById("root")),V()}},[[85,1,2]]]);
//# sourceMappingURL=main.297f57c2.chunk.js.map