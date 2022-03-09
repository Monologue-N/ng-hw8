(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/apple/ng-hw8/ng-usc-films/src/main.ts */"zUnb");


/***/ }),

/***/ "29r4":
/*!***************************************************************!*\
  !*** ./src/app/components/type-ahead/type-ahead.component.ts ***!
  \***************************************************************/
/*! exports provided: TypeAheadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeAheadComponent", function() { return TypeAheadComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/search.service */ "l3hs");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");






function TypeAheadComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ngb-highlight", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const r_r2 = ctx.result;
    const t_r3 = ctx.term;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate2"]("routerLink", "/watch/", r_r2.media_type, "/", r_r2.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", r_r2["backdrop_path"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("result", r_r2.title)("term", t_r3);
} }
class TypeAheadComponent {
    constructor(searchService, route, router) {
        this.searchService = searchService;
        this.route = route;
        this.router = router;
        this.searching = false;
        this.searchFailed = false;
        this.search = (text$) => {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["distinctUntilChanged"])(), 
            // switchMap allows returning an observable rather than maps array
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])((term) => this.searchService.search(term)));
        };
        this.formatter = (result) => result.toUpperCase();
    }
    ngOnInit() {
    }
    onSelect(selected) {
        // @ts-ignore
        // document.getElementById('typeahead-http').setAttribute('ng-reflect-model', '');
        this.selectedOne = selected.item;
        console.log(this.selectedOne);
        console.log(this.selectedOne.id);
        console.log(this.selectedOne.media_type);
        // @ts-ignore
        // this.router.navigateByUrl(`/watch/${this.selectedOne.media_type}/${this.selectedOne.id}`);
        window.location.href = `/watch/${this.selectedOne.media_type}/${this.selectedOne.id}`;
    }
}
TypeAheadComponent.ɵfac = function TypeAheadComponent_Factory(t) { return new (t || TypeAheadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
TypeAheadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TypeAheadComponent, selectors: [["app-type-ahead"]], decls: 6, vars: 5, consts: [[1, "form-inline", "form-container"], [1, "form-group"], ["rt", ""], ["id", "typeahead-http", "type", "text", "placeholder", "Search", 1, "form-control", "mx-sm-3", 3, "ngModel", "ngbTypeahead", "resultTemplate", "selectItem", "ngModelChange"], [3, "routerLink"], [1, "mr-1", 2, "width", "80px", "margin-bottom", "5px", "margin-left", "-10px", 3, "src"], [1, "highlight-item", 2, "margin-left", "10px", 3, "result", "term"]], template: function TypeAheadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "fieldset", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TypeAheadComponent_ng_template_2_Template, 3, 5, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectItem", function TypeAheadComponent_Template_input_selectItem_4_listener($event) { return ctx.onSelect($event); })("ngModelChange", function TypeAheadComponent_Template_input_ngModelChange_4_listener($event) { return ctx.model = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "hr");
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx.searchFailed);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.model)("ngbTypeahead", ctx.search)("resultTemplate", _r0);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbTypeahead"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbHighlight"]], styles: [".form-control[_ngcontent-%COMP%] {\n    width: 200px;\n    background-color: transparent;\n    border-color: transparent;\n    border-bottom-color: white;\n    border-radius: 0;\n  }\n\n  .form-container[_ngcontent-%COMP%] {\n    right: 5%;\n    position: absolute;\n  }\n\n  @media only screen and (max-width: 500px) {\n      .navbar-toggler {\n      margin-right: 10%;\n    }\n    .form-container[_ngcontent-%COMP%] {\n      margin-right: 20%;\n      position: absolute;\n    }\n  }\n\n    .dropdown-menu{\n    background-color: #050a30;\n    color: white;\n    border-color: white;\n    border-width: 1px;\n    border-radius: 5px;\n  }\n\n  .highlight-item[_ngcontent-%COMP%] {\n    color: white;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR5cGUtYWhlYWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQztJQUNHLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0IseUJBQXlCO0lBQ3pCLDBCQUEwQjtJQUMxQixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxTQUFTO0lBQ1Qsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0U7TUFDRSxpQkFBaUI7SUFDbkI7SUFDQTtNQUNFLGlCQUFpQjtNQUNqQixrQkFBa0I7SUFDcEI7RUFDRjs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxZQUFZO0VBQ2QiLCJmaWxlIjoidHlwZS1haGVhZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiIC5mb3JtLWNvbnRyb2wge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gIH1cblxuICAuZm9ybS1jb250YWluZXIge1xuICAgIHJpZ2h0OiA1JTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIH1cblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICAgOjpuZy1kZWVwIC5uYXZiYXItdG9nZ2xlciB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcbiAgICB9XG4gICAgLmZvcm0tY29udGFpbmVyIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMjAlO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIH1cbiAgfVxuXG4gIDo6bmctZGVlcCAuZHJvcGRvd24tbWVudXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDUwYTMwO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci13aWR0aDogMXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgfVxuXG4gIC5oaWdobGlnaHQtaXRlbSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG5cblxuIl19 */"] });


/***/ }),

/***/ "3eqm":
/*!*************************************************************************!*\
  !*** ./src/app/components/tv-show-details/tv-show-details.component.ts ***!
  \*************************************************************************/
/*! exports provided: TvShowDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvShowDetailsComponent", function() { return TvShowDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/posts.service */ "jwUf");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _video_video_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../video/video.component */ "G4NA");
/* harmony import */ var _cast_details_cast_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../cast-details/cast-details.component */ "HcRg");
/* harmony import */ var _tv_carousel_tv_carousel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../tv-carousel/tv-carousel.component */ "u3ne");








