import React, { useState } from "react";

function useAdministrador(){
    const [nome, setNome]= useState("");
        const [email, setEmail]= useState("");
            const [senha, setSenha]= useState("");
                const [mensagem, setMensagem]= useState("");
         
function cadastrarAdministrador(evento: React.SubmitEvent<HTMLFormElement>){
evento.preventDefault();
const administrador= {nome,email, senha}

const listaAdministradores= JSON.parse(localStorage.getItem("ListaAdministradores") || "[]");
listaAdministradores.push(administrador);
localStorage.setItem("ListaAdministradores", JSON.stringify(listaAdministradores));
setMensagem("Cadastro realizado com sucesso")
}               

function buscarAdministradores(){
const listaAdministradores= JSON.parse(localStorage.getItem("listaAdministradores") || "[]");
return listaAdministradores;
    
}

function excluirAdministrador(email: string){
const listaAdministradores= buscarAdministradores()
const novaLista = listaAdministradores.filter(
   (administrador: any)=>{
administrador.email!=email
   } 
);
localStorage.setItem("listraAdministradores", JSON.stringify(novaLista))

}

    return(
{
    nome,
    setNome,
    email,
    setEmail,
    senha,
    setSenha,
    mensagem,
    setMensagem,
    cadastrarAdministrador,
    buscarAdministradores,
    excluirAdministrador
}
    );


}
export default useAdministrador