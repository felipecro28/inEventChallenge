function apertarBotao() {
  const nome = document.querySelector("#inputNome").value
  encurtaNome(nome)


}

function encurtaNome(nomeDaPessoa) {
  const nomeAbreviado = document.querySelector('#inputNomeAbreviado')
  const nome = document.querySelector("#inputNome").value
  let tamanho = nomeDaPessoa.length
  const nomeCompleto = nomeDaPessoa.split(" ")
  let nomeImpresso = ""
  for (let x = nomeCompleto.length - 1; x >= 0; x--) {
    if (tamanho >= 13) {
      const abreviado = nomeCompleto[x].substring(0, 1) + "."
      const descartado = nomeCompleto[x].slice(1)
      tamanho = tamanho - descartado.length
      nomeCompleto[x] = abreviado
    }
  }
  nomeImpresso += nomeCompleto
  nomeImpresso = nomeImpresso.replace(/,/g, " ")
  nomeAbreviado.value = nomeImpresso
}