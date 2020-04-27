webpackJsonp(["mis-pedidos.module"],{

/***/ "../../../../../src/app/pages/mis-pedidos/mis-pedidos-curso/mis-pedidos-curso.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card *ngIf=\"!viendo && mostrar\">\r\n  <nb-card-header>\r\n    <div class=\"row show-grid\">\r\n          <div class=\"col-6\" >\r\n            Pedidos en curso &nbsp;\r\n              <button style=\"display: inline-block;\"  type=\"button\" class=\"btn btn-icon btn-tn\" title=\"Refresh\" (click)=\"refreshTabla()\"> <i class=\"fa fa-refresh icon-refresh\"></i>\r\n              </button>\r\n            \r\n          </div>\r\n          <div class=\"col-6\">\r\n            <div>\r\n              <div style=\"text-align: right;\">\r\n               <strong>Buscar: </strong>\r\n               <input  type=\"text\"  id=\"inputName\" [(ngModel)]=\"inputName\" (ngModelChange)=\"FilterByName()\"/>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n  </nb-card-header>\r\n\r\n  <nb-card-body>\r\n\r\n    <table class=\"table\">\r\n      <thead>\r\n         <!-- <th></th> -->\r\n         <th style=\"text-align: center;\">Pedido</th>\r\n         <th style=\"text-align: center;\">Usuario</th>\r\n         <th style=\"text-align: center;\">Fecha</th>\r\n         <th style=\"text-align: center;\">Hora</th>\r\n         <!-- <th style=\"text-align: center;\">Estado</th> -->\r\n         <th style=\"text-align: center;\">Repartidor</th>\r\n         <th style=\"text-align: center;\">Acciones</th>\r\n      </thead>  \r\n      <tbody>\r\n         <tr *ngFor=\"let item of items\" >\r\n            <!-- <td></td> -->\r\n            <td style=\"text-align: center; vertical-align:middle;\">AI00{{item.id}}</td>\r\n            <td style=\"text-align: center; vertical-align:middle;\">{{item.usuario.nombre}}</td>\r\n            <td style=\"text-align: center; vertical-align:middle;\"><!-- {{item.created_at | date:'dd/MM/yyyy'}} -->{{item.fecha}}</td>\r\n            <td style=\"text-align: center; vertical-align:middle;\"><!-- {{item.created_at | date:'hh:mm:ss'}} -->{{item.hora}}</td>\r\n            <!-- <td style=\"text-align: center; vertical-align:middle;\">{{item.estado}}</td> -->\r\n            <td style=\"text-align: center; vertical-align:middle;\"> {{item.repartidor_nom}} </td>\r\n            <td style=\"text-align: center; vertical-align:middle;\">\r\n              <button type=\"button\" class=\"btn btn-primary btn-icon btn-sm btn-table\" title=\"Ver\" (click)=\"ver(item)\">\r\n                <i class=\"fa fa-eye\"></i>\r\n              </button>\r\n              <!-- <button *ngIf=\"item.usuario.tipo_usuario == 4\" type=\"button\" class=\"btn btn-info btn-icon btn-sm btn-table\" title=\"Asignar repartidor\" (click)=\"getRepDisponibles(item, modal1)\">\r\n                <i class=\"ion-android-bicycle\"></i>\r\n              </button> -->\r\n              <button type=\"button\" class=\"btn btn-info btn-icon btn-sm btn-table\" title=\"Despachar Pedido\" (click)=\"despacho(item, modalDespachar)\">\r\n                <i class=\"ion-android-bicycle\"></i>\r\n              </button>\r\n\r\n            </td>\r\n         </tr>\r\n      </tbody>\r\n    </table>\r\n      \r\n  </nb-card-body>\r\n  <nb-card-footer>\r\n    <div class=\"btn-toolbar\" role=\"toolbar\" style=\"margin: 0;\">\r\n      <div class=\"btn-group\">\r\n         <label style=\"margin-top:10px\">Página {{currentIndex}}/{{pageNumber}} </label>\r\n      </div>\r\n      <div class=\"btn-group pull-right\">\r\n         <ul class=\"pagination\" >\r\n            <li class=\"page-item\" [ngClass]=\"{'disabled': (currentIndex == 1 || pageNumber == 0)}\" ><a class=\"page-link\"  (click)=\"prevPage()\" >Atrás</a></li>\r\n               <li class=\"page-item\" *ngFor=\"let page of pagesIndex\"  [ngClass]=\"{'active': (currentIndex == page)}\">\r\n                  <a class=\"page-link\" (click)=\"setPage(page)\"  >{{page}} </a>\r\n               </li>\r\n            <li class=\"page-item\" [ngClass]=\"{'disabled': (currentIndex == pageNumber || pageNumber == 0)}\" ><a class=\"page-link\"   (click)=\"nextPage()\" >Siguiente</a></li>\r\n         </ul>\r\n      </div>\r\n    </div>  \r\n  </nb-card-footer>\r\n</nb-card>\r\n\r\n<div class=\"viendo\" *ngIf=\"viendo\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <nb-card>\r\n        <nb-card-header>\r\n          Detalles del Pedido AI00{{selectedObj.id}}\r\n          <div class=\"pull-right\" style=\"margin-right: 10px\">\r\n            En curso &nbsp;\r\n            <!-- <button *ngIf=\"selectedObj.usuario.tipo_usuario == 4\" type=\"button\" class=\"btn btn-info btn-icon btn-sm btn-table\" title=\"Asignar repartidor\" (click)=\"getRepDisponibles(selectedObj, modal1)\">\r\n                <i class=\"ion-android-bicycle\"></i>\r\n              </button> -->\r\n            <button type=\"button\" class=\"btn btn-info btn-icon btn-sm btn-table\" title=\"Despachar Pedido\" (click)=\"open(modalDespachar)\">\r\n                <i class=\"ion-android-bicycle\"></i>\r\n              </button>\r\n          </div>\r\n        </nb-card-header>\r\n        <nb-card-body>\r\n\r\n          <h5 *ngIf=\"selectedObj.repartidor_nom\"class=\"grid-h\">Repartidor</h5>\r\n          <div *ngIf=\"selectedObj.repartidor_nom\"class=\"row show-grid\">\r\n\r\n            <div class=\"col-md-4\">\r\n              <div>Nombre</div>\r\n            </div>\r\n            <div class=\"col-md-8\">\r\n              <div>{{selectedObj.repartidor_nom}}</div>\r\n            </div>\r\n\r\n            <div *ngIf=\"selectedObj.repartidor\" class=\"col-md-4\">\r\n              <div>Teléfono</div>\r\n            </div>\r\n            <div *ngIf=\"selectedObj.repartidor\" class=\"col-md-8\">\r\n              <div>{{selectedObj.repartidor.usuario.telefono}}</div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <h5 class=\"grid-h\">Fecha/Hora</h5>\r\n          <div class=\"row show-grid\">\r\n\r\n            <div class=\"col-md-4\">\r\n              <div>Fecha</div>\r\n            </div>\r\n            <div class=\"col-md-8\">\r\n              <div>{{selectedObj.fecha}}</div>\r\n            </div>\r\n\r\n            <div class=\"col-md-4\">\r\n              <div>Hora</div>\r\n            </div>\r\n            <div class=\"col-md-8\">\r\n              <div>{{selectedObj.hora}}</div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <h5 class=\"grid-h\">Usuario</h5>\r\n          <div class=\"row show-grid\">\r\n\r\n            <div class=\"col-md-4\">\r\n              <div>Nombre</div>\r\n            </div>\r\n            <div class=\"col-md-8\">\r\n              <div>{{selectedObj.usuario.nombre}}</div>\r\n            </div>\r\n\r\n            <div class=\"col-md-4\">\r\n              <div>Email</div>\r\n            </div>\r\n            <div class=\"col-md-8\">\r\n              <div>{{selectedObj.usuario.email}}</div>\r\n            </div>\r\n\r\n            <div class=\"col-md-4\">\r\n              <div>Teléfono</div>\r\n            </div>\r\n            <div class=\"col-md-8\">\r\n              <div>{{selectedObj.usuario.telefono}}</div>\r\n            </div>\r\n\r\n            <div class=\"col-md-4\">\r\n              <div>Ciudad</div>\r\n            </div>\r\n            <div class=\"col-md-8\">\r\n              <div>{{selectedObj.usuario.ciudad}}</div>\r\n            </div>\r\n\r\n            <div class=\"col-md-4\">\r\n              <div>Estado</div>\r\n            </div>\r\n            <div class=\"col-md-8\">\r\n              <div>{{selectedObj.usuario.estado}}</div>\r\n            </div>\r\n\r\n            <div *ngIf=\"selectedObj.destinatario\" class=\"col-md-4\">\r\n              <div>Destinatario</div>\r\n            </div>\r\n            <div *ngIf=\"selectedObj.destinatario\" class=\"col-md-8\">\r\n              <div>{{selectedObj.destinatario}}</div>\r\n            </div>\r\n\r\n            <div *ngIf=\"selectedObj.destinatario\" class=\"col-md-4\">\r\n              <div>Teléfono</div>\r\n            </div>\r\n            <div *ngIf=\"selectedObj.destinatario\" class=\"col-md-8\">\r\n              <div>{{selectedObj.telefono}}</div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <h5 class=\"grid-h\">Referencias</h5>\r\n          <div class=\"row show-grid\">\r\n\r\n            <div class=\"col-md-4\">\r\n              <div>Dirección</div>\r\n            </div>\r\n            <div class=\"col-md-8\">\r\n              <div>{{selectedObj.direccion}}</div>\r\n            </div>\r\n\r\n            <div class=\"col-md-4\">\r\n              <div>Referencia</div>\r\n            </div>\r\n            <div class=\"col-md-8\">\r\n              <div>{{selectedObj.referencia}}</div>\r\n            </div>\r\n\r\n            <div class=\"col-md-12\">\r\n              <div *ngIf=\"selectedObj.lat && selectedObj.lng\">\r\n                <!-- <strong>Aqui el mapa</strong> -->\r\n                <agm-map style=\"height: 300px;\" [zoom]=\"13\" [latitude]=\"selectedObj.lat\" [longitude]=\"selectedObj.lng\">\r\n                      <agm-marker style=\"height: 300px;\" [latitude]=\"selectedObj.lat\" [longitude]=\"selectedObj.lng\"></agm-marker>\r\n                  </agm-map>\r\n              </div>\r\n            </div>\r\n\r\n\r\n          </div>\r\n\r\n          <h5 class=\"grid-h\">Productos Solicitados</h5>\r\n          <div class=\"table-responsive\">\r\n            <table class=\"table table-bordered table-striped\">\r\n              <thead>\r\n                <tr>\r\n                  <th>\r\n                   Producto\r\n                  </th>\r\n                  <th>\r\n                   Establecimiento\r\n                  </th>\r\n                  <th>\r\n                   Observación\r\n                  </th>\r\n                  <th>\r\n                   Solicitados\r\n                  </th>\r\n                  <th>\r\n                   Precio Unit. <small>($ MXN)</small>\r\n                  </th>\r\n                  <th>\r\n                   Sub-total <small>($ MXN)</small>\r\n                  </th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let item of selectedObj.productos\">\r\n                  <td *ngIf=\"item.establecimiento_id == establecimiento_id\" class=\"text-center\">\r\n                    {{item.nombre}}\r\n                  </td>\r\n                  <td *ngIf=\"item.establecimiento_id == establecimiento_id\" class=\"text-center\">\r\n                    {{item.establecimiento.nombre}}\r\n                  </td>\r\n                  <td *ngIf=\"item.establecimiento_id == establecimiento_id\">\r\n                    {{item.pivot.observacion}}\r\n                  </td>\r\n                  <td *ngIf=\"item.establecimiento_id == establecimiento_id\" class=\"text-center\">\r\n                    {{item.pivot.cantidad}}\r\n                  </td>\r\n                  <td *ngIf=\"item.establecimiento_id == establecimiento_id\" class=\"text-center\">\r\n                    {{item.pivot.precio_unitario}}\r\n                  </td>\r\n                  <td *ngIf=\"item.establecimiento_id == establecimiento_id\" class=\"text-center\">\r\n                    {{item.pivot.precio_unitario * item.pivot.cantidad}}\r\n                  </td>\r\n                </tr>\r\n                \r\n                <tr>\r\n                  <td colspan=\"6\"></td>\r\n                </tr>\r\n                <!-- <tr>\r\n                  <td colspan=\"4\" style=\"text-align: right;\"><strong>Envío</strong> <small>($ MXN)</small></td>\r\n                  <td class=\"text-center\">{{selectedObj.costo_envio}}</td>\r\n                </tr> -->\r\n                <!-- <tr>\r\n                  <td colspan=\"4\" style=\"text-align: right;\"><strong>Sub-total</strong> <small>($ MXN)</small></td>\r\n                  <td class=\"text-center\">{{selectedObj.subtotal}}</td>\r\n                </tr> -->\r\n                <tr>\r\n                  <td colspan=\"5\" style=\"text-align: right;\"><strong>Total</strong> <small>($ MXN)</small></td>\r\n                  <td class=\"text-center\">{{selectedObj.costoEst | number: '1.2-2'}}</td>\r\n                </tr> \r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </nb-card-body>\r\n        <nb-card-footer>\r\n          <button  class=\"btn btn-tn btn-secondary\" (click)=\"atras()\"><i class=\"fa fa-arrow-left\"></i> Atrás</button>\r\n        </nb-card-footer>\r\n      </nb-card>\r\n    </div>\r\n</div>\r\n</div>\r\n\r\n<ng-template #modal1 let-c=\"close\" let-d=\"dismiss\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">Repartidores disponibles: </h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click'); atras()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <nb-card>\r\n      <nb-card-header>\r\n        <div class=\"row show-grid\">\r\n              <div class=\"col-6\">\r\n                <div>Lista de Socios</div>\r\n              </div>\r\n              <div class=\"col-6\">\r\n                <div>\r\n                  <div style=\"text-align: right;\">\r\n                   <strong>Buscar: </strong>\r\n                   <input  type=\"text\"  id=\"inputName2\" [(ngModel)]=\"inputName2\" (ngModelChange)=\"FilterByName2()\"/>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n      </nb-card-header>\r\n\r\n      <nb-card-body>\r\n\r\n        <table class=\"table table-striped\">\r\n          <thead>\r\n             <!-- <th style=\"text-align: center;\">ID</th> -->\r\n             <th style=\"text-align: center;\">Nombre</th>\r\n             <th style=\"text-align: center;\">Email</th>\r\n             <th style=\"text-align: center;\">Teléfono</th>\r\n             <th style=\"text-align: center;\">Acción</th>\r\n          </thead>\r\n          <tbody>\r\n             <tr *ngFor=\"let item of items2\" >\r\n                <td style=\"text-align: center; vertical-align:middle;\">{{item.usuario.nombre}}</td>\r\n                <td style=\"text-align: center; vertical-align:middle;\">{{item.usuario.email}}</td>\r\n                <td style=\"text-align: center; vertical-align:middle;\">{{item.usuario.telefono}}</td>\r\n                <td style=\"text-align: center; vertical-align:middle;\">\r\n                  <label class=\"custom-control custom-radio\">\r\n                    <input type=\"radio\" class=\"custom-control-input\" name=\"customRadio\" (change)=\"setRepartidor(item)\">\r\n                    <span class=\"custom-control-indicator\"></span>\r\n                    <span class=\"custom-control-description\">Asignar</span>\r\n                  </label>\r\n                </td>\r\n             </tr>\r\n          </tbody>\r\n        </table>\r\n          \r\n      </nb-card-body>\r\n      <nb-card-footer>\r\n        <div class=\"btn-toolbar\" role=\"toolbar\" style=\"margin: 0;\">\r\n          <div class=\"btn-group\">\r\n             <label style=\"margin-top:10px\">Página {{currentIndex2}}/{{pageNumber2}} </label>\r\n          </div>\r\n          <div class=\"btn-group pull-right\">\r\n             <ul class=\"pagination\" >\r\n                <li class=\"page-item\" [ngClass]=\"{'disabled': (currentIndex2 == 1 || pageNumber2 == 0)}\" ><a class=\"page-link\"  (click)=\"prevPage2()\" >Atrás</a></li>\r\n                   <li class=\"page-item\" *ngFor=\"let page of pagesIndex2\"  [ngClass]=\"{'active': (currentIndex2 == page)}\">\r\n                      <a class=\"page-link\" (click)=\"setPage2(page)\"  >{{page}} </a>\r\n                   </li>\r\n                <li class=\"page-item\" [ngClass]=\"{'disabled': (currentIndex2 == pageNumber2 || pageNumber2 == 0)}\" ><a class=\"page-link\"   (click)=\"nextPage2()\" >Siguiente</a></li>\r\n             </ul>\r\n          </div>\r\n        </div>  \r\n      </nb-card-footer>\r\n    </nb-card>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click'); atras()\">Cancelar</button>\r\n    <button type=\"button\" class=\"btn btn-danger\" (click)=\"c('Close click'); asignar()\" [disabled]=\"!repartidor_id\">Aceptar</button>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #modalDespachar let-c=\"close\" let-d=\"dismiss\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">Despachar Pedido: </h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <p>¿Realmente desea marcar como despachado el pedido AI00{{selectedObj.id}}?</p>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Cancelar</button>\r\n    <button type=\"button\" class=\"btn btn-danger\" (click)=\"c('Close click'); despachar()\">Aceptar</button>\r\n  </div>\r\n</ng-template>\r\n\r\n<toaster-container [toasterconfig]=\"config\"></toaster-container>\r\n\r\n<div class=\"my-container\">\r\n    <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '4px' }\"></ngx-loading>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/mis-pedidos/mis-pedidos-curso/mis-pedidos-curso.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) .btn-table {\n  display: inline-block; }\n\n:host-context(.nb-theme-default) .img-table {\n  border-radius: 4px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n:host-context(.nb-theme-default) .viendo .show-grid .row {\n  margin: -0.5rem; }\n\n:host-context(.nb-theme-default) .viendo .show-grid div[class^=col-] {\n  padding: 0.5rem;\n  box-sizing: border-box; }\n  :host-context(.nb-theme-default) .viendo .show-grid div[class^=col-] div {\n    text-align: center;\n    background-color: #e9edf2;\n    padding: 0.75rem 0.25rem;\n    border-radius: 0.25rem; }\n\n:host-context(.nb-theme-default) .viendo .grid-h {\n  margin-top: 1.5rem; }\n  :host-context(.nb-theme-default) .viendo .grid-h:first-child {\n    margin-top: 0; }\n\n:host-context(.nb-theme-default) .viendo .table-responsive {\n  margin-top: 1rem; }\n\n:host-context(.nb-theme-cosmic) .btn-table {\n  display: inline-block; }\n\n:host-context(.nb-theme-cosmic) .img-table {\n  border-radius: 4px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n:host-context(.nb-theme-cosmic) .viendo .show-grid .row {\n  margin: -0.5rem; }\n\n:host-context(.nb-theme-cosmic) .viendo .show-grid div[class^=col-] {\n  padding: 0.5rem;\n  box-sizing: border-box; }\n  :host-context(.nb-theme-cosmic) .viendo .show-grid div[class^=col-] div {\n    text-align: center;\n    background-color: #494299;\n    padding: 0.75rem 0.25rem;\n    border-radius: 0.25rem; }\n\n:host-context(.nb-theme-cosmic) .viendo .grid-h {\n  margin-top: 1.5rem; }\n  :host-context(.nb-theme-cosmic) .viendo .grid-h:first-child {\n    margin-top: 0; }\n\n:host-context(.nb-theme-cosmic) .viendo .table-responsive {\n  margin-top: 1rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/mis-pedidos/mis-pedidos-curso/mis-pedidos-curso.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MisPedidosCursoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_ruta_base_ruta_base_service__ = __webpack_require__("../../../../../src/app/services/ruta-base/ruta-base.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_style_loader_angular2_toaster_toaster_css__ = __webpack_require__("../../../../style-loader/index.js!../../../../angular2-toaster/toaster.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_style_loader_angular2_toaster_toaster_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_style_loader_angular2_toaster_toaster_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_eventos_services_header_to_pedidos_event_service_header_to_pedidos_event_service__ = __webpack_require__("../../../../../src/app/services/eventos-services/header-to-pedidos-event-service/header-to-pedidos-event.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_header_service_header_service__ = __webpack_require__("../../../../../src/app/services/header-service/header.service.ts");
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









var MisPedidosCursoComponent = /** @class */ (function () {
    function MisPedidosCursoComponent(modalService, toasterService, http, router, rutaService, headerToPedidosEventService, headerService) {
        var _this = this;
        this.modalService = modalService;
        this.toasterService = toasterService;
        this.http = http;
        this.router = router;
        this.rutaService = rutaService;
        this.headerToPedidosEventService = headerToPedidosEventService;
        this.headerService = headerService;
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
        this.viendo = false;
        this.mostrar = true;
        this.repartidor_id = null;
        this.establecimiento_id = localStorage.getItem('mouvers_establecimiento_id');
        this.establecimiento_nom = localStorage.getItem('mouvers_user_nombre');
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
        //Detectar evento cargar pedido de notificacion entrante
        this.headerToPedidosEventService.headerToPedidosData.subscribe(function (data) {
            //console.log(data); 
            _this.headerEvent();
        });
    }
    MisPedidosCursoComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.mouvers_user_tipo != '4') {
            localStorage.removeItem('mouvers_token');
            localStorage.removeItem('mouvers_user_id');
            localStorage.removeItem('mouvers_user_nombre');
            localStorage.removeItem('mouvers_user_tipo');
            localStorage.removeItem('mouvers_establecimiento_id');
            this.router.navigateByUrl('/pagessimples/loginf');
        }
        this.viendo = null;
        this.loading = true;
        this.http.get(this.rutaService.getRutaApi() + 'pedidos/establecimiento/' + this.establecimiento_id + '?despachado=' + 1 + '&token=' + localStorage.getItem('mouvers_token'))
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            //Cambiar el formato de la fecha y hora
            var dia;
            var mes;
            var anio;
            var fecha;
            var hora;
            var minutos;
            var segundos;
            for (var i = 0; i < _this.data.pedidos.length; i++) {
                fecha = new Date(_this.data.pedidos[i].created_at);
                dia = fecha.getDate();
                mes = fecha.getMonth() + 1;
                anio = fecha.getFullYear();
                hora = fecha.getHours();
                minutos = fecha.getMinutes();
                segundos = fecha.getSeconds();
                _this.data.pedidos[i].fecha = dia + '/' + mes + '/' + anio;
                _this.data.pedidos[i].hora = hora + ':' + minutos + ':' + segundos;
                _this.data.pedidos[i].ref = 'M00' + _this.data.pedidos[i].id;
                //Control de estados del pedido
                if (_this.data.pedidos[i].estado == 1) {
                    _this.data.pedidos[i].estado = 'No asignado';
                }
                else if (_this.data.pedidos[i].estado == 2) {
                    _this.data.pedidos[i].estado = 'Asignado';
                }
                else if (_this.data.pedidos[i].estado == 3) {
                    _this.data.pedidos[i].estado = 'En camino';
                }
                else if (_this.data.pedidos[i].estado == 4) {
                    _this.data.pedidos[i].estado = 'Entregado';
                }
            }
            setTimeout(function () {
                _this.productList = _this.data.pedidos;
                _this.filteredItems = _this.productList;
                //console.log(this.productList);
                _this.init();
                //verificar si hay que cargar un pedido de una notificacion
                setTimeout(function () {
                    _this.checkHeaderEvent();
                    _this.loading = false;
                }, 600);
            }, 1000);
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
    MisPedidosCursoComponent.prototype.ngOnDestroy = function () {
        // acciones de destrucción
        localStorage.setItem('mouvers_pedido_id', '');
    };
    MisPedidosCursoComponent.prototype.showToast = function (type, title, body) {
        this.config = new __WEBPACK_IMPORTED_MODULE_5_angular2_toaster__["b" /* ToasterConfig */]({
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
            bodyOutputType: __WEBPACK_IMPORTED_MODULE_5_angular2_toaster__["a" /* BodyOutputType */].TrustedHtml,
        };
        this.toasterService.popAsync(toast);
    };
    MisPedidosCursoComponent.prototype.refreshTabla = function () {
        this.productList = [];
        this.filteredItems = this.productList;
        this.init();
        localStorage.setItem('mouvers_pedido_id', '');
        this.ngOnInit();
    };
    //Abrir modal por defecto
    MisPedidosCursoComponent.prototype.open = function (modal) {
        this.modalService.open(modal);
    };
    //Abrir modal larga
    MisPedidosCursoComponent.prototype.open2 = function (modal) {
        this.modalService.open(modal, { size: 'lg', backdrop: 'static', container: 'nb-layout', keyboard: false });
    };
    MisPedidosCursoComponent.prototype.atras = function () {
        this.viendo = false;
        this.selectedObj = null;
        this.objAEliminar = null;
        this.repartidor_id = null;
    };
    MisPedidosCursoComponent.prototype.aEliminar = function (obj) {
        this.objAEliminar = obj;
        //console.log(this.objAEliminar);
        this.eliminar_id = this.objAEliminar.id;
        this.eliminar_nombre = this.objAEliminar.nombre;
    };
    MisPedidosCursoComponent.prototype.eliminar = function () {
        var _this = this;
        console.log(this.objAEliminar);
        this.loading = true;
        var datos = {
            token: localStorage.getItem('mouvers_token')
        };
        this.http.delete(this.rutaService.getRutaApi() + 'productos/' + this.eliminar_id + '?token=' + localStorage.getItem('mouvers_token'))
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
    /*Cargar los repartidores disponibles*/
    MisPedidosCursoComponent.prototype.getRepDisponibles = function (obj, modal) {
        var _this = this;
        this.repartidor_id = null;
        this.selectedObj = Object.assign({}, obj);
        console.log(this.selectedObj);
        this.loading = true;
        this.http.get(this.rutaService.getRutaApi() + 'repartidores/disponibles?token=' + localStorage.getItem('mouvers_token'))
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            _this.productList2 = _this.data.repartidores;
            _this.filteredItems2 = _this.productList2;
            //console.log(this.productList);
            _this.init2();
            _this.loading = false;
            _this.open2(modal);
        }, function (msg) {
            console.log(msg);
            console.log(msg.error.error);
            _this.loading = false;
            //token invalido/ausente o token expiro
            if (msg.status == 400 || msg.status == 401) {
                //alert(msg.error.error);
                _this.showToast('warning', 'Warning!', msg.error.error);
            }
            else if (msg.status == 404) {
                //alert(msg.error.error);
                _this.showToast('info', 'Info!', msg.error.error);
            }
        });
    };
    MisPedidosCursoComponent.prototype.setRepartidor = function (repartidor) {
        this.repartidor_id = repartidor.id;
    };
    MisPedidosCursoComponent.prototype.asignar = function () {
        var _this = this;
        this.loading = true;
        var datos = {
            token: localStorage.getItem('mouvers_token'),
            pedido_id: this.selectedObj.id,
        };
        this.http.put(this.rutaService.getRutaApi() + 'notificaciones/' + this.repartidor_id + '/asignar/pedido', datos)
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            _this.repartidor = _this.data.repartidor;
            //Actualiza la vista del detalle del pedido
            _this.selectedObj.repartidor = _this.repartidor;
            _this.selectedObj.repartidor_nom = _this.repartidor.usuario.nombre;
            if (_this.selectedObj.estado == 'No asignado') {
                _this.selectedObj.estado = 'Asignado';
            }
            //this.headerService.clearNotificationCliAux(this.selectedObj.id);
            for (var i = 0; i < _this.productList.length; ++i) {
                if (_this.productList[i].id == _this.selectedObj.id) {
                    if (_this.productList[i].estado == 'No asignado') {
                        _this.productList[i].estado = 'Asignado';
                    }
                    _this.productList[i].repartidor_id = _this.repartidor.id;
                    _this.productList[i].repartidor_nom = _this.repartidor.usuario.nombre;
                    _this.productList[i].repartidor = _this.repartidor;
                }
            }
            _this.filteredItems = _this.productList;
            _this.init();
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
    MisPedidosCursoComponent.prototype.ver = function (obj) {
        this.viendo = true;
        this.selectedObj = Object.assign({}, obj);
        console.log(this.selectedObj);
        if (this.selectedObj.lat && this.selectedObj.lng) {
            this.selectedObj.lat = parseFloat(this.selectedObj.lat);
            this.selectedObj.lng = parseFloat(this.selectedObj.lng);
        }
        //Recalcular el total para el establecimiento
        var est_id = parseInt(this.establecimiento_id);
        this.selectedObj.costoEst = 0;
        for (var i = 0; i < this.selectedObj.productos.length; i++) {
            if (this.selectedObj.productos[i].establecimiento_id == est_id) {
                this.selectedObj.costoEst += this.selectedObj.productos[i].pivot.cantidad * this.selectedObj.productos[i].pivot.precio_unitario;
            }
        }
    };
    MisPedidosCursoComponent.prototype.headerEvent = function () {
        this.ngOnInit();
    };
    MisPedidosCursoComponent.prototype.checkHeaderEvent = function () {
        if (localStorage.getItem('mouvers_pedido_id') &&
            localStorage.getItem('mouvers_pedido_id') != '' &&
            localStorage.getItem('mouvers_pedido_id') != 'null') {
            var existe = false;
            var pedido_id = parseInt(localStorage.getItem('mouvers_pedido_id'));
            for (var i = 0; i < this.productList.length; i++) {
                if (this.productList[i].id == pedido_id) {
                    this.ver(this.productList[i]);
                    localStorage.setItem('mouvers_pedido_id', '');
                    /*if (this.productList[i].estado == 'Asignado' || this.productList[i].estado == 'En camino') {
                      this.headerService.clearNotificationCliAux(this.productList[i].id);
                    }*/
                    existe = true;
                }
            }
            if (!existe) {
                this.showToast('warning', 'Warning!', 'El pedido solicitado ya no está en esta sección.');
            }
        }
    };
    MisPedidosCursoComponent.prototype.despacho = function (obj, modal) {
        this.selectedObj = Object.assign({}, obj);
        console.log(this.selectedObj);
        this.open(modal);
    };
    MisPedidosCursoComponent.prototype.despachar = function () {
        var _this = this;
        this.loading = true;
        var datos = {
            token: localStorage.getItem('mouvers_token'),
            pedido_id: this.selectedObj.id,
            establecimiento_id: parseInt(this.establecimiento_id)
        };
        this.http.put(this.rutaService.getRutaApi() + 'rutas/despachar/pedido?token=' + localStorage.getItem('mouvers_token'), datos)
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            var aux = _this.productList;
            _this.productList = [];
            for (var i = 0; i < aux.length; ++i) {
                if (aux[i].id != _this.selectedObj.id) {
                    _this.productList.push(aux[i]);
                }
            }
            _this.filteredItems = _this.productList;
            _this.init();
            //console.log(this.productList);
            //alert(this.data.message);
            _this.loading = false;
            _this.showToast('success', 'Success!', _this.data.message);
            _this.headerService.clearNotificationCliAux(_this.selectedObj.id);
            _this.atras();
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
    MisPedidosCursoComponent.prototype.init = function () {
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
    MisPedidosCursoComponent.prototype.FilterByName = function () {
        this.filteredItems = [];
        if (this.inputName != "") {
            for (var i = 0; i < this.productList.length; ++i) {
                if (!this.productList[i].repartidor_nom) {
                    this.productList[i].repartidor_nom = ' ';
                }
                if (this.productList[i].usuario.nombre.toUpperCase().indexOf(this.inputName.toUpperCase()) >= 0) {
                    this.filteredItems.push(this.productList[i]);
                }
                else if (this.productList[i].fecha.toUpperCase().indexOf(this.inputName.toUpperCase()) >= 0) {
                    this.filteredItems.push(this.productList[i]);
                }
                else if (this.productList[i].hora.toUpperCase().indexOf(this.inputName.toUpperCase()) >= 0) {
                    this.filteredItems.push(this.productList[i]);
                }
                else if (this.productList[i].repartidor_nom.toUpperCase().indexOf(this.inputName.toUpperCase()) >= 0) {
                    this.filteredItems.push(this.productList[i]);
                } /*else if (this.productList[i].estado.toUpperCase().indexOf(this.inputName.toUpperCase())>=0) {
                   this.filteredItems.push(this.productList[i]);
                }*/
                else if (this.productList[i].ref.toUpperCase().indexOf(this.inputName.toUpperCase()) >= 0) {
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
    MisPedidosCursoComponent.prototype.fillArray = function () {
        var obj = new Array();
        for (var index = this.pageStart; index < this.pageStart + this.pages; index++) {
            obj.push(index);
        }
        return obj;
    };
    MisPedidosCursoComponent.prototype.refreshItems = function () {
        this.items = this.filteredItems.slice((this.currentIndex - 1) * this.pageSize, (this.currentIndex) * this.pageSize);
        this.pagesIndex = this.fillArray();
    };
    MisPedidosCursoComponent.prototype.prevPage = function () {
        if (this.currentIndex > 1) {
            this.currentIndex--;
        }
        if (this.currentIndex < this.pageStart) {
            this.pageStart = this.currentIndex;
        }
        this.refreshItems();
    };
    MisPedidosCursoComponent.prototype.nextPage = function () {
        if (this.currentIndex < this.pageNumber) {
            this.currentIndex++;
        }
        if (this.currentIndex >= (this.pageStart + this.pages)) {
            this.pageStart = this.currentIndex - this.pages + 1;
        }
        this.refreshItems();
    };
    MisPedidosCursoComponent.prototype.setPage = function (index) {
        this.currentIndex = index;
        this.refreshItems();
    };
    MisPedidosCursoComponent.prototype.init2 = function () {
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
    MisPedidosCursoComponent.prototype.FilterByName2 = function () {
        this.filteredItems2 = [];
        if (this.inputName2 != "") {
            for (var i = 0; i < this.productList2.length; ++i) {
                if (this.productList2[i].usuario.nombre.toUpperCase().indexOf(this.inputName2.toUpperCase()) >= 0) {
                    this.filteredItems2.push(this.productList2[i]);
                }
                else if (this.productList2[i].usuario.email.toUpperCase().indexOf(this.inputName2.toUpperCase()) >= 0) {
                    this.filteredItems2.push(this.productList2[i]);
                }
                else if (this.productList2[i].usuario.telefono.toUpperCase().indexOf(this.inputName2.toUpperCase()) >= 0) {
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
    MisPedidosCursoComponent.prototype.fillArray2 = function () {
        var obj = new Array();
        for (var index = this.pageStart2; index < this.pageStart2 + this.pages2; index++) {
            obj.push(index);
        }
        return obj;
    };
    MisPedidosCursoComponent.prototype.refreshItems2 = function () {
        this.items2 = this.filteredItems2.slice((this.currentIndex2 - 1) * this.pageSize2, (this.currentIndex2) * this.pageSize2);
        this.pagesIndex2 = this.fillArray2();
    };
    MisPedidosCursoComponent.prototype.prevPage2 = function () {
        if (this.currentIndex2 > 1) {
            this.currentIndex2--;
        }
        if (this.currentIndex2 < this.pageStart2) {
            this.pageStart2 = this.currentIndex2;
        }
        this.refreshItems2();
    };
    MisPedidosCursoComponent.prototype.nextPage2 = function () {
        if (this.currentIndex2 < this.pageNumber2) {
            this.currentIndex2++;
        }
        if (this.currentIndex2 >= (this.pageStart2 + this.pages2)) {
            this.pageStart2 = this.currentIndex2 - this.pages2 + 1;
        }
        this.refreshItems2();
    };
    MisPedidosCursoComponent.prototype.setPage2 = function (index) {
        this.currentIndex2 = index;
        this.refreshItems2();
    };
    MisPedidosCursoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-mis-curso-prod',
            template: __webpack_require__("../../../../../src/app/pages/mis-pedidos/mis-pedidos-curso/mis-pedidos-curso.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/mis-pedidos/mis-pedidos-curso/mis-pedidos-curso.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */],
            __WEBPACK_IMPORTED_MODULE_5_angular2_toaster__["d" /* ToasterService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_ruta_base_ruta_base_service__["a" /* RutaBaseService */],
            __WEBPACK_IMPORTED_MODULE_8__services_eventos_services_header_to_pedidos_event_service_header_to_pedidos_event_service__["a" /* HeaderToPedidosEventService */],
            __WEBPACK_IMPORTED_MODULE_9__services_header_service_header_service__["a" /* HeaderService */]])
    ], MisPedidosCursoComponent);
    return MisPedidosCursoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/mis-pedidos/mis-pedidos-finalizados/mis-pedidos-finalizados.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card *ngIf=\"!viendo && mostrar\">\r\n  <nb-card-header>\r\n    <div class=\"row show-grid\">\r\n          <div class=\"col-6\">\r\n            <div>Pedidos despachados</div>\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <div>\r\n              <div style=\"text-align: right;\">\r\n               <strong>Buscar: </strong>\r\n               <input  type=\"text\"  id=\"inputName\" [(ngModel)]=\"inputName\" (ngModelChange)=\"FilterByName()\"/>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n  </nb-card-header>\r\n\r\n  <nb-card-body>\r\n\r\n    <table class=\"table\">\r\n      <thead>\r\n         <!-- <th></th> -->\r\n         <th style=\"text-align: center;\">Pedido</th>\r\n         <th style=\"text-align: center;\">Usuario</th>\r\n         <th style=\"text-align: center;\">Fecha</th>\r\n         <th style=\"text-align: center;\">Hora</th>\r\n         <!-- <th style=\"text-align: center;\">Estado</th> -->\r\n         <th style=\"text-align: center;\">Repartidor</th>\r\n         <th style=\"text-align: center;\">Acciones</th>\r\n      </thead>  \r\n      <tbody>\r\n         <tr *ngFor=\"let item of items\" >\r\n            <!-- <td></td> -->\r\n            <td style=\"text-align: center; vertical-align:middle;\">AI00{{item.id}}</td>\r\n            <td style=\"text-align: center; vertical-align:middle;\">{{item.usuario.nombre}}</td>\r\n            <td style=\"text-align: center; vertical-align:middle;\"><!-- {{item.created_at | date:'dd/MM/yyyy'}} -->{{item.fecha}}</td>\r\n            <td style=\"text-align: center; vertical-align:middle;\"><!-- {{item.created_at | date:'hh:mm:ss'}} -->{{item.hora}}</td>\r\n            <!-- <td style=\"text-align: center; vertical-align:middle;\">{{item.estado}}</td> -->\r\n            <td style=\"text-align: center; vertical-align:middle;\"> {{item.repartidor_nom}} </td>\r\n            <td style=\"text-align: center; vertical-align:middle;\">\r\n              <button type=\"button\" class=\"btn btn-primary btn-icon btn-sm btn-table\" title=\"Ver\" (click)=\"ver(item)\">\r\n                <i class=\"fa fa-eye\"></i>\r\n              </button>\r\n            </td>\r\n         </tr>\r\n      </tbody>\r\n    </table>\r\n      \r\n  </nb-card-body>\r\n  <nb-card-footer>\r\n    <div class=\"btn-toolbar\" role=\"toolbar\" style=\"margin: 0;\">\r\n      <div class=\"btn-group\">\r\n         <label style=\"margin-top:10px\">Página {{currentIndex}}/{{pageNumber}} </label>\r\n      </div>\r\n      <div class=\"btn-group pull-right\">\r\n         <ul class=\"pagination\" >\r\n            <li class=\"page-item\" [ngClass]=\"{'disabled': (currentIndex == 1 || pageNumber == 0)}\" ><a class=\"page-link\"  (click)=\"prevPage()\" >Atrás</a></li>\r\n               <li class=\"page-item\" *ngFor=\"let page of pagesIndex\"  [ngClass]=\"{'active': (currentIndex == page)}\">\r\n                  <a class=\"page-link\" (click)=\"setPage(page)\"  >{{page}} </a>\r\n               </li>\r\n            <li class=\"page-item\" [ngClass]=\"{'disabled': (currentIndex == pageNumber || pageNumber == 0)}\" ><a class=\"page-link\"   (click)=\"nextPage()\" >Siguiente</a></li>\r\n         </ul>\r\n      </div>\r\n    </div>  \r\n  </nb-card-footer>\r\n</nb-card>\r\n\r\n<div class=\"viendo\" *ngIf=\"viendo\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <nb-card>\r\n        <nb-card-header>\r\n          Detalles del Pedido AI00{{selectedObj.id}}\r\n          <div class=\"pull-right\" style=\"margin-right: 10px\">\r\n            Despachado\r\n          </div>\r\n        </nb-card-header>\r\n        <nb-card-body>\r\n\r\n          <h5 *ngIf=\"selectedObj.repartidor_nom\"class=\"grid-h\">Repartidor</h5>\r\n          <div *ngIf=\"selectedObj.repartidor_nom\"class=\"row show-grid\">\r\n\r\n            <div class=\"col-md-4\">\r\n              <div>Nombre</div>\r\n            </div>\r\n            <div class=\"col-md-8\">\r\n              <div>{{selectedObj.repartidor_nom}}</div>\r\n            </div>\r\n\r\n            <div *ngIf=\"selectedObj.repartidor\" class=\"col-md-4\">\r\n              <div>Teléfono</div>\r\n            </div>\r\n            <div *ngIf=\"selectedObj.repartidor\" class=\"col-md-8\">\r\n              <div>{{selectedObj.repartidor.usuario.telefono}}</div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <h5 class=\"grid-h\">Fecha/Hora</h5>\r\n          <div class=\"row show-grid\">\r\n\r\n            <div class=\"col-md-4\">\r\n              <div>Fecha</div>\r\n            </div>\r\n            <div class=\"col-md-8\">\r\n              <div>{{selectedObj.fecha}}</div>\r\n            </div>\r\n\r\n            <div class=\"col-md-4\">\r\n              <div>Hora</div>\r\n            </div>\r\n            <div class=\"col-md-8\">\r\n              <div>{{selectedObj.hora}}</div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <h5 class=\"grid-h\">Usuario</h5>\r\n          <div class=\"row show-grid\">\r\n\r\n            <div class=\"col-md-4\">\r\n              <div>Nombre</div>\r\n            </div>\r\n            <div class=\"col-md-8\">\r\n              <div>{{selectedObj.usuario.nombre}}</div>\r\n            </div>\r\n\r\n            <div class=\"col-md-4\">\r\n              <div>Email</div>\r\n            </div>\r\n            <div class=\"col-md-8\">\r\n              <div>{{selectedObj.usuario.email}}</div>\r\n            </div>\r\n\r\n            <div class=\"col-md-4\">\r\n              <div>Teléfono</div>\r\n            </div>\r\n            <div class=\"col-md-8\">\r\n              <div>{{selectedObj.usuario.telefono}}</div>\r\n            </div>\r\n\r\n            <div class=\"col-md-4\">\r\n              <div>Ciudad</div>\r\n            </div>\r\n            <div class=\"col-md-8\">\r\n              <div>{{selectedObj.usuario.ciudad}}</div>\r\n            </div>\r\n\r\n            <div class=\"col-md-4\">\r\n              <div>Estado</div>\r\n            </div>\r\n            <div class=\"col-md-8\">\r\n              <div>{{selectedObj.usuario.estado}}</div>\r\n            </div>\r\n\r\n            <div *ngIf=\"selectedObj.destinatario\" class=\"col-md-4\">\r\n              <div>Destinatario</div>\r\n            </div>\r\n            <div *ngIf=\"selectedObj.destinatario\" class=\"col-md-8\">\r\n              <div>{{selectedObj.destinatario}}</div>\r\n            </div>\r\n\r\n            <div *ngIf=\"selectedObj.destinatario\" class=\"col-md-4\">\r\n              <div>Teléfono</div>\r\n            </div>\r\n            <div *ngIf=\"selectedObj.destinatario\" class=\"col-md-8\">\r\n              <div>{{selectedObj.telefono}}</div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <h5 class=\"grid-h\">Referencias</h5>\r\n          <div class=\"row show-grid\">\r\n\r\n            <div class=\"col-md-4\">\r\n              <div>Dirección</div>\r\n            </div>\r\n            <div class=\"col-md-8\">\r\n              <div>{{selectedObj.direccion}}</div>\r\n            </div>\r\n\r\n            <div class=\"col-md-4\">\r\n              <div>Referencia</div>\r\n            </div>\r\n            <div class=\"col-md-8\">\r\n              <div>{{selectedObj.referencia}}</div>\r\n            </div>\r\n\r\n            <div class=\"col-md-12\">\r\n              <div *ngIf=\"selectedObj.lat && selectedObj.lng\">\r\n                <!-- <strong>Aqui el mapa</strong> -->\r\n                <agm-map style=\"height: 300px;\" [zoom]=\"13\" [latitude]=\"selectedObj.lat\" [longitude]=\"selectedObj.lng\">\r\n                      <agm-marker style=\"height: 300px;\" [latitude]=\"selectedObj.lat\" [longitude]=\"selectedObj.lng\"></agm-marker>\r\n                  </agm-map>\r\n              </div>\r\n            </div>\r\n\r\n\r\n          </div>\r\n\r\n          <h5 class=\"grid-h\">Productos Solicitados</h5>\r\n          <div class=\"table-responsive\">\r\n            <table class=\"table table-bordered table-striped\">\r\n              <thead>\r\n                <tr>\r\n                  <th>\r\n                   Producto\r\n                  </th>\r\n                  <th>\r\n                   Establecimiento\r\n                  </th>\r\n                  <th>\r\n                   Observación\r\n                  </th>\r\n                  <th>\r\n                   Solicitados\r\n                  </th>\r\n                  <th>\r\n                   Precio Unit. <small>($ MXN)</small>\r\n                  </th>\r\n                  <th>\r\n                   Sub-total <small>($ MXN)</small>\r\n                  </th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let item of selectedObj.productos\">\r\n                  <td *ngIf=\"item.establecimiento_id == establecimiento_id\" class=\"text-center\">\r\n                    {{item.nombre}}\r\n                  </td>\r\n                  <td *ngIf=\"item.establecimiento_id == establecimiento_id\" class=\"text-center\">\r\n                    {{item.establecimiento.nombre}}\r\n                  </td>\r\n                  <td *ngIf=\"item.establecimiento_id == establecimiento_id\">\r\n                    {{item.pivot.observacion}}\r\n                  </td>\r\n                  <td *ngIf=\"item.establecimiento_id == establecimiento_id\" class=\"text-center\">\r\n                    {{item.pivot.cantidad}}\r\n                  </td>\r\n                  <td *ngIf=\"item.establecimiento_id == establecimiento_id\" class=\"text-center\">\r\n                    {{item.pivot.precio_unitario}}\r\n                  </td>\r\n                  <td *ngIf=\"item.establecimiento_id == establecimiento_id\" class=\"text-center\">\r\n                    {{item.pivot.precio_unitario * item.pivot.cantidad}}\r\n                  </td>\r\n                  \r\n                </tr>\r\n                \r\n                <tr>\r\n                  <td colspan=\"6\"></td>\r\n                </tr>\r\n                <!-- <tr>\r\n                  <td colspan=\"4\" style=\"text-align: right;\"><strong>Envío</strong> <small>($ MXN)</small></td>\r\n                  <td class=\"text-center\">{{selectedObj.costo_envio}}</td>\r\n                </tr> -->\r\n                <!-- <tr>\r\n                  <td colspan=\"4\" style=\"text-align: right;\"><strong>Sub-total</strong> <small>($ MXN)</small></td>\r\n                  <td class=\"text-center\">{{selectedObj.subtotal}}</td>\r\n                </tr> -->\r\n                <tr>\r\n                  <td colspan=\"5\" style=\"text-align: right;\"><strong>Total</strong> <small>($ MXN)</small></td>\r\n                  <td class=\"text-center\">{{selectedObj.costoEst | number: '1.2-2'}}</td>\r\n                </tr> \r\n              </tbody>\r\n            </table>\r\n          </div>\r\n\r\n          <h5 *ngIf=\"selectedObj.calificacion\" class=\"grid-h\">Calificación</h5>\r\n          <div *ngIf=\"selectedObj.calificacion\" class=\"row show-grid\">\r\n\r\n            <div class=\"col-md-4\">\r\n              <div>Puntaje</div>\r\n            </div>\r\n            <div class=\"col-md-8\">\r\n              <div>\r\n                <ngb-rating [(rate)]=\"selectedObj.calificacion.puntaje\" max=5>\r\n                  <ng-template let-fill=\"fill\">\r\n                    <span class=\"star fill\" [class.filled]=\"fill === 100\">\r\n                      <i class=\"ion-android-star\" *ngIf=\"fill === 100\"></i>\r\n                      <i class=\"ion-android-star-outline\" *ngIf=\"fill !== 100\"></i>\r\n                    </span>\r\n                  </ng-template>\r\n                </ngb-rating>\r\n                <span class=\"current-rate\">{{ selectedObj.calificacion.puntaje }}</span>\r\n              </div>\r\n            </div>\r\n\r\n            <div *ngIf=\"selectedObj.calificacion.comentario && selectedObj.calificacion.comentario != ''\" class=\"col-md-4\">\r\n              <div>Comentario</div>\r\n            </div>\r\n            <div *ngIf=\"selectedObj.calificacion.comentario && selectedObj.calificacion.comentario != ''\" class=\"col-md-8\">\r\n              <div>{{selectedObj.calificacion.comentario}}</div>\r\n            </div>\r\n\r\n          </div>\r\n          \r\n        </nb-card-body>\r\n        <nb-card-footer>\r\n          <button  class=\"btn btn-tn btn-secondary\" (click)=\"atras()\"><i class=\"fa fa-arrow-left\"></i> Atrás</button>\r\n        </nb-card-footer>\r\n      </nb-card>\r\n    </div>\r\n</div>\r\n</div>\r\n\r\n<ng-template #modal1 let-c=\"close\" let-d=\"dismiss\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">Eliminar Producto: </h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <p>¿Realmente desea eliminar el producto {{eliminar_nombre}}?</p>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Cancelar</button>\r\n    <button type=\"button\" class=\"btn btn-danger\" (click)=\"c('Close click'); eliminar()\">Eliminar</button>\r\n  </div>\r\n</ng-template>\r\n\r\n<toaster-container [toasterconfig]=\"config\"></toaster-container>\r\n\r\n<div class=\"my-container\">\r\n    <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '4px' }\"></ngx-loading>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/mis-pedidos/mis-pedidos-finalizados/mis-pedidos-finalizados.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) .btn-table {\n  display: inline-block; }\n\n:host-context(.nb-theme-default) .img-table {\n  border-radius: 4px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n:host-context(.nb-theme-default) .viendo .star {\n  color: #a4abb3; }\n\n:host-context(.nb-theme-default) .viendo .filled {\n  color: #a4abb3; }\n\n:host-context(.nb-theme-default) .viendo .current-rate {\n  padding-left: 1rem; }\n\n:host-context(.nb-theme-default) .viendo ngb-rating {\n  outline: none; }\n\n:host-context(.nb-theme-default) .viendo ngb-rating i {\n  color: #0b417a; }\n\n:host-context(.nb-theme-default) .viendo .show-grid .row {\n  margin: -0.5rem; }\n\n:host-context(.nb-theme-default) .viendo .show-grid div[class^=col-] {\n  padding: 0.5rem;\n  box-sizing: border-box; }\n  :host-context(.nb-theme-default) .viendo .show-grid div[class^=col-] div {\n    text-align: center;\n    background-color: #e9edf2;\n    padding: 0.75rem 0.25rem;\n    border-radius: 0.25rem; }\n\n:host-context(.nb-theme-default) .viendo .grid-h {\n  margin-top: 1.5rem; }\n  :host-context(.nb-theme-default) .viendo .grid-h:first-child {\n    margin-top: 0; }\n\n:host-context(.nb-theme-default) .viendo .table-responsive {\n  margin-top: 1rem; }\n\n:host-context(.nb-theme-cosmic) .btn-table {\n  display: inline-block; }\n\n:host-context(.nb-theme-cosmic) .img-table {\n  border-radius: 4px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n:host-context(.nb-theme-cosmic) .viendo .star {\n  color: #76f8f6; }\n\n:host-context(.nb-theme-cosmic) .viendo .filled {\n  color: #76f8f6; }\n\n:host-context(.nb-theme-cosmic) .viendo .current-rate {\n  padding-left: 1rem; }\n\n:host-context(.nb-theme-cosmic) .viendo ngb-rating {\n  outline: none; }\n\n:host-context(.nb-theme-cosmic) .viendo ngb-rating i {\n  color: #0b417a;\n  color: #0b417a; }\n\n:host-context(.nb-theme-cosmic) .viendo .show-grid .row {\n  margin: -0.5rem; }\n\n:host-context(.nb-theme-cosmic) .viendo .show-grid div[class^=col-] {\n  padding: 0.5rem;\n  box-sizing: border-box; }\n  :host-context(.nb-theme-cosmic) .viendo .show-grid div[class^=col-] div {\n    text-align: center;\n    background-color: #494299;\n    padding: 0.75rem 0.25rem;\n    border-radius: 0.25rem; }\n\n:host-context(.nb-theme-cosmic) .viendo .grid-h {\n  margin-top: 1.5rem; }\n  :host-context(.nb-theme-cosmic) .viendo .grid-h:first-child {\n    margin-top: 0; }\n\n:host-context(.nb-theme-cosmic) .viendo .table-responsive {\n  margin-top: 1rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/mis-pedidos/mis-pedidos-finalizados/mis-pedidos-finalizados.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MisPedidosFinalizadosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_ruta_base_ruta_base_service__ = __webpack_require__("../../../../../src/app/services/ruta-base/ruta-base.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_style_loader_angular2_toaster_toaster_css__ = __webpack_require__("../../../../style-loader/index.js!../../../../angular2-toaster/toaster.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_style_loader_angular2_toaster_toaster_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_style_loader_angular2_toaster_toaster_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_eventos_services_header_to_pedidos_event_service_header_to_pedidos_event_service__ = __webpack_require__("../../../../../src/app/services/eventos-services/header-to-pedidos-event-service/header-to-pedidos-event.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_header_service_header_service__ = __webpack_require__("../../../../../src/app/services/header-service/header.service.ts");
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









var MisPedidosFinalizadosComponent = /** @class */ (function () {
    function MisPedidosFinalizadosComponent(modalService, toasterService, http, router, rutaService, headerToPedidosEventService, headerService) {
        var _this = this;
        this.modalService = modalService;
        this.toasterService = toasterService;
        this.http = http;
        this.router = router;
        this.rutaService = rutaService;
        this.headerToPedidosEventService = headerToPedidosEventService;
        this.headerService = headerService;
        this.starRate = 2;
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
        this.viendo = false;
        this.mostrar = true;
        this.establecimiento_id = localStorage.getItem('mouvers_establecimiento_id');
        this.establecimiento_nom = localStorage.getItem('mouvers_user_nombre');
        this.mouvers_user_tipo = localStorage.getItem('mouvers_user_tipo');
        this.pages = 4;
        this.pageSize = 5;
        this.pageNumber = 0;
        this.currentIndex = 1;
        this.pageStart = 1;
        this.inputName = '';
        //Detectar evento cargar pedido de notificacion entrante
        this.headerToPedidosEventService.headerToPedidosData.subscribe(function (data) {
            //console.log(data); 
            _this.headerEvent();
        });
    }
    MisPedidosFinalizadosComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.mouvers_user_tipo != '4') {
            localStorage.removeItem('mouvers_token');
            localStorage.removeItem('mouvers_user_id');
            localStorage.removeItem('mouvers_user_nombre');
            localStorage.removeItem('mouvers_user_tipo');
            localStorage.removeItem('mouvers_establecimiento_id');
            this.router.navigateByUrl('/pagessimples/loginf');
        }
        this.viendo = null;
        this.loading = true;
        this.http.get(this.rutaService.getRutaApi() + 'pedidos/establecimiento/' + this.establecimiento_id + '?despachado=' + 2 + '&token=' + localStorage.getItem('mouvers_token'))
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            //Cambiar el formato de la fecha y hora
            var dia;
            var mes;
            var anio;
            var fecha;
            var hora;
            var minutos;
            var segundos;
            for (var i = 0; i < _this.data.pedidos.length; i++) {
                fecha = new Date(_this.data.pedidos[i].created_at);
                dia = fecha.getDate();
                mes = fecha.getMonth() + 1;
                anio = fecha.getFullYear();
                hora = fecha.getHours();
                minutos = fecha.getMinutes();
                segundos = fecha.getSeconds();
                _this.data.pedidos[i].fecha = dia + '/' + mes + '/' + anio;
                _this.data.pedidos[i].hora = hora + ':' + minutos + ':' + segundos;
                _this.data.pedidos[i].ref = 'M00' + _this.data.pedidos[i].id;
                //Control de estados del pedido
                if (_this.data.pedidos[i].estado == 1) {
                    _this.data.pedidos[i].estado = 'No asignado';
                }
                else if (_this.data.pedidos[i].estado == 2) {
                    _this.data.pedidos[i].estado = 'Asignado';
                }
                else if (_this.data.pedidos[i].estado == 3) {
                    _this.data.pedidos[i].estado = 'En camino';
                }
                else if (_this.data.pedidos[i].estado == 4) {
                    _this.data.pedidos[i].estado = 'Entregado';
                }
            }
            setTimeout(function () {
                _this.productList = _this.data.pedidos;
                _this.filteredItems = _this.productList;
                //console.log(this.productList);
                _this.init();
                //verificar si hay que cargar un pedido de una notificacion
                setTimeout(function () {
                    _this.checkHeaderEvent();
                    _this.loading = false;
                }, 600);
            }, 1000);
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
    MisPedidosFinalizadosComponent.prototype.ngOnDestroy = function () {
        // acciones de destrucción
        localStorage.setItem('mouvers_pedido_id', '');
    };
    MisPedidosFinalizadosComponent.prototype.showToast = function (type, title, body) {
        this.config = new __WEBPACK_IMPORTED_MODULE_5_angular2_toaster__["b" /* ToasterConfig */]({
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
            bodyOutputType: __WEBPACK_IMPORTED_MODULE_5_angular2_toaster__["a" /* BodyOutputType */].TrustedHtml,
        };
        this.toasterService.popAsync(toast);
    };
    //Abrir modal por defecto
    MisPedidosFinalizadosComponent.prototype.open = function (modal) {
        this.modalService.open(modal);
    };
    //Abrir modal larga
    MisPedidosFinalizadosComponent.prototype.open2 = function (modal) {
        this.modalService.open(modal, { size: 'lg', backdrop: 'static', container: 'nb-layout', keyboard: false });
    };
    MisPedidosFinalizadosComponent.prototype.atras = function () {
        this.viendo = false;
        this.selectedObj = null;
        this.objAEliminar = null;
    };
    MisPedidosFinalizadosComponent.prototype.aEliminar = function (obj) {
        this.objAEliminar = obj;
        //console.log(this.objAEliminar);
        this.eliminar_id = this.objAEliminar.id;
        this.eliminar_nombre = this.objAEliminar.nombre;
    };
    MisPedidosFinalizadosComponent.prototype.eliminar = function () {
        var _this = this;
        console.log(this.objAEliminar);
        this.loading = true;
        var datos = {
            token: localStorage.getItem('mouvers_token')
        };
        this.http.delete(this.rutaService.getRutaApi() + 'productos/' + this.eliminar_id + '?token=' + localStorage.getItem('mouvers_token'))
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
    MisPedidosFinalizadosComponent.prototype.ver = function (obj) {
        this.viendo = true;
        this.selectedObj = Object.assign({}, obj);
        console.log(this.selectedObj);
        if (this.selectedObj.lat && this.selectedObj.lng) {
            this.selectedObj.lat = parseFloat(this.selectedObj.lat);
            this.selectedObj.lng = parseFloat(this.selectedObj.lng);
        }
        //Recalcular el total para el establecimiento
        var est_id = parseInt(this.establecimiento_id);
        this.selectedObj.costoEst = 0;
        for (var i = 0; i < this.selectedObj.productos.length; i++) {
            if (this.selectedObj.productos[i].establecimiento_id == est_id) {
                this.selectedObj.costoEst += this.selectedObj.productos[i].pivot.cantidad * this.selectedObj.productos[i].pivot.precio_unitario;
            }
        }
    };
    MisPedidosFinalizadosComponent.prototype.headerEvent = function () {
        this.ngOnInit();
    };
    MisPedidosFinalizadosComponent.prototype.checkHeaderEvent = function () {
        if (localStorage.getItem('mouvers_pedido_id') &&
            localStorage.getItem('mouvers_pedido_id') != '' &&
            localStorage.getItem('mouvers_pedido_id') != 'null') {
            var existe = false;
            var pedido_id = parseInt(localStorage.getItem('mouvers_pedido_id'));
            for (var i = 0; i < this.productList.length; i++) {
                if (this.productList[i].id == pedido_id) {
                    this.ver(this.productList[i]);
                    localStorage.setItem('mouvers_pedido_id', '');
                    this.headerService.clearNotificationCliAux(this.productList[i].id);
                    existe = true;
                }
            }
            if (!existe) {
                this.showToast('warning', 'Warning!', 'El pedido solicitado ya no está en esta sección.');
            }
        }
    };
    MisPedidosFinalizadosComponent.prototype.init = function () {
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
    MisPedidosFinalizadosComponent.prototype.FilterByName = function () {
        this.filteredItems = [];
        if (this.inputName != "") {
            for (var i = 0; i < this.productList.length; ++i) {
                if (!this.productList[i].repartidor) {
                    this.productList[i].repartidor_nom = ' ';
                }
                if (this.productList[i].usuario.nombre.toUpperCase().indexOf(this.inputName.toUpperCase()) >= 0) {
                    this.filteredItems.push(this.productList[i]);
                }
                else if (this.productList[i].fecha.toUpperCase().indexOf(this.inputName.toUpperCase()) >= 0) {
                    this.filteredItems.push(this.productList[i]);
                }
                else if (this.productList[i].hora.toUpperCase().indexOf(this.inputName.toUpperCase()) >= 0) {
                    this.filteredItems.push(this.productList[i]);
                }
                else if (this.productList[i].repartidor_nom.toUpperCase().indexOf(this.inputName.toUpperCase()) >= 0) {
                    this.filteredItems.push(this.productList[i]);
                } /*else if (this.productList[i].estado.toUpperCase().indexOf(this.inputName.toUpperCase())>=0) {
                   this.filteredItems.push(this.productList[i]);
                }*/
                else if (this.productList[i].ref.toUpperCase().indexOf(this.inputName.toUpperCase()) >= 0) {
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
    MisPedidosFinalizadosComponent.prototype.fillArray = function () {
        var obj = new Array();
        for (var index = this.pageStart; index < this.pageStart + this.pages; index++) {
            obj.push(index);
        }
        return obj;
    };
    MisPedidosFinalizadosComponent.prototype.refreshItems = function () {
        this.items = this.filteredItems.slice((this.currentIndex - 1) * this.pageSize, (this.currentIndex) * this.pageSize);
        this.pagesIndex = this.fillArray();
    };
    MisPedidosFinalizadosComponent.prototype.prevPage = function () {
        if (this.currentIndex > 1) {
            this.currentIndex--;
        }
        if (this.currentIndex < this.pageStart) {
            this.pageStart = this.currentIndex;
        }
        this.refreshItems();
    };
    MisPedidosFinalizadosComponent.prototype.nextPage = function () {
        if (this.currentIndex < this.pageNumber) {
            this.currentIndex++;
        }
        if (this.currentIndex >= (this.pageStart + this.pages)) {
            this.pageStart = this.currentIndex - this.pages + 1;
        }
        this.refreshItems();
    };
    MisPedidosFinalizadosComponent.prototype.setPage = function (index) {
        this.currentIndex = index;
        this.refreshItems();
    };
    MisPedidosFinalizadosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-mis-finalizados-prod',
            template: __webpack_require__("../../../../../src/app/pages/mis-pedidos/mis-pedidos-finalizados/mis-pedidos-finalizados.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/mis-pedidos/mis-pedidos-finalizados/mis-pedidos-finalizados.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */],
            __WEBPACK_IMPORTED_MODULE_5_angular2_toaster__["d" /* ToasterService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_ruta_base_ruta_base_service__["a" /* RutaBaseService */],
            __WEBPACK_IMPORTED_MODULE_8__services_eventos_services_header_to_pedidos_event_service_header_to_pedidos_event_service__["a" /* HeaderToPedidosEventService */],
            __WEBPACK_IMPORTED_MODULE_9__services_header_service_header_service__["a" /* HeaderService */]])
    ], MisPedidosFinalizadosComponent);
    return MisPedidosFinalizadosComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/mis-pedidos/mis-pedidos-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MisPedidosRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routedComponents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mis_pedidos_component__ = __webpack_require__("../../../../../src/app/pages/mis-pedidos/mis-pedidos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mis_pedidos_curso_mis_pedidos_curso_component__ = __webpack_require__("../../../../../src/app/pages/mis-pedidos/mis-pedidos-curso/mis-pedidos-curso.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mis_pedidos_finalizados_mis_pedidos_finalizados_component__ = __webpack_require__("../../../../../src/app/pages/mis-pedidos/mis-pedidos-finalizados/mis-pedidos-finalizados.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__mis_pedidos_component__["a" /* MisPedidosComponent */],
        children: [{
                path: 'encurso',
                component: __WEBPACK_IMPORTED_MODULE_3__mis_pedidos_curso_mis_pedidos_curso_component__["a" /* MisPedidosCursoComponent */],
            }, {
                path: 'finalizados',
                component: __WEBPACK_IMPORTED_MODULE_4__mis_pedidos_finalizados_mis_pedidos_finalizados_component__["a" /* MisPedidosFinalizadosComponent */],
            }],
    }];
var MisPedidosRoutingModule = /** @class */ (function () {
    function MisPedidosRoutingModule() {
    }
    MisPedidosRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */],
            ],
        })
    ], MisPedidosRoutingModule);
    return MisPedidosRoutingModule;
}());

var routedComponents = [
    __WEBPACK_IMPORTED_MODULE_2__mis_pedidos_component__["a" /* MisPedidosComponent */],
    __WEBPACK_IMPORTED_MODULE_3__mis_pedidos_curso_mis_pedidos_curso_component__["a" /* MisPedidosCursoComponent */],
    __WEBPACK_IMPORTED_MODULE_4__mis_pedidos_finalizados_mis_pedidos_finalizados_component__["a" /* MisPedidosFinalizadosComponent */],
];


/***/ }),

/***/ "../../../../../src/app/pages/mis-pedidos/mis-pedidos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MisPedidosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MisPedidosComponent = /** @class */ (function () {
    function MisPedidosComponent() {
    }
    MisPedidosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-cat-elements',
            template: "\n    <router-outlet></router-outlet>\n  ",
        })
    ], MisPedidosComponent);
    return MisPedidosComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/mis-pedidos/mis-pedidos.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MisPedidosModule", function() { return MisPedidosModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme_theme_module__ = __webpack_require__("../../../../../src/app/@theme/theme.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mis_pedidos_routing_module__ = __webpack_require__("../../../../../src/app/pages/mis-pedidos/mis-pedidos-routing.module.ts");
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

var MisPedidosModule = /** @class */ (function () {
    function MisPedidosModule() {
    }
    MisPedidosModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyCr8zuLtOO7IoK_rC948rLcqyqsIaZOouY',
                    libraries: ["places"]
                }),
                //Ng2UploaderModule,
                __WEBPACK_IMPORTED_MODULE_4_angular2_toaster__["c" /* ToasterModule */],
                __WEBPACK_IMPORTED_MODULE_1__theme_theme_module__["a" /* ThemeModule */],
                __WEBPACK_IMPORTED_MODULE_2__mis_pedidos_routing_module__["a" /* MisPedidosRoutingModule */],
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
            declarations: __WEBPACK_IMPORTED_MODULE_2__mis_pedidos_routing_module__["b" /* routedComponents */].slice(),
            providers: [],
        })
    ], MisPedidosModule);
    return MisPedidosModule;
}());



/***/ })

});
//# sourceMappingURL=mis-pedidos.module.chunk.js.map