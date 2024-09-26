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