import React, { FC, ChangeEvent } from "react";

interface ParentProps {
  color: string;
  handleChangeSelect: (event: ChangeEvent<HTMLSelectElement>) => void;
}

type Props = ParentProps;

const CreateProjectFormSelect: FC<Props> = ({ handleChangeSelect, color }) => {
  return (
    <>
      <label htmlFor="colors">Project color</label>
      <select name="colors" onChange={handleChangeSelect} value={color}>
        {colorOptions.map((option, index) => {
          const { value, name } = option;
          return (
            <option key={index} value={value} style={{ color: value }}>
              {name}
            </option>
          );
        })}
      </select>
    </>
  );
};

const colorOptions = [
  { value: "#B8255F", name: "Berry Red" },
  { value: "#DB4035", name: "Red" },
  { value: "#7ECC49", name: "Lime Green" },
  { value: "#299438", name: "Green" },
  { value: "#158FAD", name: "Teal" },
  { value: "#14AAF5", name: "Sky Blue" },
  { value: "#4073FF", name: "Blue" },
  { value: "#884DFF", name: "Grape" },
  { value: "#EB96EB", name: "Lavender" },
  { value: "#E05194", name: "Magenta" },
  { value: "#808080", name: "Charcoal" }
];

export default CreateProjectFormSelect;
