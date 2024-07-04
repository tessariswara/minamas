"use strict";(self.webpackChunkberry_free_material_react_cra=self.webpackChunkberry_free_material_react_cra||[]).push([[834],{7220:function(e,r,t){var i=t(4535),a=t(6337);const n=(0,i.Ay)("div")({"& .MuiDataGrid-root":{border:"none"},"& .MuiDataGrid-cell":{borderBottom:"none"},"& .name-column--cell":{color:a.A.primary.main,cursor:"pointer"},"& .name-column--cell--capitalize":{textTransform:"capitalize"},"& .name-column--cell:hover":{textDecoration:"underline"},"& .MuiDataGrid-columnHeaders":{backgroundColor:a.A.grey[200],borderBottom:"none",outline:"none !important",borderRadius:"0px"},"& .MuiDataGrid-virtualScroller":{scrollbarWidth:"1px"},"& .MuiDataGrid-toolbarContainer .MuiButton-text":{textTransform:"capitalize",fontSize:"15px"},".MuiDataGrid-cell:focus,.MuiDataGrid-columnHeader:focus,MuiDataGrid-columnHeaderCheckbox:focus":{outline:"none !important"},".css-1jiby6q-MuiDataGrid-root .MuiDataGrid-columnHeader:focus-within, .css-1jiby6q-MuiDataGrid-root .MuiDataGrid-cell:focus-within":{outline:"none"}});r.A=n},6337:function(e,r,t){var i=t(310);const a={0:"#FFFFFF",100:"#F9FAFB",200:"#F4F6F8",300:"#DFE3E8",400:"#C4CDD5",500:"#919EAB",600:"#637381",700:"#454F5B",800:"#212B36",900:"#161C24"},n={common:{black:"#000",white:"#fff"},primary:{lighter:"#D1E9FC",light:"#76B0F1",main:"#2065D1",dark:"#103996",darker:"#061B64",contrastText:"#fff"},secondary:{lighter:"#D6E4FF",light:"#84A9FF",main:"#3366FF",dark:"#1939B7",darker:"#091A7A",contrastText:"#fff"},info:{lighter:"#D0F2FF",light:"#74CAFF",main:"#1890FF",dark:"#0C53B7",darker:"#04297A",contrastText:"#fff"},success:{lighter:"#E9FCD4",light:"#AAF27F",main:"#54D62C",dark:"#229A16",darker:"#08660D",contrastText:a[800]},warning:{lighter:"#FFF7CD",light:"#FFE16A",main:"#FFC107",dark:"#B78103",darker:"#7A4F01",contrastText:a[800]},error:{lighter:"#FFE7D9",light:"#FFA48D",main:"#FF4842",dark:"#B72136",darker:"#7A0C2E",contrastText:"#fff"},grey:a,divider:(0,i.X4)(a[500],.24),text:{primary:a[800],secondary:a[600],disabled:a[500]},background:{paper:"#fff",default:a[100],neutral:a[200]},action:{active:a[600],hover:(0,i.X4)(a[500],.08),selected:(0,i.X4)(a[500],.16),disabled:(0,i.X4)(a[500],.8),disabledBackground:(0,i.X4)(a[500],.24),focus:(0,i.X4)(a[500],.24),hoverOpacity:.08,disabledOpacity:.48}};r.A=n},3183:function(e,r,t){t.d(r,{A:function(){return c}});var i=t(5173),a=t.n(i),n=t(5043),o=t(6423),s=t(6446),l=t(579);const d=(0,n.forwardRef)(((e,r)=>{let{icon:t,width:i=20,sx:a,...n}=e;return(0,l.jsx)(s.A,{ref:r,component:o.In,icon:t,sx:{width:i,height:i,...a},...n})}));d.propTypes={sx:a().object,width:a().oneOfType([a().number,a().string]),icon:a().oneOfType([a().element,a().string])};var c=d},9834:function(e,r,t){t.r(r),t.d(r,{default:function(){return B}});var i=t(5043),a=t(9252),n=t(8911),o=t(5865),s=t(1906),l=t(6446),d=t(2110),c=t(7220),u=t(5151),m=t(1019),h=t(3183),p=t(35),x=t(8903),f=t(3193),A=t(1292),v=t(2221),g=t(2143),y=t(1673),b=t(7784),j=t(9347),C=t(5316),F=t(8533),k=t(4219),D=t(155),w=t(3516),S=t(3033),T=t(7503),W=t(6337),M=t(7154),G=t(7020),E=t(579);var N=e=>{const{open:r,handleClose:t,fetchCreditorData:i}=e,a=S.Ik({type:S.Yj().required("Type is required"),name:S.Yj().required(" Name is required"),phone:S.Yj().matches(/^[0-9]{10}$/,"Phone number is invalid").required("Phone number is required"),email:S.Yj().email("Invalid email").required("Email is required"),office_address:S.Yj().required("Address is required")}),n=(0,w.Wx)({initialValues:{type:"",name:"",phone:"",email:"",office_address:""},validationSchema:a,onSubmit:async e=>{console.log(e);try{const r=await M.A.post(null===G.p||void 0===G.p?void 0:G.p.addCreditor,e);console.log("API response:",r.data),"internal server error"==r.data?T.oR.error("Something Went Wrong",{autoClose:600}):(T.oR.success("data saved successfully",{autoClose:600}),n.resetForm(),t(),await i())}catch(r){console.error("Error SavingData:",r),T.oR.error("Failed to add SavingData",{autoClose:600})}}});return(0,E.jsx)("div",{children:(0,E.jsxs)(p.A,{open:r,onClose:t,"aria-labelledby":"scroll-dialog-title","aria-describedby":"scroll-dialog-description",children:[(0,E.jsxs)(k.A,{id:"scroll-dialog-title",style:{display:"flex",justifyContent:"space-between"},children:[(0,E.jsx)(o.A,{variant:"h3",style:{marginLeft:"180px"},children:"Add New Creditor"}),(0,E.jsx)(o.A,{children:(0,E.jsx)(D.A,{onClick:t,style:{cursor:"pointer"}})})]}),(0,E.jsx)(C.A,{dividers:!0,children:(0,E.jsxs)("form",{onSubmit:n.handleSubmit,children:[(0,E.jsxs)(F.A,{id:"scroll-dialog-description",tabIndex:-1,children:[(0,E.jsx)(o.A,{style:{marginBottom:"15px"},variant:"h6",children:(0,E.jsx)("h1",{children:"Enter Creditor Details"})}),(0,E.jsxs)(x.Ay,{container:!0,rowSpacing:3,columnSpacing:{xs:0,sm:5,md:4},children:[(0,E.jsx)(x.Ay,{item:!0,xs:12,sm:6,md:6,children:(0,E.jsxs)(f.A,{fullWidth:!0,children:[(0,E.jsx)(A.A,{children:"TYPE"}),(0,E.jsxs)(v.A,{labelId:"demo-simple-select-label",id:"type",name:"type",label:"",size:"small",fullWidth:!0,value:n.values.type||"",onChange:n.handleChange,error:n.touched.type&&Boolean(n.errors.type),helperText:n.touched.type&&n.errors.type,children:[(0,E.jsx)(g.A,{value:"individual",children:"Individual"}),(0,E.jsx)(g.A,{value:"government",children:"Government "}),(0,E.jsx)(g.A,{value:"company",children:"Company"})]}),(0,E.jsx)(y.A,{style:{color:W.A.error.main},children:n.touched.type&&n.errors.type})]})}),(0,E.jsxs)(x.Ay,{item:!0,xs:12,sm:6,md:6,children:[(0,E.jsx)(A.A,{children:"Full Name"}),(0,E.jsx)(b.A,{id:"name",name:"name",size:"small",type:"string",fullWidth:!0,value:n.values.name,onChange:n.handleChange,error:n.touched.name&&Boolean(n.errors.name),helperText:n.touched.name&&n.errors.name})]}),(0,E.jsxs)(x.Ay,{item:!0,xs:12,sm:6,md:6,children:[(0,E.jsx)(A.A,{children:"Email"}),(0,E.jsx)(b.A,{id:"email",name:"email",size:"small",type:"string",fullWidth:!0,value:n.values.email,onChange:n.handleChange,error:n.touched.email&&Boolean(n.errors.email),helperText:n.touched.email&&n.errors.email})]}),(0,E.jsxs)(x.Ay,{item:!0,xs:12,sm:6,md:6,children:[(0,E.jsx)(A.A,{children:"Phone Number"}),(0,E.jsx)(b.A,{id:"phone",name:"phone",size:"small",type:"number",fullWidth:!0,value:n.values.phone,onChange:n.handleChange,error:n.touched.phone&&Boolean(n.errors.phone),helperText:n.touched.phone&&n.errors.phone})]}),(0,E.jsxs)(x.Ay,{item:!0,xs:12,sm:12,md:12,children:[(0,E.jsx)(A.A,{children:"Office Address"}),(0,E.jsx)(b.A,{id:"office_address",name:"office_address",size:"small",type:"string",fullWidth:!0,value:n.values.office_address,onChange:n.handleChange,error:n.touched.office_address&&Boolean(n.errors.office_address),helperText:n.touched.office_address&&n.errors.office_address})]})]})]}),(0,E.jsxs)(j.A,{children:[(0,E.jsx)(s.A,{variant:"contained",color:"primary",type:"submit",children:"Save"}),(0,E.jsx)(s.A,{onClick:()=>{n.resetForm(),t()},variant:"outlined",color:"error",children:"Cancel"})]})]})})]})})};var B=()=>{const[e,r]=(0,i.useState)(!1),[t,p]=(0,i.useState)([]),x=async()=>{try{const e=await M.A.get(null===G.p||void 0===G.p?void 0:G.p.getCreditor);console.log(e);const r=e.data.map((e=>({name:null===e||void 0===e?void 0:e.name,phone:null===e||void 0===e?void 0:e.phone,email:null===e||void 0===e?void 0:e.email,address:null===e||void 0===e?void 0:e.office_address,client:null===e||void 0===e?void 0:e.type,id:null===e||void 0===e?void 0:e._id})));p(r)}catch(e){console.error("Error fetching fuel data:",e)}};return(0,i.useEffect)((()=>{x()}),[]),(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(N,{open:e,handleClose:()=>r(!1),fetchCreditorData:x}),(0,E.jsxs)(a.A,{children:[(0,E.jsxs)(n.A,{direction:"row",alignItems:"center",mb:5,justifyContent:"space-between",children:[(0,E.jsx)(o.A,{variant:"h4",children:"Creditors Lists"}),(0,E.jsx)(n.A,{direction:"row",alignItems:"center",justifyContent:"flex-end",spacing:2,children:(0,E.jsx)(s.A,{variant:"contained",startIcon:(0,E.jsx)(h.A,{icon:"eva:plus-fill"}),onClick:()=>r(!0),children:"Add Creditors"})})]}),(0,E.jsx)(c.A,{children:(0,E.jsx)(l.A,{width:"100%",children:(0,E.jsx)(d.A,{style:{height:"600px",paddingTop:"15px"},children:(0,E.jsx)(u.zh,{rows:t&&t,columns:[{field:"name",headerName:"NAME",flex:1,cellClassName:"name-column--cell--capitalize"},{field:"phone",headerName:"PHONE",flex:1,cellClassName:"name-column--cell--capitalize"},{field:"email",headerName:"EMAIL",flex:1},{field:"address",headerName:"ADDRESS",flex:1},{field:"client",headerName:"CLIENT",flex:1}],getRowId:e=>e.id,slots:{toolbar:m.O},slotProps:{toolbar:{showQuickFilter:!0}}})})})})]})]})}},9252:function(e,r,t){t.d(r,{A:function(){return j}});var i=t(8587),a=t(8168),n=t(5043),o=t(8387),s=t(2400),l=t(8606),d=t(410),c=t(2900),u=t(9644),m=t(8280),h=t(579);const p=["className","component","disableGutters","fixed","maxWidth","classes"],x=(0,m.A)(),f=(0,u.A)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,r[`maxWidth${(0,d.A)(String(t.maxWidth))}`],t.fixed&&r.fixed,t.disableGutters&&r.disableGutters]}}),A=e=>(0,c.A)({props:e,name:"MuiContainer",defaultTheme:x});var v=t(6803),g=t(4535),y=t(2876);const b=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{createStyledComponent:r=f,useThemeProps:t=A,componentName:c="MuiContainer"}=e,u=r((e=>{let{theme:r,ownerState:t}=e;return(0,a.A)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!t.disableGutters&&{paddingLeft:r.spacing(2),paddingRight:r.spacing(2),[r.breakpoints.up("sm")]:{paddingLeft:r.spacing(3),paddingRight:r.spacing(3)}})}),(e=>{let{theme:r,ownerState:t}=e;return t.fixed&&Object.keys(r.breakpoints.values).reduce(((e,t)=>{const i=t,a=r.breakpoints.values[i];return 0!==a&&(e[r.breakpoints.up(i)]={maxWidth:`${a}${r.breakpoints.unit}`}),e}),{})}),(e=>{let{theme:r,ownerState:t}=e;return(0,a.A)({},"xs"===t.maxWidth&&{[r.breakpoints.up("xs")]:{maxWidth:Math.max(r.breakpoints.values.xs,444)}},t.maxWidth&&"xs"!==t.maxWidth&&{[r.breakpoints.up(t.maxWidth)]:{maxWidth:`${r.breakpoints.values[t.maxWidth]}${r.breakpoints.unit}`}})})),m=n.forwardRef((function(e,r){const n=t(e),{className:m,component:x="div",disableGutters:f=!1,fixed:A=!1,maxWidth:v="lg"}=n,g=(0,i.A)(n,p),y=(0,a.A)({},n,{component:x,disableGutters:f,fixed:A,maxWidth:v}),b=((e,r)=>{const{classes:t,fixed:i,disableGutters:a,maxWidth:n}=e,o={root:["root",n&&`maxWidth${(0,d.A)(String(n))}`,i&&"fixed",a&&"disableGutters"]};return(0,l.A)(o,(e=>(0,s.Ay)(r,e)),t)})(y,c);return(0,h.jsx)(u,(0,a.A)({as:x,ownerState:y,className:(0,o.A)(b.root,m),ref:r},g))}));return m}({createStyledComponent:(0,g.Ay)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,r[`maxWidth${(0,v.A)(String(t.maxWidth))}`],t.fixed&&r.fixed,t.disableGutters&&r.disableGutters]}}),useThemeProps:e=>(0,y.A)({props:e,name:"MuiContainer"})});var j=b},8533:function(e,r,t){t.d(r,{A:function(){return A}});var i=t(8587),a=t(8168),n=t(5043),o=t(8387),s=t(8606),l=t(4535),d=t(2876),c=t(5865),u=t(7056),m=t(2400);function h(e){return(0,m.Ay)("MuiDialogContentText",e)}(0,u.A)("MuiDialogContentText",["root"]);var p=t(579);const x=["children","className"],f=(0,l.Ay)(c.A,{shouldForwardProp:e=>(0,l.ep)(e)||"classes"===e,name:"MuiDialogContentText",slot:"Root",overridesResolver:(e,r)=>r.root})({});var A=n.forwardRef((function(e,r){const t=(0,d.A)({props:e,name:"MuiDialogContentText"}),{className:n}=t,l=(0,i.A)(t,x),c=(e=>{const{classes:r}=e,t=(0,s.A)({root:["root"]},h,r);return(0,a.A)({},r,t)})(l);return(0,p.jsx)(f,(0,a.A)({component:"p",variant:"body1",color:"text.secondary",ref:r,ownerState:l,className:(0,o.A)(c.root,n)},t,{classes:c}))}))}}]);
//# sourceMappingURL=834.70dc227f.chunk.js.map