function TvShowDetailsComponent_div_0_div_1_div_4_p_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r14.releaseYear, "\u00A0\u00A0|");
} }
function TvShowDetailsComponent_div_0_div_1_div_4_div_13_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u00A0", ctx_r19.hours, "hrs\u00A0 ");
} }
function TvShowDetailsComponent_div_0_div_1_div_4_div_13_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r20.minutes, "mins ");
} }
function TvShowDetailsComponent_div_0_div_1_div_4_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TvShowDetailsComponent_div_0_div_1_div_4_div_13_div_2_Template, 2, 1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TvShowDetailsComponent_div_0_div_1_div_4_div_13_div_3_Template, 2, 1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.hours);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.minutes);
} }
function TvShowDetailsComponent_div_0_div_1_div_4_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0", ctx_r16.genres, "");
} }
function TvShowDetailsComponent_div_0_div_1_div_4_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0", ctx_r17.spokenLanguages, "");
} }
function TvShowDetailsComponent_div_0_div_1_div_4_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TvShowDetailsComponent_div_0_div_1_div_4_div_22_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r21.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Added to watchlist. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TvShowDetailsComponent_div_0_div_1_div_4_div_22_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r23.hideAddedAlert(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Removed to watchlist. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TvShowDetailsComponent_div_0_div_1_div_4_div_22_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r24.hideRemovedAlert(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r18.btnContent, " ");
} }
function TvShowDetailsComponent_div_0_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TvShowDetailsComponent_div_0_div_1_div_4_p_7_Template, 2, 1, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TvShowDetailsComponent_div_0_div_1_div_4_div_13_Template, 4, 2, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Genres: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, TvShowDetailsComponent_div_0_div_1_div_4_div_17_Template, 2, 1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Spoken Languages: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, TvShowDetailsComponent_div_0_div_1_div_4_div_21_Template, 2, 1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, TvShowDetailsComponent_div_0_div_1_div_4_div_22_Template, 13, 1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r13.tvShowDetails.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r13.tvShowDetails.tagline);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.releaseYear);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r13.voteAverage, "\u00A0\u00A0|");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.hours || ctx_r13.minutes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.genres);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.spokenLanguages);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.btnContent);
} }
function TvShowDetailsComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-video", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TvShowDetailsComponent_div_0_div_1_div_4_Template, 23, 8, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("key", ctx_r10.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.tvShowDetails);
} }
function TvShowDetailsComponent_div_0_div_2_div_3_p_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r26.releaseYear, "\u00A0\u00A0|");
} }
function TvShowDetailsComponent_div_0_div_2_div_3_div_12_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u00A0", ctx_r31.hours, "hrs\u00A0 ");
} }
function TvShowDetailsComponent_div_0_div_2_div_3_div_12_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r32.minutes, "mins ");
} }
function TvShowDetailsComponent_div_0_div_2_div_3_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TvShowDetailsComponent_div_0_div_2_div_3_div_12_div_2_Template, 2, 1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TvShowDetailsComponent_div_0_div_2_div_3_div_12_div_3_Template, 2, 1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r27.hours);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r27.minutes);
} }
function TvShowDetailsComponent_div_0_div_2_div_3_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0", ctx_r28.genres, "");
} }
function TvShowDetailsComponent_div_0_div_2_div_3_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0", ctx_r29.spokenLanguages, "");
} }
function TvShowDetailsComponent_div_0_div_2_div_3_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TvShowDetailsComponent_div_0_div_2_div_3_div_21_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r33.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Added to watchlist. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TvShowDetailsComponent_div_0_div_2_div_3_div_21_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r35.hideAddedAlert(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Removed to watchlist. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TvShowDetailsComponent_div_0_div_2_div_3_div_21_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r36.hideRemovedAlert(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r30.btnContent, " ");
} }
function TvShowDetailsComponent_div_0_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TvShowDetailsComponent_div_0_div_2_div_3_p_7_Template, 2, 1, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TvShowDetailsComponent_div_0_div_2_div_3_div_12_Template, 4, 2, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Genres: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, TvShowDetailsComponent_div_0_div_2_div_3_div_16_Template, 2, 1, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Spoken Languages: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, TvShowDetailsComponent_div_0_div_2_div_3_div_20_Template, 2, 1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, TvShowDetailsComponent_div_0_div_2_div_3_div_21_Template, 13, 1, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r25.tvShowDetails.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r25.tvShowDetails.tagline);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r25.releaseYear);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u00A0", ctx_r25.voteAverage, "\u00A0\u00A0|");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r25.hours || ctx_r25.minutes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r25.genres);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r25.spokenLanguages);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r25.btnContent);
} }
function TvShowDetailsComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-video", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TvShowDetailsComponent_div_0_div_2_div_3_Template, 22, 8, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("key", ctx_r11.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.tvShowDetails);
} }
function TvShowDetailsComponent_div_0_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r12.overview);
} }
function TvShowDetailsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TvShowDetailsComponent_div_0_div_1_Template, 5, 2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TvShowDetailsComponent_div_0_div_2_Template, 4, 2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TvShowDetailsComponent_div_0_p_6_Template, 2, 1, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Share");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isDesktop);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isMobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.overview);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("href", "https://twitter.com/intent/tweet?text=Watch%20", ctx_r0.tvShowDetails.name, "%0Dhttps://www.youtube.com/watch?v=", ctx_r0.key, "%0D%0A%23USC%20%23CSCI571%20%23FightOn", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("target", "_blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://www.facebook.com/sharer/sharer.php?u=https://www.youtube.com/watch?v=", ctx_r0.key, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function TvShowDetailsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-cast-details", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("details", ctx_r1.castDetails)("external", ctx_r1.external);
} }
function TvShowDetailsComponent_div_6_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TvShowDetailsComponent_div_6_div_2_div_1_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const person_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r40.getCastDetails(person_r38.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "AS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const person_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "https://image.tmdb.org/t/p/w500/" + person_r38.profile_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](person_r38.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](person_r38.character);
} }
function TvShowDetailsComponent_div_6_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TvShowDetailsComponent_div_6_div_2_div_1_Template, 11, 3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const person_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", person_r38.profile_path);
} }
function TvShowDetailsComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TvShowDetailsComponent_div_6_div_2_Template, 2, 1, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.cast);
} }
function TvShowDetailsComponent_div_7_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TvShowDetailsComponent_div_7_div_2_div_1_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49); const person_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r47.getCastDetails(person_r45.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "AS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const person_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "https://image.tmdb.org/t/p/w500/" + person_r45.profile_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](person_r45.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](person_r45.character);
} }
function TvShowDetailsComponent_div_7_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TvShowDetailsComponent_div_7_div_2_div_1_Template, 11, 3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const person_r45 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", person_r45.profile_path);
} }
function TvShowDetailsComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TvShowDetailsComponent_div_7_div_2_Template, 2, 1, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.cast);
} }
function TvShowDetailsComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.reviews.length);
} }
function TvShowDetailsComponent_div_12_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Read the rest");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const review_r52 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", review_r52.avatar_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("A review created by ", review_r52.author, "\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0", review_r52.rating, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Written by ", review_r52.author, " on ", review_r52.created_at, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](review_r52.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", review_r52.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("target", "_blank");
} }
function TvShowDetailsComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TvShowDetailsComponent_div_12_div_1_Template, 16, 8, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.reviews);
} }
function TvShowDetailsComponent_div_13_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Read the rest");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const review_r54 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", review_r54.avatar_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("A review created by ", review_r54.author, "\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](review_r54.rating);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Written by ", review_r54.author, " on ", review_r54.created_at, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](review_r54.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", review_r54.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("target", "_blank");
} }
function TvShowDetailsComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TvShowDetailsComponent_div_13_div_1_Template, 19, 8, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.reviews);
} }
function TvShowDetailsComponent_div_14_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-tv-carousel", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r56.recommendedTvShows);
} }
function TvShowDetailsComponent_div_14_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TvShowDetailsComponent_div_14_div_4_div_1_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r55.recommendedTvShows.results.length !== 0);
} }
function TvShowDetailsComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Recommended TV Shows");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TvShowDetailsComponent_div_14_div_4_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.recommendedTvShows);
} }
function TvShowDetailsComponent_div_15_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-tv-carousel", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r58.recommendedTvShows);
} }
function TvShowDetailsComponent_div_15_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TvShowDetailsComponent_div_15_div_4_div_1_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r57.recommendedTvShows.results.length !== 0);
} }
function TvShowDetailsComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Recommended TV Shows");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TvShowDetailsComponent_div_15_div_4_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.recommendedTvShows);
} }
function TvShowDetailsComponent_div_19_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-tv-carousel", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r59.similarTvShows);
} }
function TvShowDetailsComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TvShowDetailsComponent_div_19_div_1_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.similarTvShows.results.length !== 0);
} }
class TvShowDetailsComponent {
    // tslint:disable-next-line:max-line-length
    constructor(route, postsService, elementRef, breakpointObserver) {
        this.route = route;
        this.postsService = postsService;
        this.elementRef = elementRef;
        this.breakpointObserver = breakpointObserver;
        this.btnContent = '';
        this.id = '';
        this.title = '';
        this.mediaType = '';
        // tslint:disable-next-line:variable-name
        this.poster_path = '';
        this.key = '';
        this.genres = [];
        this.spokenLanguages = [];
        this.watchlistFlag = 'false';
        this.myStorage = window.localStorage;
    }
    ngOnInit() {
        this.isMobile = this.breakpointObserver.isMatched('(max-width: 500px)');
        this.isDesktop = this.breakpointObserver.isMatched('(min-width: 500px)');
        // @ts-ignore
        document.getElementById('navbarCollapse').className = 'collapse navbar-collapse';
        if (window.location.pathname === '/mylist') {
            // @ts-ignore
            document.getElementById('my-list').className = 'nav-link active';
            // @ts-ignore
            document.getElementById('home').className = 'nav-link';
        }
        else {
            // @ts-ignore
            document.getElementById('home').className = 'nav-link active';
            // @ts-ignore
            document.getElementById('my-list').className = 'nav-link';
        }
        this.routeSub = this.route.params.subscribe(params => {
            // console.log(params);
            console.log(params.id);
            this.id = params.id;
            this.checkWatchList();
        });
        this.fetchData();
        if (document.getElementById('typeahead-http')) {
            // @ts-ignore
            document.getElementById('typeahead-http').innerHTML = '';
        }
    }
    checkWatchList() {
        // check if it is in watchlist
        let watchlist = [];
        // if there is already some continue watching
        if (this.myStorage) {
            if (this.myStorage.getItem('watchlist')) {
                // check if this id exists
                watchlist = JSON.parse(this.myStorage.getItem('watchlist'));
                const array = [];
                for (const one of watchlist) {
                    array.push(one);
                    // console.log(array);
                }
                // traverse continue watching list
                // tslint:disable-next-line:prefer-for-of
                for (let idx = 0; idx < array.length; idx++) {
                    // console.log('[each one] ' + JSON.parse(array[idx]).title);
                    // console.log(parseInt(JSON.parse(array[idx]).id) === parseInt(this.id));
                    // console.log('json id ' + JSON.parse(array[idx]).id + 'type' + typeof(JSON.parse(array[idx]).id));
                    // console.log('type of ' + typeof(this.id));
                    // tslint:disable-next-line:radix
                    // @ts-ignore
                    // tslint:disable-next-line:radix
                    if (parseInt(JSON.parse(array[idx]).id) === parseInt(this.id)) {
                        // console.log('[before]' + array);
                        this.watchlistFlag = 'true';
                        // console.log('[addToContinueWatching]' + array);
                    }
                }
            }
        }
        console.log('watchlistFlag is ' + this.watchlistFlag);
        if (this.watchlistFlag === 'true') {
            this.btnContent = 'Remove from watchlist';
        }
        else {
            this.btnContent = 'Add to watchlist';
        }
        console.log(this.btnContent);
    }
    fetchData() {
        this.postsService.getTvShowDetails(this.id).subscribe(res => {
            this.tvShowDetails = res;
            this.mediaType = 'tv';
            this.title = this.tvShowDetails.name;
            this.poster_path = this.tvShowDetails.poster_path;
            // tslint:disable-next-line:radix
            this.releaseYear = parseInt(this.tvShowDetails.first_air_date);
            this.voteAverage = parseFloat(this.tvShowDetails.vote_average).toFixed(1);
            // tslint:disable-next-line:radix
            if (this.tvShowDetails.episode_run_time) {
                this.hours = Math.floor(this.tvShowDetails.episode_run_time[0] / 60);
                this.minutes = this.tvShowDetails.episode_run_time[0] - this.hours * 60;
                console.log('[episode_run_time] ' + this.tvShowDetails.episode_run_time[0]);
            }
            for (const genre of this.tvShowDetails.genres) {
                this.genres.push(genre.name);
            }
            this.genres = this.genres.join(', ');
            for (const language of this.tvShowDetails.spoken_languages) {
                this.spokenLanguages.push(language.english_name);
            }
            this.spokenLanguages.join(', ');
            this.overview = this.tvShowDetails.overview;
            this.tweet = 'Watch%20' + this.tvShowDetails.toString() + 'https://www.youtube.com/watch?v=' + this.key.toString() + '#USC%20#CSCI571%20#FightOn';
            // add to continue watching
            // @ts-ignore
            this.addToContinueWatching();
        });
        this.postsService.getTvShowVideos(this.id).subscribe(res => {
            this.tvShowVideos = res;
            if (this.tvShowVideos.results.length === 0 || !this.tvShowVideos.results.length) {
                this.key = 'tzkWB85ULJY';
            }
            else {
                for (const result of this.tvShowVideos.results) {
                    if (result.type === 'Trailer' && result.key) {
                        this.key = result.key;
                        break;
                    }
                }
                if (!this.key) {
                    for (const result of this.tvShowVideos.results) {
                        if (result.type === 'Teaser' && result.key) {
                            this.key = result.key;
                            break;
                        }
                    }
                }
                if (!this.key) {
                    this.key = 'tzkWB85ULJY';
                }
                // this.key = this.tvShowVideos.results[0].key;
                // if (!this.key) {
                //   this.key = 'tzkWB85ULJY';
                // }
            }
        });
        this.postsService.getTvShowCast(this.id).subscribe(res => {
            this.cast = res;
            this.cast = this.cast.cast;
        });
        this.postsService.getTvShowReviews(this.id).subscribe(res => {
            this.reviews = res;
            this.reviews = this.reviews.results;
            const tmpReviews = [];
            for (let i = 0; i < 10; i++) {
                tmpReviews.push(this.reviews[i]);
            }
            // deal with reviews data
            for (const review of this.reviews) {
                // format avatar path
                if (!review.author_details.avatar_path) {
                    review.avatar_path = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHnPmUvFLjjmoYWAbLTEmLLIRCPpV_OgxCVA&usqp=CAU';
                }
                else {
                    if (review.author_details.avatar_path.substring(0, 6) === '/https') {
                        review.avatar_path = review.author_details.avatar_path.substring(1);
                    }
                    else {
                        review.avatar_path = 'https://image.tmdb.org/t/p/original' + review.author_details.avatar_path;
                    }
                }
                // format date created
                const date = review.created_at;
                // console.log(date);
                // tslint:disable-next-line:radix
                const newDate = new Date(date);
                // console.log(newDate);
                const mo = new Intl.DateTimeFormat('en', { month: 'long' }).format(newDate);
                const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(newDate);
                // const ho = new Intl.DateTimeFormat('en', { hour: 'numeric' }).format(newDate);
                let min = new Intl.DateTimeFormat('en', { minute: 'numeric' }).format(newDate);
                let sec = new Intl.DateTimeFormat('en', { second: 'numeric' }).format(newDate);
                if (min.length < 2) {
                    min = '0' + min;
                }
                if (sec.length < 2) {
                    sec = '0' + sec;
                }
                if (newDate.getHours() === 12) {
                    review.created_at = `${mo} ${da}, ${newDate.getFullYear()}, ${newDate.getHours()}:${min}:${sec} PM`;
                }
                else if (newDate.getHours() < 12) {
                    review.created_at = `${mo} ${da}, ${newDate.getFullYear()}, ${newDate.getHours()}:${min}:${sec} AM`;
                }
                else {
                    review.created_at = `${mo} ${da}, ${newDate.getFullYear()}, ${newDate.getHours() - 12}:${min}:${sec} PM`;
                }
                console.log(review.rating);
                if (!review.author_details.rating) {
                    review.rating = 0;
                }
                else {
                    review.rating = review.author_details.rating;
                }
                console.log(review.rating);
            }
        });
        // fetch recommended tv data
        this.postsService.getRecommendedTvShows(this.id).subscribe(res => {
            this.recommendedTvShows = res;
        });
        // fetch similar tv data
        this.postsService.getSimilarTvShows(this.id).subscribe(res => {
            this.similarTvShows = res;
        });
    }
    // tslint:disable-next-line:variable-name
    addToContinueWatching() {
        let continueWatching = [];
        // if there is already some continue watching
        if (this.myStorage) {
            if (this.myStorage.getItem('continue_watching')) {
                // check if this id exists
                continueWatching = JSON.parse(this.myStorage.getItem('continue_watching'));
                // console.log('[you have] ' + continueWatching);
                const array = [];
                for (const one of continueWatching) {
                    array.push(one);
                    // console.log(array);
                }
                // traverse continue watching list
                for (let idx = 0; idx < array.length; idx++) {
                    // console.log('[each one] ' + JSON.parse(array[idx]).title);
                    // console.log(parseInt(JSON.parse(array[idx]).id) === parseInt(this.id));
                    // console.log('json id ' + JSON.parse(array[idx]).id + 'type' + typeof(JSON.parse(array[idx]).id));
                    // console.log('type of ' + typeof(this.id));
                    // tslint:disable-next-line:radix
                    // @ts-ignore
                    // tslint:disable-next-line:radix
                    if (parseInt(JSON.parse(array[idx]).id) === parseInt(this.id)) {
                        // console.log('[before]' + array);
                        array.splice(idx, 1);
                        // console.log('[addToContinueWatching]' + array);
                    }
                }
                continueWatching = array;
            }
        }
        // console.log('[addToContinueWatching] ' + this.title);
        continueWatching.unshift(`{"id": ${this.id}, "title": \"${this.title}\", "poster_path": \"${this.poster_path}\", "type": "tv"}`);
        this.myStorage.setItem('continue_watching', JSON.stringify(continueWatching));
        // console.log(this.myStorage);
    }
    // getCastDetails(person: string) {
    //   // @ts-ignore
    //   // document.getElementById('layout').style.overflow =  'hidden';
    //   // this.elementRef.nativeElement.ownerDocument.body.style = 'body::-webkit-scrollbar: { overflow: hidden; }';
    //   this.elementRef.nativeElement.ownerDocument.body.style.overflow = 'hidden';
    //   // @ts-ignore
    //   document.getElementById('mask').style.display = 'block';
    //   // @ts-ignore
    //   document.getElementById('mask').style.background = 'rgba(0,0,0,0.6)';
    //   // this.elementRef.nativeElement.ownerDocument.body.style.position = 'fixed';
    //   this.postsService.getCastDetails(person).subscribe(res => {
    //     this.castDetails = res;
    //   });
    //   this.postsService.getCastExternal(person).subscribe(res => {
    //     this.external = res;
    //   });
    //   if (document.getElementById('card')) {
    //     // @ts-ignore
    //     document.getElementById('card').style.display = 'block';
    //   }
    // }
    getCastDetails(person) {
        if (this.isDesktop) {
            // @ts-ignore
            // document.getElementById('layout').style.overflow =  'hidden';
            // this.elementRef.nativeElement.ownerDocument.body.style = 'body::-webkit-scrollbar: { overflow: hidden; }';
            this.elementRef.nativeElement.ownerDocument.body.style.overflow = 'hidden';
            // @ts-ignore
            document.getElementById('mask').style.display = 'block';
            // @ts-ignore
            document.getElementById('mask').style.background = 'rgba(0,0,0,0.6)';
            // @ts-ignore
            document.getElementById('cast-details-card').style.overflowY = 'scroll';
            console.log('here');
            this.postsService.getCastDetails(person).subscribe(res => {
                this.castDetails = res;
            });
            this.postsService.getCastExternal(person).subscribe(res => {
                this.external = res;
            });
            if (document.getElementById('card')) {
                // @ts-ignore
                document.getElementById('card').style.display = 'block';
            }
        }
        else if (this.isMobile) {
            // const cast = document.createElement('app-cast-details');
            // cast.setAttribute('target', 'castDetails');
            // cast.setAttribute('external', 'external');
            // // @ts-ignore
            // document.getElementById('cast-details').appendChild(cast);
            this.elementRef.nativeElement.ownerDocument.body.style.overflow = 'hidden';
            // @ts-ignore
            document.getElementById('mask').style.display = 'block';
            // @ts-ignore
            document.getElementById('mask').style.background = 'rgba(0,0,0,0.6)';
            this.postsService.getCastDetails(person).subscribe(res => {
                this.castDetails = res;
            });
            this.postsService.getCastExternal(person).subscribe(res => {
                this.external = res;
            });
            if (document.getElementById('card2')) {
                // @ts-ignore
                document.getElementById('card2').style.display = 'block';
            }
        }
    }
    ngOnDestroy() {
        // @ts-ignore
        this.routeSub.unsubscribe();
    }
    toggle() {
        if (this.isDesktop) {
            const addToWatchListBtn = document.getElementById('watchlist-btn');
            // @ts-ignore
            console.log('innerHTML: ' + addToWatchListBtn.innerHTML);
            console.log('another: ' + 'Add to watchlist');
            // @ts-ignore
            console.log(typeof (addToWatchListBtn.innerHTML));
            console.log(typeof ('Add to watchlist'));
            // @ts-ignore
            console.log(JSON.stringify(addToWatchListBtn.innerHTML) === JSON.stringify('Add to watchlist'));
            // @ts-ignore
            // if (addToWatchListBtn.innerHTML === 'Add to watchlist') {
            if (this.btnContent === 'Add to watchlist') {
                console.log('I am here');
                // @ts-ignore
                this.addToWatchList();
                console.log(' this.addToWatchList();');
            }
            else {
                // @ts-ignore
                this.removeFromWatchList();
                console.log(' this.removeFromWatchList();\n');
            }
        }
        else if (this.isMobile) {
            const addToWatchListBtn = document.getElementById('watchlist-btn2');
            // @ts-ignore
            console.log('innerHTML: ' + addToWatchListBtn.innerHTML);
            console.log('another: ' + 'Add to watchlist');
            // @ts-ignore
            console.log(typeof (addToWatchListBtn.innerHTML));
            console.log(typeof ('Add to watchlist'));
            // @ts-ignore
            console.log(JSON.stringify(addToWatchListBtn.innerHTML) === JSON.stringify('Add to watchlist'));
            // @ts-ignore
            // if (addToWatchListBtn.innerHTML === 'Add to watchlist') {
            if (this.btnContent === 'Add to watchlist') {
                console.log('I am here');
                // @ts-ignore
                this.addToWatchList();
                console.log(' this.addToWatchList();');
            }
            else {
                // @ts-ignore
                this.removeFromWatchList();
                console.log(' this.removeFromWatchList();\n');
            }
        }
    }
    addToWatchList() {
        if (this.isDesktop) {
            this.myStorage.setItem(this.tvShowDetails.id, this.tvShowDetails.id);
            const addToWatchListBtn = document.getElementById('watchlist-btn');
            const addedAlert = document.getElementById('add-alert');
            const removeAlert = document.getElementById('remove-alert');
            // @ts-ignore
            this.btnContent = 'Remove from watchlist';
            // add to local storage
            let watchlist = [];
            // let flag = 'false';
            // if there is already some in watchlist
            if (this.myStorage) {
                if (this.myStorage.getItem('watchlist')) {
                    // extract current watchlist
                    watchlist = JSON.parse(this.myStorage.getItem('watchlist'));
                    const array = [];
                    for (const one of watchlist) {
                        array.push(one);
                        // console.log(array);
                    }
                    watchlist = array;
                }
            }
            // if (flag === 'false') {
            watchlist.unshift(`{"id": ${this.id}, "title": \"${this.title}\", "poster_path": \"${this.poster_path}\", "type": \"${this.mediaType}\"}`);
            // }
            this.myStorage.setItem('watchlist', JSON.stringify(watchlist));
            console.log(window.localStorage);
            // @ts-ignore
            removeAlert.style.display = 'none';
            // @ts-ignore
            addedAlert.style.display = 'block';
            setTimeout(() => {
                // @ts-ignore
                addedAlert.style.display = 'none';
            }, 5000);
        }
        else if (this.isMobile) {
            this.myStorage.setItem(this.tvShowDetails.id, this.tvShowDetails.id);
            const addToWatchListBtn = document.getElementById('watchlist-btn2');
            const addedAlert = document.getElementById('add-alert2');
            const removeAlert = document.getElementById('remove-alert2');
            // @ts-ignore
            this.btnContent = 'Remove from watchlist';
            // add to local storage
            let watchlist = [];
            // let flag = 'false';
            // if there is already some in watchlist
            if (this.myStorage) {
                if (this.myStorage.getItem('watchlist')) {
                    // extract current watchlist
                    watchlist = JSON.parse(this.myStorage.getItem('watchlist'));
                    const array = [];
                    for (const one of watchlist) {
                        array.push(one);
                        // console.log(array);
                    }
                    watchlist = array;
                }
            }
            // if (flag === 'false') {
            watchlist.unshift(`{"id": ${this.id}, "title": \"${this.title}\", "poster_path": \"${this.poster_path}\", "type": \"${this.mediaType}\"}`);
            // }
            this.myStorage.setItem('watchlist', JSON.stringify(watchlist));
            console.log(window.localStorage);
            // @ts-ignore
            removeAlert.style.display = 'none';
            // @ts-ignore
            addedAlert.style.display = 'block';
            setTimeout(() => {
                // @ts-ignore
                addedAlert.style.display = 'none';
            }, 5000);
        }
    }
    removeFromWatchList() {
        if (this.isDesktop) {
            this.myStorage.removeItem(this.tvShowDetails.id);
            const addToWatchListBtn = document.getElementById('watchlist-btn');
            const addedAlert = document.getElementById('add-alert');
            const removeAlert = document.getElementById('remove-alert');
            // @ts-ignore
            this.btnContent = 'Add to watchlist';
            // remove from local storage
            let watchlist = [];
            // if there is already some continue watching
            if (this.myStorage) {
                if (this.myStorage.getItem('watchlist')) {
                    // check if this id exists
                    watchlist = JSON.parse(this.myStorage.getItem('watchlist'));
                    // console.log('[you have] ' + continueWatching);
                    const array = [];
                    for (const one of watchlist) {
                        array.push(one);
                        // console.log(array);
                    }
                    // traverse continue watching list
                    for (let idx = 0; idx < array.length; idx++) {
                        // tslint:disable-next-line:radix
                        if (parseInt(JSON.parse(array[idx]).id) === parseInt(this.id)) {
                            // console.log('[before]' + array);
                            array.splice(idx, 1);
                            // console.log('[addToContinueWatching]' + array);
                        }
                    }
                    watchlist = array;
                }
            }
            // console.log('[addToContinueWatching] ' + this.title);
            this.myStorage.setItem('watchlist', JSON.stringify(watchlist));
            console.log(window.localStorage);
            // @ts-ignore
            addedAlert.style.display = 'none';
            // @ts-ignore
            removeAlert.style.display = 'block';
            setTimeout(() => {
                // @ts-ignore
                removeAlert.style.display = 'none';
            }, 5000);
        }
        else if (this.isMobile) {
            this.myStorage.removeItem(this.tvShowDetails.id);
            const addToWatchListBtn = document.getElementById('watchlist-btn2');
            const addedAlert = document.getElementById('add-alert2');
            const removeAlert = document.getElementById('remove-alert2');
            // @ts-ignore
            this.btnContent = 'Add to watchlist';
            // remove from local storage
            let watchlist = [];
            // if there is already some continue watching
            if (this.myStorage) {
                if (this.myStorage.getItem('watchlist')) {
                    // check if this id exists
                    watchlist = JSON.parse(this.myStorage.getItem('watchlist'));
                    // console.log('[you have] ' + continueWatching);
                    const array = [];
                    for (const one of watchlist) {
                        array.push(one);
                        // console.log(array);
                    }
                    // traverse continue watching list
                    for (let idx = 0; idx < array.length; idx++) {
                        // tslint:disable-next-line:radix
                        if (parseInt(JSON.parse(array[idx]).id) === parseInt(this.id)) {
                            // console.log('[before]' + array);
                            array.splice(idx, 1);
                            // console.log('[addToContinueWatching]' + array);
                        }
                    }
                    watchlist = array;
                }
            }
            // console.log('[addToContinueWatching] ' + this.title);
            this.myStorage.setItem('watchlist', JSON.stringify(watchlist));
            console.log(window.localStorage);
            // @ts-ignore
            addedAlert.style.display = 'none';
            // @ts-ignore
            removeAlert.style.display = 'block';
            setTimeout(() => {
                // @ts-ignore
                removeAlert.style.display = 'none';
            }, 5000);
        }
    }
    hideAddedAlert() {
        if (this.isDesktop) {
            const addedAlert = document.getElementById('add-alert');
            // @ts-ignore
            addedAlert.style.display = 'none';
        }
        else if (this.isMobile) {
            const addedAlert = document.getElementById('add-alert2');
            // @ts-ignore
            addedAlert.style.display = 'none';
        }
    }
    hideRemovedAlert() {
        if (this.isDesktop) {
            const removeAlert = document.getElementById('remove-alert');
            // @ts-ignore
            removeAlert.style.display = 'none';
        }
        else if (this.isMobile) {
            const removeAlert = document.getElementById('remove-alert2');
            // @ts-ignore
            removeAlert.style.display = 'none';
        }
    }
}
TvShowDetailsComponent.ɵfac = function TvShowDetailsComponent_Factory(t) { return new (t || TvShowDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"])); };
TvShowDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TvShowDetailsComponent, selectors: [["app-tv-show-details"]], decls: 20, vars: 10, consts: [["class", "box", 4, "ngIf"], ["id", "cast-details", 4, "ngIf"], [1, "full-cast-title-container"], [1, "full-cast-title", 2, "padding-left", "4%"], [1, "outer-container", "container-fluid", 2, "margin-left", "-2%"], [4, "ngIf"], ["style", "margin-left: 2%;", 4, "ngIf"], [1, "row", 2, "width", "100%", "margin-left", "11%", "margin-top", "100px"], [2, "color", "white", "font-size", "36px"], ["style", "color: darkgray; font-size: 36px; display: inline; font-weight: bolder; margin-left: 10px;", 4, "ngIf"], ["style", "margin-left: 11%; margin-right: 11%;  margin-top:20px;", 4, "ngIf"], ["class", "container-fluid", 4, "ngIf"], [1, "row", "container-fluid", 2, "width", "100%", "margin-left", "10%", "margin-top", "100px"], [1, "box"], ["class", "first-row-container container-fluid", "style", "font-size: 18px;", 4, "ngIf"], ["class", "mobile-cast-details", "style", "text-align: center", 4, "ngIf"], [1, "container-fluid", 2, "display", "block", "margin-bottom", "20px", "width", "98%"], [1, "card-text", "text-white", "description"], ["class", "grey-text overview", 4, "ngIf"], [1, "container-fluid", "share-container", 2, "width", "98%"], [2, "display", "block", "margin-bottom", "40px", "text-align", "left"], ["data-size", "large", 1, "twitter-share-button", 2, "font-size", "30px", "color", "#1ea2f1", "margin-right", "10px", 3, "href", "target"], [1, "fab", "fa-twitter"], ["target", "_blank", 1, "fb-xfbml-parse-ignore", 2, "font-size", "30px", "color", "#0926cd", 3, "href"], [1, "fab", "fa-facebook-square"], [1, "first-row-container", "container-fluid", 2, "font-size", "18px"], [1, "youtube-container", "col"], [1, "video", 3, "key"], ["class", "card detail-container col", "style", "", 4, "ngIf"], [1, "card", "detail-container", "col"], [1, "card-body"], [1, "card-title", "row"], [1, "card-text", "row", "grey-text", 2, "font-style", "italic"], [1, "row", "grey-text"], ["class", "card-text", 4, "ngIf"], [1, "card-text", 2, "display", "inline"], [1, "fa", "fa-star"], ["class", "card-text", "style", "display: inline", 4, "ngIf"], [1, "row"], [1, "subtitle"], ["class", "card-text grey-text", "style", "display: inline", 4, "ngIf"], [1, "row", 2, "margin-top", "10px", "margin-bottom", "10px"], ["id", "watchlist-container", 4, "ngIf"], [1, "card-text"], ["style", "display: inline;", 4, "ngIf"], [2, "display", "inline"], [1, "card-text", "grey-text", 2, "display", "inline"], ["id", "watchlist-container"], ["id", "watchlist-btn", 1, "btn", "btn-primary", "row", 2, "font-size", "18px", 3, "click"], ["id", "add-alert", "role", "alert", 1, "init", "alert", "alert-success", "alert-dismissible", "fade", "show", 2, "margin-left", "-14px", "margin-top", "10px"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], ["id", "remove-alert", "role", "alert", 1, "init", "alert", "alert-danger", "alert-dismissible", "fade", "show", 2, "margin-left", "-14px", "margin-top", "10px"], [1, "mobile-cast-details", 2, "text-align", "center"], [1, "youtube-container", 2, "text-align", "center"], ["class", "card detail-container", "style", " width: 90% !important; text-align: center; margin-left: 5%;", 4, "ngIf"], [1, "card", "detail-container", 2, "width", "90% !important", "text-align", "center", "margin-left", "5%"], [1, "card-body", "small-detail-container", 2, "text-align", "left"], [1, "card-title", "row", 2, "font-size", "36px"], [1, "card-text", "grey-text", "row", 2, "font-style", "italic", "font-size", "18px"], ["class", "card-text grey-text", "style", "display: inline;", 4, "ngIf"], ["id", "watchlist-container2", 4, "ngIf"], ["id", "watchlist-container2"], ["id", "watchlist-btn2", 1, "btn", "btn-primary", "row", 2, "font-size", "18px", 3, "click"], ["id", "add-alert2", "role", "alert", 1, "init", "alert", "alert-success", "alert-dismissible", "fade", "show", 2, "margin-left", "-14px", "margin-top", "10px"], ["id", "remove-alert2", "role", "alert", 1, "init", "alert", "alert-danger", "alert-dismissible", "fade", "show", 2, "margin-left", "-14px", "margin-top", "10px"], [1, "grey-text", "overview"], ["id", "cast-details"], [3, "details", "external"], [1, "cast-crew-container", 2, "width", "1100px"], ["style", "margin-bottom: 15px;", 4, "ngFor", "ngForOf"], [2, "margin-bottom", "15px"], [1, "card", "cast-member", "cast-card-container", 3, "click"], [1, ""], ["alt", "Card image cap", 1, "card-img-top", 2, "width", "100%", 3, "src"], [1, "card-body", 2, "text-align", "center"], [1, "card-text", 2, "margin-top", "-7px", "font-size", "14px", "font-weight", "bold", "width", "170px"], [1, "card-text", 2, "font-weight", "bolder", "margin-top", "-7px"], [1, "cast-character"], [2, "margin-left", "2%"], [1, "cast-crew-container"], [2, "color", "darkgray", "font-size", "36px", "display", "inline", "font-weight", "bolder", "margin-left", "10px"], [2, "margin-left", "11%", "margin-right", "11%", "margin-top", "20px"], [4, "ngFor", "ngForOf"], [1, "card", 2, "width", "100%", "height", "min-content", "border-radius", "10px", "margin-bottom", "20px"], ["alt", "", 1, "card-img-overlay", 2, "width", "130px", "height", "130px", "border-radius", "50%", "margin-left", "10px", 3, "src"], [1, "card-body", 2, "margin-left", "200px"], [1, "card-text", 2, "font-size", "22px", "font-weight", "bold"], [2, "display", "inline", "color", "white", "background", "black", "padding-left", "10px", "padding-right", "10px", "border-radius", "20px", "font-weight", "normal", "font-size", "20px"], [1, "card-text", 2, "color", "gray"], [1, "card-text", "review-content"], [2, "margin-bottom", "-10px", "text-decoration", "underline", 3, "href", "target"], ["alt", "", 1, "card-img-top", 2, "width", "70px", "height", "70px", "border-radius", "50%", "margin-left", "40px", "margin-top", "20px", 3, "src"], [1, "card-body", 2, "margin-left", "10px"], [1, "card-text", 2, "font-size", "22px", "margin-bottom", "10px"], [2, "display", "inline", "color", "white", "background", "black", "padding", "2px 10px", "border-radius", "20px", "font-size", "18px"], [2, "display", "inline", "color", "white", "font-weight", "normal", "font-size", "18px"], [1, "card-text", 2, "color", "gray", "margin-top", "20px"], [1, "container-fluid"], [1, "row", 2, "width", "180px", "margin-left", "11%", "margin-top", "100px"], [3, "data"], [1, "row", 2, "width", "100%", "margin-left", "10%", "margin-top", "100px"]], template: function TvShowDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TvShowDetailsComponent_div_0_Template, 15, 7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TvShowDetailsComponent_div_1_Template, 2, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Full Cast and Crew");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TvShowDetailsComponent_div_6_Template, 3, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TvShowDetailsComponent_div_7_Template, 3, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TvShowDetailsComponent_div_11_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TvShowDetailsComponent_div_12_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TvShowDetailsComponent_div_13_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TvShowDetailsComponent_div_14_Template, 5, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, TvShowDetailsComponent_div_15_Template, 5, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Similar TV Shows");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, TvShowDetailsComponent_div_19_Template, 2, 1, "div", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tvShowDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.castDetails && ctx.external);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isDesktop);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.reviews);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.reviews && ctx.isDesktop);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.reviews && ctx.isMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isDesktop);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.similarTvShows);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _video_video_component__WEBPACK_IMPORTED_MODULE_5__["VideoComponent"], _cast_details_cast_details_component__WEBPACK_IMPORTED_MODULE_6__["CastDetailsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _tv_carousel_tv_carousel_component__WEBPACK_IMPORTED_MODULE_7__["TvCarouselComponent"]], styles: ["@media only screen and (max-width: 500px) {\n  .grey-text[_ngcontent-%COMP%] {\n    color: darkgrey;\n  }\n\n  .box[_ngcontent-%COMP%] {\n    color: white;\n    width: 100%;\n    margin-top: 20px;\n    \n    text-align: center;\n  }\n\n  .container-fluid[_ngcontent-%COMP%] {\n    margin-left: -1%;\n  }\n\n  \n  \n  \n  \n  \n  \n  \n  \n\n  .detail-container[_ngcontent-%COMP%]{\n    background-color: transparent;\n    color: white;\n    text-align: center;\n  }\n\n  .share-container[_ngcontent-%COMP%] {\n    width: 90%;\n    margin-left: 3%;\n  }\n\n  .detail-container[_ngcontent-%COMP%]    > .card-body[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n    .detail-container > .card-body > .card-title {\n    width: 100%;\n    font-weight: normal;\n  }\n\n  .full-cast-title[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 36px;\n    margin-left: 10%;\n    margin-bottom: 10px;\n  }\n\n\n  .cast-crew-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    overflow-x: scroll;\n    width: 500px;\n    align-content: center;\n    margin-left: 100px;\n  }\n\n  .first-row-container[_ngcontent-%COMP%] {\n    \n    flex-direction: row;\n    margin-bottom: 20px;\n    display: flex;\n    flex-wrap: wrap;\n    text-align: left;\n    margin-top: -30px;\n    \n    \n    width: 100%; \n  }\n\n\n  .review-content[_ngcontent-%COMP%] {\n    margin-top: 0px;\n    overflow: hidden;\n    height: 52px;\n    display: -webkit-box;\n    -webkit-line-clamp: 3;\n    -webkit-box-orient: vertical;\n    margin-bottom: 5px;\n    font-size: 12px;\n  }\n\n  .init[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .cast-member[_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n  }\n\n  .cast-crew-container[_ngcontent-%COMP%]::-webkit-scrollbar {\n    height: 0.6em;\n  }\n\n  .cast-crew-container[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n    -webkit-box-shadow: inset 0 0 6px rgba(255,255,255,0.3);\n    background-color: rgba(255,255,255,0.1);\n  }\n\n  .cast-crew-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n    border-radius: 6px;\n    background-color: darkgrey;\n    \n  }\n\n  .cast-card-container[_ngcontent-%COMP%] {\n    width: 185px;\n    height: 380px;\n    align-items: center;\n    margin-right: 30px;\n    border-radius: 20px;\n    overflow: hidden;\n    border: none;\n  }\n\n  .cast-character[_ngcontent-%COMP%] {\n    margin-top: -7px;\n    font-size: 14px;\n  }\n\n\n  .description[_ngcontent-%COMP%] {\n    width: 90%;\n    margin-left: 5%;\n    text-align: left;\n  }\n\n  .overview[_ngcontent-%COMP%] {\n    width: 90%;\n    margin-left: 5%;\n    text-align: justify;\n  }\n\n  .full-cast-title[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 32px;\n    margin-left: 6%;\n    margin-bottom: 10px;\n  }\n\n  .cast-crew-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    overflow-x: scroll;\n    width: 97vw;\n    align-content: center;\n    margin-left: 3vw;\n    scrollbar-base-color: transparent;\n    -ms-overflow-style: none;  \n    scrollbar-width: none;  \n  }\n\n  .cast-crew-container[_ngcontent-%COMP%]::-webkit-scrollbar {\n    \n    display: none;\n  }\n\n  .cast-card-container[_ngcontent-%COMP%] {\n    width: 185px;\n    height: 380px;\n    align-items: center;\n    margin-right: 40px;\n    border-radius: 20px;\n    overflow: hidden;\n    border: none;\n  }\n  .youtube-container[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n}\n\n@media only screen and (min-width: 500px) {\n  .test[_ngcontent-%COMP%] {\n    color: white;\n    margin-top: 5%;\n  }\n\n\n  .grey-text[_ngcontent-%COMP%] {\n    color: darkgrey;\n  }\n\n  .box[_ngcontent-%COMP%] {\n    color: white;\n    width: 80%;\n    margin-top: 50px;\n    margin-left: 9%;\n  }\n\n  .detail-container[_ngcontent-%COMP%] {\n    background-color: transparent;\n    color: white;\n    width: 100%;\n    margin-top: -20px;\n    \n    \n  }\n\n  .card-title[_ngcontent-%COMP%] {\n    \n    font-size: 40px;\n    font-weight: normal;\n  }\n\n\n\n  .full-cast-title[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 36px;\n    margin-left: 10%;\n    margin-bottom: 10px;\n  }\n\n  .outer-container[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: center;\n  }\n\n\n  .cast-crew-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    overflow-x: scroll;\n    \n    \n    align-content: center;\n    margin-left: auto;\n    margin-right: auto;\n    \n  }\n\n  .first-row-container[_ngcontent-%COMP%] {\n    \n    \n    margin-bottom: 20px;\n    display: flex;\n    flex-direction: row;\n    \n    text-align: left;\n    \n    \n    width: 100%; \n  }\n\n\n  .review-content[_ngcontent-%COMP%] {\n    margin-top: 0px;\n    overflow: hidden;\n    height: 52px;\n    display: -webkit-box;\n    -webkit-line-clamp: 3;\n    -webkit-box-orient: vertical;\n    margin-bottom: 5px;\n    font-size: 12px;\n  }\n\n  .init[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .cast-member[_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n  }\n\n  .cast-crew-container[_ngcontent-%COMP%]::-webkit-scrollbar {\n    height: 0.6em;\n  }\n\n  .cast-crew-container[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n    -webkit-box-shadow: inset 0 0 6px rgba(255,255,255,0.3);\n    background-color: rgba(255,255,255,0.1);\n  }\n\n  .cast-crew-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n    border-radius: 6px;\n    background-color: darkgrey;\n    \n  }\n\n  .cast-card-container[_ngcontent-%COMP%] {\n    width: 175px;\n    height: 380px;\n    align-items: center;\n    margin-right: 10px;\n    border-radius: 20px;\n    overflow: hidden;\n    border: none;\n  }\n\n  .cast-character[_ngcontent-%COMP%] {\n    margin-top: -7px;\n    font-size: 14px;\n  }\n\n  .youtube-container[_ngcontent-%COMP%] {\n    \n    \n    \n    \n    \n    margin-bottom: 20px;\n    \n  }\n\n  .full-cast-title-container[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n\n  .full-cast-title[_ngcontent-%COMP%] {\n    \n    \n  }\n\n\n  \n  \n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR2LXNob3ctZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFNBQVM7QUFDVDtFQUNFO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUEsc0JBQXNCO0VBQ3RCLG1DQUFtQztFQUNuQyxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDRCQUE0QjtFQUM1QixvQkFBb0I7RUFDcEIsd0JBQXdCO0VBQ3hCLElBQUk7O0VBRUo7SUFDRSw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLFVBQVU7SUFDVixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsV0FBVztJQUNYLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtFQUNyQjs7O0VBR0E7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQiwyQkFBMkI7SUFDM0IsdUJBQXVCO0lBQ3ZCLFdBQVcsRUFBRSxtQkFBbUI7RUFDbEM7OztFQUdBO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLHFCQUFxQjtJQUNyQiw0QkFBNEI7SUFDNUIsa0JBQWtCO0lBQ2xCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsdURBQXVEO0lBQ3ZELHVDQUF1QztFQUN6Qzs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIsZ0NBQWdDO0VBQ2xDOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsWUFBWTtFQUNkOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGVBQWU7RUFDakI7OztFQUdBO0lBQ0UsVUFBVTtJQUNWLGVBQWU7SUFDZixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsZUFBZTtJQUNmLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixlQUFlO0lBQ2YsZUFBZTtJQUNmLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGlDQUFpQztJQUNqQyx3QkFBd0IsR0FBRyxnQkFBZ0I7SUFDM0MscUJBQXFCLEdBQUcsWUFBWTtFQUN0Qzs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixZQUFZO0VBQ2Q7RUFDQTtJQUNFLFdBQVc7RUFDYjs7QUFFRjtBQU9BLFVBQVU7QUFDVjtFQUNFO0lBQ0UsWUFBWTtJQUNaLGNBQWM7RUFDaEI7OztFQUdBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixlQUFlO0lBQ2YsbUJBQW1CO0VBQ3JCOzs7O0VBSUE7SUFDRSxZQUFZO0lBQ1osZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0VBQ3BCOzs7RUFHQTtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLDJCQUEyQjtJQUMzQix1QkFBdUI7SUFDdkIsV0FBVyxFQUFFLG1CQUFtQjtFQUNsQzs7O0VBR0E7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLDRCQUE0QjtJQUM1QixrQkFBa0I7SUFDbEIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSx1REFBdUQ7SUFDdkQsdUNBQXVDO0VBQ3pDOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLDBCQUEwQjtJQUMxQixnQ0FBZ0M7RUFDbEM7O0VBRUE7SUFDRSxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGVBQWU7SUFDZixvQkFBb0I7RUFDdEI7OztFQUdBLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsSUFBSTtBQUNOIiwiZmlsZSI6InR2LXNob3ctZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyptb2JpbGUqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAuZ3JleS10ZXh0IHtcbiAgICBjb2xvcjogZGFya2dyZXk7XG4gIH1cblxuICAuYm94IHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAvKm1hcmdpbi1sZWZ0OiA1JTsqL1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5jb250YWluZXItZmx1aWQge1xuICAgIG1hcmdpbi1sZWZ0OiAtMSU7XG4gIH1cblxuICAvKi5kZXRhaWwtY29udGFpbmVyIHsqL1xuICAvKiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7Ki9cbiAgLyogIGNvbG9yOiB3aGl0ZTsqL1xuICAvKiAgd2lkdGg6IDkwJTsqL1xuICAvKiAgISpwb3NpdGlvbjogYWJzb2x1dGU7KiEqL1xuICAvKiAgZGlzcGxheTogYmxvY2s7Ki9cbiAgLyogIHRleHQtYWxpZ246IGNlbnRlcjsqL1xuICAvKn0qL1xuXG4gIC5kZXRhaWwtY29udGFpbmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAuc2hhcmUtY29udGFpbmVyIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbi1sZWZ0OiAzJTtcbiAgfVxuXG4gIC5kZXRhaWwtY29udGFpbmVyID4gLmNhcmQtYm9keSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICA6Om5nLWRlZXAgLmRldGFpbC1jb250YWluZXIgPiAuY2FyZC1ib2R5ID4gLmNhcmQtdGl0bGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIH1cblxuICAuZnVsbC1jYXN0LXRpdGxlIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAzNnB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxuXG5cbiAgLmNhc3QtY3Jldy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gICAgd2lkdGg6IDUwMHB4O1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogMTAwcHg7XG4gIH1cblxuICAuZmlyc3Qtcm93LWNvbnRhaW5lciB7XG4gICAgLypkaXNwbGF5OiBmbGV4OyovXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbWFyZ2luLXRvcDogLTMwcHg7XG4gICAgLypqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsqL1xuICAgIC8qYWxpZ24taXRlbXM6IGNlbnRlcjsqL1xuICAgIHdpZHRoOiAxMDAlOyAvKiBubyBmaXhlZCB3aWR0aCAqL1xuICB9XG5cblxuICAucmV2aWV3LWNvbnRlbnQge1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGhlaWdodDogNTJweDtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDM7XG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG5cbiAgLmluaXQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAuY2FzdC1tZW1iZXI6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIC5jYXN0LWNyZXctY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgaGVpZ2h0OiAwLjZlbTtcbiAgfVxuXG4gIC5jYXN0LWNyZXctY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMjU1LDI1NSwyNTUsMC4zKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuMSk7XG4gIH1cblxuICAuY2FzdC1jcmV3LWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JleTtcbiAgICAvKm91dGxpbmU6IDFweCBzb2xpZCBzbGF0ZWdyZXk7Ki9cbiAgfVxuXG4gIC5jYXN0LWNhcmQtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTg1cHg7XG4gICAgaGVpZ2h0OiAzODBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi1yaWdodDogMzBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYm9yZGVyOiBub25lO1xuICB9XG5cbiAgLmNhc3QtY2hhcmFjdGVyIHtcbiAgICBtYXJnaW4tdG9wOiAtN3B4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuXG5cbiAgLmRlc2NyaXB0aW9uIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG5cbiAgLm92ZXJ2aWV3IHtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICB9XG5cbiAgLmZ1bGwtY2FzdC10aXRsZSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICBtYXJnaW4tbGVmdDogNiU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxuXG4gIC5jYXN0LWNyZXctY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICAgIHdpZHRoOiA5N3Z3O1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogM3Z3O1xuICAgIHNjcm9sbGJhci1iYXNlLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7ICAvKiBJRSBhbmQgRWRnZSAqL1xuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTsgIC8qIEZpcmVmb3ggKi9cbiAgfVxuXG4gIC5jYXN0LWNyZXctY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgLypoZWlnaHQ6IDAuNmVtOyovXG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5jYXN0LWNhcmQtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTg1cHg7XG4gICAgaGVpZ2h0OiAzODBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi1yaWdodDogNDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYm9yZGVyOiBub25lO1xuICB9XG4gIC55b3V0dWJlLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxufVxuXG5cblxuXG5cblxuLypkZXNrdG9wKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTAwcHgpIHtcbiAgLnRlc3Qge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tdG9wOiA1JTtcbiAgfVxuXG5cbiAgLmdyZXktdGV4dCB7XG4gICAgY29sb3I6IGRhcmtncmV5O1xuICB9XG5cbiAgLmJveCB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICBtYXJnaW4tbGVmdDogOSU7XG4gIH1cblxuICAuZGV0YWlsLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IC0yMHB4O1xuICAgIC8qZGlzcGxheTogaW5saW5lLWJsb2NrOyovXG4gICAgLyptYXJnaW4tbGVmdDogNSU7Ki9cbiAgfVxuXG4gIC5jYXJkLXRpdGxlIHtcbiAgICAvKndpZHRoOiAxMDAlOyovXG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIH1cblxuXG5cbiAgLmZ1bGwtY2FzdC10aXRsZSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cblxuICAub3V0ZXItY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuXG4gIC5jYXN0LWNyZXctY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICAgIC8qd2lkdGg6IDExMDBweDsqL1xuICAgIC8qd2lkdGg6IDkwdnc7Ki9cbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIC8qdGV4dC1hbGlnbjogY2VudGVyOyovXG4gIH1cblxuICAuZmlyc3Qtcm93LWNvbnRhaW5lciB7XG4gICAgLypkaXNwbGF5OiBmbGV4OyovXG4gICAgLypmbGV4LWRpcmVjdGlvbjogcm93OyovXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgLypmbGV4LXdyYXA6IHdyYXA7Ki9cbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIC8qanVzdGlmeS1jb250ZW50OiBjZW50ZXI7Ki9cbiAgICAvKmFsaWduLWl0ZW1zOiBjZW50ZXI7Ki9cbiAgICB3aWR0aDogMTAwJTsgLyogbm8gZml4ZWQgd2lkdGggKi9cbiAgfVxuXG5cbiAgLnJldmlldy1jb250ZW50IHtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBoZWlnaHQ6IDUycHg7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiAzO1xuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuXG4gIC5pbml0IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmNhc3QtbWVtYmVyOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICAuY2FzdC1jcmV3LWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGhlaWdodDogMC42ZW07XG4gIH1cblxuICAuY2FzdC1jcmV3LWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDI1NSwyNTUsMjU1LDAuMyk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjEpO1xuICB9XG5cbiAgLmNhc3QtY3Jldy1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyZXk7XG4gICAgLypvdXRsaW5lOiAxcHggc29saWQgc2xhdGVncmV5OyovXG4gIH1cblxuICAuY2FzdC1jYXJkLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDE3NXB4O1xuICAgIGhlaWdodDogMzgwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgfVxuXG4gIC5jYXN0LWNoYXJhY3RlciB7XG4gICAgbWFyZ2luLXRvcDogLTdweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cblxuICAueW91dHViZS1jb250YWluZXIge1xuICAgIC8qd2lkdGg6IDQwMHB4OyovXG4gICAgLyp0ZXh0LWFsaWduOiBsZWZ0OyovXG4gICAgLyptYXJnaW4tcmlnaHQ6IDM0MHB4OyovXG4gICAgLypwYWRkaW5nLXJpZ2h0OiAyMHB4OyovXG4gICAgLyptYXJnaW4tcmlnaHQ6IDMlOyovXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAvKndpZHRoOiBtaW4tY29udGVudDsqL1xuICB9XG5cbiAgLmZ1bGwtY2FzdC10aXRsZS1jb250YWluZXIge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cblxuICAuZnVsbC1jYXN0LXRpdGxlIHtcbiAgICAvKndpZHRoOiAxMDAlOyovXG4gICAgLyp0ZXh0LWFsaWduOiBsZWZ0OyovXG4gIH1cblxuXG4gIC8qI3BsYXllciB7Ki9cbiAgLyogIHdpZHRoOiAxMDAlOyovXG4gIC8qfSovXG59XG5cblxuXG4iXX0= */"] });


/***/ }),

/***/ "4cG8":
/*!*********************************************************************!*\
  !*** ./src/app/components/movie-details/movie-details.component.ts ***!
  \*********************************************************************/
/*! exports provided: MovieDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDetailsComponent", function() { return MovieDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/posts.service */ "jwUf");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _video_video_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../video/video.component */ "G4NA");
/* harmony import */ var _cast_details_cast_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../cast-details/cast-details.component */ "HcRg");
/* harmony import */ var _multi_carousel_multi_carousel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../multi-carousel/multi-carousel.component */ "CrP6");








