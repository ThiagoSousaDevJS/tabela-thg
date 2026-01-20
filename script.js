// Função para transformar números em formato de dinheiro (R$)
function formatarMoeda(valor) {
    return valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
}

// Função para adicionar produtos a uma tabela específica
function adicionarProdutosATabela(tabelaId, produtos) {
    const tabelaBody = document.getElementById(tabelaId);
    if (!tabelaBody) return;

    tabelaBody.innerHTML = "";

    const margemPercentual = 0.30;

    produtos.forEach(prod => {
        const novoPrecoUn = prod.preco * (1 + margemPercentual);
        const novoPrecoFardo = prod.fardo * (1 + margemPercentual);

        const valorFardoFormatado =
            prod.fardo === 0 ? "-" : formatarMoeda(novoPrecoFardo);

        const row = `
            <tr>
                <td>${prod.cod}</td>
                <td>${prod.desc}</td>
                <td>${formatarMoeda(novoPrecoUn)}</td>
                <td>${valorFardoFormatado}</td>
            </tr>
        `;

        tabelaBody.innerHTML += row;
    });
}

// 🔥 FUNÇÃO PRINCIPAL DE CORREÇÃO
function codigoNumerico(cod) {
    return Number(cod);
}

// Função para organizar produtos por categoria
function organizarProdutosPorCategoria() {

    const categorias = {
        "produtos-skol": produtosDB.filter(p => {
            const c = codigoNumerico(p.cod);
            return c >= 100 && c <= 132;
        }),

        "produtos-brahma": produtosDB.filter(p => {
            const c = codigoNumerico(p.cod);
            return c >= 200 && c <= 222;
        }),

        "produtos-antarctica": produtosDB.filter(p => {
            const c = codigoNumerico(p.cod);
            return c >= 300 && c <= 319;
        }),

        "produtos-budweiser": produtosDB.filter(p => {
            const c = codigoNumerico(p.cod);
            return c >= 400 && c <= 410;
        }),

        "produtos-stella": produtosDB.filter(p => {
            const c = codigoNumerico(p.cod);
            return c >= 500 && c <= 510;
        }),

        "produtos-polar": produtosDB.filter(p => {
            const c = codigoNumerico(p.cod);
            return c >= 600 && c <= 607;
        }),

        "produtos-bohemia": produtosDB.filter(p => {
            const c = codigoNumerico(p.cod);
            return c >= 700 && c <= 711;
        }),

        "produtos-colorado": produtosDB.filter(p => {
            const c = codigoNumerico(p.cod);
            return c >= 800 && c <= 812;
        }),

        "produtos-patagonia": produtosDB.filter(p => {
            const c = codigoNumerico(p.cod);
            return c >= 900 && c <= 913;
        }),

        "produtos-outras-cervejas": produtosDB.filter(p => {
            const c = codigoNumerico(p.cod);
            return (
                (c >= 920 && c <= 963) ||
                c === 1070 ||
                (c >= 1071 && c <= 1075) ||
                c === 1076 ||
                (c >= 1077 && c <= 1081)
            );
        }),

        "produtos-barril-chopp": produtosDB.filter(p => {
            const c = codigoNumerico(p.cod);
            return c >= 8681 && c <= 8687;
        }),

        "produtos-guarana-antarctica": produtosDB.filter(p => {
            const c = codigoNumerico(p.cod);
            return c >= 11140 && c <= 11156;
        }),

        "produtos-pepsi": produtosDB.filter(p => {
            const c = codigoNumerico(p.cod);
            return c >= 12250 && c <= 12272;
        }),

        "produtos-fanta": produtosDB.filter(p => {
            const c = codigoNumerico(p.cod);
            return (
                (c >= 13370 && c <= 13393) ||
                (c >= 1004 && c <= 1062)
            );
        }),

        "produtos-coca-cola": produtosDB.filter(p => {
    const c = Number(p.cod);
    const d = p.desc.toUpperCase();

    return (
        (
            (c >= 1001 && c <= 1029) ||
            c === 1053 ||
            (c >= 1063 && c <= 1069)
        )
        && d.includes("COCA")
    );
}),


        "produtos-sukita": produtosDB.filter(p => {
            const c = codigoNumerico(p.cod);
            return c >= 14460 && c <= 14484;
        }),

        "produtos-h2oh": produtosDB.filter(p => {
            const c = codigoNumerico(p.cod);
            return c >= 15550 && c <= 15559;
        }),

        "produtos-tonica": produtosDB.filter(p => {
            const c = codigoNumerico(p.cod);
            return c >= 16660 && c <= 16674;
        }),

       
        "produtos-suco": produtosDB.filter(p => {
            const c = codigoNumerico(p.cod);
            return (
                (c >= 17760 && c <= 17783) ||
                (c >= 1137 && c <= 1142)
            );
        }),

        "produtos-agua": produtosDB.filter(p => {
            const c = codigoNumerico(p.cod);
            return (
                (c >= 18881 && c <= 18889) ||
                (c >= 1143 && c <= 1150)
            );
        }),

        "produtos-cha": produtosDB.filter(p => {
            const c = codigoNumerico(p.cod);
            return (
                (c >= 18890 && c <= 18896) ||
                (c >= 1126 && c <= 1136)
            );
        }),

        "produtos-gatorade": produtosDB.filter(p => {
            const c = codigoNumerico(p.cod);
            return c >= 19990 && c <= 19999;
        }),

        "produtos-energeticos": produtosDB.filter(p => {
            const c = codigoNumerico(p.cod);
            return (
                (c >= 55000 && c <= 55281) ||
                (c >= 1112 && c <= 1122)
            );
        }),

        "produtos-powerade": produtosDB.filter(p => {
            const c = codigoNumerico(p.cod);
            return c >= 1123 && c <= 1125;
        }),

        "produtos-vodka": produtosDB.filter(p => {
            const c = codigoNumerico(p.cod);
            return (
                (c >= 4420 && c <= 4437) ||
                c === 1088 ||
                c === 1089 ||
                (c >= 1095 && c <= 1099)
            );
        }),

        "produtos-cachaca": produtosDB.filter(p => {
            const c = codigoNumerico(p.cod);
            return c >= 4438 && c <= 4459;
        }),

        "produtos-gin": produtosDB.filter(p => {
            const c = codigoNumerico(p.cod);
            return c >= 4460 && c <= 4473;
        }),

        "produtos-licor": produtosDB.filter(p => {
            const c = codigoNumerico(p.cod);
            return (
                (c >= 4474 && c <= 4489) ||
                (c >= 1090 && c <= 1094)
            );
        }),

        "produtos-whisky": produtosDB.filter(p => {
            const c = codigoNumerico(p.cod);
            return (
                (c >= 4478 && c <= 4487) ||
                (c >= 1082 && c <= 1087)
            );
        }),

        "produtos-mikes": produtosDB.filter(p => {
            const c = codigoNumerico(p.cod);
            return c >= 7671 && c <= 7678;
        }),

        "produtos-schweppes": produtosDB.filter(p => {
            const c = codigoNumerico(p.cod);
            return c >= 1097 && c <= 1111;
        }),

        "produtos-balas-gomas": produtosDB.filter(p => {
            const c = codigoNumerico(p.cod);
            return c >= 1151 && c <= 1154;
        }),

        "produtos-jack-cola": produtosDB.filter(p => {
            const c = codigoNumerico(p.cod);
            return c === 1096;
        })
    };

    Object.keys(categorias).forEach(id => {
        if (categorias[id].length > 0) {
            adicionarProdutosATabela(id, categorias[id]);
        }
    });
}

// PDF
function gerarPDF() {
    const element = document.getElementById('catalogo');

    if (!element) {
        alert('Elemento #catalogo não encontrado');
        return;
    }

    // Clona o conteúdo para evitar bug de renderização
    const clone = element.cloneNode(true);
    clone.style.width = '297mm';
    clone.style.padding = '10mm';
    clone.style.background = '#fff';

    document.body.appendChild(clone);

    const opt = {
        margin: 0,
        filename: 'catalogo-thg-commerce.pdf',
        image: { type: 'jpeg', quality: 0.95 },
        html2canvas: {
            scale: 1.3,
            logging: false
        },
        jsPDF: {
            unit: 'mm',
            format: 'a4',
            orientation: 'landscape'
        }
    };

    html2pdf().set(opt).from(clone).save().then(() => {
        document.body.removeChild(clone);
    });
}


window.onload = function () {
    organizarProdutosPorCategoria();

    document.querySelector('.btn-print')?.addEventListener('click', () => window.print());
    document.querySelector('.btn-pdf')?.addEventListener('click', gerarPDF);
};
