//SCRIPT DA TELA INICIAL
const articles = [
    { title: "Como verificar alarme via putty", content: "Aqui estão os passos para verificar um alarme via putty...", link:"putty.html" },
    { title: "Como resetar o modem", content: "Para resetar o modem, siga os seguintes passos..." },
    { title: "Como configurar uma carga", content: "Este guia explica como configurar a carga do cliente..." },
    { title: "Sem sincronismo", content: "Para sem sincronismo, utilize esse guia", link: "sem-sincro.html", keywords: ["luz piscando lentamente", "HGU", "piscando", "sem conexão"] },
    { title: "Erro 3/9 TV", content: "Para corrigir o erro 3/9 você deve..."},
    { title: "Não efetua e nem recebe", content: "Se o seu cliente não efetua e nem recebe ligações, você deve..."}
];

document.getElementById('searchBox').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const resultsDiv = document.getElementById('results');
    
    if (query === "") {
        resultsDiv.innerHTML = "";
        return;
    }

    const results = articles.filter(article => article.title.toLowerCase().includes(query)
);
    
    resultsDiv.innerHTML = results.map(article => `
        <div class="result-item">
            <h3><a href="${article.link}">${article.title}</a></h3>
            <p>${article.content}</p>
        </div>
    `).join('');
});

//SCRIPT DA PÁGINA DO PUTTY

// Mostra opções relevantes para Vivo 1 ou Vivo 2
function toggleOptions(option) {
    const ontVivo1 = document.getElementById('ont-vivo1');
    const ontVivo2 = document.getElementById('ont-vivo2');
    
    ontVivo1.style.display = (option === 1) ? 'block' : 'none';
    ontVivo2.style.display = (option === 2) ? 'block' : 'none';
    
    resetIframes();
}

// Mostra Iframe selecionado e esconde outros
function showIframe(frameId) {
    resetIframes();
    document.getElementById(frameId).style.display = 'block';
    document.getElementById('toggleFullScreen').style.display = 'inline-block';
}

// Reseta iframes ao estado inicial
function resetIframes() {
    const iframes = document.querySelectorAll('iframe');
    iframes.forEach(iframe => iframe.style.display = 'none');
    document.getElementById('toggleFullScreen').style.display = 'none';
}

//Ativa tela cheia par ao ifrme e esconde menu
function toggleFullScreen() {
    const iframe = document.querySelector('iframe:not([style*="display: none"])');
    const region = document.querySelector('.region');
    
    if (iframe) {
        iframe.classList.toggle('fullscreen');
        if (iframe.classList.contains('fullscreen')) {
            region.style.display = 'none'; // esconde menu quando em tela cheia
        } else {
            region.style.display = 'block'; // mostra menu saindo da tela cheia
        }
    }
}
