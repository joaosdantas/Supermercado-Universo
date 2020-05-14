function acesso(form) {
    /*checa nome e senha - converter em letras minúsculas */

    form.email.value = form.email.value.toLowerCase()
    form.senha.value = form.senha.value.toLowerCase()

    if (form.email.value == "joao@gmail.com" && form.senha.value == "1@3mudar") {
        location = "Cadastrar.html"
    } else {
        form.email.value = ""
        form.senha.value = ""
        alert("Nome ou Senha incorretos!")
    }

}