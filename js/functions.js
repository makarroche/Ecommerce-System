var barrios=["Pocitos","Punta Carretas","Carrasco","Punta Gorda"];
//Contiene los pedidos de compra de cada cliente
var arrayPedidos=[];
//Contiene los pedidos que conforman un pedido de compra para un cliente
var arraySubPedidos= [];
//Contiene los pedidos similares
var pedidosSimilares= [];
//Array Nombres Estados
var estados = ["Emitido", "Pedido Armado", "En Viaje", "Entregado"];
//Array de clientes
var clientes = [];
//Array de articulos
var articulos = [];
// Datos de prueba
if (confirm("Desea cargar los datos de prueba?")) {
	var rodrigo = new Cliente("Rodrigo", "Perez", 55, "Masculino", 096525252, "rperez@gmail.com", "Calle 1234", "Carrasco");
	var juan = new Cliente("Juan", "Gimenez", 20, "Masculino", 096161616, "jgimenez@gmail.com", "Avenida 1234", "Punta Carretas");
	var jose = new Cliente("Jose Pedro", "Amado", 23, "Masculino", 099121212, "jpamado@gmail.com", "Boulevard 4321", "Malvin");
	var macarena = new Cliente("Macarena", "Marroche", 24, "Femenino", 098414141, "makarroche@gmail.com", "Agustin de Urtubey 1382", "Pocitos");
	clientes.push(rodrigo);
	clientes.push(juan);
	clientes.push(jose);
	clientes.push(macarena);

	var spinner = new Articulo("Fidget Spinner", "18", "Jugete...", "70", "Juguetes");
	var escoba = new Articulo("Escoba", "2", "Para barrer", "100", "Limpieza");
	var pan = new Articulo("Pan", "27", "De todos los días.", "150", "Alimentos");
	var lapices = new Articulo("Lapices de Colores", "58", "Para pintar.", "15", "Escolares");
	var engrampadora = new Articulo("Engrampadora", "499", "Engrampa.", "45", "Escritorio");
	var portaretratos = new Articulo("Portaretratos", "100", "Para tus fotos.", "200", "Otros");
	articulos.push(spinner);
	articulos.push(escoba);
	articulos.push(pan);
	articulos.push(lapices);
	articulos.push(engrampadora);
	articulos.push(portaretratos);

	var subPedido1 = new SubPedido (articulos[0], 1);

	var subPedido2 = new SubPedido (articulos[1], 3);

	var subPedido3 = new SubPedido (articulos[2], 2);

	var subPedido4 = new SubPedido (articulos[3], 5);

	var subPedido5 = new SubPedido (articulos[4], 9);

	var subPedido6 = new SubPedido (articulos[5], 7);

	arraySubPedidosPedAux1 = [subPedido1,subPedido2,subPedido3,subPedido4,subPedido5, subPedido6];

	var pedido1 = {clientePed: rodrigo, 
		estadosPed: [{fecha: new Date(2017, 07, 10), observaciones: "El pedido fue emitido."}, {fecha: new Date(2017, 07, 15), observaciones: "El pedido fue armado."}], 
		arraySubPedidosPed: arraySubPedidosPedAux1};
	arrayPedidos.push(pedido1);

	var subPedido1 = new SubPedido (articulos[0], 1);

	var subPedido2 = new SubPedido (articulos[1], 1);

	var subPedido3 = new SubPedido (articulos[2], 1);

	arraySubPedidosPedAux1 = [subPedido1,subPedido2,subPedido3];

	var pedido2 = {clientePed: jose, 
		estadosPed: [{fecha: new Date(2017, 07, 10), observaciones: "El pedido fue emitido."}], 
		arraySubPedidosPed: arraySubPedidosPedAux1};
	arrayPedidos.push(pedido2);
}

$(document).ready(inicio);

function inicio(){
}

function Cliente(nombre, apellido, edad, sexo, celular, correo, direccion, barrio){
	this.name = nombre;
	this.lastName = apellido;
	this.age = edad;
	this.gender = sexo;
	this.phone = celular;
	this.email = correo;
	this.address = direccion;
	this.neighbourhood = barrio;
	return this;
}

