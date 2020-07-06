webpackJsonp(["socios.module"],{

/***/ "../../../../../src/app/pages/socios/registrar/registrar.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card *ngIf=\"!editando && mostrar\">\r\n  <nb-card-header>\r\n    <div class=\"row show-grid\">\r\n          <div class=\"col-6\">\r\n            <div>Lista de Socios</div>\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <div>\r\n              <div style=\"text-align: right;\">\r\n               <strong>Buscar: </strong>\r\n               <input  type=\"text\"  id=\"inputName\" [(ngModel)]=\"inputName\" (ngModelChange)=\"FilterByName()\"/>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n  </nb-card-header>\r\n\r\n  <nb-card-body>\r\n\r\n    <table class=\"table\">\r\n      <thead>\r\n         <th style=\"text-align: center;\">Imagen</th>\r\n         <th style=\"text-align: center;\">Nombre</th>\r\n         <th style=\"text-align: center;\">Email</th>\r\n         <th style=\"text-align: center;\">Teléfono</th>\r\n         <th style=\"text-align: center;\">Ciudad</th>\r\n         <th style=\"text-align: center;\">Ingresó</th>\r\n         <th style=\"text-align: center;\">Estado</th>\r\n         <th style=\"text-align: center;\">Acciones</th>\r\n      </thead>\r\n      <tbody>\r\n         <tr *ngFor=\"let item of items\" >\r\n            <td style=\"text-align: center; vertical-align:middle;\"><img src = \"{{item.usuario.imagen}}\" alt=\"\" class=\"img-table\" height=\"50px\" width=\"80px\" style=\"border-radius: 10px;\"></td>\r\n            <td style=\"text-align: center; vertical-align:middle;\">{{item.usuario.nombre}}</td>\r\n            <td style=\"text-align: center; vertical-align:middle;\">\r\n            {{item.usuario.email}}</td>\r\n            <td style=\"text-align: center; vertical-align:middle;\">{{item.usuario.telefono}}</td>\r\n            <td style=\"text-align: center; vertical-align:middle;\">{{item.usuario.ciudad}}</td>\r\n            <td style=\"text-align: center; vertical-align:middle;\">\r\n            {{item.created_at}}</td>\r\n            <td style=\" vertical-align:middle;\">\r\n              <!--div class=\"estado\" style=\"display:block; margin:auto\">\r\n                <label class=\"theme-switch\">\r\n                  <span class=\"light\">OFF</span>\r\n                  <div class=\"switch\">\r\n                    <input type=\"checkbox\" [checked]=\"item.estado === 'ON'\" (change)=\"cambiarEstado(item)\" #theme>\r\n                    <span class=\"slider\"></span>\r\n                  </div>\r\n                  <span class=\"cosmic\">ON</span>\r\n                </label>\r\n              </div-->\r\n              <nb-checkbox [value]=\"item.estado === 'ON'\"  (change)=\"cambiarEstado(item)\"></nb-checkbox>\r\n            </td> \r\n            \r\n            <td style=\"text-align: center; vertical-align:middle;\">\r\n              <button type=\"button\" class=\"btn btn-primary btn-icon btn-sm btn-table\" title=\"Editar\" (click)=\"aEditar(item)\">\r\n                <i class=\"nb-edit\"></i>\r\n              </button>\r\n              <button type=\"button\" class=\"btn btn-danger btn-icon btn-sm btn-table\" title=\"Eliminar\" (click)=\"open(modal1); aEliminar(item)\">\r\n                <i class=\"nb-trash\"></i>\r\n              </button>\r\n              <button type=\"button\" class=\"btn btn-primary btn-icon btn-sm btn-table\" title=\"Chat\" (click)=\"chat(item)\">\r\n                <i class=\"nb-email\"></i>\r\n              </button>\r\n            </td>\r\n         </tr>\r\n      </tbody>\r\n    </table>\r\n      \r\n  </nb-card-body>\r\n  <nb-card-footer>\r\n    <div class=\"btn-toolbar\" role=\"toolbar\" style=\"margin: 0;\">\r\n      <div class=\"btn-group\">\r\n         <label style=\"margin-top:10px\">Página {{currentIndex}}/{{pageNumber}} </label>\r\n      </div>\r\n      <div class=\"btn-group pull-right\">\r\n         <ul class=\"pagination\" >\r\n            <li class=\"page-item\" [ngClass]=\"{'disabled': (currentIndex == 1 || pageNumber == 0)}\" ><a class=\"page-link\"  (click)=\"prevPage()\" >Atrás</a></li>\r\n               <li class=\"page-item\" *ngFor=\"let page of pagesIndex\"  [ngClass]=\"{'active': (currentIndex == page)}\">\r\n                  <a class=\"page-link\" (click)=\"setPage(page)\"  >{{page}} </a>\r\n               </li>\r\n            <li class=\"page-item\" [ngClass]=\"{'disabled': (currentIndex == pageNumber || pageNumber == 0)}\" ><a class=\"page-link\"   (click)=\"nextPage()\" >Siguiente</a></li>\r\n         </ul>\r\n      </div>\r\n    </div>  \r\n  </nb-card-footer>\r\n</nb-card>\r\n\r\n<div class=\"row\" *ngIf=\"editando\">\r\n  <div class=\"col-lg-12\" style=\"display:block; margin:auto\">\r\n    <nb-card>\r\n      <nb-card-header>Editar información del Proveedor</nb-card-header>\r\n      <nb-card-body>\r\n        <form [formGroup]=\"myFormEditar\" novalidate>\r\n          <div class=\"row\">\r\n          \r\n            <div class=\"form-group\" class=\"col-3\"> \r\n              <label for=\"exampleInputNombre\">Nombre</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"exampleInputNombre\" placeholder=\"Nombre\" formControlName=\"nombre\">\r\n              <div *ngIf=\"myFormEditar.get('nombre').errors && myFormEditar.get('nombre').dirty\">\r\n                <p *ngIf=\"myFormEditar.get('nombre').hasError('required')\">Nombre es requerido</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\" class=\"col-3\">\r\n              <label for=\"exampleInputEmail\">Email</label>\r\n              <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail\" placeholder=\"Email\" formControlName=\"email\">\r\n              <div *ngIf=\"myFormEditar.get('email').errors && myFormEditar.get('email').dirty\">\r\n                <p *ngIf=\"myFormEditar.get('email').hasError('required')\">Email es requerido</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\" class=\"col-3\">\r\n              <label for=\"exampleInputTelefono\">Teléfono</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"exampleInputTelefono\" placeholder=\"Telefono\" formControlName=\"telefono\">\r\n              <div *ngIf=\"myFormEditar.get('telefono').errors && myFormEditar.get('telefono').dirty\">\r\n                <p *ngIf=\"myFormEditar.get('telefono').hasError('required')\">Teléfono es requerido</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\" class=\"col-3\">\r\n              <label for=\"exampleInputTelefono\">Foto</label><br>\r\n              <img src=\"{{myFormEditar.value.foto}}\" alt=\"\" style=\"width: 250px; height: 250px; border-radius: 20px;\">\r\n                <input [hidden]=\"clear\" type=\"file\" name=\"imagen\" id=\"imagen\" (change)=\"onFileChange($event)\" #fileInput accept=\"image/*\">\r\n                  <div *ngIf=\"clear\">\r\n                    <button type=\"button\" class=\"btn btn-danger btn-tn\" (click)=\"clearFile()\">Eliminar</button>\r\n                  </div>\r\n                  <p [hidden]=\"clear\" style=\"color: #c71717\"><b>Sugerencia:</b> La dimensión de la imagen no debe ser mayor a 870x370 px.</p>\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"form-group\" class=\"col-3\">\r\n              <label for=\"exampleInputTelefono\">Documento de identidad</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"cedula\" placeholder=\"\" formControlName=\"cedula\">\r\n            </div>\r\n\r\n            <div class=\"form-group\" class=\"col-3\">\r\n              <label for=\"exampleInputTelefono\">Nacionalidad</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"nacionalidad\" placeholder=\"\" formControlName=\"nacionalidad\">\r\n            </div>\r\n\r\n            <div class=\"form-group\" class=\"col-3\">\r\n              <label for=\"exampleInputTelefono\">Dirección</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"direccion\" placeholder=\"\" formControlName=\"direccion\"> {{myFormEditar.value.lat}}-{{myFormEditar.value.lng}}\r\n            </div>\r\n            <div class=\"form-group\" class=\"col-3\">\r\n              <label for=\"exampleInputTelefono\">Dirección exacta</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"direccion_exacta\" placeholder=\"\" formControlName=\"direccion_exacta\">\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"form-group\" class=\"col-4\">\r\n              <label for=\"exampleInputTelefono\">Sexo</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"sexo\" placeholder=\"\" formControlName=\"sexo\">\r\n            </div>\r\n            <div class=\"form-group\" class=\"col-4\">\r\n              <label for=\"exampleInputTelefono\">Fecha Nacimiento</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"fecha_nacimiento\" placeholder=\"\" formControlName=\"fecha_nacimiento\">\r\n            </div>\r\n            <div class=\"form-group\" class=\"col-4\">\r\n              <label for=\"exampleInputTelefono\">Formación</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"formacion\" placeholder=\"\" formControlName=\"formacion\">\r\n            </div>\r\n          </div>\r\n          \r\n          <br><br>\r\n          <hr>\r\n          <br><br>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"form-group\" class=\"col-3\">\r\n              <label for=\"exampleInputTelefono\">Tipo de registro</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"exampleInputTipo\" placeholder=\"Tipo de registro\" formControlName=\"tipo2\">\r\n            </div>\r\n\r\n            <div class=\"form-group\" class=\"col-3\">\r\n              <label for=\"exampleInputTelefono\">Ruc</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"exampleInputruc\" placeholder=\"ruc\" formControlName=\"ruc\">\r\n            </div>\r\n\r\n            <div class=\"form-group\" class=\"col-3\">\r\n              <label for=\"exampleInputTelefono\">Email empresa</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"exampleInputemail_empresa\" placeholder=\"email\" formControlName=\"email_empresa\">\r\n            </div>\r\n\r\n            <div class=\"form-group\" class=\"col-3\">\r\n              <label for=\"exampleInputTelefono\">Nombre contacto</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"exampleInputcontacto_nombre\" placeholder=\"\" formControlName=\"contacto_nombre\">\r\n            </div>  \r\n          </div>\r\n          \r\n          <div class=\"row\">\r\n            <div class=\"form-group\" class=\"col-6\">\r\n              <label for=\"exampleInputTelefono\">Urgencias</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"exampleInputTipo\" placeholder=\"\" formControlName=\"urgencias\">\r\n            </div>\r\n\r\n            <div class=\"form-group\" class=\"col-6\">\r\n              <label for=\"exampleInputTelefono\">Factura</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"factura\" placeholder=\"factura\" formControlName=\"factura\">\r\n            </div>\r\n\r\n            <div class=\"form-group\" class=\"col-6\">\r\n              <label for=\"exampleInputTelefono\">Cargo contacto</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"contacto_cargo\" placeholder=\"\" formControlName=\"contacto_cargo\">\r\n            </div>\r\n\r\n            <div class=\"form-group\" class=\"col-6\">\r\n              <label for=\"exampleInputTelefono\">Idoneidad</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"idoneidad\" placeholder=\"idoneidad\" formControlName=\"idoneidad\">\r\n            </div>              \r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"form-group\" class=\"col-4\">\r\n              <label for=\"exampleInputTelefono\">Años experiencia</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"anos_experiencia\" placeholder=\"\" formControlName=\"anos_experiencia\">\r\n            </div>\r\n            <div class=\"form-group\" class=\"col-4\">\r\n              <label for=\"exampleInputTelefono\">Experiencia</label>\r\n              <!--input type=\"text\" class=\"form-control\" id=\"experiencia\" placeholder=\"\" formControlName=\"experiencia\"-->\r\n              <div *ngFor=\"let item of myFormEditar.value.experiencia2\">\r\n                <p>-{{item.nombre}}</p>\r\n              </div>  \r\n            </div>\r\n            <div class=\"form-group\" class=\"col-4\">\r\n              <label for=\"exampleInputTelefono\">Idiomas</label>\r\n              <!--input type=\"text\" class=\"form-control\" id=\"idiomas\" placeholder=\"\" formControlName=\"idiomas\"-->\r\n              <div *ngFor=\"let item of myFormEditar.value.idiomas2\">\r\n                <p>-{{item.nombre}}</p>\r\n              </div>  \r\n            </div>\r\n          </div>\r\n          \r\n          <br><br>\r\n          <hr>\r\n          <br><br>\r\n\r\n          <div class=\"form-group\">\r\n            \r\n            <nb-card-header>Disponibilidad</nb-card-header>\r\n              <br><br>\r\n              <div class=\"form-group\" class=\"row\">\r\n                <div class=\"col-4\">\r\n                   <label style=\"font-weight: bold;\">Lunes:</label>\r\n                </div>\r\n                <div class=\"col-4\"><label for=\"exampleInputTelefono\">Inicio:</label>\r\n                  <input type=\"text\" class=\"form-control\" id=\"lunes_i\" placeholder=\"\" formControlName=\"lunes_i\">\r\n                </div>\r\n                <div class=\"col-4\"><label for=\"exampleInputTelefono\">Fin:</label>\r\n                  <input type=\"text\" class=\"form-control\" id=\"lunes_f\" placeholder=\"\" formControlName=\"lunes_f\">\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\" class=\"row\">\r\n                <div class=\"col-4\">\r\n                   <label style=\"font-weight: bold;\">Martes:</label>\r\n                </div>\r\n                <div class=\"col-4\"><label for=\"exampleInputTelefono\">Inicio:</label>\r\n                  <input type=\"text\" class=\"form-control\" id=\"martes_i\" placeholder=\"\" formControlName=\"martes_f\">\r\n                </div>\r\n                <div class=\"col-4\"><label for=\"exampleInputTelefono\">Fin:</label>\r\n                  <input type=\"text\" class=\"form-control\" id=\"martes_i\" placeholder=\"\" formControlName=\"martes_f\">\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\" class=\"row\">\r\n                <div class=\"col-4\">\r\n                   <label for=\"exampleInputTelefono\" style=\"font-weight: bold;\">Miercoles:</label>\r\n                </div>\r\n                <div class=\"col-4\"><label for=\"exampleInputTelefono\">Inicio:</label>\r\n                  <input type=\"text\" class=\"form-control\" id=\"miercoles_i\" placeholder=\"\" formControlName=\"miercoles_f\">\r\n                </div>\r\n                <div class=\"col-4\"><label for=\"exampleInputTelefono\">Fin:</label>\r\n                  <input type=\"text\" class=\"form-control\" id=\"miercoles_i\" placeholder=\"\" formControlName=\"miercoles_f\">\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\" class=\"row\">\r\n                <div class=\"col-4\">\r\n                   <label for=\"exampleInputTelefono\" style=\"font-weight: bold;\">Jueves:</label>\r\n                </div>\r\n                <div class=\"col-4\"><label for=\"exampleInputTelefono\">Inicio:</label>\r\n                  <input type=\"text\" class=\"form-control\" id=\"jueves_i\" placeholder=\"\" formControlName=\"jueves_f\">\r\n                </div>\r\n                <div class=\"col-4\"><label for=\"exampleInputTelefono\">Fin:</label>\r\n                  <input type=\"text\" class=\"form-control\" id=\"jueves_i\" placeholder=\"\" formControlName=\"jueves_f\">\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\" class=\"row\">\r\n                <div class=\"col-4\">\r\n                   <label for=\"exampleInputTelefono\" style=\"font-weight: bold;\">Viernes:</label>\r\n                </div>\r\n                <div class=\"col-4\"><label for=\"exampleInputTelefono\">Inicio:</label>\r\n                  <input type=\"text\" class=\"form-control\" id=\"viernes_i\" placeholder=\"\" formControlName=\"viernes_f\">\r\n                </div>\r\n                <div class=\"col-4\"><label for=\"exampleInputTelefono\">Fin:</label>\r\n                  <input type=\"text\" class=\"form-control\" id=\"viernes_i\" placeholder=\"\" formControlName=\"viernes_f\">\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\" class=\"row\">\r\n                <div class=\"col-4\">\r\n                   <label for=\"exampleInputTelefono\" style=\"font-weight: bold;\">Sabado:</label>\r\n                </div>\r\n                <div class=\"col-4\"><label for=\"exampleInputTelefono\">Inicio:</label>\r\n                  <input type=\"text\" class=\"form-control\" id=\"lunes_f\" placeholder=\"\" formControlName=\"sabado_f\">\r\n                </div>\r\n                <div class=\"col-4\"><label for=\"exampleInputTelefono\">Fin:</label>\r\n                  <input type=\"text\" class=\"form-control\" id=\"lunes_f\" placeholder=\"\" formControlName=\"sabado_f\">\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\" class=\"row\">\r\n                <div class=\"col-4\">\r\n                   <label for=\"exampleInputTelefono\" style=\"font-weight: bold;\">Domingo:</label>\r\n                </div>\r\n                <div class=\"col-4\"><label for=\"exampleInputTelefono\">Inicio:</label>\r\n                  <input type=\"text\" class=\"form-control\" id=\"domingo_i\" placeholder=\"\" formControlName=\"domingo_f\">\r\n                </div>\r\n                <div class=\"col-4\"><label for=\"exampleInputTelefono\">Fin:</label>\r\n                  <input type=\"text\" class=\"form-control\" id=\"domingo_i\" placeholder=\"\" formControlName=\"domingo_f\">\r\n                </div>\r\n              </div>\r\n          </div>\r\n          \r\n          <br><br>\r\n          <hr>\r\n          <br><br>\r\n\r\n          <div class=\"form-group\" *ngIf=\"refer\">\r\n            <nb-card-header>Referencias personales</nb-card-header>\r\n            <br><br>\r\n            <label style=\"font-weight: bold;\">Referencia 1:</label> <br><br>\r\n              <label style=\"font-weight: bold;\">Nombre:</label>{{myFormEditar.value.referencias2.nombre1}}<br>\r\n              <label style=\"font-weight: bold;\">Telefono:</label>{{myFormEditar.value.referencias2.telefono1}}<br>\r\n              <label style=\"font-weight: bold;\">Dirección:</label>{{myFormEditar.value.referencias2.direccion1}}<br>\r\n              <label style=\"font-weight: bold;\">Contacto:</label>{{myFormEditar.value.referencias2.contacto1}}<br>\r\n              <label style=\"font-weight: bold;\">Cargo:</label>{{myFormEditar.value.referencias2.cargo1}}<br>\r\n            <br>\r\n            <label style=\"font-weight: bold;\">Referencia 2:</label> <br><br>\r\n              <label style=\"font-weight: bold;\">Nombre:</label>{{myFormEditar.value.referencias2.nombre2}}<br>\r\n              <label style=\"font-weight: bold;\">Telefono:</label>{{myFormEditar.value.referencias2.telefono2}}<br>\r\n              <label style=\"font-weight: bold;\">Dirección:</label>{{myFormEditar.value.referencias2.direccion2}}<br>\r\n              <label style=\"font-weight: bold;\">Contacto:</label>{{myFormEditar.value.referencias2.contacto2}}<br>\r\n              <label style=\"font-weight: bold;\">Cargo:</label>{{myFormEditar.value.referencias2.cargo2}}<br>\r\n            <br>\r\n            <label style=\"font-weight: bold;\">Referencia 2:</label> <br><br>\r\n              <label style=\"font-weight: bold;\">Nombre:</label>{{myFormEditar.value.referencias2.nombre3}}<br>\r\n              <label style=\"font-weight: bold;\">Telefono:</label>{{myFormEditar.value.referencias2.telefono3}}<br>\r\n              <label style=\"font-weight: bold;\">Dirección:</label>{{myFormEditar.value.referencias2.direccion3}}<br>\r\n              <label style=\"font-weight: bold;\">Contacto:</label>{{myFormEditar.value.referencias2.contacto3}}<br>\r\n              <label style=\"font-weight: bold;\">Cargo:</label>{{myFormEditar.value.referencias2.cargo3}}<br>\r\n              <br>\r\n          </div>\r\n          \r\n          <br><br>\r\n          <hr>\r\n          <br><br>\r\n\r\n          <div class=\"form-group\">\r\n            <nb-card-header>Referencias comerciales</nb-card-header>\r\n            <br>\r\n            <br>\r\n            <label style=\"font-weight: bold;\">Referencia 1:</label> <br><br>\r\n              <label style=\"font-weight: bold;\">Nombre:</label>{{myFormEditar.value.referencias22.nombre1}}<br>\r\n              <label style=\"font-weight: bold;\">Telefono:</label>{{myFormEditar.value.referencias22.telefono1}}<br>\r\n              <label style=\"font-weight: bold;\">Dirección:</label>{{myFormEditar.value.referencias22.direccion1}}<br>\r\n              <label style=\"font-weight: bold;\">Contacto:</label>{{myFormEditar.value.referencias22.contacto1}}<br>\r\n              <label style=\"font-weight: bold;\">Cargo:</label>{{myFormEditar.value.referencias22.cargo1}}<br>\r\n            <br>\r\n            <label style=\"font-weight: bold;\">Referencia 2:</label> <br><br>\r\n              <label style=\"font-weight: bold;\">Nombre:</label>{{myFormEditar.value.referencias22.nombre2}}<br>\r\n              <label style=\"font-weight: bold;\">Telefono:</label>{{myFormEditar.value.referencias22.telefono2}}<br>\r\n              <label style=\"font-weight: bold;\">Dirección:</label>{{myFormEditar.value.referencias22.direccion2}}<br>\r\n              <label style=\"font-weight: bold;\">Contacto:</label>{{myFormEditar.value.referencias22.contacto2}}<br>\r\n              <label style=\"font-weight: bold;\">Cargo:</label>{{myFormEditar.value.referencias22.cargo2}}<br>\r\n            <br>\r\n            <label style=\"font-weight: bold;\">Referencia 2:</label> <br>\r\n              <label style=\"font-weight: bold;\">Nombre:</label>{{myFormEditar.value.referencias22.nombre3}}<br>\r\n              <label style=\"font-weight: bold;\">Telefono:</label>{{myFormEditar.value.referencias22.telefono3}}<br>\r\n              <label style=\"font-weight: bold;\">Dirección:</label>{{myFormEditar.value.referencias22.direccion3}}<br>\r\n              <label style=\"font-weight: bold;\">Contacto:</label>{{myFormEditar.value.referencias22.contacto3}}<br>\r\n              <label style=\"font-weight: bold;\">Cargo:</label>{{myFormEditar.value.referencias22.cargo3}}<br>\r\n              <br>\r\n          </div>\r\n\r\n          <br><br>\r\n          <hr>\r\n          <br><br>\r\n          \r\n          <div class=\"form-group\">\r\n            <nb-card-header>Documento de Indentidad</nb-card-header><br>\r\n            <img src=\"{{myFormEditar.value.pasaporte}}\" alt=\"\" style=\"width: 600px; height: 600px; border-radius: 20px; \">\r\n              <input [hidden]=\"clearPasaporte\" type=\"file\" name=\"Pasaporte\" id=\"Pasaporte\" (change)=\"onFileChangePasaporte($event)\" #fileInput accept=\"image/*\">\r\n                <div *ngIf=\"clearPasaporte\">\r\n                  <button type=\"button\" class=\"btn btn-danger btn-tn\" (click)=\"clearFilePasaporte()\">Eliminar</button>\r\n                </div>\r\n                <p [hidden]=\"clearPasaporte\" style=\"color: #c71717\"><b>Sugerencia:</b> La dimensión de la imagen no debe ser mayor a 870x370 px.</p>\r\n          </div>\r\n\r\n          <br><br>\r\n          <hr>\r\n          <br><br>\r\n\r\n          <div class=\"form-group\">\r\n            <nb-card-header>Logo</nb-card-header><br>\r\n            <img src=\"{{myFormEditar.value.logo}}\" alt=\"\" style=\"width: 600px; height: 600px; border-radius: 20px;\">\r\n              <input [hidden]=\"clearLogo\" type=\"file\" name=\"Logo\" id=\"Logo\" (change)=\"onFileChangeLogo($event)\" #fileInput accept=\"image/*\">\r\n                <div *ngIf=\"clearLogo\">\r\n                  <button type=\"button\" class=\"btn btn-danger btn-tn\" (click)=\"clearFileLogo()\">Eliminar</button>\r\n                </div>\r\n                <p [hidden]=\"clearLogo\" style=\"color: #c71717\"><b>Sugerencia:</b> La dimensión de la imagen no debe ser mayor a 870x370 px.</p>\r\n          </div>\r\n\r\n          <br><br>\r\n          <hr>\r\n          <br><br>\r\n\r\n          <div class=\"form-group\">\r\n            <nb-card-header>Aviso Operaciones</nb-card-header><br>\r\n            <img src=\"{{myFormEditar.value.operaciones}}\" alt=\"\" style=\"width: 600px; height: 600px; border-radius: 20px;\">\r\n              <input [hidden]=\"clearOperaciones\" type=\"file\" name=\"Operaciones\" id=\"Operaciones\" (change)=\"onFileChangeOperaciones($event)\" #fileInput accept=\"image/*\">\r\n                <div *ngIf=\"clearOperaciones\">\r\n                  <button type=\"button\" class=\"btn btn-danger btn-tn\" (click)=\"clearFileOperaciones()\">Eliminar</button>\r\n                </div>\r\n                <p [hidden]=\"clearOperaciones\" style=\"color: #c71717\"><b>Sugerencia:</b> La dimensión de la imagen no debe ser mayor a 870x370 px.</p>\r\n          </div>\r\n\r\n          <br><br>\r\n          <hr>\r\n          <br><br>\r\n\r\n          <div class=\"form-group\">\r\n            <nb-card-header>Idoneidad</nb-card-header><br>\r\n            <img src=\"{{myFormEditar.value.idoneidad_file}}\" alt=\"\" style=\"width: 600px; height: 600px; border-radius: 20px;\">\r\n              <input [hidden]=\"clearIdoneidad_file\" type=\"file\" name=\"Idoneidad_file\" id=\"Idoneidad_file\" (change)=\"onFileChangeIdoneidad_file($event)\" #fileInput accept=\"image/*\">\r\n                <div *ngIf=\"clearIdoneidad_file\">\r\n                  <button type=\"button\" class=\"btn btn-danger btn-tn\" (click)=\"clearFileIdoneidad_file()\">Eliminar</button>\r\n                </div>\r\n                <p [hidden]=\"clearIdoneidad_file\" style=\"color: #c71717\"><b>Sugerencia:</b> La dimensión de la imagen no debe ser mayor a 870x370 px.</p>\r\n          </div>\r\n\r\n          <br><br>\r\n          <hr>\r\n          <br><br>\r\n          \r\n          <div class=\"form-group\" [hidden]=\"contrato==null\">\r\n            <label for=\"exampleInputTelefono\">Contrato:</label><br>\r\n            <a href=\"{{contrato}}\" target=\"_blank\">Ver contrato</a>\r\n          </div>\r\n          <div class=\"form-group\" [hidden]=\"ontrato!=null\">\r\n            <label for=\"exampleInputTelefono\">Sin contrato...</label><br>\r\n          </div>\r\n\r\n\r\n          \r\n\r\n          <br><br>\r\n          <nb-card-header>Servicios del Proveedor</nb-card-header><br>\r\n          <table class=\"table\">\r\n            <thead>\r\n               <th style=\"text-align: center;\">Imagen</th>\r\n               <th style=\"text-align: center;\">Nombre</th>\r\n               <th style=\"text-align: center;\">Categoaria</th>\r\n               <th style=\"text-align: center;\">Descripción</th>\r\n               <th style=\"text-align: center;\"></th>\r\n            </thead>\r\n            <tbody>\r\n               <tr *ngFor=\"let item of this.objAEditar.establecimiento.productos\" >\r\n                <td style=\"text-align: center; vertical-align:middle;\"><img src = \"{{item.imagen}}\" alt=\"\" class=\"img-table\" height=\"150px\" width=\"180px\" style=\"border-radius: 20px;\"></td>\r\n                  <td style=\"text-align: center; vertical-align:middle;\">{{item.nombre}}</td>\r\n                  <td style=\"text-align: center; vertical-align:middle;\">{{item.subcategoria.categoria.catprincipales.nombre}}-{{item.subcategoria.categoria.nombre}}-{{item.subcategoria.nombre}}</td>\r\n                  <td style=\"text-align: center; vertical-align:middle;\">{{item.descripcion}} Estrellas de 5</td>\r\n                  <td>\r\n                    <nb-checkbox [value]=\"item.estado === 'ON'\"  (change)=\"cambiarEstado2(item)\"></nb-checkbox>\r\n                    <!--button type=\"button\" class=\"btn btn-secundary  btn-table\" title=\"Editar\" (click)=\"aEditara(item)\" *ngIf=\"item.estado!='ON'\">Hablitar{{item.estado}}\r\n                   </button>\r\n                   <button type=\"button\" class=\"btn btn-danger btn-table\" title=\"Editar\" (click)=\"aEditara(item)\" *ngIf=\"item.estado=='ON'\">Deshabilitar\r\n                   </button-->\r\n                  </td>\r\n\r\n               </tr>\r\n            </tbody>\r\n          </table>\r\n\r\n          <br><br>\r\n          \r\n          <br>\r\n          <button class=\"btn btn-secondary\" (click)=\"atras()\">Cancelar</button>\r\n          <button type=\"submit\" class=\"btn btn-primary\" (click)=\"editar()\" >Actualizar datos</button>\r\n          <button type=\"submit\" class=\"btn btn-danger\" (click)=\"aceptar()\">Aceptar proveedor y habilitarlo</button>\r\n        </form>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #modal1 let-c=\"close\" let-d=\"dismiss\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">Eliminar Socio: </h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <p>¿Realmente desea eliminar el socio {{eliminar_nombre}}?</p>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Cancelar</button>\r\n    <button type=\"button\" class=\"btn btn-danger\" (click)=\"c('Close click'); eliminar()\">Eliminar</button>\r\n  </div>\r\n</ng-template>\r\n\r\n<toaster-container [toasterconfig]=\"config\"></toaster-container>\r\n\r\n<div class=\"my-container\">\r\n    <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '4px' }\"></ngx-loading>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/socios/registrar/registrar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) .estado {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 50%; }\n\n:host-context(.nb-theme-default) .btn-table {\n  display: inline-block; }\n\n:host-context(.nb-theme-default) .img-table {\n  border-radius: 4px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n:host-context(.nb-theme-default) .theme-switch {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  cursor: pointer;\n  margin: 0; }\n  :host-context(.nb-theme-default) .theme-switch > span {\n    font-size: 1rem;\n    font-weight: 600;\n    transition: opacity 0.3s ease; }\n    :host-context(.nb-theme-default) .theme-switch > span.light {\n      color: #4b4b4b;\n      padding-right: 5px; }\n    :host-context(.nb-theme-default) .theme-switch > span.cosmic {\n      color: #a4abb3;\n      padding-left: 5px; }\n    :host-context(.nb-theme-default) .theme-switch > span:active {\n      opacity: 0.78; }\n\n:host-context(.nb-theme-default) .switch {\n  position: relative;\n  display: inline-block;\n  width: 4rem;\n  height: 1.75rem;\n  margin: 0; }\n  :host-context(.nb-theme-default) .switch input {\n    display: none; }\n    :host-context(.nb-theme-default) .switch input:checked + .slider::before {\n      -webkit-transform: translateX(2.25rem);\n              transform: translateX(2.25rem); }\n  :host-context(.nb-theme-default) .switch .slider {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    border-radius: 1.75rem;\n    background-color: #ebeff5; }\n  :host-context(.nb-theme-default) .switch .slider::before {\n    position: absolute;\n    content: '';\n    height: 1.75rem;\n    width: 1.75rem;\n    border-radius: 50%;\n    background-color: #0b417a;\n    transition: 0.2s;\n    box-shadow: 0 0 0.25rem 0 rgba(164, 171, 179, 0.4); }\n\n@media (max-width: 575px) {\n  :host-context(.nb-theme-default) .light, :host-context(.nb-theme-default) .cosmic {\n    display: none; } }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-default) {\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end; } }\n\n:host-context(.nb-theme-cosmic) .estado {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 50%; }\n\n:host-context(.nb-theme-cosmic) .btn-table {\n  display: inline-block; }\n\n:host-context(.nb-theme-cosmic) .img-table {\n  border-radius: 4px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n:host-context(.nb-theme-cosmic) .theme-switch {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  cursor: pointer;\n  margin: 0; }\n  :host-context(.nb-theme-cosmic) .theme-switch > span {\n    font-size: 1rem;\n    font-weight: 600;\n    transition: opacity 0.3s ease; }\n    :host-context(.nb-theme-cosmic) .theme-switch > span.light {\n      color: #d1d1ff;\n      padding-right: 5px; }\n    :host-context(.nb-theme-cosmic) .theme-switch > span.cosmic {\n      color: #76f8f6;\n      padding-left: 5px; }\n    :host-context(.nb-theme-cosmic) .theme-switch > span.light {\n      color: #76f8f6; }\n    :host-context(.nb-theme-cosmic) .theme-switch > span.cosmic {\n      color: #ffffff; }\n    :host-context(.nb-theme-cosmic) .theme-switch > span:active {\n      opacity: 0.78; }\n\n:host-context(.nb-theme-cosmic) .switch {\n  position: relative;\n  display: inline-block;\n  width: 4rem;\n  height: 1.75rem;\n  margin: 0; }\n  :host-context(.nb-theme-cosmic) .switch input {\n    display: none; }\n    :host-context(.nb-theme-cosmic) .switch input:checked + .slider::before {\n      -webkit-transform: translateX(2.25rem);\n              transform: translateX(2.25rem); }\n  :host-context(.nb-theme-cosmic) .switch .slider {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    border-radius: 1.75rem;\n    background-color: #2f296b; }\n  :host-context(.nb-theme-cosmic) .switch .slider::before {\n    position: absolute;\n    content: '';\n    height: 1.75rem;\n    width: 1.75rem;\n    border-radius: 50%;\n    background-color: #0b417a;\n    transition: 0.2s;\n    box-shadow: 0 0 0.25rem 0 rgba(118, 248, 246, 0.4);\n    background-image: linear-gradient(to right, #0b1c7a, #0b417a); }\n\n@media (max-width: 575px) {\n  :host-context(.nb-theme-cosmic) .light, :host-context(.nb-theme-cosmic) .cosmic {\n    display: none; } }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-cosmic) {\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/socios/registrar/registrar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return registrarComponent; });
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








var registrarComponent = /** @class */ (function () {
    function registrarComponent(modalService, toasterService, http, router, route, rutaService, fb) {
        this.modalService = modalService;
        this.toasterService = toasterService;
        this.http = http;
        this.router = router;
        this.route = route;
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
        this.admin = false;
        this.mouvers_user_tipo = localStorage.getItem('mouvers_user_tipo');
        this.establecimiento_id = 0;
        this.refer = true;
        this.clear = false; //puedo borrar?
        this.fileIMG = null;
        this.imgUpload = null;
        this.loadinImg = false;
        //----------------------------------------------------------------------------------------------
        //----------------------------------------------------------------------------------------------
        //Logo
        //----------------------------------------------------------------------------------------------
        this.clearLogo = false; //puedo borrar?
        this.fileIMGLogo = null;
        this.imgUploadLogo = null;
        this.loadinImgLogo = false;
        //----------------------------------------------------------------------------------------------
        //----------------------------------------------------------------------------------------------
        //----------------------------------------------------------------------------------------------
        //----------------------------------------------------------------------------------------------
        //----------------------------------------------------------------------------------------------
        //----------------------------------------------------------------------------------------------
        this.clearPasaporte = false; //puedo borrar?
        this.fileIMGPasaporte = null;
        this.imgUploadPasaporte = null;
        this.loadinImgPasaporte = false;
        //----------------------------------------------------------------------------------------------
        // operaciones Operaciones
        this.clearOperaciones = false; //puedo borrar?
        this.fileIMGOperaciones = null;
        this.imgUploadOperaciones = null;
        this.loadinImgOperaciones = false;
        //----------------------------------------------------------------------------------------------
        //----------------------------------------------------------------------------------------------
        // idoneidad_file Idoneidad_file
        this.clearIdoneidad_file = false; //puedo borrar?
        this.fileIMGIdoneidad_file = null;
        this.imgUploadIdoneidad_file = null;
        this.loadinImgIdoneidad_file = false;
        this.pages = 4;
        this.pageSize = 5;
        this.pageNumber = 0;
        this.currentIndex = 1;
        this.pageStart = 1;
        this.inputName = '';
        this.myFormEditar = this.fb.group({
            id: [''],
            nombre: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required]],
            email: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required]],
            telefono: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required]],
            ciudad: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required]],
            estado: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required]],
            tipo: [''],
            tipo2: [''],
            ruc: [''],
            latitud: [''],
            longitud: [''],
            email_empresa: [''],
            contacto_nombre: [''],
            contacto_cedula: [''],
            contacto_cargo: [''],
            logo: [''],
            cedula: [''],
            nacionalidad: [''],
            direccion: [''],
            direccion_exacta: [''],
            fecha_nacimiento: [''],
            formacion: [''],
            experiencia: [''],
            experiencia2: [''],
            anos_experiencia: [''],
            idoneidad: [''],
            disponibilidad: [''],
            disponibilidad2: [''],
            idiomas: [''],
            idiomas2: [''],
            urgencias: [''],
            factura: [''],
            referencias: [''],
            referencias2: [''],
            referencias12: [''],
            referencias22: [''],
            operaciones: [''],
            foto: [''],
            pasaporte: [''],
            idoneidad_file: [''],
            estado2: [''],
            usuario_id: [''],
            sexo: [''],
            contrato: [''],
            lunes_i: [''],
            lunes_f: [''],
            martes_i: [''],
            martes_f: [''],
            miercoles_i: [''],
            miercoles_f: [''],
            jueves_i: [''],
            jueves_f: [''],
            viernes_i: [''],
            viernes_f: [''],
            sabado_i: [''],
            sabado_f: [''],
            domingo_i: [''],
            domingo_f: [''],
            lat: [''],
            lng: [''],
        });
    }
    registrarComponent.prototype.ngOnInit = function () {
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
        this.http.get(this.rutaService.getRutaApi() + 'registro?token=' + localStorage.getItem('mouvers_token'))
            .toPromise()
            .then(function (data) {
            _this.getEstados();
            console.log(data);
            _this.data = data;
            _this.productList = _this.data.repartidores;
            for (var i = 0; i < _this.productList.length; ++i) {
                if (_this.productList[i].usuario.registro.tipo == 2) {
                    _this.productList[i].usuario.imagen = _this.productList[i].usuario.registro.logo;
                }
            }
            _this.filteredItems = _this.productList;
            //console.log(this.productList);
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
    //Redirigir al chat
    registrarComponent.prototype.chat = function (repartidor) {
        console.log(repartidor);
        if (repartidor.usuario.chat_repartidor) {
            localStorage.setItem('mouvers_chat_id', repartidor.usuario.chat_repartidor.id);
        }
        else {
            localStorage.setItem('mouvers_chat_id', '');
        }
        localStorage.setItem('mouvers_usuario_id', repartidor.usuario.id);
        localStorage.setItem('mouvers_usuario_tipo', repartidor.usuario.tipo_usuario);
        localStorage.setItem('mouvers_usuario_nombre', repartidor.usuario.nombre);
        localStorage.setItem('mouvers_usuario_imagen', repartidor.usuario.imagen);
        localStorage.setItem('mouvers_usuario_token_notifi', repartidor.usuario.token_notificacion);
        this.router.navigateByUrl('/pages/chat-box');
    };
    registrarComponent.prototype.getEstados = function () {
        var _this = this;
        this.http.get(this.rutaService.getRutaApi() + 'entidades/municipios?token=' + localStorage.getItem('mouvers_token'))
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            _this.estados = _this.data.entidades;
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
    registrarComponent.prototype.setEstado1 = function (estado) {
        console.log(estado);
        for (var i = 0; i < this.estados.length; ++i) {
            if (estado == this.estados[i].nom_ent) {
                this.ciudades = this.estados[i].municipios;
            }
        }
    };
    registrarComponent.prototype.setEstado2 = function (estado) {
        console.log(estado);
        for (var i = 0; i < this.estados.length; ++i) {
            if (estado == this.estados[i].nom_ent) {
                this.ciudades = this.estados[i].municipios;
                this.myFormEditar.patchValue({ ciudad: this.ciudades[0].nom_mun });
            }
        }
    };
    registrarComponent.prototype.showToast = function (type, title, body) {
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
    registrarComponent.prototype.open = function (modal) {
        this.modalService.open(modal);
    };
    //Abrir modal larga
    registrarComponent.prototype.open2 = function (modal) {
        this.modalService.open(modal, { size: 'lg', backdrop: 'static', container: 'nb-layout', keyboard: false });
    };
    registrarComponent.prototype.atras = function () {
        this.editando = false;
        this.objAEditar = null;
        //console.log(this.objAEditar);
        //this.uploadFile = null;
        this.myFormEditar.reset();
    };
    registrarComponent.prototype.aEditar = function (obj) {
        console.log(obj);
        this.establecimiento_id = obj.establecimiento.id;
        this.editando = true;
        this.objAEditar = Object.assign({}, obj);
        console.log(this.objAEditar);
        var tam_contrato = obj.usuario.contrato.length;
        this.contrato = obj.usuario.contrato[tam_contrato - 1].url;
        console.log(this.contrato);
        this.myFormEditar.patchValue({ id: this.objAEditar.id });
        this.myFormEditar.patchValue({ nombre: this.objAEditar.usuario.nombre });
        this.myFormEditar.patchValue({ email: this.objAEditar.usuario.email });
        this.myFormEditar.patchValue({ telefono: this.objAEditar.usuario.telefono });
        this.myFormEditar.patchValue({ estado: this.objAEditar.usuario.estado });
        this.myFormEditar.patchValue({ ciudad: this.objAEditar.usuario.ciudad });
        var tipo = "";
        if (this.objAEditar.usuario.registro.tipo == 1) {
            tipo = 'Persona';
        }
        else if (this.objAEditar.usuario.registro.tipo == 2) {
            tipo = 'Empresa';
        }
        else {
            tipo = 'Sin tipo de registro';
        }
        if (this.objAEditar.usuario.registro.referencias == null) {
            var refe = { nombre1: "", telefono1: "", direccion1: "", contacto1: "", cargo1: "", nombre2: "", telefono2: "", direccion2: "", contacto2: "", cargo2: "", nombre3: "", telefono3: "", direccion3: "", contacto3: "", cargo3: "" };
            this.myFormEditar.patchValue({ referencias22: refe });
        }
        else {
            this.myFormEditar.patchValue({ referencias22: JSON.parse(this.objAEditar.usuario.registro.referencias) });
        }
        this.myFormEditar.patchValue({ tipo2: tipo });
        this.myFormEditar.patchValue({ tipo: this.objAEditar.usuario.registro.tipo });
        this.myFormEditar.patchValue({ ruc: this.objAEditar.usuario.registro.ruc });
        this.myFormEditar.patchValue({ latitud: this.objAEditar.usuario.registro.latitud });
        this.myFormEditar.patchValue({ longitud: this.objAEditar.usuario.registro.longitud });
        this.myFormEditar.patchValue({ email_empresa: this.objAEditar.usuario.registro.email_empresa });
        this.myFormEditar.patchValue({ contacto_nombre: this.objAEditar.usuario.registro.contacto_nombre });
        this.myFormEditar.patchValue({ contacto_cedula: this.objAEditar.usuario.registro.contacto_cedula });
        this.myFormEditar.patchValue({ contacto_cargo: this.objAEditar.usuario.registro.contacto_cargo });
        this.myFormEditar.patchValue({ logo: this.objAEditar.usuario.registro.logo });
        this.myFormEditar.patchValue({ cedula: this.objAEditar.usuario.registro.cedula });
        this.myFormEditar.patchValue({ nacionalidad: this.objAEditar.usuario.registro.nacionalidad });
        this.myFormEditar.patchValue({ direccion: this.objAEditar.usuario.registro.direccion });
        this.myFormEditar.patchValue({ direccion_exacta: this.objAEditar.usuario.registro.direccion_exacta });
        this.myFormEditar.patchValue({ fecha_nacimiento: this.objAEditar.usuario.registro.fecha_nacimiento });
        this.myFormEditar.patchValue({ formacion: this.objAEditar.usuario.registro.formacion });
        this.myFormEditar.patchValue({ experiencia: this.objAEditar.usuario.registro.experiencia });
        this.myFormEditar.patchValue({ experiencia2: JSON.parse(this.objAEditar.usuario.registro.experiencia) });
        this.myFormEditar.patchValue({ anos_experiencia: this.objAEditar.usuario.registro.anos_experiencia });
        this.myFormEditar.patchValue({ idoneidad: this.objAEditar.usuario.registro.idoneidad });
        this.myFormEditar.patchValue({ disponibilidad: this.objAEditar.usuario.registro.disponibilidad });
        this.myFormEditar.patchValue({ disponibilidad2: JSON.parse(this.objAEditar.usuario.registro.disponibilidad) });
        this.myFormEditar.patchValue({ idiomas: this.objAEditar.usuario.registro.idiomas });
        this.myFormEditar.patchValue({ idiomas2: JSON.parse(this.objAEditar.usuario.registro.idiomas) });
        this.myFormEditar.patchValue({ urgencias: this.objAEditar.usuario.registro.urgencias });
        this.myFormEditar.patchValue({ factura: this.objAEditar.usuario.registro.factura });
        if (this.objAEditar.usuario.registro.referencias == null) {
            this.refer = false;
        }
        this.myFormEditar.patchValue({ referencias: this.objAEditar.usuario.registro.referencias });
        this.myFormEditar.patchValue({ referencias2: JSON.parse(this.objAEditar.usuario.registro.referencias) });
        this.myFormEditar.patchValue({ referencias12: this.objAEditar.usuario.registro.referencias2 });
        this.myFormEditar.patchValue({ referencias22: JSON.parse(this.objAEditar.usuario.registro.referencias2) });
        if (this.objAEditar.usuario.registro.tipo == 2) {
            var foto = this.objAEditar.usuario.registro.logo;
        }
        else if (this.objAEditar.usuario.registro.tipo == 1) {
            var foto = this.objAEditar.usuario.imagen;
        }
        //this.myFormEditar.patchValue({referencias22 : JSON.parse(this.objAEditar.usuario.registro.referencias}));
        this.myFormEditar.patchValue({ foto: foto });
        this.myFormEditar.patchValue({ pasaporte: this.objAEditar.usuario.registro.pasaporte });
        this.myFormEditar.patchValue({ idoneidad_file: this.objAEditar.usuario.registro.idoneidad_file });
        this.myFormEditar.patchValue({ operaciones: this.objAEditar.usuario.registro.operaciones });
        this.myFormEditar.patchValue({ estado2: this.objAEditar.usuario.registro.estado2 });
        this.myFormEditar.patchValue({ usuario_id: this.objAEditar.usuario.registro.usuario_id });
        this.myFormEditar.patchValue({ sexo: this.objAEditar.usuario.registro.sexo });
        //this.myFormEditar.patchValue({contrato : this.objAEditar.usuario.registro.contrato});
        this.myFormEditar.patchValue({ lat: this.objAEditar.usuario.registro.latitud });
        this.myFormEditar.patchValue({ lng: this.objAEditar.usuario.registro.longitud });
        var disp = JSON.parse(this.objAEditar.usuario.registro.disponibilidad);
        this.myFormEditar.patchValue({ lunes_i: disp.lunes_i });
        this.myFormEditar.patchValue({ lunes_f: disp.lunes_f });
        this.myFormEditar.patchValue({ martes_i: disp.martes_i });
        this.myFormEditar.patchValue({ martes_f: disp.martes_f });
        this.myFormEditar.patchValue({ miercoles_i: disp.miercoles_i });
        this.myFormEditar.patchValue({ miercoles_f: disp.miercoles_f });
        this.myFormEditar.patchValue({ jueves_i: disp.jueves_i });
        this.myFormEditar.patchValue({ jueves_f: disp.jueves_f });
        this.myFormEditar.patchValue({ viernes_i: disp.viernes_i });
        this.myFormEditar.patchValue({ viernes_f: disp.viernes_f });
        this.myFormEditar.patchValue({ sabado_i: disp.sabado_i });
        this.myFormEditar.patchValue({ sabado_f: disp.sabado_f });
        this.myFormEditar.patchValue({ domingo_i: disp.domingo_i });
        this.myFormEditar.patchValue({ domingo_f: disp.domingo_f });
        //this.setEstado1(this.objAEditar.usuario.estado);
        console.log(this.myFormEditar.value);
    };
    registrarComponent.prototype.editar = function () {
        var _this = this;
        this.loading = true;
        var datos = {
            token: localStorage.getItem('mouvers_token'),
            nombre: this.myFormEditar.value.nombre,
            email: this.myFormEditar.value.email,
            telefono: this.myFormEditar.value.telefono,
            ciudad: this.myFormEditar.value.ciudad,
            estado: this.myFormEditar.value.estado,
        };
        this.http.put(this.rutaService.getRutaApi() + 'repartidores/' + this.myFormEditar.value.id, datos)
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            for (var i = 0; i < _this.productList.length; ++i) {
                if (_this.productList[i].id == _this.myFormEditar.value.id) {
                    _this.productList[i].usuario.imagen = _this.myFormEditar.value.foto;
                    _this.productList[i].usuario.nombre = _this.myFormEditar.value.nombre;
                    _this.productList[i].usuario.email = _this.myFormEditar.value.email;
                    _this.productList[i].usuario.telefono = _this.myFormEditar.value.telefono;
                    _this.productList[i].usuario.ciudad = _this.myFormEditar.value.ciudad;
                    _this.productList[i].usuario.estado = _this.myFormEditar.value.estado;
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
        var disponibilidad = {
            lunes_i: this.myFormEditar.value.lunes_i,
            lunes_f: this.myFormEditar.value.lunes_f,
            martes_i: this.myFormEditar.value.martes_i,
            martes_f: this.myFormEditar.value.martes_f,
            miercoles_i: this.myFormEditar.value.miercoles_i,
            miercoles_f: this.myFormEditar.value.miercoles_f,
            jueves_i: this.myFormEditar.value.jueves_i,
            jueves_f: this.myFormEditar.value.jueves_f,
            viernes_i: this.myFormEditar.value.viernes_i,
            viernes_f: this.myFormEditar.value.viernes_f,
            sabado_i: this.myFormEditar.value.sabado_i,
            sabado_f: this.myFormEditar.value.sabado_f,
            domingo_i: this.myFormEditar.value.domingo_i,
            domingo_f: this.myFormEditar.value.domingo_f,
            lat: this.myFormEditar.value.lat,
            lng: this.myFormEditar.value.lng,
        };
        if (this.objAEditar.usuario.registro.tipo == 2) {
            var foto = this.objAEditar.usuario.registro.logo;
        }
        else if (this.objAEditar.usuario.registro.tipo == 1) {
            var foto = this.objAEditar.usuario.imagen;
        }
        var datos2 = {
            imagen: foto,
            direccion: this.myFormEditar.value.direccion,
            direccion_exacta: this.myFormEditar.value.direccion_exacta,
            lunes_i: this.myFormEditar.value.lunes_i,
            lunes_f: this.myFormEditar.value.lunes_f,
            martes_i: this.myFormEditar.value.martes_i,
            martes_f: this.myFormEditar.value.martes_f,
            miercoles_i: this.myFormEditar.value.miercoles_i,
            miercoles_f: this.myFormEditar.value.miercoles_f,
            jueves_i: this.myFormEditar.value.jueves_i,
            jueves_f: this.myFormEditar.value.jueves_f,
            viernes_i: this.myFormEditar.value.viernes_i,
            viernes_f: this.myFormEditar.value.viernes_f,
            sabado_i: this.myFormEditar.value.sabado_i,
            sabado_f: this.myFormEditar.value.sabado_f,
            domingo_i: this.myFormEditar.value.domingo_i,
            domingo_f: this.myFormEditar.value.domingo_f,
            lat: this.myFormEditar.value.lat,
            lng: this.myFormEditar.value.lng,
            disponibilidad: JSON.stringify(disponibilidad),
            logo: this.myFormEditar.value.logo,
            foto: this.myFormEditar.value.foto,
            pasaporte: this.myFormEditar.value.pasaporte,
            operaciones: this.myFormEditar.value.operaciones,
            idoneidad_file: this.myFormEditar.value.idoneidad_file,
        };
        console.log(datos2);
        this.http.put(this.rutaService.getRutaApi() + 'establecimientos/' + this.establecimiento_id, datos2)
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            for (var i = 0; i < _this.productList.length; ++i) {
                if (_this.productList[i].id == _this.objAEditar.usuario.id) {
                    _this.productList[i].usuario.imagen = _this.myFormEditar.value.foto;
                    _this.productList[i].usuario.registro.logo = _this.myFormEditar.value.logo;
                }
            }
            _this.objAEditar.usuario.registro.disponibilidad = JSON.stringify(disponibilidad);
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
    };
    registrarComponent.prototype.aceptar = function () {
        var _this = this;
        this.loading = true;
        var datosa = {
            token: localStorage.getItem('mouvers_token'),
            activo: 2,
            msg: '¡Felicidades! has sido aprobado como proveedor. Ingresa y explora las nuevas opciones.'
        };
        this.http.put(this.rutaService.getRutaApi() + 'repartidores/' + this.myFormEditar.value.id, datosa)
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            //console.log(this.productList);
            //alert(this.data.message);
            _this.loading = false;
            _this.editando = false;
            _this.showToast('success', 'Success!', '!Proveedor aceptado con éxito!');
            _this.loading = true;
            _this.http.get(_this.rutaService.getRutaApi() + 'registro?token=' + localStorage.getItem('mouvers_token'))
                .toPromise()
                .then(function (data) {
                _this.getEstados();
                console.log(data);
                _this.data = data;
                _this.productList = _this.data.repartidores;
                _this.filteredItems = _this.productList;
                //console.log(this.productList);
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
        var datos = {
            token: localStorage.getItem('mouvers_token'),
            nombre: this.myFormEditar.value.nombre,
            email: this.myFormEditar.value.email,
            telefono: this.myFormEditar.value.telefono,
            ciudad: this.myFormEditar.value.ciudad,
            estado: this.myFormEditar.value.estado,
        };
        this.http.put(this.rutaService.getRutaApi() + 'repartidores/' + this.myFormEditar.value.id, datos)
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            for (var i = 0; i < _this.productList.length; ++i) {
                if (_this.productList[i].id == _this.myFormEditar.value.id) {
                    _this.productList[i].usuario.imagen = _this.myFormEditar.value.foto;
                    _this.productList[i].usuario.nombre = _this.myFormEditar.value.nombre;
                    _this.productList[i].usuario.email = _this.myFormEditar.value.email;
                    _this.productList[i].usuario.telefono = _this.myFormEditar.value.telefono;
                    _this.productList[i].usuario.ciudad = _this.myFormEditar.value.ciudad;
                    _this.productList[i].usuario.estado = _this.myFormEditar.value.estado;
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
        var disponibilidad = {
            lunes_i: this.myFormEditar.value.lunes_i,
            lunes_f: this.myFormEditar.value.lunes_f,
            martes_i: this.myFormEditar.value.martes_i,
            martes_f: this.myFormEditar.value.martes_f,
            miercoles_i: this.myFormEditar.value.miercoles_i,
            miercoles_f: this.myFormEditar.value.miercoles_f,
            jueves_i: this.myFormEditar.value.jueves_i,
            jueves_f: this.myFormEditar.value.jueves_f,
            viernes_i: this.myFormEditar.value.viernes_i,
            viernes_f: this.myFormEditar.value.viernes_f,
            sabado_i: this.myFormEditar.value.sabado_i,
            sabado_f: this.myFormEditar.value.sabado_f,
            domingo_i: this.myFormEditar.value.domingo_i,
            domingo_f: this.myFormEditar.value.domingo_f,
            lat: this.myFormEditar.value.lat,
            lng: this.myFormEditar.value.lng,
        };
        if (this.objAEditar.usuario.registro.tipo == 2) {
            var foto = this.objAEditar.usuario.registro.logo;
        }
        else if (this.objAEditar.usuario.registro.tipo == 1) {
            var foto = this.objAEditar.usuario.imagen;
        }
        var datos2 = {
            imagen: foto,
            direccion: this.myFormEditar.value.direccion,
            direccion_exacta: this.myFormEditar.value.direccion_exacta,
            lunes_i: this.myFormEditar.value.lunes_i,
            lunes_f: this.myFormEditar.value.lunes_f,
            martes_i: this.myFormEditar.value.martes_i,
            martes_f: this.myFormEditar.value.martes_f,
            miercoles_i: this.myFormEditar.value.miercoles_i,
            miercoles_f: this.myFormEditar.value.miercoles_f,
            jueves_i: this.myFormEditar.value.jueves_i,
            jueves_f: this.myFormEditar.value.jueves_f,
            viernes_i: this.myFormEditar.value.viernes_i,
            viernes_f: this.myFormEditar.value.viernes_f,
            sabado_i: this.myFormEditar.value.sabado_i,
            sabado_f: this.myFormEditar.value.sabado_f,
            domingo_i: this.myFormEditar.value.domingo_i,
            domingo_f: this.myFormEditar.value.domingo_f,
            lat: this.myFormEditar.value.lat,
            lng: this.myFormEditar.value.lng,
            disponibilidad: JSON.stringify(disponibilidad),
            logo: this.myFormEditar.value.logo,
            foto: this.myFormEditar.value.foto,
            pasaporte: this.myFormEditar.value.pasaporte,
            operaciones: this.myFormEditar.value.operaciones,
            idoneidad_file: this.myFormEditar.value.idoneidad_file,
        };
        console.log(datos2);
        this.http.put(this.rutaService.getRutaApi() + 'establecimientos/' + this.establecimiento_id, datos2)
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            for (var i = 0; i < _this.productList.length; ++i) {
                if (_this.productList[i].id == _this.objAEditar.usuario.id) {
                    _this.productList[i].usuario.imagen = _this.myFormEditar.value.foto;
                    _this.productList[i].usuario.registro.logo = _this.myFormEditar.value.logo;
                }
            }
            _this.objAEditar.usuario.registro.disponibilidad = JSON.stringify(disponibilidad);
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
    };
    registrarComponent.prototype.aEliminar = function (obj) {
        this.objAEliminar = obj;
        //console.log(this.objAEliminar);
        this.eliminar_id = this.objAEliminar.id;
        this.eliminar_nombre = this.objAEliminar.usuario.nombre;
    };
    registrarComponent.prototype.eliminar = function () {
        var _this = this;
        console.log(this.objAEliminar);
        this.loading = true;
        var datos = {
            token: localStorage.getItem('mouvers_token')
        };
        this.http.delete(this.rutaService.getRutaApi() + 'repartidores/' + this.eliminar_id + '?token=' + localStorage.getItem('mouvers_token'))
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
    //Para el repartidor
    registrarComponent.prototype.cambiarEstado = function (obj) {
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
            rep_estado: v_estado
        };
        this.http.put(this.rutaService.getRutaApi() + 'repartidores/' + obj.id, datos)
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
    registrarComponent.prototype.cambiarEstado2 = function (obj) {
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
        this.http.put(this.rutaService.getRutaApi() + 'productos/' + obj.id, datos)
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
    registrarComponent.prototype.prepareSave = function () {
        var input = new FormData();
        input.append('imagen', this.fileIMG);
        input.append('carpeta', 'categorias');
        input.append('url_imagen', this.rutaService.getRutaImages());
        return input;
    };
    registrarComponent.prototype.onFileChange = function (event) {
        if (event.target.files.length > 0) {
            this.fileIMG = event.target.files[0];
            this.subirImagen();
        }
    };
    registrarComponent.prototype.clearFile = function () {
        this.imgUpload = null;
        this.fileInput.nativeElement.value = '';
        this.clear = false;
        this.myFormEditar.patchValue({ foto: null });
    };
    registrarComponent.prototype.subirImagen = function () {
        var _this = this;
        this.loading = true;
        var formModel = this.prepareSave();
        this.http.post(this.rutaService.getRutaApi() + 'imagenes?token=' + localStorage.getItem('mouvers_token'), formModel)
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            _this.imgUpload = _this.data.imagen;
            _this.myFormEditar.patchValue({ foto: _this.imgUpload });
            //Solo admitimos imágenes.
            if (!_this.fileIMG.type.match('image.*')) {
                return;
            }
            var reader = new FileReader();
            reader.onload = (function (theFile) {
                return function (e) {
                    // Creamos la imagen.
                    document.getElementById("foto").innerHTML = ['<img class="thumb" src="', e.target.result, '" height="160px"/>'].join('');
                };
            })(_this.fileIMG);
            reader.readAsDataURL(_this.fileIMG);
            _this.clear = true;
            _this.loading = false;
            _this.showToast('success', 'Success!', _this.data.message);
        }, function (msg) {
            console.log(msg);
            _this.loading = false;
            if (msg.status == 400 || msg.status == 401) {
                _this.showToast('warning', 'Warning!', msg.error.error);
            }
            else {
                _this.showToast('error', 'Erro!', msg.error.error);
            }
        });
    };
    registrarComponent.prototype.prepareSaveLogo = function () {
        var inputLogo = new FormData();
        inputLogo.append('imagen', this.fileIMGLogo);
        inputLogo.append('carpeta', 'categorias');
        inputLogo.append('url_imagen', this.rutaService.getRutaImages());
        return inputLogo;
    };
    registrarComponent.prototype.onFileChangeLogo = function (event) {
        if (event.target.files.length > 0) {
            this.fileIMGLogo = event.target.files[0];
            this.subirImagenLogo();
        }
    };
    registrarComponent.prototype.clearFileLogo = function () {
        this.imgUploadLogo = null;
        this.fileInput.nativeElement.value = '';
        this.clearLogo = false;
        this.myFormEditar.patchValue({ logo: null });
    };
    registrarComponent.prototype.subirImagenLogo = function () {
        var _this = this;
        this.loading = true;
        var formModel = this.prepareSaveLogo();
        this.http.post(this.rutaService.getRutaApi() + 'imagenes?token=' + localStorage.getItem('mouvers_token'), formModel)
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            _this.imgUploadLogo = _this.data.imagen;
            _this.myFormEditar.patchValue({ logo: _this.imgUploadLogo });
            _this.objAEditar.usuario.registro.logo = _this.imgUploadLogo;
            //Solo admitimos imágenes.
            if (!_this.fileIMGLogo.type.match('image.*')) {
                return;
            }
            var reader = new FileReader();
            reader.onload = (function (theFile) {
                return function (e) {
                    // Creamos la imagen.
                    document.getElementById("logo").innerHTML = ['<img class="thumb" src="', e.target.result, '" height="160px"/>'].join('');
                };
            })(_this.fileIMGLogo);
            reader.readAsDataURL(_this.fileIMGLogo);
            _this.clearLogo = true;
            _this.loading = false;
            _this.showToast('success', 'Success!', _this.data.message);
        }, function (msg) {
            console.log(msg);
            _this.loading = false;
            if (msg.status == 400 || msg.status == 401) {
                _this.showToast('warning', 'Warning!', msg.error.error);
            }
            else {
                _this.showToast('error', 'Erro!', msg.error.error);
            }
        });
    };
    registrarComponent.prototype.prepareSavePasaporte = function () {
        var inputPasaporte = new FormData();
        inputPasaporte.append('imagen', this.fileIMGPasaporte);
        inputPasaporte.append('carpeta', 'categorias');
        inputPasaporte.append('url_imagen', this.rutaService.getRutaImages());
        return inputPasaporte;
    };
    registrarComponent.prototype.onFileChangePasaporte = function (event) {
        if (event.target.files.length > 0) {
            this.fileIMGPasaporte = event.target.files[0];
            this.subirImagenPasaporte();
        }
    };
    registrarComponent.prototype.clearFilePasaporte = function () {
        this.imgUploadPasaporte = null;
        this.fileInput.nativeElement.value = '';
        this.clearPasaporte = false;
        this.myFormEditar.patchValue({ Pasaporte: null });
    };
    registrarComponent.prototype.subirImagenPasaporte = function () {
        var _this = this;
        this.loading = true;
        var formModel = this.prepareSavePasaporte();
        this.http.post(this.rutaService.getRutaApi() + 'imagenes?token=' + localStorage.getItem('mouvers_token'), formModel)
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            _this.imgUploadPasaporte = _this.data.imagen;
            _this.myFormEditar.patchValue({ pasaporte: _this.imgUploadPasaporte });
            _this.objAEditar.usuario.registro.pasaporte = _this.imgUploadPasaporte;
            //Solo admitimos imágenes.
            if (!_this.fileIMGPasaporte.type.match('image.*')) {
                return;
            }
            var reader = new FileReader();
            reader.onload = (function (theFile) {
                return function (e) {
                    // Creamos la imagen.
                    document.getElementById("pasaporte").innerHTML = ['<img class="thumb" src="', e.target.result, '" height="160px"/>'].join('');
                };
            })(_this.fileIMGPasaporte);
            reader.readAsDataURL(_this.fileIMGPasaporte);
            _this.clearPasaporte = true;
            _this.loading = false;
            _this.showToast('success', 'Success!', _this.data.message);
        }, function (msg) {
            console.log(msg);
            _this.loading = false;
            if (msg.status == 400 || msg.status == 401) {
                _this.showToast('warning', 'Warning!', msg.error.error);
            }
            else {
                _this.showToast('error', 'Erro!', msg.error.error);
            }
        });
    };
    registrarComponent.prototype.prepareSaveOperaciones = function () {
        var inputOperaciones = new FormData();
        inputOperaciones.append('imagen', this.fileIMGOperaciones);
        inputOperaciones.append('carpeta', 'categorias');
        inputOperaciones.append('url_imagen', this.rutaService.getRutaImages());
        return inputOperaciones;
    };
    registrarComponent.prototype.onFileChangeOperaciones = function (event) {
        if (event.target.files.length > 0) {
            this.fileIMGOperaciones = event.target.files[0];
            this.subirImagenOperaciones();
        }
    };
    registrarComponent.prototype.clearFileOperaciones = function () {
        this.imgUploadOperaciones = null;
        this.fileInput.nativeElement.value = '';
        this.clearOperaciones = false;
        this.myFormEditar.patchValue({ Operaciones: null });
    };
    registrarComponent.prototype.subirImagenOperaciones = function () {
        var _this = this;
        this.loading = true;
        var formModel = this.prepareSaveOperaciones();
        this.http.post(this.rutaService.getRutaApi() + 'imagenes?token=' + localStorage.getItem('mouvers_token'), formModel)
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            _this.imgUploadOperaciones = _this.data.imagen;
            _this.myFormEditar.patchValue({ operaciones: _this.imgUploadOperaciones });
            _this.objAEditar.usuario.registro.operaciones = _this.imgUploadOperaciones;
            //Solo admitimos imágenes.
            if (!_this.fileIMGOperaciones.type.match('image.*')) {
                return;
            }
            var reader = new FileReader();
            reader.onload = (function (theFile) {
                return function (e) {
                    // Creamos la imagen.
                    document.getElementById("Operaciones").innerHTML = ['<img class="thumb" src="', e.target.result, '" height="160px"/>'].join('');
                };
            })(_this.fileIMGOperaciones);
            reader.readAsDataURL(_this.fileIMGOperaciones);
            _this.clearOperaciones = true;
            _this.loading = false;
            _this.showToast('success', 'Success!', _this.data.message);
        }, function (msg) {
            console.log(msg);
            _this.loading = false;
            if (msg.status == 400 || msg.status == 401) {
                _this.showToast('warning', 'Warning!', msg.error.error);
            }
            else {
                _this.showToast('error', 'Erro!', msg.error.error);
            }
        });
    };
    registrarComponent.prototype.prepareSaveIdoneidad_file = function () {
        var inputIdoneidad_file = new FormData();
        inputIdoneidad_file.append('imagen', this.fileIMGIdoneidad_file);
        inputIdoneidad_file.append('carpeta', 'categorias');
        inputIdoneidad_file.append('url_imagen', this.rutaService.getRutaImages());
        return inputIdoneidad_file;
    };
    registrarComponent.prototype.onFileChangeIdoneidad_file = function (event) {
        if (event.target.files.length > 0) {
            this.fileIMGIdoneidad_file = event.target.files[0];
            this.subirImagenIdoneidad_file();
        }
    };
    registrarComponent.prototype.clearFileIdoneidad_file = function () {
        this.imgUploadIdoneidad_file = null;
        this.fileInput.nativeElement.value = '';
        this.clearIdoneidad_file = false;
        this.myFormEditar.patchValue({ idoneidad_file: null });
    };
    registrarComponent.prototype.subirImagenIdoneidad_file = function () {
        var _this = this;
        this.loading = true;
        var formModel = this.prepareSaveIdoneidad_file();
        this.http.post(this.rutaService.getRutaApi() + 'imagenes?token=' + localStorage.getItem('mouvers_token'), formModel)
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            _this.imgUploadIdoneidad_file = _this.data.imagen;
            _this.myFormEditar.patchValue({ idoneidad_file: _this.imgUploadIdoneidad_file });
            _this.objAEditar.usuario.registro.idoneidad_file = _this.imgUploadIdoneidad_file;
            //Solo admitimos imágenes.
            if (!_this.fileIMGIdoneidad_file.type.match('image.*')) {
                return;
            }
            var reader = new FileReader();
            reader.onload = (function (theFile) {
                return function (e) {
                    // Creamos la imagen.
                    document.getElementById("idoneidad_file").innerHTML = ['<img class="thumb" src="', e.target.result, '" height="160px"/>'].join('');
                };
            })(_this.fileIMGIdoneidad_file);
            reader.readAsDataURL(_this.fileIMGIdoneidad_file);
            _this.clearIdoneidad_file = true;
            _this.loading = false;
            _this.showToast('success', 'Success!', _this.data.message);
        }, function (msg) {
            console.log(msg);
            _this.loading = false;
            if (msg.status == 400 || msg.status == 401) {
                _this.showToast('warning', 'Warning!', msg.error.error);
            }
            else {
                _this.showToast('error', 'Erro!', msg.error.error);
            }
        });
    };
    registrarComponent.prototype.init = function () {
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
    registrarComponent.prototype.FilterByName = function () {
        this.filteredItems = [];
        if (this.inputName != "") {
            for (var i = 0; i < this.productList.length; ++i) {
                if (this.productList[i].usuario.nombre.toUpperCase().indexOf(this.inputName.toUpperCase()) >= 0) {
                    this.filteredItems.push(this.productList[i]);
                }
                else if (this.productList[i].usuario.email.toUpperCase().indexOf(this.inputName.toUpperCase()) >= 0) {
                    this.filteredItems.push(this.productList[i]);
                }
                else if (this.productList[i].usuario.telefono.toUpperCase().indexOf(this.inputName.toUpperCase()) >= 0) {
                    this.filteredItems.push(this.productList[i]);
                }
                else if (this.productList[i].usuario.estado.toUpperCase().indexOf(this.inputName.toUpperCase()) >= 0) {
                    this.filteredItems.push(this.productList[i]);
                }
                else if (this.productList[i].usuario.ciudad.toUpperCase().indexOf(this.inputName.toUpperCase()) >= 0) {
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
    registrarComponent.prototype.fillArray = function () {
        var obj = new Array();
        for (var index = this.pageStart; index < this.pageStart + this.pages; index++) {
            obj.push(index);
        }
        return obj;
    };
    registrarComponent.prototype.refreshItems = function () {
        this.items = this.filteredItems.slice((this.currentIndex - 1) * this.pageSize, (this.currentIndex) * this.pageSize);
        this.pagesIndex = this.fillArray();
    };
    registrarComponent.prototype.prevPage = function () {
        if (this.currentIndex > 1) {
            this.currentIndex--;
        }
        if (this.currentIndex < this.pageStart) {
            this.pageStart = this.currentIndex;
        }
        this.refreshItems();
    };
    registrarComponent.prototype.nextPage = function () {
        if (this.currentIndex < this.pageNumber) {
            this.currentIndex++;
        }
        if (this.currentIndex >= (this.pageStart + this.pages)) {
            this.pageStart = this.currentIndex - this.pages + 1;
        }
        this.refreshItems();
    };
    registrarComponent.prototype.setPage = function (index) {
        this.currentIndex = index;
        this.refreshItems();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], registrarComponent.prototype, "fileInput", void 0);
    registrarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-ver-socios',
            template: __webpack_require__("../../../../../src/app/pages/socios/registrar/registrar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/socios/registrar/registrar.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */],
            __WEBPACK_IMPORTED_MODULE_6_angular2_toaster__["d" /* ToasterService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__services_ruta_base_ruta_base_service__["a" /* RutaBaseService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormBuilder"]])
    ], registrarComponent);
    return registrarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/socios/socios-agregar/socios-agregar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-lg-6\" style=\"display:block; margin:auto\">\r\n    <nb-card>\r\n      <nb-card-header>Registro de Nuevo Socio</nb-card-header>\r\n      <nb-card-body>\r\n        <form [formGroup]=\"myFormAgregar\" novalidate>\r\n          <div class=\"form-group\">\r\n            <label for=\"exampleInputNombre\">Nombre</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"exampleInputNombre\" placeholder=\"Nombre\" formControlName=\"nombre\">\r\n            <div *ngIf=\"myFormAgregar.get('nombre').errors && myFormAgregar.get('nombre').dirty\">\r\n              <p *ngIf=\"myFormAgregar.get('nombre').hasError('required')\">Nombre es requerido</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"exampleInputEmail\">Email</label>\r\n            <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail\" placeholder=\"Email\" formControlName=\"email\">\r\n            <div *ngIf=\"myFormAgregar.get('email').errors && myFormAgregar.get('email').dirty\">\r\n              <p *ngIf=\"myFormAgregar.get('email').hasError('required')\">Email es requerido</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"exampleInputPassword\">Password</label>\r\n            <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword\" placeholder=\"Password\" formControlName=\"password\">\r\n            <div *ngIf=\"myFormAgregar.get('password').errors && myFormAgregar.get('password').dirty\">\r\n              <p *ngIf=\"myFormAgregar.get('password').hasError('required')\">Password es requerido</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"exampleInputPassword2\">Confirmar Password</label>\r\n            <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword2\" placeholder=\"Password\" formControlName=\"password2\">\r\n            <div *ngIf=\"myFormAgregar.get('password2').errors && myFormAgregar.get('password2').dirty\">\r\n              <p *ngIf=\"myFormAgregar.get('password2').hasError('required')\">Password es requerido</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"exampleInputTelefono\">Teléfono</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"exampleInputTelefono\" placeholder=\"Telefono\" formControlName=\"telefono\">\r\n            <div *ngIf=\"myFormAgregar.get('telefono').errors && myFormAgregar.get('telefono').dirty\">\r\n              <p *ngIf=\"myFormAgregar.get('telefono').hasError('required')\">Teléfono es requerido</p>\r\n            </div>\r\n          </div>\r\n          <!--div *ngIf=\"estados\" class=\"form-group\">\r\n            <label for=\"exampleInputEstado\">Estado</label>\r\n            <select class=\"form-control\" id=\"exampleInputEstado\" formControlName=\"estado\"\r\n            (change)=\"setEstado2($event.target.value)\">\r\n\r\n              <option *ngFor=\"let estado of estados\" [value]=\"estado.nom_ent\">{{estado.nom_ent}}</option>\r\n            </select>\r\n          </div-->\r\n          <!--div *ngIf=\"estados\" class=\"form-group\">\r\n            <label for=\"exampleInputCiudad\">Ciudad</label>\r\n            <select class=\"form-control\" id=\"exampleInputCiudad\" formControlName=\"ciudad\">\r\n              <option *ngFor=\"let ciudad of ciudades\" [value]=\"ciudad.nom_mun\">{{ciudad.nom_mun}}</option>\r\n            </select>\r\n          </div-->\r\n          \r\n          <br>\r\n          <button type=\"submit\" class=\"btn btn-info\" (click)=\"crear()\" [disabled]=\"myFormAgregar.invalid\">Agregar</button>\r\n        </form>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </div>\r\n</div>\r\n\r\n<toaster-container [toasterconfig]=\"config\"></toaster-container>\r\n\r\n<div class=\"my-container\">\r\n    <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '4px' }\"></ngx-loading>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/socios/socios-agregar/socios-agregar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) nb-card-body {\n  overflow: visible; }\n\n:host-context(.nb-theme-default) .input-group {\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-default) .validation-checkboxes {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n  :host-context(.nb-theme-default) .validation-checkboxes .custom-control {\n    margin-left: 1rem; }\n\n:host-context(.nb-theme-default) .demo-checkboxes {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-default) .demo-radio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-default) .demo-disabled-checkbox-radio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-default) .demo-checkboxes-radio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n\n:host-context(.nb-theme-default) .demo-rating {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n:host-context(.nb-theme-default) .star {\n  font-size: 1.5rem;\n  color: #a4abb3; }\n\n:host-context(.nb-theme-default) .filled {\n  color: #a4abb3; }\n\n:host-context(.nb-theme-default) .rating-header {\n  line-height: 2rem;\n  font-size: 1.25rem;\n  font-family: Exo;\n  font-weight: 500;\n  color: #2a2a2a; }\n\n:host-context(.nb-theme-default) .current-rate {\n  font-size: 1.5rem;\n  padding-left: 1rem;\n  color: #2a2a2a; }\n\n:host-context(.nb-theme-default) .full-name-inputs {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n:host-context(.nb-theme-default) .input-group.has-person-icon {\n  position: relative; }\n  :host-context(.nb-theme-default) .input-group.has-person-icon .form-control {\n    padding-left: 3rem; }\n  :host-context(.nb-theme-default) .input-group.has-person-icon::before {\n    content: '\\F47D';\n    font-family: 'Ionicons';\n    font-size: 2rem;\n    position: absolute;\n    z-index: 100;\n    left: 1rem;\n    top: 0.25rem; }\n\n:host-context(.nb-theme-default) .dropdown {\n  min-width: 7rem; }\n\n:host-context(.nb-theme-default) .dropdown-menu {\n  width: auto; }\n\n:host-context(.nb-theme-default) .form-group label {\n  padding: 0 0 0.75rem; }\n\n:host-context(.nb-theme-default) ngb-rating {\n  outline: none; }\n\n:host-context(.nb-theme-default) ngb-rating i {\n  color: #0b417a; }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-default) button:not(.btn-icon) {\n    padding: 0.75rem 1rem;\n    font-size: 0.75rem; } }\n\n:host-context(.nb-theme-cosmic) nb-card-body {\n  overflow: visible; }\n\n:host-context(.nb-theme-cosmic) .input-group {\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-cosmic) .validation-checkboxes {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n  :host-context(.nb-theme-cosmic) .validation-checkboxes .custom-control {\n    margin-left: 1rem; }\n\n:host-context(.nb-theme-cosmic) .demo-checkboxes {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-cosmic) .demo-radio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-cosmic) .demo-disabled-checkbox-radio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-cosmic) .demo-checkboxes-radio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n\n:host-context(.nb-theme-cosmic) .demo-rating {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n:host-context(.nb-theme-cosmic) .star {\n  font-size: 1.5rem;\n  color: #76f8f6; }\n\n:host-context(.nb-theme-cosmic) .filled {\n  color: #76f8f6; }\n\n:host-context(.nb-theme-cosmic) .rating-header {\n  line-height: 2rem;\n  font-size: 1.25rem;\n  font-family: Exo;\n  font-weight: 500;\n  color: #ffffff; }\n\n:host-context(.nb-theme-cosmic) .current-rate {\n  font-size: 1.5rem;\n  padding-left: 1rem;\n  color: #ffffff; }\n\n:host-context(.nb-theme-cosmic) .full-name-inputs {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n:host-context(.nb-theme-cosmic) .input-group.has-person-icon {\n  position: relative; }\n  :host-context(.nb-theme-cosmic) .input-group.has-person-icon .form-control {\n    padding-left: 3rem; }\n  :host-context(.nb-theme-cosmic) .input-group.has-person-icon::before {\n    content: '\\F47D';\n    font-family: 'Ionicons';\n    font-size: 2rem;\n    position: absolute;\n    z-index: 100;\n    left: 1rem;\n    top: 0.25rem; }\n\n:host-context(.nb-theme-cosmic) .dropdown {\n  min-width: 7rem; }\n\n:host-context(.nb-theme-cosmic) .dropdown-menu {\n  width: auto; }\n\n:host-context(.nb-theme-cosmic) .form-group label {\n  padding: 0 0 0.75rem; }\n\n:host-context(.nb-theme-cosmic) ngb-rating {\n  outline: none; }\n\n:host-context(.nb-theme-cosmic) ngb-rating i {\n  color: #0b417a;\n  color: #0b417a; }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-cosmic) button:not(.btn-icon) {\n    padding: 0.75rem 1rem;\n    font-size: 0.75rem; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/socios/socios-agregar/socios-agregar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SociosAgregarComponent; });
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







var SociosAgregarComponent = /** @class */ (function () {
    function SociosAgregarComponent(toasterService, http, router, rutaService, fb) {
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
        this.mostrar = true;
        this.mouvers_user_tipo = localStorage.getItem('mouvers_user_tipo');
        this.myFormAgregar = this.fb.group({
            nombre: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required]],
            email: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required]],
            password2: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required]],
            telefono: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required]],
        });
    }
    SociosAgregarComponent.prototype.ngOnInit = function () {
        if (this.mouvers_user_tipo != '1') {
            localStorage.removeItem('mouvers_token');
            localStorage.removeItem('mouvers_user_id');
            localStorage.removeItem('mouvers_user_nombre');
            localStorage.removeItem('mouvers_user_tipo');
            localStorage.removeItem('mouvers_establecimiento_id');
            this.router.navigateByUrl('/pagessimples/loginf');
        }
        this.getEstados();
    };
    SociosAgregarComponent.prototype.showToast = function (type, title, body) {
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
    SociosAgregarComponent.prototype.getEstados = function () {
        var _this = this;
        this.loading = true;
        this.http.get(this.rutaService.getRutaApi() + 'entidades/municipios?token=' + localStorage.getItem('mouvers_token'))
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            _this.estados = _this.data.entidades;
            _this.loading = false;
        }, function (msg) {
            //console.log(msg);
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
    SociosAgregarComponent.prototype.setEstado2 = function (estado) {
        console.log(estado);
        for (var i = 0; i < this.estados.length; ++i) {
            if (estado == this.estados[i].nom_ent) {
                this.ciudades = this.estados[i].municipios;
                this.myFormAgregar.patchValue({ ciudad: this.ciudades[0].nom_mun });
            }
        }
    };
    SociosAgregarComponent.prototype.crear = function () {
        var _this = this;
        console.log(this.myFormAgregar.value);
        if (this.myFormAgregar.value.password != this.myFormAgregar.value.password2) {
            this.showToast('warning', 'Warning!', 'Las contraseñas no coinciden.');
        }
        else {
            this.loading = true;
            var datos = {
                token: localStorage.getItem('mouvers_token'),
                nombre: this.myFormAgregar.value.nombre,
                email: this.myFormAgregar.value.email,
                password: this.myFormAgregar.value.password,
                telefono: this.myFormAgregar.value.telefono,
            };
            this.http.post(this.rutaService.getRutaApi() + 'establecimientos', datos)
                .toPromise()
                .then(function (data) {
                console.log(data);
                _this.data = data;
                //alert(this.data.message);
                _this.loading = false;
                _this.showToast('success', 'Success!', _this.data.message);
                _this.myFormAgregar.reset();
                //this.clearFile();
            }, function (msg) {
                console.log(msg);
                console.log(msg.error.error);
                _this.loading = false;
                //token invalido/ausente o token expiro
                if (msg.status == 400 || msg.status == 401) {
                    //alert(msg.error.error);
                    //ir a login
                    _this.showToast('warning', 'Warning!', msg.error.error);
                    //this.mostrar = false;
                }
                else {
                    //alert(msg.error.error);
                    _this.showToast('error', 'Erro!', msg.error.error);
                }
            });
        }
    };
    SociosAgregarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-socios-agregar',
            styles: [__webpack_require__("../../../../../src/app/pages/socios/socios-agregar/socios-agregar.component.scss")],
            template: __webpack_require__("../../../../../src/app/pages/socios/socios-agregar/socios-agregar.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_angular2_toaster__["d" /* ToasterService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_ruta_base_ruta_base_service__["a" /* RutaBaseService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormBuilder"]])
    ], SociosAgregarComponent);
    return SociosAgregarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/socios/socios-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SociosRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routedComponents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__socios_component__ = __webpack_require__("../../../../../src/app/pages/socios/socios.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__socios_agregar_socios_agregar_component__ = __webpack_require__("../../../../../src/app/pages/socios/socios-agregar/socios-agregar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__socios_ver_socios_ver_component__ = __webpack_require__("../../../../../src/app/pages/socios/socios-ver/socios-ver.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__registrar_registrar_component__ = __webpack_require__("../../../../../src/app/pages/socios/registrar/registrar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__socios_component__["a" /* SociosComponent */],
        children: [{
                path: 'agregar',
                component: __WEBPACK_IMPORTED_MODULE_3__socios_agregar_socios_agregar_component__["a" /* SociosAgregarComponent */],
            }, {
                path: 'ver',
                component: __WEBPACK_IMPORTED_MODULE_4__socios_ver_socios_ver_component__["a" /* SociosVerComponent */],
            }, {
                path: 'registrar',
                component: __WEBPACK_IMPORTED_MODULE_5__registrar_registrar_component__["a" /* registrarComponent */],
            }],
    }];
var SociosRoutingModule = /** @class */ (function () {
    function SociosRoutingModule() {
    }
    SociosRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */],
            ],
        })
    ], SociosRoutingModule);
    return SociosRoutingModule;
}());

