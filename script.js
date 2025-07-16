document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)

function validaFormulario(){
    if(document.getElementById("nome").value != "" && document.getElementById("email").value != "" && document.getElementById("telefone").value != ""){
    alert("Perfeito! Você receberá em breve as novidades no seu e-mail.")
    }else{
    alert("Por favor, preencha os campos nome e email e não esqueça o telefone ;) !")
    }
}