function Articulo(nombre, codigo, descripcion, precio, categoria){
	this.nameArt = nombre;
	this.codigoArt = codigo;
	this.desArt = descripcion;
	this.precioArt = precio;
	this.categoriaArt = categoria;
	return this;
}

function SubPedido(articulo, cantidadUnidades){
	this.articuloSubPed = articulo;
	this.cantUnidades = cantidadUnidades;
	return this;
}

function Pedido(){
	this.clientePed = null;
	this.estadosPed = [];
	this.arraySubPedidosPed = null;
	return this;
}

function Estado(date, obser){
	this.fecha = date;
	this.observaciones = obser;
	return this;
}

function traduccionSelectToObject(array, propiedadObjeto, propiedadString){
	var objeto = null;
	for(var i=0; i<array.length;i++){
		objeto=array[i];
		if(objeto[propiedadObjeto]==propiedadString){
			i=array.length;
		}
	}
	return objeto;
}

function checkTextInput(input, mensajeError){
	var correcto = true;
	if (input=="" || input==" ") {
		correcto = false;
		alert(mensajeError);
	}
	return correcto;
}

function checkNumberInput(numero, min, max, mensajeError){
	var correcto = true;
	if (isNaN(numero) || (numero < min) || (numero > max)){
		correcto = false;
		alert(mensajeError);
	}	
	return correcto;	
}

function checkEmail(email, mensajeError){
	var correcto = true;
	var regEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  	if (!(regEx.test(email))) {
  		correcto = false;
  		alert(mensajeError);
  	}
  	return correcto;
}

function backHome(){
	$("#contenidoRegCliente").hide();
	$("#contenidoRegArticulo").hide();
	$("#contenidoRegPedComp").hide();
	$("#contenidoConsultaArticulos").hide();
	$("#contenidoConsultaTrazPedComp").hide();
	$("#contenidoConsultaPedidos").hide();
	$("#contenidoConsultaPedSim").hide();
	$("#container").hide();
	$("#contenidoEstadoDePedidoDeCompra").hide();
	$("#contenidoHome").show();
	$("body").css("background-color","#03193a");
}

function registroCliente(){
	$("#contenidoHome").hide();
	$("#contenidoRegArticulo").hide();
	$("#contenidoRegPedComp").hide();
	$("#contenidoConsultaArticulos").hide();
	$("#contenidoConsultaTrazPedComp").hide();
	$("#contenidoConsultaPedidos").hide();
	$("#contenidoConsultaPedSim").hide();
	$("#container").hide();
	$("#contenidoEstadoDePedidoDeCompra").hide();
	$("#contenidoRegCliente").show();
	$("body").css("background-color","rgba(145, 236, 236, 0.21)");
	$("#mySelect").html("<select id='mySelect'></select>");
	for(var i=0; i<barrios.length;i++){
		$("#mySelect").append("<option value="+i+">"+barrios[i]+"</option>");
	}
}

function mostrarOpcionesBarrio(){
	$("#area").val('');
	$("#area").show();
	$("#confirmar").show();
}

function agregarBarrio(){
	var barrio= $("#area").val();
	var repetido=false;
	var vacio=false;
	if(barrio==""||barrio==" "){
		alert("Campo vacío");
		vacio=true;
	}
	if(!($("#area").val()==""|| $("#area").val()==" ")){
		for(var i=0;i<barrios.length;i++){
			if(barrio.toUpperCase()===barrios[i].toUpperCase()){
				i=barrios.length;
				repetido=true;
			}
		}	
	}
	if(repetido){
		alert("Barrio ya disponible");
	}
	else{
		if(!vacio){
		barrios.push(barrio);
		$("#mySelect").append("<option value="+barrio+">"+barrio+"</option>");
		$("#area").hide();
		$("#confirmar").hide();
		}
	}
}

