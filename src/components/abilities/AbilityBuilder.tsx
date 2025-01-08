import React from "react";
import LanguageToken from "../../util/intl/Languages";
import style from "./abilitybuilder.module.css";
import Ability from "./ability/Ability";
import abilities from "@/data/abilities.json";
import { Award } from 'lucide-react'

interface AbilityBuilderProps {
  languageToken: LanguageToken;
  isAnimated: boolean;
}

const AbilityBuilder: React.FC<AbilityBuilderProps> = ({ languageToken, isAnimated }) => {

  return (
    <main className={style.container}>
      <span className={style.title}>
        <h1 className={style.abilitiesTitle}>{languageToken.getAbilitiesTitle()}</h1>
        <Award />
      </span>
      <div className={style.grid}>
        {abilities.map((ability) => (
          <Ability
            key={ability.id}
            languageToken={languageToken}
            isAnimated={isAnimated}
            ability={ability}
          />
        ))}
      </div>
    </main>
  );
};
export default AbilityBuilder;
