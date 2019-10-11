import React, { FC, useState, FormEvent } from "react";
import Form from "../Form";
import FormInput from "../FormInput";
import FormButton from "../FormSubmitButton";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { loginUser } from "../../features/login/login-actions";
import { RootState } from "../../redux/root-reducer";
import { UserData } from "../../features/login/login-model";
import styles from "./LoginForm.module.css";

interface DispatchProps {
  login: (payload: UserData) => void;
}
type Props = DispatchProps;

const LoginForm: FC<Props> = ({ login }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const { email, password } = formData;

  const onChange = (e: FormEvent<HTMLInputElement>): void => {
    const { name, value } = e.currentTarget;
    setFormData({ ...formData, [name]: value });
  };
  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    login({ email, password });
  };

  const { redirect } = styles;
  return (
    <Form handleSubmit={onSubmit}>
      <FormInput
        name="E-mail"
        type="email"
        onChange={onChange}
        email={email}
        autocomplete="email"
      />
      <FormInput
        name="Password"
        type="password"
        onChange={onChange}
        email={password}
        autocomplete="current-password"
      />
      <FormButton text="Login" />
      <span className={redirect}>
        Not registered? <Link to="/registration">Register</Link>
      </span>
    </Form>
  );
};

const mapDispatchToProps = {
  login: loginUser
};

export default connect<{}, DispatchProps, {}, RootState>(
  null,
  mapDispatchToProps
)(LoginForm);