function checkRegCliente(nombre, apellido, edad, sexo, celular, correo, direccion, barrio){
	if (checkTextInput(nombre, "Debe ingresar un nombre.") && 
		checkTextInput(apellido, "Debe ingresar un apellido.") && 
		checkNumberInput(parseInt(edad), 18, 100, "Debe ingresar un número mayor o igual que 18 y menor o igual que 100.") && 
		checkNumberInput(parseInt(celular), 11111111, 999999999, "Debe ingresar un celular.") && 
		checkEmail(correo, "Debe ingresar un correo válido.") && 
		(!(checkExistingObject(clientes, "email", correo, "Ya existe un cliente con ese correo electrónico."))) &&
		checkTextInput(direccion, "Debe ingresar una dirección")){
		var client = new Cliente(nombre, apellido, edad, sexo, celular, correo, direccion, barrio);
		clientes.push(client);
		alert("Se ha registrado correctamente el cliente.");
		document.getElementById("formRegCliente").reset();
	}
}

function checkExistingObject(array, propiedadObjeto, propiedadString, mensajeError){
	var existe = false;
	for (var i = 0; i < array.length; i++){
		var objeto = array[i];
  		if (objeto[propiedadObjeto] == propiedadString) {
    		existe = true;
    		alert(mensajeError);
  		}
	}
	return existe;
}

function getInput(input){
	var aux = "#"+input;
	return $(aux).val();
}

function registroArtículo(){
	$("#contenidoHome").hide();
	$("#contenidoRegCliente").hide();
	$("#contenidoRegPedComp").hide();
	$("#contenidoConsultaArticulos").hide();
	$("#contenidoConsultaTrazPedComp").hide();
	$("#contenidoConsultaPedidos").hide();
	$("#contenidoConsultaPedSim").hide();
	$("#container").hide();
	$("#contenidoEstadoDePedidoDeCompra").hide();
	$("#contenidoRegArticulo").show();
	$("body").css("background-color","rgba(145, 236, 236, 0.21)");
}
 
function checkRegArticulo(nombre, codigo, descripcion, precio, categoria){
	if (checkTextInput(nombre, "Debe ingresar un nombre.") && 
		checkNumberInput(parseInt(codigo),1,500,"Debe ingresar un número mayor o igual a 1 y menor o igual que 500.") && 
		(!(checkExistingObject(articulos, "codigoArt", codigo, "Ya existe un artículo con ese código."))) && 
		checkTextInput(descripcion, "Debe ingresar una descripción.") &&
		checkNumberInput(parseInt(precio), 0, 999999999, "Debe ingresar un precio válido entero.")){
		var article = new Articulo(nombre, codigo, descripcion, precio, categoria);
		articulos.push(article);
		var texto = "Nombre: " + nombre + " | Codigo: " + codigo + " | Descripcion: " + descripcion + " | Precio: " + precio + " | Categoria: " + categoria;
		generateQR(texto);
		document.getElementById("formRegArticulo").reset();
		$(".catFoto").attr("src","img/juguetes.jpg");
		$("#container").show();
		alert("Se ha registrado correctamente el artículo.");
	}
}

function cancelRegArticulo(){
	$(".catFoto").attr("src","img/juguetes.jpg");
	$('#container').hide();
}

function cambiarFotoCat(categoria){
	if(categoria=="Juguetes"){
		$(".catFoto").attr("src","img/juguetes.jpg");
	}
	if(categoria=="Escolares"){
		 $(".catFoto").attr("src","img/escolares.jpg");
	}
	if(categoria=="Escritorio"){
		 $(".catFoto").attr("src","img/escritorio.jpg");
	}
	if(categoria=="Limpieza"){
		 $(".catFoto").attr("src","img/limpieza.jpg"); 
	}
	if(categoria=="Alimentos"){
		 $(".catFoto").attr("src","img/alimentos.jpg"); 
	}
	if(categoria=="Otros"){
		 $(".catFoto").attr("src","img/otros_articulos.png"); 
	}
}

function generateQR(texto){
	var options = {text: texto};
	$('#container').empty().qrcode(options);
}

