document.getElementById('gerarConselho').addEventListener('click', () =>{
    conselhoGeradoAleatoriamente()
    
})

async function criarUmConselhoAleatorio(){
    const url = "https://api.adviceslip.com/advice"
    const resposta = await fetch(url)
    return await resposta.json()
}

async function ConselhoGerado() {
    const conselho = await criarUmConselhoAleatorio();
    return conselho;
}

async function conselhoGeradoAleatoriamente(){
    const conselhoGerado = await ConselhoGerado();
    const frase = conselhoGerado.slip.advice;
    const idDoConselho = conselhoGerado.slip.id;
    const PDoConselho = document.getElementById('advice')
    PDoConselho.innerHTML = frase
    const NumeroDoConselho = document.getElementById('id_Advice')
    NumeroDoConselho.innerHTML = `Advice #${idDoConselho}`

}

conselhoGeradoAleatoriamente()

// const adviceUpdateButton = document.querySelector(".advice-update");
// const adviceNumber = document.querySelector(".advice-id");
// const adviceDescription = document.querySelector(".advice-description");

// async function getAdvice() {
//   try {
//     const response = await fetch("https://api.adviceslip.com/advice");

//     /* 
//       A propriedade .ok é responsável por verificar se a resposta (Response) foi feita com sucesso ou não, 
  
//       nesse caso estamos negando a resposta, ou seja, se a resposta não foi feita com sucesso, retornamos um erro.
    
//       Ela está presente no objeto Response, que é retornado pela função fetch. 
//     */

//     if (!response.ok){
//       throw new Error("Ocorreu um erro ao tentar buscar as informações da API");
//     }

//     const adviceContent = await response.json();
//     const adviceId = `Advice #${adviceContent.slip.id}`;
//     const adviceText = `"${adviceContent.slip.advice}"`;

//     adviceNumber.innerText = adviceId;
//     adviceDescription.innerText = adviceText;

//   } catch (error) {
//     console.error("Erro ao tentar buscar as informações da API", error);
//   }
  
// }

// adviceUpdateButton.addEventListener("click", getAdvice);

// getAdvice();