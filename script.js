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

    /*sei que está feio e redundante o código, porém fiz somente para demonstração, em caso do projeto ir adiante o código será mudado*/
    /*GAMBIARRA*/
    function mostraOpcao(){ 
        document.getElementsByClassName("ont")[1].style.display='none';
        document.getElementsByClassName("ont")[0].style.display='block';
        document.getElementById("vivo1").style.backgroundColor="#660099";
        document.getElementById("vivo1").style.color="white";
        document.getElementById("vivo1").style.borderRadius="3px";
        document.getElementById("vivo2").style.backgroundColor="white";
        document.getElementById("vivo2").style.color="black";
        document.getElementById("vivo2").style.borderRadius="none";
        document.getElementById("frameAlcatelv2").style.display='none';
        document.getElementById("frameHuaweiv2").style.display='none';
        document.getElementById("abreTela").style.display='none';
    }

    function mostraOpcao2(){
        document.getElementsByClassName("ont")[0].style.display='none';
        document.getElementsByClassName("ont")[1].style.display='block';
        document.getElementById("vivo2").style.backgroundColor="#660099";
        document.getElementById("vivo2").style.color="white";
        document.getElementById("vivo2").style.borderRadius="3px";
        document.getElementById("vivo1").style.backgroundColor="white";
        document.getElementById("vivo1").style.color="black";
        document.getElementById("vivo1").style.borderRadius="none";
        document.getElementById("frame7342v1").style.display='none';
        document.getElementById("frameAlcatelv1").style.display='none';
        document.getElementById("frameHuaweiv1").style.display='none';
        document.getElementById("abreTela").style.display='none';
    }

    function aumentaTela(){
        document.getElementsByClassName("region")[0].style.display='none';
        document.getElementById("abreTela").style.display='none';
        document.getElementById("fechaTela").style.display='block';
    }

    function diminuiTela(){
        document.getElementsByClassName("region")[0].style.display='block';
        document.getElementById("abreTela").style.display='block';
        document.getElementById("fechaTela").style.display='none';
    }

    //TUTO VIVO1
    function mostraIframe(){
        document.getElementById("frame7342v1").style.display='block';
        document.getElementById("frameAlcatelv1").style.display='none';
        document.getElementById("frameHuaweiv1").style.display='none';
        document.getElementById("7342v1").style.backgroundColor="#660099";
        document.getElementById("7342v1").style.color="white";
        document.getElementById("7342v1").style.borderRadius="3px";
        document.getElementById("alcatelv1").style.backgroundColor="white";
        document.getElementById("alcatelv1").style.color="black";
        document.getElementById("huaweiv1").style.backgroundColor='white';
        document.getElementById("huaweiv1").style.color='black';
        document.getElementsByClassName("material-symbols-outlined")[0].style.display='block';
    }

    function mostraIframe1(){
        document.getElementById("frameAlcatelv1").style.display='block';
        document.getElementById("frame7342v1").style.display='none';
        document.getElementById("frameHuaweiv1").style.display='none';
        document.getElementById("alcatelv1").style.backgroundColor="#660099";
        document.getElementById("alcatelv1").style.color="white";
        document.getElementById("alcatelv1").style.borderRadius="3px";
        document.getElementById("7342v1").style.backgroundColor="white";
        document.getElementById("7342v1").style.color="black";
        document.getElementById("huaweiv1").style.backgroundColor='white';
        document.getElementById("huaweiv1").style.color='black';
        document.getElementsByClassName("material-symbols-outlined")[0].style.display='block';
    }

    function mostraIframe2(){
        document.getElementById("frameHuaweiv1").style.display='block';
        document.getElementById("frame7342v1").style.display='none';
        document.getElementById("frameAlcatelv1").style.display='none';
        document.getElementById("huaweiv1").style.backgroundColor='#660099';
        document.getElementById("huaweiv1").style.color='white';
        document.getElementById("huaweiv1").style.borderRadius='3px';
        document.getElementById("7342v1").style.color='black';
        document.getElementById("7342v1").style.backgroundColor='white';
        document.getElementById("alcatelv1").style.color='black';
        document.getElementById("alcatelv1").style.backgroundColor='white';
        document.getElementsByClassName("material-symbols-outlined")[0].style.display='block';
    }

    //TUTO VIVO2

    function mostraIframe4(){
        document.getElementById("frameAlcatelv2").style.display='block';
        document.getElementById("frameHuaweiv2").style.display='none';
        document.getElementById("alcatelv2").style.backgroundColor="#660099";
        document.getElementById("alcatelv2").style.color="white";
        document.getElementById("alcatelv2").style.borderRadius="3px";
        document.getElementById("huaweiv2").style.backgroundColor='white';
        document.getElementById("huaweiv2").style.color='black';
        document.getElementsByClassName("material-symbols-outlined")[0].style.display='block';
    }

    function mostraIframe5(){
        document.getElementById("frameHuaweiv2").style.display='block';
        document.getElementById("frameAlcatelv2").style.display='none';
        document.getElementById("huaweiv2").style.backgroundColor='#660099';
        document.getElementById("huaweiv2").style.color='white';
        document.getElementById("huaweiv2").style.borderRadius='3px';
        document.getElementById("alcatelv2").style.color='black';
        document.getElementById("alcatelv2").style.backgroundColor='white';
        document.getElementsByClassName("material-symbols-outlined")[0].style.display='block';
    }
