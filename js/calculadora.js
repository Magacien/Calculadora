document.getElementById("numero1").addEventListener("click", numero1);
document.getElementById("numero2").addEventListener("click", numero2);
document.getElementById("numero3").addEventListener("click", numero3);
document.getElementById("numero4").addEventListener("click", numero4);
document.getElementById("numero5").addEventListener("click", numero5);
document.getElementById("numero6").addEventListener("click", numero6);
document.getElementById("numero7").addEventListener("click", numero7);
document.getElementById("numero8").addEventListener("click", numero8);
document.getElementById("numero9").addEventListener("click", numero9);
document.getElementById("numero0").addEventListener("click", numero0);
document.getElementById("suma").addEventListener("click", operacion1);
document.getElementById("resta").addEventListener("click", operacion2);
document.getElementById("multiplicacion").addEventListener("click", operacion3);
document.getElementById("division").addEventListener("click", operacion4);
document.getElementById("resultado").addEventListener("click", showResult);


function numero1() {
    let actual = document.getElementById('resultado').innerHTML;
    let sumado = document.getElementById("numero1").innerHTML;
    document.getElementById('resultado').innerHTML = actual + sumado
}

function numero2() {
    let actual = document.getElementById('resultado').innerHTML;
    let sumado = document.getElementById("numero2").innerHTML;
    document.getElementById('resultado').innerHTML = actual + sumado
}

function numero3() {
    let actual = document.getElementById('resultado').innerHTML;
    let sumado = document.getElementById("numero3").innerHTML;
    document.getElementById('resultado').innerHTML = actual + sumado
}

function numero4() {
    let actual = document.getElementById('resultado').innerHTML;
    let sumado = document.getElementById("numero4").innerHTML;
    document.getElementById('resultado').innerHTML = actual + sumado
}

function numero5() {
    let actual = document.getElementById('resultado').innerHTML;
    let sumado = document.getElementById("numero5").innerHTML;
    document.getElementById('resultado').innerHTML = actual + sumado
}




























// document.getElementById("n1").addEventListener("click",n1);
// document.getElementById("n2").addEventListener("click",n2);
// document.getElementById("n3").addEventListener("click",n3);
// document.getElementById("n4").addEventListener("click",n4);
// document.getElementById("n5").addEventListener("click",n5);
// document.getElementById("n6").addEventListener("click",n6);
// document.getElementById("n7").addEventListener("click",n7);
// document.getElementById("n8").addEventListener("click",n8);
// document.getElementById("n9").addEventListener("click",n9);
// document.getElementById("n0").addEventListener("click",n0);
// document.getElementById("s").addEventListener("click",o1);
// document.getElementById("r").addEventListener("click",o2);
// document.getElementById("d").addEventListener("click",o3);
// document.getElementById("m").addEventListener("click",o4);
// document.getElementById("sr").addEventListener("click",showResult);

// function n1() {
// 	let actual = document.getElementById('resultado').innerHTML;
// 	let sumado = document.getElementById("n1").innerHTML;
// 	document.getElementById('resultado').innerHTML = actual + sumado
// }
// function n2() {
// 	let actual = document.getElementById('resultado').innerHTML;
// 	let sumado = document.getElementById("n2").innerHTML;
// 	document.getElementById('resultado').innerHTML = actual + sumado
// }
// function n3() {
// 	let actual = document.getElementById('resultado').innerHTML;
// 	let sumado = document.getElementById("n3").innerHTML;
// 	document.getElementById('resultado').innerHTML = actual + sumado
// }
// function n4() {
// 	let actual = document.getElementById('resultado').innerHTML;
// 	let sumado = document.getElementById("n4").innerHTML;
// 	document.getElementById('resultado').innerHTML = actual + sumado
// }
// function n5() {
// 	let actual = document.getElementById('resultado').innerHTML;
// 	let sumado = document.getElementById("n5").innerHTML;
// 	document.getElementById('resultado').innerHTML = actual + sumado
// }
// function n6() {
// 	let actual = document.getElementById('resultado').innerHTML;
// 	let sumado = document.getElementById("n6").innerHTML;
// 	document.getElementById('resultado').innerHTML = actual + sumado
// }
// function n7() {
// 	let actual = document.getElementById('resultado').innerHTML;
// 	let sumado = document.getElementById("n7").innerHTML;
// 	document.getElementById('resultado').innerHTML = actual + sumado
// }
// function n8() {
// 	let actual = document.getElementById('resultado').innerHTML;
// 	let sumado = document.getElementById("n8").innerHTML;
// 	document.getElementById('resultado').innerHTML = actual + sumado
// }
// function n9() {
// 	let actual = document.getElementById('resultado').innerHTML;
// 	let sumado = document.getElementById("n9").innerHTML;
// 	document.getElementById('resultado').innerHTML = actual + sumado
// }
// function n0() {
// 	let actual = document.getElementById('resultado').innerHTML;
// 	let sumado = document.getElementById("n0").innerHTML;
// 	document.getElementById('resultado').innerHTML = actual + sumado
// }

// function o1() {
// 	let actual = document.getElementById('resultado').innerHTML;
// 	let sumado = document.getElementById("s").innerHTML;
// 	document.getElementById('resultado').innerHTML = actual + sumado
// }

// function o2() {
// 	let actual = document.getElementById('resultado').innerHTML;
// 	let sumado = document.getElementById("r").innerHTML;
// 	document.getElementById('resultado').innerHTML = actual + sumado
// }

// function o3() {
// 	let actual = document.getElementById('resultado').innerHTML;
// 	let sumado = document.getElementById("d").innerHTML;
// 	document.getElementById('resultado').innerHTML = actual + sumado
// }

// function o4() {
// 	let actual = document.getElementById('resultado').innerHTML;
// 	let sumado = document.getElementById("m").innerHTML;
// 	document.getElementById('resultado').innerHTML = actual +  sumado
// }

// function showResult() {
// 	let actual = document.getElementById('resultado').innerHTML;
// 	let suma = actual.indexOf("+");
// 	let resta = actual.indexOf("-");
// 	let div = actual.indexOf("÷");
// 	let mult = actual.indexOf("x");
// 	if (suma !== -1) {
// 		arr = actual.split("+",2);
// 		res = parseInt(arr[0]) + parseInt(arr[1]);
// 		document.getElementById("resultado").innerHTML = res;
// 	} else if (resta !== -1) {
// 		arr = actual.split("-",2);
// 		res = arr[0] - arr[1];
// 		document.getElementById("resultado").innerHTML = res;

// 	} else if (div !== -1) {
// 		arr = actual.split("÷",2);
// 		res = arr[0] / arr[1];
// 		document.getElementById("resultado").innerHTML = res;

// 	} else if (mult !== -1) {
// 		arr = actual.split("x",2);
// 		res = arr[0] * arr[1];
// 		document.getElementById("resultado").innerHTML = res;

// 	}
// }