import React, { FC } from "react";
import styles from "./SectionWrapper.module.css";

interface ParentProps {
  children: JSX.Element[];
}

type Props = ParentProps;

const SectionWrapper: FC<Props> = ({ children }) => {
  const { container, wrapper } = styles;
  return (
    <section className={container}>
      <div className={wrapper}>{children}</div>
    </section>
  );
};

export default SectionWrapper;