function registroPedidoDeCompra(){
	if (clientes.length != 0 && articulos.length != 0) {
		$("#contenidoHome").hide();
		$("#contenidoRegArticulo").hide();
		$("#contenidoRegCliente").hide();
		$("#contenidoConsultaArticulos").hide();
		$("#contenidoConsultaTrazPedComp").hide();
		$("#contenidoConsultaPedidos").hide();
		$("#contenidoConsultaPedSim").hide();
		$("#container").hide();
		$("#contenidoEstadoDePedidoDeCompra").hide();
		$("#contenidoRegPedComp").show();
		$("body").css("background-color","rgba(145, 236, 236, 0.21)");
		$("#mySelectClientes").html("<select id='mySelectClientes'></select>");
		$("#mySelectArt").html("<select id='mySelectArt'></select>");
		for(var i=0; i<clientes.length; i++){
			var cliente = clientes[i];
	  		$("#mySelectClientes").append("<option value="+cliente.email+">"+cliente.name+" "+cliente.lastName+": "+cliente.email+"</option>");	
		}
		for(var i=0; i<articulos.length; i++){
			var articulo = articulos[i];
	  		$("#mySelectArt").append("<option value="+articulo.codigoArt+">"+articulo.nameArt+" | Código: "+articulo.codigoArt+" | $"+articulo.precioArt+"</option>");	
		}
	}
	else{
		alert("Debe ingresar al menos un cliente y un artículo para poder registrar un pedido de compra.");
	}
}

function filtrarCategoria(categoria){
	$("#mySelectArt").html("<select id='#mySelectArt'></select>");
	for(var i=0; i<articulos.length; i++){
		var articulo = articulos[i];
		if(categoria==articulo.categoriaArt){
			$("#mySelectArt").append("<option value="+articulo.codigoArt+">"+articulo.nameArt+" | Código: "+articulo.codigoArt+" | $"+articulo.precioArt+"</option>");
		}
		if(categoria=="Filtrar"){
			$("#mySelectArt").append("<option value="+articulo.codigoArt+">"+articulo.nameArt+" | Código: "+articulo.codigoArt+" | $"+articulo.precioArt+"</option>");
		}
	}
}

function checkAgregarAlPedido(codigoArticulo, cantidadUnidades){
	if (checkNumberInput(parseInt(cantidadUnidades), 1, 1000000000000000000, "Debe ingresar al menos una unidad.")){
		var repetido = false;
		var art = traduccionSelectToObject(articulos, "codigoArt", codigoArticulo);
		for (var i = 0; i < arraySubPedidos.length; i++) {
			var subped = arraySubPedidos[i];
			if (art == subped.articuloSubPed) {
				subped.cantUnidades = parseInt(subped.cantUnidades) + parseInt(cantidadUnidades);
				repetido = true;
			}
		}
		if (!repetido) {
			var subPedi = new SubPedido(art, cantidadUnidades);
			arraySubPedidos.push(subPedi);
		}
		alert("Se ha agregado el artículo al pedido de compra.");
		document.getElementById("mySelectClientes").disabled = true;
		displayResumenCompra();
		$("#tablaResumen").show();
	}
}

function emitirPedido(emailCliente){
	if (arraySubPedidos.length != 0) {
		var pedido = new Pedido();
		var client = traduccionSelectToObject(clientes, "email", emailCliente);
		pedido.arraySubPedidosPed = arraySubPedidos;
		pedido.clientePed = client;
		var today = new Date();
    	today.setHours(0, 0, 0, 0);
    	var estado = new Estado(today, "El pedido fue emitido.");
		pedido.estadosPed.push(estado);
		arrayPedidos.push(pedido);
		alert("Se ha emitido el pedido de compra.");
		cancelPedidoCompra();
	}
	else{
		alert("Debe agregar por lo menos un artículo para emitir un pedido.");
	}
}

function cancelPedidoCompra(){
	arraySubPedidos= [];
	$("#tablaResumen").hide();
	document.getElementById("formRegPedComp").reset();
	document.getElementById("mySelectClientes").disabled = false;
}

