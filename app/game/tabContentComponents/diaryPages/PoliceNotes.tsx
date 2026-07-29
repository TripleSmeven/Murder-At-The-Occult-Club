import CustomCarousel from "../../components/CustomCarousel";
import TabContentBase from "../TabContentBase";
import NotebookPage from "./NotebookPage";

export default function DiaryPages() {
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
        "- New home construction at 7 Dogwood Boulevard delayed. Brick suppliers on strike",
        "- weird cracks on trees in middle of block in front of 5 Cherry Drive. Owner freaked out. Town wont cut down",
      ]}
      type="notepad"
    />
  );

  const page3 = (
    <NotebookPage
      textBlocks={[
        "- Nycron stocks predicted to dip, should buy?",
        "- some areas have bad signal. Minor fire broke out at 2 Evergreen place on westside and firefighters couldnt be called",
        "- should go boating on lake. Keep receipt for reimbursement",
        "- woman wants to sell her place which is closest to hill. Hates that it blocks sun, prevents snow melting. 8 something?",
        "- Hort's daughter got parasite from salad. Lettuce recalled. Live at 3 Birch",
        "Been here 3 hours. Not one peep about college students. Gonna have to change tactics tomorrow",
      ]}
      type="notepad"
    />
  );

  const evidence = <CustomCarousel items={[page1, page2, page3]} />;
  return <TabContentBase evidence={evidence} />;
}
