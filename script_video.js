// Função para trocar o vídeo principal ao clicar nas sugestões
function playVideo(event, videoSource) {
    event.preventDefault(); // Evita que o link abra o vídeo em uma nova página
    const videoPlayer = document.getElementById('main-video');
    const videoSourceElement = document.getElementById('main-video-source');
    
    // Atualiza a fonte do vídeo e recarrega
    videoSourceElement.src = videoSource;
    videoPlayer.load();  // Recarrega o vídeo com a nova fonte
    videoPlayer.play();  // Reproduz o vídeo
}

// Função de pesquisa
function searchVideo() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const suggestions = document.querySelectorAll('.video-suggestions a');
    
    let found = false; // Flag para verificar se o vídeo foi encontrado

    // Loop por todos os vídeos sugeridos
    suggestions.forEach(suggestion => {
        const keywords = suggestion.getAttribute('data-keywords').toLowerCase();
        if (keywords.includes(query)) {
            const videoSource = suggestion.getAttribute('href');
            playVideo(event, videoSource);  // Usa a função playVideo para trocar o vídeo
            found = true; // Vídeo encontrado
        }
    });

    if (!found) {
        alert('Vídeo não encontrado.');
    }
}
