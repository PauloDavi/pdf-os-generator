(this["webpackJsonppdf-os-geretor"]=this["webpackJsonppdf-os-geretor"]||[]).push([[0],{449:function(e,t){},451:function(e,t){},491:function(e,t){},492:function(e,t){},633:function(e,t,n){},635:function(e,t,n){"use strict";n.r(t);var a=n(8),l=n(1),c=n.n(l),r=n(24),i=n.n(r),s=n(208),o=n(47),j=n(11),d=n(667),b=n(668),u="#bfbfbf",x="solid",O=j.e.create({body:{padding:"20 20 90 20"},table:{display:"table",width:"auto",borderStyle:x,borderColor:u,borderWidth:1,borderRightWidth:0,borderBottomWidth:0},tableRow:{margin:"auto",flexDirection:"row"},tableCol:{borderStyle:x,borderColor:u,borderWidth:1,borderLeftWidth:0,borderTopWidth:0},tableCellHeader:{margin:5,fontSize:12,fontWeight:500},centerTextTableCell:{display:"flex",margin:"auto",justifyContent:"center",alignItems:"center"},tableCell:{margin:5,fontSize:10},title:{fontSize:24,textAlign:"center"},text:{marginHorizontal:14,marginVertical:4,fontSize:14,textAlign:"justify",fontFamily:"Times-Roman"},pageNumber:{position:"absolute",fontSize:12,bottom:30,left:0,right:0,fontWeight:"bold",textAlign:"center"}}),h=function(e){var t=e.address,n=e.cpf,l=e.cnpj,c=e.cep,r=e.date,i=e.name,s=e.inscEstad,o=e.inscMun,u=e.bairro,x=e.city,h=e.proposta,y=e.phone,g=e.represent,f=e.itensList,m=e.obs,p=e.email,v=new Date;function C(e){return"R$ ".concat(e)}return Object(a.jsx)(j.a,{children:Object(a.jsxs)(j.d,{style:O.body,children:[Object(a.jsx)(j.f,{style:O.title,children:"ORDEM DE COMPRA/ PROPOSTA"}),Object(a.jsx)(j.g,{style:[O.table,{marginTop:10}],children:Object(a.jsxs)(j.g,{style:O.tableRow,children:[Object(a.jsx)(j.g,{style:[O.tableCol,{width:"20%"}],children:Object(a.jsx)(j.f,{style:O.tableCellHeader,children:"N\xba da Proposta"})}),Object(a.jsx)(j.g,{style:[O.tableCol,{width:"80%"}],children:Object(a.jsx)(j.f,{style:O.tableCellHeader,children:h||"".concat(Object(b.a)(),"/").concat(v.getFullYear())})})]})}),Object(a.jsx)(j.g,{style:[O.table,{marginTop:"10px"}],children:Object(a.jsxs)(j.g,{style:O.tableRow,children:[Object(a.jsx)(j.g,{style:[O.tableCol,{width:"20%"}],children:Object(a.jsx)(j.g,{style:O.centerTextTableCell,children:Object(a.jsx)(j.f,{style:O.tableCellHeader,children:"Fonte pagadora"})})}),Object(a.jsxs)(j.g,{style:[O.tableCol,{width:"80%"}],children:[Object(a.jsx)(j.f,{style:O.text,children:"Raz\xe3o Social / Pessoa F\xedsica: ".concat(i)}),Object(a.jsx)(j.f,{style:O.text,children:"Data de Nascimento: ".concat(r)}),Object(a.jsx)(j.f,{style:O.text,children:"CNPJ: ".concat(l)}),Object(a.jsx)(j.f,{style:O.text,children:"Inscri\xe7\xe3o Estadual: ".concat(s)}),Object(a.jsx)(j.f,{style:O.text,children:"Inscri\xe7\xe3o Municipal: ".concat(o)}),Object(a.jsx)(j.f,{style:O.text,children:"Endere\xe7o: ".concat(t)}),Object(a.jsx)(j.f,{style:O.text,children:"Bairro: ".concat(u)}),Object(a.jsx)(j.f,{style:O.text,children:"Cidade: ".concat(x)}),Object(a.jsx)(j.f,{style:O.text,children:"CEP: ".concat(c)}),Object(a.jsx)(j.f,{style:O.text,children:"Representante Legal: ".concat(g)}),Object(a.jsx)(j.f,{style:O.text,children:"CPF: ".concat(n)}),Object(a.jsx)(j.f,{style:O.text,children:"Telefone: ".concat(y)}),Object(a.jsx)(j.f,{style:O.text,children:"E-mail: ".concat(p)})]})]})}),Object(a.jsxs)(j.g,{style:[O.table,{marginTop:"10px"}],children:[Object(a.jsx)(j.g,{style:O.tableRow,children:Object(a.jsx)(j.g,{style:[O.tableCol,{width:"100%"}],children:Object(a.jsx)(j.g,{style:O.centerTextTableCell,children:Object(a.jsx)(j.f,{style:O.tableCellHeader,children:"Or\xe7amento"})})})}),Object(a.jsxs)(j.g,{style:O.tableRow,children:[Object(a.jsx)(j.g,{style:[O.tableCol,{width:"18%"}],children:Object(a.jsx)(j.f,{style:O.text,children:"Quantidade"})}),Object(a.jsx)(j.g,{style:[O.tableCol,{width:"46%"}],children:Object(a.jsx)(j.f,{style:O.text,children:"Especifica\xe7\xe3o"})}),Object(a.jsx)(j.g,{style:[O.tableCol,{width:"20%"}],children:Object(a.jsx)(j.f,{style:O.text,children:"Valor unit\xe1rio"})}),Object(a.jsx)(j.g,{style:[O.tableCol,{width:"16%"}],children:Object(a.jsx)(j.f,{style:O.text,children:"Valor total"})})]}),Object(a.jsxs)(j.g,{style:O.tableRow,children:[Object(a.jsx)(j.g,{style:[O.tableCol,{width:"18%"}],children:f.map((function(e){return Object(a.jsx)(j.f,{style:O.text,children:e.quant},e.description)}))}),Object(a.jsx)(j.g,{style:[O.tableCol,{width:"46%"}],children:f.map((function(e){return Object(a.jsx)(j.f,{style:O.text,children:e.description||" "},e.description)}))}),Object(a.jsx)(j.g,{style:[O.tableCol,{width:"20%"}],children:f.map((function(e){return Object(a.jsx)(j.f,{style:O.text,children:C(e.value)},e.description)}))}),Object(a.jsx)(j.g,{style:[O.tableCol,{width:"16%"}],children:Object(a.jsx)(j.f,{style:O.text,children:function(){var e=0;return f.forEach((function(t){return e+=t.quant*Number(t.value.replace(",","."))})),C(e.toFixed(2).toString().replace(".",","))}()})})]}),Object(a.jsx)(j.g,{style:O.tableRow,children:Object(a.jsx)(j.g,{style:[O.tableCol,{width:"100%"}],children:Object(a.jsx)(j.f,{style:O.text,children:"Observa\xe7\xf5es: ".concat(m)})})}),Object(a.jsx)(j.g,{style:O.tableRow,children:Object(a.jsx)(j.g,{style:[O.tableCol,{width:"100%"}],children:Object(a.jsx)(j.g,{style:O.centerTextTableCell,children:Object(a.jsx)(j.f,{style:O.text,children:"Dados da Fatura"})})})}),Object(a.jsxs)(j.g,{style:O.tableRow,children:[Object(a.jsx)(j.g,{style:[O.tableCol,{width:"33%"}],children:Object(a.jsx)(j.f,{style:O.text,children:"Tipo de Fatura"})}),Object(a.jsx)(j.g,{style:[O.tableCol,{width:"33%"}],children:Object(a.jsx)(j.f,{style:O.text,children:"Condi\xe7\xf5es de Pagamento"})}),Object(a.jsx)(j.g,{style:[O.tableCol,{width:"34%"}],children:Object(a.jsx)(j.f,{style:O.text,children:"Formas de Pagamento"})})]}),Object(a.jsxs)(j.g,{style:O.tableRow,children:[Object(a.jsx)(j.g,{style:[O.tableCol,{width:"33%"}],children:Object(a.jsx)(j.f,{style:O.text,children:"Faturado pela Fade-UFPE"})}),Object(a.jsx)(j.g,{style:[O.tableCol,{width:"33%"}],children:Object(a.jsx)(j.f,{style:O.text,children:"Boleto Banc\xe1rio"})}),Object(a.jsx)(j.g,{style:[O.tableCol,{width:"34%"}],children:Object(a.jsx)(j.f,{style:O.text,children:"Parcela \xfanica"})})]})]}),Object(a.jsxs)(j.g,{style:[O.table,{marginTop:"10px"}],children:[Object(a.jsx)(j.g,{style:O.tableRow,children:Object(a.jsx)(j.g,{style:[O.tableCol,{width:"100%"}],children:Object(a.jsx)(j.g,{style:O.centerTextTableCell,children:Object(a.jsx)(j.f,{style:O.tableCellHeader,children:"Termos e Condi\xe7\xf5es"})})})}),Object(a.jsx)(j.g,{style:O.tableRow,children:Object(a.jsxs)(j.g,{style:[O.tableCol,{width:"100%"}],children:[Object(a.jsx)(j.f,{style:O.text,children:"1. A presente proposta vincula-se ao Conv\xeanio de Arrecada\xe7\xe3o n\xb0 1072.11.0320 - UFPB | FADE - FABLAB UFPB; Incentivando a Tecnologia e a Criatividade"}),Object(a.jsx)(j.f,{style:O.text,children:"2. A CONTRATANTE compromete-se a efetuar o pagamento dos excedentes at\xe9 o vencimento do boleto respectivo, sob pena da CONTRATADA suspender a entrega dos excedentes pela inadimpl\xeancia do pagamento."})]})}),Object(a.jsxs)(j.g,{style:O.tableRow,children:[Object(a.jsx)(j.g,{style:[O.tableCol,{width:"45%"}],children:Object(a.jsx)(j.f,{style:O.text,children:"Local e Data"})}),Object(a.jsx)(j.g,{style:[O.tableCol,{width:"55%"}],children:Object(a.jsx)(j.f,{style:O.text,children:"Assinatura e Carimbo do Representante Legal"})})]}),Object(a.jsxs)(j.g,{style:O.tableRow,children:[Object(a.jsx)(j.g,{style:[O.tableCol,{width:"45%"}],children:Object(a.jsx)(j.f,{style:O.text,children:"Jo\xe3o Pessoa, PB \u2013 ".concat(Object(d.a)(v,"dd/MM/yyyy"))})}),Object(a.jsx)(j.g,{style:[O.tableCol,{width:"55%"}],children:Object(a.jsx)(j.f,{style:O.text})})]})]}),Object(a.jsx)(j.f,{style:O.pageNumber,render:function(e){var t=e.pageNumber,n=e.totalPages;return"FABLAB - Laborat\xf3rio de Fabrica\xe7\xe3o Digital\nUniversidade Federal da Para\xedba\n".concat(t," / ").concat(n)},fixed:!0})]})})},y=n(108),g=n.n(y),f=n(651),m=n(665),p=n(666),v=n(662),C=n(433),T=n.n(C),w=n(429),B=n.n(w),P=(n(633),n.p+"static/media/logo2.6fb704bc.png");var S=function(){var e=Object(l.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1],r=Object(l.useState)(""),i=Object(o.a)(r,2),d=i[0],b=i[1],u=Object(l.useState)(""),x=Object(o.a)(u,2),O=x[0],y=x[1],C=Object(l.useState)(""),w=Object(o.a)(C,2),S=w[0],R=w[1],F=Object(l.useState)(""),A=Object(o.a)(F,2),N=A[0],E=A[1],D=Object(l.useState)(""),L=Object(o.a)(D,2),M=L[0],k=L[1],z=Object(l.useState)("isento"),I=Object(o.a)(z,2),W=I[0],H=I[1],V=Object(l.useState)("isento"),q=Object(o.a)(V,2),J=q[0],U=q[1],Q=Object(l.useState)(""),$=Object(o.a)(Q,2),G=$[0],Y=$[1],K=Object(l.useState)(""),X=Object(o.a)(K,2),Z=X[0],_=X[1],ee=Object(l.useState)(""),te=Object(o.a)(ee,2),ne=te[0],ae=te[1],le=Object(l.useState)(""),ce=Object(o.a)(le,2),re=ce[0],ie=ce[1],se=Object(l.useState)(""),oe=Object(o.a)(se,2),je=oe[0],de=oe[1],be=Object(l.useState)(""),ue=Object(o.a)(be,2),xe=ue[0],Oe=ue[1],he=Object(l.useState)(""),ye=Object(o.a)(he,2),ge=ye[0],fe=ye[1],me=Object(l.useState)("fisica"),pe=Object(o.a)(me,2),ve=pe[0],Ce=pe[1],Te=Object(l.useState)(!1),we=Object(o.a)(Te,2),Be=we[0],Pe=we[1],Se=Object(l.useState)([{quant:1,description:"",value:""}]),Re=Object(o.a)(Se,2),Fe=Re[0],Ae=Re[1],Ne=function(e,t){var n=e.target,a=n.name,l=n.value;"quant"===a&&(l=l>0?l:1);var c=Object(s.a)(Fe);c[t][a]=l,Ae(c)};return Object(a.jsxs)("div",{className:"divPrincipal",children:[Object(a.jsxs)("form",{className:"tamanhoMenor",style:{margin:"50px auto 20px auto",display:"flex",flexDirection:"column",justifyContent:"center"},children:[Object(a.jsx)("img",{style:{margin:"auto"},src:P,width:300,alt:"logo"}),Object(a.jsx)("h1",{style:{textAlign:"center"},children:"ORDEM DE COMPRA/ PROPOSTA"}),Object(a.jsxs)(f.a,{style:{width:"100%",marginBottom:10},variant:"outlined",open:Be,onClose:function(){return Pe(!1)},onOpen:function(){return Pe(!0)},value:ve,onChange:function(e){return Ce(e.target.value)},children:[Object(a.jsx)(m.a,{value:"fisica",children:"Pessoa F\xedsica"}),Object(a.jsx)(m.a,{value:"juridica",children:"Pessoa Jur\xeddica"})]}),Object(a.jsxs)("div",{className:"memor2",style:{display:"flex"},children:[Object(a.jsxs)("div",{className:"inputmemor1",style:{display:"flex",flexDirection:"column"},children:[Object(a.jsx)(g.a,{mask:"99/9999",type:"number",onBlur:function(e){return Oe(e.currentTarget.value)},children:function(){return Object(a.jsx)(p.a,{label:"N\xba da Proposta",variant:"outlined"})}}),Object(a.jsx)(p.a,{style:{marginTop:10},label:"Raz\xe3o Social/ Pessoa F\xedsica",variant:"outlined",onBlur:function(e){return k(e.currentTarget.value)}}),"fisica"===ve&&Object(a.jsx)(g.a,{mask:"99/99/9999",type:"data",onBlur:function(e){return E(e.currentTarget.value)},children:function(){return Object(a.jsx)(p.a,{style:{marginTop:10},label:"Data de Nascimento",variant:"outlined"})}}),"fisica"===ve&&Object(a.jsx)(g.a,{mask:"999.999.999-99",type:"number",onBlur:function(e){return b(e.currentTarget.value)},children:function(){return Object(a.jsx)(p.a,{style:{marginTop:10},label:"CPF",variant:"outlined"})}}),"juridica"===ve&&Object(a.jsx)(g.a,{mask:"999.999.999-99",type:"number",onBlur:function(e){return y(e.currentTarget.value)},children:function(){return Object(a.jsx)(p.a,{style:{marginTop:10},label:"CNPJ",variant:"outlined"})}}),"juridica"===ve&&Object(a.jsx)(p.a,{style:{marginTop:10},label:"Inscri\xe7\xe3o Estadual",value:W,onBlur:function(e){return H(e.currentTarget.value)},variant:"outlined"}),"juridica"===ve&&Object(a.jsx)(p.a,{style:{marginTop:10},label:"Inscri\xe7\xe3o Municipal",value:J,onBlur:function(e){return U(e.currentTarget.value)},variant:"outlined"}),Object(a.jsx)(p.a,{label:"Endere\xe7o",style:{marginTop:10},onBlur:function(e){return c(e.currentTarget.value)},variant:"outlined"})]}),Object(a.jsxs)("div",{className:"inputmemor2",style:{display:"flex",flexDirection:"column"},children:[Object(a.jsx)(p.a,{label:"Bairro",onBlur:function(e){return Y(e.currentTarget.value)},variant:"outlined"}),Object(a.jsx)(p.a,{style:{marginTop:10},label:"Cidade",onBlur:function(e){return _(e.currentTarget.value)},variant:"outlined"}),Object(a.jsx)(g.a,{mask:"99999-999",type:"number",onBlur:function(e){return R(e.currentTarget.value)},children:function(){return Object(a.jsx)(p.a,{style:{marginTop:10},label:"CEP",variant:"outlined"})}}),"juridica"===ve&&Object(a.jsx)(p.a,{style:{marginTop:10},label:"Representante Legal",onBlur:function(e){return ie(e.currentTarget.value)},variant:"outlined"}),Object(a.jsx)(g.a,{mask:"(99) 99999-9999",type:"tel",onBlur:function(e){return ae(e.currentTarget.value)},children:function(){return Object(a.jsx)(p.a,{style:{marginTop:10},label:"Telefone",variant:"outlined"})}}),Object(a.jsx)(p.a,{style:{marginTop:10},label:"E-mail",onBlur:function(e){return de(e.currentTarget.value)},type:"email",variant:"outlined"})]})]}),Object(a.jsx)(p.a,{style:{marginTop:10,width:"100%"},label:"Observa\xe7\xf5es",name:"obs",multiline:!0,variant:"outlined",rows:4,onBlur:function(e){return fe(e.currentTarget.value)}}),Object(a.jsx)("hr",{color:"#222222",style:{width:"100%",marginTop:25,marginBottom:15}}),Object(a.jsxs)("div",{children:[Fe.map((function(e,t){return Object(a.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(a.jsx)(p.a,{style:{marginTop:10,width:80},label:"Quant.",variant:"outlined",name:"quant",type:"number",onBlur:function(e){return Ne(e,t)}}),Object(a.jsx)(p.a,{style:{marginTop:10,width:"55%",marginLeft:10},label:"Descri\xe7\xe3o",name:"description",variant:"outlined",onBlur:function(e){return Ne(e,t)}}),Object(a.jsx)(B.a,{style:{marginTop:10,width:120,marginLeft:10},label:"Valor Un.",variant:"outlined",name:"value",decimalCharacter:",",digitGroupSeparator:"",minimumValue:0,maximumValue:1e5,decimalPlacesShownOnFocus:2,decimalPlaces:2,currencySymbol:"R$ ",outputFormat:"string",onBlur:function(e,n){return Ne(e,t)}}),Object(a.jsx)("div",{style:{marginLeft:"auto"},children:Object(a.jsx)(v.a,{variant:"contained",style:{height:64,marginLeft:10,marginTop:10,width:48,borderRadius:"50%"},onClick:function(){return function(e){var t=Object(s.a)(Fe);t.splice(e,1),Ae(t)}(t)},children:Object(a.jsx)(T.a,{})})})]})})),Object(a.jsx)(v.a,{variant:"contained",style:{height:56,width:"100%",marginTop:10},onClick:function(){Ae([].concat(Object(s.a)(Fe),[{quant:1,description:"",value:""}]))},children:"Adicionar Item"})]})]}),Object(a.jsxs)("div",{className:"pdfContent",children:[Object(a.jsx)("h2",{className:"labelPdf",children:"Pre-visualiza\xe7\xe3o"}),Object(a.jsx)(j.c,{className:"pdfView tamanhoMenor3",children:Object(a.jsx)(h,{itensList:Fe,obs:ge,address:n,proposta:xe,cpf:d,cnpj:O,cep:S,date:N,name:M,inscEstad:W,inscMun:J,bairro:G,city:Z,phone:ne,represent:re,email:je})}),Object(a.jsx)(v.a,{className:"button",variant:"contained",style:{width:"100%",marginTop:10,height:52,padding:0},children:Object(a.jsx)(j.b,{style:{width:"100%",height:"100%",textDecoration:"none",color:"#222222",display:"flex",alignItems:"center",justifyContent:"center"},document:Object(a.jsx)(h,{address:n,itensList:Fe,obs:ge,cpf:d,cnpj:O,cep:S,date:N,name:M,inscEstad:W,inscMun:J,bairro:G,city:Z,proposta:xe,phone:ne,represent:re,email:je}),fileName:"boleto-".concat(xe.replace("/","-"),".pdf"),children:function(e){e.blob,e.url;var t=e.loading;e.error;return t?"Fazendo Download...":"Baixar PDF"}})})]})]})};i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(S,{})}),document.getElementById("root"))}},[[635,1,2]]]);
//# sourceMappingURL=main.f6a32ae1.chunk.js.map