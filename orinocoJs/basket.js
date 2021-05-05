const searchUrl = new URL (window.location.href); //Obtention de l'URL du produit consulté.
const searchId = searchUrl.searchParams.get("id"); //Obtention de l'id.


const myContainer = document.getElementById("myContainer");


        

myContainer.innerHTML =


`<article class="col-lg-6">
<a href="product.html?id=">
  <div class="card mb-3" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="" alt="">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title"></h5>
          <p class="card-text"></p>
          <p class="card-text">Prix:</p>
        </div>
      </div>
    </div>
  </div>
</a>
</article> `;



