//Método getElementbyId:

let title1 = document.getElementById('title1');

//Alterando o conteúdo:

title1.innerHTML = 'vai tomar no cu miguel!';

//configurando o css:

title1.style.textAlign ='center';
title1.style.backgroundColor = '#CCCCC9';
title1.style.borderBottom = 'solid 3px #000';
title1.style.margin = '20px';

//Método getElementbyClassName:


let piroca = document.getElementsByClassName('item');

console.log(piroca);
console.log(piroca[1]);
piroca[1].textContent = 'Hello 2';
piroca[1].style.fontWeight = 'bold';
piroca[1].style.backgroundColor = 'yellow';