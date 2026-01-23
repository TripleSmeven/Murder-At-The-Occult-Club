import CustomCarousel from '../../components/CustomCarousel';
import styles from './LetterFromX.module.css';

export default function LetterFromX() {
  const item1 = <div className={styles.page1}>
    <div>Hi,</div>
    <br />
    <div>
      It&apos;s been a while since our last, but it looks like we&apos;ve got another case on our hands. Zach Cunningham, a senior majoring in bio-chem and the president of the unofficial “Occult Club” at our school, was found dead in one of the classrooms on the 6th floor last week. It was ruled a suicide by the police, and they blamed stress and mental health issues. No foul play, they said.
    </div>
    <br />
    <div>
      However, it&apos;s obvious that the university paid them to keep quiet and not cause a commotion. It&apos;s what happened last year too, right? Easier for Principal Lark to make a statement about “committing more resources to student mental health” than to admit a killer is on the loose. Plus, keeping it on the down-low means they can hide the fact that an occult club even exists in our school.
    </div>
    <br />
    <div>
      But yours truly here knows better. Here&apos;s how I know for sure it wasn&apos;t a suicide: some idiot police officer forgot to turn on their VPN before sending out the evidence they collected to their HQ, all while being connected to our school&apos;s wifi. Thankfully the IT manager is on leave, so I spent the day compiling all the evidence the police have gathered. And it turns out the cops were onto something. They actually were investigating this case as a murder and narrowed down the list of suspects to the 6 members of the Occult Club, before Lark called them to shut the investigation down. Check out the attached police report.
    </div>
    <br />
        <div>
      So you know the drill. Take a look at the evidence and connect the dots. Something definitely fishy happened, and the evidence should prove it. Find out what the police didn&apos;t.
    </div>
    <br />
    <div>
      Alright, I&apos;ve got to lay low for a bit. DO NOT text me because that stuff is easily tracked. I&apos;ll come find you soon. Figure out as much as you can before then. See you soon.
    </div>
    <br />
    <div>
      - X
    </div>
  </div>;

  const item2 = <div className={styles.page2}>
    <div>
      P.S. If any evidence is missing any data, IT&apos;S NOT MY FAULT. I didn&apos;t have time to run the decryption software the whole way through. You&apos;re just gonna have to make do.
    </div>
  </div>;
  return (
    <div className={styles.letterParent}>
      <CustomCarousel size={2} items={[item1, item2]} />
    </div>
  );
}
