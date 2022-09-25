export const formValidate = () => {
    return {
        required: {
            value: true,
            message: "Campo obrigatório",
        },
        patternEmail: {
            value: /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/,
            message: "Formato de email incorreto",
        },
        minLength: {
            value: 6,
            message: "Mínimo de 6 caracteres",
        },
        validateTrim: {
            trim: (v) => {
                if (!v.trim()) {
                    return "Não seja 🤡, escreva algo";
                }
                return true;
            },
        },
        validateEquals(value) {
            return {
                equals: (v) => v === value || "As senhas não coincidem",
            };
        },
    };
};