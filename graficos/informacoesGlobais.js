const url='https://raw.githubusercontent.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/refs/heads/Aula01/trabalho/trabalho-dados-gerais.json'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()

    const pessoasMundo = (dados.total_pessoas_mundo / 1e9).toFixed(1);
    const pessoasEmpregadas = (dados.total_pessoas_empregadas / 1e9)
    const taxaDesemprego = (dados.taxa_de_desemprego * 100)
    const horas = parseInt(dados.tempo_medio_trabalho_por_semana)
    const minutos = Math.round((dados.tempo_medio_trabalho_por_semana - horas) * 60)

    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `Você sabia que o mundo tem <span>${pessoasMundo}</span> bilhões de pessoas e que aproximadamente <span>${pessoasEmpregadas}</span> bilhões estão
    empregadas, sendo a taxa de desemprego de <span>${taxaDesemprego}</span> %. Por fim, por semana, trabalham em média <span>${horas}</span> horas e <span>${minutos}</span> minutos.`
    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo);
}

vizualizarInformacoesGlobais()