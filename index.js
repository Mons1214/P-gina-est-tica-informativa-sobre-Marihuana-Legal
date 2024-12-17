const inputName = document.querySelector('#input-name');
const inputComent = document.querySelector('#input-comentario');
const buttonEnviar = document.querySelector('#enviando');

let listOpinions = [];

buttonEnviar.addEventListener("click", (evento) => {
    evento.preventDefault();
    const inputNameValue = inputName.value.trim();
    const inputComentValue = inputComent.value.trim();

    let opinion = {
        name: inputNameValue,
        coment: inputComentValue
    }

    listOpinions.push(opinion)
    console.log(listOpinions)

    inputName.value = ""
    inputComent.value = ""
});
