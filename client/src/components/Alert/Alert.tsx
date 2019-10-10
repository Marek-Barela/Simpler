import React, { FC } from "react";
import { connect } from "react-redux";
import { getAlertMessages } from "./Alert-selector";
import { RootState } from "../../redux/root-reducer";
import { Alert } from "./Alert-model";
import styles from "./Alert.module.css";

interface StateProps {
  alertMessages: Alert[];
}

type Props = StateProps;

const AlertMessage: FC<Props> = ({ alertMessages }) => {
  const { wrapper, alertItem } = styles;
  return (
    <div className={wrapper}>
      {alertMessages.map((alert, index) => (
        <div className={alertItem} key={index}>
          {alert.msg}
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  alertMessages: getAlertMessages(state)
});

export default connect<StateProps, {}, {}, RootState>(
  mapStateToProps,
  {}
)(AlertMessage);