var routedComponents = [
    __WEBPACK_IMPORTED_MODULE_2__socios_component__["a" /* SociosComponent */],
    __WEBPACK_IMPORTED_MODULE_3__socios_agregar_socios_agregar_component__["a" /* SociosAgregarComponent */],
    __WEBPACK_IMPORTED_MODULE_4__socios_ver_socios_ver_component__["a" /* SociosVerComponent */],
    __WEBPACK_IMPORTED_MODULE_5__registrar_registrar_component__["a" /* registrarComponent */]
];


/***/ }),

/***/ "../../../../../src/app/pages/socios/socios-ver/socios-ver.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card *ngIf=\"!editando && mostrar\">\r\n  <nb-card-header>\r\n    <div class=\"row show-grid\">\r\n          <div class=\"col-6\">\r\n            <div>Lista de Socios</div>\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <div>\r\n              <div style=\"text-align: right;\">\r\n               <strong>Buscar: </strong>\r\n               <input  type=\"text\"  id=\"inputName\" [(ngModel)]=\"inputName\" (ngModelChange)=\"FilterByName()\"/>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n  </nb-card-header>\r\n\r\n  <nb-card-body>\r\n\r\n    <table class=\"table\">\r\n      <thead>\r\n         <th style=\"text-align: center;\">Imagen</th>\r\n         <th style=\"text-align: center;\">Nombre</th>\r\n         <th style=\"text-align: center;\">Email</th>\r\n         <th style=\"text-align: center;\">Teléfono</th>\r\n         <th style=\"text-align: center;\">Tipo</th>\r\n         <th style=\"text-align: center;\">En Curso</th>\r\n         <th style=\"text-align: center;\">Finalizados</th>\r\n         <th style=\"text-align: center;\">Ingreso</th>\r\n         <th style=\"text-align: center;\">Puntaje</th>\r\n         <th style=\"text-align: center;\">Estado</th>\r\n         <th style=\"text-align: center;\">Acciones</th>\r\n      </thead>\r\n      <tbody>\r\n         <tr *ngFor=\"let item of items\" >\r\n            <td style=\"text-align: center; vertical-align:middle;\"><img src = \"{{item.usuario.imagen}}\" alt=\"\" class=\"img-table\" height=\"50px\" width=\"80px\" style=\"border-radius: 10px;\"></td>\r\n            <td style=\"text-align: center; vertical-align:middle;\">{{item.usuario.nombre}}</td>\r\n            <td style=\"text-align: center; vertical-align:middle;\">\r\n            {{item.usuario.email}}</td>\r\n            <td style=\"text-align: center; vertical-align:middle;\">{{item.usuario.telefono}}</td>\r\n            <td style=\"text-align: center; vertical-align:middle;\">{{item.tipo2}}</td>\r\n            <td style=\"text-align: center;\">{{item.encurso}}</td>\r\n            <td style=\"text-align: center;\">{{item.enfinalizados}}</td>\r\n            <td style=\"text-align: center;\">{{item.created_at}}</td>\r\n            <!--td style=\" vertical-align:middle;\">\r\n              <div class=\"estado\" style=\"display:block; margin:auto\">\r\n                <label class=\"theme-switch\">\r\n                  <span class=\"light\">OFF</span>\r\n                  <div class=\"switch\">\r\n                    <input type=\"checkbox\" [checked]=\"item.status === 'ON'\" (change)=\"cambiarStatus(item)\" #theme>\r\n                    <span class=\"slider\"></span>\r\n                  </div>\r\n                  <span class=\"cosmic\">ON</span>\r\n                </label>\r\n              </div>\r\n            </td-->\r\n            <td class=\"text-center\">\r\n              <div>\r\n                <ngb-rating [(rate)]=\"item.promedio\" max=5>\r\n                  <ng-template let-fill=\"fill\">\r\n                    <span class=\"star fill\" [class.filled]=\"fill === 100\">\r\n                      <i class=\"ion-android-star\" *ngIf=\"fill === 100\"></i>\r\n                      <i class=\"ion-android-star-outline\" *ngIf=\"fill !== 100\"></i>\r\n                    </span>\r\n                  </ng-template>\r\n                </ngb-rating>\r\n                <!--span class=\"current-rate\">{{item.promedio}}</span-->\r\n              </div>\r\n            </td>\r\n            <td style=\" vertical-align:middle;\">\r\n              <!--div class=\"estado\" style=\"display:block; margin:auto\">\r\n                <label class=\"theme-switch\">\r\n                  <span class=\"light\">OFF</span>\r\n                  <div class=\"switch\">\r\n                    <input type=\"checkbox\" [checked]=\"item.estado === 'ON'\" (change)=\"cambiarEstado(item)\" #theme>\r\n                    <span class=\"slider\"></span>\r\n                  </div>\r\n                  <span class=\"cosmic\">ON</span>\r\n                </label>\r\n              </div-->\r\n              <nb-checkbox [value]=\"item.estado === 'ON'\"  (change)=\"cambiarEstado(item)\"></nb-checkbox>\r\n            </td> \r\n            \r\n            <td style=\"text-align: center; vertical-align:middle;\">\r\n              <button type=\"button\" class=\"btn btn-primary btn-icon btn-sm btn-table\" title=\"Editar\" (click)=\"aEditar(item)\">\r\n                <i class=\"nb-edit\"></i>\r\n              </button>\r\n              <button type=\"button\" class=\"btn btn-danger btn-icon btn-sm btn-table\" title=\"Eliminar\" (click)=\"open(modal1); aEliminar(item)\">\r\n                <i class=\"nb-trash\"></i>\r\n              </button>\r\n              <button type=\"button\" class=\"btn btn-primary btn-icon btn-sm btn-table\" title=\"Chat\" (click)=\"chat(item)\">\r\n                <i class=\"nb-email\"></i>\r\n              </button>\r\n            </td>\r\n         </tr>\r\n      </tbody>\r\n    </table>\r\n  \r\n  </nb-card-body>\r\n  <nb-card-footer>\r\n    <div class=\"btn-toolbar\" role=\"toolbar\" style=\"margin: 0;\">\r\n      <div class=\"btn-group\">\r\n         <label style=\"margin-top:10px\">Página {{currentIndex}}/{{pageNumber}} </label>\r\n      </div>\r\n      <div class=\"btn-group pull-right\">\r\n         <ul class=\"pagination\" >\r\n            <li class=\"page-item\" [ngClass]=\"{'disabled': (currentIndex == 1 || pageNumber == 0)}\" ><a class=\"page-link\"  (click)=\"prevPage()\" >Atrás</a></li>\r\n               <li class=\"page-item\" *ngFor=\"let page of pagesIndex\"  [ngClass]=\"{'active': (currentIndex == page)}\">\r\n                  <a class=\"page-link\" (click)=\"setPage(page)\"  >{{page}} </a>\r\n               </li>\r\n            <li class=\"page-item\" [ngClass]=\"{'disabled': (currentIndex == pageNumber || pageNumber == 0)}\" ><a class=\"page-link\"   (click)=\"nextPage()\" >Siguiente</a></li>\r\n         </ul>\r\n      </div>\r\n    </div>  \r\n  </nb-card-footer>\r\n</nb-card>\r\n\r\n<div class=\"row\" *ngIf=\"editando\">\r\n  <div class=\"col-lg-12\" style=\"display:block; margin:auto\">\r\n    <nb-card>\r\n      <nb-card-header>Editar información del Proveedor</nb-card-header>\r\n      <nb-card-body>\r\n        <form [formGroup]=\"myFormEditar\" novalidate>\r\n          <div class=\"row\">\r\n          \r\n            <div class=\"form-group\" class=\"col-3\"> \r\n              <label for=\"exampleInputNombre\">Nombre</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"exampleInputNombre\" placeholder=\"Nombre\" formControlName=\"nombre\">\r\n              <div *ngIf=\"myFormEditar.get('nombre').errors && myFormEditar.get('nombre').dirty\">\r\n                <p *ngIf=\"myFormEditar.get('nombre').hasError('required')\">Nombre es requerido</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\" class=\"col-3\">\r\n              <label for=\"exampleInputEmail\">Email</label>\r\n              <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail\" placeholder=\"Email\" formControlName=\"email\">\r\n              <div *ngIf=\"myFormEditar.get('email').errors && myFormEditar.get('email').dirty\">\r\n                <p *ngIf=\"myFormEditar.get('email').hasError('required')\">Email es requerido</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\" class=\"col-3\">\r\n              <label for=\"exampleInputTelefono\">Teléfono</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"exampleInputTelefono\" placeholder=\"Telefono\" formControlName=\"telefono\">\r\n              <div *ngIf=\"myFormEditar.get('telefono').errors && myFormEditar.get('telefono').dirty\">\r\n                <p *ngIf=\"myFormEditar.get('telefono').hasError('required')\">Teléfono es requerido</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\" class=\"col-3\">\r\n              <label for=\"exampleInputTelefono\">Foto</label><br>\r\n              <img src=\"{{myFormEditar.value.foto}}\" alt=\"\" style=\"width: 250px; height: 250px; border-radius: 20px;\">\r\n                <input [hidden]=\"clear\" type=\"file\" name=\"imagen\" id=\"imagen\" (change)=\"onFileChange($event)\" #fileInput accept=\"image/*\">\r\n                  <div *ngIf=\"clear\">\r\n                    <button type=\"button\" class=\"btn btn-danger btn-tn\" (click)=\"clearFile()\">Eliminar</button>\r\n                  </div>\r\n                  <p [hidden]=\"clear\" style=\"color: #c71717\"><b>Sugerencia:</b> La dimensión de la imagen no debe ser mayor a 870x370 px.</p>\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"form-group\" class=\"col-3\">\r\n              <label for=\"exampleInputTelefono\">Documento de identidad</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"cedula\" placeholder=\"\" formControlName=\"cedula\">\r\n            </div>\r\n\r\n            <div class=\"form-group\" class=\"col-3\">\r\n              <label for=\"exampleInputTelefono\">Nacionalidad</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"nacionalidad\" placeholder=\"\" formControlName=\"nacionalidad\">\r\n            </div>\r\n\r\n            <div class=\"form-group\" class=\"col-6\">\r\n              <label for=\"exampleInputTelefono\">Dirección google</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"direccion\" placeholder=\"\" formControlName=\"direccion\">{{myFormEditar.value.lat}}-{{myFormEditar.value.lng}}\r\n            </div>\r\n            <div class=\"form-group\" class=\"col-6\">\r\n              <label for=\"exampleInputTelefono\">Dirección exacta</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"direccion_exacta\" placeholder=\"\" formControlName=\"direccion_exacta\">\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"form-group\" class=\"col-4\">\r\n              <label for=\"exampleInputTelefono\">Sexo</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"sexo\" placeholder=\"\" formControlName=\"sexo\">\r\n            </div>\r\n            <div class=\"form-group\" class=\"col-4\">\r\n              <label for=\"exampleInputTelefono\">Fecha Nacimiento</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"fecha_nacimiento\" placeholder=\"\" formControlName=\"fecha_nacimiento\">\r\n            </div>\r\n            <div class=\"form-group\" class=\"col-4\">\r\n              <label for=\"exampleInputTelefono\">Formación</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"formacion\" placeholder=\"\" formControlName=\"formacion\">\r\n            </div>\r\n          </div>\r\n          \r\n          <br><br>\r\n          <hr>\r\n          <br><br>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"form-group\" class=\"col-3\">\r\n              <label for=\"exampleInputTelefono\">Tipo de registro</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"exampleInputTipo\" placeholder=\"Tipo de registro\" formControlName=\"tipo2\">\r\n            </div>\r\n\r\n            <div class=\"form-group\" class=\"col-3\">\r\n              <label for=\"exampleInputTelefono\">Ruc</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"exampleInputruc\" placeholder=\"ruc\" formControlName=\"ruc\">\r\n            </div>\r\n\r\n            <div class=\"form-group\" class=\"col-3\">\r\n              <label for=\"exampleInputTelefono\">Email empresa</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"exampleInputemail_empresa\" placeholder=\"email\" formControlName=\"email_empresa\">\r\n            </div>\r\n\r\n            <div class=\"form-group\" class=\"col-3\">\r\n              <label for=\"exampleInputTelefono\">Nombre contacto</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"exampleInputcontacto_nombre\" placeholder=\"\" formControlName=\"contacto_nombre\">\r\n            </div>  \r\n          </div>\r\n          \r\n          <div class=\"row\">\r\n            <div class=\"form-group\" class=\"col-6\">\r\n              <label for=\"exampleInputTelefono\">Urgencias</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"exampleInputTipo\" placeholder=\"\" formControlName=\"urgencias\">\r\n            </div>\r\n\r\n            <div class=\"form-group\" class=\"col-6\">\r\n              <label for=\"exampleInputTelefono\">Factura</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"factura\" placeholder=\"factura\" formControlName=\"factura\">\r\n            </div>\r\n\r\n            <div class=\"form-group\" class=\"col-6\">\r\n              <label for=\"exampleInputTelefono\">Cargo contacto</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"contacto_cargo\" placeholder=\"\" formControlName=\"contacto_cargo\">\r\n            </div>\r\n\r\n            <div class=\"form-group\" class=\"col-6\">\r\n              <label for=\"exampleInputTelefono\">Idoneidad</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"idoneidad\" placeholder=\"idoneidad\" formControlName=\"idoneidad\">\r\n            </div>              \r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"form-group\" class=\"col-4\">\r\n              <label for=\"exampleInputTelefono\">Años experiencia</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"anos_experiencia\" placeholder=\"\" formControlName=\"anos_experiencia\">\r\n            </div>\r\n            <div class=\"form-group\" class=\"col-4\">\r\n              <label for=\"exampleInputTelefono\">Experiencia</label>\r\n              <!--input type=\"text\" class=\"form-control\" id=\"experiencia\" placeholder=\"\" formControlName=\"experiencia\"-->\r\n              <div *ngFor=\"let item of myFormEditar.value.experiencia2\">\r\n                <p>-{{item.nombre}}</p>\r\n              </div>  \r\n            </div>\r\n            <div class=\"form-group\" class=\"col-4\">\r\n              <label for=\"exampleInputTelefono\">Idiomas</label>\r\n              <!--input type=\"text\" class=\"form-control\" id=\"idiomas\" placeholder=\"\" formControlName=\"idiomas\"-->\r\n              <div *ngFor=\"let item of myFormEditar.value.idiomas2\">\r\n                <p>-{{item.nombre}}</p>\r\n              </div>  \r\n            </div>\r\n          </div>\r\n          \r\n          <br><br>\r\n          <hr>\r\n          <br><br>\r\n\r\n          <div class=\"form-group\">\r\n            \r\n            <nb-card-header>Disponibilidad</nb-card-header>\r\n              <br><br>\r\n              <div class=\"form-group\" class=\"row\">\r\n                <div class=\"col-4\">\r\n                   <label style=\"font-weight: bold;\">Lunes:</label>\r\n                </div>\r\n                <div class=\"col-4\"><label for=\"exampleInputTelefono\">Inicio:</label>\r\n                  <input type=\"text\" class=\"form-control\" id=\"lunes_i\" placeholder=\"\" formControlName=\"lunes_i\">\r\n                </div>\r\n                <div class=\"col-4\"><label for=\"exampleInputTelefono\">Fin:</label>\r\n                  <input type=\"text\" class=\"form-control\" id=\"lunes_f\" placeholder=\"\" formControlName=\"lunes_f\">\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\" class=\"row\">\r\n                <div class=\"col-4\">\r\n                   <label style=\"font-weight: bold;\">Martes:</label>\r\n                </div>\r\n                <div class=\"col-4\"><label for=\"exampleInputTelefono\">Inicio:</label>\r\n                  <input type=\"text\" class=\"form-control\" id=\"martes_i\" placeholder=\"\" formControlName=\"martes_i\">\r\n                </div>\r\n                <div class=\"col-4\"><label for=\"exampleInputTelefono\">Fin:</label>\r\n                  <input type=\"text\" class=\"form-control\" id=\"martes_i\" placeholder=\"\" formControlName=\"martes_f\">\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\" class=\"row\">\r\n                <div class=\"col-4\">\r\n                   <label for=\"exampleInputTelefono\" style=\"font-weight: bold;\">Miercoles:</label>\r\n                </div>\r\n                <div class=\"col-4\"><label for=\"exampleInputTelefono\">Inicio:</label>\r\n                  <input type=\"text\" class=\"form-control\" id=\"miercoles_i\" placeholder=\"\" formControlName=\"miercoles_i\">\r\n                </div>\r\n                <div class=\"col-4\"><label for=\"exampleInputTelefono\">Fin:</label>\r\n                  <input type=\"text\" class=\"form-control\" id=\"miercoles_i\" placeholder=\"\" formControlName=\"miercoles_f\">\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\" class=\"row\">\r\n                <div class=\"col-4\">\r\n                   <label for=\"exampleInputTelefono\" style=\"font-weight: bold;\">Jueves:</label>\r\n                </div>\r\n                <div class=\"col-4\"><label for=\"exampleInputTelefono\">Inicio:</label>\r\n                  <input type=\"text\" class=\"form-control\" id=\"jueves_i\" placeholder=\"\" formControlName=\"jueves_i\">\r\n                </div>\r\n                <div class=\"col-4\"><label for=\"exampleInputTelefono\">Fin:</label>\r\n                  <input type=\"text\" class=\"form-control\" id=\"jueves_i\" placeholder=\"\" formControlName=\"jueves_f\">\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\" class=\"row\">\r\n                <div class=\"col-4\">\r\n                   <label for=\"exampleInputTelefono\" style=\"font-weight: bold;\">Viernes:</label>\r\n                </div>\r\n                <div class=\"col-4\"><label for=\"exampleInputTelefono\">Inicio:</label>\r\n                  <input type=\"text\" class=\"form-control\" id=\"viernes_i\" placeholder=\"\" formControlName=\"viernes_i\">\r\n                </div>\r\n                <div class=\"col-4\"><label for=\"exampleInputTelefono\">Fin:</label>\r\n                  <input type=\"text\" class=\"form-control\" id=\"viernes_i\" placeholder=\"\" formControlName=\"viernes_f\">\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\" class=\"row\">\r\n                <div class=\"col-4\">\r\n                   <label for=\"exampleInputTelefono\" style=\"font-weight: bold;\">Sabado:</label>\r\n                </div>\r\n                <div class=\"col-4\"><label for=\"exampleInputTelefono\">Inicio:</label>\r\n                  <input type=\"text\" class=\"form-control\" id=\"lunes_f\" placeholder=\"\" formControlName=\"sabado_i\">\r\n                </div>\r\n                <div class=\"col-4\"><label for=\"exampleInputTelefono\">Fin:</label>\r\n                  <input type=\"text\" class=\"form-control\" id=\"lunes_f\" placeholder=\"\" formControlName=\"sabado_f\">\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\" class=\"row\">\r\n                <div class=\"col-4\">\r\n                   <label for=\"exampleInputTelefono\" style=\"font-weight: bold;\">Domingo:</label>\r\n                </div>\r\n                <div class=\"col-4\"><label for=\"exampleInputTelefono\">Inicio:</label>\r\n                  <input type=\"text\" class=\"form-control\" id=\"domingo_i\" placeholder=\"\" formControlName=\"domingo_i\">\r\n                </div>\r\n                <div class=\"col-4\"><label for=\"exampleInputTelefono\">Fin:</label>\r\n                  <input type=\"text\" class=\"form-control\" id=\"domingo_i\" placeholder=\"\" formControlName=\"domingo_f\">\r\n                </div>\r\n              </div>\r\n          </div>\r\n          \r\n          <br><br>\r\n          <hr>\r\n          <br><br>\r\n\r\n          <div class=\"form-group\" *ngIf=\"refer\">\r\n            <nb-card-header>Referencias personales</nb-card-header>\r\n            <br><br>\r\n            <label style=\"font-weight: bold;\">Referencia 1:</label> <br><br>\r\n              <label style=\"font-weight: bold;\">Nombre:</label>{{myFormEditar.value.referencias2.nombre1}}<br>\r\n              <label style=\"font-weight: bold;\">Telefono:</label>{{myFormEditar.value.referencias2.telefono1}}<br>\r\n              <label style=\"font-weight: bold;\">Dirección:</label>{{myFormEditar.value.referencias2.direccion1}}<br>\r\n              <label style=\"font-weight: bold;\">Contacto:</label>{{myFormEditar.value.referencias2.contacto1}}<br>\r\n              <label style=\"font-weight: bold;\">Cargo:</label>{{myFormEditar.value.referencias2.cargo1}}<br>\r\n            <br>\r\n            <label style=\"font-weight: bold;\">Referencia 2:</label> <br><br>\r\n              <label style=\"font-weight: bold;\">Nombre:</label>{{myFormEditar.value.referencias2.nombre2}}<br>\r\n              <label style=\"font-weight: bold;\">Telefono:</label>{{myFormEditar.value.referencias2.telefono2}}<br>\r\n              <label style=\"font-weight: bold;\">Dirección:</label>{{myFormEditar.value.referencias2.direccion2}}<br>\r\n              <label style=\"font-weight: bold;\">Contacto:</label>{{myFormEditar.value.referencias2.contacto2}}<br>\r\n              <label style=\"font-weight: bold;\">Cargo:</label>{{myFormEditar.value.referencias2.cargo2}}<br>\r\n            <br>\r\n            <label style=\"font-weight: bold;\">Referencia 2:</label> <br><br>\r\n              <label style=\"font-weight: bold;\">Nombre:</label>{{myFormEditar.value.referencias2.nombre3}}<br>\r\n              <label style=\"font-weight: bold;\">Telefono:</label>{{myFormEditar.value.referencias2.telefono3}}<br>\r\n              <label style=\"font-weight: bold;\">Dirección:</label>{{myFormEditar.value.referencias2.direccion3}}<br>\r\n              <label style=\"font-weight: bold;\">Contacto:</label>{{myFormEditar.value.referencias2.contacto3}}<br>\r\n              <label style=\"font-weight: bold;\">Cargo:</label>{{myFormEditar.value.referencias2.cargo3}}<br>\r\n              <br>\r\n          </div>\r\n          \r\n          <br><br>\r\n          <hr>\r\n          <br><br>\r\n\r\n          <div class=\"form-group\">\r\n            <nb-card-header>Referencias comerciales</nb-card-header>\r\n            <br>\r\n            <br>\r\n            <label style=\"font-weight: bold;\">Referencia 1:</label> <br><br>\r\n              <label style=\"font-weight: bold;\">Nombre:</label>{{myFormEditar.value.referencias22.nombre1}}<br>\r\n              <label style=\"font-weight: bold;\">Telefono:</label>{{myFormEditar.value.referencias22.telefono1}}<br>\r\n              <label style=\"font-weight: bold;\">Dirección:</label>{{myFormEditar.value.referencias22.direccion1}}<br>\r\n              <label style=\"font-weight: bold;\">Contacto:</label>{{myFormEditar.value.referencias22.contacto1}}<br>\r\n              <label style=\"font-weight: bold;\">Cargo:</label>{{myFormEditar.value.referencias22.cargo1}}<br>\r\n            <br>\r\n            <label style=\"font-weight: bold;\">Referencia 2:</label> <br><br>\r\n              <label style=\"font-weight: bold;\">Nombre:</label>{{myFormEditar.value.referencias22.nombre2}}<br>\r\n              <label style=\"font-weight: bold;\">Telefono:</label>{{myFormEditar.value.referencias22.telefono2}}<br>\r\n              <label style=\"font-weight: bold;\">Dirección:</label>{{myFormEditar.value.referencias22.direccion2}}<br>\r\n              <label style=\"font-weight: bold;\">Contacto:</label>{{myFormEditar.value.referencias22.contacto2}}<br>\r\n              <label style=\"font-weight: bold;\">Cargo:</label>{{myFormEditar.value.referencias22.cargo2}}<br>\r\n            <br>\r\n            <label style=\"font-weight: bold;\">Referencia 2:</label> <br>\r\n              <label style=\"font-weight: bold;\">Nombre:</label>{{myFormEditar.value.referencias22.nombre3}}<br>\r\n              <label style=\"font-weight: bold;\">Telefono:</label>{{myFormEditar.value.referencias22.telefono3}}<br>\r\n              <label style=\"font-weight: bold;\">Dirección:</label>{{myFormEditar.value.referencias22.direccion3}}<br>\r\n              <label style=\"font-weight: bold;\">Contacto:</label>{{myFormEditar.value.referencias22.contacto3}}<br>\r\n              <label style=\"font-weight: bold;\">Cargo:</label>{{myFormEditar.value.referencias22.cargo3}}<br>\r\n              <br>\r\n          </div>\r\n\r\n          <br><br>\r\n          <hr>\r\n          <br><br>\r\n          \r\n          <div class=\"form-group\">\r\n            <nb-card-header>Documento de Indentidad</nb-card-header><br>\r\n            <img src=\"{{myFormEditar.value.pasaporte}}\" alt=\"\" style=\"width: 600px; height: 600px; border-radius: 20px; \">\r\n              <input [hidden]=\"clearPasaporte\" type=\"file\" name=\"Pasaporte\" id=\"Pasaporte\" (change)=\"onFileChangePasaporte($event)\" #fileInput accept=\"image/*\">\r\n                <div *ngIf=\"clearPasaporte\">\r\n                  <button type=\"button\" class=\"btn btn-danger btn-tn\" (click)=\"clearFilePasaporte()\">Eliminar</button>\r\n                </div>\r\n                <p [hidden]=\"clearPasaporte\" style=\"color: #c71717\"><b>Sugerencia:</b> La dimensión de la imagen no debe ser mayor a 870x370 px.</p>\r\n          </div>\r\n\r\n          <br><br>\r\n          <hr>\r\n          <br><br>\r\n\r\n          <div class=\"form-group\">\r\n            <nb-card-header>Logo</nb-card-header><br>\r\n            <img src=\"{{myFormEditar.value.logo}}\" alt=\"\" style=\"width: 600px; height: 600px; border-radius: 20px;\">\r\n              <input [hidden]=\"clearLogo\" type=\"file\" name=\"Logo\" id=\"Logo\" (change)=\"onFileChangeLogo($event)\" #fileInput accept=\"image/*\">\r\n                <div *ngIf=\"clearLogo\">\r\n                  <button type=\"button\" class=\"btn btn-danger btn-tn\" (click)=\"clearFileLogo()\">Eliminar</button>\r\n                </div>\r\n                <p [hidden]=\"clearLogo\" style=\"color: #c71717\"><b>Sugerencia:</b> La dimensión de la imagen no debe ser mayor a 870x370 px.</p>\r\n          </div>\r\n\r\n          <br><br>\r\n          <hr>\r\n          <br><br>\r\n\r\n          <div class=\"form-group\">\r\n            <nb-card-header>Aviso Operaciones</nb-card-header><br>\r\n            <img src=\"{{myFormEditar.value.operaciones}}\" alt=\"\" style=\"width: 600px; height: 600px; border-radius: 20px;\">\r\n              <input [hidden]=\"clearOperaciones\" type=\"file\" name=\"Operaciones\" id=\"Operaciones\" (change)=\"onFileChangeOperaciones($event)\" #fileInput accept=\"image/*\">\r\n                <div *ngIf=\"clearOperaciones\">\r\n                  <button type=\"button\" class=\"btn btn-danger btn-tn\" (click)=\"clearFileOperaciones()\">Eliminar</button>\r\n                </div>\r\n                <p [hidden]=\"clearOperaciones\" style=\"color: #c71717\"><b>Sugerencia:</b> La dimensión de la imagen no debe ser mayor a 870x370 px.</p>\r\n          </div>\r\n\r\n          <br><br>\r\n          <hr>\r\n          <br><br>\r\n\r\n          <div class=\"form-group\">\r\n            <nb-card-header>Idoneidad</nb-card-header><br>\r\n            <img src=\"{{myFormEditar.value.idoneidad_file}}\" alt=\"\" style=\"width: 600px; height: 600px; border-radius: 20px;\">\r\n              <input [hidden]=\"clearIdoneidad_file\" type=\"file\" name=\"Idoneidad_file\" id=\"Idoneidad_file\" (change)=\"onFileChangeIdoneidad_file($event)\" #fileInput accept=\"image/*\">\r\n                <div *ngIf=\"clearIdoneidad_file\">\r\n                  <button type=\"button\" class=\"btn btn-danger btn-tn\" (click)=\"clearFileIdoneidad_file()\">Eliminar</button>\r\n                </div>\r\n                <p [hidden]=\"clearIdoneidad_file\" style=\"color: #c71717\"><b>Sugerencia:</b> La dimensión de la imagen no debe ser mayor a 870x370 px.</p>\r\n          </div>\r\n\r\n          <br><br>\r\n          <hr>\r\n          <br><br>\r\n          \r\n          <div class=\"form-group\" [hidden]=\"contrato==null\">\r\n            <label for=\"exampleInputTelefono\">Contrato:</label><br>\r\n            <a href=\"{{contrato}}\" target=\"_blank\">Ver contrato</a>\r\n          </div>\r\n          <div class=\"form-group\" [hidden]=\"contrato!=null\">\r\n            <label for=\"exampleInputTelefono\">Sin contrato...</label><br>\r\n          </div>\r\n\r\n          <button class=\"btn btn-success\" (click)=\"vercontrato()\" [hidden]=\"edit_contrato\">Editar contrato</button>\r\n          <div class=\"row\" [hidden]=\"!edit_contrato\">\r\n\r\n              <div class=\"col-1\">\r\n\r\n              </div>\r\n              <div class=\"col-10\">\r\n                <button class=\"btn btn-success\" (click)=\"vercontrato()\" [hidden]=\"!edit_contrato\">Cerrar contrato</button>\r\n\r\n                \r\n                <h3 style=\"text-align: center;\">\r\n                  CONTRATO\r\n                </h3>\r\n                <p style=\"text-align: justify;\">En la Colonia de Sacramento, el día <input type=\"text\" formControlName=\"contrato_fecha\"> entre <b>“Service24”</b>, y por la otra, <b><input type=\"text\" formControlName=\"contrato_nombre\"></b> de C.I <input type=\"text\" formControlName=\"contrato_ci\">  quien en lo sucesivo se denominará <b>“El Proveedor”</b>, se ha convenido en celebrar el presente contrato de conformidad con los términos y condiciones siguientes:\r\n                </p>\r\n                <p><b>A- OBJETO: “Service24”</b> es una aplicación (plataforma) que actúa como intermediario entre quién busca el producto o servicio, en este caso y en lo sucesivo denominado <b>“El Cliente”</b> y quiénes están registrados en ella para ofrecerlos, en este caso <b>“El Proveedor”</b>, quien solo se encargará de gestionar la logística entre las partes para que los trabajos se lleven a cabo. Por este contrato, quién se presenta en este momento <b>“El Proveedor”</b> solicita y adquiere el uso de la plataforma para ofrecer a través de ella sus productos/servicios de acuerdo a los términos y condiciones que se establecen a continuación.</p>\r\n                <p><b>B- PRECIO: </b>A partir de la confirmación de esta solicitud, <b>“El Proveedor”</b> debe abonar las siguientes cantidades: </p>\r\n                <p>I- La zona que se adopte una cuota mensual por el monto de <input type=\"text\" formControlName=\"contrato_costo\">.$u según el plan <b><input type=\"text\" formControlName=\"contrato_plan\"></b>.</p> \r\n                \r\n\r\n                <p><b>C- DERECHOS Y OBLIGACIONES:</b> 1- Este contrato se entiende celebrado Intuitu Personae, por lo tanto, ninguna de las partes podrá ceder o traspasar a terceros los derechos y obligaciones que de él se derivan. 2- <b>“El Proveedor”</b> es responsable a partir del momento en el que se coordina el servicio en realizar el trabajo y finalizarlo, cobrando por ese servicio lo que se acuerde entre él y <b>“El Cliente”</b>, estando <b>“Service24”</b> libre de toda responsabilidad contractual que haya podido adquirir con <b>“El Cliente”</b>.</p>\r\n\r\n                <p><b>D- PLAZO:</b> El presente contrato tendrá una duración de <b>UN (1) AÑO FIJO</b>, contado a partir de la fecha de su aceptación y suscripción, prorrogable automáticamente por igual periodo o por otro, siempre que las partes acuerden su renovación por lo menos con treinta (30) días calendarios antes del vencimiento del plazo fijo o de cualquiera de sus prórrogas.</p>  \r\n\r\n                <p><b>E- RESCISIÓN: </b>en caso de incumplimiento el presente contrato se rescindirá: 1- Cuando la calificación dada por <b>“El Cliente”</b> a <b>“El Proveedor”</b> en cuanto al servicio brindado se refiere, mediante la plataforma sea de 1 estrella, reiterándose esta situación tres veces y previo análisis de por parte de <b>“Service24”</b>. 2- Por dos (2) faltas cuándo ya se confirmó a <b>“El Cliente”</b> proveer el servicio, determinándose horario y demás condiciones previamente pactadas. Esta situación acarreará treinta (30) días de suspensión. Los retrasos en la llegada al domicilio de <b>“El Cliente”</b> o al lugar donde se ejecutará el servicio, excluyendo demoras por causa del tránsito o alguna urgencia imprevista (las cuales ya están calculadas en un margen aproximado) se computarán como media falta. Posteriormente a esta situación y registrándose dos (2) retrasos más o una falta, este contrato quedará rescindido de pleno derecho. 3- Por abuso, agresión o cualquier situación de violencia que se registre hacia <b>“El Cliente”</b> desde el momento en el que se coordina el servicio y hasta la finalización del mismo. 4- Por la sola voluntad de las partes en dar por terminado el servicio.</p>\r\n\r\n                <p><b>F- GARANTÍA DEL SERVICIO: </b>A partir del momento en que <b>“El Cliente</b> y <b>“El Proveedor”</b> coordinan el servicio, <b>“Service24”</b> no se hace responsable por negligencia en los trabajos realizados, por caso fortuito o fuerza mayor. <b>“Service24”</b> no brinda ningún tipo de garantía a clientes sobre los trabajos realizados por <b>“El Proveedor”</b> del producto o servicio a través del contacto por la plataforma o de ninguna otra forma posible, ya que <b>“Service24”</b> solo se encarga de gestionar la logística entre las partes como se mencionó en la cláusula A de este contrato. Tampoco garantiza que los pedidos se lleven a cabo en tiempo y forma acordada, esto es únicamente responsabilidad de <b>“El Proveedor”</b>.</p>\r\n\r\n                <p><b>G- PRIVACIDAD:</b> 1- <b>“Service24”</b> garantiza que la información personal que se envía, cuenta con la seguridad necesaria. Los datos ingresados por usuario o en el caso de requerir una validación de los pedidos, no serán entregados a terceros, salvo: I- los que se muestran a <b>“El Cliente”</b> cuando le es confirmado el producto o servicio, los cuales son proveídos para mayor seguridad del solicitante; II- que la información deba ser revelada en cumplimiento a una orden judicial o requerimientos legales. 2- La suscripción a boletines de correos electrónicos publicitarios es voluntaria y podrá ser seleccionada al momento de crear la cuenta del usuario. <b>“Service24”</b> se reserva el derecho de cambiar o modificar estos términos sin previo aviso.</p> \r\n\r\n                <p><b>H- AUTENTICIDAD DEL CONTRATO:</b> El presente documento constituye el acuerdo entre las partes en relación con su objeto y deja sin efecto cualquier otra negociación, obligación o comunicación entre éstas, ya sea verbal o escrita, efectuada con anterioridad.  Las partes podrán, en el momento que lo deseen, modificar, por escrito, los términos y condiciones establecidos en el presente instrumento, previo consentimiento de los contratantes, debiéndose agregar a este documento, como parte integrante del mismo. Dichas modificaciones obligarán a los signatarios a partir de la fecha de su firma.</p> \r\n\r\n                <p><b>I- LEY APLICABLE:</b> Las partes acuerdan expresamente someterse a lo dispuesto en el Código Civil, y demás leyes vigentes que sean aplicables en relación a la materia, para todo lo no previsto por aquéllas en el presente documento.</p>\r\n\r\n                <p><b>J- NOTIFICACIONES:</b> Toda notificación en virtud de este convenio preliminar podrá realizarse vía fax, telefax o correo certificado, a las direcciones físicas de las partes mencionadas a continuación:</p>\r\n\r\n                <p><b>“Servicio 24”</b>:  Colonia de Sacramento y 59891960115.</p>\r\n\r\n                <p><b>“EL Proveedor”</b>: Dirección: <input formControlName=\"direccion\">, Teléfono: <input formControlName=\"telefono\"></p>\r\n\r\n                <p><b>K- ARBITRAJE:</b> Cualquiera controversia que surja por razón de interpretación, ejecución o incumplimiento del presente contrato, será resuelta entre las partes. En caso de que las partes no logren llegar a un acuerdo, entonces se resolverá mediante arbitraje en Derecho ante el Centro de Conciliación y Arbitraje de la Cámara de Comercio, Industrias y Agricultura de la Colonia de Sacramento, de conformidad con sus normas y reglamentos de procedimiento. Para estos efectos, cada parte designará a un árbitro y éstos, a su vez, designarán a un tercero, quienes conformarán el Tribunal Arbitral. La decisión adoptada por dicho tribunal será final, definitiva y de obligatorio cumplimiento para las partes, por lo que la misma no podrá ser impugnada ante los tribunales de justicia. La parte vencida pagará los costos, gastos y honorarios incurridos en el proceso arbitral. El arbitraje se conducirá en idioma castellano.</p>\r\n\r\n                <p><b>L- DOMICILIO:</b> Las partes contratantes eligen como domicilio especial a la ciudad de Colonia de Sacramento para todos los efectos, derivados y consecuencias de este contrato. En Colonia de Sacramento, a los '.$fecha.'</p>\r\n                <div align=\"center\">\r\n                  <img src=\"{{objAEditar.firma}}\" alt=\"\" style=\"width: 250px\">\r\n                  <div style=\"border-bottom: 1px solid #000;margin-bottom: 10px;width: 400px\"></div>\r\n                  <p >{{myFormEditar.value.contrato_nombre}}</p>\r\n                  <p >C.I. No. {{myFormEditar.value.contrato_ci}}</p>\r\n                </div>\r\n              </div> \r\n\r\n              <button class=\"btn btn-success\" (click)=\"vercontrato()\" [hidden]=\"!edit_contrato\">Cerrar contrato</button>-----\r\n              <button class=\"btn btn-warning\" (click)=\"editar_contrato()\" [hidden]=\"!edit_contrato\">Editar contrato</button>\r\n              <div class=\"col-1\">\r\n\r\n              </div>                       \r\n          </div>                                          \r\n\r\n          <br><br>\r\n          <nb-card-header>Servicios del Proveedor</nb-card-header><br>\r\n          <table class=\"table\">\r\n            <thead>\r\n               <th style=\"text-align: center;\">Imagen</th>\r\n               <th style=\"text-align: center;\">Nombre</th>\r\n               <th style=\"text-align: center;\">Categoaria</th>\r\n               <th style=\"text-align: center;\">Descripción</th>\r\n               <th style=\"text-align: center;\">Imagenes</th>\r\n               <th style=\"text-align: center;\">Habilitar</th>\r\n            </thead>\r\n            <tbody>\r\n               <tr *ngFor=\"let item of this.objAEditar.establecimiento.productos\" >\r\n                <td style=\"text-align: center; vertical-align:middle;\"><img src = \"{{item.imagen}}\" alt=\"\" class=\"img-table\" height=\"150px\" width=\"180px\" style=\"border-radius: 20px;\"></td>\r\n                  <td style=\"text-align: center; vertical-align:middle;\">{{item.nombre}}</td>\r\n                  <td style=\"text-align: center; vertical-align:middle;\">{{item.subcategoria.categoria.catprincipales.nombre}}-{{item.subcategoria.categoria.nombre}}-{{item.subcategoria.nombre}}</td>\r\n                  <td style=\"text-align: center; vertical-align:middle;\">{{item.descripcion}}</td>\r\n                  <td style=\"text-align: center; vertical-align: middle;\"  style=\"display: flex;\">\r\n                    <div *ngFor=\"let fotos of item.fotos; let i = index\">\r\n                      <a href=\"{{fotos.url}}\" target=\"_blank\">\r\n                        <img src=\"{{fotos.url}}\" alt=\"\" style=\"width: 60px; height: 60px\">\r\n                      </a>\r\n                      <button type=\"button\" class=\"btn btn-secundary  btn-table\" (click)=\"borrarfoto(item.id,item.fotos,i)\">x</button>\r\n                    </div>\r\n                  </td>\r\n                  <td style=\"text-align: center; vertical-align:middle;\">\r\n                    <nb-checkbox [value]=\"item.estado === 'ON'\"  (change)=\"cambiarEstado2(item)\"></nb-checkbox>\r\n                    <!--button type=\"button\" class=\"btn btn-secundary  btn-table\" title=\"Editar\" (click)=\"aEditara(item)\" *ngIf=\"item.estado!='ON'\">Hablitar{{item.estado}}\r\n                   </button>\r\n                   <button type=\"button\" class=\"btn btn-danger btn-table\" title=\"Editar\" (click)=\"aEditara(item)\" *ngIf=\"item.estado=='ON'\">Deshabilitar\r\n                   </button-->\r\n                  </td>\r\n\r\n               </tr>\r\n            </tbody>\r\n          </table>\r\n\r\n          <br><br>\r\n          <nb-card-header>Calificaciones</nb-card-header><br>\r\n          <table class=\"table\">\r\n            <thead>\r\n               <th style=\"text-align: center;\">ID</th>\r\n               <th style=\"text-align: center;\">Servicio</th>\r\n               <th style=\"text-align: center;\">Promedio de Califi.</th>\r\n               <th style=\"text-align: center;\">Comentario</th>\r\n               <th style=\"text-align: center;\">Imagen</th>\r\n            </thead>\r\n            <tbody>\r\n               <tr *ngFor=\"let item of this.objAEditar.calificaciones\" >\r\n                  <td style=\"text-align: center; vertical-align:middle;\">{{item.id}}</td>\r\n                  <td style=\"text-align: center; vertical-align:middle;\">{{item.producto.nombre}}</td>\r\n                  <td style=\"text-align: center; vertical-align:middle;\">\r\n                    <div>\r\n                      <ngb-rating [(rate)]=\"item.puntaje\" max=5>\r\n                        <ng-template let-fill=\"fill\">\r\n                          <span class=\"star fill\" [class.filled]=\"fill === 100\">\r\n                            <i class=\"ion-android-star\" *ngIf=\"fill === 100\"></i>\r\n                            <i class=\"ion-android-star-outline\" *ngIf=\"fill !== 100\"></i>\r\n                          </span>\r\n                        </ng-template>\r\n                      </ngb-rating>\r\n                      <span class=\"current-rate\">{{item.puntaje}}</span>\r\n                    </div>\r\n                  </td>\r\n                  <td style=\"text-align: center; vertical-align:middle;\">{{item.comentario}}</td>\r\n                  <td style=\"text-align: center; vertical-align:middle;\"><img src = \"{{item.imagen}}\" alt=\"\" class=\"img-table\" height=\"150px\" width=\"180px\"></td>\r\n\r\n               </tr>\r\n            </tbody>\r\n          </table>\r\n\r\n          \r\n          <br>\r\n          <button class=\"btn btn-secondary\" (click)=\"atras()\">Cancelar</button>\r\n          <button type=\"submit\" class=\"btn btn-primary\" (click)=\"editar()\" >Actualizar datos</button>\r\n        </form>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #modal1 let-c=\"close\" let-d=\"dismiss\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">Eliminar Socio: </h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <p>¿Realmente desea eliminar el socio {{eliminar_nombre}}?</p>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Cancelar</button>\r\n    <button type=\"button\" class=\"btn btn-danger\" (click)=\"c('Close click'); eliminar()\">Eliminar</button>\r\n  </div>\r\n</ng-template>\r\n\r\n<toaster-container [toasterconfig]=\"config\"></toaster-container>\r\n\r\n<div class=\"my-container\">\r\n    <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '4px' }\"></ngx-loading>\r\n</div>\r\n\r\n<nb-card *ngIf=\"agenda\">\r\n  <nb-card-header>\r\n    <div>Horario de trabajo</div>\r\n  </nb-card-header>\r\n\r\n  <nb-card-body>\r\n     \r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div>Días</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div *ngFor=\"let item of agenda.dias\" class=\"col-md-3\">\r\n        <nb-checkbox *ngIf=\"item.mostrar == true\" [value]=\"item.value\" (change)=\"checkValueDia(item)\">{{item.dia}}</nb-checkbox>\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div>Horas</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div *ngFor=\"let item of agenda.horas\" class=\"col-md-3\">\r\n        <nb-checkbox *ngIf=\"item.mostrar == true\" [value]=\"item.value\" (change)=\"checkValueHora(item)\">{{item.hora}}</nb-checkbox>\r\n      </div>\r\n    </div>\r\n\r\n  </nb-card-body>\r\n  <nb-card-footer>\r\n    \r\n  </nb-card-footer>\r\n</nb-card>"

