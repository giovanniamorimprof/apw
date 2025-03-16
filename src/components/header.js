document.addEventListener("DOMContentLoaded", () => {
    console.log("Tentando carregar o header...");

    fetch("/src/components/header.html")
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro HTTP: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            const headerPlaceholder = document.getElementById("header-placeholder");
            if (headerPlaceholder) {
                headerPlaceholder.innerHTML = data;
                console.log("Header carregado com sucesso!");
            } else {
                console.error("Elemento #header-placeholder não encontrado no DOM!");
            }
        })
        .catch(error => console.error("Erro ao carregar o header:", error));
});
