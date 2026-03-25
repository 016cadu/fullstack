document.getElementById("b1").innerHTML = "Vai Corinthians";

/*let nome = prompt("Digite seu nome: ");
let idade = prompt("Digite sua idade: ");
let ano = 2026;
let nasc = ano - idade;

document.getElementById("resp_ex1").innerHTML = "Olá "+ nome +", seu ano de nascimento é: "+ nasc +".";*/

function alerta(){
    alert("Olá")
};

function alerta_2(texto){
    alert(texto);
}

alerta();
alerta_2("Cadu");
alerta_2("Pinhoti");

function soma(a,b){return a + b; }
function subt(a,b){return a - b; }
function mult(a,b){return a * b; }
function divi(a,b){return a / b; }

resp = soma(6,7)
document.getElementById("soma").innerHTML = resp

function exemplo2(){
    let x = document.getElementById("in_ex2").value;

    for(let i = 1; 1 <= x; i++ ){
        console.log(x + 1);
    }

    document.getElementById("resp_ex2").innerHTML = x;
}

function exercicio3(){
    let a = parseInt(document.getElementById("in_1_ex3").value);
    let b = parseInt(document.getElementById("in_2_ex3").value);

    let resp = soma(a,b);

    document.getElementById("resp_ex3").innerHTML = resp;
}
