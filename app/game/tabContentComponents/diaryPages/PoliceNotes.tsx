import CustomCarousel from "../../components/CustomCarousel";
import TabContentBase from "../TabContentBase";
import NotebookPage from "./NotebookPage";

export default function PoliceNotes() {
  const page1 = (
    <NotebookPage
      textBlocks={[
        "1/14",
        "- borrow fancy watch from dad",
        "- find my sports jacket, havent worn it since promotion",
        "- eat big dinner before 5 hour drive",
        " ",
        " ",
        `"you look like a rich douchebag" thanks evie`,
      ]}
      type="notepad"
    />
  );

  const page2 = (
    <NotebookPage
      textBlocks={[
        "1/15",
        "Car is dead giveaway. Need to park it out of sight",
        "Google says popular lobster place nearby has bar — good spot to chat w/ locals",
        "50 bucks for lobster roll? Keep receipt for reimbursement",
        " ",
        "Gossip:",
        "- New home construction at 4 Dogwood Boulevard delayed. Brick suppliers on strike",
        "- owner of 5 Apple Avenue says someone keeps moving everyone's trash bins in middle of night",
      ]}
      type="notepad"
    />
  );

  const page3 = (
    <NotebookPage
      textBlocks={[
        "- Nycron stocks predicted to dip, should buy?",
        "- man says his house at 7 Evergreen Place and other east side houses has mouse infestation",
        "- should go boating on lake. Keep receipt for reimbursement",
        "- woman wants to sell her place which is closest to hill. Hates that it blocks sun, prevents snow melting. 8 something?",
        "- Hort's daughter got parasite from salad. Lettuce recalled. Live at 2 Cherry Drive(east side I think?)",
        "Been here 3 hours. Not one peep about college students. Gonna have to change tactics tomorrow",
      ]}
      type="notepad"
    />
  );

  const evidence = <CustomCarousel items={[page1, page2, page3]} />;
  return <TabContentBase evidence={evidence} />;
}
