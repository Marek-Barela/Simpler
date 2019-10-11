import React, { FC, useState, FormEvent } from "react";
import Form from "../Form";
import FormInput from "../FormInput";
import FormButton from "../FormSubmitButton";
import FormRedirectLink from "../FormRedirectLink";
import { connect } from "react-redux";
import { loginUser } from "../../features/login/login-actions";
import { RootState } from "../../redux/root-reducer";
import { UserData } from "../../features/login/login-model";

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

  return (
    <Form handleSubmit={onSubmit}>
      <FormInput
        name="E-mail"
        type="email"
        onChange={onChange}
        value={email}
        autocomplete="email"
      />
      <FormInput
        name="Password"
        type="password"
        onChange={onChange}
        value={password}
        autocomplete="current-password"
      />
      <FormButton text="Login" />
      <FormRedirectLink
        text="Don't have account?"
        path="/registration"
        name="Register"
      />
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
