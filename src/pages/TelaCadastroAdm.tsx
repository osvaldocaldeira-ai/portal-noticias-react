import MenuAdm from "../components/MenuAdm";
import useAdministrador from "../hooks/useAdministrador";

function TelaCadastroAdm(){

const {mensagem, nome, setNome, email, setEmail, senha, setSenha, cadastrarAdministrador}= useAdministrador();

return(
    <>
    <MenuAdm/>
    <h1>
    Tela de Cadastro do Administrador 
    </h1>
    <main id="conteudoprincipal">

        <div id="divMensagem" role="alert">
{mensagem}

        </div>
    <form id="formCadAdm" onSubmit={cadastrarAdministrador}> 
        <div>
           <label htmlFor="txtNome">
            Digite seu Nome
            </label> 
                <br/>
<input
type="text"
    id="nome"
    required
    value={nome}
    onChange={(evento)=>{
setNome(evento.target.value)
    }
    }
/>
        </div>
<div>
    <label htmlFor="txtEmail">
Digite o seu email
    </label>
    <br/>
    <input 
    type="email"
    id="txtEmail"
    required
    value={email}
    onChange={(evento)=>{
setEmail(evento.target.value)
    }
    }
    />
</div>
<div>
    <label htmlFor="txtSenha">
Digite sua senha
    </label>
    <br/>
    <input
    type="password"
    id="txtSenha"
    required
    value={senha}
        onChange={(evento)=>{
setSenha(evento.target.value)
    }
        }
        />
</div>
<div>
    <button type="submit">
Enviar
    </button>
</div>
</form>    
    </main>
    </>
    );
}

export default TelaCadastroAdm