webpackJsonp(["super-ciudades.module"],{

/***/ "../../../../../src/app/pages/super-ciudades/super-ciudades-agregar/super-ciudades-agregar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-lg-12\" style=\"display:block; margin:auto\">\r\n    <nb-card>\r\n      <nb-card-header>Registro de Nueva Ciudad</nb-card-header>\r\n      <nb-card-body>\r\n\r\n        <!-- <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n              <input placeholder=\"Buscar dirección por google maps...\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" type=\"text\" class=\"form-control\" #search  onFocus=\"geolocate()\" >\r\n           </div>\r\n        </div> -->\r\n\r\n        <form [formGroup]=\"myFormAgregar\" novalidate>\r\n          <div class=\"form-group\">\r\n            <label for=\"exampleInputEmail1\">Nombre</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"exampleInputNombre\" placeholder=\"Nombre\" formControlName=\"nombre\">\r\n            <div *ngIf=\"myFormAgregar.get('nombre').errors && myFormAgregar.get('nombre').dirty\">\r\n              <p *ngIf=\"myFormAgregar.get('nombre').hasError('required')\">Nombre es requerido</p>\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <!-- <input placeholder=\"Buscar dirección por google maps...\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" type=\"text\" class=\"form-control\" #places [(ngModel)]=\"direccion\" > -->\r\n\r\n                <input id=\"places\" type=\"text\" name=\"search\" #places class=\"form-control\" placeholder=\"Buscar dirección por google maps...\">\r\n            </div>\r\n          </div>\r\n\r\n          <br>\r\n          <div class=\"row\">  \r\n            <div class=\"col-md-12\">\r\n                <div style=\"height: 300px;\" #map id=\"map\"></div>\r\n            </div>    \r\n          </div>\r\n\r\n          <br>\r\n          <div class=\"row\">  \r\n            <div class=\"col-md-12\" style=\"text-align: right;\">\r\n                <button class=\"btn btn-info btn-tn\" (click)=\"ressetArea()\">Reiniciar Área</button>\r\n                <button class=\"btn btn-info btn-tn\" (click)=\"addPunto()\">Agregar Punto</button>\r\n            </div>    \r\n          </div>\r\n          \r\n          <br><br>\r\n          <button type=\"submit\" class=\"btn btn-info\" (click)=\"crear()\" [disabled]=\"myFormAgregar.invalid\">Agregar</button>\r\n        </form>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </div>\r\n</div>\r\n\r\n<toaster-container [toasterconfig]=\"config\"></toaster-container>\r\n\r\n<div class=\"my-container\">\r\n    <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '4px' }\"></ngx-loading>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/super-ciudades/super-ciudades-agregar/super-ciudades-agregar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) nb-card-body {\n  overflow: visible; }\n\n:host-context(.nb-theme-default) .input-group {\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-default) .validation-checkboxes {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n  :host-context(.nb-theme-default) .validation-checkboxes .custom-control {\n    margin-left: 1rem; }\n\n:host-context(.nb-theme-default) .demo-checkboxes {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-default) .demo-radio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-default) .demo-disabled-checkbox-radio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-default) .demo-checkboxes-radio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n\n:host-context(.nb-theme-default) .demo-rating {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n:host-context(.nb-theme-default) .star {\n  font-size: 1.5rem;\n  color: #a4abb3; }\n\n:host-context(.nb-theme-default) .filled {\n  color: #a4abb3; }\n\n:host-context(.nb-theme-default) .rating-header {\n  line-height: 2rem;\n  font-size: 1.25rem;\n  font-family: Exo;\n  font-weight: 500;\n  color: #2a2a2a; }\n\n:host-context(.nb-theme-default) .current-rate {\n  font-size: 1.5rem;\n  padding-left: 1rem;\n  color: #2a2a2a; }\n\n:host-context(.nb-theme-default) .full-name-inputs {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n:host-context(.nb-theme-default) .input-group.has-person-icon {\n  position: relative; }\n  :host-context(.nb-theme-default) .input-group.has-person-icon .form-control {\n    padding-left: 3rem; }\n  :host-context(.nb-theme-default) .input-group.has-person-icon::before {\n    content: '\\F47D';\n    font-family: 'Ionicons';\n    font-size: 2rem;\n    position: absolute;\n    z-index: 100;\n    left: 1rem;\n    top: 0.25rem; }\n\n:host-context(.nb-theme-default) .dropdown {\n  min-width: 7rem; }\n\n:host-context(.nb-theme-default) .dropdown-menu {\n  width: auto; }\n\n:host-context(.nb-theme-default) .form-group label {\n  padding: 0 0 0.75rem; }\n\n:host-context(.nb-theme-default) ngb-rating {\n  outline: none; }\n\n:host-context(.nb-theme-default) ngb-rating i {\n  color: #0b417a; }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-default) button:not(.btn-icon) {\n    padding: 0.75rem 1rem;\n    font-size: 0.75rem; } }\n\n:host-context(.nb-theme-cosmic) nb-card-body {\n  overflow: visible; }\n\n:host-context(.nb-theme-cosmic) .input-group {\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-cosmic) .validation-checkboxes {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n  :host-context(.nb-theme-cosmic) .validation-checkboxes .custom-control {\n    margin-left: 1rem; }\n\n:host-context(.nb-theme-cosmic) .demo-checkboxes {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-cosmic) .demo-radio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-cosmic) .demo-disabled-checkbox-radio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-cosmic) .demo-checkboxes-radio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n\n:host-context(.nb-theme-cosmic) .demo-rating {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n:host-context(.nb-theme-cosmic) .star {\n  font-size: 1.5rem;\n  color: #76f8f6; }\n\n:host-context(.nb-theme-cosmic) .filled {\n  color: #76f8f6; }\n\n:host-context(.nb-theme-cosmic) .rating-header {\n  line-height: 2rem;\n  font-size: 1.25rem;\n  font-family: Exo;\n  font-weight: 500;\n  color: #ffffff; }\n\n:host-context(.nb-theme-cosmic) .current-rate {\n  font-size: 1.5rem;\n  padding-left: 1rem;\n  color: #ffffff; }\n\n:host-context(.nb-theme-cosmic) .full-name-inputs {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n:host-context(.nb-theme-cosmic) .input-group.has-person-icon {\n  position: relative; }\n  :host-context(.nb-theme-cosmic) .input-group.has-person-icon .form-control {\n    padding-left: 3rem; }\n  :host-context(.nb-theme-cosmic) .input-group.has-person-icon::before {\n    content: '\\F47D';\n    font-family: 'Ionicons';\n    font-size: 2rem;\n    position: absolute;\n    z-index: 100;\n    left: 1rem;\n    top: 0.25rem; }\n\n:host-context(.nb-theme-cosmic) .dropdown {\n  min-width: 7rem; }\n\n:host-context(.nb-theme-cosmic) .dropdown-menu {\n  width: auto; }\n\n:host-context(.nb-theme-cosmic) .form-group label {\n  padding: 0 0 0.75rem; }\n\n:host-context(.nb-theme-cosmic) ngb-rating {\n  outline: none; }\n\n:host-context(.nb-theme-cosmic) ngb-rating i {\n  color: #0b417a;\n  color: #0b417a; }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-cosmic) button:not(.btn-icon) {\n    padding: 0.75rem 1rem;\n    font-size: 0.75rem; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/super-ciudades/super-ciudades-agregar/super-ciudades-agregar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuperCiudadesAgregarComponent; });
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







//declare var google;
var SuperCiudadesAgregarComponent = /** @class */ (function () {
    //public directionsService = new google.maps.DirectionsService;
    //directionsService: any = null;
    function SuperCiudadesAgregarComponent(toasterService, http, router, rutaService, fb, zone) {
        this.toasterService = toasterService;
        this.http = http;
        this.router = router;
        this.rutaService = rutaService;
        this.fb = fb;
        this.zone = zone;
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
        this.myPosition = {};
        this.refresh = false;
        //loading: Loading;
        this.directionsService = null;
        this.directionsDisplay = null;
        this.geocoder = null;
        this.infowindow = null;
        this.bounds = null;
        this.bounds1 = null;
        this.waypoints = [];
        this.markers = [];
        this.inside = false;
        this.areaTriangle = [];
        this.coordenates = [];
        this.triangleCoords = [];
        this.reference = '';
        this.myFormAgregar = this.fb.group({
            nombre: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required]],
        });
        this.directionsService = new google.maps.DirectionsService();
        this.directionsDisplay = new google.maps.DirectionsRenderer({
            suppressMarkers: true,
            polylineOptions: {
                strokeColor: "#222220"
            }
        });
        this.geocoder = new google.maps.Geocoder;
        this.infowindow = new google.maps.InfoWindow;
        this.bounds = new google.maps.LatLngBounds();
        this.bounds1 = new google.maps.LatLngBounds();
    }
    SuperCiudadesAgregarComponent.prototype.ngOnInit = function () {
        if (this.mouvers_user_tipo != '0') {
            localStorage.removeItem('mouvers_token');
            localStorage.removeItem('mouvers_user_id');
            localStorage.removeItem('mouvers_user_nombre');
            localStorage.removeItem('mouvers_user_tipo');
            localStorage.removeItem('mouvers_establecimiento_id');
            // this.router.navigateByUrl('/pagessimples/loginf');
        }
        this.geolocalizar();
    };
    SuperCiudadesAgregarComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var options = {
            types: ['address'],
            componentRestrictions: { country: "uy" }
        };
        if (document.getElementById('places')) {
            var inputElement = document.getElementById('places') /*.getElementsByTagName('input')[0]*/;
            var autocomplete_1 = new google.maps.places.Autocomplete(inputElement, options);
            google.maps.event.addListener(autocomplete_1, 'place_changed', function () {
                var place = autocomplete_1.getPlace();
                var pt = new google.maps.LatLng(place.geometry.location.lat(), place.geometry.location.lng());
                for (var i = 0; i < _this.markers.length; i++) {
                    //this.markers[i].setMap(null);
                    _this.markers[i].setPosition(pt);
                }
                //let coordAux = new google.maps.LatLng(place.geometry.location.lat(), place.geometry.location.lng());  
                //this.createMarker(coordAux);
                //this.direccion = place.formatted_address;
                _this.myLatLng = {
                    lat: place.geometry.location.lat(),
                    lng: place.geometry.location.lng()
                };
                setTimeout(function () {
                    //this.createMarker(this.myLatLng);
                    _this.map.setCenter(place.geometry.location);
                    _this.map.setZoom(14);
                }, 100);
            });
        }
        ;
    };
    SuperCiudadesAgregarComponent.prototype.showToast = function (type, title, body) {
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
    SuperCiudadesAgregarComponent.prototype.crear = function () {
        var _this = this;
        if (this.triangleCoords.length == 0 || this.triangleCoords[0].coordenada.length < 3) {
            this.showToast('warning', 'Warning!', 'El área de coordenadas debe estar formada por al menos 3 puntos.');
        }
        else {
            //console.log(this.myFormAgregar.value);
            this.loading = true;
            console.log(this.triangleCoords[0].coordenada);
            var datos = {
                token: localStorage.getItem('mouvers_token'),
                nombre: this.myFormAgregar.value.nombre,
                estado: 'ON',
                costo: 0,
                coordenadas: JSON.stringify(this.triangleCoords[0].coordenada),
            };
            console.log(datos);
            this.http.post(this.rutaService.getRutaApi() + 'zonas', datos)
                .toPromise()
                .then(function (data) {
                console.log(data);
                _this.data = data;
                //alert(this.data.message);
                _this.loading = false;
                _this.showToast('success', 'Success!', _this.data.message);
                _this.myFormAgregar.reset();
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
        }
    };
    SuperCiudadesAgregarComponent.prototype.geolocalizar = function () {
        var _this = this;
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                console.log(position.coords.latitude);
                console.log(position.coords.longitude);
                _this.myPosition = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                _this.loadMap(_this.myPosition);
                _this.map.setZoom(14);
            });
        }
        else {
            this.myPosition = {
                lat: -34.4626456,
                lng: -57.8409687
            };
            this.loadMap(this.myPosition);
            this.map.setZoom(14);
        }
    };
    SuperCiudadesAgregarComponent.prototype.loadMap = function (position) {
        var _this = this;
        //this.loading.dismiss();
        var mapEle = document.getElementById('map');
        this.myLatLng = position;
        this.map = new google.maps.Map(mapEle, {
            center: this.myLatLng,
            zoom: 15,
            mapTypeControl: true,
            fullscreenControl: true,
            streetViewControl: true,
            zoomControl: true
        });
        //Reiniciar el area
        this.areaTriangle = [];
        for (var i = 0; i < this.triangleCoords.length; ++i) {
            this.areaTriangle.push(new google.maps.Polygon({
                paths: this.triangleCoords[i].coordenada,
                strokeColor: '#222220',
                strokeOpacity: 0.5,
                strokeWeight: 2,
                fillColor: '#222220',
                fillOpacity: 0.1
            }));
        }
        this.directionsDisplay.setMap(this.map);
        for (var j = 0; j < this.areaTriangle.length; j++) {
            this.areaTriangle[j].setMap(this.map);
        }
        google.maps.event.addListenerOnce(this.map, 'idle', function () {
            //mapEle.classList.add('show-map');
            _this.createMarker(_this.myLatLng);
        });
    };
    SuperCiudadesAgregarComponent.prototype.createMarker = function (latlng) {
        //console.log(latlng);
        var marker = new google.maps.Marker({
            position: latlng,
            map: this.map,
            draggable: true,
            //posRef: posRef,
            //icon: icon,
            title: 'Último Punto'
        });
        this.markers.push(marker);
        var that = this;
        google.maps.event.addListener(marker, 'dragend', function () {
            var end = this.getPosition();
            that.myLatLng = { lat: end.lat(), lng: end.lng() };
            //that.calculateRoute(that.Origin,end);
            console.log(that.myLatLng);
        });
    };
    SuperCiudadesAgregarComponent.prototype.addPunto = function () {
        console.log(this.myLatLng);
        if (this.triangleCoords.length == 0) {
            this.triangleCoords.push({ coordenada: [this.myLatLng] });
            this.loadMap(this.myLatLng);
        }
        else {
            if (this.triangleCoords[0].coordenada[this.triangleCoords[0].coordenada.length - 1] != this.myLatLng) {
                this.triangleCoords[0].coordenada.push(this.myLatLng);
                this.loadMap(this.myLatLng);
            }
            else {
                this.showToast('warning', 'Warning!', 'Por favor mueve el pin rojo a otra ubicación.');
            }
        }
    };
    SuperCiudadesAgregarComponent.prototype.ressetArea = function () {
        this.triangleCoords = [];
        if (this.myLatLng) {
            this.loadMap(this.myLatLng);
        }
        else {
            this.loadMap(this.myPosition);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], SuperCiudadesAgregarComponent.prototype, "fileInput", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("places"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], SuperCiudadesAgregarComponent.prototype, "places", void 0);
    SuperCiudadesAgregarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-agregar-super-ciudades',
            styles: [__webpack_require__("../../../../../src/app/pages/super-ciudades/super-ciudades-agregar/super-ciudades-agregar.component.scss")],
            template: __webpack_require__("../../../../../src/app/pages/super-ciudades/super-ciudades-agregar/super-ciudades-agregar.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_angular2_toaster__["d" /* ToasterService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_ruta_base_ruta_base_service__["a" /* RutaBaseService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]])
    ], SuperCiudadesAgregarComponent);
    return SuperCiudadesAgregarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/super-ciudades/super-ciudades-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuperCiudadesRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routedComponents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__super_ciudades_component__ = __webpack_require__("../../../../../src/app/pages/super-ciudades/super-ciudades.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__super_ciudades_ver_super_ciudades_ver_component__ = __webpack_require__("../../../../../src/app/pages/super-ciudades/super-ciudades-ver/super-ciudades-ver.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__super_ciudades_agregar_super_ciudades_agregar_component__ = __webpack_require__("../../../../../src/app/pages/super-ciudades/super-ciudades-agregar/super-ciudades-agregar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__super_ciudades_todas_super_ciudades_todas_component__ = __webpack_require__("../../../../../src/app/pages/super-ciudades/super-ciudades-todas/super-ciudades-todas.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__super_ciudades_component__["a" /* SuperCiudadesComponent */],
        children: [{
                path: 'ver',
                component: __WEBPACK_IMPORTED_MODULE_3__super_ciudades_ver_super_ciudades_ver_component__["a" /* SuperCiudadesVerComponent */],
            }, {
                path: 'agregar',
                component: __WEBPACK_IMPORTED_MODULE_4__super_ciudades_agregar_super_ciudades_agregar_component__["a" /* SuperCiudadesAgregarComponent */],
            }, {
                path: 'todas',
                component: __WEBPACK_IMPORTED_MODULE_5__super_ciudades_todas_super_ciudades_todas_component__["a" /* SuperCiudadesTodasComponent */],
            }],
    }];
