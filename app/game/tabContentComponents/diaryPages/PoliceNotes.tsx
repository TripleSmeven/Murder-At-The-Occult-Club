import CustomCarousel from "../../components/CustomCarousel";
import TabContentBase from "../TabContentBase";
import NotebookPage from "./NotebookPage";

export default function DiaryPages() {
  const page1 = (
    <NotebookPage
      textBlocks={[
        "1/15",
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
        "1/16",
        "Car is dead giveaway. Need to park it out of sight",
        "Google says popular lobster place nearby has bar — good spot to chat w/ locals",
        "50 bucks for lobster roll? Keep receipt for reimbursement",
        " ",
        "Gossip:",
        "- New home construction delayed. Brick suppliers on strike",
        "- mysterious cracks on trees in middle of block in front of 5 Cherry Drive",
      ]}
      type="notepad"
    />
  );

  const page3 = (
    <NotebookPage
      textBlocks={[
        "- lettuce recall. Avoid salads",
        "- Nycron stocks predicted to dip, should I buy?",
        "- some areas have bad signal. Minor fire broke out inside 2 Evergreen place on westside and firefighters couldnt be called",
        "- should go boating on lake. Keep receipt for reimbursement",
      ]}
      type="notepad"
    />
  );

  const evidence = <CustomCarousel items={[page1, page2, page3]} />;
  return <TabContentBase evidence={evidence} />;
}
