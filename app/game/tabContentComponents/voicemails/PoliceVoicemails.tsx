import { Color } from "../../components/ObjectiveBuilder";
import { ObjectivesJson } from "../../context/ObjectivesJson";
import TabContentBase from "../TabContentBase";
import Voicemails from "./Voicemails";

export default function PoliceVoicemails() {
  const voicemailData = [
    {
      id: "1",
      title: "William Phelps",
      date: "January 15, 2026 at 3:58 PM",
      audioSrc: "/audio/RhysWill_HeyTroy.wav",
      transcript:
        "Hey Troy, so uh… bad news. I couldn’t get that address for you. These rich folks…they’re pretty cagey on sharing things with outside people, especially the police. I tried to make some calls, but they have a strict policy that they don’t budge on. So you have two options. If you compile some real evidence, you can try to get a subpoena. Or, you can try to ask around the locales to see if they’ve seen any college students, and find out that way. I wish I could help more, but I’ve got other stuff to take care of right now. But you can call or text me anytime, alright? Bye",
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
            answer: "123",
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
            answer: "123",
            answers: null,
            color: Color.BLUE,
          },
        ],
      },
    ],
  };

  return <TabContentBase evidence={evidence} objectivesJson={objectives} />;
}
