function validarCPF(cpf) {
  if (cpf.length !== 11) {
    return { valido: false, texto: "CPF deve ter 11 digitos." };
  } else {
    return { valido: true, texto: "" };
  }
}

function validarSenha(senha) {
  if (senha.length < 6 || senha.length > 18) {
    return { valido: false, texto: "Senha deve ter entre 6 e 18 digitos." };
  } else {
    return { valido: true, texto: "" };
  }
}

export { validarCPF, validarSenha };
