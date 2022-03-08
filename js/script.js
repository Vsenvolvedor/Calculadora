const
 valor = document.querySelectorAll('.value'),
 sim = document.querySelectorAll('.sim'),
 del = document.querySelector('#del'),
 send = document.querySelector('#send')
 display = document.querySelector('#res'),
 nega = document.querySelector('#neg'),
 virg = document.querySelector('#virg')

let
 C2 = 1,
 cont = [], 
 indisp = display.innerHTML,
 oper = "",
 num = "",
 i = 0

// ADICIONAR CARACTER

valor.forEach(item =>{item.addEventListener('click', event=>{
    display.innerHTML += Number(item.innerHTML) 
    num += Number(item.innerHTML) 
})})

sim.forEach(item =>{item.addEventListener('click', event=>{

    if (display.innerHTML == "")
    {
        window.alert('Adicione um numero primeiro')
    }
    else
    {
        Numarray(num)
        display.innerHTML += item.innerHTML
        oper = item.innerText
        num = ""
        C2 += 1 
        
    }

})})

// SEPARADOR

function Numarray(a)
{

    for(let C=i;C < C2; C++)
    {
        cont[i] = Number(a)
        i += 1
    }

}

// ADICIONAR VIRGULA

virg.addEventListener('click', event =>{
    if(display.innerHTML == "")
    {
        window.alert('Adicione um numero primeiro')
    }
    else
    {
        display.innerHTML += "."
        num += "."
    }
})

// NUMERO NEGATIVO

nega.addEventListener('click', event=>{
    NegativN(num)
})

// FUNCAO NEG

function NegativN(a)
{
    let b = -Math.abs(a)
    cont[i] = b
    display.innerHTML = b
    Numarray(b)
    num = ""
    
}

// CALCULAR

send.addEventListener('click', event=>{

    if (display.innerHTML == "")
    {
        window.alert('Adicione um numero primeiro')
    }
    else if(i > 1)
    {
        window.alert('A calculadora aceita apenas dois numeros')
    }
    else
    {
        Numarray(num)
        switch (oper)
        {
            case `+`:
                soma(cont[0],cont[1]);
            break;
            case '-':
                subtra(cont[0],cont[1]);
            break;
            case '*':
                multip(cont[0],cont[1])
            break;
            case '/':
                divid(cont[0],cont[1])
            break;
            default:
            console.log('ERRO');
        }

        i = 1
        C2 = 1
        cont[0] = display.innerText
        num = ""   
    }

})

// FUNCOES CALC

function soma(a,b)
{
    let c =  +a + +b

    display.innerHTML = c.toFixed(1)
}

function subtra(a,b)
{
    let c = a - b
    
    display.innerHTML = c.toFixed(1)
}

function multip(a,b)
{
    let c = a * b

    display.innerHTML = c.toFixed(1)
}

function divid(a,b)
{
    let c =  a / b

    display.innerHTML = c.toFixed(1)
}

// DELETAR

del.addEventListener('click',event =>{
    delet()
 })

// FUNCAO DELET

function delet()
{
    display.innerHTML = ""
    i = 0
    C2 = 1
    num = ""
    cont[0] = 0
    cont[1] = 0
   
}
