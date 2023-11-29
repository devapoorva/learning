"use strict";(self.webpackChunklearning=self.webpackChunklearning||[]).push([[117],{2117:(O,u,o)=>{o.r(u),o.d(u,{PackageModule:()=>L,routes:()=>p});var c=o(6814),d=o(6223),v=o(1896),h=o(420),l=o(6472),f=o(593),a=o(5879),Z=o(9045),x=o(2939),g=o(3814),P=o(2296),C=o(5195),m=o(2557),A=o(617),T=o(6385),U=o(2596);function k(t,s){if(1&t&&(a.TgZ(0,"mat-chip-listbox",12)(1,"mat-chip-option",13),a._uU(2),a.qZA()()),2&t){const i=s.$implicit;a.xp6(2),a.Oqu(i.name)}}function y(t,s){if(1&t&&(a.TgZ(0,"div",7)(1,"div",8),a._uU(2),a.qZA(),a.TgZ(3,"div",8),a._uU(4),a.qZA(),a.TgZ(5,"div",8),a.YNc(6,k,3,1,"mat-chip-listbox",9),a.qZA(),a.TgZ(7,"div",8),a._uU(8),a.qZA(),a.TgZ(9,"div",8)(10,"div",0)(11,"button",10)(12,"mat-icon"),a._uU(13,"edit"),a.qZA()(),a.TgZ(14,"button",11)(15,"mat-icon"),a._uU(16,"delete"),a.qZA()()()()()),2&t){const i=s.$implicit;let e,n,r;a.xp6(2),a.Oqu(null!==(e=i.planName)&&void 0!==e?e:"N/A"),a.xp6(2),a.hij(" ",null!==(n=i.price)&&void 0!==n?n:"N/A",""),a.xp6(2),a.Q6J("ngForOf",i.courses),a.xp6(2),a.hij(" ",null!==(r=i.description)&&void 0!==r?r:"N/A","")}}function F(t,s){if(1&t){const i=a.EpF();a.TgZ(0,"div",14)(1,"div",15)(2,"mat-card",16)(3,"pagination-controls",17),a.NdJ("pageChange",function(n){a.CHM(i);const r=a.oxw();return a.KtG(r.onPageChanged(n))}),a.qZA()()()()}2&t&&(a.xp6(3),a.Q6J("maxSize",100)("autoHide",!0))}const N=function(t,s,i){return{itemsPerPage:t,currentPage:s,totalItems:i}},p=[{path:"course",component:(()=>{var t;class s{constructor(e,n){this.apiService=e,this.snackBar=n,this.courses=[],this.page=1,this.pageSize=5,this.total=0}ngOnInit(){this.getCoursePackages()}getCoursePackages(){this.apiService.getCoursePackages(this.page,this.pageSize).subscribe({next:e=>{console.log(e),this.courses=e.data.content,this.total=e.data.totalElements},error:e=>{this.snackBar.open(e,"x",{panelClass:"error",verticalPosition:"top",duration:3e3})}})}onPageChanged(e){this.page=e,this.getCoursePackages(),window.scrollTo(0,0)}}return(t=s).\u0275fac=function(e){return new(e||t)(a.Y36(Z.s),a.Y36(x.ux))},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-package-course"]],decls:21,vars:9,consts:[[1,"p-2"],["fxLayout","row wrap","fxLayoutAlign","space-between center",1,"w-100","p-3"],[1,"mat-mdc-table","admin-table"],[1,"mat-mdc-header-row"],[1,"mat-mdc-header-cell"],["class","mat-mdc-row",4,"ngFor","ngForOf"],["fxLayout","row wrap",4,"ngIf"],[1,"mat-mdc-row"],[1,"mat-mdc-cell"],["aria-label","course selection",4,"ngFor","ngForOf"],["mat-mini-fab","","color","primary","matTooltip","Edit"],["mat-mini-fab","","color","warn","matTooltip","Delete","disabled","",1,"mx-1"],["aria-label","course selection"],["disabled",""],["fxLayout","row wrap"],["fxFlex","100"],[1,"text-center"],["previousLabel","Previous","nextLabel","Next",1,"product-pagination",3,"maxSize","autoHide","pageChange"]],template:function(e,n){1&e&&(a.TgZ(0,"div",0)(1,"mat-card")(2,"div",1)(3,"h2"),a._uU(4,"List Course Package"),a.qZA()(),a._UZ(5,"mat-divider"),a.TgZ(6,"div",2)(7,"div",3)(8,"div",4),a._uU(9,"Name"),a.qZA(),a.TgZ(10,"div",4),a._uU(11,"Price"),a.qZA(),a.TgZ(12,"div",4),a._uU(13,"Courses"),a.qZA(),a.TgZ(14,"div",4),a._uU(15,"Description"),a.qZA(),a.TgZ(16,"div",4),a._uU(17,"Action"),a.qZA()(),a.YNc(18,y,17,4,"div",5),a.ALo(19,"paginate"),a.qZA()(),a.YNc(20,F,4,2,"div",6),a.qZA()),2&e&&(a.xp6(18),a.Q6J("ngForOf",a.xi3(19,2,n.courses,a.kEZ(5,N,n.pageSize,n.page,n.total))),a.xp6(2),a.Q6J("ngIf",n.courses.length>0))},dependencies:[g.xw,g.Wh,g.yH,P.nh,C.a8,m.z2,m.iO,A.Hw,T.d,U.gM,c.sg,c.O5,l.LS,l._s]}),s})(),pathMatch:"full"}];let L=(()=>{var t;class s{}return(t=s).\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[f.m,c.ez,v.Bz.forChild(p),d.UX,l.JX,h.UM,d.u5]}),s})()}}]);