function MovieDetailsComponent_div_0_div_1_div_4_p_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r14.releaseYear, "\u00A0\u00A0|");
} }
function MovieDetailsComponent_div_0_div_1_div_4_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r15.hours, "hrs\u00A0", ctx_r15.minutes, "mins \u00A0");
} }
function MovieDetailsComponent_div_0_div_1_div_4_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0", ctx_r16.genres, "");
} }
function MovieDetailsComponent_div_0_div_1_div_4_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0", ctx_r17.spokenLanguages, "");
} }
function MovieDetailsComponent_div_0_div_1_div_4_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MovieDetailsComponent_div_0_div_1_div_4_div_22_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r19.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Added to watchlist. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MovieDetailsComponent_div_0_div_1_div_4_div_22_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r21.hideAddedAlert(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Removed to watchlist. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MovieDetailsComponent_div_0_div_1_div_4_div_22_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r22.hideRemovedAlert(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r18.btnContent, " ");
} }
function MovieDetailsComponent_div_0_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MovieDetailsComponent_div_0_div_1_div_4_p_7_Template, 2, 1, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " \u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, MovieDetailsComponent_div_0_div_1_div_4_div_13_Template, 2, 2, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Genres: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, MovieDetailsComponent_div_0_div_1_div_4_div_17_Template, 2, 1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Spoken Languages: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, MovieDetailsComponent_div_0_div_1_div_4_div_21_Template, 2, 1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, MovieDetailsComponent_div_0_div_1_div_4_div_22_Template, 13, 1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r13.movieDetails.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r13.movieDetails.tagline);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.releaseYear);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r13.voteAverage, "\u00A0\u00A0|\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.hours && ctx_r13.minutes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.genres);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.spokenLanguages);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.btnContent);
} }
function MovieDetailsComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-video", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MovieDetailsComponent_div_0_div_1_div_4_Template, 23, 8, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("key", ctx_r10.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.movieDetails);
} }
function MovieDetailsComponent_div_0_div_2_div_3_p_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r24.releaseYear, "\u00A0\u00A0|");
} }
function MovieDetailsComponent_div_0_div_2_div_3_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r25.hours, "hrs\u00A0", ctx_r25.minutes, "mins \u00A0");
} }
function MovieDetailsComponent_div_0_div_2_div_3_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0", ctx_r26.genres, "");
} }
function MovieDetailsComponent_div_0_div_2_div_3_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0", ctx_r27.spokenLanguages, "");
} }
function MovieDetailsComponent_div_0_div_2_div_3_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MovieDetailsComponent_div_0_div_2_div_3_div_21_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r29.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Added to watchlist. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MovieDetailsComponent_div_0_div_2_div_3_div_21_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r31.hideAddedAlert(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Removed to watchlist. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MovieDetailsComponent_div_0_div_2_div_3_div_21_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r32.hideRemovedAlert(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r28.btnContent, " ");
} }
function MovieDetailsComponent_div_0_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MovieDetailsComponent_div_0_div_2_div_3_p_7_Template, 2, 1, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, MovieDetailsComponent_div_0_div_2_div_3_div_12_Template, 2, 2, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Genres: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, MovieDetailsComponent_div_0_div_2_div_3_div_16_Template, 2, 1, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Spoken Languages: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, MovieDetailsComponent_div_0_div_2_div_3_div_20_Template, 2, 1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, MovieDetailsComponent_div_0_div_2_div_3_div_21_Template, 13, 1, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r23.movieDetails.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r23.movieDetails.tagline);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r23.releaseYear);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u00A0", ctx_r23.voteAverage, "\u00A0\u00A0|\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r23.hours && ctx_r23.minutes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r23.genres);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r23.spokenLanguages);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r23.btnContent);
} }
function MovieDetailsComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-video", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MovieDetailsComponent_div_0_div_2_div_3_Template, 22, 8, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("key", ctx_r11.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.movieDetails);
} }
function MovieDetailsComponent_div_0_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r12.overview);
} }
function MovieDetailsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MovieDetailsComponent_div_0_div_1_Template, 5, 2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MovieDetailsComponent_div_0_div_2_Template, 4, 2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MovieDetailsComponent_div_0_p_6_Template, 2, 1, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Share");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isDesktop);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isMobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.overview);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("href", "https://twitter.com/intent/tweet?text=Watch%20", ctx_r0.movieDetails.title, "%0Dhttps://www.youtube.com/watch?v=", ctx_r0.key, "%0D%0A%23USC%20%23CSCI571%20%23FightOn", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("target", "_blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://www.facebook.com/sharer/sharer.php?u=https://www.youtube.com/watch?v=", ctx_r0.key, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function MovieDetailsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-cast-details", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("details", ctx_r1.castDetails)("external", ctx_r1.external);
} }
function MovieDetailsComponent_div_6_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MovieDetailsComponent_div_6_div_2_div_1_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const person_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r36.getCastDetails(person_r34.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "AS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const person_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "https://image.tmdb.org/t/p/w500/" + person_r34.profile_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](person_r34.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](person_r34.character);
} }
function MovieDetailsComponent_div_6_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MovieDetailsComponent_div_6_div_2_div_1_Template, 11, 3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const person_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", person_r34.profile_path);
} }
function MovieDetailsComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MovieDetailsComponent_div_6_div_2_Template, 2, 1, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.cast);
} }
function MovieDetailsComponent_div_7_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MovieDetailsComponent_div_7_div_2_div_1_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45); const person_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r43.getCastDetails(person_r41.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "AS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const person_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "https://image.tmdb.org/t/p/w500/" + person_r41.profile_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](person_r41.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](person_r41.character);
} }
function MovieDetailsComponent_div_7_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MovieDetailsComponent_div_7_div_2_div_1_Template, 11, 3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const person_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", person_r41.profile_path);
} }
function MovieDetailsComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MovieDetailsComponent_div_7_div_2_Template, 2, 1, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.cast);
} }
function MovieDetailsComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.reviews.length);
} }
function MovieDetailsComponent_div_12_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Read the rest");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const review_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", review_r48.avatar_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("A review created by ", review_r48.author, "\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0", review_r48.rating, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Written by ", review_r48.author, " on ", review_r48.created_at, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](review_r48.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", review_r48.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("target", "_blank");
} }
function MovieDetailsComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MovieDetailsComponent_div_12_div_1_Template, 16, 8, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.reviews);
} }
function MovieDetailsComponent_div_13_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Read the rest");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const review_r50 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", review_r50.avatar_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("A review created by ", review_r50.author, "\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](review_r50.rating);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Written by ", review_r50.author, " on ", review_r50.created_at, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](review_r50.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", review_r50.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("target", "_blank");
} }
function MovieDetailsComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MovieDetailsComponent_div_13_div_1_Template, 19, 8, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.reviews);
} }
function MovieDetailsComponent_div_14_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-multi-carousel", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r52.recommendedMovies);
} }
function MovieDetailsComponent_div_14_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MovieDetailsComponent_div_14_div_4_div_1_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r51.recommendedMovies.results.length !== 0);
} }
function MovieDetailsComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Recommended Movies");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MovieDetailsComponent_div_14_div_4_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.recommendedMovies);
} }
function MovieDetailsComponent_div_15_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-multi-carousel", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r54.recommendedMovies);
} }
function MovieDetailsComponent_div_15_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MovieDetailsComponent_div_15_div_4_div_1_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r53.recommendedMovies.results.length !== 0);
} }
function MovieDetailsComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Recommended Movies");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MovieDetailsComponent_div_15_div_4_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.recommendedMovies);
} }
function MovieDetailsComponent_div_19_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-multi-carousel", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r55.similarMovies);
} }
function MovieDetailsComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MovieDetailsComponent_div_19_div_1_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.similarMovies.results.length !== 0);
} }
class MovieDetailsComponent {
    // tslint:disable-next-line:max-line-length
    constructor(route, postsService, elementRef, breakpointObserver) {
        this.route = route;
        this.postsService = postsService;
        this.elementRef = elementRef;
        this.breakpointObserver = breakpointObserver;
        this.btnContent = '';
        this.id = '';
        this.title = '';
        // tslint:disable-next-line:variable-name
        this.poster_path = '';
        this.mediaType = '';
        this.key = '';
        this.genres = [];
        this.spokenLanguages = [];
        this.watchlistFlag = 'false';
        this.myStorage = window.localStorage;
    }
    ngOnInit() {
        this.isMobile = this.breakpointObserver.isMatched('(max-width: 500px)');
        this.isDesktop = this.breakpointObserver.isMatched('(min-width: 500px)');
        // @ts-ignore
        document.getElementById('navbarCollapse').className = 'collapse navbar-collapse';
        if (window.location.pathname === '/mylist') {
            // @ts-ignore
            document.getElementById('my-list').className = 'nav-link active';
            // @ts-ignore
            document.getElementById('home').className = 'nav-link';
        }
        else {
            // @ts-ignore
            document.getElementById('home').className = 'nav-link active';
            // @ts-ignore
            document.getElementById('my-list').className = 'nav-link';
        }
        this.routeSub = this.route.params.subscribe(params => {
            // console.log(params);
            console.log(params.id);
            this.id = params.id;
            this.checkWatchList();
        });
        this.fetchData();
        if (document.getElementById('typeahead-http')) {
            // @ts-ignore
            document.getElementById('typeahead-http').innerHTML = '';
        }
    }
    checkWatchList() {
        // check if it is in watchlist
        let watchlist = [];
        // if there is already some continue watching
        if (this.myStorage) {
            if (this.myStorage.getItem('watchlist')) {
                // check if this id exists
                watchlist = JSON.parse(this.myStorage.getItem('watchlist'));
                const array = [];
                for (const one of watchlist) {
                    array.push(one);
                    // console.log(array);
                }
                // traverse continue watching list
                // tslint:disable-next-line:prefer-for-of
                for (let idx = 0; idx < array.length; idx++) {
                    // console.log('[each one] ' + JSON.parse(array[idx]).title);
                    // console.log(parseInt(JSON.parse(array[idx]).id) === parseInt(this.id));
                    // console.log('json id ' + JSON.parse(array[idx]).id + 'type' + typeof(JSON.parse(array[idx]).id));
                    // console.log('type of ' + typeof(this.id));
                    // tslint:disable-next-line:radix
                    // @ts-ignore
                    // tslint:disable-next-line:radix
                    if (parseInt(JSON.parse(array[idx]).id) === parseInt(this.id)) {
                        // console.log('[before]' + array);
                        this.watchlistFlag = 'true';
                        // console.log('[addToContinueWatching]' + array);
                    }
                }
            }
        }
        console.log('watchlistFlag is ' + this.watchlistFlag);
        if (this.watchlistFlag === 'true') {
            this.btnContent = 'Remove from watchlist';
        }
        else {
            this.btnContent = 'Add to watchlist';
        }
        console.log(this.btnContent);
    }
    fetchData() {
        this.postsService.getMovieDetails(this.id).subscribe(res => {
            this.movieDetails = res;
            this.mediaType = 'movie';
            this.title = this.movieDetails.title;
            console.log(this.movieDetails.tagline);
            this.poster_path = this.movieDetails.poster_path;
            // tslint:disable-next-line:radix
            this.releaseYear = parseInt(this.movieDetails.release_date);
            this.voteAverage = parseFloat(this.movieDetails.vote_average).toFixed(1);
            // tslint:disable-next-line:radix
            this.hours = Math.floor(this.movieDetails.runtime / 60);
            this.minutes = this.movieDetails.runtime - this.hours * 60;
            for (const genre of this.movieDetails.genres) {
                this.genres.push(genre.name);
            }
            this.genres = this.genres.join(', ');
            for (const language of this.movieDetails.spoken_languages) {
                this.spokenLanguages.push(language.english_name);
            }
            this.spokenLanguages.join(', ');
            this.overview = this.movieDetails.overview;
            this.tweet = 'Watch%20' + this.movieDetails.toString() + 'https://www.youtube.com/watch?v=' + this.key.toString() + '#USC%20#CSCI571%20#FightOn';
            // add to continue watching
            // @ts-ignore
            this.addToContinueWatching();
        });
        this.postsService.getMovieVideos(this.id).subscribe(res => {
            this.movieVideos = res;
            if (this.movieVideos.results.length === 0 || !this.movieVideos.results.length) {
                this.key = 'tzkWB85ULJY';
            }
            else {
                for (const result of this.movieVideos.results) {
                    if (result.type === 'Trailer' && result.key) {
                        this.key = result.key;
                        break;
                    }
                }
                if (!this.key) {
                    for (const result of this.movieVideos.results) {
                        if (result.type === 'Teaser' && result.key) {
                            this.key = result.key;
                            break;
                        }
                    }
                }
                if (!this.key) {
                    this.key = 'tzkWB85ULJY';
                }
            }
        });
        this.postsService.getMovieCast(this.id).subscribe(res => {
            this.cast = res;
            this.cast = this.cast.cast;
        });
        this.postsService.getMovieReviews(this.id).subscribe(res => {
            this.reviews = res;
            this.reviews = this.reviews.results;
            const tmpReviews = [];
            for (let i = 0; i < 10; i++) {
                tmpReviews.push(this.reviews[i]);
            }
            // deal with reviews data
            for (const review of this.reviews) {
                // format avatar path
                if (!review.author_details.avatar_path) {
                    review.avatar_path = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHnPmUvFLjjmoYWAbLTEmLLIRCPpV_OgxCVA&usqp=CAU';
                }
                else {
                    if (review.author_details.avatar_path.substring(0, 6) === '/https') {
                        review.avatar_path = review.author_details.avatar_path.substring(1);
                    }
                    else {
                        review.avatar_path = 'https://image.tmdb.org/t/p/original' + review.author_details.avatar_path;
                    }
                }
                // format date created
                const date = review.created_at;
                // console.log(date);
                // tslint:disable-next-line:radix
                const newDate = new Date(date);
                // console.log(newDate);
                const mo = new Intl.DateTimeFormat('en', { month: 'long' }).format(newDate);
                const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(newDate);
                // const ho = new Intl.DateTimeFormat('en', { hour: 'numeric' }).format(newDate);
                let min = new Intl.DateTimeFormat('en', { minute: 'numeric' }).format(newDate);
                let sec = new Intl.DateTimeFormat('en', { second: 'numeric' }).format(newDate);
                if (min.length < 2) {
                    min = '0' + min;
                }
                if (sec.length < 2) {
                    sec = '0' + sec;
                }
                if (newDate.getHours() === 12) {
                    review.created_at = `${mo} ${da}, ${newDate.getFullYear()}, ${newDate.getHours()}:${min}:${sec} PM`;
                }
                else if (newDate.getHours() < 12) {
                    review.created_at = `${mo} ${da}, ${newDate.getFullYear()}, ${newDate.getHours()}:${min}:${sec} AM`;
                }
                else {
                    review.created_at = `${mo} ${da}, ${newDate.getFullYear()}, ${newDate.getHours() - 12}:${min}:${sec} PM`;
                }
                console.log(review.rating);
                if (!review.author_details.rating) {
                    review.rating = 0;
                }
                else {
                    review.rating = review.author_details.rating;
                }
                console.log(review.rating);
            }
        });
        // fetch recommended movies data
        this.postsService.getRecommendedMovies(this.id).subscribe(res => {
            this.recommendedMovies = res;
        });
        // fetch similar movies data
        this.postsService.getSimilarMovies(this.id).subscribe(res => {
            this.similarMovies = res;
        });
    }
    // tslint:disable-next-line:variable-name
    addToContinueWatching() {
        let continueWatching = [];
        // if there is already some continue watching
        if (this.myStorage) {
            if (this.myStorage.getItem('continue_watching')) {
                // check if this id exists
                continueWatching = JSON.parse(this.myStorage.getItem('continue_watching'));
                // console.log('[you have] ' + continueWatching);
                const array = [];
                for (const one of continueWatching) {
                    array.push(one);
                    // console.log(array);
                }
                // traverse continue watching list
                for (let idx = 0; idx < array.length; idx++) {
                    // console.log('[each one] ' + JSON.parse(array[idx]).title);
                    // console.log(parseInt(JSON.parse(array[idx]).id) === parseInt(this.id));
                    // console.log('json id ' + JSON.parse(array[idx]).id + 'type' + typeof(JSON.parse(array[idx]).id));
                    // console.log('type of ' + typeof(this.id));
                    // tslint:disable-next-line:radix
                    // @ts-ignore
                    // tslint:disable-next-line:radix
                    if (parseInt(JSON.parse(array[idx]).id) === parseInt(this.id)) {
                        // console.log('[before]' + array);
                        array.splice(idx, 1);
                        // console.log('[addToContinueWatching]' + array);
                    }
                }
                continueWatching = array;
            }
        }
        // console.log('[addToContinueWatching] ' + this.title);
        continueWatching.unshift(`{"id": ${this.id}, "title": \"${this.title}\", "poster_path": \"${this.poster_path}\", "type": \"${this.mediaType}\" }`);
        this.myStorage.setItem('continue_watching', JSON.stringify(continueWatching));
        // console.log(this.myStorage);
    }
    getCastDetails(person) {
        if (this.isDesktop) {
            // @ts-ignore
            // document.getElementById('layout').style.overflow =  'hidden';
            // this.elementRef.nativeElement.ownerDocument.body.style = 'body::-webkit-scrollbar: { overflow: hidden; }';
            this.elementRef.nativeElement.ownerDocument.body.style.overflow = 'hidden';
            // @ts-ignore
            document.getElementById('mask').style.display = 'block';
            // @ts-ignore
            document.getElementById('mask').style.background = 'rgba(0,0,0,0.6)';
            // // @ts-ignore
            // document.getElementById('cast-details-card').style.overflowY = 'scroll';
            // console.log('here');
            this.postsService.getCastDetails(person).subscribe(res => {
                this.castDetails = res;
            });
            this.postsService.getCastExternal(person).subscribe(res => {
                this.external = res;
            });
            if (document.getElementById('card')) {
                // @ts-ignore
                document.getElementById('card').style.display = 'block';
            }
        }
        else if (this.isMobile) {
            // const cast = document.createElement('app-cast-details');
            // cast.setAttribute('target', 'castDetails');
            // cast.setAttribute('external', 'external');
            // // @ts-ignore
            // document.getElementById('cast-details').appendChild(cast);
            this.elementRef.nativeElement.ownerDocument.body.style.overflow = 'hidden';
            // @ts-ignore
            document.getElementById('mask').style.display = 'block';
            // @ts-ignore
            document.getElementById('mask').style.background = 'rgba(0,0,0,0.6)';
            this.postsService.getCastDetails(person).subscribe(res => {
                this.castDetails = res;
            });
            this.postsService.getCastExternal(person).subscribe(res => {
                this.external = res;
            });
            if (document.getElementById('card2')) {
                // @ts-ignore
                document.getElementById('card2').style.display = 'block';
            }
        }
    }
    ngOnDestroy() {
        // @ts-ignore
        this.routeSub.unsubscribe();
    }
    toggle() {
        if (this.isDesktop) {
            const addToWatchListBtn = document.getElementById('watchlist-btn');
            // @ts-ignore
            console.log('innerHTML: ' + addToWatchListBtn.innerHTML);
            console.log('another: ' + 'Add to watchlist');
            // @ts-ignore
            console.log(typeof (addToWatchListBtn.innerHTML));
            console.log(typeof ('Add to watchlist'));
            // @ts-ignore
            console.log(JSON.stringify(addToWatchListBtn.innerHTML) === JSON.stringify('Add to watchlist'));
            // @ts-ignore
            // if (addToWatchListBtn.innerHTML === 'Add to watchlist') {
            if (this.btnContent === 'Add to watchlist') {
                console.log('I am here');
                // @ts-ignore
                this.addToWatchList();
                console.log(' this.addToWatchList();');
            }
            else {
                // @ts-ignore
                this.removeFromWatchList();
                console.log(' this.removeFromWatchList();\n');
            }
        }
        else if (this.isMobile) {
            const addToWatchListBtn = document.getElementById('watchlist-btn2');
            // @ts-ignore
            console.log('innerHTML: ' + addToWatchListBtn.innerHTML);
            console.log('another: ' + 'Add to watchlist');
            // @ts-ignore
            console.log(typeof (addToWatchListBtn.innerHTML));
            console.log(typeof ('Add to watchlist'));
            // @ts-ignore
            console.log(JSON.stringify(addToWatchListBtn.innerHTML) === JSON.stringify('Add to watchlist'));
            // @ts-ignore
            // if (addToWatchListBtn.innerHTML === 'Add to watchlist') {
            if (this.btnContent === 'Add to watchlist') {
                console.log('I am here');
                // @ts-ignore
                this.addToWatchList();
                console.log(' this.addToWatchList();');
            }
            else {
                // @ts-ignore
                this.removeFromWatchList();
                console.log(' this.removeFromWatchList();\n');
            }
        }
    }
    addToWatchList() {
        if (this.isDesktop) {
            this.myStorage.setItem(this.movieDetails.id, this.movieDetails.id);
            const addToWatchListBtn = document.getElementById('watchlist-btn');
            const addedAlert = document.getElementById('add-alert');
            const removeAlert = document.getElementById('remove-alert');
            // @ts-ignore
            this.btnContent = 'Remove from watchlist';
            // add to local storage
            let watchlist = [];
            // let flag = 'false';
            // if there is already some in watchlist
            if (this.myStorage) {
                if (this.myStorage.getItem('watchlist')) {
                    // extract current watchlist
                    watchlist = JSON.parse(this.myStorage.getItem('watchlist'));
                    const array = [];
                    for (const one of watchlist) {
                        array.push(one);
                        // console.log(array);
                    }
                    watchlist = array;
                }
            }
            // if (flag === 'false') {
            watchlist.unshift(`{"id": ${this.id}, "title": \"${this.title}\", "poster_path": \"${this.poster_path}\", "type": \"${this.mediaType}\"}`);
            // }
            this.myStorage.setItem('watchlist', JSON.stringify(watchlist));
            console.log(window.localStorage);
            // @ts-ignore
            removeAlert.style.display = 'none';
            // @ts-ignore
            addedAlert.style.display = 'block';
            setTimeout(() => {
                // @ts-ignore
                addedAlert.style.display = 'none';
            }, 5000);
        }
        else if (this.isMobile) {
            this.myStorage.setItem(this.movieDetails.id, this.movieDetails.id);
            const addToWatchListBtn = document.getElementById('watchlist-btn2');
            const addedAlert = document.getElementById('add-alert2');
            const removeAlert = document.getElementById('remove-alert2');
            // @ts-ignore
            this.btnContent = 'Remove from watchlist';
            // add to local storage
            let watchlist = [];
            // let flag = 'false';
            // if there is already some in watchlist
            if (this.myStorage) {
                if (this.myStorage.getItem('watchlist')) {
                    // extract current watchlist
                    watchlist = JSON.parse(this.myStorage.getItem('watchlist'));
                    const array = [];
                    for (const one of watchlist) {
                        array.push(one);
                        // console.log(array);
                    }
                    watchlist = array;
                }
            }
            // if (flag === 'false') {
            watchlist.unshift(`{"id": ${this.id}, "title": \"${this.title}\", "poster_path": \"${this.poster_path}\", "type": \"${this.mediaType}\"}`);
            // }
            this.myStorage.setItem('watchlist', JSON.stringify(watchlist));
            console.log(window.localStorage);
            // @ts-ignore
            removeAlert.style.display = 'none';
            // @ts-ignore
            addedAlert.style.display = 'block';
            setTimeout(() => {
                // @ts-ignore
                addedAlert.style.display = 'none';
            }, 5000);
        }
    }
    removeFromWatchList() {
        if (this.isDesktop) {
            this.myStorage.removeItem(this.movieDetails.id);
            const addToWatchListBtn = document.getElementById('watchlist-btn');
            const addedAlert = document.getElementById('add-alert');
            const removeAlert = document.getElementById('remove-alert');
            // @ts-ignore
            this.btnContent = 'Add to watchlist';
            // remove from local storage
            let watchlist = [];
            // if there is already some continue watching
            if (this.myStorage) {
                if (this.myStorage.getItem('watchlist')) {
                    // check if this id exists
                    watchlist = JSON.parse(this.myStorage.getItem('watchlist'));
                    // console.log('[you have] ' + continueWatching);
                    const array = [];
                    for (const one of watchlist) {
                        array.push(one);
                        // console.log(array);
                    }
                    // traverse continue watching list
                    for (let idx = 0; idx < array.length; idx++) {
                        // tslint:disable-next-line:radix
                        if (parseInt(JSON.parse(array[idx]).id) === parseInt(this.id)) {
                            // console.log('[before]' + array);
                            array.splice(idx, 1);
                            // console.log('[addToContinueWatching]' + array);
                        }
                    }
                    watchlist = array;
                }
            }
            // console.log('[addToContinueWatching] ' + this.title);
            this.myStorage.setItem('watchlist', JSON.stringify(watchlist));
            console.log(window.localStorage);
            // @ts-ignore
            addedAlert.style.display = 'none';
            // @ts-ignore
            removeAlert.style.display = 'block';
            setTimeout(() => {
                // @ts-ignore
                removeAlert.style.display = 'none';
            }, 5000);
        }
        else if (this.isMobile) {
            this.myStorage.removeItem(this.movieDetails.id);
            const addToWatchListBtn = document.getElementById('watchlist-btn2');
            const addedAlert = document.getElementById('add-alert2');
            const removeAlert = document.getElementById('remove-alert2');
            // @ts-ignore
            this.btnContent = 'Add to watchlist';
            // remove from local storage
            let watchlist = [];
            // if there is already some continue watching
            if (this.myStorage) {
                if (this.myStorage.getItem('watchlist')) {
                    // check if this id exists
                    watchlist = JSON.parse(this.myStorage.getItem('watchlist'));
                    // console.log('[you have] ' + continueWatching);
                    const array = [];
                    for (const one of watchlist) {
                        array.push(one);
                        // console.log(array);
                    }
                    // traverse continue watching list
                    for (let idx = 0; idx < array.length; idx++) {
                        // tslint:disable-next-line:radix
                        if (parseInt(JSON.parse(array[idx]).id) === parseInt(this.id)) {
                            // console.log('[before]' + array);
                            array.splice(idx, 1);
                            // console.log('[addToContinueWatching]' + array);
                        }
                    }
                    watchlist = array;
                }
            }
            // console.log('[addToContinueWatching] ' + this.title);
            this.myStorage.setItem('watchlist', JSON.stringify(watchlist));
            console.log(window.localStorage);
            // @ts-ignore
            addedAlert.style.display = 'none';
            // @ts-ignore
            removeAlert.style.display = 'block';
            setTimeout(() => {
                // @ts-ignore
                removeAlert.style.display = 'none';
            }, 5000);
        }
    }
    hideAddedAlert() {
        if (this.isDesktop) {
            const addedAlert = document.getElementById('add-alert');
            // @ts-ignore
            addedAlert.style.display = 'none';
        }
        else if (this.isMobile) {
            const addedAlert = document.getElementById('add-alert2');
            // @ts-ignore
            addedAlert.style.display = 'none';
        }
    }
    hideRemovedAlert() {
        if (this.isDesktop) {
            const removeAlert = document.getElementById('remove-alert');
            // @ts-ignore
            removeAlert.style.display = 'none';
        }
        else if (this.isMobile) {
            const removeAlert = document.getElementById('remove-alert2');
            // @ts-ignore
            removeAlert.style.display = 'none';
        }
    }
}
MovieDetailsComponent.ɵfac = function MovieDetailsComponent_Factory(t) { return new (t || MovieDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"])); };
MovieDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MovieDetailsComponent, selectors: [["app-movie-details"]], decls: 20, vars: 10, consts: [["class", "box", 4, "ngIf"], ["id", "cast-details", 4, "ngIf"], [1, "full-cast-title-container"], [1, "full-cast-title", 2, "padding-left", "4%"], [1, "outer-container", "container-fluid", 2, "margin-left", "-2%"], [4, "ngIf"], ["style", "margin-left: 2%;", 4, "ngIf"], [1, "row", 2, "width", "100%", "margin-left", "11%", "margin-top", "100px"], [2, "color", "white", "font-size", "36px"], ["style", "color: darkgray; font-size: 36px; display: inline; font-weight: bolder; margin-left: 10px;", 4, "ngIf"], ["style", "margin-left: 11%; margin-right: 11%;  margin-top:20px;", 4, "ngIf"], ["class", "container-fluid", 4, "ngIf"], [1, "row", "container-fluid", 2, "width", "100%", "margin-left", "10%", "margin-top", "100px"], [1, "box"], ["class", "first-row-container container-fluid", "style", "font-size: 18px;", 4, "ngIf"], ["class", "mobile-cast-details", "style", "text-align: center", 4, "ngIf"], [1, "container-fluid", 2, "display", "block", "margin-bottom", "20px", "width", "98%"], [1, "card-text", "text-white", "description"], ["class", "grey-text overview", 4, "ngIf"], [1, "container-fluid", "share-container", 2, "width", "98%"], [2, "display", "block", "margin-bottom", "40px", "text-align", "left"], ["data-size", "large", 1, "twitter-share-button", 2, "font-size", "30px", "color", "#1ea2f1", "margin-right", "10px", 3, "href", "target"], [1, "fab", "fa-twitter"], ["target", "_blank", 1, "fb-xfbml-parse-ignore", 2, "font-size", "30px", "color", "#0926cd", 3, "href"], [1, "fab", "fa-facebook-square"], [1, "first-row-container", "container-fluid", 2, "font-size", "18px"], [1, "youtube-container", "col"], [1, "video", 3, "key"], ["class", "card detail-container col", "style", "", 4, "ngIf"], [1, "card", "detail-container", "col"], [1, "card-body"], [1, "card-title", "row"], [1, "card-text", "row", "grey-text", 2, "font-style", "italic", "font-size", "18px"], [1, "row"], ["class", "card-text grey-text", 4, "ngIf"], [1, "card-text", "grey-text"], [1, "fa", "fa-star"], ["style", "display: inline", "class", "card-text grey-text", 4, "ngIf"], [1, "subtitle"], ["class", "card-text grey-text", "style", "display: inline", 4, "ngIf"], [1, "row", 2, "margin-top", "10px", "margin-bottom", "10px"], ["id", "watchlist-container", 4, "ngIf"], [1, "card-text", "grey-text", 2, "display", "inline"], ["id", "watchlist-container"], ["id", "watchlist-btn", 1, "btn", "btn-primary", "row", 2, "font-size", "18px", 3, "click"], ["id", "add-alert", "role", "alert", 1, "init", "alert", "alert-success", "alert-dismissible", "fade", "show", 2, "margin-left", "-14px", "margin-top", "10px"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], ["id", "remove-alert", "role", "alert", 1, "init", "alert", "alert-danger", "alert-dismissible", "fade", "show", 2, "margin-left", "-14px", "margin-top", "10px"], [1, "mobile-cast-details", 2, "text-align", "center"], [1, "youtube-container", 2, "text-align", "center"], ["class", "card detail-container", "style", " width: 90% !important; text-align: center; margin-left: 5%;", 4, "ngIf"], [1, "card", "detail-container", 2, "width", "90% !important", "text-align", "center", "margin-left", "5%"], [1, "card-body", "small-detail-container", 2, "text-align", "left"], [1, "card-title", "row", 2, "font-size", "36px"], [1, "card-text", "grey-text", "row", 2, "font-style", "italic", "font-size", "18px"], [1, "row", 2, "font-size", "16px"], ["class", "card-text grey-text", "style", "display: inline;", 4, "ngIf"], ["id", "watchlist-container2", 4, "ngIf"], ["id", "watchlist-container2"], ["id", "watchlist-btn2", 1, "btn", "btn-primary", "row", 2, "font-size", "18px", 3, "click"], ["id", "add-alert2", "role", "alert", 1, "init", "alert", "alert-success", "alert-dismissible", "fade", "show", 2, "margin-left", "-14px", "margin-top", "10px"], ["id", "remove-alert2", "role", "alert", 1, "init", "alert", "alert-danger", "alert-dismissible", "fade", "show", 2, "margin-left", "-14px", "margin-top", "10px"], [1, "grey-text", "overview"], ["id", "cast-details"], [3, "details", "external"], [1, "cast-crew-container", 2, "width", "1100px"], ["style", "margin-bottom: 15px;", 4, "ngFor", "ngForOf"], [2, "margin-bottom", "15px"], [1, "card", "cast-member", "cast-card-container", 3, "click"], [1, ""], ["alt", "Card image cap", 1, "card-img-top", 2, "width", "100%", 3, "src"], [1, "card-body", 2, "text-align", "center"], [1, "card-text", 2, "margin-top", "-7px", "font-size", "14px", "font-weight", "bold", "width", "170px"], [1, "card-text", 2, "font-weight", "bolder", "margin-top", "-7px"], [1, "cast-character"], [2, "margin-left", "2%"], [1, "cast-crew-container"], [2, "color", "darkgray", "font-size", "36px", "display", "inline", "font-weight", "bolder", "margin-left", "10px"], [2, "margin-left", "11%", "margin-right", "11%", "margin-top", "20px"], [4, "ngFor", "ngForOf"], [1, "card", 2, "width", "100%", "height", "min-content", "border-radius", "10px", "margin-bottom", "20px"], ["alt", "", 1, "card-img-overlay", 2, "width", "130px", "height", "130px", "border-radius", "50%", "margin-left", "10px", 3, "src"], [1, "card-body", 2, "margin-left", "200px"], [1, "card-text", 2, "font-size", "22px", "font-weight", "bold"], [2, "display", "inline", "color", "white", "background", "black", "padding-left", "10px", "padding-right", "10px", "border-radius", "20px", "font-weight", "normal", "font-size", "20px"], [1, "card-text", 2, "color", "gray"], [1, "card-text", "review-content"], [2, "margin-bottom", "-10px", "text-decoration", "underline", 3, "href", "target"], ["alt", "", 1, "card-img-top", 2, "width", "70px", "height", "70px", "border-radius", "50%", "margin-left", "40px", "margin-top", "20px", 3, "src"], [1, "card-body", 2, "margin-left", "10px"], [1, "card-text", 2, "font-size", "22px", "margin-bottom", "10px"], [2, "display", "inline", "color", "white", "background", "black", "padding", "2px 10px", "border-radius", "20px", "font-size", "18px"], [2, "display", "inline", "color", "white", "font-weight", "normal", "font-size", "18px"], [1, "card-text", 2, "color", "gray", "margin-top", "20px"], [1, "container-fluid"], [1, "row", 2, "width", "180px", "margin-left", "11%", "margin-top", "100px"], [3, "data"]], template: function MovieDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MovieDetailsComponent_div_0_Template, 15, 7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MovieDetailsComponent_div_1_Template, 2, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Full Cast and Crew");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MovieDetailsComponent_div_6_Template, 3, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MovieDetailsComponent_div_7_Template, 3, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MovieDetailsComponent_div_11_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, MovieDetailsComponent_div_12_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, MovieDetailsComponent_div_13_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, MovieDetailsComponent_div_14_Template, 5, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, MovieDetailsComponent_div_15_Template, 5, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Similar Movies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, MovieDetailsComponent_div_19_Template, 2, 1, "div", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.movieDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.castDetails && ctx.external);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isDesktop);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.reviews);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.reviews && ctx.isDesktop);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.reviews && ctx.isMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isDesktop);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.similarMovies);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _video_video_component__WEBPACK_IMPORTED_MODULE_5__["VideoComponent"], _cast_details_cast_details_component__WEBPACK_IMPORTED_MODULE_6__["CastDetailsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _multi_carousel_multi_carousel_component__WEBPACK_IMPORTED_MODULE_7__["MultiCarouselComponent"]], styles: ["@media only screen and (max-width: 500px) {\n  .grey-text[_ngcontent-%COMP%] {\n    color: darkgrey;\n  }\n\n  .box[_ngcontent-%COMP%] {\n    color: white;\n    width: 100%;\n    margin-top: 20px;\n    \n    text-align: center;\n  }\n\n  .container-fluid[_ngcontent-%COMP%] {\n    margin-left: -1%;\n  }\n\n  \n  \n  \n  \n  \n  \n  \n  \n\n  .detail-container[_ngcontent-%COMP%]{\n    background-color: transparent;\n    color: white;\n    text-align: center;\n  }\n\n  .share-container[_ngcontent-%COMP%] {\n    width: 90%;\n    margin-left: 3%;\n  }\n\n  .detail-container[_ngcontent-%COMP%]    > .card-body[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n    .detail-container > .card-body > .card-title {\n    width: 100%;\n    font-weight: normal;\n  }\n\n  .full-cast-title[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 36px;\n    margin-left: 10%;\n    margin-bottom: 10px;\n  }\n\n\n  .cast-crew-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    overflow-x: scroll;\n    width: 500px;\n    align-content: center;\n    margin-left: 100px;\n  }\n\n  .first-row-container[_ngcontent-%COMP%] {\n    \n    flex-direction: row;\n    margin-bottom: 20px;\n    display: flex;\n    flex-wrap: wrap;\n    text-align: left;\n    margin-top: -30px;\n    \n    \n    width: 100%; \n  }\n\n\n  .review-content[_ngcontent-%COMP%] {\n    margin-top: 0px;\n    overflow: hidden;\n    height: 52px;\n    display: -webkit-box;\n    -webkit-line-clamp: 3;\n    -webkit-box-orient: vertical;\n    margin-bottom: 5px;\n    font-size: 12px;\n  }\n\n  .init[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .cast-member[_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n  }\n\n  .cast-crew-container[_ngcontent-%COMP%]::-webkit-scrollbar {\n    height: 0.6em;\n  }\n\n  .cast-crew-container[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n    -webkit-box-shadow: inset 0 0 6px rgba(255,255,255,0.3);\n    background-color: rgba(255,255,255,0.1);\n  }\n\n  .cast-crew-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n    border-radius: 6px;\n    background-color: darkgrey;\n    \n  }\n\n  .cast-card-container[_ngcontent-%COMP%] {\n    width: 185px;\n    height: 380px;\n    align-items: center;\n    margin-right: 30px;\n    border-radius: 20px;\n    overflow: hidden;\n    border: none;\n  }\n\n  .cast-character[_ngcontent-%COMP%] {\n    margin-top: -7px;\n    font-size: 14px;\n  }\n\n\n  .description[_ngcontent-%COMP%] {\n    width: 90%;\n    margin-left: 5%;\n    text-align: left;\n  }\n\n  .overview[_ngcontent-%COMP%] {\n    width: 90%;\n    margin-left: 5%;\n    text-align: justify;\n  }\n\n  .full-cast-title[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 32px;\n    margin-left: 6%;\n    margin-bottom: 10px;\n  }\n\n  .cast-crew-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    overflow-x: scroll;\n    width: 97vw;\n    align-content: center;\n    margin-left: 3vw;\n    scrollbar-base-color: transparent;\n    -ms-overflow-style: none;  \n    scrollbar-width: none;  \n  }\n\n  .cast-crew-container[_ngcontent-%COMP%]::-webkit-scrollbar {\n    \n    display: none;\n  }\n\n  .cast-card-container[_ngcontent-%COMP%] {\n    width: 185px;\n    height: 380px;\n    align-items: center;\n    margin-right: 40px;\n    border-radius: 20px;\n    overflow: hidden;\n    border: none;\n  }\n  .youtube-container[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n}\n\n@media only screen and (min-width: 500px) {\n  .test[_ngcontent-%COMP%] {\n    color: white;\n    margin-top: 5%;\n  }\n\n\n  .grey-text[_ngcontent-%COMP%] {\n    color: darkgrey;\n  }\n\n  .box[_ngcontent-%COMP%] {\n    color: white;\n    width: 80%;\n    margin-top: 50px;\n    margin-left: 9%;\n  }\n\n  .detail-container[_ngcontent-%COMP%] {\n    background-color: transparent;\n    color: white;\n    width: 100%;\n    margin-top: -20px;\n    \n    \n  }\n\n  .card-title[_ngcontent-%COMP%] {\n    \n    font-size: 40px;\n    font-weight: normal;\n  }\n\n\n\n  .full-cast-title[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 36px;\n    margin-left: 10%;\n    margin-bottom: 10px;\n  }\n\n  .outer-container[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: center;\n  }\n\n\n  .cast-crew-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    overflow-x: scroll;\n    \n    \n    align-content: center;\n    margin-left: auto;\n    margin-right: auto;\n    \n  }\n\n  .first-row-container[_ngcontent-%COMP%] {\n    \n    \n    margin-bottom: 20px;\n    display: flex;\n    flex-direction: row;\n    \n    text-align: left;\n    \n    \n    width: 100%; \n  }\n\n\n  .review-content[_ngcontent-%COMP%] {\n    margin-top: 0px;\n    overflow: hidden;\n    height: 52px;\n    display: -webkit-box;\n    -webkit-line-clamp: 3;\n    -webkit-box-orient: vertical;\n    margin-bottom: 5px;\n    font-size: 12px;\n  }\n\n  .init[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .cast-member[_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n  }\n\n  .cast-crew-container[_ngcontent-%COMP%]::-webkit-scrollbar {\n    height: 0.6em;\n  }\n\n  .cast-crew-container[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n    -webkit-box-shadow: inset 0 0 6px rgba(255,255,255,0.3);\n    background-color: rgba(255,255,255,0.1);\n  }\n\n  .cast-crew-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n    border-radius: 6px;\n    background-color: darkgrey;\n    \n  }\n\n  .cast-card-container[_ngcontent-%COMP%] {\n    width: 175px;\n    height: 380px;\n    align-items: center;\n    margin-right: 10px;\n    border-radius: 20px;\n    overflow: hidden;\n    border: none;\n  }\n\n  .cast-character[_ngcontent-%COMP%] {\n    margin-top: -7px;\n    font-size: 14px;\n  }\n\n  .youtube-container[_ngcontent-%COMP%] {\n    \n    \n    \n    \n    \n    margin-bottom: 20px;\n    \n  }\n\n  .full-cast-title-container[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n\n  .full-cast-title[_ngcontent-%COMP%] {\n    \n    \n  }\n\n\n  \n  \n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vdmllLWRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxTQUFTO0FBQ1Q7RUFDRTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osV0FBVztJQUNYLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBLHNCQUFzQjtFQUN0QixtQ0FBbUM7RUFDbkMsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiw0QkFBNEI7RUFDNUIsb0JBQW9CO0VBQ3BCLHdCQUF3QjtFQUN4QixJQUFJOztFQUVKO0lBQ0UsNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUI7RUFDckI7OztFQUdBO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsMkJBQTJCO0lBQzNCLHVCQUF1QjtJQUN2QixXQUFXLEVBQUUsbUJBQW1CO0VBQ2xDOzs7RUFHQTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsNEJBQTRCO0lBQzVCLGtCQUFrQjtJQUNsQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLHVEQUF1RDtJQUN2RCx1Q0FBdUM7RUFDekM7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsMEJBQTBCO0lBQzFCLGdDQUFnQztFQUNsQzs7RUFFQTtJQUNFLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixlQUFlO0VBQ2pCOzs7RUFHQTtJQUNFLFVBQVU7SUFDVixlQUFlO0lBQ2YsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsVUFBVTtJQUNWLGVBQWU7SUFDZixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osZUFBZTtJQUNmLGVBQWU7SUFDZixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixpQ0FBaUM7SUFDakMsd0JBQXdCLEdBQUcsZ0JBQWdCO0lBQzNDLHFCQUFxQixHQUFHLFlBQVk7RUFDdEM7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsYUFBYTtFQUNmOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsWUFBWTtFQUNkO0VBQ0E7SUFDRSxXQUFXO0VBQ2I7O0FBRUY7QUFPQSxVQUFVO0FBQ1Y7RUFDRTtJQUNFLFlBQVk7SUFDWixjQUFjO0VBQ2hCOzs7RUFHQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsZUFBZTtJQUNmLG1CQUFtQjtFQUNyQjs7OztFQUlBO0lBQ0UsWUFBWTtJQUNaLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtFQUNwQjs7O0VBR0E7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQiwyQkFBMkI7SUFDM0IsdUJBQXVCO0lBQ3ZCLFdBQVcsRUFBRSxtQkFBbUI7RUFDbEM7OztFQUdBO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLHFCQUFxQjtJQUNyQiw0QkFBNEI7SUFDNUIsa0JBQWtCO0lBQ2xCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsdURBQXVEO0lBQ3ZELHVDQUF1QztFQUN6Qzs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIsZ0NBQWdDO0VBQ2xDOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsWUFBWTtFQUNkOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxlQUFlO0lBQ2Ysb0JBQW9CO0VBQ3RCOzs7RUFHQSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLElBQUk7QUFDTiIsImZpbGUiOiJtb3ZpZS1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKm1vYmlsZSovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIC5ncmV5LXRleHQge1xuICAgIGNvbG9yOiBkYXJrZ3JleTtcbiAgfVxuXG4gIC5ib3gge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIC8qbWFyZ2luLWxlZnQ6IDUlOyovXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLmNvbnRhaW5lci1mbHVpZCB7XG4gICAgbWFyZ2luLWxlZnQ6IC0xJTtcbiAgfVxuXG4gIC8qLmRldGFpbC1jb250YWluZXIgeyovXG4gIC8qICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsqL1xuICAvKiAgY29sb3I6IHdoaXRlOyovXG4gIC8qICB3aWR0aDogOTAlOyovXG4gIC8qICAhKnBvc2l0aW9uOiBhYnNvbHV0ZTsqISovXG4gIC8qICBkaXNwbGF5OiBibG9jazsqL1xuICAvKiAgdGV4dC1hbGlnbjogY2VudGVyOyovXG4gIC8qfSovXG5cbiAgLmRldGFpbC1jb250YWluZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5zaGFyZS1jb250YWluZXIge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDMlO1xuICB9XG5cbiAgLmRldGFpbC1jb250YWluZXIgPiAuY2FyZC1ib2R5IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIDo6bmctZGVlcCAuZGV0YWlsLWNvbnRhaW5lciA+IC5jYXJkLWJvZHkgPiAuY2FyZC10aXRsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgfVxuXG4gIC5mdWxsLWNhc3QtdGl0bGUge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDM2cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG5cblxuICAuY2FzdC1jcmV3LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgICB3aWR0aDogNTAwcHg7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcbiAgfVxuXG4gIC5maXJzdC1yb3ctY29udGFpbmVyIHtcbiAgICAvKmRpc3BsYXk6IGZsZXg7Ki9cbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBtYXJnaW4tdG9wOiAtMzBweDtcbiAgICAvKmp1c3RpZnktY29udGVudDogY2VudGVyOyovXG4gICAgLyphbGlnbi1pdGVtczogY2VudGVyOyovXG4gICAgd2lkdGg6IDEwMCU7IC8qIG5vIGZpeGVkIHdpZHRoICovXG4gIH1cblxuXG4gIC5yZXZpZXctY29udGVudCB7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgaGVpZ2h0OiA1MnB4O1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIC13ZWJraXQtbGluZS1jbGFtcDogMztcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cblxuICAuaW5pdCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5jYXN0LW1lbWJlcjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgLmNhc3QtY3Jldy1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBoZWlnaHQ6IDAuNmVtO1xuICB9XG5cbiAgLmNhc3QtY3Jldy1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgyNTUsMjU1LDI1NSwwLjMpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC4xKTtcbiAgfVxuXG4gIC5jYXN0LWNyZXctY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmV5O1xuICAgIC8qb3V0bGluZTogMXB4IHNvbGlkIHNsYXRlZ3JleTsqL1xuICB9XG5cbiAgLmNhc3QtY2FyZC1jb250YWluZXIge1xuICAgIHdpZHRoOiAxODVweDtcbiAgICBoZWlnaHQ6IDM4MHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cblxuICAuY2FzdC1jaGFyYWN0ZXIge1xuICAgIG1hcmdpbi10b3A6IC03cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG5cblxuICAuZGVzY3JpcHRpb24ge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cblxuICAub3ZlcnZpZXcge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIH1cblxuICAuZnVsbC1jYXN0LXRpdGxlIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAzMnB4O1xuICAgIG1hcmdpbi1sZWZ0OiA2JTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG5cbiAgLmNhc3QtY3Jldy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gICAgd2lkdGg6IDk3dnc7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi1sZWZ0OiAzdnc7XG4gICAgc2Nyb2xsYmFyLWJhc2UtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTsgIC8qIElFIGFuZCBFZGdlICovXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lOyAgLyogRmlyZWZveCAqL1xuICB9XG5cbiAgLmNhc3QtY3Jldy1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAvKmhlaWdodDogMC42ZW07Ki9cbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmNhc3QtY2FyZC1jb250YWluZXIge1xuICAgIHdpZHRoOiAxODVweDtcbiAgICBoZWlnaHQ6IDM4MHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cbiAgLnlvdXR1YmUtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG59XG5cblxuXG5cblxuXG4vKmRlc2t0b3AqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MDBweCkge1xuICAudGVzdCB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbi10b3A6IDUlO1xuICB9XG5cblxuICAuZ3JleS10ZXh0IHtcbiAgICBjb2xvcjogZGFya2dyZXk7XG4gIH1cblxuICAuYm94IHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA5JTtcbiAgfVxuXG4gIC5kZXRhaWwtY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogLTIwcHg7XG4gICAgLypkaXNwbGF5OiBpbmxpbmUtYmxvY2s7Ki9cbiAgICAvKm1hcmdpbi1sZWZ0OiA1JTsqL1xuICB9XG5cbiAgLmNhcmQtdGl0bGUge1xuICAgIC8qd2lkdGg6IDEwMCU7Ki9cbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgfVxuXG5cblxuICAuZnVsbC1jYXN0LXRpdGxlIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAzNnB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxuXG4gIC5vdXRlci1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG5cbiAgLmNhc3QtY3Jldy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gICAgLyp3aWR0aDogMTEwMHB4OyovXG4gICAgLyp3aWR0aDogOTB2dzsqL1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgLyp0ZXh0LWFsaWduOiBjZW50ZXI7Ki9cbiAgfVxuXG4gIC5maXJzdC1yb3ctY29udGFpbmVyIHtcbiAgICAvKmRpc3BsYXk6IGZsZXg7Ki9cbiAgICAvKmZsZXgtZGlyZWN0aW9uOiByb3c7Ki9cbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAvKmZsZXgtd3JhcDogd3JhcDsqL1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgLypqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsqL1xuICAgIC8qYWxpZ24taXRlbXM6IGNlbnRlcjsqL1xuICAgIHdpZHRoOiAxMDAlOyAvKiBubyBmaXhlZCB3aWR0aCAqL1xuICB9XG5cblxuICAucmV2aWV3LWNvbnRlbnQge1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGhlaWdodDogNTJweDtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDM7XG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG5cbiAgLmluaXQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAuY2FzdC1tZW1iZXI6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIC5jYXN0LWNyZXctY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgaGVpZ2h0OiAwLjZlbTtcbiAgfVxuXG4gIC5jYXN0LWNyZXctY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMjU1LDI1NSwyNTUsMC4zKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuMSk7XG4gIH1cblxuICAuY2FzdC1jcmV3LWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JleTtcbiAgICAvKm91dGxpbmU6IDFweCBzb2xpZCBzbGF0ZWdyZXk7Ki9cbiAgfVxuXG4gIC5jYXN0LWNhcmQtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTc1cHg7XG4gICAgaGVpZ2h0OiAzODBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYm9yZGVyOiBub25lO1xuICB9XG5cbiAgLmNhc3QtY2hhcmFjdGVyIHtcbiAgICBtYXJnaW4tdG9wOiAtN3B4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuXG4gIC55b3V0dWJlLWNvbnRhaW5lciB7XG4gICAgLyp3aWR0aDogNDAwcHg7Ki9cbiAgICAvKnRleHQtYWxpZ246IGxlZnQ7Ki9cbiAgICAvKm1hcmdpbi1yaWdodDogMzQwcHg7Ki9cbiAgICAvKnBhZGRpbmctcmlnaHQ6IDIwcHg7Ki9cbiAgICAvKm1hcmdpbi1yaWdodDogMyU7Ki9cbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIC8qd2lkdGg6IG1pbi1jb250ZW50OyovXG4gIH1cblxuICAuZnVsbC1jYXN0LXRpdGxlLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxuXG4gIC5mdWxsLWNhc3QtdGl0bGUge1xuICAgIC8qd2lkdGg6IDEwMCU7Ki9cbiAgICAvKnRleHQtYWxpZ246IGxlZnQ7Ki9cbiAgfVxuXG5cbiAgLyojcGxheWVyIHsqL1xuICAvKiAgd2lkdGg6IDEwMCU7Ki9cbiAgLyp9Ki9cbn1cblxuXG5cbiJdfQ== */"] });