function displayResumenCompra(){
	var cantidadDeArticulosTotal=0;
	var precioTotal=0;
	$("#contenidoResumenCompra").html("");
	for (var i = 0; i < arraySubPedidos.length; i++){
		var subpedAux = arraySubPedidos[i];
  		cantidadDeArticulosTotal = cantidadDeArticulosTotal + parseInt(subpedAux.cantUnidades);

  		precioTotal = precioTotal + parseInt(subpedAux.cantUnidades) * parseInt(subpedAux.articuloSubPed.precioArt);

  		$("#contenidoResumenCompra").append("<TR><TD>"+subpedAux.articuloSubPed.nameArt+"</TD><TD>"
  			+parseInt(subpedAux.cantUnidades)+"</TD><TD>"+parseInt(subpedAux.articuloSubPed.precioArt)
	    	+"</TD><TD>"+(parseInt(subpedAux.cantUnidades)*subpedAux.articuloSubPed.precioArt)+"</TD></TR>");	
  	}
  	$("#cantArticulos").val(cantidadDeArticulosTotal);
  	$("#precioTotalPedido").val(precioTotal);
}

function actualizarEstadoDePedidoDeCompra(){
	if (arrayPedidos.length != 0) {
		$("#contenidoHome").hide();
		$("#contenidoRegArticulo").hide();
		$("#contenidoRegCliente").hide();
		$("#contenidoRegPedComp").hide();
		$("#contenidoConsultaPedSim").hide();
		$("#contenidoConsultaPedidos").hide();
		$("#contenidoConsultaTrazPedComp").hide();
		$("#container").hide();
		$("#contenidoConsultaArticulos").hide();
		$("#contenidoEstadoDePedidoDeCompra").show();
		$("body").css("background-color","rgba(145, 236, 236, 0.21)");
		$("#contenidoTablaArt").html("<tbody></tbody>"); 
		$("#mySelectPedidos").html("<select id='mySelectPedidos'></select>");
		for(var i=0; i<arrayPedidos.length; i++){
			var pedido = arrayPedidos[i];
		  	$("#mySelectPedidos").append("<option value=" + i + ">" + pedido.clientePed.name + " " + pedido.clientePed.lastName +
		  	" | " + pedido.clientePed.email+" | Número de pedido: " + i + "</option>");
		}
		displayEstado(0);
	}
	else{
		alert("Debe al menos registrar un pedido para actualizar su estado.");
	}
}

function displayEstado(idPedido){
	var arrayEstados = arrayPedidos[idPedido].estadosPed;
	$("#estado").val(estados[(arrayEstados.length-1)]+" | Fecha: "
		+arrayEstados[(arrayEstados.length-1)].fecha);
	if (arrayEstados.length == 4) {
		document.getElementById("actualizarButton").disabled = true;
		document.getElementById("observaciones").disabled = true;
		document.getElementById("fechaCambioEstado").disabled = true;
		document.getElementById("actualizarCancelButton").disabled = true;
	}
	else{
		document.getElementById("actualizarButton").disabled = false;
		document.getElementById("observaciones").disabled = false;
		document.getElementById("fechaCambioEstado").disabled = false;
		document.getElementById("actualizarCancelButton").disabled = false;
	}
}

function checkDate(date1, date2, mensajeError){
	var correcto=true;
	if(date1<date2){
		correcto=false;
		alert(mensajeError);
	}
	return correcto;
}

function actualizarEstadoPedido(idPedido, fecha, observaciones){
	var date = new Date(Date.parse(fecha));
	var pedido = arrayPedidos[parseInt(idPedido)];
	if(!(fecha == "")){
		if(checkDate(date, pedido.estadosPed[pedido.estadosPed.length-1].fecha,
			"Debe ingresar una fecha posterior a la fecha del estado anterior.")){
			if (checkTextInput(observaciones, "Debe ingresar observaciones")) {
				var estado = new Estado(date , observaciones);
				pedido.estadosPed.push(estado);
				document.getElementById("formEstadoPedComp").reset();
				displayEstado(0);
				alert("Se ha actualizado el pedido exitosamente.");
			}
		}	
	}
	else{
		alert("Debe ingresar una fecha de cambio de estado.")
			
	}
}

