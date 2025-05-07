const container = document.querySelector('.container'),
    qrinput = container.querySelector('.form input'),
    genereteBtn = container.querySelector('.form button'),
    qrImg = container.querySelector(".qr-code .img");

genereteBtn.addEventListener('click', () => {
    let qrvalue = qrinput.value;
    if (!qrvalue) {
        alert("Insira um texto ou um link para gerar um QrCode")
        return;
    }
    genereteBtn.innerText = "Gerando Um Qrcode...";
    qrImg.src=`https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=%24${qrvalue}`;
    qrImg.addEventListener('load', () =>{
        genereteBtn.innerText = 'Gerar QrCode',
        container.classList.add('active');
    })
    
})

qrinput.addEventListener('keyup', () => {
    if(!qrinput.value){
        container.classList.remove("active")
    }
})