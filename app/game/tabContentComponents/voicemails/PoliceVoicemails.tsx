import { useContext } from "react";
import { Color } from "../../components/ObjectiveBuilder";
import { ObjectivesJson } from "../../context/ObjectivesJson";
import TabContentBase from "../TabContentBase";
import Voicemails from "./Voicemails";
import { ProgressContext, ProgressKeys } from "../../context/ProgressContext";
import { StageContext } from "../../context/StageContext";

export default function PoliceVoicemails() {
  const { setSolved } = useContext(ProgressContext);
  const { currentStage, setStage } = useContext(StageContext);
  const voicemailData = [
    {
      id: "1",
      title: "William Phelps",
      date: "January 14, 2026 at 3:58 PM",
      audioSrc: "/audio/PoliceVoicemail.mp3",
      transcript:
        "Hey Troy, so uh… bad news. I couldn’t get that address for you. These rich folks…they’re pretty cagey on sharing things with outside people, especially the police. I tried to make some calls, but they have a strict policy that they don’t budge on. So you have two options. If you compile some real evidence, you can try to get a subpoena. But that might take a week. Or, you can try to ask around, see if the locales have noticed any college students, and find out that way. Listen, I wish I could help more, but I’ve got other stuff to take care of right now. But you can call or text me anytime, okay? Bye.",
    },
  ];
  const evidence = <Voicemails voicemailsData={voicemailData} />;

  const objectives: ObjectivesJson = {
    heading: "What is the address of the Crocker Mansion?",
    sections: [
      {
        title: "House number",
        questions: [
          {
            question: "",
            answer: "7",
            answers: null,
            color: Color.BLUE,
          },
        ],
      },
      {
        title: "Street name",
        questions: [
          {
            question: "",
            answer: "Apple Avenue",
            answers: null,
            color: Color.BLUE,
          },
        ],
      },
    ],
  };

  const onCorrect = () => {
    if (currentStage < 2) {
      setSolved(ProgressKeys.VOICEMAIL, true);
      setStage(2);
    }
  };

  return (
    <TabContentBase
      evidence={evidence}
      objectivesJson={objectives}
      onCorrect={onCorrect}
    />
  );
}
