import React from "react";
import LanguageToken from "../../util/intl/Languages";
import style from "@/components/ability/ability.module.css";
import { handleMouseMove, handleMouseLeave } from "@/util/mouseHandlers"

interface AbilityProps {
  languageToken: LanguageToken;
  isAnimated: boolean,
  ability: {
    id: number;
    name: string;
    description: string;
    icon: string;
    effect: string;
  };
}

const Ability: React.FunctionComponent<AbilityProps> = ({ languageToken, isAnimated, ability }) => {


  return (
    <main
      className={`${style.container} ${ability.effect === "glow" ? style.glow : ""}`}
      {...(isAnimated ? { onMouseMove: handleMouseMove(20), onMouseLeave: handleMouseLeave } : {})}
    >
      <img src={ability.icon} width={50} height={50} alt={ability.name} className={style.icon} />
      <h2>{ability.name}</h2>
      <p>{ability.description}</p>
    </main>
  );
};

export default Ability;