function consultaArtículos(){
	if (articulos.length != 0) {
		$("#contenidoHome").hide();
		$("#contenidoRegArticulo").hide();
		$("#contenidoRegCliente").hide();
		$("#contenidoRegPedComp").hide();
		$("#contenidoConsultaPedSim").hide();
		$("#contenidoConsultaPedidos").hide();
		$("#contenidoConsultaTrazPedComp").hide();
		$("#container").hide();
		$("#contenidoEstadoDePedidoDeCompra").hide();
		$("#contenidoConsultaArticulos").show();
		$("body").css("background-color","rgba(145, 236, 236, 0.21)");
		$("#contenidoTablaArt").html("<tbody></tbody>"); 
		articulos.sort(function(a, b) { 
	    	return a.codigoArt - b.codigoArt;
		})
		for(var i=0; i<articulos.length; i++){
			var articulo = articulos[i];
		    $("#contenidoTablaArt").append("<TR><TD>"+articulo.nameArt+"</TD>"
		    +"<TD>"+articulo.categoriaArt+"</TD>"+"<TD>"+articulo.codigoArt+"</TD></TR>");
		}
 	}
 	else{
 		alert("Debe registrar al menos un artículo para consultar la lista de articulos registrados.");
 	}
}

function consultaTrazabilidadPedidoCompra(){
	if (arrayPedidos.length != 0) {
		$("#contenidoHome").hide();
		$("#contenidoRegArticulo").hide();
		$("#contenidoRegCliente").hide();
		$("#contenidoRegPedComp").hide();
		$("#contenidoConsultaArticulos").hide();
		$("#contenidoConsultaPedidos").hide();
		$("#contenidoConsultaPedSim").hide();
		$("#container").hide();
		$("#contenidoEstadoDePedidoDeCompra").hide();
		$("#contenidoConsultaTrazPedComp").show();
		$("body").css("background-color","rgba(145, 236, 236, 0.21)");
		$("#selectClienteConTraz").html("<select id='selectClienteConTraz'></select>");
		for(var i=0; i<clientes.length; i++){
			var cliente = clientes[i];
		  	$("#selectClienteConTraz").append("<option value="+i+">"+cliente.name+" "+cliente.lastName+": "+cliente.email+"</option>");	
		}
		pedidosDeCliente(0);
	}
	else{
		alert("Debe registrar al menos un pedido de compra para visualizar su trazabilidad.");
	}
}

function pedidosDeCliente(idCliente){
	$("#selectPedidosTraz").html("<select id='selectPedidosTraz'></select>");
	var cliente=clientes[parseInt(idCliente)];
	for(var i=0; i<arrayPedidos.length; i++){
		var pedido = arrayPedidos[i];
		if(pedido.clientePed == cliente){
			$("#selectPedidosTraz").append("<option value=" + i + ">" + pedido.clientePed.name + " " + pedido.clientePed.lastName +
	  		" | " + pedido.clientePed.email+" | Número de pedido: " + i + "</option>");
		}
	}
	detalleTraz(getInput("selectPedidosTraz"));
}

function detalleTraz(idPedido){
	$("#contenidotablaTrazPedComp").html("<tbody></tbody>");
	var pedido = arrayPedidos[parseInt(idPedido)];
	if (pedido != undefined) {
		for(var i=0; i<pedido.estadosPed.length; i++){
			$("#contenidotablaTrazPedComp").append("<TR><TD>"+estados[i]+"</TD>"
		    +"<TD>"+pedido.estadosPed[i].fecha+"</TD>"+"<TD>"+pedido.estadosPed[i].observaciones+"</TD></TR>");
		}
	}
	else{
		alert("El cliente seleccionado no tiene ningún pedido de compra.");
	}
	
}

function consultaPedidos(){
	if (arrayPedidos.length != 0) {
		$("#contenidoHome").hide();
		$("#contenidoRegArticulo").hide();
		$("#contenidoRegCliente").hide();
		$("#contenidoRegPedComp").hide();
		$("#contenidoConsultaArticulos").hide();
		$("#contenidoConsultaTrazPedComp").hide();
		$("#contenidoConsultaPedSim").hide();
		$("#container").hide();
		$("#contenidoEstadoDePedidoDeCompra").hide();
		$("#contenidoConsultaPedidos").show();
		$("body").css("background-color","rgba(145, 236, 236, 0.21)");
		$("#selectClienteConPed").html("<select id='selectClienteConPed'></select>");
		for(var i=0; i<clientes.length; i++){
			var cliente = clientes[i];
		  	$("#selectClienteConPed").append("<option value="+cliente.email+">"+cliente.name+" "+cliente.lastName+": "+cliente.email+"</option>");	
		}
		displayGrafica(getInput("selectClienteConPed"));
	}
	else{
		alert("Debe registrar al menos un pedido de compra para hacer la consulta de pedidos.");
	}
}

