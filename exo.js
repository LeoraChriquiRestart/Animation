
// Je récupère mon Sonic de mon HTML
const container = document.getElementById("container");
const sonic = document.getElementById("sonic");

// J'écoute le click pour faire bouger le ou les Sonics
sonic.addEventListener("click", function() {
  // Je crée une nouvelle image de Sonic identique à la précédente quand je lui clique dessus
  const newSonic = document.createElement("img");
  newSonic.setAttribute("src", "pngegg.png");
  // Je définie où se place le Sonic sur l'écran
  newSonic.style.position = "absolute";
  newSonic.style.top = "50%";
  newSonic.style.left = "50%";
  newSonic.style.cursor = "pointer";
  //Je crée l'image et je la mets dans mon container
  container.appendChild(newSonic);

// Je crée une nouvelle fonction "mouvement", qui a pour paramètres l'image de mon Sonic à faire bouger et sa vitesse de déplacement, pour faire en sorte que mon Sonic bouge de manière aléatoire
function mouvement(img, speed) {
  //Je crée des constantes qui vont me permettre de créer des nombres aléatoires pour modifier la postion de mes images par la suite (J'ai trouvé ces fonctions sur internet pour trouver comment bouger aléatoirement une image)
  const randomX = Math.floor(Math.random() * (container.clientWidth - img.clientWidth));
  const randomY = Math.floor(Math.random() * (container.clientHeight - img.clientHeight));
  //J'applique mes valeurs précédentes à top et left pour que mes images bougent aléatoirement en leur rajoutant des pixels avec + "px"
  img.style.top = randomY + "px";
  img.style.left = randomX + "px";
  //J'applique la fonction setTimeout pour faire en sorte que mon animation se répète à interval régulier
  setTimeout(function() { mouvement(img, speed) }, speed);
  
  
  
  // Je limite la taille maximale et minimale de Sonic (sinon une image énorme vient couvrir le reste des images et on ne voit plus le fond)
  const maxSize = 200;
  const minSize = 100;
  // Je crée une variable qui fait en sorte de prendre une valeur présente entre 100 et 200px et je l'applique à la taille de mes images
  const randomSize = Math.floor(Math.random() * (maxSize - minSize)) + minSize;
  img.style.width = randomSize + "px";
  img.style.height = randomSize + "px";

}

// Je lance l'animation de l'image de Sonic présente au tout début (la 1ère) et je lui donne une vitesse
mouvement(sonic, 1000);

// Je lance cette fois ci les animations des nouvelles images de Sonic en lui donne une vitesse différente de l'originale
mouvement(newSonic, 500);
});

// J'ajoute une nouvelle constante qui contient les couleurs de mon fond
const colors = ["red", "blue", "green", "yellow", "purple"];
let Index = 0;

// Je crée une boucle qui change la couleur de mon fond  grâce aux couleurs de "colors" 
colors.forEach((color, index) => {
  setTimeout(() => {
    container.style.backgroundColor = color;
    Index = Index + 1;
  }, index * 2000);
});




