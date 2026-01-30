import CustomCarousel from "../../components/CustomCarousel";
import styles from "./Newspaper.module.css";

export default function Newspaper() {
  const page1 = (
    <div className={styles.newspaperParent}>
      <h3>Vigil For Zach Cunningham to be Held Dec 20th</h3>

      <div>
        The KaiserU Department of Student affairs has announced a candlelight vigil will be held in
        the remembrance of Zach Cunningham on December 20th, in the east wing garden.
      </div>
      <br />
      <div>
        Zach Cunningham took his own life on December 13. Cunningham was a senior majoring in
        biochemistry. His friends describe him as a &quot;bright person&quot; with a &quot;serious
        enthusiasm for science and the natural world&quot;.
      </div>
      <br />
      <div>
        &quot;It was not uncommon for Zach to swing by my office with his latest theories,&quot;
        says Greg Clark, the head advisor of the BioChemistry department. &quot;His thirst for the
        pursuit of knowledge will be sorely missed&quot;.
      </div>
      <br />
      <div>President Eric Lark released a statement following the passing of Cunningham: </div>
      <br />
      <div>
        &quot;I speak on behalf of all staff and faculty, we are deeply saddened by the news
        regarding the loss of one of our students. Our heartfelt condolences go out to the friends
        and family affected by this tragedy.
      </div>
      <br />
      <div>
        The well-being of our students is always our top priority. We are committed to ensuring our
        mental health and counseling services are available for all.
      </div>
      <br />
      <div>
        Out of respect for the family, we will not be releasing any further details. We ask that as
        a community we can approach this situation with compassion and integrity.&quot;
      </div>
      <br />
      <div>
        KaiserU Mental Health Facilities have extended their hours to accommodate students during
        this time.
      </div>
    </div>
  );

  const page2 = (
    <div className={styles.newspaperParent}>
      <h3>Mothers Against Occult Clubs Head Coordinator Speaks Out</h3>

      <div>
        Miranda Meadows, Head Coordinator of the non profit &quot;Mothers Against Occult
        Clubs&quot;, released a message to the Kaiser Country Community Board at yesterday&apos;s
        Sunday meeting.
      </div>
      <br />
      <div>
        &quot;The rise of occult activity in public schools and universities is greatly
        underestimated,&quot; Meadows said in an impassioned speech. &quot;Parents should be
        concerned that their children may very well be experimenting with dark magic.&quot;
      </div>
      <br />
      <div>
        Yesterday marks the 5-year anniversary of the death of Scott Wagner, a high school senior
        who was killed in a deadly ritual conducted by an underground occult club at his high
        school.
      </div>
      <br />
      <div>
        &quot;Kaiser Country is facing a crisis,&quot; Meadows continues. &quot;With unpoliced
        social media and internet access, it&apos;s now more than ever a breeding ground for bad
        influences to spread to young minds, and the occult epidemic is one of them.&quot;
      </div>
      <br />
      <div>
        Mothers Against Occult Clubs will be holding a community booth at KaiserU on Club Day to
        raise awareness of the dangers of occult clubs.
      </div>
    </div>
  );

  const page3 = (
    <div className={styles.newspaperParent}>
      <h3>Tea Club To Remain Closed Until Next Semester</h3>

      <div>
        Nearly two weeks ago, Kyle Singh, a second-year electrical engineering major, was admitted
        to the hospital after suffering a severe allergic reaction to one of the teas served at the
        KaiserU tea club. Since the incident, the club has remained closed and will not open again
        until next semester.
      </div>
      <br />
      <div>
        The tea club was founded by club president Evelyn Samson, whose self-proclaimed mission is
        to &quot;show the world that tea is not just black and green&quot;.
      </div>
      <br />
      <div>
        Unfortunately for Kyle, this recent incident only showed that drinking tea can be as deadly
        as drinking poison. Many students were shocked to hear that there was even such a thing as
        being allergic to tea. &quot;I thought you can, like, only be allergic to peanuts and
        gluten,&quot; said one student. “Now I might have to think twice about drinking tea.”
      </div>
      <br />
      <div>
        The KaiserU Department of Health advises all students to get their allergies tested to
        prevent future cases such as these.
      </div>
      <br />
      <div>
        Evelyn Samson declined to comment on Kyle Singh&apos;s near-fatal allergic reaction.
        However, she did want to thank everyone who took the club&apos;s leftover tea after the club
        was forced to close, saying, &quot;I&apos;m glad at least the tea won&apos;t go to
        waste.&quot;
      </div>
    </div>
  );
  return <CustomCarousel items={[page1, page2, page3]} />;
}