function displayGrafica(emailCliente){
	var client = traduccionSelectToObject(clientes, "email", emailCliente)
	var arrayPrecios= precioPorCategoria(client);
	$("#grafica").html("<canvas id='graficaDeBarras'></canvas>");
	var ctx = document.getElementById("graficaDeBarras").getContext('2d');
	var myChart = new Chart(ctx, {
	    type: 'bar',
	    data: {
	        labels: ["Juguetes", "Escolares", "Escritorio", "Alimentos", "Limpieza", "Otros"],
	        datasets: [{
	            label: 'Precio total de la categoría',
	            data: arrayPrecios,
	            backgroundColor: [
	                'rgba(255, 99, 132, 0.2)',
	                'rgba(54, 162, 235, 0.2)',
	                'rgba(255, 206, 86, 0.2)',
	                'rgba(75, 192, 192, 0.2)',
	                'rgba(153, 102, 255, 0.2)',
	                'rgba(255, 159, 64, 0.2)'
	            ],
	            borderColor: [
	                'rgba(255,99,132,1)',
	                'rgba(54, 162, 235, 1)',
	                'rgba(255, 206, 86, 1)',
	                'rgba(75, 192, 192, 1)',
	                'rgba(153, 102, 255, 1)',
	                'rgba(255, 159, 64, 1)'
	            ],
	            borderWidth: 1
	        }]
	    },
	    options: {
	        scales: {
	            yAxes: [{
	                ticks: {
	                    beginAtZero:true
	                }
	            }]
	        }
	    }
	});
}

function precioPorCategoria(client){
	var precioTotalporCat=0;
	var juguetes=0;
	var escolares=0;
	var escritorio=0;
	var alimentos=0;
	var limpieza=0;
	var otros=0;
	for(var i=0; i<arrayPedidos.length; i++){
		var pedido = arrayPedidos[i];
		if(pedido.clientePed == client){
			for(var j=0; j<pedido.arraySubPedidosPed.length; j++){
				var subpedido = pedido.arraySubPedidosPed[j];
				if(subpedido.articuloSubPed.categoriaArt == "Juguetes"){
					juguetes = juguetes + subpedido.cantUnidades * subpedido.articuloSubPed.precioArt;
				}
				if(subpedido.articuloSubPed.categoriaArt == "Escolares"){
					escolares = escolares + subpedido.cantUnidades * subpedido.articuloSubPed.precioArt;
				}
				if(subpedido.articuloSubPed.categoriaArt == "Escritorio"){
					escritorio = escritorio + subpedido.cantUnidades * subpedido.articuloSubPed.precioArt;
				}
				if(subpedido.articuloSubPed.categoriaArt == "Alimentos"){
					alimentos = alimentos + subpedido.cantUnidades * subpedido.articuloSubPed.precioArt;
				}
				if(subpedido.articuloSubPed.categoriaArt == "Limpieza"){
					limpieza = limpieza + subpedido.cantUnidades * subpedido.articuloSubPed.precioArt;
				}
				if(subpedido.articuloSubPed.categoriaArt == "Otros"){
					otros = otros + subpedido.cantUnidades * subpedido.articuloSubPed.precioArt;
				}
			}
		}
	}
	var arrayPrecios=[juguetes,escolares,escritorio,alimentos,limpieza,otros];
	return arrayPrecios;
}

