import { useEffect } from "react";
import { useNavigate } from "react-router";

function Adm(){

const navigate= useNavigate();
useEffect(()=>{
const usuarioLogado= localStorage.getItem("usuário logado");
if(usuarioLogado!="sim"){
navigate("/login")
}
}, []);

return(
<>
<h1 className="destaque">
    Área administrativa
</h1>
<main id="conteudoPrincipal">
<p>
    Em breve será exibido o conteúdo da área administrativa
</p>
</main>



</>
)
;

}
export default Adm