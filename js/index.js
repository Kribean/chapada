function changeContent() {
  document.getElementById(
    "peche-change"
  ).innerHTML = `<p>Explorez le Mini Pantanal Marimbus d'une manière unique :</p>

  <p>Participez à une sortie de pêche traditionnelle au Tucunaré, une espèce emblématique de la région.</p>
  
  <p>Accompagné par le meilleur pêcheur de la communauté Quilombolo du Remanso, une communauté née de la mixité entre les esclaves en fuite des plantations et les populations autochtones régionales.</p>
  
  <p>Pendant cette expérience, plongez-vous dans l'écosystème nocturne où vous pourrez observer des oiseaux nocturnes. Avec un peu de chance, nous pourrons également observer des caïmans et d'autres animaux fascinants.</p>
  
  <p>En échangeant avec les membres de la communauté, découvrez leurs traditions, leur culture et les méthodes de pêche transmises depuis des générations.</p>
  
  <p>Cette expérience offre un regard authentique sur la vie nocturne et la pêche traditionnelle tout en soutenant la préservation du riche patrimoine culturel immatériel du Remanso.</p>
  `;
  document.getElementById("modalImage").src = "assets/img/peche.jpg";
  document.getElementById("paraPeche").innerText = "pêche nocturne";
}

function returnToNormal() {
  document.getElementById(
    "peche-change"
  ).innerHTML = `          <p>Explorez l'Histoire Vivante de la 
      Chapada Diamantina:</p>
      
      <p>Reconstitution du Travail des Chercheurs de Diamant
      Plongez dans le passé de la Chapada Diamantina avec une reconstitution immersive du travail des chercheurs de diamant. Découvrez leurs techniques, leurs outils et l'impact culturel de cette activité emblématique.
      </p>
      <p>Ce que vous découvrirez :
      </p>
      <ul class="list-disc m-4 ">
      <li>Histoire en Action : Vivez l'histoire authentique des chercheurs de diamant, comprenez leur rôle dans le tissu culturel régional.</li>
        <li> Patrimoine Vivant : Préservez ce patrimoine immatériel en explorant les traditions et les récits qui définissent l'identité de la Chapada Diamantina.
        </li>
      </ul>
      <p>Pourquoi vivre cette expérience :
      </p>
      <p>Une fenêtre ouverte sur le passé de la Chapada Diamantina. En participant, enrichissez la préservation du patrimoine tout en plongeant dans la diversité culturelle captivante de cette région.</p>
      `;
  document.getElementById("modalImage").src = "assets/img/tourisme-4.jpg";
  document.getElementById("paraPeche").innerText = "expérience Garimpeira";
}
