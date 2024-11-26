import { getCSS} from "./common.js"

async function empregos() {
    const url = 'https://raw.githubusercontent.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/refs/heads/Aula01/trabalho/trabalho-tipos-de-ocupacao.json'
    const res = await fetch(url)
    const dados = await res.json()
    const nomeX = Object.keys (dados)
    const empregos = Object.values (dados)

    const data = [
        {
            labels: nomeX,
            values: empregos,
            type: 'pie',
            marker: { 
              colors: ['#ff7f0e', '#1f77b4', '#2ca02c', '#d62728', '#9467bd', '#8c564b', '#e377c2', '#7f7f7f', '#bcbd22', '#17becf'] 
            }
        }
    ]

    const layout = 
    {
      plot_bgcolor: getCSS('--bg-color'),
      paper_bgcolor: getCSS('--bg-color'),
      title: {
        text: 'Tipos de Ocupações (Trabalhos) pelo Mundo',
        font:{
            color: getCSS('--secundary-color'),
            family: getCSS('--font'),
            size: 28
        }
      },
      legend: { 
        font: { 
          color: getCSS('--secundary-color'),
          family: getCSS('--font'), 
          size: 16
        }
      },
      height: 600,
      width: 870
  }

        const grafico = document.createElement('div')
        grafico.className = 'grafico'
        document.getElementById('graficos-container').appendChild(grafico)

        Plotly.newPlot(grafico, data, layout)
        
}

empregos()