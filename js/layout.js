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
  //child.style.margingTop = "50px";

  node.appendChild(child);

  var barraInferior = document.createElement("span");
  barraInferior.style.display = "block"

  for(var i=0; i < dataset.length; i++){
    console.log(dataset[i]);
    var dado = document.createElement("div");
    dado.style.width = "5%";
    dado.style.height = "60%";
    dado.style.background = "linear-gradient(0deg, #D3D3D3 " + dataset[i].porcentagem + "%" + ", white " + 0 + "%)";
    dado.style.display = "inline-block";
    dado.style.margin = "1%";
    dado.style.cursor = "pointer";

    var copiaCount = i;
    var posicao = document.createElement("div");
    posicao.style.width = "5%";
    posicao.style.display = "inline-block";
    posicao.style.margin = "1%";
    posicao.textContent = ++copiaCount + "º";

    barraInferior.appendChild(posicao);
    child.appendChild(dado);
  }

  var span = document.createElement("span");
  span.style.display = "block"
  span.textContent = "Clique na barra acima para detalhar cada um dos lances"

  child.appendChild(barraInferior);
  child.appendChild(span);

  document.getElementById(id).appendChild(node);
}
