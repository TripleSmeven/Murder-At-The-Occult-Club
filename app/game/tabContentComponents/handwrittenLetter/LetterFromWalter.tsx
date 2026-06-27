import TabContentBase from "../TabContentBase";
import HandwrittenLetter from "./HandwrittenLetter";

export default function LetterFromWalter() {
  const lines = [
    "To my son, Gregory",
    "I hope this letter finds you well. You and Jane are doing well in the states, I pray? It's been so long since I've been there. I used to take you to those amazing Broadway performances. I sure hope they still produce them.",
    "As you may have guessed, my stay on this earth is not long. It's finally time for the old man to kick the bucket. I have to come clean about something.",
    "I have an estate in Hamper, New York. I'm sending you everything about it: the property deed, the blueprints, the asset ledger. Everything you need to know about the house will be in this folder.",
    "Now, I need you to do something for your old man. What I'm about to write is of upmost importance and you must read this carefully and do everything I say.",
    "First, visit the estate. Alone. Whatever you do, do NOT bring Jane or Matthew. Bring tools to remove the front door and the mailbox. Burn both of them. Replace both of them with whatever you'd",

    "- Walter",
  ];
  const evidence = <HandwrittenLetter lines={lines} style={"fromWalter"} />;
  return <TabContentBase evidence={evidence} />;
}