function consultaPedidosSimilares(){
	$("#selectPedidoPedSim").html("<select id='selectPedidoPedSim'></select>");
	var hayPedidos=false;
	for(var i=0; i<arrayPedidos.length; i++){
		var pedido = arrayPedidos[i];
		if (pedido.arraySubPedidosPed.length>=3) {
			hayPedidos=true;
			$("#selectPedidoPedSim").append("<option value=" + i + ">" + pedido.clientePed.name + " " + pedido.clientePed.lastName +
	  		" | " + pedido.clientePed.email+" | Número de pedido: " + i + "</option>");
		}
	}
	if(hayPedidos){
		$("#contenidoHome").hide();
		$("#contenidoRegArticulo").hide();
		$("#contenidoRegCliente").hide();
		$("#contenidoRegPedComp").hide();
		$("#contenidoConsultaArticulos").hide();
		$("#contenidoConsultaTrazPedComp").hide();
		$("#contenidoConsultaPedidos").hide();
		$("#container").hide();
		$("#contenidoEstadoDePedidoDeCompra").hide();
		$("#contenidoConsultaPedSim").show();
		$("body").css("background-color","rgba(145, 236, 236, 0.21)");
		fillPedidoSimilarTabla1(getInput("selectPedidoPedSim"));
	}
	else{
		alert("Debe registrar un pedido de compra con al menos tres artículos distintos.");
	}
}

function fillPedidoSimilarTabla1(numeroPedido){
	var pedido = arrayPedidos[numeroPedido];
	$("#contenidoTablaPed1").html("<tbody></tbody>");
	for (var i = 0; i < pedido.arraySubPedidosPed.length; i++){
		var subpedAux = pedido.arraySubPedidosPed[i];
  		$("#contenidoTablaPed1").append("<TR><TD>"+subpedAux.articuloSubPed.nameArt+"</TD><TD>"
  			+parseInt(subpedAux.cantUnidades)+"</TD><TD>"+parseInt(subpedAux.articuloSubPed.precioArt)
	    	+"</TD><TD>"+(parseInt(subpedAux.cantUnidades)*subpedAux.articuloSubPed.precioArt)+"</TD></TR>");	
  	}
  	$("#tablaPed1").show();
  	checkPedidosSimilaresExist(pedido);
}

function checkPedidosSimilaresExist(pedido){
	pedidosSimilares=[];
	var coincidencias=0;
	for (var i = 0; i < arrayPedidos.length; i++){
		coincidencias = 0;
		var pedSim=arrayPedidos[i];
		if(pedSim!=pedido){
			for (var j = 0; j < pedido.arraySubPedidosPed.length; j++){
				var subpedPedido = pedido.arraySubPedidosPed[j];
				for(var k = 0; k < pedSim.arraySubPedidosPed.length; k++){
					var subpedPedidoSim = pedSim.arraySubPedidosPed[k];
					if(subpedPedido.articuloSubPed.codigoArt==subpedPedidoSim.articuloSubPed.codigoArt){
						coincidencias++;
					}
				}	
			}
			if(coincidencias>=3){
				pedidosSimilares.push(pedSim);
			}
		}
	}
	$("#pedidosSimilares").html("<select id='pedidosSimilares'></select>");
	for(var i=0; i<pedidosSimilares.length; i++){
		var pedidoSimilar = pedidosSimilares[i];
	  	$("#pedidosSimilares").append("<option value=" + i + ">" + pedidoSimilar.clientePed.name + " " + pedidoSimilar.clientePed.lastName +
	  		" | " + pedidoSimilar.clientePed.email + "</option>");
	}
	fillPedidoSimilarTabla2("0");
}

function fillPedidoSimilarTabla2(idPedidoSimilar){
	$("#contenidoTablaPed2").html("<tbody></tbody>");
	var pedidoSimilar = pedidosSimilares[parseInt(idPedidoSimilar)];
	for (var j = 0; j < pedidoSimilar.arraySubPedidosPed.length; j++){
		var subpedAux = pedidoSimilar.arraySubPedidosPed[j];
		$("#contenidoTablaPed2").append("<TR><TD>"+subpedAux.articuloSubPed.nameArt+"</TD><TD>"
  		+parseInt(subpedAux.cantUnidades)+"</TD><TD>"+parseInt(subpedAux.articuloSubPed.precioArt)
	    +"</TD><TD>"+(parseInt(subpedAux.cantUnidades)*subpedAux.articuloSubPed.precioArt)+"</TD></TR>");
	}			
  	$("#tablaPed2").show();
}


