const ulPet = document.querySelector('.pet');

/* Pegando as imagens de cachorro da API */
async function imagensDog() {

  const dogImg = await fetch('https://api.thedogapi.com/v1/images/search')
  .then((response) => response.json())
  .then((data) => data)
  .catch((err) => console.log('Houve esse erro' + err))

    return dogImg[0].url;
}


/* Pegando as imagens de gato da API */
async function imagensCat() {
  
  const catImg = await fetch("https://api.thecatapi.com/v1/images/search")
  .then((response) => response.json())
  .then((data) => data)
  .catch((err) => console.log("Erro de solicitação", err)); 

  return catImg[0].url;

}


function creatCardDog() {
  const li      = document.createElement('li');
  li.className  = 'pet__dog';

  const img     = document.createElement('img')
  img.className = 'dog_img';
  /*imagem padrão*/
  img.src = './src/img/dog.jpg'

  const button  = document.createElement('button');
  button.className = 'dog_button';

  button.innerText  = 'Get Dog'
  button.addEventListener('click', async () =>{
    return img.src = await imagensDog();
  });
  
  li.append(img, button);
  ulPet.appendChild(li);
}
creatCardDog();


async function creatCardCat() {
  const li      = document.createElement('li');
  li.className  = 'pet__cat';

  const img     = document.createElement('img')
  img.className = 'cat_img';
  /*imagem padrão*/
  img.src = "./src/img/cat.jpg"

  const button  = document.createElement('button');
  button.className = 'cat_button';

  button.innerText  = 'Get Cat';

  button.addEventListener('click', async () =>{
    img.src = await imagensCat();
  })
  
  li.append(img, button);
  ulPet.appendChild(li);
}
creatCardCat();