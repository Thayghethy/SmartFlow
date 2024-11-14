//SCRIPT DA TELA INICIAL
const articles = [
    { title: "Como verificar alarme via putty", content: "Aqui estão os passos para verificar um alarme via putty.", link:"putty.html" },
    { title: "Como converter Slot e porta em Cabo e Primária via Helper", content: "Para converter Slot e porta em Cabo e Primária via Helper, siga os seguintes passos.", link:"convert_helper.html" },
    { title: "Como converter Slot e porta em Cabo e Primária via Sigres", content: "Para converter Slot e porta em Cabo e Primária via Sigres", link:"convert_sigres.html" },
    /*{ title: "Sem sincronismo", content: "Para sem sincronismo, utilize esse guia", link: "sem-sincro.html", keywords: ["luz piscando lentamente", "HGU", "piscando", "sem conexão"] },*/
    { title: "Para converter Slot e porta em SPlitter via TBS", content: "Para converter Slot e porta em SPlitter via TBS, siga os seguintes passos.", link: "convert_tbs.html"},
    { title: "Como realizar manobra de Vivo 1 via CPQD", content: "Para realizar manobra de Vivo 1 via CPQD, siga esse passo a passo.", link: "manobra_v1.html"},
    { title: "Como realizar mudança de RIN e Armário no TBS", content: "Para realizar a troca de RIN ou armário no TBS, siga esse passo a passo.", link: "convert_rin.html"},
    { title: "Básico - Web Radius", content: "Tutorial básico Web Radius", link:"tuto_webradius.html" },
    { title: "Consultar linha via SPG", content: "Como consultar registro da linha via spg", link:"ConsultaLinha.html" },
    { title: "Validação de Portabilidade ITX", content: "Como consultar Validação de Portabilidade ITX", link:"valid_port_itx.html" },
    { title: "Atualização de procedimento - Manobra reparo", content: "Detalhamento do processo de manobra primária em Reparo", link:"manobra_reparo.html" },
    { title: "Como consultar a LAN HOST - HDM", content: "Como consultar a LAN HOST - HDM", link:"consultalanhost.html" },
    { title: "Abertura de ITX Vivo 1", content: "Como realizar a abertura de uma ITX Vivo 1", link:"itx_v1.html" },
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

//Botão Home

function home(){
    window.location.href = "index.html";
}

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
    document.getElementById('cards').style.display = 'flex';
    document.getElementById('cardTitulo').style.display = 'block';
    document.getElementById('toggleFullScreen').style.display = 'inline-block';
}

// Reseta iframes ao estado inicial
function resetIframes() {
    const iframes = document.querySelectorAll('iframe');
    iframes.forEach(iframe => iframe.style.display = 'none');
    document.getElementById('cards').style.display = 'none';
    document.getElementById('cardTitulo').style.display = 'none';
    document.getElementById('toggleFullScreen').style.display = 'none';
}

//Ativa tela cheia par ao ifrme e esconde menu
function toggleFullScreen() {
    const iframe = document.querySelector('iframe:not([style*="display: none"])');
    const region = document.querySelector('.region');
    
    if (iframe) {
        iframe.classList.toggle('fullscreen');
        if (iframe.classList.contains('fullscreen')) {
            document.getElementById('cards').style.display = 'none';
            document.getElementById('cardTitulo').style.display = 'none';
            region.style.display = 'none'; // esconde menu quando em tela cheia
        } else {
            region.style.display = 'block'; // mostra menu saindo da tela cheia
            document.getElementById('cards').style.display = 'flex';
            document.getElementById('cardTitulo').style.display = 'block';
        }
    }
}

function caboPrimariaHelper() {
    window.location.href = "convert_helper.html";
}

function alarmePutty() {
    window.location.href = "putty.html";
}

function sigres() {
    window.location.href = "convert_sigres.html"
}

function manobraV1() {
    window.location.href = "manobra_v1.html"
}

function tbs() {
    window.location.href = "convert_tbs.html"
}

function webradius() {
    window.location.href = "tuto_webradius.html"
}


function webradius() {
    window.location.href = "consultalinha.html"
}

function videos() {
    /*window.location.href = "videos.html"*/
    window.alert("Desculpe, essa funcionalidade ainda está em desenvolvimento.")
}

function jornal() {
    window.location.href = "jornal.html"
    /*window.alert("Desculpe, essa funcionalidade ainda está em desenvolvimento.")*/
}