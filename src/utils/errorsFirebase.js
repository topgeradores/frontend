export const errorsFirebase = (error) => {
    switch (error.code) {
        case "auth/email-already-in-use":
            return { code: "email", message: "Usuário já registrado" };

        case "auth/invalid-email":
            return { code: "email", message: "Formato email inválido" };

        case "auth/invalid-email-verified":
            return { code: "email", message: "O email não está verificado" };

        case "auth/invalid-password":
            return {
                code: "password",
                message: "Senha mínima de 6 caracteres",
            };

        case "auth/user-not-found":
            return { code: "email", message: "Usuário não registrado" };

        case "auth/wrong-password":
            return { code: "password", message: "Senha incorrecta" };

        default:
            return { code: "email", message: "Error, tente mais tarde" };
    }
};