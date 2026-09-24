import "../styles/menuAcessibilidade.css";

function MenuAcessibilidade(){
    return(
        <>
<div>

<span aria-label="inicioDaPagina"> &nbsp;</span>

        <a href="#conteudoPrincipal" className="skipLink">
Ir para o conteúdo principal
</a>

<button id="btnAcessibilidade" aria-expanded="false">
<img src="./Símbolo acessibilidade.png" width="25" alt="Ícone de acessibilidade com uma figura humana estilizada formada por círculos azuis e linhas pretas."/>
</button>
<div id="menuAcessibilidade" hidden>
<button id="btnAumentarFonte" aria-label="Aumentar fonte">
Aumentar Fonte
</button>
<button id="btnDiminuirFonte" aria-label="Diminuir fonte">
Diminuir Fonte
</button>
<button id="btnAlterarContraste" aria-label="Auterar contraste">
Alterar Contraste
</button>
</div>
    </div>
    
        </>
    );
}

export default MenuAcessibilidade