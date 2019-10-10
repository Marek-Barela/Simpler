import React, { FC, useState, FormEvent } from "react";
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
  const { inputWrapper, formButton } = styles;
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
    <form onSubmit={e => onSubmit(e)}>
      <div className={inputWrapper}>
        <label htmlFor="email">E-mail</label>
        <input
          name="email"
          type="username"
          onChange={onChange}
          value={email}
          aria-label="E-mail"
          placeholder="E-mail"
        />
      </div>
      <div className={inputWrapper}>
        <label htmlFor="password">Password</label>
        <input
          name="password"
          type="password"
          onChange={onChange}
          value={password}
          aria-label="password"
          autoComplete="on"
          placeholder="Password"
        />
      </div>
      <button className={formButton} type="submit">
        Login
      </button>
    </form>
  );
};

const mapDispatchToProps = {
  login: loginUser
};

export default connect<{}, DispatchProps, {}, RootState>(
  null,
  mapDispatchToProps
)(LoginForm);
