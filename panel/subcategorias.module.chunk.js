webpackJsonp(["subcategorias.module"],{

/***/ "../../../../../src/app/pages/subcategorias/subcategorias-agregar/subcategorias-agregar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-lg-6\" style=\"display:block; margin:auto\">\r\n    <nb-card>\r\n      <nb-card-header>Registro de Nueva Subcategoría</nb-card-header>\r\n      <nb-card-body>\r\n        <form [formGroup]=\"myFormAgregar\" novalidate>\r\n          <div class=\"form-group\">\r\n            <label for=\"exampleInputNombre\">Nombre</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"exampleInputNombre\" placeholder=\"Nombre\" formControlName=\"nombre\">\r\n            <div *ngIf=\"myFormAgregar.get('nombre').errors && myFormAgregar.get('nombre').dirty\">\r\n              <p *ngIf=\"myFormAgregar.get('nombre').hasError('required')\">Nombre es requerido</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"exampleInputNombre\">Ingles</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"exampleInputNombre\" placeholder=\"Ingles\" formControlName=\"ingles\">\r\n            <div *ngIf=\"myFormAgregar.get('ingles').errors && myFormAgregar.get('ingles').dirty\">\r\n              <p *ngIf=\"myFormAgregar.get('ingles').hasError('required')\">Ingles es requerido</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"exampleInputNombre\">Ingles</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"exampleInputNombre\" placeholder=\"Ingles\" formControlName=\"ingles\">\r\n            <div *ngIf=\"myFormAgregar.get('ingles').errors && myFormAgregar.get('ingles').dirty\">\r\n              <p *ngIf=\"myFormAgregar.get('ingles').hasError('required')\">Ingles es requerido</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"exampleInputCat\">Categoría</label>\r\n            <select class=\"form-control\" id=\"exampleInputCat\" formControlName=\"categoria_id\">\r\n              <!-- <option disabled selected>Selecciona una categoría</option> -->\r\n              <option *ngFor=\"let categoria of categorias\" [value]=\"categoria.id\">{{categoria.nombre}}</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <br>\r\n            <label for=\"exampleInputImagen\">Imagen</label>\r\n            <input [hidden]=\"clear\" type=\"file\" name=\"imagen\" id=\"imagen\" (change)=\"onFileChange($event)\" #fileInput accept=\"image/*\">\r\n              <div *ngIf=\"clear\">\r\n                <br>\r\n                <output id=\"list\"></output>\r\n                <br>\r\n                <br>\r\n                <button type=\"button\" class=\"btn btn-danger btn-tn\" (click)=\"clearFile()\">clear file</button>\r\n              </div>\r\n\r\n              <p [hidden]=\"clear\" style=\"color: #c71717\"><b>Sugerencia:</b> La dimensión de la imagen no debe ser mayor a 870x370 px.</p>\r\n          </div>\r\n          \r\n          <br>\r\n          <button type=\"submit\" class=\"btn btn-info\" (click)=\"crear()\" [disabled]=\"myFormAgregar.invalid\">Agregar</button>\r\n        </form>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </div>\r\n</div>\r\n\r\n<toaster-container [toasterconfig]=\"config\"></toaster-container>\r\n\r\n<div class=\"my-container\">\r\n    <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '4px' }\"></ngx-loading>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/subcategorias/subcategorias-agregar/subcategorias-agregar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) nb-card-body {\n  overflow: visible; }\n\n:host-context(.nb-theme-default) .input-group {\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-default) .validation-checkboxes {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n  :host-context(.nb-theme-default) .validation-checkboxes .custom-control {\n    margin-left: 1rem; }\n\n:host-context(.nb-theme-default) .demo-checkboxes {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-default) .demo-radio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-default) .demo-disabled-checkbox-radio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-default) .demo-checkboxes-radio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n\n:host-context(.nb-theme-default) .demo-rating {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n:host-context(.nb-theme-default) .star {\n  font-size: 1.5rem;\n  color: #a4abb3; }\n\n:host-context(.nb-theme-default) .filled {\n  color: #a4abb3; }\n\n:host-context(.nb-theme-default) .rating-header {\n  line-height: 2rem;\n  font-size: 1.25rem;\n  font-family: Exo;\n  font-weight: 500;\n  color: #2a2a2a; }\n\n:host-context(.nb-theme-default) .current-rate {\n  font-size: 1.5rem;\n  padding-left: 1rem;\n  color: #2a2a2a; }\n\n:host-context(.nb-theme-default) .full-name-inputs {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n:host-context(.nb-theme-default) .input-group.has-person-icon {\n  position: relative; }\n  :host-context(.nb-theme-default) .input-group.has-person-icon .form-control {\n    padding-left: 3rem; }\n  :host-context(.nb-theme-default) .input-group.has-person-icon::before {\n    content: '\\F47D';\n    font-family: 'Ionicons';\n    font-size: 2rem;\n    position: absolute;\n    z-index: 100;\n    left: 1rem;\n    top: 0.25rem; }\n\n:host-context(.nb-theme-default) .dropdown {\n  min-width: 7rem; }\n\n:host-context(.nb-theme-default) .dropdown-menu {\n  width: auto; }\n\n:host-context(.nb-theme-default) .form-group label {\n  padding: 0 0 0.75rem; }\n\n:host-context(.nb-theme-default) ngb-rating {\n  outline: none; }\n\n:host-context(.nb-theme-default) ngb-rating i {\n  color: #0b417a; }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-default) button:not(.btn-icon) {\n    padding: 0.75rem 1rem;\n    font-size: 0.75rem; } }\n\n:host-context(.nb-theme-cosmic) nb-card-body {\n  overflow: visible; }\n\n:host-context(.nb-theme-cosmic) .input-group {\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-cosmic) .validation-checkboxes {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n  :host-context(.nb-theme-cosmic) .validation-checkboxes .custom-control {\n    margin-left: 1rem; }\n\n:host-context(.nb-theme-cosmic) .demo-checkboxes {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-cosmic) .demo-radio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-cosmic) .demo-disabled-checkbox-radio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-cosmic) .demo-checkboxes-radio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n\n:host-context(.nb-theme-cosmic) .demo-rating {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n:host-context(.nb-theme-cosmic) .star {\n  font-size: 1.5rem;\n  color: #76f8f6; }\n\n:host-context(.nb-theme-cosmic) .filled {\n  color: #76f8f6; }\n\n:host-context(.nb-theme-cosmic) .rating-header {\n  line-height: 2rem;\n  font-size: 1.25rem;\n  font-family: Exo;\n  font-weight: 500;\n  color: #ffffff; }\n\n:host-context(.nb-theme-cosmic) .current-rate {\n  font-size: 1.5rem;\n  padding-left: 1rem;\n  color: #ffffff; }\n\n:host-context(.nb-theme-cosmic) .full-name-inputs {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n:host-context(.nb-theme-cosmic) .input-group.has-person-icon {\n  position: relative; }\n  :host-context(.nb-theme-cosmic) .input-group.has-person-icon .form-control {\n    padding-left: 3rem; }\n  :host-context(.nb-theme-cosmic) .input-group.has-person-icon::before {\n    content: '\\F47D';\n    font-family: 'Ionicons';\n    font-size: 2rem;\n    position: absolute;\n    z-index: 100;\n    left: 1rem;\n    top: 0.25rem; }\n\n:host-context(.nb-theme-cosmic) .dropdown {\n  min-width: 7rem; }\n\n:host-context(.nb-theme-cosmic) .dropdown-menu {\n  width: auto; }\n\n:host-context(.nb-theme-cosmic) .form-group label {\n  padding: 0 0 0.75rem; }\n\n:host-context(.nb-theme-cosmic) ngb-rating {\n  outline: none; }\n\n:host-context(.nb-theme-cosmic) ngb-rating i {\n  color: #0b417a;\n  color: #0b417a; }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-cosmic) button:not(.btn-icon) {\n    padding: 0.75rem 1rem;\n    font-size: 0.75rem; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/subcategorias/subcategorias-agregar/subcategorias-agregar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubcategoriasAgregarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_ruta_base_ruta_base_service__ = __webpack_require__("../../../../../src/app/services/ruta-base/ruta-base.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_style_loader_angular2_toaster_toaster_css__ = __webpack_require__("../../../../style-loader/index.js!../../../../angular2-toaster/toaster.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_style_loader_angular2_toaster_toaster_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_style_loader_angular2_toaster_toaster_css__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Mis imports







var SubcategoriasAgregarComponent = /** @class */ (function () {
    function SubcategoriasAgregarComponent(toasterService, http, router, rutaService, fb) {
        this.toasterService = toasterService;
        this.http = http;
        this.router = router;
        this.rutaService = rutaService;
        this.fb = fb;
        this.position = 'toast-top-right';
        this.animationType = 'fade';
        this.title = 'HI there!';
        this.content = "I'm cool toaster!";
        this.timeout = 5000;
        this.toastsLimit = 5;
        this.type = 'default'; // 'default', 'info', 'success', 'warning', 'error'
        this.isNewestOnTop = true;
        this.isHideOnClick = true;
        this.isDuplicatesPrevented = false;
        this.isCloseButton = true;
        this.loading = false;
        this.clear = false; //puedo borrar?
        this.fileIMG = null;
        this.imgUpload = null;
        this.loadinImg = false;
        this.mouvers_user_tipo = localStorage.getItem('mouvers_user_tipo');
        this.myFormAgregar = this.fb.group({
            nombre: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required]],
            ingles: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required]],
            imagen: [''],
            categoria_id: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required]]
        });
    }
    SubcategoriasAgregarComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.mouvers_user_tipo != '1') {
            localStorage.removeItem('mouvers_token');
            localStorage.removeItem('mouvers_user_id');
            localStorage.removeItem('mouvers_user_nombre');
            localStorage.removeItem('mouvers_user_tipo');
            localStorage.removeItem('mouvers_establecimiento_id');
            this.router.navigateByUrl('/pagessimples/loginf');
        }
        this.loading = true;
        this.http.get(this.rutaService.getRutaApi() + 'categorias/habilitadas?token=' + localStorage.getItem('mouvers_token'))
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            _this.categorias = _this.data.categorias;
            _this.loading = false;
        }, function (msg) {
            console.log(msg);
            console.log(msg.error.error);
            _this.loading = false;
            //token invalido/ausente o token expiro
            if (msg.status == 400 || msg.status == 401) {
                //alert(msg.error.error);
                //ir a login
                _this.showToast('warning', 'Warning!', msg.error.error);
                setTimeout(function () {
                    _this.router.navigateByUrl('/pagessimples/loginf');
                }, 1000);
            }
            else if (msg.status == 404) {
                //alert(msg.error.error);
                _this.showToast('info', 'Info!', msg.error.error);
            }
        });
    };
    SubcategoriasAgregarComponent.prototype.showToast = function (type, title, body) {
        this.config = new __WEBPACK_IMPORTED_MODULE_6_angular2_toaster__["b" /* ToasterConfig */]({
            positionClass: this.position,
            timeout: this.timeout,
            newestOnTop: this.isNewestOnTop,
            tapToDismiss: this.isHideOnClick,
            preventDuplicates: this.isDuplicatesPrevented,
            animation: this.animationType,
            limit: this.toastsLimit,
        });
        var toast = {
            type: type,
            title: title,
            body: body,
            timeout: this.timeout,
            showCloseButton: this.isCloseButton,
            bodyOutputType: __WEBPACK_IMPORTED_MODULE_6_angular2_toaster__["a" /* BodyOutputType */].TrustedHtml,
        };
        this.toasterService.popAsync(toast);
    };
    SubcategoriasAgregarComponent.prototype.crear = function () {
        var _this = this;
        console.log(this.myFormAgregar.value);
        this.loading = true;
        var datos = {
            token: localStorage.getItem('mouvers_token'),
            nombre: this.myFormAgregar.value.nombre,
            ingles: this.myFormAgregar.value.ingles,
            imagen: this.myFormAgregar.value.imagen,
            estado: 'ON',
            categoria_id: this.myFormAgregar.value.categoria_id
        };
        this.http.post(this.rutaService.getRutaApi() + 'subcategorias', datos)
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            //alert(this.data.message);
            _this.loading = false;
            _this.showToast('success', 'Success!', _this.data.message);
            _this.myFormAgregar.reset();
            _this.clearFile();
        }, function (msg) {
            console.log(msg);
            console.log(msg.error.error);
            _this.loading = false;
            //token invalido/ausente o token expiro
            if (msg.status == 400 || msg.status == 401) {
                //alert(msg.error.error);
                //ir a login
                _this.showToast('warning', 'Warning!', msg.error.error);
            }
            else {
                //alert(msg.error.error);
                _this.showToast('error', 'Erro!', msg.error.error);
            }
        });
    };
    //Carga de img---<
    SubcategoriasAgregarComponent.prototype.subirImagen = function () {
        var _this = this;
        this.loading = true;
        var formModel = this.prepareSave();
        this.http.post(this.rutaService.getRutaApi() + 'imagenes?token=' + localStorage.getItem('mouvers_token'), formModel)
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            _this.imgUpload = _this.data.imagen;
            _this.myFormAgregar.patchValue({ imagen: _this.imgUpload });
            //Solo admitimos imágenes.
            if (!_this.fileIMG.type.match('image.*')) {
                return;
            }
            var reader = new FileReader();
            reader.onload = (function (theFile) {
                return function (e) {
                    // Creamos la imagen.
                    document.getElementById("list").innerHTML = ['<img class="thumb" src="', e.target.result, '" height="160px"/>'].join('');
                };
            })(_this.fileIMG);
            reader.readAsDataURL(_this.fileIMG);
            _this.clear = true;
            _this.loading = false;
            _this.showToast('success', 'Success!', _this.data.message);
        }, function (msg) {
            console.log(msg);
            console.log(msg.error.error);
            _this.loading = false;
            //token invalido/ausente o token expiro
            if (msg.status == 400 || msg.status == 401) {
                //alert(msg.error.error);
                //ir a login
                _this.showToast('warning', 'Warning!', msg.error.error);
            }
            else {
                //alert(msg.error.error);
                _this.showToast('error', 'Erro!', msg.error.error);
            }
        });
    };
    SubcategoriasAgregarComponent.prototype.prepareSave = function () {
        var input = new FormData();
        input.append('imagen', this.fileIMG);
        input.append('carpeta', 'subcategorias');
        input.append('url_imagen', this.rutaService.getRutaImages());
        return input;
    };
    SubcategoriasAgregarComponent.prototype.onFileChange = function (event) {
        if (event.target.files.length > 0) {
            this.fileIMG = event.target.files[0];
            this.subirImagen();
        }
    };
    SubcategoriasAgregarComponent.prototype.clearFile = function () {
        this.imgUpload = null;
        this.fileInput.nativeElement.value = '';
        this.clear = false;
        this.myFormAgregar.patchValue({ imagen: null });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], SubcategoriasAgregarComponent.prototype, "fileInput", void 0);
    SubcategoriasAgregarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-subcategorias-agregar',
            styles: [__webpack_require__("../../../../../src/app/pages/subcategorias/subcategorias-agregar/subcategorias-agregar.component.scss")],
            template: __webpack_require__("../../../../../src/app/pages/subcategorias/subcategorias-agregar/subcategorias-agregar.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_angular2_toaster__["d" /* ToasterService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_ruta_base_ruta_base_service__["a" /* RutaBaseService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormBuilder"]])
    ], SubcategoriasAgregarComponent);
    return SubcategoriasAgregarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/subcategorias/subcategorias-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubcategoriasRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routedComponents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__subcategorias_component__ = __webpack_require__("../../../../../src/app/pages/subcategorias/subcategorias.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__subcategorias_ver_subcategorias_ver_component__ = __webpack_require__("../../../../../src/app/pages/subcategorias/subcategorias-ver/subcategorias-ver.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__subcategorias_agregar_subcategorias_agregar_component__ = __webpack_require__("../../../../../src/app/pages/subcategorias/subcategorias-agregar/subcategorias-agregar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__subcategorias_component__["a" /* SubcategoriasComponent */],
        children: [{
                path: 'ver',
                component: __WEBPACK_IMPORTED_MODULE_3__subcategorias_ver_subcategorias_ver_component__["a" /* SubcategoriasVerComponent */],
            }, {
                path: 'agregar',
                component: __WEBPACK_IMPORTED_MODULE_4__subcategorias_agregar_subcategorias_agregar_component__["a" /* SubcategoriasAgregarComponent */],
            }],
    }];
