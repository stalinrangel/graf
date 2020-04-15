import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

//Mis imports
import { RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

import { RutaBaseService } from '../../services/ruta-base/ruta-base.service';

import { FormBuilder, FormArray, FormGroup, Validators  } from '@angular/forms';

import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';
import 'style-loader!angular2-toaster/toaster.css';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'notificaciones',
  styleUrls: ['./notificaciones.component.scss'],
  templateUrl: './notificaciones.component.html',
})

export class notificacionesComponent implements OnInit{

	//----Alertas---<
	config: ToasterConfig;

	position = 'toast-top-right';
	animationType = 'fade';
	title = 'HI there!';
	content = `I'm cool toaster!`;
	timeout = 5000;
	toastsLimit = 5;
	type = 'default'; // 'default', 'info', 'success', 'warning', 'error'

	isNewestOnTop = true;
	isHideOnClick = true;
	isDuplicatesPrevented = false;
	isCloseButton = true;
	//----Alertas--->

	private data:any;
	public loading = false;

	public sistConfigurado=false;
	public idVarSistema:any;
	public costoxkm:any;
	public gastos_envio:any;

	constructor( private modalService: NgbModal,
	       private toasterService: ToasterService,
	       private http: HttpClient,
	       private router: Router,
	       private rutaService: RutaBaseService,
	       public fb: FormBuilder)
	{


	}


	ngOnInit() {

		
	}

	private showToast(type: string, title: string, body: string) {
	  this.config = new ToasterConfig({
	    positionClass: this.position,
	    timeout: this.timeout,
	    newestOnTop: this.isNewestOnTop,
	    tapToDismiss: this.isHideOnClick,
	    preventDuplicates: this.isDuplicatesPrevented,
	    animation: this.animationType,
	    limit: this.toastsLimit,
	  });
	  const toast: Toast = {
	    type: type,
	    title: title,
	    body: body,
	    timeout: this.timeout,
	    showCloseButton: this.isCloseButton,
	    bodyOutputType: BodyOutputType.TrustedHtml,
	  };
	  this.toasterService.popAsync(toast);
	}
	public msg='';
	enviarNotificaciones(): void {
      this.loading = true;

      this.http.get(this.rutaService.getRutaApi()+'onesignalNotificaciones.php?contenido='+this.msg)
         .toPromise()
         .then(
           data => { // Success
             console.log(data);
             this.data=data;

            this.showToast('success', 'Success!', 'Mensaje enviado con éxito');
		     
		    this.loading = false;

           },
           msg => { // Error
             console.log(msg);
             console.log(msg.error.error);
             this.loading = false;
             this.showToast('success', 'Success!', 'Mensaje enviado con éxito');
            if(msg.status == 400 || msg.status == 401){ 
	            //alert(msg.error.error);
	           // this.showToast('warning', 'Warning!', 'msg.error.error');
	        }
	        else { 
	            //alert(msg.error.error);
	            //this.showToast('error', 'Erro!', 'msg.error.error');
	        }   
              
           }
         );
    }
    public msgp='';
    enviarNotificacionesP(): void {
      this.loading = true;

      this.http.get(this.rutaService.getRutaApi()+'onesignalNotificacionesp.php?contenido='+this.msgp)
         .toPromise()
         .then(
           data => { // Success
             console.log(data);
             this.data=data;

            this.showToast('success', 'Success!', 'Mensaje enviado con éxito');
		     
		    this.loading = false;

           },
           msg => { // Error
             console.log(msg);
             console.log(msg.error.error);
             this.loading = false;
             this.showToast('success', 'Success!', 'Mensaje enviado con éxito');
            if(msg.status == 400 || msg.status == 401){ 
	            //alert(msg.error.error);
	           // this.showToast('warning', 'Warning!', 'msg.error.error');
	        }
	        else { 
	            //alert(msg.error.error);
	            //this.showToast('error', 'Erro!', 'msg.error.error');
	        }   
              
           }
         );
    }


	


}
