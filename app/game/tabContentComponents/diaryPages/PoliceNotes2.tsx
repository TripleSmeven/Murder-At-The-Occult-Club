import CustomCarousel from "../../components/CustomCarousel";
import TabContentBase from "../TabContentBase";
import NotebookPage from "./NotebookPage";

export default function PoliceNotes() {
  const page1 = (
    <NotebookPage
      textBlocks={[
        "1/16",

        "Good news. I found the house.",

        "Bad news. I went in the house. Explored and found their clothes lying on the floor in a room. And then there were these rats sitting there. They were so loud, constantly squeaking. I was trying to shoo them off but they but kept coming back. And then...I might be seeing things, but one of them started tapping on one of the kids phone and looking at me? I got so freaked out I just left. I'm in the car right now.",

        "Do I call this in? Or do I call an exorcist? Should I go back? What am I even doing here?",
      ]}
      type="notepad"
    />
  );

  const page2 = (
    <NotebookPage
      textBlocks={[
        "I think I need to go back and unlock the phone for the rats. I can't believe I just said that.",
      ]}
      type="notepad"
    />
  );

  const evidence = <CustomCarousel items={[page1, page2]} />;
  return <TabContentBase evidence={evidence} />;
}