var SubcategoriasRoutingModule = /** @class */ (function () {
    function SubcategoriasRoutingModule() {
    }
    SubcategoriasRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */],
            ],
        })
    ], SubcategoriasRoutingModule);
    return SubcategoriasRoutingModule;
}());

var routedComponents = [
    __WEBPACK_IMPORTED_MODULE_2__subcategorias_component__["a" /* SubcategoriasComponent */],
    __WEBPACK_IMPORTED_MODULE_3__subcategorias_ver_subcategorias_ver_component__["a" /* SubcategoriasVerComponent */],
    __WEBPACK_IMPORTED_MODULE_4__subcategorias_agregar_subcategorias_agregar_component__["a" /* SubcategoriasAgregarComponent */],
];


/***/ }),

/***/ "../../../../../src/app/pages/subcategorias/subcategorias-ver/subcategorias-ver.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card *ngIf=\"!editando && mostrar\">\r\n  <nb-card-header>\r\n    <div class=\"row show-grid\">\r\n          <div class=\"col-6\">\r\n            <div>Lista de Subcategorías</div>\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <div>\r\n              <div style=\"text-align: right;\">\r\n               <strong>Buscar: </strong>\r\n               <input  type=\"text\"  id=\"inputName\" [(ngModel)]=\"inputName\" (ngModelChange)=\"FilterByName()\"/>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n  </nb-card-header>\r\n\r\n  <nb-card-body>\r\n\r\n    <table class=\"table\">\r\n      <thead>\r\n         <!-- <th style=\"text-align: center;\">ID</th> -->\r\n         <th style=\"text-align: center;\">Nombre</th>\r\n         <th style=\"text-align: center;\">Categoría</th>\r\n         <th style=\"text-align: center;\">Estado</th>\r\n         <th style=\"text-align: center;\">Acciones</th>\r\n      </thead>\r\n      <tbody>\r\n         <tr *ngFor=\"let item of items \" >\r\n            <td style=\"text-align: center; vertical-align:middle;\">{{item.nombre}}</td>\r\n            <td style=\"text-align: center; vertical-align:middle;\">{{item.categoria.nombre}}</td>\r\n            <td style=\" vertical-align:middle;\">\r\n              <div *ngIf=\"mostrarSwiches\" class=\"estado\" style=\"display:block; margin:auto\">\r\n                <label class=\"theme-switch\">\r\n                  <span class=\"light\">OFF</span>\r\n                  <div class=\"switch\">\r\n                    <input type=\"checkbox\" [disabled]=\"item.categoria.estado == 'OFF' \" [checked]=\"item.estado === 'ON'\" (change)=\"cambioSwicheSubcat(item, modal2)\" #theme>\r\n                    <span class=\"slider\"></span>\r\n                  </div>\r\n                  <span class=\"cosmic\">ON</span>\r\n                </label>\r\n              </div>\r\n            </td> \r\n            <td style=\"text-align: center; vertical-align:middle;\">\r\n              <button type=\"button\" class=\"btn btn-primary btn-icon btn-sm btn-table\" title=\"Editar\" (click)=\"aEditar(item)\">\r\n                <i class=\"nb-edit\"></i>\r\n              </button>\r\n              <button type=\"button\" class=\"btn btn-danger btn-icon btn-sm btn-table\" title=\"Eliminar\" (click)=\"open(modal1); aEliminar(item)\">\r\n                <i class=\"nb-trash\"></i>\r\n              </button>\r\n            </td>\r\n         </tr>\r\n      </tbody>\r\n    </table>\r\n      \r\n  </nb-card-body>\r\n  <nb-card-footer>\r\n    <div class=\"btn-toolbar\" role=\"toolbar\" style=\"margin: 0;\">\r\n      <div class=\"btn-group\">\r\n         <label style=\"margin-top:10px\">Página {{currentIndex}}/{{pageNumber}} </label>\r\n      </div>\r\n      <div class=\"btn-group pull-right\">\r\n         <ul class=\"pagination\" >\r\n            <li class=\"page-item\" [ngClass]=\"{'disabled': (currentIndex == 1 || pageNumber == 0)}\" ><a class=\"page-link\"  (click)=\"prevPage()\" >Atrás</a></li>\r\n               <li class=\"page-item\" *ngFor=\"let page of pagesIndex\"  [ngClass]=\"{'active': (currentIndex == page)}\">\r\n                  <a class=\"page-link\" (click)=\"setPage(page)\"  >{{page}} </a>\r\n               </li>\r\n            <li class=\"page-item\" [ngClass]=\"{'disabled': (currentIndex == pageNumber || pageNumber == 0)}\" ><a class=\"page-link\"   (click)=\"nextPage()\" >Siguiente</a></li>\r\n         </ul>\r\n      </div>\r\n    </div>  \r\n  </nb-card-footer>\r\n</nb-card>\r\n\r\n<div class=\"row\" *ngIf=\"editando\">\r\n  <div class=\"col-lg-6\" style=\"display:block; margin:auto\">\r\n    <nb-card>\r\n      <nb-card-header>Editar Subcategoría</nb-card-header>\r\n      <nb-card-body>\r\n        <form [formGroup]=\"myFormEditar\" novalidate>\r\n          <div class=\"form-group\">\r\n            <label for=\"exampleInputEmail1\">Nombre</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"exampleInputNombre\" placeholder=\"Nombre\" formControlName=\"nombre\">\r\n            <div *ngIf=\"myFormEditar.get('nombre').errors && myFormEditar.get('nombre').dirty\">\r\n              <p *ngIf=\"myFormEditar.get('nombre').hasError('required')\">Nombre es requerido</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"exampleInputEmail1\">Ingles</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"exampleInputNombre\" placeholder=\"Ingles\" formControlName=\"ingles\">\r\n            <div *ngIf=\"myFormEditar.get('ingles').errors && myFormEditar.get('ingles').dirty\">\r\n              <p *ngIf=\"myFormEditar.get('ingles').hasError('required')\">Ingles es requerido</p>\r\n            </div>\r\n          </div>\r\n          <div *ngIf=\"categorias\" class=\"form-group\">\r\n            <label for=\"exampleInputCat\">Categoría</label>\r\n            <select class=\"form-control\" id=\"exampleInputCat\" formControlName=\"categoria_id\">\r\n              <!-- <option disabled selected>Selecciona una categoría</option> -->\r\n              <option *ngFor=\"let categoria of categorias\" [value]=\"categoria.id\">{{categoria.nombre}}</option>\r\n            </select>\r\n          </div>\r\n          \r\n          <div class=\"form-group\">\r\n            <br>\r\n            <div [hidden]=\"clear\">\r\n              <label for=\"exampleInputImagen\">Imagen</label>\r\n              <input type=\"file\" name=\"imagen\" id=\"imagen\" (change)=\"onFileChange($event)\" #fileInput accept=\"image/*\">\r\n              \r\n              <br>\r\n              <br>\r\n\r\n              <p [hidden]=\"clear\" style=\"color: #c71717\"><b>Sugerencia:</b> La dimensión de la imagen no debe ser mayor a 870x370 px.</p>\r\n\r\n              <img src = \"{{objAEditar.imagen}}\" alt=\"\" height=\"160px\">\r\n            </div>\r\n              <div *ngIf=\"clear\">\r\n                <label for=\"exampleInputImagen\">Imagen</label>\r\n                <br>\r\n                <output id=\"list\"></output>\r\n                <br>\r\n                <br>\r\n                <button type=\"button\" class=\"btn btn-danger btn-tn\" (click)=\"clearFile()\">clear file</button>\r\n              </div>\r\n          </div>\r\n          \r\n\r\n          <br><br>\r\n          <label for=\"exampleInputImagen\">Productos Subyancentes</label>\r\n          <table class=\"table\">\r\n            <thead>\r\n               <!-- <th style=\"text-align: center;\">ID</th> -->\r\n               <th style=\"text-align: center;\">Servicios de los proveedores</th>\r\n            </thead>\r\n            <tbody>\r\n               <tr *ngFor=\"let item of objAEditar.productos\" >\r\n                  <td style=\"text-align: center; vertical-align:middle;\">{{item.establecimiento.nombre}}</td>\r\n               </tr>\r\n            </tbody>\r\n          </table>\r\n\r\n          <br>\r\n          <button class=\"btn btn-secondary\" (click)=\"atras()\">Cancelar</button>\r\n          <button type=\"submit\" class=\"btn btn-primary\" (click)=\"editar()\" [disabled]=\"myFormEditar.invalid\">Editar</button>\r\n        </form>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #modal1 let-c=\"close\" let-d=\"dismiss\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">Eliminar Subcategoría: </h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <p>¿Realmente desea eliminar la subcategoría {{eliminar_nombre}}?</p>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Cancelar</button>\r\n    <button type=\"button\" class=\"btn btn-danger\" (click)=\"c('Close click'); eliminar()\">Eliminar</button>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #modal2 let-c=\"close\" let-d=\"dismiss\" size=\"lg\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">Productos de la Subcategoría {{habSubcategoria.nombre}}: </h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click'); apagarSwiche()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <nb-card >\r\n      <nb-card-header>\r\n        <div class=\"row show-grid\">\r\n              <div class=\"col-6\">\r\n                <div>Lista de Productos</div>\r\n              </div>\r\n              <div class=\"col-6\">\r\n                <div>\r\n                  <div style=\"text-align: right;\">\r\n                   <strong>Buscar: </strong>\r\n                   <input  type=\"text\"  id=\"inputName2\" [(ngModel)]=\"inputName2\" (ngModelChange)=\"FilterByName2()\"/>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n      </nb-card-header>\r\n\r\n      <nb-card-body>\r\n\r\n        <table class=\"table table-striped\">\r\n          <thead>\r\n             <!-- <th style=\"text-align: center;\">ID</th> -->\r\n             <!-- <th style=\"text-align: center;\">Imagen</th> -->\r\n             <th style=\"text-align: center;\">Nombre</th>\r\n             <th style=\"text-align: center;\">Establecimiento</th>\r\n             <th style=\"text-align: center;\">Estado</th>\r\n          </thead>\r\n          <tbody>\r\n             <tr *ngFor=\"let item of items2\" >\r\n                <!-- <td style=\"text-align: center; vertical-align:middle;\"><img src = \"{{item.imagen}}\" alt=\"\" height=\"auto\" width=\"60px\"></td> -->\r\n                <td style=\"text-align: center; vertical-align:middle;\">{{item.nombre}}</td>\r\n                <td style=\"text-align: center; vertical-align:middle;\">{{item.establecimiento.nombre}}</td>\r\n                <td style=\"text-align: center; vertical-align:middle;\">\r\n                  <!-- <div class=\"estado\" style=\"display:block; margin:auto\">\r\n                    <label class=\"theme-switch\">\r\n                      <span class=\"light\">OFF</span>\r\n                      <div class=\"switch\">\r\n                        <input type=\"checkbox\" [checked]=\"item.estado === 'ON'\" (change)=\"cambioSwicheProd(item)\" #theme>\r\n                        <span class=\"slider\"></span>\r\n                      </div>\r\n                      <span class=\"cosmic\">ON</span>\r\n                    </label>\r\n                  </div> -->\r\n                  <nb-checkbox [value]=\"item.estado === 'ON'\" (change)=\"cambioSwicheProd(item)\">{{item.estado}}</nb-checkbox>\r\n                </td> \r\n                \r\n             </tr>\r\n          </tbody>\r\n        </table>\r\n          \r\n      </nb-card-body>\r\n      <nb-card-footer>\r\n        <div class=\"btn-toolbar\" role=\"toolbar\" style=\"margin: 0;\">\r\n          <div class=\"btn-group\">\r\n             <label style=\"margin-top:10px\">Página {{currentIndex2}}/{{pageNumber2}} </label>\r\n          </div>\r\n          <div class=\"btn-group pull-right\">\r\n             <ul class=\"pagination\" >\r\n                <li class=\"page-item\" [ngClass]=\"{'disabled': (currentIndex2 == 1 || pageNumber2 == 0)}\" ><a class=\"page-link\"  (click)=\"prevPage2()\" >Atrás</a></li>\r\n                   <li class=\"page-item\" *ngFor=\"let page of pagesIndex2\"  [ngClass]=\"{'active': (currentIndex2 == page)}\">\r\n                      <a class=\"page-link\" (click)=\"setPage2(page)\"  >{{page}} </a>\r\n                   </li>\r\n                <li class=\"page-item\" [ngClass]=\"{'disabled': (currentIndex2 == pageNumber2 || pageNumber2 == 0)}\" ><a class=\"page-link\"   (click)=\"nextPage2()\" >Siguiente</a></li>\r\n             </ul>\r\n          </div>\r\n        </div>  \r\n      </nb-card-footer>\r\n    </nb-card>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click'); apagarSwiche()\">Cancelar</button>\r\n    <button type=\"button\" class=\"btn btn-danger\" (click)=\"c('Close click') ; habilitarSubcat()\">Aceptar</button>\r\n  </div>\r\n</ng-template>\r\n\r\n<toaster-container [toasterconfig]=\"config\"></toaster-container>\r\n\r\n<div class=\"my-container\">\r\n    <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '4px' }\"></ngx-loading>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/subcategorias/subcategorias-ver/subcategorias-ver.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) .estado {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 50%; }\n\n:host-context(.nb-theme-default) .btn-table {\n  display: inline-block; }\n\n:host-context(.nb-theme-default) .img-table {\n  border-radius: 4px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n:host-context(.nb-theme-default) .theme-switch {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  cursor: pointer;\n  margin: 0; }\n  :host-context(.nb-theme-default) .theme-switch > span {\n    font-size: 1rem;\n    font-weight: 600;\n    transition: opacity 0.3s ease; }\n    :host-context(.nb-theme-default) .theme-switch > span.light {\n      color: #4b4b4b;\n      padding-right: 5px; }\n    :host-context(.nb-theme-default) .theme-switch > span.cosmic {\n      color: #a4abb3;\n      padding-left: 5px; }\n    :host-context(.nb-theme-default) .theme-switch > span:active {\n      opacity: 0.78; }\n\n:host-context(.nb-theme-default) .switch {\n  position: relative;\n  display: inline-block;\n  width: 4rem;\n  height: 1.75rem;\n  margin: 0; }\n  :host-context(.nb-theme-default) .switch input {\n    display: none; }\n    :host-context(.nb-theme-default) .switch input:checked + .slider::before {\n      -webkit-transform: translateX(2.25rem);\n              transform: translateX(2.25rem); }\n  :host-context(.nb-theme-default) .switch .slider {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    border-radius: 1.75rem;\n    background-color: #ebeff5; }\n  :host-context(.nb-theme-default) .switch .slider::before {\n    position: absolute;\n    content: '';\n    height: 1.75rem;\n    width: 1.75rem;\n    border-radius: 50%;\n    background-color: #0b417a;\n    transition: 0.2s;\n    box-shadow: 0 0 0.25rem 0 rgba(164, 171, 179, 0.4); }\n\n@media (max-width: 575px) {\n  :host-context(.nb-theme-default) .light, :host-context(.nb-theme-default) .cosmic {\n    display: none; } }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-default) {\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end; } }\n\n:host-context(.nb-theme-cosmic) .estado {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 50%; }\n\n:host-context(.nb-theme-cosmic) .btn-table {\n  display: inline-block; }\n\n:host-context(.nb-theme-cosmic) .img-table {\n  border-radius: 4px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n:host-context(.nb-theme-cosmic) .theme-switch {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  cursor: pointer;\n  margin: 0; }\n  :host-context(.nb-theme-cosmic) .theme-switch > span {\n    font-size: 1rem;\n    font-weight: 600;\n    transition: opacity 0.3s ease; }\n    :host-context(.nb-theme-cosmic) .theme-switch > span.light {\n      color: #d1d1ff;\n      padding-right: 5px; }\n    :host-context(.nb-theme-cosmic) .theme-switch > span.cosmic {\n      color: #76f8f6;\n      padding-left: 5px; }\n    :host-context(.nb-theme-cosmic) .theme-switch > span.light {\n      color: #76f8f6; }\n    :host-context(.nb-theme-cosmic) .theme-switch > span.cosmic {\n      color: #ffffff; }\n    :host-context(.nb-theme-cosmic) .theme-switch > span:active {\n      opacity: 0.78; }\n\n:host-context(.nb-theme-cosmic) .switch {\n  position: relative;\n  display: inline-block;\n  width: 4rem;\n  height: 1.75rem;\n  margin: 0; }\n  :host-context(.nb-theme-cosmic) .switch input {\n    display: none; }\n    :host-context(.nb-theme-cosmic) .switch input:checked + .slider::before {\n      -webkit-transform: translateX(2.25rem);\n              transform: translateX(2.25rem); }\n  :host-context(.nb-theme-cosmic) .switch .slider {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    border-radius: 1.75rem;\n    background-color: #2f296b; }\n  :host-context(.nb-theme-cosmic) .switch .slider::before {\n    position: absolute;\n    content: '';\n    height: 1.75rem;\n    width: 1.75rem;\n    border-radius: 50%;\n    background-color: #0b417a;\n    transition: 0.2s;\n    box-shadow: 0 0 0.25rem 0 rgba(118, 248, 246, 0.4);\n    background-image: linear-gradient(to right, #0b1c7a, #0b417a); }\n\n@media (max-width: 575px) {\n  :host-context(.nb-theme-cosmic) .light, :host-context(.nb-theme-cosmic) .cosmic {\n    display: none; } }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-cosmic) {\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/subcategorias/subcategorias-ver/subcategorias-ver.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubcategoriasVerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_ruta_base_ruta_base_service__ = __webpack_require__("../../../../../src/app/services/ruta-base/ruta-base.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_style_loader_angular2_toaster_toaster_css__ = __webpack_require__("../../../../style-loader/index.js!../../../../angular2-toaster/toaster.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_style_loader_angular2_toaster_toaster_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_style_loader_angular2_toaster_toaster_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//Mis imports








var SubcategoriasVerComponent = /** @class */ (function () {
    function SubcategoriasVerComponent(modalService, toasterService, http, router, rutaService, fb) {
        this.modalService = modalService;
        this.toasterService = toasterService;
        this.http = http;
        this.router = router;
        this.rutaService = rutaService;
        this.fb = fb;
        this.position = 'toast-top-right';
        this.animationType = 'fade';
        this.title = 'HI there!';
        this.content = "I'm cool toaster!";
        this.timeout = 5000;
        this.toastsLimit = 5;
        this.type = 'default'; // 'default', 'info', 'success', 'warning', 'error'
        this.isNewestOnTop = true;
        this.isHideOnClick = true;
        this.isDuplicatesPrevented = false;
        this.isCloseButton = true;
        this.loading = false;
        this.editando = false;
        this.agregando = false;
        this.mostrar = true;
        this.mostrarSwiches = true;
        this.admin = false;
        this.clear = false; //puedo borrar?
        this.fileIMG = null;
        this.imgUpload = null;
        this.loadinImg = false;
        this.mouvers_user_tipo = localStorage.getItem('mouvers_user_tipo');
        this.pages = 4;
        this.pageSize = 5;
        this.pageNumber = 0;
        this.currentIndex = 1;
        this.pageStart = 1;
        this.inputName = '';
        this.pages2 = 4;
        this.pageSize2 = 5;
        this.pageNumber2 = 0;
        this.currentIndex2 = 1;
        this.pageStart2 = 1;
        this.inputName2 = '';
        this.myFormEditar = this.fb.group({
            id: [''],
            nombre: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required]],
            ingles: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required]],
            imagen: [''],
            categoria_id: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required]]
        });
    }
    SubcategoriasVerComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.mouvers_user_tipo != '1') {
            localStorage.removeItem('mouvers_token');
            localStorage.removeItem('mouvers_user_id');
            localStorage.removeItem('mouvers_user_nombre');
            localStorage.removeItem('mouvers_user_tipo');
            localStorage.removeItem('mouvers_establecimiento_id');
            this.router.navigateByUrl('/pagessimples/loginf');
        }
        this.loading = true;
        this.http.get(this.rutaService.getRutaApi() + 'subcategorias/categoria?token=' + localStorage.getItem('mouvers_token'))
            .toPromise()
            .then(function (data) {
            _this.getCategorias();
            console.log(data);
            _this.data = data;
            _this.productList = _this.data.subcategorias;
            _this.productList = _this.productList.sort(function (a, b) {
                if (a.nombre < b.nombre) {
                    return -1;
                }
                if (a.nombre > b.nombre) {
                    return 1;
                }
                return 0;
            });
            _this.filteredItems = _this.productList;
            console.log(_this.productList);
            _this.init();
            _this.loading = false;
        }, function (msg) {
            console.log(msg);
            console.log(msg.error.error);
            _this.loading = false;
            //token invalido/ausente o token expiro
            if (msg.status == 400 || msg.status == 401) {
                //alert(msg.error.error);
                _this.showToast('warning', 'Warning!', msg.error.error);
                _this.mostrar = false;
                setTimeout(function () {
                    _this.router.navigateByUrl('/pagessimples/loginf');
                }, 1000);
            }
            else if (msg.status == 404) {
                //alert(msg.error.error);
                _this.showToast('info', 'Info!', msg.error.error);
            }
        });
    };
    SubcategoriasVerComponent.prototype.showToast = function (type, title, body) {
        this.config = new __WEBPACK_IMPORTED_MODULE_6_angular2_toaster__["b" /* ToasterConfig */]({
            positionClass: this.position,
            timeout: this.timeout,
            newestOnTop: this.isNewestOnTop,
            tapToDismiss: this.isHideOnClick,
            preventDuplicates: this.isDuplicatesPrevented,
            animation: this.animationType,
            limit: this.toastsLimit,
        });
        var toast = {
            type: type,
            title: title,
            body: body,
            timeout: this.timeout,
            showCloseButton: this.isCloseButton,
            bodyOutputType: __WEBPACK_IMPORTED_MODULE_6_angular2_toaster__["a" /* BodyOutputType */].TrustedHtml,
        };
        this.toasterService.popAsync(toast);
    };
    //Abrir modal por defecto
    SubcategoriasVerComponent.prototype.open = function (modal) {
        this.modalService.open(modal);
    };
    //Abrir modal larga
    SubcategoriasVerComponent.prototype.open2 = function (modal) {
        this.modalService.open(modal, { size: 'lg', backdrop: 'static', container: 'nb-layout', keyboard: false });
    };
    SubcategoriasVerComponent.prototype.getCategorias = function () {
        var _this = this;
        this.http.get(this.rutaService.getRutaApi() + 'categorias/habilitadas?token=' + localStorage.getItem('mouvers_token'))
            .toPromise()
            .then(function (data) {
            //console.log(data);
            _this.data = data;
            _this.categorias = _this.data.categorias;
        }, function (msg) {
            //console.log(msg);
            console.log(msg.error.error);
            //token invalido/ausente o token expiro
            if (msg.status == 400 || msg.status == 401) {
                //alert(msg.error.error);
                //ir a login
                _this.showToast('warning', 'Warning!', msg.error.error);
                setTimeout(function () {
                    _this.router.navigateByUrl('/pagessimples/loginf');
                }, 1000);
            }
            else if (msg.status == 404) {
                //alert(msg.error.error);
                _this.showToast('info', 'Info!', msg.error.error);
            }
        });
    };
    SubcategoriasVerComponent.prototype.atras = function () {
        this.editando = false;
        this.objAEditar = null;
        //console.log(this.objAEditar);
        //this.uploadFile = null;
        this.myFormEditar.reset();
        this.clearFile();
    };
    SubcategoriasVerComponent.prototype.aEditar = function (obj) {
        this.editando = true;
        this.objAEditar = Object.assign({}, obj);
        console.log(this.objAEditar);
        this.myFormEditar.patchValue({ id: this.objAEditar.id });
        this.myFormEditar.patchValue({ nombre: this.objAEditar.nombre });
        this.myFormEditar.patchValue({ ingles: this.objAEditar.ingles });
        this.myFormEditar.patchValue({ imagen: this.objAEditar.imagen });
        this.myFormEditar.patchValue({ categoria_id: this.objAEditar.categoria_id });
    };
    SubcategoriasVerComponent.prototype.editar = function () {
        var _this = this;
        this.loading = true;
        var imgAux;
        if (this.imgUpload) {
            imgAux = this.imgUpload;
        }
        else {
            imgAux = this.myFormEditar.value.imagen;
        }
        var datos = {
            token: localStorage.getItem('mouvers_token'),
            nombre: this.myFormEditar.value.nombre,
            ingles: this.myFormEditar.value.ingles,
            imagen: imgAux,
            categoria_id: this.myFormEditar.value.categoria_id
        };
        this.http.put(this.rutaService.getRutaApi() + 'subcategorias/' + this.myFormEditar.value.id, datos)
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            for (var i = 0; i < _this.productList.length; ++i) {
                if (_this.productList[i].id == _this.myFormEditar.value.id) {
                    _this.productList[i].nombre = _this.myFormEditar.value.nombre;
                    _this.productList[i].ingles = _this.myFormEditar.value.ingles;
                    _this.productList[i].imagen = imgAux;
                    _this.productList[i].categoria_id = _this.myFormEditar.value.categoria_id;
                    if (_this.categorias) {
                        for (var j = 0; j < _this.categorias.length; ++j) {
                            if (_this.myFormEditar.value.categoria_id == _this.categorias[j].id) {
                                _this.productList[i].categoria.id = _this.categorias[j].id;
                                _this.productList[i].categoria.nombre = _this.categorias[j].nombre;
                                _this.productList[i].categoria.ingles = _this.categorias[j].ingles;
                                _this.productList[i].categoria.estado = _this.categorias[j].estado;
                            }
                        }
                    }
                }
            }
            _this.filteredItems = _this.productList;
            _this.init();
            //console.log(this.productList);
            //alert(this.data.message);
            _this.loading = false;
            _this.editando = false;
            _this.clearFile();
            _this.showToast('success', 'Success!', _this.data.message);
        }, function (msg) {
            console.log(msg);
            console.log(msg.error.error);
            _this.loading = false;
            //token invalido/ausente o token expiro
            if (msg.status == 400 || msg.status == 401) {
                //alert(msg.error.error);
                //ir a login
                _this.editando = true;
                _this.showToast('warning', 'Warning!', msg.error.error);
            }
            else {
                //alert(msg.error.error);
                _this.editando = true;
                _this.showToast('error', 'Erro!', msg.error.error);
            }
        });
    };
    //Carga de img---<
    SubcategoriasVerComponent.prototype.subirImagen = function () {
        var _this = this;
        this.loading = true;
        var formModel = this.prepareSave();
        this.http.post(this.rutaService.getRutaApi() + 'imagenes?token=' + localStorage.getItem('mouvers_token'), formModel)
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            _this.imgUpload = _this.data.imagen;
            //Solo admitimos imágenes.
            if (!_this.fileIMG.type.match('image.*')) {
                return;
            }
            var reader = new FileReader();
            reader.onload = (function (theFile) {
                return function (e) {
                    // Creamos la imagen.
                    document.getElementById("list").innerHTML = ['<img class="thumb" src="', e.target.result, '" height="160px"/>'].join('');
                };
            })(_this.fileIMG);
            reader.readAsDataURL(_this.fileIMG);
            _this.clear = true;
            _this.loading = false;
            _this.showToast('success', 'Success!', _this.data.message);
        }, function (msg) {
            console.log(msg);
            console.log(msg.error.error);
            _this.loading = false;
            //token invalido/ausente o token expiro
            if (msg.status == 400 || msg.status == 401) {
                //alert(msg.error.error);
                //ir a login
                _this.showToast('warning', 'Warning!', msg.error.error);
            }
            else {
                //alert(msg.error.error);
                _this.showToast('error', 'Erro!', msg.error.error);
            }
        });
    };
    SubcategoriasVerComponent.prototype.prepareSave = function () {
        var input = new FormData();
        input.append('imagen', this.fileIMG);
        input.append('carpeta', 'subcategorias');
        input.append('url_imagen', this.rutaService.getRutaImages());
        return input;
    };
    SubcategoriasVerComponent.prototype.onFileChange = function (event) {
        if (event.target.files.length > 0) {
            this.fileIMG = event.target.files[0];
            this.subirImagen();
        }
    };
    SubcategoriasVerComponent.prototype.clearFile = function () {
        this.imgUpload = null;
        this.fileInput.nativeElement.value = '';
        this.clear = false;
    };
    //Carga de img--->
    SubcategoriasVerComponent.prototype.aEliminar = function (obj) {
        this.objAEliminar = obj;
        //console.log(this.objAEliminar);
        this.eliminar_id = this.objAEliminar.id;
        this.eliminar_nombre = this.objAEliminar.nombre;
    };
    SubcategoriasVerComponent.prototype.eliminar = function () {
        var _this = this;
        console.log(this.objAEliminar);
        this.loading = true;
        var datos = {
            token: localStorage.getItem('mouvers_token')
        };
        this.http.delete(this.rutaService.getRutaApi() + 'subcategorias/' + this.eliminar_id + '?token=' + localStorage.getItem('mouvers_token'))
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            var aux = _this.productList;
            _this.productList = [];
            for (var i = 0; i < aux.length; ++i) {
                if (aux[i].id != _this.eliminar_id) {
                    _this.productList.push(aux[i]);
                }
            }
            _this.filteredItems = _this.productList;
            _this.init();
            //console.log(this.productList);
            //alert(this.data.message);
            _this.loading = false;
            _this.showToast('success', 'Success!', _this.data.message);
        }, function (msg) {
            console.log(msg);
            console.log(msg.error.error);
            _this.loading = false;
            //token invalido/ausente o token expiro
            if (msg.status == 400 || msg.status == 401) {
                //alert(msg.error.error);
                //ir a login
                _this.showToast('warning', 'Warning!', msg.error.error);
            }
            else if (msg.status == 404 || msg.status == 409) {
                //alert(msg.error.error);
                _this.showToast('error', 'Erro!', msg.error.error);
            }
        });
    };
    SubcategoriasVerComponent.prototype.cambioSwicheSubcat = function (obj, modal2) {
        //console.log(obj.estado);
        this.subcatSelecAux = obj;
        if (obj.estado == 'ON') {
            //Apagando subcategoria
            this.cambiarEstado(obj);
        }
        else {
            //Encendiendo subcategoria
            this.cargarProductos(obj, modal2);
        }
    };
    //Para la subcategoria
    SubcategoriasVerComponent.prototype.cambiarEstado = function (obj) {
        var _this = this;
        var v_estado;
        if (obj.estado == 'ON') {
            //obj.estado = 'OFF';
            v_estado = 'OFF';
        }
        else {
            //obj.estado = 'ON';
            v_estado = 'ON';
        }
        var datos = {
            token: localStorage.getItem('mouvers_token'),
            estado: v_estado
        };
        this.http.put(this.rutaService.getRutaApi() + 'subcategorias/' + obj.id, datos)
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            _this.showToast('success', 'Success!', _this.data.message);
            obj.estado = v_estado;
        }, function (msg) {
            console.log(msg);
            console.log(msg.error.error);
            //Regresar el switch en caso de error
            if (v_estado == 'ON') {
                //obj.estado = 'OFF';
                obj.estado = 'OFF';
            }
            else {
                //obj.estado = 'ON';
                obj.estado = 'ON';
            }
            //token invalido/ausente o token expiro
            if (msg.status == 400 || msg.status == 401) {
                //alert(msg.error.error);
                //ir a login
                _this.showToast('warning', 'Warning!', msg.error.error);
            }
            else {
                //alert(msg.error.error);
                _this.showToast('error', 'Erro!', msg.error.error);
            }
        });
    };
    SubcategoriasVerComponent.prototype.cargarProductos = function (obj, modal2) {
        var _this = this;
        this.loading = true;
        this.http.get(this.rutaService.getRutaApi() + 'subcategorias/' + obj.id + '/productos?token=' + localStorage.getItem('mouvers_token'))
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            _this.productList2 = _this.data.productos;
            _this.filteredItems2 = _this.productList2;
            //console.log(this.productList2);
            _this.init2();
            _this.loading = false;
            if (_this.productList2.length == 0) {
                //alert('La subcategoria no tiene productos');
                //Se cambia solo el estado de la subcategoria
                _this.cambiarEstado(obj);
            }
            else {
                //alert('La subcategoria tiene '+this.productList2.length+' productos');
                //Se muestra la modal para elgir las productos q se quieren habilitar junto con la subcategoria
                _this.habSubcategoria = obj;
                _this.open2(modal2);
                _this.mostrarSwiches = false;
            }
        }, function (msg) {
            console.log(msg);
            console.log(msg.error.error);
            _this.loading = false;
            //token invalido/ausente o token expiro
            if (msg.status == 400 || msg.status == 401) {
                //alert(msg.error.error);
                //ir a login
                _this.showToast('warning', 'Warning!', msg.error.error);
            }
            else {
                //alert(msg.error.error);
                _this.showToast('error', 'Erro!', msg.error.error);
            }
        });
    };
    SubcategoriasVerComponent.prototype.apagarSwiche = function () {
        this.mostrarSwiches = true;
    };
    SubcategoriasVerComponent.prototype.cambioSwicheProd = function (objProd) {
        if (objProd.estado == 'ON') {
            objProd.estado = 'OFF';
        }
        else {
            objProd.estado = 'ON';
        }
    };
    SubcategoriasVerComponent.prototype.habilitarSubcat = function () {
        var _this = this;
        this.mostrarSwiches = true;
        this.loading = true;
        setTimeout(function () {
            var datos = {
                token: localStorage.getItem('mouvers_token'),
                estado: 'ON',
                productos: JSON.stringify(_this.productList2)
                //productos: JSON.stringify(auxProductos)
                //productos: this.productos
                //productos: JSON.stringify(this.productos)
                //productos: '[{"id":1,"cantidad":3,"estado":"ON"},{"id":3,"cantidad":3,"estado":"OFF"}]'
            };
            _this.http.put(_this.rutaService.getRutaApi() + 'subcategorias/' + _this.habSubcategoria.id, datos)
                .toPromise()
                .then(function (data) {
                console.log(data);
                _this.data = data;
                _this.habSubcategoria.estado = 'ON';
                _this.loading = false;
                _this.showToast('success', 'Success!', _this.data.message);
            }, function (msg) {
                console.log(msg);
                console.log(msg.error.error);
                _this.loading = false;
                //token invalido/ausente o token expiro
                if (msg.status == 400 || msg.status == 401) {
                    //alert(msg.error.error);
                    //ir a login
                    _this.showToast('warning', 'Warning!', msg.error.error);
                }
                else {
                    //alert(msg.error.error);
                    _this.showToast('error', 'Erro!', msg.error.error);
                }
            });
        }, 300);
    };
    SubcategoriasVerComponent.prototype.init = function () {
        this.currentIndex = 1;
        this.pageStart = 1;
        this.pages = 4;
        this.pageNumber = parseInt("" + (this.filteredItems.length / this.pageSize));
        if (this.filteredItems.length % this.pageSize != 0) {
            this.pageNumber++;
        }
        if (this.pageNumber < this.pages) {
            this.pages = this.pageNumber;
        }
        this.refreshItems();
        console.log("this.pageNumber :  " + this.pageNumber);
    };
    SubcategoriasVerComponent.prototype.FilterByName = function () {
        this.filteredItems = [];
        if (this.inputName != "") {
            for (var i = 0; i < this.productList.length; ++i) {
                if (this.productList[i].nombre.toUpperCase().indexOf(this.inputName.toUpperCase()) >= 0) {
                    this.filteredItems.push(this.productList[i]);
                }
                else if (this.productList[i].categoria.nombre.toUpperCase().indexOf(this.inputName.toUpperCase()) >= 0) {
                    this.filteredItems.push(this.productList[i]);
                }
            }
        }
        else {
            this.filteredItems = this.productList;
        }
        console.log(this.filteredItems);
        this.init();
    };
    SubcategoriasVerComponent.prototype.fillArray = function () {
        var obj = new Array();
        for (var index = this.pageStart; index < this.pageStart + this.pages; index++) {
            obj.push(index);
        }
        return obj;
    };
    SubcategoriasVerComponent.prototype.refreshItems = function () {
        this.items = this.filteredItems.slice((this.currentIndex - 1) * this.pageSize, (this.currentIndex) * this.pageSize);
        this.pagesIndex = this.fillArray();
    };
    SubcategoriasVerComponent.prototype.prevPage = function () {
        if (this.currentIndex > 1) {
            this.currentIndex--;
        }
        if (this.currentIndex < this.pageStart) {
            this.pageStart = this.currentIndex;
        }
        this.refreshItems();
    };
    SubcategoriasVerComponent.prototype.nextPage = function () {
        if (this.currentIndex < this.pageNumber) {
            this.currentIndex++;
        }
        if (this.currentIndex >= (this.pageStart + this.pages)) {
            this.pageStart = this.currentIndex - this.pages + 1;
        }
        this.refreshItems();
    };
    SubcategoriasVerComponent.prototype.setPage = function (index) {
        this.currentIndex = index;
        this.refreshItems();
    };
    SubcategoriasVerComponent.prototype.init2 = function () {
        this.currentIndex2 = 1;
        this.pageStart2 = 1;
        this.pages2 = 4;
        this.pageNumber2 = parseInt("" + (this.filteredItems2.length / this.pageSize2));
        if (this.filteredItems2.length % this.pageSize2 != 0) {
            this.pageNumber2++;
        }
        if (this.pageNumber2 < this.pages2) {
            this.pages2 = this.pageNumber2;
        }
        this.refreshItems2();
        console.log("this.pageNumber2 :  " + this.pageNumber2);
    };
    SubcategoriasVerComponent.prototype.FilterByName2 = function () {
        this.filteredItems2 = [];
        if (this.inputName2 != "") {
            for (var i = 0; i < this.productList2.length; ++i) {
                if (this.productList2[i].nombre.toUpperCase().indexOf(this.inputName2.toUpperCase()) >= 0) {
                    this.filteredItems2.push(this.productList2[i]);
                }
            }
        }
        else {
            this.filteredItems2 = this.productList2;
        }
        console.log(this.filteredItems2);
        this.init2();
    };
    SubcategoriasVerComponent.prototype.fillArray2 = function () {
        var obj = new Array();
        for (var index = this.pageStart2; index < this.pageStart2 + this.pages2; index++) {
            obj.push(index);
        }
        return obj;
    };
    SubcategoriasVerComponent.prototype.refreshItems2 = function () {
        this.items2 = this.filteredItems2.slice((this.currentIndex2 - 1) * this.pageSize2, (this.currentIndex2) * this.pageSize2);
        this.pagesIndex2 = this.fillArray2();
    };
    SubcategoriasVerComponent.prototype.prevPage2 = function () {
        if (this.currentIndex2 > 1) {
            this.currentIndex2--;
        }
        if (this.currentIndex2 < this.pageStart2) {
            this.pageStart2 = this.currentIndex2;
        }
        this.refreshItems2();
    };
    SubcategoriasVerComponent.prototype.nextPage2 = function () {
        if (this.currentIndex2 < this.pageNumber2) {
            this.currentIndex2++;
        }
        if (this.currentIndex2 >= (this.pageStart2 + this.pages2)) {
            this.pageStart2 = this.currentIndex2 - this.pages2 + 1;
        }
        this.refreshItems2();
    };
    SubcategoriasVerComponent.prototype.setPage2 = function (index) {
        this.currentIndex2 = index;
        this.refreshItems2();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], SubcategoriasVerComponent.prototype, "fileInput", void 0);
    SubcategoriasVerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-ver-subcat',
            template: __webpack_require__("../../../../../src/app/pages/subcategorias/subcategorias-ver/subcategorias-ver.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/subcategorias/subcategorias-ver/subcategorias-ver.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */],
            __WEBPACK_IMPORTED_MODULE_6_angular2_toaster__["d" /* ToasterService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_ruta_base_ruta_base_service__["a" /* RutaBaseService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormBuilder"]])
    ], SubcategoriasVerComponent);
    return SubcategoriasVerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/subcategorias/subcategorias.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubcategoriasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SubcategoriasComponent = /** @class */ (function () {
    function SubcategoriasComponent() {
    }
    SubcategoriasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-cat-elements',
            template: "\n    <router-outlet></router-outlet>\n  ",
        })
    ], SubcategoriasComponent);
    return SubcategoriasComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/subcategorias/subcategorias.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubcategoriasModule", function() { return SubcategoriasModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme_theme_module__ = __webpack_require__("../../../../../src/app/@theme/theme.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__subcategorias_routing_module__ = __webpack_require__("../../../../../src/app/pages/subcategorias/subcategorias-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_loading__ = __webpack_require__("../../../../ngx-loading/ngx-loading/ngx-loading.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//Mis imports


//import { Ng2UploaderModule } from 'ng2-uploader';
var SubcategoriasModule = /** @class */ (function () {
    function SubcategoriasModule() {
    }
    SubcategoriasModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                //Ng2UploaderModule,
                __WEBPACK_IMPORTED_MODULE_4_angular2_toaster__["c" /* ToasterModule */],
                __WEBPACK_IMPORTED_MODULE_1__theme_theme_module__["a" /* ThemeModule */],
                __WEBPACK_IMPORTED_MODULE_2__subcategorias_routing_module__["a" /* SubcategoriasRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3_ngx_loading__["b" /* LoadingModule */].forRoot({
                    animationType: __WEBPACK_IMPORTED_MODULE_3_ngx_loading__["a" /* ANIMATION_TYPES */].chasingDots,
                    backdropBackgroundColour: 'rgba(0,0,0,0.5)',
                    backdropBorderRadius: '4px',
                    primaryColour: '#ffffff',
                    secondaryColour: '#ffffff',
                    tertiaryColour: '#ffffff',
                    fullScreenBackdrop: true
                })
            ],
            declarations: __WEBPACK_IMPORTED_MODULE_2__subcategorias_routing_module__["b" /* routedComponents */].slice(),
            providers: [],
        })
    ], SubcategoriasModule);
    return SubcategoriasModule;
}());



/***/ })

});
//# sourceMappingURL=subcategorias.module.chunk.js.map