var SuperCiudadesRoutingModule = /** @class */ (function () {
    function SuperCiudadesRoutingModule() {
    }
    SuperCiudadesRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */],
            ],
        })
    ], SuperCiudadesRoutingModule);
    return SuperCiudadesRoutingModule;
}());

var routedComponents = [
    __WEBPACK_IMPORTED_MODULE_2__super_ciudades_component__["a" /* SuperCiudadesComponent */],
    __WEBPACK_IMPORTED_MODULE_3__super_ciudades_ver_super_ciudades_ver_component__["a" /* SuperCiudadesVerComponent */],
    __WEBPACK_IMPORTED_MODULE_4__super_ciudades_agregar_super_ciudades_agregar_component__["a" /* SuperCiudadesAgregarComponent */],
    __WEBPACK_IMPORTED_MODULE_5__super_ciudades_todas_super_ciudades_todas_component__["a" /* SuperCiudadesTodasComponent */],
];


/***/ }),

/***/ "../../../../../src/app/pages/super-ciudades/super-ciudades-todas/super-ciudades-todas.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card [hidden]=\"editando\">\r\n  <nb-card-header>\r\n    <div class=\"row show-grid\">\r\n          <div class=\"col-6\">\r\n            <div>Zonas</div>\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <div>\r\n              <div style=\"text-align: right;\">\r\n               <strong>Buscar: </strong>\r\n               <input  type=\"text\"  id=\"inputName\" [(ngModel)]=\"inputName\" (ngModelChange)=\"FilterByName()\"/>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n  </nb-card-header>\r\n\r\n  <nb-card-body>\r\n\r\n    <table class=\"table\">\r\n      <thead>\r\n         <!-- <th style=\"text-align: center;\">ID</th> -->\r\n         <!-- <th style=\"text-align: center;\">Imagen</th> -->\r\n         <th style=\"text-align: center;\">Nombre</th>\r\n         <th style=\"text-align: center;\">Estado</th>\r\n         <th style=\"text-align: center;\">Acciones</th>\r\n      </thead>\r\n      <tbody>\r\n         <tr *ngFor=\"let item of items\" >\r\n            <!-- <td style=\"text-align: center; vertical-align:middle;\"><img src = \"{{item.imagen}}\" alt=\"\" class=\"img-table\" height=\"50px\" width=\"80px\"></td> -->\r\n            <td style=\"text-align: center; vertical-align:middle;\">{{item.nombre}}</td>\r\n            <td style=\" vertical-align:middle;\">\r\n              <div *ngIf=\"mostrarSwiches\" class=\"estado\" style=\"display:block; margin:auto\">\r\n                <label class=\"theme-switch\">\r\n                  <span class=\"light\">OFF</span>\r\n                  <div class=\"switch\">\r\n                    <input type=\"checkbox\" [checked]=\"item.estado === 'ON'\" (change)=\"cambiarEstado(item)\" #theme>\r\n                    <span class=\"slider\"></span>\r\n                  </div>\r\n                  <span class=\"cosmic\">ON</span>\r\n                </label>\r\n              </div>\r\n            </td> \r\n            <td style=\"text-align: center; vertical-align:middle;\">\r\n              <button type=\"button\" class=\"btn btn-primary btn-icon btn-sm btn-table\" title=\"Editar\" (click)=\"aEditar(item)\">\r\n                <i class=\"nb-edit\"></i>\r\n              </button>\r\n              <!-- <button type=\"button\" class=\"btn btn-danger btn-icon btn-sm btn-table\" title=\"Eliminar\" (click)=\"open(modal1); aEliminar(item)\">\r\n                <i class=\"nb-trash\"></i>\r\n              </button> -->\r\n            </td>\r\n         </tr>\r\n      </tbody>\r\n    </table>\r\n      \r\n  </nb-card-body>\r\n  <nb-card-footer>\r\n    <div class=\"btn-toolbar\" role=\"toolbar\" style=\"margin: 0;\">\r\n      <div class=\"btn-group\">\r\n         <label style=\"margin-top:10px\">Página {{currentIndex}}/{{pageNumber}} </label>\r\n      </div>\r\n      <div class=\"btn-group pull-right\">\r\n         <ul class=\"pagination\" >\r\n            <li class=\"page-item\" [ngClass]=\"{'disabled': (currentIndex == 1 || pageNumber == 0)}\" ><a class=\"page-link\"  (click)=\"prevPage()\" >Atrás</a></li>\r\n               <li class=\"page-item\" *ngFor=\"let page of pagesIndex\"  [ngClass]=\"{'active': (currentIndex == page)}\">\r\n                  <a class=\"page-link\" (click)=\"setPage(page)\"  >{{page}} </a>\r\n               </li>\r\n            <li class=\"page-item\" [ngClass]=\"{'disabled': (currentIndex == pageNumber || pageNumber == 0)}\" ><a class=\"page-link\"   (click)=\"nextPage()\" >Siguiente</a></li>\r\n         </ul>\r\n      </div>\r\n    </div>  \r\n  </nb-card-footer>\r\n</nb-card>\r\n\r\n<div class=\"row\" [hidden]=\"!editando\">\r\n  <div class=\"col-lg-12\" style=\"display:block; margin:auto\">\r\n    <nb-card>\r\n      <nb-card-header>Zonas</nb-card-header>\r\n      <nb-card-body>\r\n        <form [formGroup]=\"myFormEditar\" novalidate>\r\n      \r\n          <br>\r\n          <div class=\"row\">  \r\n            <div class=\"col-md-12\">\r\n                <div style=\"height: 300px;\" #map id=\"map\"></div>\r\n            </div>    \r\n          </div>\r\n\r\n          <br>\r\n          \r\n        </form>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #modal1 let-c=\"close\" let-d=\"dismiss\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">Eliminar Categoría: </h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <p>¿Realmente desea eliminar la categoría {{eliminar_nombre}}?</p>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Cancelar</button>\r\n    <button type=\"button\" class=\"btn btn-danger\" (click)=\"c('Close click'); eliminar()\">Eliminar</button>\r\n  </div>\r\n</ng-template>\r\n\r\n<toaster-container [toasterconfig]=\"config\"></toaster-container>\r\n\r\n<div class=\"my-container\">\r\n    <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '4px' }\"></ngx-loading>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/super-ciudades/super-ciudades-todas/super-ciudades-todas.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) .estado {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 50%; }\n\n:host-context(.nb-theme-default) .btn-table {\n  display: inline-block; }\n\n:host-context(.nb-theme-default) .img-table {\n  border-radius: 4px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n:host-context(.nb-theme-default) .theme-switch {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  cursor: pointer;\n  margin: 0; }\n  :host-context(.nb-theme-default) .theme-switch > span {\n    font-size: 1rem;\n    font-weight: 600;\n    transition: opacity 0.3s ease; }\n    :host-context(.nb-theme-default) .theme-switch > span.light {\n      color: #4b4b4b;\n      padding-right: 5px; }\n    :host-context(.nb-theme-default) .theme-switch > span.cosmic {\n      color: #a4abb3;\n      padding-left: 5px; }\n    :host-context(.nb-theme-default) .theme-switch > span:active {\n      opacity: 0.78; }\n\n:host-context(.nb-theme-default) .switch {\n  position: relative;\n  display: inline-block;\n  width: 4rem;\n  height: 1.75rem;\n  margin: 0; }\n  :host-context(.nb-theme-default) .switch input {\n    display: none; }\n    :host-context(.nb-theme-default) .switch input:checked + .slider::before {\n      -webkit-transform: translateX(2.25rem);\n              transform: translateX(2.25rem); }\n  :host-context(.nb-theme-default) .switch .slider {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    border-radius: 1.75rem;\n    background-color: #ebeff5; }\n  :host-context(.nb-theme-default) .switch .slider::before {\n    position: absolute;\n    content: '';\n    height: 1.75rem;\n    width: 1.75rem;\n    border-radius: 50%;\n    background-color: #0b417a;\n    transition: 0.2s;\n    box-shadow: 0 0 0.25rem 0 rgba(164, 171, 179, 0.4); }\n\n@media (max-width: 575px) {\n  :host-context(.nb-theme-default) .light, :host-context(.nb-theme-default) .cosmic {\n    display: none; } }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-default) {\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end; } }\n\n:host-context(.nb-theme-cosmic) .estado {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 50%; }\n\n:host-context(.nb-theme-cosmic) .btn-table {\n  display: inline-block; }\n\n:host-context(.nb-theme-cosmic) .img-table {\n  border-radius: 4px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n:host-context(.nb-theme-cosmic) .theme-switch {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  cursor: pointer;\n  margin: 0; }\n  :host-context(.nb-theme-cosmic) .theme-switch > span {\n    font-size: 1rem;\n    font-weight: 600;\n    transition: opacity 0.3s ease; }\n    :host-context(.nb-theme-cosmic) .theme-switch > span.light {\n      color: #d1d1ff;\n      padding-right: 5px; }\n    :host-context(.nb-theme-cosmic) .theme-switch > span.cosmic {\n      color: #76f8f6;\n      padding-left: 5px; }\n    :host-context(.nb-theme-cosmic) .theme-switch > span.light {\n      color: #76f8f6; }\n    :host-context(.nb-theme-cosmic) .theme-switch > span.cosmic {\n      color: #ffffff; }\n    :host-context(.nb-theme-cosmic) .theme-switch > span:active {\n      opacity: 0.78; }\n\n:host-context(.nb-theme-cosmic) .switch {\n  position: relative;\n  display: inline-block;\n  width: 4rem;\n  height: 1.75rem;\n  margin: 0; }\n  :host-context(.nb-theme-cosmic) .switch input {\n    display: none; }\n    :host-context(.nb-theme-cosmic) .switch input:checked + .slider::before {\n      -webkit-transform: translateX(2.25rem);\n              transform: translateX(2.25rem); }\n  :host-context(.nb-theme-cosmic) .switch .slider {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    border-radius: 1.75rem;\n    background-color: #2f296b; }\n  :host-context(.nb-theme-cosmic) .switch .slider::before {\n    position: absolute;\n    content: '';\n    height: 1.75rem;\n    width: 1.75rem;\n    border-radius: 50%;\n    background-color: #0b417a;\n    transition: 0.2s;\n    box-shadow: 0 0 0.25rem 0 rgba(118, 248, 246, 0.4);\n    background-image: linear-gradient(to right, #0b1c7a, #0b417a); }\n\n@media (max-width: 575px) {\n  :host-context(.nb-theme-cosmic) .light, :host-context(.nb-theme-cosmic) .cosmic {\n    display: none; } }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-cosmic) {\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/super-ciudades/super-ciudades-todas/super-ciudades-todas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuperCiudadesTodasComponent; });
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