/***/ }),

/***/ "../../../../../src/app/pages/socios/socios-ver/socios-ver.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) .estado {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 50%; }\n\n:host-context(.nb-theme-default) .btn-table {\n  display: inline-block; }\n\n:host-context(.nb-theme-default) .img-table {\n  border-radius: 4px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n:host-context(.nb-theme-default) .theme-switch {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  cursor: pointer;\n  margin: 0; }\n  :host-context(.nb-theme-default) .theme-switch > span {\n    font-size: 1rem;\n    font-weight: 600;\n    transition: opacity 0.3s ease; }\n    :host-context(.nb-theme-default) .theme-switch > span.light {\n      color: #4b4b4b;\n      padding-right: 5px; }\n    :host-context(.nb-theme-default) .theme-switch > span.cosmic {\n      color: #a4abb3;\n      padding-left: 5px; }\n    :host-context(.nb-theme-default) .theme-switch > span:active {\n      opacity: 0.78; }\n\n:host-context(.nb-theme-default) .switch {\n  position: relative;\n  display: inline-block;\n  width: 4rem;\n  height: 1.75rem;\n  margin: 0; }\n  :host-context(.nb-theme-default) .switch input {\n    display: none; }\n    :host-context(.nb-theme-default) .switch input:checked + .slider::before {\n      -webkit-transform: translateX(2.25rem);\n              transform: translateX(2.25rem); }\n  :host-context(.nb-theme-default) .switch .slider {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    border-radius: 1.75rem;\n    background-color: #ebeff5; }\n  :host-context(.nb-theme-default) .switch .slider::before {\n    position: absolute;\n    content: '';\n    height: 1.75rem;\n    width: 1.75rem;\n    border-radius: 50%;\n    background-color: #0b417a;\n    transition: 0.2s;\n    box-shadow: 0 0 0.25rem 0 rgba(164, 171, 179, 0.4); }\n\n@media (max-width: 575px) {\n  :host-context(.nb-theme-default) .light, :host-context(.nb-theme-default) .cosmic {\n    display: none; } }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-default) {\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end; } }\n\n:host-context(.nb-theme-cosmic) .estado {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 50%; }\n\n:host-context(.nb-theme-cosmic) .btn-table {\n  display: inline-block; }\n\n:host-context(.nb-theme-cosmic) .img-table {\n  border-radius: 4px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n:host-context(.nb-theme-cosmic) .theme-switch {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  cursor: pointer;\n  margin: 0; }\n  :host-context(.nb-theme-cosmic) .theme-switch > span {\n    font-size: 1rem;\n    font-weight: 600;\n    transition: opacity 0.3s ease; }\n    :host-context(.nb-theme-cosmic) .theme-switch > span.light {\n      color: #d1d1ff;\n      padding-right: 5px; }\n    :host-context(.nb-theme-cosmic) .theme-switch > span.cosmic {\n      color: #76f8f6;\n      padding-left: 5px; }\n    :host-context(.nb-theme-cosmic) .theme-switch > span.light {\n      color: #76f8f6; }\n    :host-context(.nb-theme-cosmic) .theme-switch > span.cosmic {\n      color: #ffffff; }\n    :host-context(.nb-theme-cosmic) .theme-switch > span:active {\n      opacity: 0.78; }\n\n:host-context(.nb-theme-cosmic) .switch {\n  position: relative;\n  display: inline-block;\n  width: 4rem;\n  height: 1.75rem;\n  margin: 0; }\n  :host-context(.nb-theme-cosmic) .switch input {\n    display: none; }\n    :host-context(.nb-theme-cosmic) .switch input:checked + .slider::before {\n      -webkit-transform: translateX(2.25rem);\n              transform: translateX(2.25rem); }\n  :host-context(.nb-theme-cosmic) .switch .slider {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    border-radius: 1.75rem;\n    background-color: #2f296b; }\n  :host-context(.nb-theme-cosmic) .switch .slider::before {\n    position: absolute;\n    content: '';\n    height: 1.75rem;\n    width: 1.75rem;\n    border-radius: 50%;\n    background-color: #0b417a;\n    transition: 0.2s;\n    box-shadow: 0 0 0.25rem 0 rgba(118, 248, 246, 0.4);\n    background-image: linear-gradient(to right, #0b1c7a, #0b417a); }\n\n@media (max-width: 575px) {\n  :host-context(.nb-theme-cosmic) .light, :host-context(.nb-theme-cosmic) .cosmic {\n    display: none; } }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-cosmic) {\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/socios/socios-ver/socios-ver.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SociosVerComponent; });
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