/***/ }),

/***/ "6Wl3":
/*!***********************************************************************!*\
  !*** ./src/app/components/mixed-carousel/mixed-carousel.component.ts ***!
  \***********************************************************************/
/*! exports provided: MixedCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MixedCarouselComponent", function() { return MixedCarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





function MixedCarouselComponent_div_0_div_1_2_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MixedCarouselComponent_div_0_div_1_2_ng_template_0_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const one_r7 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r8.reloadPage(one_r7.id, one_r7.type); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const one_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("routerLink", "/watch/", one_r7.type, "/", one_r7.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "https://image.tmdb.org/t/p/w500" + one_r7.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](one_r7.title);
} }
function MixedCarouselComponent_div_0_div_1_2_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MixedCarouselComponent_div_0_div_1_2_ng_template_0_div_1_Template, 5, 4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const six_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", six_r4);
} }
function MixedCarouselComponent_div_0_div_1_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MixedCarouselComponent_div_0_div_1_2_ng_template_0_Template, 3, 1, "ng-template", 5);
} }
function MixedCarouselComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ngb-carousel", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MixedCarouselComponent_div_0_div_1_2_Template, 1, 0, undefined, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showNavigationArrows", true)("showNavigationIndicators", true)("interval", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.dataArray);
} }
function MixedCarouselComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MixedCarouselComponent_div_0_div_1_Template, 3, 4, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.dataArray);
} }
function MixedCarouselComponent_div_1_div_1_2_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MixedCarouselComponent_div_1_div_1_2_ng_template_0_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const one_r16 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r17.reloadPage(one_r16.id, one_r16.type); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const one_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("routerLink", "/watch/", one_r16.type, "/", one_r16.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "https://image.tmdb.org/t/p/w500" + one_r16.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](one_r16.title);
} }
function MixedCarouselComponent_div_1_div_1_2_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MixedCarouselComponent_div_1_div_1_2_ng_template_0_div_1_Template, 5, 4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const six_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", six_r13);
} }
function MixedCarouselComponent_div_1_div_1_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MixedCarouselComponent_div_1_div_1_2_ng_template_0_Template, 3, 1, "ng-template", 5);
} }
function MixedCarouselComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ngb-carousel", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MixedCarouselComponent_div_1_div_1_2_Template, 1, 0, undefined, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showNavigationArrows", true)("showNavigationIndicators", false)("interval", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r11.dataArray);
} }
function MixedCarouselComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MixedCarouselComponent_div_1_div_1_Template, 3, 4, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.dataArray);
} }
class MixedCarouselComponent {
    constructor(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.dataArray = [];
        this.myStorage = window.localStorage;
    }
    ngOnInit() {
        // if (window.screen.width === 360) { // 768px portrait
        //   this.mobile = true;
        // }
        this.isMobile = this.breakpointObserver.isMatched('(max-width: 500px)');
        this.isDesktop = this.breakpointObserver.isMatched('(min-width: 500px)');
        // console.log('continue is ' + this.continue);
        // console.log('array is  ' + this.data);
        if (this.continue !== 'true') {
            this.data = this.data.results;
            // console.log('check if continue');
        }
        if (this.isDesktop) {
            this.transformData();
        }
        else if (this.isMobile) {
            this.transformData2();
        }
    }
    transformData() {
        // console.log(this.data);
        let j = -1;
        if (this.data) {
            for (let i = 0; i < this.data.length && i < 24; i++) {
                // console.log(this.data[i].poster_path);
                if (i % 6 === 0) {
                    j++;
                    this.dataArray[j] = [];
                    this.dataArray[j].push(this.data[i]);
                }
                else {
                    this.dataArray[j].push(this.data[i]);
                }
            }
        }
        // console.log(this.dataArray);
    }
    transformData2() {
        // console.log(this.data);
        let j = -1;
        if (this.data) {
            for (let i = 0; i < this.data.length && i < 24; i++) {
                // console.log(this.data[i].poster_path);
                if (i % 1 === 0) {
                    j++;
                    this.dataArray[j] = [];
                    this.dataArray[j].push(this.data[i]);
                }
                else {
                    this.dataArray[j].push(this.data[i]);
                }
            }
        }
        // console.log(this.dataArray);
    }
    reloadPage(id, type) {
        window.location.href = `/watch/${type}/${id}`;
    }
}
MixedCarouselComponent.ɵfac = function MixedCarouselComponent_Factory(t) { return new (t || MixedCarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"])); };
MixedCarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MixedCarouselComponent, selectors: [["app-mixed-carousel"]], inputs: { data: "data", continue: "continue" }, decls: 2, vars: 2, consts: [["class", "container", 4, "ngIf"], [1, "container"], [4, "ngIf"], [1, "my-carousel_container", 3, "showNavigationArrows", "showNavigationIndicators", "interval"], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], [1, "six-wrapper"], ["class", "wrapper", 3, "routerLink", "click", 4, "ngFor", "ngForOf"], [1, "wrapper", 3, "routerLink", "click"], ["alt", "Random first slide", 1, "carousel-img", 3, "src"], [1, "overlay"], [1, "text"]], template: function MixedCarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MixedCarouselComponent_div_0_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MixedCarouselComponent_div_1_Template, 2, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isDesktop);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMobile);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbSlide"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], styles: ["@media only screen and (min-width: 500px) {\n  ngb-carousel[_ngcontent-%COMP%] {\n    outline: none;\n    background-color: transparent;\n    width: 100%;\n    text-align: center;\n    align-items: center;\n  }\n\n  .my-carousel_container[_ngcontent-%COMP%] {\n\n  }\n  .my-carousel_container[_ngcontent-%COMP%] .carousel-inner {\n    padding: 2%;\n  }\n  .my-carousel_container[_ngcontent-%COMP%] .slide {\n    padding: 2%;\n  }\n\n  .my-carousel_container[_ngcontent-%COMP%] .carousel-control-prev {\n    left: -10%;\n  }\n\n  .my-carousel_container[_ngcontent-%COMP%] .carousel-control-next {\n    right: -10%;\n  }\n\n  .container[_ngcontent-%COMP%] {\n    left: auto;\n    right: auto;\n    text-align: center;\n  }\n\n  .six-wrapper[_ngcontent-%COMP%] {\n    height: -webkit-min-content;\n    height: min-content;\n    \n    display: flex;\n    text-align: center;\n    \n  }\n\n\n  .wrapper[_ngcontent-%COMP%] {\n    height: -webkit-min-content;\n    height: min-content;\n    width: 14.7%;\n    margin-right: 2%;\n    margin-bottom: 2%;\n    position: relative;\n  }\n\n  .wrapper[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .wrapper[_ngcontent-%COMP%]:hover   .carousel-img[_ngcontent-%COMP%]{\n    transform: scale(1.08);\n  }\n  .wrapper[_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n  }\n\n  .overlay[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 30%;\n    \n    left: -5%;\n    right: 0;\n    height: 75%;\n    width: 110%;\n    opacity: 0;\n    transition: .5s ease;\n    background: linear-gradient(0deg, rgba(0, 0, 0, 1) 30%, rgba(255, 255, 255, 0));\n    align-items: center;\n    text-align: center;\n  }\n\n  .wrapper[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%] {\n    opacity: 1;\n  }\n\n  .text[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 14px;\n    position: absolute;\n    bottom: 1%;\n    left: 40%;\n    transform: translate(-50%, -50%);\n    text-align: left;\n  }\n\n}\n\n\n\n\n@media only screen and (max-width: 500px) {\n  ngb-carousel[_ngcontent-%COMP%] {\n    outline: none;\n    background-color: transparent;\n    width: 100%;\n    text-align: center;\n    align-items: center;\n  }\n\n  .my-carousel_container[_ngcontent-%COMP%] {\n\n  }\n  .my-carousel_container[_ngcontent-%COMP%] .carousel-inner {\n    padding: 2%;\n  }\n  .my-carousel_container[_ngcontent-%COMP%] .slide {\n    padding: 2%;\n  }\n\n  .my-carousel_container[_ngcontent-%COMP%] .carousel-control-prev {\n    left: -6%;\n  }\n\n  .my-carousel_container[_ngcontent-%COMP%] .carousel-control-next {\n    right: -6%;\n  }\n\n  .container[_ngcontent-%COMP%] {\n    left: auto;\n    right: auto;\n    text-align: center;\n  }\n\n  .six-wrapper[_ngcontent-%COMP%] {\n    height: -webkit-min-content;\n    height: min-content;\n    \n    display: flex;\n    text-align: center;\n    \n  }\n\n\n  .wrapper[_ngcontent-%COMP%] {\n    height: -webkit-min-content;\n    height: min-content;\n    width: 75%;\n    margin-right: 2%;\n    margin-bottom: 2%;\n    position: relative;\n    text-align: center;\n    left: auto;\n    right: auto;\n    margin-left: 10%;\n  }\n\n  .wrapper[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .wrapper[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 30%;\n    \n    \n    right: -5%;\n    height: 78%;\n    width: 110%;\n    \n    transition: none;\n    background: linear-gradient(0deg, rgba(0, 0, 0, 1) 30%, rgba(255, 255, 255, 0));\n    align-items: center;\n    text-align: center;\n  }\n\n  .wrapper[_ngcontent-%COMP%]:hover   .text[_ngcontent-%COMP%] {\n    bottom: 8%;\n    left: 20px;\n  }\n\n  .wrapper[_ngcontent-%COMP%]:hover   .carousel-img[_ngcontent-%COMP%]{\n    transform: scale(1.08);\n  }\n\n  .wrapper[_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n  }\n\n  .overlay[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 30%;\n    \n    \n    right: 0;\n    height: 70%;\n    width: 100%;\n    \n    \n    background: linear-gradient(0deg, rgba(0, 0, 0, 1) 30%, rgba(255, 255, 255, 0));\n    align-items: center;\n    text-align: center;\n  }\n\n  \n  \n  \n\n  .text[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 14px;\n    position: absolute;\n    width: 80%;\n    bottom: 8%;\n    left: 20px;\n    \n    \n    \n    \n    \n    \n    \n    \n    \n    text-align: left;\n  }\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1peGVkLWNhcm91c2VsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixtQkFBbUI7RUFDckI7O0VBRUE7O0VBRUE7RUFDQTtJQUNFLFdBQVc7RUFDYjtFQUNBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsVUFBVTtJQUNWLFdBQVc7SUFDWCxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSwyQkFBbUI7SUFBbkIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG9CQUFvQjtFQUN0Qjs7O0VBR0E7SUFDRSwyQkFBbUI7SUFBbkIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsYUFBYTtJQUNiLFNBQVM7SUFDVCxRQUFRO0lBQ1IsV0FBVztJQUNYLFdBQVc7SUFDWCxVQUFVO0lBQ1Ysb0JBQW9CO0lBQ3BCLCtFQUErRTtJQUMvRSxtQkFBbUI7SUFDbkIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFNBQVM7SUFHVCxnQ0FBZ0M7SUFDaEMsZ0JBQWdCO0VBQ2xCOztBQUVGOzs7OztBQUtBO0VBQ0U7SUFDRSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsbUJBQW1CO0VBQ3JCOztFQUVBOztFQUVBO0VBQ0E7SUFDRSxXQUFXO0VBQ2I7RUFDQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFNBQVM7RUFDWDs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFVBQVU7SUFDVixXQUFXO0lBQ1gsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsMkJBQW1CO0lBQW5CLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixvQkFBb0I7RUFDdEI7OztFQUdBO0lBQ0UsMkJBQW1CO0lBQW5CLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0lBQ1gsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixhQUFhO0lBQ2IsYUFBYTtJQUNiLFVBQVU7SUFDVixXQUFXO0lBQ1gsV0FBVztJQUNYLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsK0VBQStFO0lBQy9FLG1CQUFtQjtJQUNuQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsVUFBVTtFQUNaOztFQUVBO0lBQ0Usc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsYUFBYTtJQUNiLGFBQWE7SUFDYixRQUFRO0lBQ1IsV0FBVztJQUNYLFdBQVc7SUFDWCxjQUFjO0lBQ2Qsd0JBQXdCO0lBQ3hCLCtFQUErRTtJQUMvRSxtQkFBbUI7SUFDbkIsa0JBQWtCO0VBQ3BCOztFQUVBLDRCQUE0QjtFQUM1Qiw0QkFBNEI7RUFDNUIsSUFBSTs7RUFFSjtJQUNFLFlBQVk7SUFDWixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixVQUFVO0lBQ1YsVUFBVTtJQUNWLGVBQWU7SUFDZixjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2IsWUFBWTtJQUNaLDRDQUE0QztJQUM1Qyx3Q0FBd0M7SUFDeEMsb0NBQW9DO0lBQ3BDLGdCQUFnQjtFQUNsQjs7QUFFRiIsImZpbGUiOiJtaXhlZC1jYXJvdXNlbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MDBweCkge1xuICBuZ2ItY2Fyb3VzZWwge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICAubXktY2Fyb3VzZWxfY29udGFpbmVyIHtcblxuICB9XG4gIC5teS1jYXJvdXNlbF9jb250YWluZXI6Om5nLWRlZXAuY2Fyb3VzZWwtaW5uZXIge1xuICAgIHBhZGRpbmc6IDIlO1xuICB9XG4gIC5teS1jYXJvdXNlbF9jb250YWluZXI6Om5nLWRlZXAuc2xpZGUge1xuICAgIHBhZGRpbmc6IDIlO1xuICB9XG5cbiAgLm15LWNhcm91c2VsX2NvbnRhaW5lcjo6bmctZGVlcC5jYXJvdXNlbC1jb250cm9sLXByZXYge1xuICAgIGxlZnQ6IC0xMCU7XG4gIH1cblxuICAubXktY2Fyb3VzZWxfY29udGFpbmVyOjpuZy1kZWVwLmNhcm91c2VsLWNvbnRyb2wtbmV4dCB7XG4gICAgcmlnaHQ6IC0xMCU7XG4gIH1cblxuICAuY29udGFpbmVyIHtcbiAgICBsZWZ0OiBhdXRvO1xuICAgIHJpZ2h0OiBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5zaXgtd3JhcHBlciB7XG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcbiAgICAvKndpZHRoOiA4MCU7Ki9cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAvKm1hcmdpbi1sZWZ0OiAxMiU7Ki9cbiAgfVxuXG5cbiAgLndyYXBwZXIge1xuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XG4gICAgd2lkdGg6IDE0LjclO1xuICAgIG1hcmdpbi1yaWdodDogMiU7XG4gICAgbWFyZ2luLWJvdHRvbTogMiU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbiAgLndyYXBwZXIgPiBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLndyYXBwZXI6aG92ZXIgLmNhcm91c2VsLWltZ3tcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDgpO1xuICB9XG4gIC53cmFwcGVyOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICAub3ZlcmxheSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMzAlO1xuICAgIC8qYm90dG9tOiAwOyovXG4gICAgbGVmdDogLTUlO1xuICAgIHJpZ2h0OiAwO1xuICAgIGhlaWdodDogNzUlO1xuICAgIHdpZHRoOiAxMTAlO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNpdGlvbjogLjVzIGVhc2U7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMCwgMCwgMCwgMSkgMzAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApKTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC53cmFwcGVyOmhvdmVyIC5vdmVybGF5IHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgLnRleHQge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMSU7XG4gICAgbGVmdDogNDAlO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cblxufVxuXG5cblxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIG5nYi1jYXJvdXNlbCB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIC5teS1jYXJvdXNlbF9jb250YWluZXIge1xuXG4gIH1cbiAgLm15LWNhcm91c2VsX2NvbnRhaW5lcjo6bmctZGVlcC5jYXJvdXNlbC1pbm5lciB7XG4gICAgcGFkZGluZzogMiU7XG4gIH1cbiAgLm15LWNhcm91c2VsX2NvbnRhaW5lcjo6bmctZGVlcC5zbGlkZSB7XG4gICAgcGFkZGluZzogMiU7XG4gIH1cblxuICAubXktY2Fyb3VzZWxfY29udGFpbmVyOjpuZy1kZWVwLmNhcm91c2VsLWNvbnRyb2wtcHJldiB7XG4gICAgbGVmdDogLTYlO1xuICB9XG5cbiAgLm15LWNhcm91c2VsX2NvbnRhaW5lcjo6bmctZGVlcC5jYXJvdXNlbC1jb250cm9sLW5leHQge1xuICAgIHJpZ2h0OiAtNiU7XG4gIH1cblxuICAuY29udGFpbmVyIHtcbiAgICBsZWZ0OiBhdXRvO1xuICAgIHJpZ2h0OiBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5zaXgtd3JhcHBlciB7XG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcbiAgICAvKndpZHRoOiA4MCU7Ki9cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAvKm1hcmdpbi1sZWZ0OiAxMiU7Ki9cbiAgfVxuXG5cbiAgLndyYXBwZXIge1xuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XG4gICAgd2lkdGg6IDc1JTtcbiAgICBtYXJnaW4tcmlnaHQ6IDIlO1xuICAgIG1hcmdpbi1ib3R0b206IDIlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGVmdDogYXV0bztcbiAgICByaWdodDogYXV0bztcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xuICB9XG5cbiAgLndyYXBwZXIgPiBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLndyYXBwZXI6aG92ZXIgLm92ZXJsYXkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDMwJTtcbiAgICAvKmJvdHRvbTogMDsqL1xuICAgIC8qbGVmdDogLTUlOyovXG4gICAgcmlnaHQ6IC01JTtcbiAgICBoZWlnaHQ6IDc4JTtcbiAgICB3aWR0aDogMTEwJTtcbiAgICAvKm9wYWNpdHk6IDA7Ki9cbiAgICB0cmFuc2l0aW9uOiBub25lO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDAsIDAsIDAsIDEpIDMwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSk7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAud3JhcHBlcjpob3ZlciAudGV4dCB7XG4gICAgYm90dG9tOiA4JTtcbiAgICBsZWZ0OiAyMHB4O1xuICB9XG5cbiAgLndyYXBwZXI6aG92ZXIgLmNhcm91c2VsLWltZ3tcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDgpO1xuICB9XG5cbiAgLndyYXBwZXI6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIC5vdmVybGF5IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAzMCU7XG4gICAgLypib3R0b206IDA7Ki9cbiAgICAvKmxlZnQ6IC01JTsqL1xuICAgIHJpZ2h0OiAwO1xuICAgIGhlaWdodDogNzAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8qb3BhY2l0eTogMDsqL1xuICAgIC8qdHJhbnNpdGlvbjogLjVzIGVhc2U7Ki9cbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgwLCAwLCAwLCAxKSAzMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkpO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLyoud3JhcHBlcjpob3ZlciAub3ZlcmxheSB7Ki9cbiAgLyogIHRyYW5zZm9ybTogc2NhbGUoMS4wOCk7Ki9cbiAgLyp9Ki9cblxuICAudGV4dCB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBib3R0b206IDglO1xuICAgIGxlZnQ6IDIwcHg7XG4gICAgLypib3R0b206IC0zJTsqL1xuICAgIC8qd2lkdGg6IDkwJTsqL1xuICAgIC8qbWFyZ2luLWxlZnQ6IDE3JTsqL1xuICAgIC8qbWFyZ2luLWJvdHRvbTogMSU7Ki9cbiAgICAvKmxlZnQ6IDQwJTsqL1xuICAgIC8qbGVmdDogMSU7Ki9cbiAgICAvKi13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7Ki9cbiAgICAvKi1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTsqL1xuICAgIC8qdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7Ki9cbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG5cbn1cblxuXG5cbiJdfQ== */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "CrP6":
/*!***********************************************************************!*\
  !*** ./src/app/components/multi-carousel/multi-carousel.component.ts ***!
  \***********************************************************************/
