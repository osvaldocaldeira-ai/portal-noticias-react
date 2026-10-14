import MenuAdm from "../components/MenuAdm";
import useAdministrador from "../hooks/useAdministrador";

function TelaListaAdm(){

const {buscarAdministradores}= useAdministrador();
const listaAdministradores= buscarAdministradores();

    return(

<>

<h1 >
Tela de Listagem de Administrador
</h1>

<main id="conteudoPrincipal">
<MenuAdm/>
<table>

    <thead>

    <tr>
        <th>
            Nome
        </th>
        <th>
            E-mail
        </th>
    </tr>
    </thead>
    <tbody>
        {
            listaAdministradores.map(
                (administrador: any)=>(
<tr>
    <td>
        {administrador.nome}
    </td>
    <td>
        {administrador.email}
    </td>
</tr>
                )
            )
                    }
    </tbody>

</table>
</main>



</>

    );
}
export default TelaListaAdm