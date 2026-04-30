import styles from "./PoliceReport.module.css";
import Image from "next/image";
import badge from "./police-badge.png";
import CustomCarousel from "../../components/CustomCarousel";
import TabContentBase from "../TabContentBase";
import { ObjectivesJson } from "../../components/ObjectivesJson";
import { Color } from "../../components/WordPicker";
import { useContext } from "react";
import { StageContext } from "../../components/StageContext";
import { ObjectivesContext, ProgressKeys } from "../../components/ObjectivesContext";

export default function PoliceReport() {
  const item1 = (
    <div className={styles.reportParent}>
      <div className={styles.header}>
        <Image src={badge} width={90} height={100} alt={"police badge"} />
      </div>
      <div className={`${styles.header} ${styles.title}`}>
        <h2>
          <strong>Kaiser County Police Department</strong>
        </h2>
      </div>
      <div className={styles.header}>Kaiser County, NY</div>
      <div className={`${styles.header} ${styles.title}`}>
        <h3>
          <strong>Incident Report</strong>
        </h3>
      </div>

      <div className={styles.section}>
        <div className={styles.smallTitle}>
          <strong>Incident Details</strong>
        </div>
        <strong>Responding Officers:</strong> Sebastian Waller, Troy Samson
        <br />
        <strong>Incident Location:</strong> Kaiser University, 150 Pleasant Grove Rd, Kaiser County,
        NY 14850
        <br />
        <strong>Last Updated:</strong> December 18, 2017, 14:32 PM (see addendum)
      </div>

      <div className={styles.section}>
        <div className={styles.smallTitle}>
          <strong>Incident Summary</strong>
        </div>
        Officers Waller and Samson responded to a call made from the Secretary&apos;s Office of
        Kaiser University on Tuesday, December 13 at 7:46PM. They arrived at the scene at 7:58PM.
        <br />
        <br />
        A janitor had discovered a body in room 608 on the 6th floor of the east wing. The body was
        identified as 24 year old Zach Cunningham, a senior majoring in biochemistry. Officers
        Waller and Samson had noted there were no signs of a struggle and no blood at the scene.
        <br />
        <br />
        Medical personnel arrived soon after and confirmed the victim had passed. Medical arranged
        for the body to be placed in evidence storage and a full investigation was authorized by the
        Kaiser County department sheriff.
        <br />
        <br />
        The cause of death was asphyxiation, but there were no signs of manual strangulation. A
        toxicology report is pending.
      </div>
    </div>
  );

  const item2 = (
    <div className={styles.reportParent}>
      <div className={styles.section}>
        During the investigation of the crime scene, 7 small vials with residual liquid were
        discovered. Analysis of the residual liquid revealed it was not any kind of common drink or
        commercial product, but instead was a mixture of several seemingly unrelated components. The
        initial results are:
        <br />
        <ol className={styles.orderedList}>
          <li>Burnt ashes of animal fur and bird feathers</li>
          <li>Stimulants mixed in liquid</li>
          <li>Flower petal fibers</li>
          <li>
            An <strong>unknown substance</strong>
          </li>
        </ol>
        Further investigation of this liquid is pending.
        <br />
        <br />
        Additionally, DNA analysis of the vials revealed each of the 7 vials was drunk by 7
        different individuals:
        <ol className={styles.orderedList}>
          <li>
            <strong>Zach Cunningham</strong>, male, 24 years old, senior
          </li>
          <li>
            <strong>Sarah Findley</strong>, female, 18 year old, freshman
          </li>
          <li>
            <strong>Thomas Brooke</strong>, male, 21 years old, senior
          </li>
          <li>
            <strong>Carlos Sanchez</strong>, male, 19 years old, sophomore
          </li>
          <li>
            <strong>Andrew Wolfe</strong>, male, 20 years old, junior
          </li>
          <li>
            <strong>Candace Eng</strong>, female, 20 years old, junior
          </li>
        </ol>
        Preliminary digital forensics investigation revealed that all 7 students were part of an
        “occult club”, an unsupervised club led by Cunningham focusing on the study of magic,
        rituals, divination, and demonology. The club met once a week to discuss books, online
        material, and theories. On the day Cunningham died, the cult had scheduled their final
        meeting.
        <br />
        <br />
        The 5 other remaining students of the club are considered <strong>PRIME SUSPECTS</strong>.
        <br />
        <br />
        The priority action items for this case are:
        <ol className={styles.orderedList}>
          <li>Establishing possible motives for each suspect.</li>
          <li>Determining the composition of the unknown liquid.</li>
          <li>Confirming the root cause of asphyxiation.</li>
          <li>Naming the final suspect.</li>
        </ol>
        <strong>ADDENDUM</strong>: As of December 18th, the case has been closed. All pending
        investigations are cancelled. The Medical Examiner will be releasing the body of Zach
        Cunningham to the next of kin. All digital evidence will be encrypted and archived.
      </div>
    </div>
  );

  const { currentStage, setStage } = useContext(StageContext);
  const { getProgress, setProgress } = useContext(ObjectivesContext);

  // set stage from 0 to 1 when user views second page of police report.
  const onChange = (index: number) => {
    if (currentStage === 0 && index === 1) {
      setStage(1);
    }
  };
  const evidenceComponent = <CustomCarousel items={[item1, item2]} onChange={onChange} />;
  const objectives: ObjectivesJson = {
    heading: "Answer the questions below:",
    sections: [
      {
        title: "What kind of compound is the unknown substance mentioned on page 2?",
        questions: [
          {
            question: "",
            answer: "A sodium one",
            answers: ["A lithium one", "A sodium one", "A hydrogen one", "A calcium one"],
            color: Color.GREEN,
          },
        ],
      },
      {
        title: "Who ordered the police to stop investigating Cunningham's murder?",
        questions: [
          {
            question: "",
            answer: "Eric Lark",
            answers: ["Miranda Meadows", "Greg Carlson", "Eric Lark", "Troy Samson"],
            color: Color.GREEN,
          },
        ],
      },
    ],
  };

  const STAGE_UNLOCKED = 1;

  // move to stage 2 if police report objective is complete
  const onCorrect = () => {
    if (currentStage === STAGE_UNLOCKED) {
      setStage(2);
    }
    if (!getProgress(ProgressKeys.POLICE_REPORT)) {
      setProgress(ProgressKeys.POLICE_REPORT, true);
    }
  };
  return (
    <TabContentBase
      evidence={evidenceComponent}
      // dont show objectives until stage 1
      objectives={currentStage < STAGE_UNLOCKED ? undefined : objectives}
      onCorrect={onCorrect}
    />
  );
}