/*! exports provided: MultiCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiCarouselComponent", function() { return MultiCarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





function MultiCarouselComponent_div_0_div_1_2_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiCarouselComponent_div_0_div_1_2_ng_template_0_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const one_r7 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r8.reloadPage(one_r7.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const one_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/watch/movie/", one_r7.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "https://image.tmdb.org/t/p/w500" + one_r7.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](one_r7.title);
} }
function MultiCarouselComponent_div_0_div_1_2_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MultiCarouselComponent_div_0_div_1_2_ng_template_0_div_1_Template, 5, 3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const six_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", six_r4);
} }
function MultiCarouselComponent_div_0_div_1_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MultiCarouselComponent_div_0_div_1_2_ng_template_0_Template, 3, 1, "ng-template", 5);
} }
function MultiCarouselComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ngb-carousel", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MultiCarouselComponent_div_0_div_1_2_Template, 1, 0, undefined, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showNavigationArrows", true)("showNavigationIndicators", true)("interval", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.dataArray);
} }
function MultiCarouselComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MultiCarouselComponent_div_0_div_1_Template, 3, 4, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.dataArray);
} }
function MultiCarouselComponent_div_1_div_1_2_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiCarouselComponent_div_1_div_1_2_ng_template_0_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const one_r16 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r17.reloadPage(one_r16.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const one_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/watch/movie/", one_r16.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "https://image.tmdb.org/t/p/w500" + one_r16.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](one_r16.title);
} }
function MultiCarouselComponent_div_1_div_1_2_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MultiCarouselComponent_div_1_div_1_2_ng_template_0_div_1_Template, 5, 3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const six_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", six_r13);
} }
function MultiCarouselComponent_div_1_div_1_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MultiCarouselComponent_div_1_div_1_2_ng_template_0_Template, 3, 1, "ng-template", 5);
} }
function MultiCarouselComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ngb-carousel", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MultiCarouselComponent_div_1_div_1_2_Template, 1, 0, undefined, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showNavigationArrows", true)("showNavigationIndicators", false)("interval", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r11.dataArray);
} }
function MultiCarouselComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MultiCarouselComponent_div_1_div_1_Template, 3, 4, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.dataArray);
} }
class MultiCarouselComponent {
    constructor(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.dataArray = [];
        this.myStorage = window.localStorage;
    }
    ngOnInit() {
        // if (window.screen.width === 360) { // 768px portrait
        //   this.mobile = true;
        // }
        this.isMobile = this.breakpointObserver.isMatched('(max-width: 500px)');
        this.isDesktop = this.breakpointObserver.isMatched('(min-width: 500px)');
        // console.log('continue is ' + this.continue);
        // console.log('array is  ' + this.data);
        if (this.continue !== 'true') {
            this.data = this.data.results;
            // console.log('check if continue');
        }
        if (this.isDesktop) {
            this.transformData();
        }
        else if (this.isMobile) {
            this.transformData2();
        }
    }
    transformData() {
        // console.log(this.data);
        let j = -1;
        if (this.data) {
            for (let i = 0; i < this.data.length && i < 24; i++) {
                // console.log(this.data[i].poster_path);
                if (i % 6 === 0) {
                    j++;
                    this.dataArray[j] = [];
                    this.dataArray[j].push(this.data[i]);
                }
                else {
                    this.dataArray[j].push(this.data[i]);
                }
            }
        }
        // console.log(this.dataArray);
    }
    transformData2() {
        // console.log(this.data);
        let j = -1;
        if (this.data) {
            for (let i = 0; i < this.data.length && i < 24; i++) {
                // console.log(this.data[i].poster_path);
                if (i % 1 === 0) {
                    j++;
                    this.dataArray[j] = [];
                    this.dataArray[j].push(this.data[i]);
                }
                else {
                    this.dataArray[j].push(this.data[i]);
                }
            }
        }
        // console.log(this.dataArray);
    }
    reloadPage(id) {
        window.location.href = `/watch/movie/${id}`;
    }
}
MultiCarouselComponent.ɵfac = function MultiCarouselComponent_Factory(t) { return new (t || MultiCarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"])); };
MultiCarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MultiCarouselComponent, selectors: [["app-multi-carousel"]], inputs: { data: "data", continue: "continue" }, decls: 2, vars: 2, consts: [["class", "container", 4, "ngIf"], [1, "container"], [4, "ngIf"], [1, "my-carousel_container", 3, "showNavigationArrows", "showNavigationIndicators", "interval"], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], [1, "six-wrapper"], ["class", "wrapper", 3, "routerLink", "click", 4, "ngFor", "ngForOf"], [1, "wrapper", 3, "routerLink", "click"], ["alt", "Random first slide", 1, "carousel-img", 3, "src"], [1, "overlay"], [1, "text"]], template: function MultiCarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MultiCarouselComponent_div_0_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MultiCarouselComponent_div_1_Template, 2, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isDesktop);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMobile);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbSlide"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], styles: ["@media only screen and (min-width: 500px) {\n  ngb-carousel[_ngcontent-%COMP%] {\n    outline: none;\n    background-color: transparent;\n    width: 100%;\n    text-align: center;\n    align-items: center;\n  }\n\n  .my-carousel_container[_ngcontent-%COMP%] {\n\n  }\n  .my-carousel_container[_ngcontent-%COMP%] .carousel-inner {\n    padding: 2%;\n  }\n  .my-carousel_container[_ngcontent-%COMP%] .slide {\n    padding: 2%;\n  }\n\n  .my-carousel_container[_ngcontent-%COMP%] .carousel-control-prev {\n    left: -10%;\n  }\n\n  .my-carousel_container[_ngcontent-%COMP%] .carousel-control-next {\n    right: -10%;\n  }\n\n  .container[_ngcontent-%COMP%] {\n    left: auto;\n    right: auto;\n    text-align: center;\n  }\n\n  .six-wrapper[_ngcontent-%COMP%] {\n    height: -webkit-min-content;\n    height: min-content;\n    \n    display: flex;\n    text-align: center;\n    \n  }\n\n\n  .wrapper[_ngcontent-%COMP%] {\n    height: -webkit-min-content;\n    height: min-content;\n    width: 14.7%;\n    margin-right: 2%;\n    margin-bottom: 2%;\n    position: relative;\n  }\n\n  .wrapper[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .wrapper[_ngcontent-%COMP%]:hover   .carousel-img[_ngcontent-%COMP%]{\n    transform: scale(1.08);\n  }\n  .wrapper[_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n  }\n\n  .overlay[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 30%;\n    \n    left: -5%;\n    right: 0;\n    height: 75%;\n    width: 110%;\n    opacity: 0;\n    transition: .5s ease;\n    background: linear-gradient(0deg, rgba(0, 0, 0, 1) 30%, rgba(255, 255, 255, 0));\n    align-items: center;\n    text-align: center;\n  }\n\n  .wrapper[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%] {\n    opacity: 1;\n  }\n\n  .text[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 14px;\n    position: absolute;\n    bottom: 1%;\n    left: 40%;\n    transform: translate(-50%, -50%);\n    text-align: left;\n  }\n\n}\n\n\n\n\n@media only screen and (max-width: 500px) {\n  ngb-carousel[_ngcontent-%COMP%] {\n    outline: none;\n    background-color: transparent;\n    width: 100%;\n    text-align: center;\n    align-items: center;\n  }\n\n  .my-carousel_container[_ngcontent-%COMP%] {\n\n  }\n  .my-carousel_container[_ngcontent-%COMP%] .carousel-inner {\n    padding: 2%;\n  }\n  .my-carousel_container[_ngcontent-%COMP%] .slide {\n    padding: 2%;\n  }\n\n  .my-carousel_container[_ngcontent-%COMP%] .carousel-control-prev {\n    left: -6%;\n  }\n\n  .my-carousel_container[_ngcontent-%COMP%] .carousel-control-next {\n    right: -6%;\n  }\n\n  .container[_ngcontent-%COMP%] {\n    left: auto;\n    right: auto;\n    text-align: center;\n  }\n\n  .six-wrapper[_ngcontent-%COMP%] {\n    height: -webkit-min-content;\n    height: min-content;\n    \n    display: flex;\n    text-align: center;\n    \n  }\n\n\n  .wrapper[_ngcontent-%COMP%] {\n    height: -webkit-min-content;\n    height: min-content;\n    width: 75%;\n    margin-right: 2%;\n    margin-bottom: 2%;\n    position: relative;\n    text-align: center;\n    left: auto;\n    right: auto;\n    margin-left: 10%;\n  }\n\n  .wrapper[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .wrapper[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 30%;\n    \n    \n    right: -5%;\n    height: 78%;\n    width: 110%;\n    \n    transition: none;\n    background: linear-gradient(0deg, rgba(0, 0, 0, 1) 30%, rgba(255, 255, 255, 0));\n    align-items: center;\n    text-align: center;\n  }\n\n  .wrapper[_ngcontent-%COMP%]:hover   .text[_ngcontent-%COMP%] {\n    bottom: 8%;\n    left: 20px;\n  }\n\n  .wrapper[_ngcontent-%COMP%]:hover   .carousel-img[_ngcontent-%COMP%]{\n    transform: scale(1.08);\n  }\n\n  .wrapper[_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n  }\n\n  .overlay[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 30%;\n    \n    \n    right: 0;\n    height: 70%;\n    width: 100%;\n    \n    \n    background: linear-gradient(0deg, rgba(0, 0, 0, 1) 30%, rgba(255, 255, 255, 0));\n    align-items: center;\n    text-align: center;\n  }\n\n  \n  \n  \n\n  .text[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 14px;\n    position: absolute;\n    width: 80%;\n    bottom: 8%;\n    left: 20px;\n    \n    \n    \n    \n    \n    \n    \n    \n    \n    text-align: left;\n  }\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm11bHRpLWNhcm91c2VsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixtQkFBbUI7RUFDckI7O0VBRUE7O0VBRUE7RUFDQTtJQUNFLFdBQVc7RUFDYjtFQUNBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsVUFBVTtJQUNWLFdBQVc7SUFDWCxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSwyQkFBbUI7SUFBbkIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG9CQUFvQjtFQUN0Qjs7O0VBR0E7SUFDRSwyQkFBbUI7SUFBbkIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsYUFBYTtJQUNiLFNBQVM7SUFDVCxRQUFRO0lBQ1IsV0FBVztJQUNYLFdBQVc7SUFDWCxVQUFVO0lBQ1Ysb0JBQW9CO0lBQ3BCLCtFQUErRTtJQUMvRSxtQkFBbUI7SUFDbkIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFNBQVM7SUFHVCxnQ0FBZ0M7SUFDaEMsZ0JBQWdCO0VBQ2xCOztBQUVGOzs7OztBQUtBO0VBQ0U7SUFDRSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsbUJBQW1CO0VBQ3JCOztFQUVBOztFQUVBO0VBQ0E7SUFDRSxXQUFXO0VBQ2I7RUFDQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFNBQVM7RUFDWDs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFVBQVU7SUFDVixXQUFXO0lBQ1gsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsMkJBQW1CO0lBQW5CLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixvQkFBb0I7RUFDdEI7OztFQUdBO0lBQ0UsMkJBQW1CO0lBQW5CLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0lBQ1gsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixhQUFhO0lBQ2IsYUFBYTtJQUNiLFVBQVU7SUFDVixXQUFXO0lBQ1gsV0FBVztJQUNYLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsK0VBQStFO0lBQy9FLG1CQUFtQjtJQUNuQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsVUFBVTtFQUNaOztFQUVBO0lBQ0Usc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsYUFBYTtJQUNiLGFBQWE7SUFDYixRQUFRO0lBQ1IsV0FBVztJQUNYLFdBQVc7SUFDWCxjQUFjO0lBQ2Qsd0JBQXdCO0lBQ3hCLCtFQUErRTtJQUMvRSxtQkFBbUI7SUFDbkIsa0JBQWtCO0VBQ3BCOztFQUVBLDRCQUE0QjtFQUM1Qiw0QkFBNEI7RUFDNUIsSUFBSTs7RUFFSjtJQUNFLFlBQVk7SUFDWixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixVQUFVO0lBQ1YsVUFBVTtJQUNWLGVBQWU7SUFDZixjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2IsWUFBWTtJQUNaLDRDQUE0QztJQUM1Qyx3Q0FBd0M7SUFDeEMsb0NBQW9DO0lBQ3BDLGdCQUFnQjtFQUNsQjs7QUFFRiIsImZpbGUiOiJtdWx0aS1jYXJvdXNlbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MDBweCkge1xuICBuZ2ItY2Fyb3VzZWwge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICAubXktY2Fyb3VzZWxfY29udGFpbmVyIHtcblxuICB9XG4gIC5teS1jYXJvdXNlbF9jb250YWluZXI6Om5nLWRlZXAuY2Fyb3VzZWwtaW5uZXIge1xuICAgIHBhZGRpbmc6IDIlO1xuICB9XG4gIC5teS1jYXJvdXNlbF9jb250YWluZXI6Om5nLWRlZXAuc2xpZGUge1xuICAgIHBhZGRpbmc6IDIlO1xuICB9XG5cbiAgLm15LWNhcm91c2VsX2NvbnRhaW5lcjo6bmctZGVlcC5jYXJvdXNlbC1jb250cm9sLXByZXYge1xuICAgIGxlZnQ6IC0xMCU7XG4gIH1cblxuICAubXktY2Fyb3VzZWxfY29udGFpbmVyOjpuZy1kZWVwLmNhcm91c2VsLWNvbnRyb2wtbmV4dCB7XG4gICAgcmlnaHQ6IC0xMCU7XG4gIH1cblxuICAuY29udGFpbmVyIHtcbiAgICBsZWZ0OiBhdXRvO1xuICAgIHJpZ2h0OiBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5zaXgtd3JhcHBlciB7XG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcbiAgICAvKndpZHRoOiA4MCU7Ki9cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAvKm1hcmdpbi1sZWZ0OiAxMiU7Ki9cbiAgfVxuXG5cbiAgLndyYXBwZXIge1xuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XG4gICAgd2lkdGg6IDE0LjclO1xuICAgIG1hcmdpbi1yaWdodDogMiU7XG4gICAgbWFyZ2luLWJvdHRvbTogMiU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbiAgLndyYXBwZXIgPiBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLndyYXBwZXI6aG92ZXIgLmNhcm91c2VsLWltZ3tcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDgpO1xuICB9XG4gIC53cmFwcGVyOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICAub3ZlcmxheSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMzAlO1xuICAgIC8qYm90dG9tOiAwOyovXG4gICAgbGVmdDogLTUlO1xuICAgIHJpZ2h0OiAwO1xuICAgIGhlaWdodDogNzUlO1xuICAgIHdpZHRoOiAxMTAlO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNpdGlvbjogLjVzIGVhc2U7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMCwgMCwgMCwgMSkgMzAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApKTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC53cmFwcGVyOmhvdmVyIC5vdmVybGF5IHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgLnRleHQge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMSU7XG4gICAgbGVmdDogNDAlO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cblxufVxuXG5cblxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIG5nYi1jYXJvdXNlbCB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIC5teS1jYXJvdXNlbF9jb250YWluZXIge1xuXG4gIH1cbiAgLm15LWNhcm91c2VsX2NvbnRhaW5lcjo6bmctZGVlcC5jYXJvdXNlbC1pbm5lciB7XG4gICAgcGFkZGluZzogMiU7XG4gIH1cbiAgLm15LWNhcm91c2VsX2NvbnRhaW5lcjo6bmctZGVlcC5zbGlkZSB7XG4gICAgcGFkZGluZzogMiU7XG4gIH1cblxuICAubXktY2Fyb3VzZWxfY29udGFpbmVyOjpuZy1kZWVwLmNhcm91c2VsLWNvbnRyb2wtcHJldiB7XG4gICAgbGVmdDogLTYlO1xuICB9XG5cbiAgLm15LWNhcm91c2VsX2NvbnRhaW5lcjo6bmctZGVlcC5jYXJvdXNlbC1jb250cm9sLW5leHQge1xuICAgIHJpZ2h0OiAtNiU7XG4gIH1cblxuICAuY29udGFpbmVyIHtcbiAgICBsZWZ0OiBhdXRvO1xuICAgIHJpZ2h0OiBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5zaXgtd3JhcHBlciB7XG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcbiAgICAvKndpZHRoOiA4MCU7Ki9cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAvKm1hcmdpbi1sZWZ0OiAxMiU7Ki9cbiAgfVxuXG5cbiAgLndyYXBwZXIge1xuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XG4gICAgd2lkdGg6IDc1JTtcbiAgICBtYXJnaW4tcmlnaHQ6IDIlO1xuICAgIG1hcmdpbi1ib3R0b206IDIlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGVmdDogYXV0bztcbiAgICByaWdodDogYXV0bztcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xuICB9XG5cbiAgLndyYXBwZXIgPiBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLndyYXBwZXI6aG92ZXIgLm92ZXJsYXkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDMwJTtcbiAgICAvKmJvdHRvbTogMDsqL1xuICAgIC8qbGVmdDogLTUlOyovXG4gICAgcmlnaHQ6IC01JTtcbiAgICBoZWlnaHQ6IDc4JTtcbiAgICB3aWR0aDogMTEwJTtcbiAgICAvKm9wYWNpdHk6IDA7Ki9cbiAgICB0cmFuc2l0aW9uOiBub25lO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDAsIDAsIDAsIDEpIDMwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSk7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAud3JhcHBlcjpob3ZlciAudGV4dCB7XG4gICAgYm90dG9tOiA4JTtcbiAgICBsZWZ0OiAyMHB4O1xuICB9XG5cbiAgLndyYXBwZXI6aG92ZXIgLmNhcm91c2VsLWltZ3tcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDgpO1xuICB9XG5cbiAgLndyYXBwZXI6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIC5vdmVybGF5IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAzMCU7XG4gICAgLypib3R0b206IDA7Ki9cbiAgICAvKmxlZnQ6IC01JTsqL1xuICAgIHJpZ2h0OiAwO1xuICAgIGhlaWdodDogNzAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8qb3BhY2l0eTogMDsqL1xuICAgIC8qdHJhbnNpdGlvbjogLjVzIGVhc2U7Ki9cbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgwLCAwLCAwLCAxKSAzMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkpO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLyoud3JhcHBlcjpob3ZlciAub3ZlcmxheSB7Ki9cbiAgLyogIHRyYW5zZm9ybTogc2NhbGUoMS4wOCk7Ki9cbiAgLyp9Ki9cblxuICAudGV4dCB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBib3R0b206IDglO1xuICAgIGxlZnQ6IDIwcHg7XG4gICAgLypib3R0b206IC0zJTsqL1xuICAgIC8qd2lkdGg6IDkwJTsqL1xuICAgIC8qbWFyZ2luLWxlZnQ6IDE3JTsqL1xuICAgIC8qbWFyZ2luLWJvdHRvbTogMSU7Ki9cbiAgICAvKmxlZnQ6IDQwJTsqL1xuICAgIC8qbGVmdDogMSU7Ki9cbiAgICAvKi13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7Ki9cbiAgICAvKi1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTsqL1xuICAgIC8qdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7Ki9cbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG5cbn1cblxuXG5cblxuIl19 */"] });


/***/ }),

/***/ "G4NA":
/*!*****************************************************!*\
  !*** ./src/app/components/video/video.component.ts ***!
  \*****************************************************/
/*! exports provided: VideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoComponent", function() { return VideoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/youtube-player */ "TIDI");




function VideoComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "youtube-player", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("videoId", ctx_r0.key)("width", ctx_r0.playerWidth)("height", ctx_r0.playerHeight);
} }
class VideoComponent {
    constructor(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
    }
    ngOnInit() {
        const isMobile = this.breakpointObserver.isMatched('(max-width: 500px)');
        if (isMobile) {
            console.log(window.innerWidth);
            this.playerWidth = `${window.innerWidth * 0.9}`;
            this.playerHeight = this.playerWidth * 0.55;
        }
        else {
            this.playerWidth = `${window.innerWidth * 0.5}`;
            this.playerHeight = this.playerWidth * 0.55;
        }
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        document.body.appendChild(tag);
    }
}
VideoComponent.ɵfac = function VideoComponent_Factory(t) { return new (t || VideoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"])); };
VideoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VideoComponent, selectors: [["app-video"]], inputs: { key: "key" }, decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "player", 3, "videoId", "width", "height"]], template: function VideoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, VideoComponent_div_0_Template, 2, 3, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.key);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_youtube_player__WEBPACK_IMPORTED_MODULE_3__["YouTubePlayer"]], encapsulation: 2 });


/***/ }),

/***/ "HcRg":
/*!*******************************************************************!*\
  !*** ./src/app/components/cast-details/cast-details.component.ts ***!
  \*******************************************************************/
/*! exports provided: CastDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CastDetailsComponent", function() { return CastDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_posts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/posts.service */ "jwUf");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");





function CastDetailsComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CastDetailsComponent_div_0_div_2_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.closeDetails(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r2.details.name, " ");
} }
function CastDetailsComponent_div_0_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Birth: ", ctx_r3.details.birthday, "");
} }
function CastDetailsComponent_div_0_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Birth Place: ", ctx_r4.details.place_of_birth, "");
} }
function CastDetailsComponent_div_0_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Gender: ", ctx_r5.gender, "");
} }
function CastDetailsComponent_div_0_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Known for: ", ctx_r6.details.known_for_department, "");
} }
function CastDetailsComponent_div_0_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Also known as: ", ctx_r7.details.also_known_as, "");
} }
function CastDetailsComponent_div_0_div_12_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://www.imdb.com/name/", ctx_r11.external.imdb_id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CastDetailsComponent_div_0_div_12_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://www.instagram.com/", ctx_r12.external.instagram_id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CastDetailsComponent_div_0_div_12_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://www.facebook.com/", ctx_r13.external.facebook_id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CastDetailsComponent_div_0_div_12_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://www.twitter.com/", ctx_r14.external.twitter_id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("target", "_blank");
} }
function CastDetailsComponent_div_0_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CastDetailsComponent_div_0_div_12_div_1_Template, 3, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CastDetailsComponent_div_0_div_12_div_2_Template, 3, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CastDetailsComponent_div_0_div_12_div_3_Template, 3, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CastDetailsComponent_div_0_div_12_div_4_Template, 3, 2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.external.imdb_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.external.instagram_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.external.facebook_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.external.twitter_id);
} }
function CastDetailsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CastDetailsComponent_div_0_div_2_Template, 5, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CastDetailsComponent_div_0_div_7_Template, 2, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CastDetailsComponent_div_0_div_8_Template, 2, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CastDetailsComponent_div_0_div_9_Template, 2, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CastDetailsComponent_div_0_div_10_Template, 2, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CastDetailsComponent_div_0_div_11_Template, 2, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CastDetailsComponent_div_0_div_12_Template, 5, 4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Biography");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.details.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "https://image.tmdb.org/t/p/w500/" + ctx_r0.details.profile_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.details.birthday);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.details.place_of_birth);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.gender);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.details.known_for_department);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.details.also_known_as);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.external);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.details.biography);
} }
function CastDetailsComponent_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CastDetailsComponent_div_1_div_2_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r23.closeDetails(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r15.details.name, " ");
} }
function CastDetailsComponent_div_1_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Birth: ", ctx_r16.details.birthday, "");
} }
function CastDetailsComponent_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Birth Place: ", ctx_r17.details.place_of_birth, "");
} }
function CastDetailsComponent_div_1_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Gender: ", ctx_r18.gender, "");
} }
function CastDetailsComponent_div_1_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Gender: ", ctx_r19.details.website, "");
} }
function CastDetailsComponent_div_1_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Known for: ", ctx_r20.details.known_for_department, "");
} }
function CastDetailsComponent_div_1_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Also known as: ", ctx_r21.details.also_known_as, "");
} }
function CastDetailsComponent_div_1_div_13_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://www.imdb.com/name/", ctx_r25.external.imdb_id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CastDetailsComponent_div_1_div_13_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://www.instagram.com/", ctx_r26.external.instagram_id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CastDetailsComponent_div_1_div_13_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://www.facebook.com/", ctx_r27.external.facebook_id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CastDetailsComponent_div_1_div_13_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://www.twitter.com/", ctx_r28.external.twitter_id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CastDetailsComponent_div_1_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CastDetailsComponent_div_1_div_13_div_1_Template, 3, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CastDetailsComponent_div_1_div_13_div_2_Template, 3, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CastDetailsComponent_div_1_div_13_div_3_Template, 3, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CastDetailsComponent_div_1_div_13_div_4_Template, 3, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r22.external.imdb_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r22.external.instagram_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r22.external.facebook_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r22.external.twitter_id);
} }
function CastDetailsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CastDetailsComponent_div_1_div_2_Template, 5, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CastDetailsComponent_div_1_div_7_Template, 2, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CastDetailsComponent_div_1_div_8_Template, 2, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CastDetailsComponent_div_1_div_9_Template, 2, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CastDetailsComponent_div_1_div_10_Template, 2, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CastDetailsComponent_div_1_div_11_Template, 2, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CastDetailsComponent_div_1_div_12_Template, 2, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CastDetailsComponent_div_1_div_13_Template, 5, 4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Biography");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.details.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "https://image.tmdb.org/t/p/w500/" + ctx_r1.details.profile_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.details.birthday);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.details.place_of_birth);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.gender);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.details.website);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.details.known_for_department);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.details.also_known_as);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.external);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.details.biography);
} }
class CastDetailsComponent {
    constructor(elementRef, postsService, breakpointObserver) {
        this.elementRef = elementRef;
        this.postsService = postsService;
        this.breakpointObserver = breakpointObserver;
    }
    ngOnInit() {
        this.isMobile = this.breakpointObserver.isMatched('(max-width: 500px)');
        this.isDesktop = this.breakpointObserver.isMatched('(min-width: 500px)');
        if (this.details.gender === 1) {
            this.gender = 'Female';
        }
        else if (this.details.gender === 2) {
            this.gender = 'Male';
        }
        // window.onload = () => {
        //   console.log(document.getElementById('card-details-container'));
        //   if (document.getElementById('card-details-container')) {
        //     // @ts-ignore
        //     document.getElementById('card-details-container').style.background = 'rgba(0,0,0,0.5)';
        //   }
        // };
    }
    ngOnChanges() {
        // @ts-ignore
        document.getElementById('cast-details-card').style.overflow = 'scroll !important';
        // @ts-ignore
        document.getElementById('card2').style.height = '98vh';
    }
    closeDetails() {
        if (this.isDesktop) {
            // @ts-ignore
            // document.getElementById('card-details-container').style.background = 'transparent';
            document.getElementById('mask').style.display = 'none';
            // @ts-ignore
            document.getElementById('mask').style.background = 'transparent';
            // @ts-ignore
            document.getElementById('card').style.display = 'none';
            // @ts-ignore
            // document.getElementById('layout').style.overflow = 'scroll';
            this.elementRef.nativeElement.ownerDocument.body.style.overflowY = 'scroll';
            // this.elementRef.nativeElement.ownerDocument.body.style = 'body::-webkit-scrollbar: { overflow: scroll; }';
            // document.getElementById('card-mask').style.
        }
        else if (this.isMobile) {
            // @ts-ignore
            // document.getElementById('cast-details-card').style.overflow = 'scroll !important';
            // // @ts-ignore
            // document.getElementById('card2').style.height = '98vh';
            // @ts-ignore
            // document.getElementById('card-details-container').style.background = 'transparent';
            document.getElementById('mask').style.display = 'none';
            // @ts-ignore
            document.getElementById('mask').style.background = 'transparent';
            // @ts-ignore
            document.getElementById('card2').style.display = 'none';
            // @ts-ignore
            // document.getElementById('layout').style.overflow = 'scroll';
            this.elementRef.nativeElement.ownerDocument.body.style.overflow = 'scroll';
            // this.elementRef.nativeElement.ownerDocument.body.style = 'body::-webkit-scrollbar: { overflow: scroll; }';
            // document.getElementById('card-mask').style.
        }
    }
}
CastDetailsComponent.ɵfac = function CastDetailsComponent_Factory(t) { return new (t || CastDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_posts_service__WEBPACK_IMPORTED_MODULE_1__["PostsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"])); };
CastDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CastDetailsComponent, selectors: [["app-cast-details"]], inputs: { details: "details", external: "external" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 2, consts: [["id", "card-details-container2", "style", "", 4, "ngIf"], ["id", "card-details-container", "style", "", 4, "ngIf"], ["id", "card-details-container2"], ["id", "card2", 1, "card", 2, "width", "96%", "height", "98vh", "z-index", "22", "position", "fixed", "align-content", "center", "left", "2%", "top", "1vh"], ["class", "card-header", "style", "font-size: 24px;", 4, "ngIf"], ["id", "cast-details-card", 1, "container-fluid", "cast-scroll", 2, "overflow-y", "scroll !important", "text-align", "center", "height", "90vh"], ["alt", "", 2, "margin-top", "2%", "width", "98%", 3, "src"], [1, "row", 2, "display", "block", "width", "98%", "text-align", "center", "align-content", "center", "margin-left", "2%", "left", "auto", "right", "auto"], [2, "text-align", "left", "width", "100%"], ["class", "", 4, "ngIf"], [4, "ngIf"], [1, "row", 2, "width", "98%", "text-align", "left", "height", "min-content", "margin-top", "2%", "margin-left", "2%", "margin-right", "2%", "padding-bottom", "2%", "display", "block"], [2, "font-size", "28px"], [2, "overflow", "scroll", "height", "70%"], [1, "card-header", 2, "font-size", "24px"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, ""], ["style", "display: inline; margin-right: 10px;", 4, "ngIf"], ["style", "display: inline;margin-right: 10px;", 4, "ngIf"], ["style", "display: inline;", 4, "ngIf"], [2, "display", "inline", "margin-right", "10px"], ["target", "_blank", "ngbPopover", "Visit IMDB", "triggers", "mouseenter:mouseleave", "target", "_blank", 2, "font-size", "30px", "color", "darkgoldenrod", 3, "href"], [1, "fab", "fa-imdb"], ["target", "_blank", "ngbPopover", "Visit Instagram", "triggers", "mouseenter:mouseleave", "target", "_blank", 2, "font-size", "30px", "color", "purple", 3, "href"], [1, "fab", "fa-instagram"], ["target", "_blank", "ngbPopover", "Visit Facebook", "triggers", "mouseenter:mouseleave", "target", "_blank", 2, "font-size", "30px", "color", "#0926cd", 3, "href"], [1, "fab", "fa-facebook-square"], [2, "display", "inline"], ["target", "_blank", "ngbPopover", "Visit Twitter", "triggers", "mouseenter:mouseleave", "target", "_blank", "data-size", "large", 1, "twitter-share-button", 2, "font-size", "30px", "color", "#1ea2f1", "margin-right", "10px", 3, "href", "target"], [1, "fab", "fa-twitter"], ["id", "card-details-container"], ["id", "card", 1, "card", 2, "width", "60%", "z-index", "22", "position", "fixed", "align-content", "center", "left", "20%", "top", "20%", "height", "60vh"], [1, "container-fluid", "cast-scroll", 2, "display", "block", "overflow-y", "scroll !important", "text-align", "center", "height", "52vh"], [1, "row", 2, "overflow-y", "scroll !important"], ["alt", "", 2, "margin-top", "2%", "width", "20%", "margin-left", "2%", "margin-right", "2%", 3, "src"], [1, "", 2, "text-align", "left", "display", "inline-block", "width", "70%", "margin-left", "2%", "margin-top", "2%"], [1, "row", 2, "width", "98%", "height", "40%", "margin-top", "2%", "margin-left", "0.5%", "margin-right", "2%", "padding-bottom", "2%", "display", "block", "text-align", "left"], [2, "font-size", "28px", "display", "block"], [2, "height", "70%", "display", "block", "margin-bottom", "2%"], ["ngbPopover", "Visit Twitter", "triggers", "mouseenter:mouseleave", "target", "_blank", "data-size", "large", 1, "twitter-share-button", 2, "font-size", "30px", "color", "#1ea2f1", "margin-right", "10px", 3, "href"]], template: function CastDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CastDetailsComponent_div_0_Template, 18, 9, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CastDetailsComponent_div_1_Template, 19, 10, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.details && ctx.isMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.details && ctx.isDesktop);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbPopover"]], styles: [".card-details-container[_ngcontent-%COMP%] {\n  background: rgba(0,0,0,0.5);\n  width: 100%;\n  height: 100%;\n}\n\n.cast-scroll[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0.7em;\n  height: 3em;\n}\n\n.cast-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(255,255,255,0.7);\n  background-color: rgba(255,255,255,0);\n}\n\n.cast-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background-color: darkgrey;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhc3QtZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkJBQTJCO0VBQzNCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsdURBQXVEO0VBQ3ZELHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQiwwQkFBMEI7RUFDMUIsZ0NBQWdDO0FBQ2xDIiwiZmlsZSI6ImNhc3QtZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtZGV0YWlscy1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNSk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jYXN0LXNjcm9sbDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMC43ZW07XG4gIGhlaWdodDogM2VtO1xufVxuXG4uY2FzdC1zY3JvbGw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMjU1LDI1NSwyNTUsMC43KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwKTtcbn1cblxuLmNhc3Qtc2Nyb2xsOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmV5O1xuICAvKm91dGxpbmU6IDFweCBzb2xpZCBzbGF0ZWdyZXk7Ki9cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
    loadFooterHeight(minContent) {
        // this.footHeight = Math.max(window.innerHeight, min-content);
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 3, vars: 0, consts: [[1, "footer-container", 2, "position", "absolute"], [1, "footer"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Powered by TMDB. Developed by Cancan Hua. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@media only screen and (min-width: 500px) {\n  .footer[_ngcontent-%COMP%] {\n    left: 0;\n    bottom: 0;\n    width: 100%;\n    color: lightgrey;\n    text-align: center;\n    margin-top: 100px;\n    margin-bottom: 20px;\n  }\n\n  .footer-container[_ngcontent-%COMP%] {\n    left: auto;\n    right: auto;\n    text-align: center;\n    align-content: center;\n    width: 100%;\n  }\n\n}\n\n@media only screen and (max-width: 500px) {\n  .footer[_ngcontent-%COMP%] {\n    left: auto;\n    right: auto;\n    bottom: 0;\n    width: 90%;\n    color: lightgrey;\n    text-align: center;\n    align-content: center;\n    margin-left: 15px;\n    margin-top: 20px;\n    margin-bottom: 20px;\n    font-size: 14px;\n    padding-top: 15%;\n  }\n\n  .footer-container[_ngcontent-%COMP%] {\n    left: auto;\n    right: auto;\n    text-align: center;\n    align-content: center;\n    width: 100%;\n  }\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFDRSxPQUFPO0lBQ1AsU0FBUztJQUNULFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsV0FBVztFQUNiOztBQUVGOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsV0FBVztJQUNYLFNBQVM7SUFDVCxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFVBQVU7SUFDVixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixXQUFXO0VBQ2I7O0FBRUYiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDUwMHB4KSB7XG4gIC5mb290ZXIge1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGNvbG9yOiBsaWdodGdyZXk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cblxuICAuZm9vdGVyLWNvbnRhaW5lciB7XG4gICAgbGVmdDogYXV0bztcbiAgICByaWdodDogYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAuZm9vdGVyIHtcbiAgICBsZWZ0OiBhdXRvO1xuICAgIHJpZ2h0OiBhdXRvO1xuICAgIGJvdHRvbTogMDtcbiAgICB3aWR0aDogOTAlO1xuICAgIGNvbG9yOiBsaWdodGdyZXk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBhZGRpbmctdG9wOiAxNSU7XG4gIH1cblxuICAuZm9vdGVyLWNvbnRhaW5lciB7XG4gICAgbGVmdDogYXV0bztcbiAgICByaWdodDogYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/nav-bar/nav-bar.component */ "g/Dx");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");




class AppComponent {
    constructor() {
        this.title = 'ng-usc-films';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 0, consts: [["id", "layout", 1, "layout"], ["id", "mask", 2, "z-index", "21"], [2, "margin-top", "130px"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-nav-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__["NavBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["#mask[_ngcontent-%COMP%] {\n  width: 200vw;\n  height: 300vh;\n  position: absolute;\n  display: none;\n}\n\n@media only screen and (max-width: 500px) {\n  .layout[_ngcontent-%COMP%] {\n    overflow-x: hidden;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsYUFBYTtBQUNmOztBQUVBO0VBQ0U7SUFDRSxrQkFBa0I7RUFDcEI7QUFDRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtYXNrIHtcbiAgd2lkdGg6IDIwMHZ3O1xuICBoZWlnaHQ6IDMwMHZoO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgLmxheW91dCB7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/youtube-player */ "TIDI");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/scrolling */ "vxfF");
/* harmony import */ var ngx_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-scrollbar */ "G1Gu");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/nav-bar/nav-bar.component */ "g/Dx");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");
/* harmony import */ var _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/home-page/home-page.component */ "atC9");
/* harmony import */ var _components_watchlist_watchlist_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/watchlist/watchlist.component */ "zcMl");
/* harmony import */ var _components_movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/movie-details/movie-details.component */ "4cG8");
/* harmony import */ var _components_tv_show_details_tv_show_details_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/tv-show-details/tv-show-details.component */ "3eqm");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _components_trending_carousel_trending_carousel_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/trending-carousel/trending-carousel.component */ "ktzS");
/* harmony import */ var _components_multi_carousel_multi_carousel_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/multi-carousel/multi-carousel.component */ "CrP6");
/* harmony import */ var _components_type_ahead_type_ahead_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/type-ahead/type-ahead.component */ "29r4");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _components_video_video_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/video/video.component */ "G4NA");
/* harmony import */ var _components_tv_carousel_tv_carousel_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/tv-carousel/tv-carousel.component */ "u3ne");
/* harmony import */ var _components_cast_details_cast_details_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/cast-details/cast-details.component */ "HcRg");
/* harmony import */ var _components_mixed_carousel_mixed_carousel_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/mixed-carousel/mixed-carousel.component */ "6Wl3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/core */ "fXoL");




// import { faFontAwesome } from '@fortawesome/free-brands-svg-icons';
// import { faFontAwesomeFlag } from '@fortawesome/free-brands-svg-icons';
// import { AngularFontAwesomeModule } from 'angular-font-awesome';





















// @ts-ignore
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["LayoutModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"],
            _angular_youtube_player__WEBPACK_IMPORTED_MODULE_3__["YouTubePlayerModule"],
            ngx_scrollbar__WEBPACK_IMPORTED_MODULE_5__["NgScrollbarModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__["ScrollingModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
        _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_9__["NavBarComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
        _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_11__["HomePageComponent"],
        _components_watchlist_watchlist_component__WEBPACK_IMPORTED_MODULE_12__["WatchlistComponent"],
        _components_movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_13__["MovieDetailsComponent"],
        _components_tv_show_details_tv_show_details_component__WEBPACK_IMPORTED_MODULE_14__["TvShowDetailsComponent"],
        _components_trending_carousel_trending_carousel_component__WEBPACK_IMPORTED_MODULE_16__["TrendingCarouselComponent"],
        _components_multi_carousel_multi_carousel_component__WEBPACK_IMPORTED_MODULE_17__["MultiCarouselComponent"],
        _components_type_ahead_type_ahead_component__WEBPACK_IMPORTED_MODULE_18__["TypeAheadComponent"],
        _components_video_video_component__WEBPACK_IMPORTED_MODULE_20__["VideoComponent"],
        _components_tv_carousel_tv_carousel_component__WEBPACK_IMPORTED_MODULE_21__["TvCarouselComponent"],
        _components_cast_details_cast_details_component__WEBPACK_IMPORTED_MODULE_22__["CastDetailsComponent"],
        _components_mixed_carousel_mixed_carousel_component__WEBPACK_IMPORTED_MODULE_23__["MixedCarouselComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbModule"],
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["LayoutModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"],
        _angular_youtube_player__WEBPACK_IMPORTED_MODULE_3__["YouTubePlayerModule"],
        ngx_scrollbar__WEBPACK_IMPORTED_MODULE_5__["NgScrollbarModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__["ScrollingModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]] }); })();


/***/ }),

/***/ "atC9":
/*!*************************************************************!*\
  !*** ./src/app/components/home-page/home-page.component.ts ***!
  \*************************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_posts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/posts.service */ "jwUf");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _trending_carousel_trending_carousel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../trending-carousel/trending-carousel.component */ "ktzS");
/* harmony import */ var _mixed_carousel_mixed_carousel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mixed-carousel/mixed-carousel.component */ "6Wl3");
/* harmony import */ var _multi_carousel_multi_carousel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../multi-carousel/multi-carousel.component */ "CrP6");
/* harmony import */ var _tv_carousel_tv_carousel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../tv-carousel/tv-carousel.component */ "u3ne");







function HomePageComponent_app_trending_carousel_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-trending-carousel", 5);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("posts", ctx_r0.posts);
} }
function HomePageComponent_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Continue Watching");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-mixed-carousel", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r8.array)("continue", "true");
} }
function HomePageComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomePageComponent_div_2_div_1_Template, 4, 2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.array.length > 0);
} }
function HomePageComponent_app_multi_carousel_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-multi-carousel", 7);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r2.popularMovies);
} }
function HomePageComponent_app_multi_carousel_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-multi-carousel", 7);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r3.topRatedMovies);
} }
function HomePageComponent_app_multi_carousel_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-multi-carousel", 7);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r4.trendingMovies);
} }
function HomePageComponent_app_tv_carousel_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-tv-carousel", 7);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r5.popularTvShows);
} }
function HomePageComponent_app_tv_carousel_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-tv-carousel", 7);
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r6.topRatedTvShows);
} }
function HomePageComponent_app_tv_carousel_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-tv-carousel", 7);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r7.trendingTvShows);
} }
class HomePageComponent {
    constructor(postsService) {
        this.postsService = postsService;
        this.items = Array.from({ length: 1000 }, (v, k) => k + 1);
        this.message = 'Passing the data!';
        this.storage = window.localStorage;
        this.array = [];
    }
    ngOnInit() {
        // @ts-ignore
        document.getElementById('navbarCollapse').className = 'collapse navbar-collapse';
        this.parseContinueWatching();
        this.fetchData();
    }
    fetchData() {
        this.postsService.getAllPosts().subscribe(res => {
            this.posts = res;
        });
        this.postsService.getPopularMovies().subscribe(res => {
            this.popularMovies = res;
        });
        this.postsService.getTopRatedMovies().subscribe(res => {
            this.topRatedMovies = res;
        });
        this.postsService.getTrendingMovies().subscribe(res => {
            this.trendingMovies = res;
        });
        this.postsService.getPopularTvShows().subscribe(res => {
            this.popularTvShows = res;
        });
        this.postsService.getTopRatedTvShows().subscribe(res => {
            this.topRatedTvShows = res;
        });
        this.postsService.getTrendingTvShows().subscribe(res => {
            this.trendingTvShows = res;
        });
    }
    parseContinueWatching() {
        if (this.storage) {
            if (this.storage.continue_watching) {
                this.json = JSON.parse(this.storage.continue_watching);
                for (const one of this.json) {
                    this.array.push(JSON.parse(one));
                }
                console.log('[parseContinueWatching] ' + this.array[0].title);
                console.log('[parseContinueWatching] ' + this.array[0].poster_path);
                console.log(this.array);
            }
        }
    }
}
HomePageComponent.ɵfac = function HomePageComponent_Factory(t) { return new (t || HomePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_posts_service__WEBPACK_IMPORTED_MODULE_1__["PostsService"])); };
HomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomePageComponent, selectors: [["app-home-page"]], outputs: { posts: "posts" }, decls: 21, vars: 8, consts: [[1, "container-fluid"], [3, "posts", 4, "ngIf"], [4, "ngIf"], [1, "subtitle"], [3, "data", 4, "ngIf"], [3, "posts"], [3, "data", "continue"], [3, "data"]], template: function HomePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomePageComponent_app_trending_carousel_1_Template, 1, 1, "app-trending-carousel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomePageComponent_div_2_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Popular Movies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HomePageComponent_app_multi_carousel_5_Template, 1, 1, "app-multi-carousel", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Top Rated Movies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HomePageComponent_app_multi_carousel_8_Template, 1, 1, "app-multi-carousel", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Trending Movies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HomePageComponent_app_multi_carousel_11_Template, 1, 1, "app-multi-carousel", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Popular TV Shows");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HomePageComponent_app_tv_carousel_14_Template, 1, 1, "app-tv-carousel", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Top Rated TV Shows");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, HomePageComponent_app_tv_carousel_17_Template, 1, 1, "app-tv-carousel", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Trending TV Shows");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, HomePageComponent_app_tv_carousel_20_Template, 1, 1, "app-tv-carousel", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.posts);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.array);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.popularMovies);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.topRatedMovies);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.trendingMovies);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.popularTvShows);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.topRatedTvShows);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.trendingTvShows);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _trending_carousel_trending_carousel_component__WEBPACK_IMPORTED_MODULE_3__["TrendingCarouselComponent"], _mixed_carousel_mixed_carousel_component__WEBPACK_IMPORTED_MODULE_4__["MixedCarouselComponent"], _multi_carousel_multi_carousel_component__WEBPACK_IMPORTED_MODULE_5__["MultiCarouselComponent"], _tv_carousel_tv_carousel_component__WEBPACK_IMPORTED_MODULE_6__["TvCarouselComponent"]], styles: ["@media only screen and (min-width: 500px) {\n  .subtitle[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 36px;\n    margin-top: 10vh;\n    text-align: left;\n    margin-left: 10%;\n  }\n\n  .home-layout[_ngcontent-%COMP%]{\n    min-height: -webkit-fit-content;\n    min-height: -moz-fit-content;\n    min-height: fit-content;\n    display: flex;\n    flex-direction: column;\n  }\n\n  app-trending-carousel[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n\n}\n@media only screen and (max-width: 500px) {\n  .subtitle[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 30px;\n    margin-top: 30px;\n    text-align: left;\n    margin-left: 10%;\n    width: 250px;\n  }\n\n  .home-layout[_ngcontent-%COMP%]{\n    min-height: -webkit-fit-content;\n    min-height: -moz-fit-content;\n    min-height: fit-content;\n    display: flex;\n    flex-direction: column;\n  }\n\n  app-trending-carousel[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFDRSxZQUFZO0lBQ1osZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsK0JBQXVCO0lBQXZCLDRCQUF1QjtJQUF2Qix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7QUFFRjtBQUNBO0VBQ0U7SUFDRSxZQUFZO0lBQ1osZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLCtCQUF1QjtJQUF2Qiw0QkFBdUI7SUFBdkIsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0FBRUYiLCJmaWxlIjoiaG9tZS1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDUwMHB4KSB7XG4gIC5zdWJ0aXRsZSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICBtYXJnaW4tdG9wOiAxMHZoO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgfVxuXG4gIC5ob21lLWxheW91dHtcbiAgICBtaW4taGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cblxuICBhcHAtdHJlbmRpbmctY2Fyb3VzZWwge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIC5zdWJ0aXRsZSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgICB3aWR0aDogMjUwcHg7XG4gIH1cblxuICAuaG9tZS1sYXlvdXR7XG4gICAgbWluLWhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5cbiAgYXBwLXRyZW5kaW5nLWNhcm91c2VsIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxufVxuIl19 */"] });


/***/ }),

/***/ "g/Dx":
/*!*********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.ts ***!
  \*********************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _type_ahead_type_ahead_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../type-ahead/type-ahead.component */ "29r4");





