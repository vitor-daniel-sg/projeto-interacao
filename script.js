const ofertasAlugar = [
  {
    nome: 'Hyundai HB20 1.0',
    valor: 'R$ 1.450/mês',
    img: 'images/hyundai-hb20.jpg',
    alt: 'Hyundai HB20'
  },
  {
    nome: 'Fiat Mobi Easy',
    valor: 'R$ 1.390/mês',
    img: 'images/fiat-mobi-easy.jpg',
    alt: 'Fiat Mobi Easy'
  }
];

const ofertasComprar = [
  {
    nome: 'Chevrolet Onix 2019',
    valor: 'R$ 34.500',
    img: 'images/chevrolet-onix-2019.jpg',
    alt: 'Chevrolet Onix 2019'
  },
  {
    nome: 'Renault Kwid Zen 2020',
    valor: 'R$ 33.800',
    img: 'images/renault-kwid-zen-2020.jpg',
    alt: 'Renault Kwid Zen 2020'
  }
];

document.getElementById("formulario").addEventListener("submit", function (e) {
  e.preventDefault();
  const carro = +document.getElementById("valor-carro").value;
  const aluguel = +document.getElementById("valor-aluguel").value;
  const tempo = +document.getElementById("tempo-uso").value;
  const manutencao = +document.getElementById("manutencao").value;
  const seguro = +document.getElementById("seguro").value;
  const entrada = +document.getElementById("entrada").value;
  const financiamento = +document.getElementById("financiamento").value;
  const combustivel = +document.getElementById("combustivel").value;

  const custoAlugar = (aluguel + combustivel) * tempo;
  const custoComprar = entrada + financiamento * tempo + (manutencao + combustivel) * tempo + (seguro * (tempo / 12));

  const decisao = custoAlugar < custoComprar ? "Alugar" : "Comprar";
  const mensagem = `
    <div class="resultado-destaque">
      <i class="bi bi-graph-up-arrow"></i>
      Para o seu caso, recomenda-se <strong>${decisao}</strong>.<br>
      💰 <strong>Custo estimado Aluguel:</strong> R$ ${custoAlugar.toFixed(2)}<br>
      🚗 <strong>Custo estimado Compra:</strong> R$ ${custoComprar.toFixed(2)}
    </div>
  `;
  document.getElementById("mensagem").innerHTML = mensagem;
  document.getElementById("resultado").style.display = "block";

  renderiza(ofertasAlugar, "ofertas-alugar");
  renderiza(ofertasComprar, "ofertas-comprar");
});

function renderiza(ofertas, containerId) {
  const c = document.getElementById(containerId);
  c.innerHTML = "";
  ofertas.forEach((o) => {
    const col = document.createElement("div");
    col.className = "col-md-6";
    col.innerHTML = `
      <div class="card-offer p-3 h-100 text-center">
        <img src="${o.img}" alt="${o.alt}" class="offer-img mx-auto d-block" />
        <div class="card-body">
          <h3 class="h6">${o.nome}</h3>
          <p class="mb-1">${o.valor}</p>
        </div>
      </div>
    `;
    c.appendChild(col);
  });
}