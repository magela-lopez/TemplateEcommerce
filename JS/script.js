
var destacados =[

    {
        src: 'images/ProdutosDestacados/Destacado1.jpg',
        nome: 'Destacado 1',
        preco: 52
    },
    {
        src: 'images/ProdutosDestacados/Destacado2.jpg',
        nome: 'Destacado 2',
        preco: 60
    },
    {
        src: 'images/ProdutosDestacados/Destacado3.jpg',
        nome: 'Destacado 3',
        preco: 60
    },
    {
        src: 'images/ProdutosDestacados/Destacado4.jpg',
        nome: 'Destacado 4',
        preco: 60
    }
];

var prodNovidades =[

    {
        src: 'images/Novidades/Novidade1.jpg',
        nome: 'Novidade 1',
        preco: 52
    },
    {
        src: 'images/Novidades/Novidade2.jpg',
        nome: 'Novidade 2',
        preco: 60
    },
    {
        src: 'images/Novidades/Novidade3.jpg',
        nome: 'Novidade 3',
        preco: 60
    },
    {
        src: 'images/Novidades/Novidade4.jpg',
        nome: 'Novidade 4',
        preco: 60
    },
    {
        src: 'images/Novidades/Novidade5.jpg',
        nome: 'Novidade 5',
        preco: 52
    },
    {
        src: 'images/Novidades/Novidade6.jpg',
        nome: 'Novidade 6',
        preco: 52
    },
    {
        src: 'images/Novidades/Novidade7.jpg',
        nome: 'Novidade 7',
        preco: 52
    },
    {
        src: 'images/Novidades/Novidade8.jpg',
        nome: 'Novidade 8',
        preco: 52
    }
];

$(document).ready()

function renderProd(produtos, string) {
    var html = '';

    if(string == "destacados"){

        produtos.forEach(function(prodDest){
          html += `
            <div class="produtos">
              <img src="${prodDest.src}" id="imgProd" width="100%" height: "200px" />
              <button id="maisInfo" style="text-decoration: none; color: black;"><h4 id="nomeProd"><a href="DetalheProdutos.html">${prodDest.nome}</a></button>
              <p>R$${prodDest.preco}</p>
            </div>
          `;
        });
        $('#ProdDestacados').html(html);

    }else{
        produtos.forEach(function(prodDest){
          html += `
            <div class="prodNovidades">
              <img src="${prodDest.src}" id="imgProd" width="250px" height: "150px" />
              <a href="DetalheProdutos.html" id="maisInfor" style="text-decoration: none; color: black;"> <h4 id="nomeProd">${prodDest.nome}</h4></a>
              <p>R$${prodDest.preco}</p>
            </div>
          `;
        });
        $('#Novidade').html(html); 

    }

}

  $(function() {
        renderProd(destacados, "destacados");
        renderProd(prodNovidades, "Novidades");
  });




  