class NavBarComponent {
    constructor(router, breakpointObserver) {
        this.router = router;
        this.breakpointObserver = breakpointObserver;
    }
    ngOnInit() {
        this.isMobile = this.breakpointObserver.isMatched('(max-width: 500px)');
        this.isDesktop = this.breakpointObserver.isMatched('(min-width: 500px)');
        // console.log(window.location.pathname);
        // @ts-ignore
        if (window.location.pathname === '/mylist') {
            // @ts-ignore
            document.getElementById('my-list').className = 'nav-link active';
            // @ts-ignore
            document.getElementById('home').className = 'nav-link';
        }
        else {
            // @ts-ignore
            document.getElementById('home').className = 'nav-link active';
            // @ts-ignore
            document.getElementById('my-list').className = 'nav-link';
        }
    }
    toggleToHome() {
        // @ts-ignore
        document.getElementById('home').className = 'nav-link active';
        // @ts-ignore
        document.getElementById('my-list').className = 'nav-link';
        // @ts-ignore
        document.getElementById('navbarCollapse').className = 'collapse navbar-collapse';
    }
    toggleToMyList() {
        // @ts-ignore
        document.getElementById('my-list').className = 'nav-link active';
        // @ts-ignore
        document.getElementById('home').className = 'nav-link';
        // @ts-ignore
        document.getElementById('navbarCollapse').className = 'collapse navbar-collapse';
    }
}
NavBarComponent.ɵfac = function NavBarComponent_Factory(t) { return new (t || NavBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"])); };
NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavBarComponent, selectors: [["app-nav-bar"]], decls: 14, vars: 0, consts: [[1, "navbar", "navbar-expand-md", "mb-3", "navbar-dark", "bg-dark", 2, "position", "fixed", "top", "0", "background", "black", "height", "70px", "width", "100%", "z-index", "20"], [1, "container-fluid"], ["href", "#", "routerLink", "/", 1, "navbar-brand", "mr-3", "usc-film"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarCollapse", 1, "navbar-toggler"], [1, "navbar-toggler-icon", 2, "color", "darkgrey"], ["id", "navbarCollapse", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", 2, "background", "black", "width", "100%"], ["href", "#", "id", "home", "routerLink", "/", 1, "nav-item", "nav-link", "active", 3, "click"], ["href", "#", "id", "my-list", "routerLink", "/mylist", 1, "nav-item", "nav-link", 3, "click"], [1, "navbar-nav", "ml-auto", 2, "background", "black", "padding-bottom", "10px", "width", "100%"], [1, "nav-item", "nav-link"]], template: function NavBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "USC Films");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_Template_a_click_8_listener() { return ctx.toggleToHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_Template_a_click_10_listener() { return ctx.toggleToMyList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "My List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-type-ahead", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _type_ahead_type_ahead_component__WEBPACK_IMPORTED_MODULE_4__["TypeAheadComponent"]], styles: ["@media only screen and (max-width: 500px) {\n  .nav-bar[_ngcontent-%COMP%] {\n    display: flex;\n    padding-top: 20px;\n    height: 70px;\n    background-color: black;\n    color: white;\n    width: 100%;\n  }\n\n  .usc-film[_ngcontent-%COMP%] {\n    margin-left: 10%;\n  }\n\n  #home[_ngcontent-%COMP%] {\n    margin-left: 72%;\n  }\n\n  #my-list[_ngcontent-%COMP%] {\n    margin-left: 70%;\n  }\n\n  .navbar-dark[_ngcontent-%COMP%] {\n    background-color: black !important;\n  }\n\n  .navbar-brand[_ngcontent-%COMP%] {\n    color: white;\n  }\n\n  .nav-link[_ngcontent-%COMP%] {\n    color: grey;\n  }\n\n  .nav-link.active[_ngcontent-%COMP%] {\n    color: white;\n  }\n\n  .usc-film-title[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 24px;\n    font-family: Arial;\n    \n    \n    \n    margin-left: 20px;\n    background-color: transparent;\n    border: transparent;\n  }\n\n\n  .home-title[_ngcontent-%COMP%], .my-list-title[_ngcontent-%COMP%] {\n    color: grey;\n    font-size: 24px;\n    font-family: Arial;\n    background-color: transparent;\n    border: transparent;\n    margin-left: 20px;\n    outline: 0;\n  }\n\n  .ml-auto[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n\n  .navbar-nav[_ngcontent-%COMP%] {\n    width: 100%;\n    background: black;\n  }\n}\n\n\n@media only screen and (min-width: 500px) {\n  .nav-container[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 0;\n    background: black;\n    height: 70px;\n    width: 95%;\n    z-index: 20;\n  }\n\n\n  .nav-bar[_ngcontent-%COMP%] {\n    display: flex;\n    padding-top: 20px;\n    height: 70px;\n    background-color: black;\n    color: white;\n  }\n\n  .navbar-dark[_ngcontent-%COMP%] {\n    background-color: black !important;\n  }\n\n  .navbar-brand[_ngcontent-%COMP%] {\n    color: white;\n  }\n\n  .nav-link[_ngcontent-%COMP%] {\n    color: grey;\n  }\n\n  .nav-link.active[_ngcontent-%COMP%] {\n    color: white;\n  }\n\n  .usc-film-title[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 24px;\n    font-family: Arial;\n    \n    \n    \n    margin-left: 20px;\n    width: 300px;\n    \n    background-color: transparent;\n    border: transparent;\n  }\n\n\n  .home-title[_ngcontent-%COMP%], .my-list-title[_ngcontent-%COMP%] {\n    color: grey;\n    font-size: 24px;\n    font-family: Arial;\n    background-color: transparent;\n    border: transparent;\n    margin-left: 20px;\n    outline: 0;\n  }\n\n  .ml-auto[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n\n  .navbar-nav[_ngcontent-%COMP%] {\n    width: 100%;\n    background: black;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0lBQ0UsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxrQ0FBa0M7RUFDcEM7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxZQUFZO0lBQ1osZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsNkJBQTZCO0lBQzdCLG1CQUFtQjtFQUNyQjs7O0VBR0E7SUFDRSxXQUFXO0lBQ1gsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixVQUFVO0VBQ1o7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsaUJBQWlCO0VBQ25CO0FBQ0Y7OztBQUdBO0VBQ0U7SUFDRSxlQUFlO0lBQ2YsTUFBTTtJQUNOLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osVUFBVTtJQUNWLFdBQVc7RUFDYjs7O0VBR0E7SUFDRSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsWUFBWTtFQUNkOztFQUVBO0lBQ0Usa0NBQWtDO0VBQ3BDOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLG1CQUFtQjtFQUNyQjs7O0VBR0E7SUFDRSxXQUFXO0lBQ1gsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixVQUFVO0VBQ1o7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsaUJBQWlCO0VBQ25CO0FBQ0YiLCJmaWxlIjoibmF2LWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAubmF2LWJhciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBoZWlnaHQ6IDcwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLnVzYy1maWxtIHtcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xuICB9XG5cbiAgI2hvbWUge1xuICAgIG1hcmdpbi1sZWZ0OiA3MiU7XG4gIH1cblxuICAjbXktbGlzdCB7XG4gICAgbWFyZ2luLWxlZnQ6IDcwJTtcbiAgfVxuXG4gIC5uYXZiYXItZGFyayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5uYXZiYXItYnJhbmQge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gIC5uYXYtbGluayB7XG4gICAgY29sb3I6IGdyZXk7XG4gIH1cblxuICAubmF2LWxpbmsuYWN0aXZlIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cblxuICAudXNjLWZpbG0tdGl0bGUge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsO1xuICAgIC8qbWFyZ2luLXRvcDogMjBweDsqL1xuICAgIC8qbWFyZ2luLWxlZnQ6IDEwMHB4OyovXG4gICAgLypwb3NpdGlvbjogZml4ZWQ7Ki9cbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IHRyYW5zcGFyZW50O1xuICB9XG5cblxuICAuaG9tZS10aXRsZSwgLm15LWxpc3QtdGl0bGUge1xuICAgIGNvbG9yOiBncmV5O1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBmb250LWZhbWlseTogQXJpYWw7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiB0cmFuc3BhcmVudDtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBvdXRsaW5lOiAwO1xuICB9XG5cbiAgLm1sLWF1dG8ge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cblxuICAubmF2YmFyLW5hdiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogYmxhY2s7XG4gIH1cbn1cblxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDUwMHB4KSB7XG4gIC5uYXYtY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgIGhlaWdodDogNzBweDtcbiAgICB3aWR0aDogOTUlO1xuICAgIHotaW5kZXg6IDIwO1xuICB9XG5cblxuICAubmF2LWJhciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBoZWlnaHQ6IDcwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG5cbiAgLm5hdmJhci1kYXJrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm5hdmJhci1icmFuZCB7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG5cbiAgLm5hdi1saW5rIHtcbiAgICBjb2xvcjogZ3JleTtcbiAgfVxuXG4gIC5uYXYtbGluay5hY3RpdmUge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gIC51c2MtZmlsbS10aXRsZSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBmb250LWZhbWlseTogQXJpYWw7XG4gICAgLyptYXJnaW4tdG9wOiAyMHB4OyovXG4gICAgLyptYXJnaW4tbGVmdDogMTAwcHg7Ki9cbiAgICAvKnBvc2l0aW9uOiBmaXhlZDsqL1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICAvKm1hcmdpbi1yaWdodDogMjBweDsqL1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogdHJhbnNwYXJlbnQ7XG4gIH1cblxuXG4gIC5ob21lLXRpdGxlLCAubXktbGlzdC10aXRsZSB7XG4gICAgY29sb3I6IGdyZXk7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IHRyYW5zcGFyZW50O1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIG91dGxpbmU6IDA7XG4gIH1cblxuICAubWwtYXV0byB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuXG4gIC5uYXZiYXItbmF2IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ "jwUf":
/*!*******************************************!*\
  !*** ./src/app/services/posts.service.ts ***!
  \*******************************************/
/*! exports provided: PostsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsService", function() { return PostsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


const prefix = '';
// const prefix = 'http://localhost:8080';
class PostsService {
    // const deployLink = "";
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getAllPosts() {
        // const url = 'http://localhost:8080/apis/posts';
        const url = prefix + '/apis/posts';
        return this.httpClient.get(url);
    }
    getPopularMovies() {
        // const url = 'http://localhost:8080/apis/posts/popularMovies';
        const url = prefix + '/apis/posts/popularMovies';
        return this.httpClient.get(url);
    }
    getTopRatedMovies() {
        // const url = 'http://localhost:8080/apis/posts/topRatedMovies';
        const url = prefix + '/apis/posts/topRatedMovies';
        return this.httpClient.get(url);
    }
    getTrendingMovies() {
        // const url = 'http://localhost:8080/apis/posts/trendingMovies';
        const url = prefix + '/apis/posts/trendingMovies';
        return this.httpClient.get(url);
    }
    getPopularTvShows() {
        // const url = 'http://localhost:8080/apis/posts/popularTvShows';
        const url = prefix + '/apis/posts/popularTvShows';
        return this.httpClient.get(url);
    }
    getTopRatedTvShows() {
        // const url = 'http://localhost:8080/apis/posts/topRatedTvShows';
        const url = prefix + '/apis/posts/topRatedTvShows';
        return this.httpClient.get(url);
    }
    getTrendingTvShows() {
        // const url = 'http://localhost:8080/apis/posts/trendingTvShows';
        const url = prefix + '/apis/posts/trendingTvShows';
        return this.httpClient.get(url);
    }
    getMovieDetails(id) {
        // const url = 'http://localhost:8080/apis/posts/movieDetails/' + id;
        const url = prefix + '/apis/posts/movieDetails/' + id;
        return this.httpClient.get(url);
    }
    getMovieVideos(id) {
        // const url = 'http://localhost:8080/apis/posts/movieVideos/' + id;
        const url = prefix + '/apis/posts/movieVideos/' + id;
        return this.httpClient.get(url);
    }
    getMovieCast(id) {
        // const url = 'http://localhost:8080/apis/posts/movieCast/' + id;
        const url = prefix + '/apis/posts/movieCast/' + id;
        return this.httpClient.get(url);
    }
    getMovieReviews(id) {
        // const url = 'http://localhost:8080/apis/posts/movieReviews/' + id;
        const url = prefix + '/apis/posts/movieReviews/' + id;
        return this.httpClient.get(url);
    }
    getRecommendedMovies(id) {
        // const url = 'http://localhost:8080/apis/posts/recommendedMovies/' + id;
        const url = prefix + '/apis/posts/recommendedMovies/' + id;
        return this.httpClient.get(url);
    }
    getSimilarMovies(id) {
        // const url = 'http://localhost:8080/apis/posts/similarMovies/' + id;
        const url = prefix + '/apis/posts/similarMovies/' + id;
        return this.httpClient.get(url);
    }
    getTvShowDetails(id) {
        // const url = 'http://localhost:8080/apis/posts/tvshowDetails/' + id;
        const url = prefix + '/apis/posts/tvshowDetails/' + id;
        return this.httpClient.get(url);
    }
    getTvShowVideos(id) {
        // const url = 'http://localhost:8080/apis/posts/tvshowVideos/' + id;
        const url = prefix + '/apis/posts/tvshowVideos/' + id;
        return this.httpClient.get(url);
    }
    getTvShowCast(id) {
        // const url = 'http://localhost:8080/apis/posts/tvshowCast/' + id;
        const url = prefix + '/apis/posts/tvshowCast/' + id;
        return this.httpClient.get(url);
    }
    getTvShowReviews(id) {
        // const url = 'http://localhost:8080/apis/posts/tvshowReviews/' + id;
        const url = prefix + '/apis/posts/tvshowReviews/' + id;
        return this.httpClient.get(url);
    }
    getRecommendedTvShows(id) {
        // const url = 'http://localhost:8080/apis/posts/recommendedTvShows/' + id;
        const url = prefix + '/apis/posts/recommendedTvShows/' + id;
        return this.httpClient.get(url);
    }
    getSimilarTvShows(id) {
        // const url = 'http://localhost:8080/apis/posts/similarTvShows/' + id;
        const url = prefix + '/apis/posts/similarTvShows/' + id;
        return this.httpClient.get(url);
    }
    getCastDetails(person) {
        // const url = 'http://localhost:8080/apis/posts/castDetails/' + person;
        const url = prefix + '/apis/posts/castDetails/' + person;
        return this.httpClient.get(url);
    }
    getCastExternal(person) {
        // const url = 'http://localhost:8080/apis/posts/castExternal/' + person;
        const url = prefix + '/apis/posts/castExternal/' + person;
        return this.httpClient.get(url);
    }
}
PostsService.ɵfac = function PostsService_Factory(t) { return new (t || PostsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
PostsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PostsService, factory: PostsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "ktzS":
/*!*****************************************************************************!*\
  !*** ./src/app/components/trending-carousel/trending-carousel.component.ts ***!
  \*****************************************************************************/
/*! exports provided: TrendingCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrendingCarouselComponent", function() { return TrendingCarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





function TrendingCarouselComponent_div_0_div_1_2_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/watch/movie/", ctx_r5.posts[i_r4].id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "https://image.tmdb.org/t/p/w780/" + ctx_r5.posts[i_r4].backdrop_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.posts[i_r4].title);
} }
function TrendingCarouselComponent_div_0_div_1_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TrendingCarouselComponent_div_0_div_1_2_ng_template_0_Template, 7, 3, "ng-template", 5);
} }
const _c0 = function () { return [0, 1, 2, 3, 4]; };
function TrendingCarouselComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ngb-carousel", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TrendingCarouselComponent_div_0_div_1_2_Template, 1, 0, undefined, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
function TrendingCarouselComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TrendingCarouselComponent_div_0_div_1_Template, 3, 2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.posts);
} }
function TrendingCarouselComponent_div_1_div_1_2_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/watch/movie/", ctx_r10.posts[i_r9].id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "https://image.tmdb.org/t/p/w780/" + ctx_r10.posts[i_r9].backdrop_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.posts[i_r9].title);
} }
function TrendingCarouselComponent_div_1_div_1_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TrendingCarouselComponent_div_1_div_1_2_ng_template_0_Template, 7, 3, "ng-template", 5);
} }
function TrendingCarouselComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ngb-carousel", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TrendingCarouselComponent_div_1_div_1_2_Template, 1, 0, undefined, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showNavigationIndicators", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
} }
function TrendingCarouselComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TrendingCarouselComponent_div_1_div_1_Template, 3, 3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.posts);
} }
// providers: [NgbCarouselConfig]
class TrendingCarouselComponent {
    constructor(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
        this.dataReceived = 'DefaultValue!';
    }
    ngOnInit() {
        this.isMobile = this.breakpointObserver.isMatched('(max-width: 500px)');
        this.isDesktop = this.breakpointObserver.isMatched('(min-width: 500px)');
        this.getData();
    }
    getData() {
        this.posts = this.posts.results;
        // console.log('images is ' + typeof(this.images));
        // console.log('images[0] is ' + typeof(this.images[0]));
    }
}
TrendingCarouselComponent.ɵfac = function TrendingCarouselComponent_Factory(t) { return new (t || TrendingCarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"])); };
TrendingCarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TrendingCarouselComponent, selectors: [["app-trending-carousel"]], inputs: { dataReceived: "dataReceived", posts: "posts" }, decls: 2, vars: 2, consts: [["class", "container-fluid", 4, "ngIf"], [1, "container-fluid"], [4, "ngIf"], [1, "trending-carousel-container"], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], [1, "hover-overlay", "ripple"], [1, "wrapper"], ["href", "", 3, "routerLink"], ["className", "img-fluid", "alt", "", 2, "align-content", "center", "text-align", "center", 3, "src"], [1, "overlay"], [1, "text"], [3, "showNavigationIndicators"], [1, "hover-overlay", "ripple", 3, "routerLink"], ["href", ""]], template: function TrendingCarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TrendingCarouselComponent_div_0_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TrendingCarouselComponent_div_1_Template, 2, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isDesktop);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMobile);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbSlide"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], styles: ["@media only screen and (max-width: 500px) {\n  .carousel[_ngcontent-%COMP%] {\n  }\n\n  ngb-carousel[_ngcontent-%COMP%] {\n    width:100%;\n    text-align: center;\n    align-content: center;\n    margin-top: -30px;\n    margin-left: 1%;\n    left:auto;\n    right: auto;\n    outline: none;\n    height: 25vh;\n    overflow: hidden;\n  }\n\n  .white-text[_ngcontent-%COMP%] {\n    color: white;\n    margin-top: 7%;\n    text-align: left;\n    margin-left: 8%;\n    position: relative;\n  }\n\n  \n  \n  \n\n  .mask[_ngcontent-%COMP%] {\n    \n    margin-top: -38%;\n    position: absolute;\n    padding-bottom: 10%;\n    \n    width: 100%;\n    height: 50%;\n    background: linear-gradient(0deg, rgba(0, 0, 0, 1) 30%, rgba(255, 255, 255, 0));\n  }\n\n  .wrapper[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n    \n    text-align: center;\n    width: 100%;\n    height : 300px;\n  }\n\n  ngb-carousel[_ngcontent-%COMP%]:hover   .wrapper[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%]{\n    transform: scale(1.05);\n  }\n\n\n  .wrapper[_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n  }\n\n  .wrapper[_ngcontent-%COMP%] {\n    height: 350px;\n    overflow: hidden;\n    width: 100%;\n  }\n\n  .overlay[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 5%;\n    bottom: 50%;\n    left: 0;\n    right: 0;\n    height: 50%;\n    width: 100%;\n    \n    background: linear-gradient(0deg, rgba(0, 0, 0, 1) 10%, rgba(255, 255, 255, 0));\n  }\n\n  \n  \n  \n  \n  \n\n  .text[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 14px;\n    position: absolute;\n    bottom: 50%;\n    left: 7%;\n    \n    width: 90%;\n    text-align: left;\n  }\n}\n\n\n@media only screen and (min-width: 500px) {\n  .carousel[_ngcontent-%COMP%] {\n  }\n\n  ngb-carousel[_ngcontent-%COMP%] {\n    width: 80%;\n    text-align: center;\n    align-content: center;\n    margin-top: 5%;\n    margin-left: 9%;\n    left:auto;\n    right: auto;\n    outline: none;\n    height: 50%;\n    overflow: hidden;\n  }\n\n  .white-text[_ngcontent-%COMP%] {\n    color: white;\n    margin-top: 7%;\n    text-align: left;\n    margin-left: 8%;\n    position: relative;\n  }\n\n  .wrapper[_ngcontent-%COMP%]:hover   .mask[_ngcontent-%COMP%] {\n    opacity: 1;\n  }\n\n  .mask[_ngcontent-%COMP%] {\n    opacity: 0;\n    margin-top: -38%;\n    position: absolute;\n    padding-bottom: 10%;\n    \n    width: 100%;\n    height: 50%;\n    background: linear-gradient(0deg, rgba(0, 0, 0, 1) 30%, rgba(255, 255, 255, 0));\n  }\n\n  .wrapper[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n    \n    text-align: center;\n    width: 100%;\n  }\n\n  ngb-carousel[_ngcontent-%COMP%]:hover   .wrapper[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%]{\n    transform: scale(1.05);\n  }\n\n  .wrapper[_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n  }\n\n  .wrapper[_ngcontent-%COMP%] {\n    height: 350px;\n    overflow: hidden;\n    width: 100%;\n  }\n\n  .overlay[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 50%;\n    \n    left: 0;\n    right: 0;\n    height: 50%;\n    width: 100%;\n    opacity: 0;\n    transition: .5s ease;\n    background: linear-gradient(0deg, rgba(0, 0, 0, 1) 10%, rgba(255, 255, 255, 0));\n  }\n\n  .wrapper[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%] {\n    opacity: 1;\n  }\n  .wrapper[_ngcontent-%COMP%]:hover   .text[_ngcontent-%COMP%] {\n    opacity: 1;\n  }\n\n  .text[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 20px;\n    position: absolute;\n    bottom: 10%;\n    left: 7%;\n    transition: .5s ease;\n    \n    \n    \n    text-align: right;\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyZW5kaW5nLWNhcm91c2VsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtFQUNBOztFQUVBO0lBQ0UsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixTQUFTO0lBQ1QsV0FBVztJQUNYLGFBQWE7SUFDYixZQUFZO0lBQ1osZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGtCQUFrQjtFQUNwQjs7RUFFQSx5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLElBQUk7O0VBRUo7SUFDRSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLFdBQVc7SUFDWCxXQUFXO0lBQ1gsK0VBQStFO0VBQ2pGOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsY0FBYztFQUNoQjs7RUFFQTtJQUNFLHNCQUFzQjtFQUN4Qjs7O0VBR0E7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLFdBQVc7SUFDWCxPQUFPO0lBQ1AsUUFBUTtJQUNSLFdBQVc7SUFDWCxXQUFXO0lBQ1gsd0JBQXdCO0lBQ3hCLCtFQUErRTtFQUNqRjs7RUFFQSxnQ0FBZ0M7RUFDaEMsOEJBQThCO0VBQzlCLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sSUFBSTs7RUFFSjtJQUNFLFlBQVk7SUFDWixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxRQUFRO0lBQ1Isb0JBQW9CO0lBQ3BCLFVBQVU7SUFDVixnQkFBZ0I7RUFDbEI7QUFDRjs7O0FBR0E7RUFDRTtFQUNBOztFQUVBO0lBQ0UsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsY0FBYztJQUNkLGVBQWU7SUFDZixTQUFTO0lBQ1QsV0FBVztJQUNYLGFBQWE7SUFDYixXQUFXO0lBQ1gsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsV0FBVztJQUNYLFdBQVc7SUFDWCwrRUFBK0U7RUFDakY7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFdBQVc7RUFDYjs7RUFFQTtJQUNFLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsZUFBZTtJQUNmLE9BQU87SUFDUCxRQUFRO0lBQ1IsV0FBVztJQUNYLFdBQVc7SUFDWCxVQUFVO0lBQ1Ysb0JBQW9CO0lBQ3BCLCtFQUErRTtFQUNqRjs7RUFFQTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFFBQVE7SUFDUixvQkFBb0I7SUFDcEIsNENBQTRDO0lBQzVDLHdDQUF3QztJQUN4QyxvQ0FBb0M7SUFDcEMsaUJBQWlCO0lBQ2pCLFVBQVU7RUFDWjtBQUNGIiwiZmlsZSI6InRyZW5kaW5nLWNhcm91c2VsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIC5jYXJvdXNlbCB7XG4gIH1cblxuICBuZ2ItY2Fyb3VzZWwge1xuICAgIHdpZHRoOjEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAtMzBweDtcbiAgICBtYXJnaW4tbGVmdDogMSU7XG4gICAgbGVmdDphdXRvO1xuICAgIHJpZ2h0OiBhdXRvO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgaGVpZ2h0OiAyNXZoO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuICAud2hpdGUtdGV4dCB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbi10b3A6IDclO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDglO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuXG4gIC8qLndyYXBwZXI6aG92ZXIgLm1hc2sgeyovXG4gIC8qICBvcGFjaXR5OiAxOyovXG4gIC8qfSovXG5cbiAgLm1hc2sge1xuICAgIC8qb3BhY2l0eTogMDsqL1xuICAgIG1hcmdpbi10b3A6IC0zOCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMCU7XG4gICAgLypib3R0b206IDUwJTsqL1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNTAlO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDAsIDAsIDAsIDEpIDMwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSk7XG4gIH1cblxuICAud3JhcHBlciA+IGEgPiBpbWcge1xuICAgIC8qd2lkdGg6IDEwMDBweDsqL1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQgOiAzMDBweDtcbiAgfVxuXG4gIG5nYi1jYXJvdXNlbDpob3ZlciAud3JhcHBlciA+IGEgPiBpbWd7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgfVxuXG5cbiAgLndyYXBwZXI6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIC53cmFwcGVyIHtcbiAgICBoZWlnaHQ6IDM1MHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAub3ZlcmxheSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNSU7XG4gICAgYm90dG9tOiA1MCU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBoZWlnaHQ6IDUwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvKnRyYW5zaXRpb246IC41cyBlYXNlOyovXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMCwgMCwgMCwgMSkgMTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApKTtcbiAgfVxuXG4gIC8qQG1lZGlhKGFueS1wb2ludGVyOiBjb2Fyc2UpIHsqL1xuICAvKiAgLndyYXBwZXI6aG92ZXIgLm92ZXJsYXkgeyovXG4gIC8qICAgIG9wYWNpdHk6IDE7Ki9cbiAgLyogIH0qL1xuICAvKn0qL1xuXG4gIC50ZXh0IHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDUwJTtcbiAgICBsZWZ0OiA3JTtcbiAgICAvKm1hcmdpbi1sZWZ0OiAxMCU7Ki9cbiAgICB3aWR0aDogOTAlO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cbn1cblxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDUwMHB4KSB7XG4gIC5jYXJvdXNlbCB7XG4gIH1cblxuICBuZ2ItY2Fyb3VzZWwge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiA1JTtcbiAgICBtYXJnaW4tbGVmdDogOSU7XG4gICAgbGVmdDphdXRvO1xuICAgIHJpZ2h0OiBhdXRvO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgaGVpZ2h0OiA1MCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuXG4gIC53aGl0ZS10ZXh0IHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luLXRvcDogNyU7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBtYXJnaW4tbGVmdDogOCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbiAgLndyYXBwZXI6aG92ZXIgLm1hc2sge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICAubWFzayB7XG4gICAgb3BhY2l0eTogMDtcbiAgICBtYXJnaW4tdG9wOiAtMzglO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAlO1xuICAgIC8qYm90dG9tOiA1MCU7Ki9cbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDUwJTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgwLCAwLCAwLCAxKSAzMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkpO1xuICB9XG5cbiAgLndyYXBwZXIgPiBhID4gaW1nIHtcbiAgICAvKndpZHRoOiAxMDAwcHg7Ki9cbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICBuZ2ItY2Fyb3VzZWw6aG92ZXIgLndyYXBwZXIgPiBhID4gaW1ne1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gIH1cblxuICAud3JhcHBlcjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgLndyYXBwZXIge1xuICAgIGhlaWdodDogMzUwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5vdmVybGF5IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgLypib3R0b206IDUwJTsqL1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgaGVpZ2h0OiA1MCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2l0aW9uOiAuNXMgZWFzZTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgwLCAwLCAwLCAxKSAxMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkpO1xuICB9XG5cbiAgLndyYXBwZXI6aG92ZXIgLm92ZXJsYXkge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgLndyYXBwZXI6aG92ZXIgLnRleHQge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICAudGV4dCB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAxMCU7XG4gICAgbGVmdDogNyU7XG4gICAgdHJhbnNpdGlvbjogLjVzIGVhc2U7XG4gICAgLyotd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOyovXG4gICAgLyotbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7Ki9cbiAgICAvKnRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOyovXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuXG5cblxuIl19 */"] });


/***/ }),

/***/ "l3hs":
/*!********************************************!*\
  !*** ./src/app/services/search.service.ts ***!
  \********************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




// const SEARCH_URL = 'https://api.themoviedb.org/3/search/multi?api_key=5cb255aabd11100bc162d4bd13d7359c&language=en-US&query=';
// const SEARCH_URL = 'http://localhost:8080/apis/posts/search/';
const SEARCH_URL = '/apis/posts/search/';
// const PARAMS = new HttpParams({
//   fromObject: {
//     action: 'opensearch',
//     format: 'json',
//     origin: '*'
//   }
// });
class SearchService {
    constructor(http) {
        this.http = http;
    }
    search(term) {
        if (term === '') {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])([]);
        }
        // this.data = this.http.get<MultiSearchData[]>(SEARCH_URL + term).pipe(
        //   map(res => res as MultiSearchData[] || [])
        // );
        this.data = this.http.get(SEARCH_URL + term).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(res => res));
        // @ts-ignore
        return this.data;
    }
}
SearchService.ɵfac = function SearchService_Factory(t) { return new (t || SearchService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
SearchService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: SearchService, factory: SearchService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "u3ne":
/*!*****************************************************************!*\
  !*** ./src/app/components/tv-carousel/tv-carousel.component.ts ***!
  \*****************************************************************/
/*! exports provided: TvCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvCarouselComponent", function() { return TvCarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





function TvCarouselComponent_div_0_div_1_2_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TvCarouselComponent_div_0_div_1_2_ng_template_0_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const one_r7 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r8.reloadPage(one_r7.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const one_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/watch/movie/", one_r7.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "https://image.tmdb.org/t/p/w500" + one_r7.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](one_r7.name);
} }
function TvCarouselComponent_div_0_div_1_2_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TvCarouselComponent_div_0_div_1_2_ng_template_0_div_1_Template, 5, 3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const six_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", six_r4);
} }
function TvCarouselComponent_div_0_div_1_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TvCarouselComponent_div_0_div_1_2_ng_template_0_Template, 3, 1, "ng-template", 5);
} }
function TvCarouselComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ngb-carousel", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TvCarouselComponent_div_0_div_1_2_Template, 1, 0, undefined, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showNavigationArrows", true)("showNavigationIndicators", true)("interval", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.dataArray);
} }
function TvCarouselComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TvCarouselComponent_div_0_div_1_Template, 3, 4, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.dataArray);
} }
function TvCarouselComponent_div_1_div_1_2_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TvCarouselComponent_div_1_div_1_2_ng_template_0_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const one_r16 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r17.reloadPage(one_r16.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const one_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/watch/movie/", one_r16.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "https://image.tmdb.org/t/p/w500" + one_r16.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](one_r16.name);
} }
function TvCarouselComponent_div_1_div_1_2_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TvCarouselComponent_div_1_div_1_2_ng_template_0_div_1_Template, 5, 3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const six_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", six_r13);
} }
function TvCarouselComponent_div_1_div_1_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TvCarouselComponent_div_1_div_1_2_ng_template_0_Template, 3, 1, "ng-template", 5);
} }
function TvCarouselComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ngb-carousel", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TvCarouselComponent_div_1_div_1_2_Template, 1, 0, undefined, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showNavigationArrows", true)("showNavigationIndicators", false)("interval", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r11.dataArray);
} }
function TvCarouselComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TvCarouselComponent_div_1_div_1_Template, 3, 4, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.dataArray);
} }
class TvCarouselComponent {
    constructor(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.dataArray = [];
        this.myStorage = window.localStorage;
    }
    ngOnInit() {
        // if (window.screen.width === 360) { // 768px portrait
        //   this.mobile = true;
        // }
        this.isMobile = this.breakpointObserver.isMatched('(max-width: 500px)');
        this.isDesktop = this.breakpointObserver.isMatched('(min-width: 500px)');
        // console.log('continue is ' + this.continue);
        // console.log('array is  ' + this.data);
        if (this.continue !== 'true') {
            this.data = this.data.results;
            // console.log('check if continue');
        }
        if (this.isDesktop) {
            this.transformData();
        }
        else if (this.isMobile) {
            this.transformData2();
        }
    }
    transformData() {
        // console.log(this.data);
        let j = -1;
        if (this.data) {
            for (let i = 0; i < this.data.length && i < 24; i++) {
                // console.log(this.data[i].poster_path);
                if (i % 6 === 0) {
                    j++;
                    this.dataArray[j] = [];
                    this.dataArray[j].push(this.data[i]);
                }
                else {
                    this.dataArray[j].push(this.data[i]);
                }
            }
        }
        // console.log(this.dataArray);
    }
    transformData2() {
        // console.log(this.data);
        let j = -1;
        if (this.data) {
            for (let i = 0; i < this.data.length && i < 24; i++) {
                // console.log(this.data[i].poster_path);
                if (i % 1 === 0) {
                    j++;
                    this.dataArray[j] = [];
                    this.dataArray[j].push(this.data[i]);
                }
                else {
                    this.dataArray[j].push(this.data[i]);
                }
            }
        }
        // console.log(this.dataArray);
    }
    reloadPage(id) {
        window.location.href = `/watch/tv/${id}`;
    }
}
TvCarouselComponent.ɵfac = function TvCarouselComponent_Factory(t) { return new (t || TvCarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"])); };
TvCarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TvCarouselComponent, selectors: [["app-tv-carousel"]], inputs: { data: "data", continue: "continue" }, decls: 2, vars: 2, consts: [["class", "container", 4, "ngIf"], [1, "container"], [4, "ngIf"], [1, "my-carousel_container", 3, "showNavigationArrows", "showNavigationIndicators", "interval"], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], [1, "six-wrapper"], ["class", "wrapper", 3, "routerLink", "click", 4, "ngFor", "ngForOf"], [1, "wrapper", 3, "routerLink", "click"], ["alt", "Random first slide", 1, "carousel-img", 3, "src"], [1, "overlay"], [1, "text"]], template: function TvCarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TvCarouselComponent_div_0_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TvCarouselComponent_div_1_Template, 2, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isDesktop);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMobile);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbSlide"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], styles: ["@media only screen and (min-width: 500px) {\n  ngb-carousel[_ngcontent-%COMP%] {\n    outline: none;\n    background-color: transparent;\n    width: 100%;\n    text-align: center;\n    align-items: center;\n  }\n\n  .my-carousel_container[_ngcontent-%COMP%] {\n\n  }\n  .my-carousel_container[_ngcontent-%COMP%] .carousel-inner {\n    padding: 2%;\n  }\n  .my-carousel_container[_ngcontent-%COMP%] .slide {\n    padding: 2%;\n  }\n\n  .my-carousel_container[_ngcontent-%COMP%] .carousel-control-prev {\n    left: -10%;\n  }\n\n  .my-carousel_container[_ngcontent-%COMP%] .carousel-control-next {\n    right: -10%;\n  }\n\n  .container[_ngcontent-%COMP%] {\n    left: auto;\n    right: auto;\n    text-align: center;\n  }\n\n  .six-wrapper[_ngcontent-%COMP%] {\n    height: -webkit-min-content;\n    height: min-content;\n    \n    display: flex;\n    text-align: center;\n    \n  }\n\n\n  .wrapper[_ngcontent-%COMP%] {\n    height: -webkit-min-content;\n    height: min-content;\n    width: 14.7%;\n    margin-right: 2%;\n    margin-bottom: 2%;\n    position: relative;\n  }\n\n  .wrapper[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .wrapper[_ngcontent-%COMP%]:hover   .carousel-img[_ngcontent-%COMP%]{\n    transform: scale(1.08);\n  }\n  .wrapper[_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n  }\n\n  .overlay[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 30%;\n    \n    left: -5%;\n    right: 0;\n    height: 75%;\n    width: 110%;\n    opacity: 0;\n    transition: .5s ease;\n    background: linear-gradient(0deg, rgba(0, 0, 0, 1) 30%, rgba(255, 255, 255, 0));\n    align-items: center;\n    text-align: center;\n  }\n\n  .wrapper[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%] {\n    opacity: 1;\n  }\n\n  .text[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 14px;\n    position: absolute;\n    bottom: 1%;\n    left: 40%;\n    transform: translate(-50%, -50%);\n    text-align: left;\n  }\n\n}\n\n\n\n\n@media only screen and (max-width: 500px) {\n  ngb-carousel[_ngcontent-%COMP%] {\n    outline: none;\n    background-color: transparent;\n    width: 100%;\n    text-align: center;\n    align-items: center;\n  }\n\n  .my-carousel_container[_ngcontent-%COMP%] {\n\n  }\n  .my-carousel_container[_ngcontent-%COMP%] .carousel-inner {\n    padding: 2%;\n  }\n  .my-carousel_container[_ngcontent-%COMP%] .slide {\n    padding: 2%;\n  }\n\n  .my-carousel_container[_ngcontent-%COMP%] .carousel-control-prev {\n    left: -6%;\n  }\n\n  .my-carousel_container[_ngcontent-%COMP%] .carousel-control-next {\n    right: -6%;\n  }\n\n  .container[_ngcontent-%COMP%] {\n    left: auto;\n    right: auto;\n    text-align: center;\n  }\n\n  .six-wrapper[_ngcontent-%COMP%] {\n    height: -webkit-min-content;\n    height: min-content;\n    \n    display: flex;\n    text-align: center;\n    \n  }\n\n\n  .wrapper[_ngcontent-%COMP%] {\n    height: -webkit-min-content;\n    height: min-content;\n    width: 75%;\n    margin-right: 2%;\n    margin-bottom: 2%;\n    position: relative;\n    text-align: center;\n    left: auto;\n    right: auto;\n    margin-left: 10%;\n  }\n\n  .wrapper[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .wrapper[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 30%;\n    \n    \n    right: -5%;\n    height: 78%;\n    width: 110%;\n    \n    transition: none;\n    background: linear-gradient(0deg, rgba(0, 0, 0, 1) 30%, rgba(255, 255, 255, 0));\n    align-items: center;\n    text-align: center;\n  }\n\n  .wrapper[_ngcontent-%COMP%]:hover   .text[_ngcontent-%COMP%] {\n    bottom: 8%;\n    left: 20px;\n  }\n\n  .wrapper[_ngcontent-%COMP%]:hover   .carousel-img[_ngcontent-%COMP%]{\n    transform: scale(1.08);\n  }\n\n  .wrapper[_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n  }\n\n  .overlay[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 30%;\n    \n    \n    right: 0;\n    height: 70%;\n    width: 100%;\n    \n    \n    background: linear-gradient(0deg, rgba(0, 0, 0, 1) 30%, rgba(255, 255, 255, 0));\n    align-items: center;\n    text-align: center;\n  }\n\n  \n  \n  \n\n  .text[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 14px;\n    position: absolute;\n    width: 80%;\n    bottom: 8%;\n    left: 20px;\n    \n    \n    \n    \n    \n    \n    \n    \n    \n    text-align: left;\n  }\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR2LWNhcm91c2VsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixtQkFBbUI7RUFDckI7O0VBRUE7O0VBRUE7RUFDQTtJQUNFLFdBQVc7RUFDYjtFQUNBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsVUFBVTtJQUNWLFdBQVc7SUFDWCxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSwyQkFBbUI7SUFBbkIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG9CQUFvQjtFQUN0Qjs7O0VBR0E7SUFDRSwyQkFBbUI7SUFBbkIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsYUFBYTtJQUNiLFNBQVM7SUFDVCxRQUFRO0lBQ1IsV0FBVztJQUNYLFdBQVc7SUFDWCxVQUFVO0lBQ1Ysb0JBQW9CO0lBQ3BCLCtFQUErRTtJQUMvRSxtQkFBbUI7SUFDbkIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFNBQVM7SUFHVCxnQ0FBZ0M7SUFDaEMsZ0JBQWdCO0VBQ2xCOztBQUVGOzs7OztBQUtBO0VBQ0U7SUFDRSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsbUJBQW1CO0VBQ3JCOztFQUVBOztFQUVBO0VBQ0E7SUFDRSxXQUFXO0VBQ2I7RUFDQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFNBQVM7RUFDWDs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFVBQVU7SUFDVixXQUFXO0lBQ1gsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsMkJBQW1CO0lBQW5CLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixvQkFBb0I7RUFDdEI7OztFQUdBO0lBQ0UsMkJBQW1CO0lBQW5CLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0lBQ1gsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixhQUFhO0lBQ2IsYUFBYTtJQUNiLFVBQVU7SUFDVixXQUFXO0lBQ1gsV0FBVztJQUNYLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsK0VBQStFO0lBQy9FLG1CQUFtQjtJQUNuQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsVUFBVTtFQUNaOztFQUVBO0lBQ0Usc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsYUFBYTtJQUNiLGFBQWE7SUFDYixRQUFRO0lBQ1IsV0FBVztJQUNYLFdBQVc7SUFDWCxjQUFjO0lBQ2Qsd0JBQXdCO0lBQ3hCLCtFQUErRTtJQUMvRSxtQkFBbUI7SUFDbkIsa0JBQWtCO0VBQ3BCOztFQUVBLDRCQUE0QjtFQUM1Qiw0QkFBNEI7RUFDNUIsSUFBSTs7RUFFSjtJQUNFLFlBQVk7SUFDWixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixVQUFVO0lBQ1YsVUFBVTtJQUNWLGVBQWU7SUFDZixjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2IsWUFBWTtJQUNaLDRDQUE0QztJQUM1Qyx3Q0FBd0M7SUFDeEMsb0NBQW9DO0lBQ3BDLGdCQUFnQjtFQUNsQjs7QUFFRiIsImZpbGUiOiJ0di1jYXJvdXNlbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MDBweCkge1xuICBuZ2ItY2Fyb3VzZWwge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICAubXktY2Fyb3VzZWxfY29udGFpbmVyIHtcblxuICB9XG4gIC5teS1jYXJvdXNlbF9jb250YWluZXI6Om5nLWRlZXAuY2Fyb3VzZWwtaW5uZXIge1xuICAgIHBhZGRpbmc6IDIlO1xuICB9XG4gIC5teS1jYXJvdXNlbF9jb250YWluZXI6Om5nLWRlZXAuc2xpZGUge1xuICAgIHBhZGRpbmc6IDIlO1xuICB9XG5cbiAgLm15LWNhcm91c2VsX2NvbnRhaW5lcjo6bmctZGVlcC5jYXJvdXNlbC1jb250cm9sLXByZXYge1xuICAgIGxlZnQ6IC0xMCU7XG4gIH1cblxuICAubXktY2Fyb3VzZWxfY29udGFpbmVyOjpuZy1kZWVwLmNhcm91c2VsLWNvbnRyb2wtbmV4dCB7XG4gICAgcmlnaHQ6IC0xMCU7XG4gIH1cblxuICAuY29udGFpbmVyIHtcbiAgICBsZWZ0OiBhdXRvO1xuICAgIHJpZ2h0OiBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5zaXgtd3JhcHBlciB7XG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcbiAgICAvKndpZHRoOiA4MCU7Ki9cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAvKm1hcmdpbi1sZWZ0OiAxMiU7Ki9cbiAgfVxuXG5cbiAgLndyYXBwZXIge1xuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XG4gICAgd2lkdGg6IDE0LjclO1xuICAgIG1hcmdpbi1yaWdodDogMiU7XG4gICAgbWFyZ2luLWJvdHRvbTogMiU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbiAgLndyYXBwZXIgPiBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLndyYXBwZXI6aG92ZXIgLmNhcm91c2VsLWltZ3tcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDgpO1xuICB9XG4gIC53cmFwcGVyOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICAub3ZlcmxheSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMzAlO1xuICAgIC8qYm90dG9tOiAwOyovXG4gICAgbGVmdDogLTUlO1xuICAgIHJpZ2h0OiAwO1xuICAgIGhlaWdodDogNzUlO1xuICAgIHdpZHRoOiAxMTAlO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNpdGlvbjogLjVzIGVhc2U7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMCwgMCwgMCwgMSkgMzAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApKTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC53cmFwcGVyOmhvdmVyIC5vdmVybGF5IHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgLnRleHQge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMSU7XG4gICAgbGVmdDogNDAlO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cblxufVxuXG5cblxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIG5nYi1jYXJvdXNlbCB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIC5teS1jYXJvdXNlbF9jb250YWluZXIge1xuXG4gIH1cbiAgLm15LWNhcm91c2VsX2NvbnRhaW5lcjo6bmctZGVlcC5jYXJvdXNlbC1pbm5lciB7XG4gICAgcGFkZGluZzogMiU7XG4gIH1cbiAgLm15LWNhcm91c2VsX2NvbnRhaW5lcjo6bmctZGVlcC5zbGlkZSB7XG4gICAgcGFkZGluZzogMiU7XG4gIH1cblxuICAubXktY2Fyb3VzZWxfY29udGFpbmVyOjpuZy1kZWVwLmNhcm91c2VsLWNvbnRyb2wtcHJldiB7XG4gICAgbGVmdDogLTYlO1xuICB9XG5cbiAgLm15LWNhcm91c2VsX2NvbnRhaW5lcjo6bmctZGVlcC5jYXJvdXNlbC1jb250cm9sLW5leHQge1xuICAgIHJpZ2h0OiAtNiU7XG4gIH1cblxuICAuY29udGFpbmVyIHtcbiAgICBsZWZ0OiBhdXRvO1xuICAgIHJpZ2h0OiBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5zaXgtd3JhcHBlciB7XG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcbiAgICAvKndpZHRoOiA4MCU7Ki9cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAvKm1hcmdpbi1sZWZ0OiAxMiU7Ki9cbiAgfVxuXG5cbiAgLndyYXBwZXIge1xuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XG4gICAgd2lkdGg6IDc1JTtcbiAgICBtYXJnaW4tcmlnaHQ6IDIlO1xuICAgIG1hcmdpbi1ib3R0b206IDIlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGVmdDogYXV0bztcbiAgICByaWdodDogYXV0bztcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xuICB9XG5cbiAgLndyYXBwZXIgPiBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLndyYXBwZXI6aG92ZXIgLm92ZXJsYXkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDMwJTtcbiAgICAvKmJvdHRvbTogMDsqL1xuICAgIC8qbGVmdDogLTUlOyovXG4gICAgcmlnaHQ6IC01JTtcbiAgICBoZWlnaHQ6IDc4JTtcbiAgICB3aWR0aDogMTEwJTtcbiAgICAvKm9wYWNpdHk6IDA7Ki9cbiAgICB0cmFuc2l0aW9uOiBub25lO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDAsIDAsIDAsIDEpIDMwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSk7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAud3JhcHBlcjpob3ZlciAudGV4dCB7XG4gICAgYm90dG9tOiA4JTtcbiAgICBsZWZ0OiAyMHB4O1xuICB9XG5cbiAgLndyYXBwZXI6aG92ZXIgLmNhcm91c2VsLWltZ3tcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDgpO1xuICB9XG5cbiAgLndyYXBwZXI6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIC5vdmVybGF5IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAzMCU7XG4gICAgLypib3R0b206IDA7Ki9cbiAgICAvKmxlZnQ6IC01JTsqL1xuICAgIHJpZ2h0OiAwO1xuICAgIGhlaWdodDogNzAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8qb3BhY2l0eTogMDsqL1xuICAgIC8qdHJhbnNpdGlvbjogLjVzIGVhc2U7Ki9cbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgwLCAwLCAwLCAxKSAzMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkpO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLyoud3JhcHBlcjpob3ZlciAub3ZlcmxheSB7Ki9cbiAgLyogIHRyYW5zZm9ybTogc2NhbGUoMS4wOCk7Ki9cbiAgLyp9Ki9cblxuICAudGV4dCB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBib3R0b206IDglO1xuICAgIGxlZnQ6IDIwcHg7XG4gICAgLypib3R0b206IC0zJTsqL1xuICAgIC8qd2lkdGg6IDkwJTsqL1xuICAgIC8qbWFyZ2luLWxlZnQ6IDE3JTsqL1xuICAgIC8qbWFyZ2luLWJvdHRvbTogMSU7Ki9cbiAgICAvKmxlZnQ6IDQwJTsqL1xuICAgIC8qbGVmdDogMSU7Ki9cbiAgICAvKi13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7Ki9cbiAgICAvKi1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTsqL1xuICAgIC8qdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7Ki9cbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG5cbn1cblxuXG5cblxuIl19 */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/home-page/home-page.component */ "atC9");
/* harmony import */ var _components_watchlist_watchlist_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/watchlist/watchlist.component */ "zcMl");
/* harmony import */ var _components_movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/movie-details/movie-details.component */ "4cG8");
/* harmony import */ var _components_tv_show_details_tv_show_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/tv-show-details/tv-show-details.component */ "3eqm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const routes = [
    { path: '', component: _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_1__["HomePageComponent"] },
    {
        path: 'watch',
        children: [
            { path: 'movie',
                children: [
                    { path: ':id', component: _components_movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_3__["MovieDetailsComponent"] }
                ] },
            { path: 'tv',
                children: [
                    { path: ':id', component: _components_tv_show_details_tv_show_details_component__WEBPACK_IMPORTED_MODULE_4__["TvShowDetailsComponent"] }
                ] }
        ]
    },
    { path: 'mylist', component: _components_watchlist_watchlist_component__WEBPACK_IMPORTED_MODULE_2__["WatchlistComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, { onSameUrlNavigation: 'reload' })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zcMl":
/*!*************************************************************!*\
  !*** ./src/app/components/watchlist/watchlist.component.ts ***!
  \*************************************************************/
/*! exports provided: WatchlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WatchlistComponent", function() { return WatchlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




function WatchlistComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " No items found in Watchlist. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WatchlistComponent_div_1_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const one_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("routerLink", "/watch/", one_r5.type, "/", one_r5.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "https://image.tmdb.org/t/p/w500" + one_r5.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](one_r5.title);
} }
function WatchlistComponent_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WatchlistComponent_div_1_div_4_div_2_Template, 5, 4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const six_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", six_r3);
} }
function WatchlistComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " My WatchList ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, WatchlistComponent_div_1_div_4_Template, 4, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.dataArray);
} }
class WatchlistComponent {
    constructor(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.myStorage = window.localStorage;
        this.array = [];
        this.dataArray = [];
    }
    ngOnInit() {
        this.isMobile = this.breakpointObserver.isMatched('(max-width: 500px)');
        this.isDesktop = this.breakpointObserver.isMatched('(min-width: 500px)');
        let watchlist = [];
        // if there is already some continue watching
        if (this.myStorage) {
            if (this.myStorage.getItem('watchlist')) {
                // check if this id exists
                watchlist = JSON.parse(this.myStorage.getItem('watchlist'));
                const arr = [];
                for (const one of watchlist) {
                    arr.push(JSON.parse(one));
                    // console.log(array);
                }
                this.array = arr;
            }
        }
        if (this.isMobile) {
            this.transformData2();
        }
        else if (this.isDesktop) {
            this.transformData();
        }
    }
    transformData() {
        // console.log(this.data);
        let j = -1;
        if (this.array) {
            // console.log('[transfromData] ' + this.data[0].poster_path);
            for (let i = 0; i < this.array.length; i++) {
                if (i % 6 === 0) {
                    j++;
                    this.dataArray[j] = [];
                    this.dataArray[j].push(this.array[i]);
                }
                else {
                    this.dataArray[j].push(this.array[i]);
                }
            }
        }
        console.log(this.dataArray);
    }
    transformData2() {
        // console.log(this.data);
        let j = -1;
        if (this.array) {
            // console.log('[transfromData] ' + this.data[0].poster_path);
            for (let i = 0; i < this.array.length; i++) {
                if (i % 1 === 0) {
                    j++;
                    this.dataArray[j] = [];
                    this.dataArray[j].push(this.array[i]);
                }
                else {
                    this.dataArray[j].push(this.array[i]);
                }
            }
        }
        console.log(this.dataArray);
    }
}
WatchlistComponent.ɵfac = function WatchlistComponent_Factory(t) { return new (t || WatchlistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"])); };
WatchlistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WatchlistComponent, selectors: [["app-watchlist"]], decls: 2, vars: 2, consts: [[4, "ngIf"], ["class", "", 4, "ngIf"], [2, "color", "white", "font-size", "36px", "text-align", "center", "height", "60vh"], [1, ""], [1, "my-watchlist", 2, "color", "white", "font-size", "36px", "margin-left", "10%", "margin-bottom", "2%"], [1, "my-list-container"], [4, "ngFor", "ngForOf"], [1, "watchlist-six-wrapper"], ["class", "watchlist-wrapper", 4, "ngFor", "ngForOf"], [1, "watchlist-wrapper"], ["alt", "", 1, "watchlist-img", 3, "routerLink", "src"], [1, "overlay"], [1, "text"]], template: function WatchlistComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WatchlistComponent_div_0_Template, 3, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WatchlistComponent_div_1_Template, 5, 1, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.array.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataArray.length > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: ["@media only screen and (max-width: 500px) {\n  .my-list-container[_ngcontent-%COMP%] {\n    margin-left: 17%;\n    width: 80%;\n    min-height: 50vh;\n    text-align: center;\n    align-items: center;\n  }\n\n  .my-watchlist[_ngcontent-%COMP%] {\n    margin-top: -10%;\n    padding-bottom: 10%;\n  }\n\n  .watchlist-six-wrapper[_ngcontent-%COMP%] {\n    height: -webkit-min-content;\n    height: min-content;\n    width: 100%;\n    display: flex;\n    text-align: center;\n  }\n\n\n  .watchlist-wrapper[_ngcontent-%COMP%] {\n    height: -webkit-min-content;\n    height: min-content;\n    width: 80%;\n    margin-bottom: 15%;\n    position: relative;\n  }\n\n  .watchlist-wrapper[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .watchlist-wrapper[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%]{\n    transform: scale(1.05);\n    height: 52%;\n  }\n\n  .watchlist-wrapper[_ngcontent-%COMP%]:hover   .watchlist-img[_ngcontent-%COMP%]{\n    transform: scale(1.05);\n  }\n  .watchlist-wrapper[_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n  }\n\n  .overlay[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 50%;\n    \n    left: 0;\n    right: 0;\n    height: 50%;\n    width: 100%;\n    opacity: 1;\n    \n    background: linear-gradient(0deg, rgba(0, 0, 0, 1) 10%, rgba(255, 255, 255, 0));\n    align-items: center;\n  }\n\n  .watchlist-wrapper[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%] {\n    opacity: 1;\n  }\n\n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n\n  .text[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 14px;\n    position: absolute;\n    width: 80%;\n    bottom: 8%;\n    left: 20px;\n    \n    \n    \n    \n    \n    \n    \n    \n    \n    text-align: left;\n  }\n}\n\n\n\n\n\n\n\n\n@media only screen and (min-width: 500px) {\n  .my-list-container[_ngcontent-%COMP%] {\n    margin-left: 9%;\n    width: 80%;\n    min-height: 50vh;\n  }\n\n  .watchlist-six-wrapper[_ngcontent-%COMP%] {\n    height: -webkit-min-content;\n    height: min-content;\n    width: 100%;\n    display: flex;\n    text-align: left;\n  }\n\n\n  .watchlist-wrapper[_ngcontent-%COMP%] {\n    height: -webkit-min-content;\n    height: min-content;\n    width: 14.7%;\n    margin-right: 2%;\n    margin-bottom: 2%;\n    position: relative;\n  }\n\n  .watchlist-wrapper[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .watchlist-wrapper[_ngcontent-%COMP%]:hover   .watchlist-wrapper[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n    transform: scale(1.05);\n  }\n\n  .watchlist-wrapper[_ngcontent-%COMP%]:hover   .text[_ngcontent-%COMP%]{\n    opacity: 1;\n  }\n\n  .watchlist-wrapper[_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n  }\n\n  .overlay[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 50%;\n    \n    left: 0;\n    right: 0;\n    height: 50%;\n    width: 100%;\n    opacity: 0;\n    transition: .5s ease;\n    background: linear-gradient(0deg, rgba(0, 0, 0, 1) 10%, rgba(255, 255, 255, 0));\n    align-items: center;\n  }\n\n  .watchlist-wrapper[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%] {\n    opacity: 1;\n  }\n\n  .text[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 14px;\n    position: absolute;\n    bottom: 4%;\n    left: 7%;\n    opacity: 0;\n    transition: .5s ease;\n    \n    \n    \n    text-align: left;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndhdGNobGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFDRSxnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLDJCQUFtQjtJQUFuQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGFBQWE7SUFDYixrQkFBa0I7RUFDcEI7OztFQUdBO0lBQ0UsMkJBQW1CO0lBQW5CLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLHNCQUFzQjtJQUN0QixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxzQkFBc0I7RUFDeEI7RUFDQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLGFBQWE7SUFDYixPQUFPO0lBQ1AsUUFBUTtJQUNSLFdBQVc7SUFDWCxXQUFXO0lBQ1gsVUFBVTtJQUNWLHdCQUF3QjtJQUN4QiwrRUFBK0U7SUFDL0UsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLDhDQUE4QztFQUM5QywwQ0FBMEM7RUFDMUMsc0NBQXNDO0VBQ3RDLHdCQUF3QjtFQUN4QixJQUFJOztFQUVKO0lBQ0UsWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFVBQVU7SUFDVixVQUFVO0lBQ1YsZUFBZTtJQUNmLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixZQUFZO0lBQ1osNENBQTRDO0lBQzVDLHdDQUF3QztJQUN4QyxvQ0FBb0M7SUFDcEMsZ0JBQWdCO0VBQ2xCO0FBQ0Y7Ozs7Ozs7OztBQVNBO0VBQ0U7SUFDRSxlQUFlO0lBQ2YsVUFBVTtJQUNWLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLDJCQUFtQjtJQUFuQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGFBQWE7SUFDYixnQkFBZ0I7RUFDbEI7OztFQUdBO0lBQ0UsMkJBQW1CO0lBQW5CLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixhQUFhO0lBQ2IsT0FBTztJQUNQLFFBQVE7SUFDUixXQUFXO0lBQ1gsV0FBVztJQUNYLFVBQVU7SUFDVixvQkFBb0I7SUFDcEIsK0VBQStFO0lBQy9FLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFlBQVk7SUFDWixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixRQUFRO0lBQ1IsVUFBVTtJQUNWLG9CQUFvQjtJQUNwQiw0Q0FBNEM7SUFDNUMsd0NBQXdDO0lBQ3hDLG9DQUFvQztJQUNwQyxnQkFBZ0I7RUFDbEI7QUFDRiIsImZpbGUiOiJ3YXRjaGxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgLm15LWxpc3QtY29udGFpbmVyIHtcbiAgICBtYXJnaW4tbGVmdDogMTclO1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWluLWhlaWdodDogNTB2aDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIC5teS13YXRjaGxpc3Qge1xuICAgIG1hcmdpbi10b3A6IC0xMCU7XG4gICAgcGFkZGluZy1ib3R0b206IDEwJTtcbiAgfVxuXG4gIC53YXRjaGxpc3Qtc2l4LXdyYXBwZXIge1xuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuXG4gIC53YXRjaGxpc3Qtd3JhcHBlciB7XG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcbiAgICB3aWR0aDogODAlO1xuICAgIG1hcmdpbi1ib3R0b206IDE1JTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuICAud2F0Y2hsaXN0LXdyYXBwZXIgPiBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLndhdGNobGlzdC13cmFwcGVyOmhvdmVyIC5vdmVybGF5e1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gICAgaGVpZ2h0OiA1MiU7XG4gIH1cblxuICAud2F0Y2hsaXN0LXdyYXBwZXI6aG92ZXIgLndhdGNobGlzdC1pbWd7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgfVxuICAud2F0Y2hsaXN0LXdyYXBwZXI6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIC5vdmVybGF5IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgLypib3R0b206IDA7Ki9cbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGhlaWdodDogNTAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLyp0cmFuc2l0aW9uOiAuNXMgZWFzZTsqL1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDAsIDAsIDAsIDEpIDEwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSk7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIC53YXRjaGxpc3Qtd3JhcHBlcjpob3ZlciAub3ZlcmxheSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIC8qLnRleHQgeyovXG4gIC8qICBjb2xvcjogd2hpdGU7Ki9cbiAgLyogIGZvbnQtc2l6ZTogMjBweDsqL1xuICAvKiAgcG9zaXRpb246IGFic29sdXRlOyovXG4gIC8qICBib3R0b206IDIlOyovXG4gIC8qICBsZWZ0OiA1MCU7Ki9cbiAgLyogIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7Ki9cbiAgLyogIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTsqL1xuICAvKiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7Ki9cbiAgLyogIHRleHQtYWxpZ246IGNlbnRlcjsqL1xuICAvKn0qL1xuXG4gIC50ZXh0IHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogODAlO1xuICAgIGJvdHRvbTogOCU7XG4gICAgbGVmdDogMjBweDtcbiAgICAvKmJvdHRvbTogLTMlOyovXG4gICAgLyp3aWR0aDogOTAlOyovXG4gICAgLyptYXJnaW4tbGVmdDogMTclOyovXG4gICAgLyptYXJnaW4tYm90dG9tOiAxJTsqL1xuICAgIC8qbGVmdDogNDAlOyovXG4gICAgLypsZWZ0OiAxJTsqL1xuICAgIC8qLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTsqL1xuICAgIC8qLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOyovXG4gICAgLyp0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTsqL1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cbn1cblxuXG5cblxuXG5cblxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDUwMHB4KSB7XG4gIC5teS1saXN0LWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLWxlZnQ6IDklO1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWluLWhlaWdodDogNTB2aDtcbiAgfVxuXG4gIC53YXRjaGxpc3Qtc2l4LXdyYXBwZXIge1xuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG5cblxuICAud2F0Y2hsaXN0LXdyYXBwZXIge1xuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XG4gICAgd2lkdGg6IDE0LjclO1xuICAgIG1hcmdpbi1yaWdodDogMiU7XG4gICAgbWFyZ2luLWJvdHRvbTogMiU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbiAgLndhdGNobGlzdC13cmFwcGVyID4gaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC53YXRjaGxpc3Qtd3JhcHBlcjpob3ZlciAud2F0Y2hsaXN0LXdyYXBwZXIgPiBpbWcge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gIH1cblxuICAud2F0Y2hsaXN0LXdyYXBwZXI6aG92ZXIgLnRleHR7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIC53YXRjaGxpc3Qtd3JhcHBlcjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgLm92ZXJsYXkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICAvKmJvdHRvbTogMDsqL1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgaGVpZ2h0OiA1MCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2l0aW9uOiAuNXMgZWFzZTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgwLCAwLCAwLCAxKSAxMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkpO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICAud2F0Y2hsaXN0LXdyYXBwZXI6aG92ZXIgLm92ZXJsYXkge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICAudGV4dCB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiA0JTtcbiAgICBsZWZ0OiA3JTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zaXRpb246IC41cyBlYXNlO1xuICAgIC8qLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTsqL1xuICAgIC8qLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOyovXG4gICAgLyp0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTsqL1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cbn1cblxuIl19 */"] });


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map