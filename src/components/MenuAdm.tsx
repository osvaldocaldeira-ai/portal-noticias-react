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
  Cadastro de Administrador  
    </Link>
</p>
</nav>
</>
);
}
export default MenuAdm