import React, { FC, useState, FormEvent } from "react";
import Form from "../Form";
import FormInput from "../FormInput";
import FormButton from "../FormSubmitButton";
import FormRedirectLink from "../FormRedirectLink";
import { connect } from "react-redux";
import { registerUser } from "../../features/register/register-actions";
import { RootState } from "../../redux/root-reducer";
import { UserData } from "../../features/register/register-model";

interface DispatchProps {
  register: (payload: UserData) => void;
}

type Props = DispatchProps;

const RegistrationForm: FC<Props> = ({ register }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });
  const { username, email, password } = formData;

  const onChange = (e: FormEvent<HTMLInputElement>): void => {
    const { name, value } = e.currentTarget;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const options = { name: username, email, password };
    register(options);
  };

  return (
    <Form handleSubmit={onSubmit}>
      <FormInput
        name="Username"
        type="username"
        onChange={onChange}
        value={username}
        autocomplete="off"
      />
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
        autocomplete="new-password"
      />
      <FormButton text="Register" />
      <FormRedirectLink text="Already Registred?" path="/login" name="Login" />
    </Form>
  );
};

const mapDispatchToProps = {
  register: registerUser
};

export default connect<{}, DispatchProps, {}, RootState>(
  null,
  mapDispatchToProps
)(RegistrationForm);
