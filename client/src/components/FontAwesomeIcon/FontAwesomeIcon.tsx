import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface ParentProps {
  icon: IconProp;
}

type Props = ParentProps;

const AwesomeIcon: FC<Props> = props => <FontAwesomeIcon {...props} />;

export default AwesomeIcon;
