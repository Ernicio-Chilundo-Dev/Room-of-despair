('use strict')

let banco = [
    { db: "parametros sao valores ou variaveis que sao passados para funcoes ou procedimentos para definir seu comportamento ou influenciar seus resultados." },
    { db: "argumentos reais ou parametros sao valores reais passados para a funcao quando ela e chamada." },
    { db: " parametros formais sao definidos na declaracao da funcao e atuam como variaveis locais dentro do corpo da funcao." }
]

const question = document.getElementById('question');
const roomDespair = document.getElementById('roomDespair');
const btnApagar = document.getElementById('btnApagar');

function createElement(text){
    const paragrafo = document.createElement('p')
    paragrafo.setAttribute("class","class");
    paragrafo.textContent = text
    return paragrafo
}

function apagar(){
    if(roomDespair){
        roomDespair.innerHTML = '';
    }
}

const from = createElement('Ola! Seja bem vido')
roomDespair.appendChild(from)

function content(evento){
if(evento.key == 'Enter'){
    const enviar = evento.textContent = evento.target.value
    from.textContent ='';
    if(enviar != ""){
        roomDespair.appendChild(createElement(enviar))
        const dados = banco.find(i => i.db.includes(enviar))
        if(dados){
            roomDespair.appendChild(createElement(dados.db))
        }
        evento.target.value='';
    }else{
        roomDespair.appendChild(createElement('Erro: O campo de texto encontra-se vazio!'))
    }
}
}

btnApagar.addEventListener('click', apagar);
question.addEventListener("keypress", content)