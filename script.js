// Função para transformar números em formato de dinheiro (R$)
function formatarMoeda(valor) {
    return valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
}

// Função que aplica a margem fixa de 30% e preenche a tabela
function carregarCatalogo() {
    // Definimos a margem de 30% diretamente no código (0.30)
    const margemPercentual = 0.30; 
    const corpoTabela = document.getElementById('corpo-tabela');
    
    // Verifica se a tabela existe na página antes de continuar
    if (!corpoTabela) return;

    // Limpa a tabela antes de preencher
    corpoTabela.innerHTML = ""; 

    // 'produtosDB' vem do seu arquivo produtos.js
    produtosDB.forEach(prod => {
        // Cálculo dos novos preços com a margem fixa
        const novoPrecoUn = prod.preco * (1 + margemPercentual);
        const novoPrecoFardo = prod.fardo * (1 + margemPercentual);

        const row = `<tr>
            <td>${prod.cod}</td>
            <td>${prod.desc}</td>
            <td>${formatarMoeda(novoPrecoUn)}</td>
            <td>${formatarMoeda(novoPrecoFardo)}</td>
        </tr>`;
        
        corpoTabela.innerHTML += row;
    });
}

// Executa o carregamento assim que a página termina de abrir
window.onload = function() {
    carregarCatalogo();
};