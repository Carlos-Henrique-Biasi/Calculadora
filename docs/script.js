var res_c = document.querySelector('div#resultado')
//var teste = document.querySelector('div#teste')
var nc =''
var operadorat = '' 
var resm = 0
res_c.innerHTML = ''
function um(){
    res_c.innerHTML += "1"
    operadorat='1'
    nc += "1"
}
function dois(){
    res_c.innerHTML += "2"
    operadorat='2'
    nc += "2"
}
function tres(){
    res_c.innerHTML += "3"
    operadorat='3'
    nc += "3"
}
function quatro(){
    res_c.innerHTML += "4"
    operadorat='4'
    nc += "4"
}
function cinco(){
    res_c.innerHTML += "5"
    operadorat='5'
    nc += "5"
}
function seis(){
    res_c.innerHTML += "6"
    operadorat='6'
    nc += "6"
}
function sete(){
    res_c.innerHTML += "7"
    operadorat='7'
    nc += "7"
}
function oito(){
    res_c.innerHTML += "8"
    operadorat='8'
    nc += "8"
}
function nove(){
    res_c.innerHTML += "9"
    operadorat='9'
    nc += "9"
}
function zero(){
    res_c.innerHTML += "0"
    operadorat= '0'
    nc += "0"
}
function mais(){
    if(operadorat == '+' || operadorat == '-' || operadorat == '*' || operadorat == '/'){
        window.alert ('[ERRO] Dois operadores juntos') 
    }else{
    res_c.innerHTML += "+"
    operadorat='+'
    nc += "+"
    }
}
function menos(){
    if(operadorat == '+' || operadorat == '-' || operadorat == '*' || operadorat == '/'){
        alert ('[ERRO] Dois operadores juntos')
    }else{
    res_c.innerHTML+= "-"
    operadorat='-'
    nc += "-"
    }
}
function vezes(){
    if(operadorat == '+' || operadorat == '-' || operadorat == '*' || operadorat == '/'){
        alert ('[ERRO] Dois operadores juntos')
    }else{
    res_c.innerHTML += "*"
    operadorat='*'
    nc += "*"
    }
}
function dividir(){
    if(operadorat == '+' || operadorat == '-' || operadorat == '*' || operadorat == '/'){
        window.alert ('[ERRO] Dois operadores juntos')
    }else{
    res_c.innerHTML += "/"
    operadorat='/'
    nc += "/"
    }
}
function igual(){
    //nc tem minha conta inteira
    res_c.innerHTML = ''
    resm = eval(nc)
    nc = "("+nc+")"
    res_c.innerHTML = resm
    
}