//declare var google;
var SuperCiudadesTodasComponent = /** @class */ (function () {
    function SuperCiudadesTodasComponent(modalService, toasterService, http, router, rutaService, fb, zone) {
        this.modalService = modalService;
        this.toasterService = toasterService;
        this.http = http;
        this.router = router;
        this.rutaService = rutaService;
        this.fb = fb;
        this.zone = zone;
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
        this.editando = true;
        this.agregando = false;
        this.mostrar = true;
        this.mostrarSwiches = true;
        this.admin = false;
        this.clear = false; //puedo borrar?
        this.fileIMG = null;
        this.imgUpload = null;
        this.loadinImg = false;
        this.mouvers_user_tipo = localStorage.getItem('mouvers_user_tipo');
        this.myPosition = {};
        this.refresh = false;
        //loading: Loading;
        this.directionsService = null;
        this.directionsDisplay = null;
        this.geocoder = null;
        this.infowindow = null;
        this.bounds = null;
        this.bounds1 = null;
        this.waypoints = [];
        this.markers = [];
        this.inside = false;
        this.areaTriangle = [];
        this.coordenates = [];
        this.triangleCoords = [];
        this.reference = '';
        //public directionsService = new google.maps.DirectionsService;
        //directionsService: any = null;
        this.ciudad_id = null;
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
        });
        this.directionsService = new google.maps.DirectionsService();
        this.directionsDisplay = new google.maps.DirectionsRenderer({
            suppressMarkers: true,
            polylineOptions: {
                strokeColor: "#222220"
            }
        });
        this.geocoder = new google.maps.Geocoder;
        this.infowindow = new google.maps.InfoWindow;
        this.bounds = new google.maps.LatLngBounds();
        this.bounds1 = new google.maps.LatLngBounds();
    }
    SuperCiudadesTodasComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.mouvers_user_tipo != '0') {
            localStorage.removeItem('mouvers_token');
            localStorage.removeItem('mouvers_user_id');
            localStorage.removeItem('mouvers_user_nombre');
            localStorage.removeItem('mouvers_user_tipo');
            localStorage.removeItem('mouvers_establecimiento_id');
            // this.router.navigateByUrl('/pagessimples/loginf');
        }
        this.loading = true;
        this.http.get(this.rutaService.getRutaApi() + 'zonas?token=' + localStorage.getItem('mouvers_token'))
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            _this.productList = _this.data.coordenadas;
            _this.filteredItems = _this.productList;
            //console.log(this.productList);
            _this.init();
            _this.loading = false;
            _this.ressetArea();
            /*setTimeout(()=>{
              for (var i = 0; i < this.productList.length; ++i) {
                console.log(this.productList[i]);
                this.aEditar(this.productList[i]);
              }
            },2000);*/
            /**/ var intervalId = null;
            var varCounter = 0;
            setTimeout(function () {
                intervalId = setInterval(function () {
                    console.log(varCounter);
                    console.log(_this.productList.length);
                    if (varCounter < _this.productList.length) {
                        console.log('if');
                        _this.aEditar(_this.productList[varCounter]);
                    }
                    else {
                        console.log('else');
                        clearInterval(intervalId);
                    }
                    varCounter++;
                }, 50);
            }, 100);
            setTimeout(function () {
                _this.zonas(_this.productList);
            }, 5000);
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
                    // this.router.navigateByUrl('/pagessimples/loginf');
                }, 1000);
            }
            else if (msg.status == 404) {
                //alert(msg.error.error);
                _this.showToast('info', 'Info!', msg.error.error);
            }
        });
        this.geolocalizar();
    };
    SuperCiudadesTodasComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var options = {
            types: ['address'],
            componentRestrictions: { country: "mx" }
        }; //
        if (document.getElementById('places')) {
            var inputElement = document.getElementById('places') /*.getElementsByTagName('input')[0]*/;
            var autocomplete_1 = new google.maps.places.Autocomplete(inputElement, options);
            google.maps.event.addListener(autocomplete_1, 'place_changed', function () {
                var place = autocomplete_1.getPlace();
                var pt = new google.maps.LatLng(place.geometry.location.lat(), place.geometry.location.lng());
                for (var i = 0; i < _this.markers.length; i++) {
                    //this.markers[i].setMap(null);
                    _this.markers[i].setPosition(pt);
                }
                //let coordAux = new google.maps.LatLng(place.geometry.location.lat(), place.geometry.location.lng());  
                //this.createMarker(coordAux);
                //this.direccion = place.formatted_address;
                _this.myLatLng = {
                    lat: place.geometry.location.lat(),
                    lng: place.geometry.location.lng()
                };
                setTimeout(function () {
                    //this.createMarker(this.myLatLng);
                    _this.map.setCenter(place.geometry.location);
                    _this.map.setZoom(10);
                }, 100);
            });
        }
        ;
    };
    SuperCiudadesTodasComponent.prototype.showToast = function (type, title, body) {
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
    SuperCiudadesTodasComponent.prototype.open = function (modal) {
        this.modalService.open(modal);
    };
    //Abrir modal larga
    SuperCiudadesTodasComponent.prototype.open2 = function (modal) {
        this.modalService.open(modal, { size: 'lg', backdrop: 'static', container: 'nb-layout', keyboard: false });
    };
    SuperCiudadesTodasComponent.prototype.atras = function () {
        this.editando = false;
        this.objAEditar = null;
        //console.log(this.objAEditar);
        //this.uploadFile = null;
        this.myFormEditar.reset();
    };
    SuperCiudadesTodasComponent.prototype.aEditar = function (obj) {
        console.log(obj);
        // this.ressetArea();
        this.editando = true;
        this.objAEditar = Object.assign({}, obj);
        console.log(this.objAEditar);
        this.myFormEditar.patchValue({ id: this.objAEditar.id });
        this.myFormEditar.patchValue({ nombre: this.objAEditar.nombre });
        //this.ciudad_id = this.objAEditar.id;
        //this.getCoordinates();
        //this.triangleCoords = [];
        this.objAEditar.coordenadas = JSON.parse(this.objAEditar.coordenadas);
        for (var i = 0; i < this.objAEditar.coordenadas.length; ++i) {
            this.myLatLng = this.objAEditar.coordenadas[i];
            if (this.triangleCoords.length == 0) {
                this.triangleCoords.push({ coordenada: [this.myLatLng] });
                //this.loadMap(this.myLatLng);
            }
            else {
                if (this.triangleCoords[0].coordenada[this.triangleCoords[0].coordenada.length - 1] != this.myLatLng) {
                    this.triangleCoords[0].coordenada.push(this.myLatLng);
                    // 
                }
                else {
                    this.showToast('warning', 'Warning!', 'Por favor mueve el pin rojo a otra ubicación.');
                }
            }
        }
        console.log(this.triangleCoords);
        var ultimoPunto = {
            lat: this.triangleCoords[0].coordenada[this.triangleCoords[0].coordenada.length - 1].lat,
            lng: this.triangleCoords[0].coordenada[this.triangleCoords[0].coordenada.length - 1].lng
        };
        this.loadMap(ultimoPunto);
    };
    SuperCiudadesTodasComponent.prototype.zonas = function (obj) {
        var ultimoPunto = {
            lat: -34.4626456,
            lng: -57.8409687
        };
        var mapEle = document.getElementById('map');
        this.myLatLng = ultimoPunto;
        this.map = new google.maps.Map(mapEle, {
            center: this.myLatLng,
            zoom: 10,
            mapTypeControl: true,
            fullscreenControl: true,
            streetViewControl: true,
            zoomControl: true
        });
        this.areaTriangle = [];
        this.triangleCoords = obj;
        console.log(this.triangleCoords);
        console.log('entro ZONAS');
        for (var i = 0; i < this.triangleCoords.length; ++i) {
            console.log(JSON.parse(this.triangleCoords[i].coordenadas));
            // Constr=uct the polygon.
            var color = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
            var bermudaTriangle = new google.maps.Polygon({
                paths: JSON.parse(this.triangleCoords[i].coordenadas),
                strokeColor: color,
                strokeOpacity: 0.8,
                strokeWeight: 3,
                fillColor: color,
                fillOpacity: 0.35
            });
            bermudaTriangle.setMap(this.map);
        }
    };
    SuperCiudadesTodasComponent.prototype.editar = function () {
        var _this = this;
        if (this.triangleCoords.length == 0 || this.triangleCoords[0].coordenada.length < 3) {
            this.showToast('warning', 'Warning!', 'El área de coordenadas debe estar formada por al menos 3 puntos.');
        }
        else {
            this.loading = true;
            var datos = {
                token: localStorage.getItem('mouvers_token'),
                nombre: this.myFormEditar.value.nombre,
                coordenada: JSON.stringify(this.triangleCoords[0].coordenada),
            };
            this.http.put(this.rutaService.getRutaApi() + 'zonas/' + this.myFormEditar.value.id, datos)
                .toPromise()
                .then(function (data) {
                console.log(data);
                _this.data = data;
                for (var i = 0; i < _this.productList.length; ++i) {
                    if (_this.productList[i].id == _this.myFormEditar.value.id) {
                        _this.productList[i].nombre = _this.myFormEditar.value.nombre;
                    }
                }
                _this.filteredItems = _this.productList;
                _this.init();
                //console.log(this.productList);
                //alert(this.data.message);
                _this.loading = false;
                _this.editando = false;
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
        }
    };
    SuperCiudadesTodasComponent.prototype.aEliminar = function (obj) {
        this.objAEliminar = obj;
        //console.log(this.objAEliminar);
        this.eliminar_id = this.objAEliminar.id;
        this.eliminar_nombre = this.objAEliminar.nombre;
    };
    SuperCiudadesTodasComponent.prototype.eliminar = function () {
        var _this = this;
        console.log(this.objAEliminar);
        this.loading = true;
        var datos = {
            token: localStorage.getItem('mouvers_token')
        };
        this.http.delete(this.rutaService.getRutaApi() + 'categorias/' + this.eliminar_id + '?token=' + localStorage.getItem('mouvers_token'))
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
    //Para la ciiudad
    SuperCiudadesTodasComponent.prototype.cambiarEstado = function (obj) {
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
        this.http.put(this.rutaService.getRutaApi() + 'ciudades/' + obj.id, datos)
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
    SuperCiudadesTodasComponent.prototype.geolocalizar = function () {
        var _this = this;
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                console.log(position.coords.latitude);
                console.log(position.coords.longitude);
                _this.myPosition = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                _this.myPosition = {
                    lat: '9.033249519225205',
                    lng: '-79.53652124646463'
                };
                //this.loadMap(this.myPosition);
            });
        }
        else {
            this.myPosition = {
                lat: 20.088201,
                lng: -98.364966
            };
            //this.loadMap(this.myPosition);
        }
    };
    SuperCiudadesTodasComponent.prototype.getCoordinates = function () {
        var _this = this;
        this.loading = true;
        this.http.get(this.rutaService.getRutaApi() + 'coordenadas/ciudad/' + this.ciudad_id + '?token=' + localStorage.getItem('mouvers_token'))
            .toPromise()
            .then(function (data) {
            _this.datosC = data;
            _this.triangleCoords = _this.datosC.coordenadas;
            for (var i = 0; i < _this.triangleCoords.length; ++i) {
                _this.triangleCoords[i].coordenada = JSON.parse(_this.triangleCoords[i].coordenada);
            }
            var ultimoPunto = {
                lat: _this.triangleCoords[0].coordenada[_this.triangleCoords[0].coordenada.length - 1].lat,
                lng: _this.triangleCoords[0].coordenada[_this.triangleCoords[0].coordenada.length - 1].lng
            };
            _this.loadMap(ultimoPunto);
            _this.loading = false;
        }, function (msg) {
            console.log(msg);
            console.log(msg.error.error);
            _this.loading = false;
            //token invalido/ausente o token expiro
            if (msg.status == 400 || msg.status == 401) {
                //alert(msg.error.error);
                _this.showToast('warning', 'Warning!', msg.error.error);
                //this.mostrar = false;
                setTimeout(function () {
                    //this.router.navigateByUrl('/pagessimples/loginf');
                }, 1000);
            }
            else if (msg.status == 404) {
                //alert(msg.error.error);
                _this.showToast('info', 'Info!', msg.error.error);
            }
        });
    };
    SuperCiudadesTodasComponent.prototype.loadMap = function (position) {
        var _this = this;
        //this.loading.dismiss();
        console.log('entro LOADMAP1');
        var mapEle = document.getElementById('map');
        this.myLatLng = position;
        this.map = new google.maps.Map(mapEle, {
            center: this.myLatLng,
            zoom: 10,
        });
        //Reiniciar el area
        //////this.areaTriangle = [];
        /*console.log(this.triangleCoords);
        for (var i = 0; i < this.triangleCoords.length; ++i) {
          this.areaTriangle.push(new google.maps.Polygon({
            paths: this.triangleCoords[i].coordenada,
            strokeColor: '#222220',
            strokeOpacity: 0.5,
            strokeWeight: 2,
            fillColor: '#222220',
            fillOpacity: 0.1
        }));
        }
    
        this.directionsDisplay.setMap(this.map);
        for (var j = 0; j < this.areaTriangle.length; j++) {
            this.areaTriangle[j].setMap(this.map);
        }  */
        google.maps.event.addListenerOnce(this.map, 'idle', function () {
            //mapEle.classList.add('show-map');
            _this.createMarker(_this.myLatLng);
        });
    };
    SuperCiudadesTodasComponent.prototype.createMarker = function (latlng) {
        //console.log(latlng);
        var marker = new google.maps.Marker({
            position: latlng,
            map: this.map,
            draggable: true,
            //posRef: posRef,
            //icon: icon,
            title: 'Último Punto'
        });
        this.markers.push(marker);
        var that = this;
        google.maps.event.addListener(marker, 'dragend', function () {
            var end = this.getPosition();
            that.myLatLng = { lat: end.lat(), lng: end.lng() };
            //that.calculateRoute(that.Origin,end);
            console.log(that.myLatLng);
        });
    };
    SuperCiudadesTodasComponent.prototype.addPunto = function () {
        console.log(this.myLatLng);
        if (this.triangleCoords.length == 0) {
            this.triangleCoords.push({ coordenada: [this.myLatLng] });
            this.loadMap(this.myLatLng);
        }
        else {
            if (this.triangleCoords[0].coordenada[this.triangleCoords[0].coordenada.length - 1] != this.myLatLng) {
                this.triangleCoords[0].coordenada.push(this.myLatLng);
                this.loadMap(this.myLatLng);
            }
            else {
                this.showToast('warning', 'Warning!', 'Por favor mueve el pin rojo a otra ubicación.');
            }
        }
    };
    SuperCiudadesTodasComponent.prototype.ressetArea = function () {
        this.triangleCoords = [];
        if (this.myLatLng) {
            this.loadMap(this.myLatLng);
        }
        else {
            this.loadMap(this.myPosition);
        }
    };
    SuperCiudadesTodasComponent.prototype.init = function () {
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
    SuperCiudadesTodasComponent.prototype.FilterByName = function () {
        this.filteredItems = [];
        if (this.inputName != "") {
            for (var i = 0; i < this.productList.length; ++i) {
                if (this.productList[i].nombre.toUpperCase().indexOf(this.inputName.toUpperCase()) >= 0) {
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
    SuperCiudadesTodasComponent.prototype.fillArray = function () {
        var obj = new Array();
        for (var index = this.pageStart; index < this.pageStart + this.pages; index++) {
            obj.push(index);
        }
        return obj;
    };
    SuperCiudadesTodasComponent.prototype.refreshItems = function () {
        this.items = this.filteredItems.slice((this.currentIndex - 1) * this.pageSize, (this.currentIndex) * this.pageSize);
        this.pagesIndex = this.fillArray();
    };
    SuperCiudadesTodasComponent.prototype.prevPage = function () {
        if (this.currentIndex > 1) {
            this.currentIndex--;
        }
        if (this.currentIndex < this.pageStart) {
            this.pageStart = this.currentIndex;
        }
        this.refreshItems();
    };
    SuperCiudadesTodasComponent.prototype.nextPage = function () {
        if (this.currentIndex < this.pageNumber) {
            this.currentIndex++;
        }
        if (this.currentIndex >= (this.pageStart + this.pages)) {
            this.pageStart = this.currentIndex - this.pages + 1;
        }
        this.refreshItems();
    };
    SuperCiudadesTodasComponent.prototype.setPage = function (index) {
        this.currentIndex = index;
        this.refreshItems();
    };
    SuperCiudadesTodasComponent.prototype.init2 = function () {
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
    SuperCiudadesTodasComponent.prototype.FilterByName2 = function () {
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
    SuperCiudadesTodasComponent.prototype.fillArray2 = function () {
        var obj = new Array();
        for (var index = this.pageStart2; index < this.pageStart2 + this.pages2; index++) {
            obj.push(index);
        }
        return obj;
    };
    SuperCiudadesTodasComponent.prototype.refreshItems2 = function () {
        this.items2 = this.filteredItems2.slice((this.currentIndex2 - 1) * this.pageSize2, (this.currentIndex2) * this.pageSize2);
        this.pagesIndex2 = this.fillArray2();
    };
    SuperCiudadesTodasComponent.prototype.prevPage2 = function () {
        if (this.currentIndex2 > 1) {
            this.currentIndex2--;
        }
        if (this.currentIndex2 < this.pageStart2) {
            this.pageStart2 = this.currentIndex2;
        }
        this.refreshItems2();
    };
    SuperCiudadesTodasComponent.prototype.nextPage2 = function () {
        if (this.currentIndex2 < this.pageNumber2) {
            this.currentIndex2++;
        }
        if (this.currentIndex2 >= (this.pageStart2 + this.pages2)) {
            this.pageStart2 = this.currentIndex2 - this.pages2 + 1;
        }
        this.refreshItems2();
    };
    SuperCiudadesTodasComponent.prototype.setPage2 = function (index) {
        this.currentIndex2 = index;
        this.refreshItems2();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], SuperCiudadesTodasComponent.prototype, "fileInput", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("places"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], SuperCiudadesTodasComponent.prototype, "places", void 0);
    SuperCiudadesTodasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-todas-super-ciudades',
            template: __webpack_require__("../../../../../src/app/pages/super-ciudades/super-ciudades-todas/super-ciudades-todas.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/super-ciudades/super-ciudades-todas/super-ciudades-todas.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */],
            __WEBPACK_IMPORTED_MODULE_6_angular2_toaster__["d" /* ToasterService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_ruta_base_ruta_base_service__["a" /* RutaBaseService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]])
    ], SuperCiudadesTodasComponent);
    return SuperCiudadesTodasComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/super-ciudades/super-ciudades-ver/super-ciudades-ver.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card [hidden]=\"editando\">\r\n  <nb-card-header>\r\n    <div class=\"row show-grid\">\r\n          <div class=\"col-6\">\r\n            <div>Lista de Ciudades</div>\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <div>\r\n              <div style=\"text-align: right;\">\r\n               <strong>Buscar: </strong>\r\n               <input  type=\"text\"  id=\"inputName\" [(ngModel)]=\"inputName\" (ngModelChange)=\"FilterByName()\"/>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n  </nb-card-header>\r\n\r\n  <nb-card-body>\r\n\r\n    <table class=\"table\">\r\n      <thead>\r\n         <!-- <th style=\"text-align: center;\">ID</th> -->\r\n         <!-- <th style=\"text-align: center;\">Imagen</th> -->\r\n         <th style=\"text-align: center;\">Nombre</th>\r\n         <th style=\"text-align: center;\">Estado</th>\r\n         <th style=\"text-align: center;\">Acciones</th>\r\n      </thead>\r\n      <tbody>\r\n         <tr *ngFor=\"let item of items\" >\r\n            <!-- <td style=\"text-align: center; vertical-align:middle;\"><img src = \"{{item.imagen}}\" alt=\"\" class=\"img-table\" height=\"50px\" width=\"80px\"></td> -->\r\n            <td style=\"text-align: center; vertical-align:middle;\">{{item.nombre}}</td>\r\n            <td style=\" vertical-align:middle;\">\r\n              <div *ngIf=\"mostrarSwiches\" class=\"estado\" style=\"display:block; margin:auto\">\r\n                <label class=\"theme-switch\">\r\n                  <span class=\"light\">OFF</span>\r\n                  <div class=\"switch\">\r\n                    <input type=\"checkbox\" [checked]=\"item.estado === 'ON'\" (change)=\"cambiarEstado(item)\" #theme>\r\n                    <span class=\"slider\"></span>\r\n                  </div>\r\n                  <span class=\"cosmic\">ON</span>\r\n                </label>\r\n              </div>\r\n            </td> \r\n            <td style=\"text-align: center; vertical-align:middle;\">\r\n              <button type=\"button\" class=\"btn btn-primary btn-icon btn-sm btn-table\" title=\"Editar\" (click)=\"aEditar(item)\">\r\n                <i class=\"nb-edit\"></i>\r\n              </button>\r\n              <!-- <button type=\"button\" class=\"btn btn-danger btn-icon btn-sm btn-table\" title=\"Eliminar\" (click)=\"open(modal1); aEliminar(item)\">\r\n                <i class=\"nb-trash\"></i>\r\n              </button> -->\r\n            </td>\r\n         </tr>\r\n      </tbody>\r\n    </table>\r\n      \r\n  </nb-card-body>\r\n  <nb-card-footer>\r\n    <div class=\"btn-toolbar\" role=\"toolbar\" style=\"margin: 0;\">\r\n      <div class=\"btn-group\">\r\n         <label style=\"margin-top:10px\">Página {{currentIndex}}/{{pageNumber}} </label>\r\n      </div>\r\n      <div class=\"btn-group pull-right\">\r\n         <ul class=\"pagination\" >\r\n            <li class=\"page-item\" [ngClass]=\"{'disabled': (currentIndex == 1 || pageNumber == 0)}\" ><a class=\"page-link\"  (click)=\"prevPage()\" >Atrás</a></li>\r\n               <li class=\"page-item\" *ngFor=\"let page of pagesIndex\"  [ngClass]=\"{'active': (currentIndex == page)}\">\r\n                  <a class=\"page-link\" (click)=\"setPage(page)\"  >{{page}} </a>\r\n               </li>\r\n            <li class=\"page-item\" [ngClass]=\"{'disabled': (currentIndex == pageNumber || pageNumber == 0)}\" ><a class=\"page-link\"   (click)=\"nextPage()\" >Siguiente</a></li>\r\n         </ul>\r\n      </div>\r\n    </div>  \r\n  </nb-card-footer>\r\n</nb-card>\r\n\r\n<div class=\"row\" [hidden]=\"!editando\">\r\n  <div class=\"col-lg-12\" style=\"display:block; margin:auto\">\r\n    <nb-card>\r\n      <nb-card-header>Editar Ciudad</nb-card-header>\r\n      <nb-card-body>\r\n        <form [formGroup]=\"myFormEditar\" novalidate>\r\n          <div class=\"form-group\">\r\n            <label for=\"exampleInputEmail1\">Nombre</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"exampleInputNombre\" placeholder=\"Nombre\" formControlName=\"nombre\">\r\n            <div *ngIf=\"myFormEditar.get('nombre').errors && myFormEditar.get('nombre').dirty\">\r\n              <p *ngIf=\"myFormEditar.get('nombre').hasError('required')\">Nombre es requerido</p>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <!-- <input placeholder=\"Buscar dirección por google maps...\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" type=\"text\" class=\"form-control\" #places [(ngModel)]=\"direccion\" > -->\r\n\r\n                <input id=\"places\" type=\"text\" name=\"search\" #places class=\"form-control\" placeholder=\"Buscar dirección por google maps...\">\r\n            </div>\r\n          </div>\r\n\r\n          <br>\r\n          <div class=\"row\">  \r\n            <div class=\"col-md-12\">\r\n                <div style=\"height: 300px;\" #map id=\"map\"></div>\r\n            </div>    \r\n          </div>\r\n\r\n          <br>\r\n          <div class=\"row\">  \r\n            <div class=\"col-md-12\" style=\"text-align: right;\">\r\n                <button class=\"btn btn-info btn-tn\" (click)=\"ressetArea()\">Reiniciar Área</button>\r\n                <button class=\"btn btn-info btn-tn\" (click)=\"addPunto()\">Agregar Punto</button>\r\n            </div>    \r\n          </div>\r\n          \r\n          \r\n          <br>\r\n          <button class=\"btn btn-secondary\" (click)=\"atras()\">Cancelar</button>\r\n          <button type=\"submit\" class=\"btn btn-primary\" (click)=\"editar()\" [disabled]=\"myFormEditar.invalid\">Editar</button>\r\n        </form>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #modal1 let-c=\"close\" let-d=\"dismiss\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">Eliminar Categoría: </h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <p>¿Realmente desea eliminar la categoría {{eliminar_nombre}}?</p>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Cancelar</button>\r\n    <button type=\"button\" class=\"btn btn-danger\" (click)=\"c('Close click'); eliminar()\">Eliminar</button>\r\n  </div>\r\n</ng-template>\r\n\r\n<toaster-container [toasterconfig]=\"config\"></toaster-container>\r\n\r\n<div class=\"my-container\">\r\n    <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '4px' }\"></ngx-loading>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/super-ciudades/super-ciudades-ver/super-ciudades-ver.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) .estado {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 50%; }\n\n:host-context(.nb-theme-default) .btn-table {\n  display: inline-block; }\n\n:host-context(.nb-theme-default) .img-table {\n  border-radius: 4px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n:host-context(.nb-theme-default) .theme-switch {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  cursor: pointer;\n  margin: 0; }\n  :host-context(.nb-theme-default) .theme-switch > span {\n    font-size: 1rem;\n    font-weight: 600;\n    transition: opacity 0.3s ease; }\n    :host-context(.nb-theme-default) .theme-switch > span.light {\n      color: #4b4b4b;\n      padding-right: 5px; }\n    :host-context(.nb-theme-default) .theme-switch > span.cosmic {\n      color: #a4abb3;\n      padding-left: 5px; }\n    :host-context(.nb-theme-default) .theme-switch > span:active {\n      opacity: 0.78; }\n\n:host-context(.nb-theme-default) .switch {\n  position: relative;\n  display: inline-block;\n  width: 4rem;\n  height: 1.75rem;\n  margin: 0; }\n  :host-context(.nb-theme-default) .switch input {\n    display: none; }\n    :host-context(.nb-theme-default) .switch input:checked + .slider::before {\n      -webkit-transform: translateX(2.25rem);\n              transform: translateX(2.25rem); }\n  :host-context(.nb-theme-default) .switch .slider {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    border-radius: 1.75rem;\n    background-color: #ebeff5; }\n  :host-context(.nb-theme-default) .switch .slider::before {\n    position: absolute;\n    content: '';\n    height: 1.75rem;\n    width: 1.75rem;\n    border-radius: 50%;\n    background-color: #0b417a;\n    transition: 0.2s;\n    box-shadow: 0 0 0.25rem 0 rgba(164, 171, 179, 0.4); }\n\n@media (max-width: 575px) {\n  :host-context(.nb-theme-default) .light, :host-context(.nb-theme-default) .cosmic {\n    display: none; } }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-default) {\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end; } }\n\n:host-context(.nb-theme-cosmic) .estado {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 50%; }\n\n:host-context(.nb-theme-cosmic) .btn-table {\n  display: inline-block; }\n\n:host-context(.nb-theme-cosmic) .img-table {\n  border-radius: 4px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n:host-context(.nb-theme-cosmic) .theme-switch {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  cursor: pointer;\n  margin: 0; }\n  :host-context(.nb-theme-cosmic) .theme-switch > span {\n    font-size: 1rem;\n    font-weight: 600;\n    transition: opacity 0.3s ease; }\n    :host-context(.nb-theme-cosmic) .theme-switch > span.light {\n      color: #d1d1ff;\n      padding-right: 5px; }\n    :host-context(.nb-theme-cosmic) .theme-switch > span.cosmic {\n      color: #76f8f6;\n      padding-left: 5px; }\n    :host-context(.nb-theme-cosmic) .theme-switch > span.light {\n      color: #76f8f6; }\n    :host-context(.nb-theme-cosmic) .theme-switch > span.cosmic {\n      color: #ffffff; }\n    :host-context(.nb-theme-cosmic) .theme-switch > span:active {\n      opacity: 0.78; }\n\n:host-context(.nb-theme-cosmic) .switch {\n  position: relative;\n  display: inline-block;\n  width: 4rem;\n  height: 1.75rem;\n  margin: 0; }\n  :host-context(.nb-theme-cosmic) .switch input {\n    display: none; }\n    :host-context(.nb-theme-cosmic) .switch input:checked + .slider::before {\n      -webkit-transform: translateX(2.25rem);\n              transform: translateX(2.25rem); }\n  :host-context(.nb-theme-cosmic) .switch .slider {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    border-radius: 1.75rem;\n    background-color: #2f296b; }\n  :host-context(.nb-theme-cosmic) .switch .slider::before {\n    position: absolute;\n    content: '';\n    height: 1.75rem;\n    width: 1.75rem;\n    border-radius: 50%;\n    background-color: #0b417a;\n    transition: 0.2s;\n    box-shadow: 0 0 0.25rem 0 rgba(118, 248, 246, 0.4);\n    background-image: linear-gradient(to right, #0b1c7a, #0b417a); }\n\n@media (max-width: 575px) {\n  :host-context(.nb-theme-cosmic) .light, :host-context(.nb-theme-cosmic) .cosmic {\n    display: none; } }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-cosmic) {\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/super-ciudades/super-ciudades-ver/super-ciudades-ver.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuperCiudadesVerComponent; });
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








//declare var google;
var SuperCiudadesVerComponent = /** @class */ (function () {
    function SuperCiudadesVerComponent(modalService, toasterService, http, router, rutaService, fb, zone) {
        this.modalService = modalService;
        this.toasterService = toasterService;
        this.http = http;
        this.router = router;
        this.rutaService = rutaService;
        this.fb = fb;
        this.zone = zone;
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
        this.myPosition = {};
        this.refresh = false;
        //loading: Loading;
        this.directionsService = null;
        this.directionsDisplay = null;
        this.geocoder = null;
        this.infowindow = null;
        this.bounds = null;
        this.bounds1 = null;
        this.waypoints = [];
        this.markers = [];
        this.inside = false;
        this.areaTriangle = [];
        this.coordenates = [];
        this.triangleCoords = [];
        this.reference = '';
        //public directionsService = new google.maps.DirectionsService;
        //directionsService: any = null;
        this.ciudad_id = null;
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
        });
        this.directionsService = new google.maps.DirectionsService();
        this.directionsDisplay = new google.maps.DirectionsRenderer({
            suppressMarkers: true,
            polylineOptions: {
                strokeColor: "#222220"
            }
        });
        this.geocoder = new google.maps.Geocoder;
        this.infowindow = new google.maps.InfoWindow;
        this.bounds = new google.maps.LatLngBounds();
        this.bounds1 = new google.maps.LatLngBounds();
    }
    SuperCiudadesVerComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.mouvers_user_tipo != '0') {
            localStorage.removeItem('mouvers_token');
            localStorage.removeItem('mouvers_user_id');
            localStorage.removeItem('mouvers_user_nombre');
            localStorage.removeItem('mouvers_user_tipo');
            localStorage.removeItem('mouvers_establecimiento_id');
            // this.router.navigateByUrl('/pagessimples/loginf');
        }
        this.loading = true;
        this.http.get(this.rutaService.getRutaApi() + 'zonas?token=' + localStorage.getItem('mouvers_token'))
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            _this.productList = _this.data.coordenadas;
            _this.productList = _this.productList.sort(function (a, b) { return b.nombre - a.nombre; });
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
                    // this.router.navigateByUrl('/pagessimples/loginf');
                }, 1000);
            }
            else if (msg.status == 404) {
                //alert(msg.error.error);
                _this.showToast('info', 'Info!', msg.error.error);
            }
        });
        this.geolocalizar();
    };
    SuperCiudadesVerComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var options = {
            types: ['address'],
            componentRestrictions: { country: "mx" }
        }; //
        if (document.getElementById('places')) {
            var inputElement = document.getElementById('places') /*.getElementsByTagName('input')[0]*/;
            var autocomplete_1 = new google.maps.places.Autocomplete(inputElement, options);
            google.maps.event.addListener(autocomplete_1, 'place_changed', function () {
                var place = autocomplete_1.getPlace();
                var pt = new google.maps.LatLng(place.geometry.location.lat(), place.geometry.location.lng());
                for (var i = 0; i < _this.markers.length; i++) {
                    //this.markers[i].setMap(null);
                    _this.markers[i].setPosition(pt);
                }
                //let coordAux = new google.maps.LatLng(place.geometry.location.lat(), place.geometry.location.lng());  
                //this.createMarker(coordAux);
                //this.direccion = place.formatted_address;
                _this.myLatLng = {
                    lat: place.geometry.location.lat(),
                    lng: place.geometry.location.lng()
                };
                setTimeout(function () {
                    //this.createMarker(this.myLatLng);
                    _this.map.setCenter(place.geometry.location);
                    _this.map.setZoom(18);
                }, 100);
            });
        }
        ;
    };
    SuperCiudadesVerComponent.prototype.showToast = function (type, title, body) {
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
    SuperCiudadesVerComponent.prototype.open = function (modal) {
        this.modalService.open(modal);
    };
    //Abrir modal larga
    SuperCiudadesVerComponent.prototype.open2 = function (modal) {
        this.modalService.open(modal, { size: 'lg', backdrop: 'static', container: 'nb-layout', keyboard: false });
    };
    SuperCiudadesVerComponent.prototype.atras = function () {
        this.editando = false;
        this.objAEditar = null;
        //console.log(this.objAEditar);
        //this.uploadFile = null;
        this.myFormEditar.reset();
    };
    SuperCiudadesVerComponent.prototype.aEditar = function (obj) {
        console.log(obj);
        this.ressetArea();
        this.editando = true;
        this.objAEditar = Object.assign({}, obj);
        console.log(this.objAEditar);
        this.myFormEditar.patchValue({ id: this.objAEditar.id });
        this.myFormEditar.patchValue({ nombre: this.objAEditar.nombre });
        //this.ciudad_id = this.objAEditar.id;
        //this.getCoordinates();
        //this.triangleCoords = [];
        this.objAEditar.coordenadas = JSON.parse(this.objAEditar.coordenadas);
        for (var i = 0; i < this.objAEditar.coordenadas.length; ++i) {
            this.myLatLng = this.objAEditar.coordenadas[i];
            if (this.triangleCoords.length == 0) {
                this.triangleCoords.push({ coordenada: [this.myLatLng] });
                //this.loadMap(this.myLatLng);
            }
            else {
                if (this.triangleCoords[0].coordenada[this.triangleCoords[0].coordenada.length - 1] != this.myLatLng) {
                    this.triangleCoords[0].coordenada.push(this.myLatLng);
                    // 
                }
                else {
                    this.showToast('warning', 'Warning!', 'Por favor mueve el pin rojo a otra ubicación.');
                }
            }
        }
        console.log(this.triangleCoords);
        var ultimoPunto = {
            lat: this.triangleCoords[0].coordenada[this.triangleCoords[0].coordenada.length - 1].lat,
            lng: this.triangleCoords[0].coordenada[this.triangleCoords[0].coordenada.length - 1].lng
        };
        this.loadMap(ultimoPunto);
    };
    SuperCiudadesVerComponent.prototype.editar = function () {
        var _this = this;
        if (this.triangleCoords.length == 0 || this.triangleCoords[0].coordenada.length < 3) {
            this.showToast('warning', 'Warning!', 'El área de coordenadas debe estar formada por al menos 3 puntos.');
        }
        else {
            this.loading = true;
            var datos = {
                token: localStorage.getItem('mouvers_token'),
                nombre: this.myFormEditar.value.nombre,
                coordenada: JSON.stringify(this.triangleCoords[0].coordenada),
            };
            this.http.put(this.rutaService.getRutaApi() + 'zonas/' + this.myFormEditar.value.id, datos)
                .toPromise()
                .then(function (data) {
                console.log(data);
                _this.data = data;
                for (var i = 0; i < _this.productList.length; ++i) {
                    if (_this.productList[i].id == _this.myFormEditar.value.id) {
                        _this.productList[i].nombre = _this.myFormEditar.value.nombre;
                    }
                }
                _this.filteredItems = _this.productList;
                _this.init();
                //console.log(this.productList);
                //alert(this.data.message);
                _this.loading = false;
                _this.editando = false;
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
        }
    };
    SuperCiudadesVerComponent.prototype.aEliminar = function (obj) {
        this.objAEliminar = obj;
        //console.log(this.objAEliminar);
        this.eliminar_id = this.objAEliminar.id;
        this.eliminar_nombre = this.objAEliminar.nombre;
    };
    SuperCiudadesVerComponent.prototype.eliminar = function () {
        var _this = this;
        console.log(this.objAEliminar);
        this.loading = true;
        var datos = {
            token: localStorage.getItem('mouvers_token')
        };
        this.http.delete(this.rutaService.getRutaApi() + 'categorias/' + this.eliminar_id + '?token=' + localStorage.getItem('mouvers_token'))
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
    //Para la ciiudad
    SuperCiudadesVerComponent.prototype.cambiarEstado = function (obj) {
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
        this.http.put(this.rutaService.getRutaApi() + 'ciudades/' + obj.id, datos)
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
    SuperCiudadesVerComponent.prototype.geolocalizar = function () {
        var _this = this;
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                console.log(position.coords.latitude);
                console.log(position.coords.longitude);
                _this.myPosition = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                //this.loadMap(this.myPosition);
            });
        }
        else {
            this.myPosition = {
                lat: -34.4626456,
                lng: -57.8409687
            };
            //this.loadMap(this.myPosition);
        }
    };
    SuperCiudadesVerComponent.prototype.getCoordinates = function () {
        var _this = this;
        this.loading = true;
        this.http.get(this.rutaService.getRutaApi() + 'coordenadas/ciudad/' + this.ciudad_id + '?token=' + localStorage.getItem('mouvers_token'))
            .toPromise()
            .then(function (data) {
            _this.datosC = data;
            _this.triangleCoords = _this.datosC.coordenadas;
            for (var i = 0; i < _this.triangleCoords.length; ++i) {
                _this.triangleCoords[i].coordenada = JSON.parse(_this.triangleCoords[i].coordenada);
            }
            var ultimoPunto = {
                lat: _this.triangleCoords[0].coordenada[_this.triangleCoords[0].coordenada.length - 1].lat,
                lng: _this.triangleCoords[0].coordenada[_this.triangleCoords[0].coordenada.length - 1].lng
            };
            _this.loadMap(ultimoPunto);
            _this.loading = false;
        }, function (msg) {
            console.log(msg);
            console.log(msg.error.error);
            _this.loading = false;
            //token invalido/ausente o token expiro
            if (msg.status == 400 || msg.status == 401) {
                //alert(msg.error.error);
                _this.showToast('warning', 'Warning!', msg.error.error);
                //this.mostrar = false;
                setTimeout(function () {
                    //this.router.navigateByUrl('/pagessimples/loginf');
                }, 1000);
            }
            else if (msg.status == 404) {
                //alert(msg.error.error);
                _this.showToast('info', 'Info!', msg.error.error);
            }
        });
    };
    SuperCiudadesVerComponent.prototype.loadMap = function (position) {
        var _this = this;
        //this.loading.dismiss();
        var mapEle = document.getElementById('map');
        this.myLatLng = position;
        this.map = new google.maps.Map(mapEle, {
            center: this.myLatLng,
            zoom: 15,
            mapTypeControl: true,
            fullscreenControl: true,
            streetViewControl: true,
            zoomControl: true
        });
        //Reiniciar el area
        this.areaTriangle = [];
        console.log(this.triangleCoords);
        for (var i = 0; i < this.triangleCoords.length; ++i) {
            this.areaTriangle.push(new google.maps.Polygon({
                paths: this.triangleCoords[i].coordenada,
                strokeColor: '#222220',
                strokeOpacity: 0.5,
                strokeWeight: 2,
                fillColor: '#222220',
                fillOpacity: 0.1
            }));
        }
        this.directionsDisplay.setMap(this.map);
        for (var j = 0; j < this.areaTriangle.length; j++) {
            this.areaTriangle[j].setMap(this.map);
        }
        google.maps.event.addListenerOnce(this.map, 'idle', function () {
            //mapEle.classList.add('show-map');
            _this.createMarker(_this.myLatLng);
        });
    };
    SuperCiudadesVerComponent.prototype.createMarker = function (latlng) {
        //console.log(latlng);
        var marker = new google.maps.Marker({
            position: latlng,
            map: this.map,
            draggable: true,
            //posRef: posRef,
            //icon: icon,
            title: 'Último Punto'
        });
        this.markers.push(marker);
        var that = this;
        google.maps.event.addListener(marker, 'dragend', function () {
            var end = this.getPosition();
            that.myLatLng = { lat: end.lat(), lng: end.lng() };
            //that.calculateRoute(that.Origin,end);
            console.log(that.myLatLng);
        });
    };
    SuperCiudadesVerComponent.prototype.addPunto = function () {
        console.log(this.myLatLng);
        if (this.triangleCoords.length == 0) {
            this.triangleCoords.push({ coordenada: [this.myLatLng] });
            this.loadMap(this.myLatLng);
        }
        else {
            if (this.triangleCoords[0].coordenada[this.triangleCoords[0].coordenada.length - 1] != this.myLatLng) {
                this.triangleCoords[0].coordenada.push(this.myLatLng);
                this.loadMap(this.myLatLng);
            }
            else {
                this.showToast('warning', 'Warning!', 'Por favor mueve el pin rojo a otra ubicación.');
            }
        }
    };
    SuperCiudadesVerComponent.prototype.ressetArea = function () {
        this.triangleCoords = [];
        if (this.myLatLng) {
            this.loadMap(this.myLatLng);
        }
        else {
            this.loadMap(this.myPosition);
        }
    };
    SuperCiudadesVerComponent.prototype.init = function () {
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
    SuperCiudadesVerComponent.prototype.FilterByName = function () {
        this.filteredItems = [];
        if (this.inputName != "") {
            for (var i = 0; i < this.productList.length; ++i) {
                if (this.productList[i].nombre.toUpperCase().indexOf(this.inputName.toUpperCase()) >= 0) {
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
    SuperCiudadesVerComponent.prototype.fillArray = function () {
        var obj = new Array();
        for (var index = this.pageStart; index < this.pageStart + this.pages; index++) {
            obj.push(index);
        }
        return obj;
    };
    SuperCiudadesVerComponent.prototype.refreshItems = function () {
        this.items = this.filteredItems.slice((this.currentIndex - 1) * this.pageSize, (this.currentIndex) * this.pageSize);
        this.pagesIndex = this.fillArray();
    };
    SuperCiudadesVerComponent.prototype.prevPage = function () {
        if (this.currentIndex > 1) {
            this.currentIndex--;
        }
        if (this.currentIndex < this.pageStart) {
            this.pageStart = this.currentIndex;
        }
        this.refreshItems();
    };
    SuperCiudadesVerComponent.prototype.nextPage = function () {
        if (this.currentIndex < this.pageNumber) {
            this.currentIndex++;
        }
        if (this.currentIndex >= (this.pageStart + this.pages)) {
            this.pageStart = this.currentIndex - this.pages + 1;
        }
        this.refreshItems();
    };
    SuperCiudadesVerComponent.prototype.setPage = function (index) {
        this.currentIndex = index;
        this.refreshItems();
    };
    SuperCiudadesVerComponent.prototype.init2 = function () {
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
    SuperCiudadesVerComponent.prototype.FilterByName2 = function () {
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
    SuperCiudadesVerComponent.prototype.fillArray2 = function () {
        var obj = new Array();
        for (var index = this.pageStart2; index < this.pageStart2 + this.pages2; index++) {
            obj.push(index);
        }
        return obj;
    };
    SuperCiudadesVerComponent.prototype.refreshItems2 = function () {
        this.items2 = this.filteredItems2.slice((this.currentIndex2 - 1) * this.pageSize2, (this.currentIndex2) * this.pageSize2);
        this.pagesIndex2 = this.fillArray2();
    };
    SuperCiudadesVerComponent.prototype.prevPage2 = function () {
        if (this.currentIndex2 > 1) {
            this.currentIndex2--;
        }
        if (this.currentIndex2 < this.pageStart2) {
            this.pageStart2 = this.currentIndex2;
        }
        this.refreshItems2();
    };
    SuperCiudadesVerComponent.prototype.nextPage2 = function () {
        if (this.currentIndex2 < this.pageNumber2) {
            this.currentIndex2++;
        }
        if (this.currentIndex2 >= (this.pageStart2 + this.pages2)) {
            this.pageStart2 = this.currentIndex2 - this.pages2 + 1;
        }
        this.refreshItems2();
    };
    SuperCiudadesVerComponent.prototype.setPage2 = function (index) {
        this.currentIndex2 = index;
        this.refreshItems2();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], SuperCiudadesVerComponent.prototype, "fileInput", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("places"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], SuperCiudadesVerComponent.prototype, "places", void 0);
    SuperCiudadesVerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-ver-super-ciudades',
            template: __webpack_require__("../../../../../src/app/pages/super-ciudades/super-ciudades-ver/super-ciudades-ver.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/super-ciudades/super-ciudades-ver/super-ciudades-ver.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */],
            __WEBPACK_IMPORTED_MODULE_6_angular2_toaster__["d" /* ToasterService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_ruta_base_ruta_base_service__["a" /* RutaBaseService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]])
    ], SuperCiudadesVerComponent);
    return SuperCiudadesVerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/super-ciudades/super-ciudades.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuperCiudadesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SuperCiudadesComponent = /** @class */ (function () {
    function SuperCiudadesComponent() {
    }
    SuperCiudadesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-cat-elements',
            template: "\n    <router-outlet></router-outlet>\n  ",
        })
    ], SuperCiudadesComponent);
    return SuperCiudadesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/super-ciudades/super-ciudades.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuperCiudadesModule", function() { return SuperCiudadesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme_theme_module__ = __webpack_require__("../../../../../src/app/@theme/theme.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__super_ciudades_routing_module__ = __webpack_require__("../../../../../src/app/pages/super-ciudades/super-ciudades-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_loading__ = __webpack_require__("../../../../ngx-loading/ngx-loading/ngx-loading.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//Mis imports


//import { Ng2UploaderModule } from 'ng2-uploader';

var SuperCiudadesModule = /** @class */ (function () {
    function SuperCiudadesModule() {
    }
    SuperCiudadesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                //Ng2UploaderModule,
                __WEBPACK_IMPORTED_MODULE_5__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyCr8zuLtOO7IoK_rC948rLcqyqsIaZOouY',
                    libraries: ["places"]
                }),
                __WEBPACK_IMPORTED_MODULE_4_angular2_toaster__["c" /* ToasterModule */],
                __WEBPACK_IMPORTED_MODULE_1__theme_theme_module__["a" /* ThemeModule */],
                __WEBPACK_IMPORTED_MODULE_2__super_ciudades_routing_module__["a" /* SuperCiudadesRoutingModule */],
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
            declarations: __WEBPACK_IMPORTED_MODULE_2__super_ciudades_routing_module__["b" /* routedComponents */].slice(),
            providers: [],
        })
    ], SuperCiudadesModule);
    return SuperCiudadesModule;
}());



/***/ })

});
//# sourceMappingURL=super-ciudades.module.chunk.js.map