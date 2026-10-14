import { Link } from "react-router";

function MenuAdm(){
return(
<>
<h1 className="destaque">
    Área administrativa
</h1>

<nav className="menu">
<p>
    <Link className="botao-menu" to="/telaCadastroAdm">
  Cadastro de Administradores  
    </Link>
    <Link className="botao-menu" to="/telaListaAdm">
    Lista de Administradores
    </Link>
</p>
</nav>
</>
);
}
export default MenuAdm