import React from "react";
import LanguageToken from "../../../util/intl/Languages";
import style from "./ability.module.css";
import { handleMouseMove, handleMouseLeave } from "@/util/mouseHandlers"
import Image from "next/image";

interface AbilityProps {
  languageToken: LanguageToken;
  isAnimated: boolean,
  ability: {
    id: number;
    name: string;
    description: string;
    icon: string;
    mastery: string;
  };
}

const Ability: React.FunctionComponent<AbilityProps> = ({ isAnimated, ability }) => {


  return (
    <main
      className={`${style.container} ${ability.mastery === "glow" ? style.glow : ""}`}
      {...(isAnimated ? { onMouseMove: handleMouseMove(40), onMouseLeave: handleMouseLeave } : {})}
    >
      <Image src={ability.icon} width={50} height={50} alt={ability.name} className={style.icon} />
      <h2>{ability.name}</h2>
      <p>{ability.description}</p>
    </main>
  );
};

export default Ability;
