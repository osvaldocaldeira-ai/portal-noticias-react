import MenuAdm from "../components/MenuAdm";

function TelaCadastroAdm(){
return(
    <>
    <MenuAdm/>
    <h1>
    Tela de Cadastro do Administrador 
    </h1>
    <main id="conteudoprincipal">

        <div id="divMensagem" role="alert">


        </div>
    <form id="formLogin"> 
        <div>
           <label htmlFor="txtNome">
            Digite seu Nome
            </label> 
                <br/>
<input
type="nome"
    id="nome"
    required
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