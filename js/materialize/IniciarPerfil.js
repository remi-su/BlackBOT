function IniciarFecha()
{
	$(document).ready(function(){
		$('.datepicker').datepicker();
	});	
}

IniciarFecha();

function MsjWarning()
{/*
	Swal.fire({
	  type: 'warning',
	  title: '¿Desea suspender su perfil?',
	  text: '',
	  background: '#414141',
	  showCancelButton: true,
	  confirmButtonColor:"#383838",
	  confirmButtonText: 'Aceptar',
	  cancelButtonColor: "#cc0000",
	  cancelButtonText: 'Cancelar'

	});*/

	Swal.fire({
	  title: '¿Desea suspender su perfil?',
	  text: "",
	  type: 'warning',
	  background: '#414141',
	  showCancelButton: true,
	  cancelButtonText: "Cancelar",
	  confirmButtonColor: '#cc0000',
	  cancelButtonColor: '#383838',
	  confirmButtonText: 'Suspender',
	}).then((result) => {
	  if (result.value) {
	    Swal.fire({
	    	title: '¡Su perfil ha sido suspendido!',
	    	text: '',
	    	type: 'success',
	    	confirmButtonText:'Aceptar',
	    	confirmButtonColor: '#383838'
	    })
	  }
	})
}

function MsjError()
{
	Swal.fire({
		background: '#414141',
		type: 'info',
		title: 'Confirmar suspensión',
		text: '¿Desea suspender su perfil?',
		
	});
}

function ConfirmarCambios()
{
	Swal.fire({
		background: "#414141",
		title: "Introduzca su contraseña actual.",
		text: '',
		html: 
			"<div class = 'row'>" +
				"<div class='col-12'>" +
                    "<div class='input-field'>" +
                        "<input type='password' id='cConfirmarContraseña' name='' class='validate text-white'>" +
                        "<label for='cConfirmarContraseña'>Contraseña</label>" +
                    "</div>" +
                "</div>" +
            "</div>",
		confirmButtonText:"Confirmar cambios",
		confirmButtonColor:'#cc0000',
		showCancelButton: true,
		cancelButtonText:"Cancelar",
		cancelButtonColor:"#383838"
	}).then((result)=>{
		if(result.value){
			Swal.fire({
				title: "Su contraseña se cambió correctamente.",
				text:'',
				type:'success',
				confirmButtonText:'Aceptar',
				confirmButtonColor:'#383838'
			})
		}
	})
}

//MsjWarning();

//ConfirmarCambios();