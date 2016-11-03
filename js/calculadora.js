//variable global
var operador = "";
function operadores(ope) //+, -. *, /
{
	operador = ope
}
function igual()
{
	var valor1 = document.calculadora.operando1.value;
	var valor2 = document.calculadora.operando2.value;
	var resultado = 0;
	if (operador == "+")
		resultado = valor1 + valor2;
	else if(operador == "-")
		resultado = valor1 - valor2;
	else if(operador == "*")
		resultado = valor1 * valor2;
	else if(operador == "/")
		resultado = valor1 / valor2;
	document.calculadora.resultado.value = eval(valor1+operador+valor2);
}
function numeros(num)
{
	if(operador == "")  //escribir en el operadndo1
	{
	//guardamos el valor del operando1
		var valor = document.calculadora.operando1.value;
		if(valor=="0")
			{
				document.calculadora.operando1.value = ""
			}
		document.calculadora.operando1.value = document.calculadora.operando1.value + num;
	}
	else //escribir en el operando2
	{
		var valor = document.calculadora.operando2.value;
		if(valor == "0")
			{
				document.calculadora.operando2.value = ""
			}
		document.calculadora.operando2.valuue = document.calculadora.operando2.value + num;
	}
}