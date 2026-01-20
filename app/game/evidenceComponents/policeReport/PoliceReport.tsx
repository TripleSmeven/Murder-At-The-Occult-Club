import styles from './PoliceReport.module.css';
import Image from 'next/image'
import badge from './police-badge.png'
import CustomCarousel from '../../components/CustomCarousel';

export default function PoliceReport() {
  const item1 =
    <div className={styles.page}>
      <div className={styles.header}>
        <Image src={badge} width={90} height={100} alt={'police badge'} />
      </div>
      <div className={`${styles.header} ${styles.title}`}>
        <h2><strong>Kaiser County Police Department</strong></h2>
      </div>
      <div className={styles.header}>
        Kaiser County, NY
      </div>
      <div className={`${styles.header} ${styles.title}`}>
        <h3><strong>Incident Report</strong></h3>
      </div>

      <div className={styles.section}>
        <div className={styles.smallTitle}><strong>Incident Details</strong></div>
        Responding Officers: Sebastian Walsh, Roy Samson
        <br />
        Incident Location: Kaiser University, 150 Pleasant Grove Rd, Kaiser County, NY 14850
        <br />
        Last Updated: December 18, 2017, 14:32 PM (see addendum)
      </div>

      <div className={styles.section}>
        <div className={styles.smallTitle}><strong>Incident Summary</strong></div>

        Officers Walsh and Samson responded to a call made from the Secretary’s Office of Kaiser University on Friday, December 13 at 7:46PM. They arrived at the scene at 7:58PM.
        <br />
        <br />
        A janitor had discovered a body in room 608 on the 6th floor of the east wing. The body was identified as 21 year old Zach Cunningham, a senior majoring in biochemistry. Officers Walsh and Samson had noted there were no signs of a struggle and no blood at the scene.
        <br />
        <br />
        Medical personnel arrived soon after and confirmed the victim had passed. Medical arranged for the body to be placed in evidence storage and a full investigation was authorized by the Kaiser County department sheriff.
        <br />
        <br />
        The cause of death was asphyxiation, but there were no signs of manual strangulation. The toxicology report shows no signs of narcotics, alcohol, poisons, or toxins in the body. The root cause of asphyxiation is currently unknown and is pending investigation.

      </div>

    </div >

  const item2 =
    <div className={styles.page}>
      <div className={styles.section}>
        During the investigation of the crime scene, 7 small vials with residual liquid were discovered. Analysis of the residual liquid revealed it was not any kind of common drink or commercial product, but instead was a mixture of several seemingly unrelated components. The initial results are:
        <br />
        <ol className={styles.orderedList}>
          <li>Burnt ashes of animal fur and bird feathers</li>
          <li>Stimulants mixed in liquid</li>
          <li>Flower petal fibers</li>
          <li>An unknown substance</li>
        </ol>
        Further investigation of this liquid is pending.
        <br />

        Additionally, DNA analysis of the vials revealed each of the 7 vials was drunk by 7 different individuals:
        <ol className={styles.orderedList}>
          <li><strong>Zack Cunningham</strong>, male, 21 years old, senior</li>
          <li><strong>Sarah Findley</strong>, female, 18 year old, freshman</li>
          <li><strong>Thomas Brooks</strong>, male, 21 years old, senior</li>
          <li><strong>Carlos Sanchez</strong>, male, 19 years old, sophomore</li>
          <li><strong>Daisy Verde</strong>, female, 18 years old, freshman</li>
          <li><strong>Andrew Wolf</strong>, male, 20 years old, junior</li>
          <li><strong>Candace Eng</strong>, female, 20 years old, junior</li>
        </ol>

        Preliminary digital forensics investigation revealed that all 7 students were part of an “occult club”, an unsupervised club focusing on the study of magic, rituals, divination, and demonology. The club met once a week to discuss books, online material, and theories. On the day Cunningham died, the cult had scheduled their final meeting. The agenda of their meeting is pending investigation.
        <br />
        <br />
        The 6 other remaining students of the club are considered <strong>PRIME SUSPECTS</strong>.
        <br />
        <br />

        The priority action items for this case are:
        <ol className={styles.orderedList}>
          <li>Identifying the agenda of the final meeting. </li>
          <li>Establishing possible motives for each suspect.</li>
          <li>Determining the composition of the unknown liquid.</li>
          <li>Confirming the root cause of asphyxiation.</li>
          <li>Naming the final suspect.</li>
        </ol>

        ADDENDUM: As of December 18th, the case is closed due to the initiating of the KARL protocol. All pending investigations are cancelled. The Medical Examiner will be releasing the body of Z to the next of kin. All digital evidence will be encrypted and archived.

      </div>
    </div >
  return (
    <div className={styles.reportParent}>
      <CustomCarousel size={2} items={[item1, item2]} />
    </div>
  );
}
