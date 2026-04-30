import { useContext } from "react";
import Notepad from "../../components/Notepad";
import { ObjectivesJson } from "../../components/ObjectivesJson";
import { Color } from "../../components/WordPicker";
import TabContentBase from "../TabContentBase";
import styles from "./Recipe.module.css";
import { StageContext } from "../../components/StageContext";
import { ObjectivesContext, ProgressKeys } from "../../components/ObjectivesContext";

export default function Recipe() {
  const evidence = (
    <div className={styles.recipeParent}>
      <div className={styles.recipeHeader}>
        <h2>THE ELIXIR OF OBLIVION</h2>
      </div>
      <div>Ingredients:</div>
      <ol>
        <li>A tuft of fur from a small mammalian</li>
        <li>A feather of waterfowl</li>
        <li>A fistful of sodium compound</li>
        <li>A drop of concentrated liquid energy</li>
        <li>Petals from a sun-like flower</li>
      </ol>
      <div>Procedure:</div>
      <ol>
        <li>Burn both the animal fur and feather until nothing but ash is left.</li>
        <li>
          Prepare your cauldron by placing it over your heating implement. Surround the cauldron
          with fae dust.
        </li>
        <li>Stir ashes and rest of materials in a cauldron of boiling water for 3 hours.</li>
        <li>
          Every hour (totaling three times), recite Grimm&apos;s incantation. Amendment 3 is
          recommended.
        </li>
      </ol>
      <div>
        This elixir allows experienced practicioners to glimpse into the Realm of Oblivion. For the
        those not molded enough by the practice, the elixir has no effect. It is best to drink this
        elixir as a group, as those entering the Realm may need to enlist allies to help combat
        whatever entities they may encounter.
      </div>
    </div>
  );

  const objectives: ObjectivesJson = {
    heading: "The Elixir of Oblivion",
    sections: [
      {
        title: "Who brewed the Elixir of Oblivion?",
        questions: [
          {
            question: "",
            answer: "Andrew Wolfe",
            color: Color.ORANGE,
          },
        ],
      },

      {
        title: "Identity each ingredient in the Elixir of Oblivion:",
        questions: [
          {
            question: "Animal fur",
            answer: "Cat",
            answers: ["Cat", "Dog", "Gerbil", "Rabbit", "Fox", "Beaver"],
            color: Color.ORANGE,
          },
          {
            question: "Bird feather",
            answer: "Duck",
            answers: ["Goose", "Duck", "Pigeon", "Swan", "Parrot"],
            color: Color.ORANGE,
          },
          {
            question: "Sodium Compound",
            answer: "Chile Saltpeter",
            answers: ["Salt", "Fertilizer", "Baking Soda", "Bleach", "Chile Saltpeter"],
            color: Color.ORANGE,
          },
          {
            question: "Liquid energy",
            answer: "Energy Drink",
            answers: ["Tea", "Coffee", "Energy Drink"],
            color: Color.ORANGE,
          },
          {
            question: "Flower",
            answer: "Chamomile",
            answers: [
              "Sunflower",
              "Daisy",
              "Chamomile",
              "Purple Orchid",
              "Yellow Rose",
              "Chrysanthemum",
            ],
            color: Color.ORANGE,
          },
        ],
      },
    ],
  };
  const STAGE_UNLOCKED = 3;

  const { currentStage, setStage } = useContext(StageContext);
  const { setProgress } = useContext(ObjectivesContext);
  const onCorrect = () => {
    setProgress(ProgressKeys.RECIPE, true);
    if (currentStage === STAGE_UNLOCKED) {
      setStage(4);
    }
  };
  return (
    <TabContentBase
      evidence={evidence}
      // dont show objectives until stage 3
      objectives={currentStage < STAGE_UNLOCKED ? undefined : objectives}
      onCorrect={onCorrect}
    />
  );
}
