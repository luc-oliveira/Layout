dados = [
  [
    {'empresa': 'Empresa A', 'porcentagem': 10},
    {'empresa': 'Empresa B', 'porcentagem': 20},
    {'empresa': 'Empresa C', 'porcentagem': 30},
    {'empresa': 'Empresa D','porcentagem': 40},
    {'empresa': 'Empresa E','porcentagem': 50},
    {'empresa': 'Empresa A', 'porcentagem': 60},
    {'empresa': 'Empresa B', 'porcentagem': 70},
    {'empresa': 'Empresa C', 'porcentagem': 80},
    {'empresa': 'Empresa D','porcentagem': 90},
    {'empresa': 'Empresa D','porcentagem': 100}
  ],
  [
    {'empresa': 'Empresa A', 'porcentagem': 40},
    {'empresa': 'Empresa B', 'porcentagem': 15},
    {'empresa': 'Empresa C', 'porcentagem': 65}
  ],
  [
    {'empresa': 'Empresa A', 'porcentagem': 13},
    {'empresa': 'Empresa B', 'porcentagem': 12 }
  ],
  [
    {'empresa': 'Empresa A', 'porcentagem': 14},
    {'empresa': 'Empresa B', 'porcentagem': 13},
    {'empresa': 'Empresa C', 'porcentagem': 13},
    {'empresa': 'Empresa D', 'porcentagem': 12}
  ]
]




var criarGrafico = function(id, dataset) {
  var node = document.createElement("div");
  node.setAttribute("id", "node");
  node.style.height = "200px";

  var child = document.createElement("div");
  child.setAttribute("id", "child");
  child.style.height = "200px";
  child.style.position = "relative";
  //child.style.margingTop = "50px";

  node.appendChild(child);

  var barraInferior = document.createElement("span");
  barraInferior.style.display = "block"
  barraInferior.style.clear = "both";

  for(var i=0; i < dataset.length; i++){
    console.log(dataset[i]);

    var main = document.createElement("div");
    main.style.height = "100%";
    main.style.width = "5%";
    main.style.float = "left";
    main.style.margin = "0% 1%";
    main.style.position = "relative";

    var agrupador = document.createElement("div");
    //agrupador.style.display = "inline";
    agrupador.style.height = "80%";
    agrupador.style.width = "100%";
    agrupador.style.float = "left";
    agrupador.style.margin = "0% 1%";
    agrupador.style.position = "relative";
    
    var percents = document.createElement("span");
    percents.style.position = "absolute";
    percents.style.bottom=dataset[i].porcentagem-10+"%";
    percents.style.left="0%";
    percents.style.margin = "1%";
    percents.innerHTML = dataset[i].porcentagem+"%";
    agrupador.appendChild(percents);


    var colunaGrafico = document.createElement("div");
    colunaGrafico.style.width = "100%";
    colunaGrafico.style.height = dataset[i].porcentagem+"%";
    //colunaGrafico.style.background = "linear-gradient(0deg, #D3D3D3 " + dataset[i].porcentagem + "%" + ", white " + 0 + "%)";
    colunaGrafico.style.background = "linear-gradient(0deg, #D3D3D3 100%" + ", white " + 0 + "%)";
    colunaGrafico.style.display = "inline-block";
    colunaGrafico.style.display = "inline-block";
    colunaGrafico.style.margin = "1%";
    colunaGrafico.style.cursor = "pointer";
    colunaGrafico.style.position = "absolute";
    colunaGrafico.style.bottom="-10%";
    colunaGrafico.style.left="0%";
    agrupador.appendChild(colunaGrafico);

    var contador = document.createElement("span");
    contador.style.position = "absolute";
    contador.style.bottom="-20%";
    contador.style.left="0%";
    contador.style.margin = "1%";
    contador.innerHTML = dataset[i].porcentagem * 100;
    agrupador.appendChild(contador);

    var copiaCount = i;
    var posicao = document.createElement("div");
    posicao.style.width = "5%";
    posicao.style.display = "inline-block";
    posicao.style.margin = "1%";
    posicao.textContent = ++copiaCount + "º";

    barraInferior.appendChild(posicao);
    main.appendChild(agrupador);
    child.appendChild(main);
  }

  var span = document.createElement("span");
  span.style.display = "block";
  span.textContent = "Clique na barra acima para detalhar cada um dos lances";

  child.appendChild(barraInferior);
  child.appendChild(span);

  document.getElementById(id).appendChild(node);
}
