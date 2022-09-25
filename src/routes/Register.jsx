import { useContext } from "react";
import { UserContext } from "../context/UserProvider";
import { errorsFirebase } from "../utils/errorsFirebase";
import { formValidate } from "../utils/formValidate";

import { FormAlert } from "../components/FormAlert";
import { FormInput } from "../components/FormInput";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export const Register = () => {
    const navegate = useNavigate();
    const { registerUser } = useContext(UserContext);
    const { required, patternEmail, minLength, validateTrim, validateEquals } = formValidate();

    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues,
        setError,
    } = useForm({
        defaultValues: {
            email: "",
            password: "",
            repassword: "",
        },
    });

    const onSubmit = async ({ email, password }) => {
        try {
            await registerUser(email, password);
            navegate("/");
        } catch (error) {
            const { code, message } = errorsFirebase(error);
            setError(code, { message });
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="hv-center-v88 bg-light">
                    <div className="card" style={{ width: '325px' }}>
                        <div className="card-body">
                            <div className="card-title text-center">
                                <i className="ph-user-circle-plus" style={{ fontSize: 54, color: 'blue' }}></i>
                                <h3>Novo Usuário</h3>
                            </div>
                            <div className="card-text">
                                <div className="mb-3">
                                    <FormInput
                                        type="email"
                                        placeholder="Insira um email"
                                        {...register("email", {
                                            required,
                                            pattern: patternEmail,
                                        })}
                                    >
                                        <FormAlert error={errors.email} />
                                    </FormInput>

                                    <FormInput
                                        type="password"
                                        placeholder="Insira a senha"
                                        {...register("password", {
                                            minLength,
                                            validate: validateTrim,
                                        })}
                                    >
                                        <FormAlert error={errors.password} />
                                    </FormInput>

                                    <FormInput
                                        type="password"
                                        placeholder="Repita a senha"
                                        {...register("repassword", {
                                            validate: validateEquals(getValues("password")),
                                        })}
                                    >
                                        <FormAlert error={errors.repassword} />
                                    </FormInput>
                                    <div className="text-center">
                                        <button className="btn btn-outline-primary" type="submit">Registrar</button>
                                        <Link className="btn btn-outline-secondary ms-2" to="/">Cancelar</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};
