import { useState } from "react";
import { useNavigate } from "react-router";

function useLogin(){
const [email, setEmail]= useState("");
const [senha, setSenha]= useState("");
const [mensagem, setMensagem]= useState("");

const navigate= useNavigate();
function realizarLogin(evento: any){
   evento.preventDefault();
   setMensagem("");
   if(email=="admin@gmail.com" && senha == "123456"){
setMensagem("Login realizado com sucesso")
localStorage.setItem("usuarioLogado", "Sim");
setTimeout(() => {
    navigate("/adm");
}, 1000);

   }else{
    setMensagem("E-mail ou senha incorreto");
   }
}

function realizarLogout(){
localStorage.removeItem("Usuário logado");
}

return(
{
    email,
    setEmail,
    senha,
setSenha,
mensagem,
setMensagem,
realizarLogin,
realizarLogout
}
    );
}
export default useLogin
