import CustomCarousel from "../../components/CustomCarousel";
import TabContentBase from "../TabContentBase";
import HandwrittenLetter from "./HandwrittenLetter";

export default function LetterFromWalter() {
  const lines1 = [
    "To my daughter-in-law, Jane",

    "I hope this letter finds you well. I want to first  to express my gratitude for the love and care you have shown to my son. Your presence in his life has brought him immense joy and happiness, and for that, I am truly thankful.",

    "But you'll excuse me if the pleasantries end here. I have given you this note, on my very death bed, because I have something of grave importance to tell you. I regret that I've lacked the courage and fortitude to tell you this, but I cannot leave this mortal coil without doing so. I have been keeping a secret from you, one that has weighed heavily on my conscience for decades.",

    "My son has committed the sin of infedelity against you. It happened about two years into your courtship when the two of you still resided in Berkshire. The other woman became pregnant and gave birth to a boy. Against my better judgement, I assisted my son in covering up this transgression and sent the woman and her child away. You were none the wiser. After you two moved abroad, my son began sending me money under the guise of paying for his mother's medical care. In reality, much of the funds were used to support his illegitimate son.",
  ];

  const lines2 = [
    "I am deeply sorry that I have delivered this news to you in this way. I have been complicit in this deception, and I am deeply ashamed of my actions. I will not defend myself or Gregory for what we have done.",

    "What you do now is up to you, my dear. My only ask is that you do not hold anything against the other woman or her child. They are innocent in this matter.",

    "Farewell, and may you find peace and happiness in your life.",

    "- Walter",
  ];
  const pages = [
    <HandwrittenLetter lines={lines1} style={"fromWalter"} key={1} />,
    <HandwrittenLetter lines={lines2} style={"fromWalter"} key={2} />,
  ];
  const evidence = <CustomCarousel items={pages} />;
  return <TabContentBase evidence={evidence} />;
}
