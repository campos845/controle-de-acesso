const checkAccessButton = document.getElementById('checkAccessButton');
const form = document.getElementById("cadastroForm");
let exibiCadastro = {}
const controlador = ['Carlos']

function generateQRCode(text) {
    const qrCodeContainer = document.getElementById('qrCode');
    const qrCodeImg = document.createElement('img');
    qrCodeImg.src = 'https://api.qrserver.com/v1/create-qr-code/?size=128x128&data=' + encodeURIComponent(text);

    while (qrCodeContainer.firstChild) {
        qrCodeContainer.removeChild(qrCodeContainer.firstChild);
    }

    qrCodeContainer.appendChild(qrCodeImg);
}

function validaCadastro(event){
    event.preventDefault()

    const nome = document.getElementById('nomeInput').value;  
    const empresa = document.getElementById('localEmpresaInput').value;
    const celular = document.getElementById('celularInput').value;
    const email = document.getElementById('emailInput').value;
    const cpf = document.getElementById('cpfInput').value;
    const andar = document.getElementById('andarInput').value;
    const visita = document.getElementById('empresaVisitadaInput').value;
    const autorizador = document.getElementById('autorizadorInput').value;
    const foto = document.getElementById('fotoInput').files[0];

    const cadastroData = { nome, empresa, cpf, visita};
    const cadastroText = JSON.stringify(cadastroData);

    if (nome == '' || empresa == '' || celular == '' || email == '' || cpf == '' || andar == '' || visita == '' || autorizador == '' || foto == '') {
        alert('Acesso negado, todos os campos devem ser preenchidos!');
    } else if(autorizador != controlador[0]){
        alert('acesso negado, controlador invalido')
    }
     else {
        exibiCadastro = cadastroData
        checkAccessButton.disabled = false  
        generateQRCode(cadastroText)
        form.reset()
    }
}

function verificarAcesso(){
    const cadastroInfo = document.getElementById("cadastroInfo")
    const exibiData = document.createElement("div")
    console.log(exibiData)
    const titulo = document.createElement('h2')
    titulo.textContent = 'Dados de Cadastro';
    const nome = document.createElement("p")
    nome.textContent = exibiCadastro.nome
    const empresa = document.createElement("p")
    empresa.textContent = exibiCadastro.empresa
    const cpf = document.createElement("p")
    cpf.textContent = exibiCadastro.cpf
    const visita = document.createElement("p")
    visita.textContent = exibiCadastro.visita
    
    exibiData.appendChild(titulo)
    exibiData.appendChild(nome)
    exibiData.appendChild(empresa)
    exibiData.appendChild(cpf)
    exibiData.appendChild(visita)
   
    cadastroInfo.appendChild(exibiData)
    checkAccessButton.disabled = true
}
