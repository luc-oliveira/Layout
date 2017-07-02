dados = [
  {
    'empresa': 'Empresa A',
    'porcentagem': 10
  },
  {
    'empresa': 'Empresa B',
    'porcentagem': 20
  },
  {
    'empresa': 'Empresa C',
    'porcentagem': 20
  },
  {
    'empresa': 'Empresa D',
    'porcentagem': 40
  },
  {
    'empresa': 'Empresa E',
    'porcentagem': 10
  }
];

var criarGrafico = function() {
  var node = document.createElement("div");
  node.setAttribute("id", "node");
  node.style.height = "200px";

  var child = document.createElement("div");
  child.setAttribute("id", "child");
  child.style.height = "200px";
  child.style.margingTop = "50px";

  node.appendChild(child);

  for(var i=0; i < dados.length; i++){
    console.log(dados[i]);
    var dado = document.createElement("div");
    dado.style.width = "15px";
    dado.style.height = dados[i].porcentagem+"%";
    dado.style.backgroundColor = "grey";
    dado.style.display = "inline-block";
    dado.style.margin = "5px";

    child.appendChild(dado);
  }

  var span = document.createElement("span");
  span.style.display = "block"
  span.textContent = "Clique na barra acima para detalhar cada um dos lances"

  child.appendChild(span);

  document.getElementById("grafico").appendChild(node);
}