var SociosVerComponent = /** @class */ (function () {
    function SociosVerComponent(modalService, toasterService, http, router, route, rutaService, fb) {
        this.modalService = modalService;
        this.toasterService = toasterService;
        this.http = http;
        this.router = router;
        this.route = route;
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
        this.admin = false;
        this.mouvers_user_tipo = localStorage.getItem('mouvers_user_tipo');
        this.edit_contrato = false;
        this.agenda = null;
        this.establecimiento_id = 0;
        this.refer = true;
        this.clear = false; //puedo borrar?
        this.fileIMG = null;
        this.imgUpload = null;
        this.loadinImg = false;
        //----------------------------------------------------------------------------------------------
        //----------------------------------------------------------------------------------------------
        //Logo
        //----------------------------------------------------------------------------------------------
        //@ViewChild('fileInput') fileInput: ElementRef;
        this.clearLogo = false; //puedo borrar?
        this.fileIMGLogo = null;
        this.imgUploadLogo = null;
        this.loadinImgLogo = false;
        //----------------------------------------------------------------------------------------------
        //----------------------------------------------------------------------------------------------
        //----------------------------------------------------------------------------------------------
        //----------------------------------------------------------------------------------------------
        // @ViewChild('fileInput') fileInput: ElementRef;
        this.clearPasaporte = false; //puedo borrar?
        this.fileIMGPasaporte = null;
        this.imgUploadPasaporte = null;
        this.loadinImgPasaporte = false;
        //----------------------------------------------------------------------------------------------
        //----------------------------------------------------------------------------------------------
        //----------------------------------------------------------------------------------------------
        // operaciones Operaciones
        //@ViewChild('fileInput') fileInput: ElementRef;
        this.clearOperaciones = false; //puedo borrar?
        this.fileIMGOperaciones = null;
        this.imgUploadOperaciones = null;
        this.loadinImgOperaciones = false;
        //----------------------------------------------------------------------------------------------
        //----------------------------------------------------------------------------------------------
        // idoneidad_file Idoneidad_file
        //@ViewChild('fileInput') fileInput: ElementRef;
        this.clearIdoneidad_file = false; //puedo borrar?
        this.fileIMGIdoneidad_file = null;
        this.imgUploadIdoneidad_file = null;
        this.loadinImgIdoneidad_file = false;
        this.pages = 4;
        this.pageSize = 5;
        this.pageNumber = 0;
        this.currentIndex = 1;
        this.pageStart = 1;
        this.inputName = '';
        this.myFormEditar = this.fb.group({
            id: [''],
            usuario_id: [''],
            nombre: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required]],
            email: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required]],
            telefono: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required]],
            ciudad: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required]],
            estado: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required]],
            tipo: [''],
            tipo2: [''],
            ruc: [''],
            latitud: [''],
            longitud: [''],
            email_empresa: [''],
            contacto_nombre: [''],
            contacto_cedula: [''],
            contacto_cargo: [''],
            logo: [''],
            cedula: [''],
            nacionalidad: [''],
            direccion: [''],
            direccion_exacta: [''],
            fecha_nacimiento: [''],
            formacion: [''],
            experiencia: [''],
            experiencia2: [''],
            anos_experiencia: [''],
            idoneidad: [''],
            disponibilidad: [''],
            disponibilidad2: [''],
            idiomas: [''],
            idiomas2: [''],
            urgencias: [''],
            factura: [''],
            referencias: [''],
            referencias2: [''],
            referencias12: [''],
            referencias22: [''],
            operaciones: [''],
            foto: [''],
            pasaporte: [''],
            idoneidad_file: [''],
            estado2: [''],
            sexo: [''],
            contrato: [''],
            lunes_i: [''],
            lunes_f: [''],
            martes_i: [''],
            martes_f: [''],
            miercoles_i: [''],
            miercoles_f: [''],
            jueves_i: [''],
            jueves_f: [''],
            viernes_i: [''],
            viernes_f: [''],
            sabado_i: [''],
            sabado_f: [''],
            domingo_i: [''],
            domingo_f: [''],
            lat: [''],
            lng: [''],
            contrato_nombre: [''],
            contrato_ci: [''],
            contrato_fecha: [''],
            contrato_costo: [''],
            contrato_plan: [''],
            contrato_plan2: [''],
            fotos: [''],
        });
    }
    SociosVerComponent.prototype.ngOnInit = function () {
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
        this.http.get(this.rutaService.getRutaApi() + 'repartidores?token=' + localStorage.getItem('mouvers_token'))
            .toPromise()
            .then(function (data) {
            //this.getEstados();
            console.log(data);
            _this.data = data;
            _this.productList = _this.data.repartidores;
            for (var i = 0; i < _this.productList.length; ++i) {
                //console.log(this.productList[i].usuario);
                if (_this.productList[i].usuario.tipo_usuario == 3) {
                    _this.productList[i].tipo2 = 'Profesional';
                }
                else if (_this.productList[i].usuario.tipo_usuario == 4) {
                    _this.productList[i].tipo2 = 'Clinica';
                }
            }
            _this.productList = _this.productList.sort(function (a, b) { return b.enfinalizados - a.enfinalizados; });
            _this.filteredItems = _this.productList;
            //console.log(this.productList);
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
        this.getAgenda();
    };
    //Redirigir al chat
    SociosVerComponent.prototype.chat = function (repartidor) {
        console.log(repartidor);
        if (repartidor.usuario.chat_repartidor) {
            localStorage.setItem('mouvers_chat_id', repartidor.usuario.chat_repartidor.id);
        }
        else {
            localStorage.setItem('mouvers_chat_id', '');
        }
        localStorage.setItem('mouvers_usuario_id', repartidor.usuario.id);
        localStorage.setItem('mouvers_usuario_tipo', repartidor.usuario.tipo_usuario);
        localStorage.setItem('mouvers_usuario_nombre', repartidor.usuario.nombre);
        localStorage.setItem('mouvers_usuario_imagen', repartidor.usuario.imagen);
        localStorage.setItem('mouvers_usuario_token_notifi', repartidor.usuario.token_notificacion);
        this.router.navigateByUrl('/pages/chat-box');
    };
    SociosVerComponent.prototype.getEstados = function () {
        var _this = this;
        this.http.get(this.rutaService.getRutaApi() + 'entidades/municipios?token=' + localStorage.getItem('mouvers_token'))
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            _this.estados = _this.data.entidades;
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
    SociosVerComponent.prototype.setEstado1 = function (estado) {
        console.log(estado);
        for (var i = 0; i < this.estados.length; ++i) {
            if (estado == this.estados[i].nom_ent) {
                this.ciudades = this.estados[i].municipios;
            }
        }
    };
    SociosVerComponent.prototype.setEstado2 = function (estado) {
        console.log(estado);
        for (var i = 0; i < this.estados.length; ++i) {
            if (estado == this.estados[i].nom_ent) {
                this.ciudades = this.estados[i].municipios;
                this.myFormEditar.patchValue({ ciudad: this.ciudades[0].nom_mun });
            }
        }
    };
    SociosVerComponent.prototype.showToast = function (type, title, body) {
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
    SociosVerComponent.prototype.open = function (modal) {
        this.modalService.open(modal);
    };
    //Abrir modal larga
    SociosVerComponent.prototype.open2 = function (modal) {
        this.modalService.open(modal, { size: 'lg', backdrop: 'static', container: 'nb-layout', keyboard: false });
    };
    SociosVerComponent.prototype.atras = function () {
        this.editando = false;
        this.objAEditar = null;
        //console.log(this.objAEditar);
        //this.uploadFile = null;
        this.myFormEditar.reset();
    };
    SociosVerComponent.prototype.aEditar = function (obj) {
        console.log(obj);
        this.establecimiento_id = obj.establecimiento.id;
        this.editando = true;
        this.objAEditar = Object.assign({}, obj);
        for (var i = 0; i < this.objAEditar.establecimiento.productos.length; i++) {
            console.log(this.objAEditar.establecimiento.productos[i].fotos);
            if (this.objAEditar.establecimiento.productos[i].fotos != null) {
                if (this.objAEditar.establecimiento.productos[i].fotos.length != 0) {
                    this.objAEditar.establecimiento.productos[i].fotos = JSON.parse(this.objAEditar.establecimiento.productos[i].fotos);
                }
            }
        }
        console.log(this.objAEditar);
        var tam_contrato = obj.usuario.contrato.length;
        this.contrato = obj.usuario.contrato[tam_contrato - 1].url;
        console.log(this.contrato);
        this.user = obj.usuario;
        this.myFormEditar.patchValue({ id: this.objAEditar.id });
        this.myFormEditar.patchValue({ nombre: this.objAEditar.usuario.nombre });
        this.myFormEditar.patchValue({ email: this.objAEditar.usuario.email });
        this.myFormEditar.patchValue({ telefono: this.objAEditar.usuario.telefono });
        this.myFormEditar.patchValue({ estado: this.objAEditar.usuario.estado });
        this.myFormEditar.patchValue({ ciudad: this.objAEditar.usuario.ciudad });
        var tipo = "";
        if (this.objAEditar.usuario.registro.tipo == 1) {
            tipo = 'Persona';
        }
        else if (this.objAEditar.usuario.registro.tipo == 2) {
            tipo = 'Empresa';
        }
        else {
            tipo = 'Sin tipo de registro';
        }
        if (this.objAEditar.usuario.registro.referencias == null) {
            var refe = { nombre1: "", telefono1: "", direccion1: "", contacto1: "", cargo1: "", nombre2: "", telefono2: "", direccion2: "", contacto2: "", cargo2: "", nombre3: "", telefono3: "", direccion3: "", contacto3: "", cargo3: "" };
            this.myFormEditar.patchValue({ referencias22: refe });
        }
        else {
            this.myFormEditar.patchValue({ referencias22: JSON.parse(this.objAEditar.usuario.registro.referencias) });
        }
        this.myFormEditar.patchValue({ tipo2: tipo });
        this.myFormEditar.patchValue({ tipo: this.objAEditar.usuario.registro.tipo });
        this.myFormEditar.patchValue({ usuario_id: this.objAEditar.usuario.id });
        this.myFormEditar.patchValue({ ruc: this.objAEditar.usuario.registro.ruc });
        this.myFormEditar.patchValue({ latitud: this.objAEditar.usuario.registro.latitud });
        this.myFormEditar.patchValue({ longitud: this.objAEditar.usuario.registro.longitud });
        this.myFormEditar.patchValue({ email_empresa: this.objAEditar.usuario.registro.email_empresa });
        this.myFormEditar.patchValue({ contacto_nombre: this.objAEditar.usuario.registro.contacto_nombre });
        this.myFormEditar.patchValue({ contacto_cedula: this.objAEditar.usuario.registro.contacto_cedula });
        this.myFormEditar.patchValue({ contacto_cargo: this.objAEditar.usuario.registro.contacto_cargo });
        this.myFormEditar.patchValue({ logo: this.objAEditar.usuario.registro.logo });
        this.myFormEditar.patchValue({ cedula: this.objAEditar.usuario.registro.cedula });
        this.myFormEditar.patchValue({ nacionalidad: this.objAEditar.usuario.registro.nacionalidad });
        this.myFormEditar.patchValue({ direccion: this.objAEditar.usuario.registro.direccion });
        this.myFormEditar.patchValue({ direccion_exacta: this.objAEditar.usuario.registro.direccion_exacta });
        this.myFormEditar.patchValue({ lat: this.objAEditar.usuario.registro.latitud });
        this.myFormEditar.patchValue({ lng: this.objAEditar.usuario.registro.longitud });
        this.myFormEditar.patchValue({ fecha_nacimiento: this.objAEditar.usuario.registro.fecha_nacimiento });
        this.myFormEditar.patchValue({ formacion: this.objAEditar.usuario.registro.formacion });
        this.myFormEditar.patchValue({ experiencia: this.objAEditar.usuario.registro.experiencia });
        this.myFormEditar.patchValue({ experiencia2: JSON.parse(this.objAEditar.usuario.registro.experiencia) });
        this.myFormEditar.patchValue({ anos_experiencia: this.objAEditar.usuario.registro.anos_experiencia });
        this.myFormEditar.patchValue({ idoneidad: this.objAEditar.usuario.registro.idoneidad });
        this.myFormEditar.patchValue({ disponibilidad: this.objAEditar.usuario.registro.disponibilidad });
        this.myFormEditar.patchValue({ disponibilidad2: JSON.parse(this.objAEditar.usuario.registro.disponibilidad) });
        this.myFormEditar.patchValue({ idiomas: this.objAEditar.usuario.registro.idiomas });
        this.myFormEditar.patchValue({ idiomas2: JSON.parse(this.objAEditar.usuario.registro.idiomas) });
        this.myFormEditar.patchValue({ urgencias: this.objAEditar.usuario.registro.urgencias });
        this.myFormEditar.patchValue({ factura: this.objAEditar.usuario.registro.factura });
        if (this.objAEditar.usuario.registro.referencias == null) {
            this.refer = false;
        }
        this.myFormEditar.patchValue({ referencias: this.objAEditar.usuario.registro.referencias });
        this.myFormEditar.patchValue({ referencias2: JSON.parse(this.objAEditar.usuario.registro.referencias) });
        this.myFormEditar.patchValue({ referencias12: this.objAEditar.usuario.registro.referencias2 });
        this.myFormEditar.patchValue({ referencias22: JSON.parse(this.objAEditar.usuario.registro.referencias2) });
        //this.myFormEditar.patchValue({referencias22 : JSON.parse(this.objAEditar.usuario.registro.referencias}));
        this.myFormEditar.patchValue({ foto: this.objAEditar.usuario.imagen });
        this.myFormEditar.patchValue({ pasaporte: this.objAEditar.usuario.registro.pasaporte });
        this.myFormEditar.patchValue({ idoneidad_file: this.objAEditar.usuario.registro.idoneidad_file });
        this.myFormEditar.patchValue({ operaciones: this.objAEditar.usuario.registro.operaciones });
        this.myFormEditar.patchValue({ estado2: this.objAEditar.usuario.registro.estado2 });
        this.myFormEditar.patchValue({ usuario_id: this.objAEditar.usuario.registro.usuario_id });
        this.myFormEditar.patchValue({ sexo: this.objAEditar.usuario.registro.sexo });
        this.myFormEditar.patchValue({ contrato: this.objAEditar.usuario.registro.contrato });
        var disp = JSON.parse(this.objAEditar.usuario.registro.disponibilidad);
        this.myFormEditar.patchValue({ lunes_i: disp.lunes_i });
        this.myFormEditar.patchValue({ lunes_f: disp.lunes_f });
        this.myFormEditar.patchValue({ martes_i: disp.martes_i });
        this.myFormEditar.patchValue({ martes_f: disp.martes_f });
        this.myFormEditar.patchValue({ miercoles_i: disp.miercoles_i });
        this.myFormEditar.patchValue({ miercoles_f: disp.miercoles_f });
        this.myFormEditar.patchValue({ jueves_i: disp.jueves_i });
        this.myFormEditar.patchValue({ jueves_f: disp.jueves_f });
        this.myFormEditar.patchValue({ viernes_i: disp.viernes_i });
        this.myFormEditar.patchValue({ viernes_f: disp.viernes_f });
        this.myFormEditar.patchValue({ sabado_i: disp.sabado_i });
        this.myFormEditar.patchValue({ sabado_f: disp.sabado_f });
        this.myFormEditar.patchValue({ domingo_i: disp.domingo_i });
        this.myFormEditar.patchValue({ domingo_f: disp.domingo_f });
        this.myFormEditar.patchValue({ contrato_nombre: this.objAEditar.usuario.nombre });
        this.myFormEditar.patchValue({ contrato_ci: this.objAEditar.usuario.registro.ruc });
        // this.myFormEditar.patchValue({contrato_fecha : 1});
        var plan = JSON.parse(this.objAEditar.plan);
        this.myFormEditar.patchValue({ contrato_costo: plan.costo });
        this.myFormEditar.patchValue({ contrato_plan: plan.tipo_plan });
        this.myFormEditar.patchValue({ contrato_plan2: plan.tipo_plan });
        //this.setEstado1(this.objAEditar.usuario.estado);
        console.log(this.myFormEditar.value);
    };
    SociosVerComponent.prototype.editar_contrato = function () {
        var _this = this;
        var pl = {
            tipo_plan: this.myFormEditar.value.contrato_plan,
            costo: this.myFormEditar.value.contrato_costo
        };
        var datos = {
            token: localStorage.getItem('mouvers_token'),
            nombre: this.myFormEditar.value.contrato_nombre,
            ci: this.myFormEditar.value.contrato_ci,
            telefono: this.myFormEditar.value.telefono,
            direccion: this.myFormEditar.value.direccion,
            plan: JSON.stringify(pl),
            usuario_id: this.myFormEditar.value.usuario_id
        };
        this.loading = true;
        console.log(datos);
        this.http.post(this.rutaService.getRutaApi() + 'con_contratos', datos)
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.contrato = data;
            _this.contrato = _this.contrato.Contratos.url;
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
    SociosVerComponent.prototype.borrarfoto = function (id, fotos, index) {
        var _this = this;
        console.log(id);
        console.log(fotos);
        console.log(index);
        fotos.splice(index, 1);
        console.log(fotos);
        this.loading = true;
        var send = {
            fotos: JSON.stringify(fotos)
        };
        this.http.put(this.rutaService.getRutaApi() + 'productos/' + id, send)
            .toPromise()
            .then(function (data) {
            console.log(data);
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
    SociosVerComponent.prototype.editar = function () {
        /*var usr= {
          token: localStorage.getItem('mouvers_token'),
          imagen: this.myFormEditar.value.foto
        }
  
        this.http.put(this.rutaService.getRutaApi()+'usuarios/'+this.objAEditar.usuario.id, usr)
         .toPromise()
         .then(
           data => { // Success
              console.log(data);
              this.data = data;
  
              for (var i = 0; i < this.productList.length; ++i) {
                if (this.productList[i].id == this.objAEditar.usuario.id) {
                   this.productList[i].usuario.imagen = this.myFormEditar.value.foto;
                }
              }
  
              this.filteredItems = this.productList;
              this.init();
              
              //console.log(this.productList);
              //alert(this.data.message);
  
              this.loading = false;
              this.editando = false;
              this.showToast('success', 'Success!', this.data.message);
           },
           msg => { // Error
             console.log(msg);
             console.log(msg.error.error);
  
             this.loading = false;
  
             //token invalido/ausente o token expiro
             if(msg.status == 400 || msg.status == 401){
                  //alert(msg.error.error);
                  //ir a login
                  this.editando = true;
                  this.showToast('warning', 'Warning!', msg.error.error);
              }
              else {
                  //alert(msg.error.error);
                  this.editando = true;
                  this.showToast('error', 'Erro!', msg.error.error);
              }
           }
        );*/
        var _this = this;
        this.loading = true;
        var datos = {
            token: localStorage.getItem('mouvers_token'),
            nombre: this.myFormEditar.value.nombre,
            email: this.myFormEditar.value.email,
            telefono: this.myFormEditar.value.telefono,
            ciudad: this.myFormEditar.value.ciudad,
            estado: this.myFormEditar.value.estado,
        };
        this.http.put(this.rutaService.getRutaApi() + 'repartidores/' + this.myFormEditar.value.id, datos)
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            for (var i = 0; i < _this.productList.length; ++i) {
                if (_this.productList[i].id == _this.myFormEditar.value.id) {
                    _this.productList[i].usuario.imagen = _this.myFormEditar.value.foto;
                    _this.productList[i].usuario.nombre = _this.myFormEditar.value.nombre;
                    _this.productList[i].usuario.email = _this.myFormEditar.value.email;
                    _this.productList[i].usuario.telefono = _this.myFormEditar.value.telefono;
                    _this.productList[i].usuario.ciudad = _this.myFormEditar.value.ciudad;
                    _this.productList[i].usuario.estado = _this.myFormEditar.value.estado;
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
        var disponibilidad = {
            lunes_i: this.myFormEditar.value.lunes_i,
            lunes_f: this.myFormEditar.value.lunes_f,
            martes_i: this.myFormEditar.value.martes_i,
            martes_f: this.myFormEditar.value.martes_f,
            miercoles_i: this.myFormEditar.value.miercoles_i,
            miercoles_f: this.myFormEditar.value.miercoles_f,
            jueves_i: this.myFormEditar.value.jueves_i,
            jueves_f: this.myFormEditar.value.jueves_f,
            viernes_i: this.myFormEditar.value.viernes_i,
            viernes_f: this.myFormEditar.value.viernes_f,
            sabado_i: this.myFormEditar.value.sabado_i,
            sabado_f: this.myFormEditar.value.sabado_f,
            domingo_i: this.myFormEditar.value.domingo_i,
            domingo_f: this.myFormEditar.value.domingo_f,
            lat: this.myFormEditar.value.lat,
            lng: this.myFormEditar.value.lng,
        };
        var datos2 = {
            imagen: this.myFormEditar.value.foto,
            direccion: this.myFormEditar.value.direccion,
            direccion_exacta: this.myFormEditar.value.direccion_exacta,
            lunes_i: this.myFormEditar.value.lunes_i,
            lunes_f: this.myFormEditar.value.lunes_f,
            martes_i: this.myFormEditar.value.martes_i,
            martes_f: this.myFormEditar.value.martes_f,
            miercoles_i: this.myFormEditar.value.miercoles_i,
            miercoles_f: this.myFormEditar.value.miercoles_f,
            jueves_i: this.myFormEditar.value.jueves_i,
            jueves_f: this.myFormEditar.value.jueves_f,
            viernes_i: this.myFormEditar.value.viernes_i,
            viernes_f: this.myFormEditar.value.viernes_f,
            sabado_i: this.myFormEditar.value.sabado_i,
            sabado_f: this.myFormEditar.value.sabado_f,
            domingo_i: this.myFormEditar.value.domingo_i,
            domingo_f: this.myFormEditar.value.domingo_f,
            lat: this.myFormEditar.value.lat,
            lng: this.myFormEditar.value.lng,
            disponibilidad: JSON.stringify(disponibilidad),
            logo: this.myFormEditar.value.logo,
            pasaporte: this.myFormEditar.value.pasaporte,
            operaciones: this.myFormEditar.value.operaciones,
            idoneidad_file: this.myFormEditar.value.idoneidad_file,
        };
        console.log(datos2);
        this.http.put(this.rutaService.getRutaApi() + 'establecimientos/' + this.establecimiento_id, datos2)
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            for (var i = 0; i < _this.productList.length; ++i) {
                if (_this.productList[i].id == _this.objAEditar.usuario.id) {
                    _this.productList[i].usuario.imagen = _this.myFormEditar.value.foto;
                    _this.productList[i].usuario.registro.logo = _this.myFormEditar.value.logo;
                }
            }
            _this.objAEditar.usuario.registro.disponibilidad = JSON.stringify(disponibilidad);
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
    };
    SociosVerComponent.prototype.aEliminar = function (obj) {
        this.objAEliminar = obj;
        //console.log(this.objAEliminar);
        this.eliminar_id = this.objAEliminar.id;
        this.eliminar_nombre = this.objAEliminar.usuario.nombre;
    };
    SociosVerComponent.prototype.eliminar = function () {
        var _this = this;
        console.log(this.objAEliminar);
        this.loading = true;
        var datos = {
            token: localStorage.getItem('mouvers_token')
        };
        this.http.delete(this.rutaService.getRutaApi() + 'repartidores/' + this.eliminar_id + '?token=' + localStorage.getItem('mouvers_token'))
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
    SociosVerComponent.prototype.cambiarEstado = function (obj) {
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
            rep_estado: v_estado
        };
        this.http.put(this.rutaService.getRutaApi() + 'repartidores/' + obj.id, datos)
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
    //Para el producto
    SociosVerComponent.prototype.cambiarEstado2 = function (obj) {
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
        this.http.put(this.rutaService.getRutaApi() + 'productos/' + obj.id, datos)
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
    SociosVerComponent.prototype.getAgenda = function () {
        var _this = this;
        this.http.get(this.rutaService.getRutaApi() + 'agenda/usuario/' + /*this.objAEditar.usuario.id*/ 181 + '?token=' + localStorage.getItem('mouvers_token'))
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            _this.agenda = _this.data.Agenda[0];
            _this.agenda.dias = JSON.parse(_this.agenda.dias);
            _this.agenda.horas = JSON.parse(_this.agenda.horas);
            for (var i = 0; i < _this.agenda.dias.length; ++i) {
                _this.agenda.dias[i].mostrar = true;
                if (_this.agenda.dias[i].dia == 'Lunes') {
                    _this.agenda.dias[i].day = 1;
                }
                else if (_this.agenda.dias[i].dia == 'Martes') {
                    _this.agenda.dias[i].day = 2;
                }
                else if (_this.agenda.dias[i].dia == 'Miércoles') {
                    _this.agenda.dias[i].day = 3;
                }
                else if (_this.agenda.dias[i].dia == 'Jueves') {
                    _this.agenda.dias[i].day = 4;
                }
                else if (_this.agenda.dias[i].dia == 'Viernes') {
                    _this.agenda.dias[i].day = 5;
                }
                else if (_this.agenda.dias[i].dia == 'Sábado') {
                    _this.agenda.dias[i].day = 6;
                }
                else if (_this.agenda.dias[i].dia == 'Domingo') {
                    _this.agenda.dias[i].day = 7;
                }
            }
            _this.agenda.dias.sort(function (a, b) {
                return a.day - b.day;
            });
            for (var i = 0; i < _this.agenda.horas.length; ++i) {
                _this.agenda.horas[i].mostrar = true;
            }
            console.log(_this.agenda);
        }, function (msg) {
            console.log(msg);
            console.log(msg.error.error);
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
    SociosVerComponent.prototype.checkValueDia = function (obj) {
        obj.mostrar = false;
        if (obj.value == 0) {
            obj.value = 0;
        }
        else if (obj.value == 1) {
            obj.value = 1;
        }
        setTimeout(function () {
            obj.mostrar = true;
        }, 3);
    };
    SociosVerComponent.prototype.checkValueHora = function (obj) {
        obj.mostrar = false;
        if (obj.value == 0) {
            obj.value = 0;
        }
        else if (obj.value == 1) {
            obj.value = 1;
        }
        setTimeout(function () {
            obj.mostrar = true;
        }, 3);
    };
    SociosVerComponent.prototype.prepareSave = function () {
        var input = new FormData();
        input.append('imagen', this.fileIMG);
        input.append('carpeta', 'categorias');
        input.append('url_imagen', this.rutaService.getRutaImages());
        return input;
    };
    SociosVerComponent.prototype.onFileChange = function (event) {
        if (event.target.files.length > 0) {
            this.fileIMG = event.target.files[0];
            this.subirImagen();
        }
    };
    SociosVerComponent.prototype.clearFile = function () {
        this.imgUpload = null;
        this.fileInput.nativeElement.value = '';
        this.clear = false;
        this.myFormEditar.patchValue({ foto: null });
    };
    SociosVerComponent.prototype.subirImagen = function () {
        var _this = this;
        this.loading = true;
        var formModel = this.prepareSave();
        this.http.post(this.rutaService.getRutaApi() + 'imagenes?token=' + localStorage.getItem('mouvers_token'), formModel)
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            _this.imgUpload = _this.data.imagen;
            _this.myFormEditar.patchValue({ foto: _this.imgUpload });
            //Solo admitimos imágenes.
            if (!_this.fileIMG.type.match('image.*')) {
                return;
            }
            var reader = new FileReader();
            reader.onload = (function (theFile) {
                return function (e) {
                    // Creamos la imagen.
                    document.getElementById("foto").innerHTML = ['<img class="thumb" src="', e.target.result, '" height="160px"/>'].join('');
                };
            })(_this.fileIMG);
            reader.readAsDataURL(_this.fileIMG);
            _this.clear = true;
            _this.loading = false;
            _this.showToast('success', 'Success!', _this.data.message);
        }, function (msg) {
            console.log(msg);
            _this.loading = false;
            if (msg.status == 400 || msg.status == 401) {
                _this.showToast('warning', 'Warning!', msg.error.error);
            }
            else {
                _this.showToast('error', 'Erro!', msg.error.error);
            }
        });
    };
    SociosVerComponent.prototype.prepareSaveLogo = function () {
        var inputLogo = new FormData();
        inputLogo.append('imagen', this.fileIMGLogo);
        inputLogo.append('carpeta', 'categorias');
        inputLogo.append('url_imagen', this.rutaService.getRutaImages());
        return inputLogo;
    };
    SociosVerComponent.prototype.onFileChangeLogo = function (event) {
        if (event.target.files.length > 0) {
            this.fileIMGLogo = event.target.files[0];
            this.subirImagenLogo();
        }
    };
    SociosVerComponent.prototype.clearFileLogo = function () {
        this.imgUploadLogo = null;
        this.fileInput.nativeElement.value = '';
        this.clearLogo = false;
        this.myFormEditar.patchValue({ logo: null });
    };
    SociosVerComponent.prototype.subirImagenLogo = function () {
        var _this = this;
        this.loading = true;
        var formModel = this.prepareSaveLogo();
        this.http.post(this.rutaService.getRutaApi() + 'imagenes?token=' + localStorage.getItem('mouvers_token'), formModel)
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            _this.imgUploadLogo = _this.data.imagen;
            _this.myFormEditar.patchValue({ logo: _this.imgUploadLogo });
            _this.objAEditar.usuario.registro.logo = _this.imgUploadLogo;
            //Solo admitimos imágenes.
            if (!_this.fileIMGLogo.type.match('image.*')) {
                return;
            }
            var reader = new FileReader();
            reader.onload = (function (theFile) {
                return function (e) {
                    // Creamos la imagen.
                    document.getElementById("logo").innerHTML = ['<img class="thumb" src="', e.target.result, '" height="160px"/>'].join('');
                };
            })(_this.fileIMGLogo);
            reader.readAsDataURL(_this.fileIMGLogo);
            _this.clearLogo = true;
            _this.loading = false;
            _this.showToast('success', 'Success!', _this.data.message);
        }, function (msg) {
            console.log(msg);
            _this.loading = false;
            if (msg.status == 400 || msg.status == 401) {
                _this.showToast('warning', 'Warning!', msg.error.error);
            }
            else {
                _this.showToast('error', 'Erro!', msg.error.error);
            }
        });
    };
    SociosVerComponent.prototype.prepareSavePasaporte = function () {
        var inputPasaporte = new FormData();
        inputPasaporte.append('imagen', this.fileIMGPasaporte);
        inputPasaporte.append('carpeta', 'categorias');
        inputPasaporte.append('url_imagen', this.rutaService.getRutaImages());
        return inputPasaporte;
    };
    SociosVerComponent.prototype.onFileChangePasaporte = function (event) {
        if (event.target.files.length > 0) {
            this.fileIMGPasaporte = event.target.files[0];
            this.subirImagenPasaporte();
        }
    };
    SociosVerComponent.prototype.clearFilePasaporte = function () {
        this.imgUploadPasaporte = null;
        this.fileInput.nativeElement.value = '';
        this.clearPasaporte = false;
        this.myFormEditar.patchValue({ Pasaporte: null });
    };
    SociosVerComponent.prototype.subirImagenPasaporte = function () {
        var _this = this;
        this.loading = true;
        var formModel = this.prepareSavePasaporte();
        this.http.post(this.rutaService.getRutaApi() + 'imagenes?token=' + localStorage.getItem('mouvers_token'), formModel)
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            _this.imgUploadPasaporte = _this.data.imagen;
            _this.myFormEditar.patchValue({ pasaporte: _this.imgUploadPasaporte });
            _this.objAEditar.usuario.registro.pasaporte = _this.imgUploadPasaporte;
            //Solo admitimos imágenes.
            if (!_this.fileIMGPasaporte.type.match('image.*')) {
                return;
            }
            var reader = new FileReader();
            reader.onload = (function (theFile) {
                return function (e) {
                    // Creamos la imagen.
                    document.getElementById("pasaporte").innerHTML = ['<img class="thumb" src="', e.target.result, '" height="160px"/>'].join('');
                };
            })(_this.fileIMGPasaporte);
            reader.readAsDataURL(_this.fileIMGPasaporte);
            _this.clearPasaporte = true;
            _this.loading = false;
            _this.showToast('success', 'Success!', _this.data.message);
        }, function (msg) {
            console.log(msg);
            _this.loading = false;
            if (msg.status == 400 || msg.status == 401) {
                _this.showToast('warning', 'Warning!', msg.error.error);
            }
            else {
                _this.showToast('error', 'Erro!', msg.error.error);
            }
        });
    };
    SociosVerComponent.prototype.prepareSaveOperaciones = function () {
        var inputOperaciones = new FormData();
        inputOperaciones.append('imagen', this.fileIMGOperaciones);
        inputOperaciones.append('carpeta', 'categorias');
        inputOperaciones.append('url_imagen', this.rutaService.getRutaImages());
        return inputOperaciones;
    };
    SociosVerComponent.prototype.onFileChangeOperaciones = function (event) {
        if (event.target.files.length > 0) {
            this.fileIMGOperaciones = event.target.files[0];
            this.subirImagenOperaciones();
        }
    };
    SociosVerComponent.prototype.clearFileOperaciones = function () {
        this.imgUploadOperaciones = null;
        this.fileInput.nativeElement.value = '';
        this.clearOperaciones = false;
        this.myFormEditar.patchValue({ Operaciones: null });
    };
    SociosVerComponent.prototype.subirImagenOperaciones = function () {
        var _this = this;
        this.loading = true;
        var formModel = this.prepareSaveOperaciones();
        this.http.post(this.rutaService.getRutaApi() + 'imagenes?token=' + localStorage.getItem('mouvers_token'), formModel)
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            _this.imgUploadOperaciones = _this.data.imagen;
            _this.myFormEditar.patchValue({ operaciones: _this.imgUploadOperaciones });
            _this.objAEditar.usuario.registro.operaciones = _this.imgUploadOperaciones;
            //Solo admitimos imágenes.
            if (!_this.fileIMGOperaciones.type.match('image.*')) {
                return;
            }
            var reader = new FileReader();
            reader.onload = (function (theFile) {
                return function (e) {
                    // Creamos la imagen.
                    document.getElementById("Operaciones").innerHTML = ['<img class="thumb" src="', e.target.result, '" height="160px"/>'].join('');
                };
            })(_this.fileIMGOperaciones);
            reader.readAsDataURL(_this.fileIMGOperaciones);
            _this.clearOperaciones = true;
            _this.loading = false;
            _this.showToast('success', 'Success!', _this.data.message);
        }, function (msg) {
            console.log(msg);
            _this.loading = false;
            if (msg.status == 400 || msg.status == 401) {
                _this.showToast('warning', 'Warning!', msg.error.error);
            }
            else {
                _this.showToast('error', 'Erro!', msg.error.error);
            }
        });
    };
    SociosVerComponent.prototype.prepareSaveIdoneidad_file = function () {
        var inputIdoneidad_file = new FormData();
        inputIdoneidad_file.append('imagen', this.fileIMGIdoneidad_file);
        inputIdoneidad_file.append('carpeta', 'categorias');
        inputIdoneidad_file.append('url_imagen', this.rutaService.getRutaImages());
        return inputIdoneidad_file;
    };
    SociosVerComponent.prototype.onFileChangeIdoneidad_file = function (event) {
        if (event.target.files.length > 0) {
            this.fileIMGIdoneidad_file = event.target.files[0];
            this.subirImagenIdoneidad_file();
        }
    };
    SociosVerComponent.prototype.clearFileIdoneidad_file = function () {
        this.imgUploadIdoneidad_file = null;
        this.fileInput.nativeElement.value = '';
        this.clearIdoneidad_file = false;
        this.myFormEditar.patchValue({ idoneidad_file: null });
    };
    SociosVerComponent.prototype.subirImagenIdoneidad_file = function () {
        var _this = this;
        this.loading = true;
        var formModel = this.prepareSaveIdoneidad_file();
        this.http.post(this.rutaService.getRutaApi() + 'imagenes?token=' + localStorage.getItem('mouvers_token'), formModel)
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            _this.imgUploadIdoneidad_file = _this.data.imagen;
            _this.myFormEditar.patchValue({ idoneidad_file: _this.imgUploadIdoneidad_file });
            _this.objAEditar.usuario.registro.idoneidad_file = _this.imgUploadIdoneidad_file;
            //Solo admitimos imágenes.
            if (!_this.fileIMGIdoneidad_file.type.match('image.*')) {
                return;
            }
            var reader = new FileReader();
            reader.onload = (function (theFile) {
                return function (e) {
                    // Creamos la imagen.
                    document.getElementById("idoneidad_file").innerHTML = ['<img class="thumb" src="', e.target.result, '" height="160px"/>'].join('');
                };
            })(_this.fileIMGIdoneidad_file);
            reader.readAsDataURL(_this.fileIMGIdoneidad_file);
            _this.clearIdoneidad_file = true;
            _this.loading = false;
            _this.showToast('success', 'Success!', _this.data.message);
        }, function (msg) {
            console.log(msg);
            _this.loading = false;
            if (msg.status == 400 || msg.status == 401) {
                _this.showToast('warning', 'Warning!', msg.error.error);
            }
            else {
                _this.showToast('error', 'Erro!', msg.error.error);
            }
        });
    };
    SociosVerComponent.prototype.vercontrato = function () {
        if (this.edit_contrato == false) {
            this.edit_contrato = true;
        }
        else if (this.edit_contrato == true) {
            this.edit_contrato = false;
        }
    };
    SociosVerComponent.prototype.init = function () {
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
    SociosVerComponent.prototype.FilterByName = function () {
        this.filteredItems = [];
        if (this.inputName != "") {
            for (var i = 0; i < this.productList.length; ++i) {
                if (this.productList[i].usuario.nombre.toUpperCase().indexOf(this.inputName.toUpperCase()) >= 0) {
                    this.filteredItems.push(this.productList[i]);
                }
                else if (this.productList[i].usuario.email.toUpperCase().indexOf(this.inputName.toUpperCase()) >= 0) {
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
    SociosVerComponent.prototype.fillArray = function () {
        var obj = new Array();
        for (var index = this.pageStart; index < this.pageStart + this.pages; index++) {
            obj.push(index);
        }
        return obj;
    };
    SociosVerComponent.prototype.refreshItems = function () {
        this.items = this.filteredItems.slice((this.currentIndex - 1) * this.pageSize, (this.currentIndex) * this.pageSize);
        this.pagesIndex = this.fillArray();
    };
    SociosVerComponent.prototype.prevPage = function () {
        if (this.currentIndex > 1) {
            this.currentIndex--;
        }
        if (this.currentIndex < this.pageStart) {
            this.pageStart = this.currentIndex;
        }
        this.refreshItems();
    };
    SociosVerComponent.prototype.nextPage = function () {
        if (this.currentIndex < this.pageNumber) {
            this.currentIndex++;
        }
        if (this.currentIndex >= (this.pageStart + this.pages)) {
            this.pageStart = this.currentIndex - this.pages + 1;
        }
        this.refreshItems();
    };
    SociosVerComponent.prototype.setPage = function (index) {
        this.currentIndex = index;
        this.refreshItems();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], SociosVerComponent.prototype, "fileInput", void 0);
    SociosVerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-ver-socios',
            template: __webpack_require__("../../../../../src/app/pages/socios/socios-ver/socios-ver.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/socios/socios-ver/socios-ver.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */],
            __WEBPACK_IMPORTED_MODULE_6_angular2_toaster__["d" /* ToasterService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__services_ruta_base_ruta_base_service__["a" /* RutaBaseService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormBuilder"]])
    ], SociosVerComponent);
    return SociosVerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/socios/socios.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SociosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SociosComponent = /** @class */ (function () {
    function SociosComponent() {
    }
    SociosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-socios-elements',
            template: "\n    <router-outlet></router-outlet>\n  ",
        })
    ], SociosComponent);
    return SociosComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/socios/socios.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SociosModule", function() { return SociosModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__ = __webpack_require__("../../../../ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__theme_theme_module__ = __webpack_require__("../../../../../src/app/@theme/theme.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__socios_routing_module__ = __webpack_require__("../../../../../src/app/pages/socios/socios-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_data_smart_table_service__ = __webpack_require__("../../../../../src/app/@core/data/smart-table.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_loading__ = __webpack_require__("../../../../ngx-loading/ngx-loading/ngx-loading.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//Mis imports


//import { Ng2UploaderModule } from 'ng2-uploader';

var SociosModule = /** @class */ (function () {
    function SociosModule() {
    }
    SociosModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                //Ng2UploaderModule,
                __WEBPACK_IMPORTED_MODULE_7__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyAu3ISPnP2ypZSaIS8s93TR71lnyZoQWNY',
                    libraries: ["places"]
                }),
                __WEBPACK_IMPORTED_MODULE_6_angular2_toaster__["c" /* ToasterModule */],
                __WEBPACK_IMPORTED_MODULE_2__theme_theme_module__["a" /* ThemeModule */],
                __WEBPACK_IMPORTED_MODULE_3__socios_routing_module__["a" /* SociosRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__["b" /* Ng2SmartTableModule */],
                __WEBPACK_IMPORTED_MODULE_5_ngx_loading__["b" /* LoadingModule */].forRoot({
                    animationType: __WEBPACK_IMPORTED_MODULE_5_ngx_loading__["a" /* ANIMATION_TYPES */].chasingDots,
                    backdropBackgroundColour: 'rgba(0,0,0,0.5)',
                    backdropBorderRadius: '4px',
                    primaryColour: '#ffffff',
                    secondaryColour: '#ffffff',
                    tertiaryColour: '#ffffff',
                    fullScreenBackdrop: true
                })
            ],
            declarations: __WEBPACK_IMPORTED_MODULE_3__socios_routing_module__["b" /* routedComponents */].slice(),
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__core_data_smart_table_service__["a" /* SmartTableService */],
            ],
        })
    ], SociosModule);
    return SociosModule;
}());



/***/ })

});
//# sourceMappingURL=socios.module.chunk.js.map