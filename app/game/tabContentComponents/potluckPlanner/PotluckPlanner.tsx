import TabContentBase from "../TabContentBase";
import styles from "./PotluckPlanner.module.css";

interface TeamMember {
  name: string;
  role: string;
  bringing: string;
  allergies: string;
}

const teamMembers: TeamMember[] = [
  { name: "Gina Moore", role: "Player", bringing: "Chili", allergies: "None" },
  {
    name: "Sarah Findley",
    role: "Player",
    bringing: "Paper plates & napkins",
    allergies: "Shellfish",
  },
  { name: "Jessica Figueroa", role: "Player", bringing: "Chips & guacamole", allergies: "None" },
  { name: "Alex Thompson", role: "Player", bringing: "Brownies", allergies: "Peanuts" },
  { name: "Marcy Johnson", role: "Player", bringing: "Fried chicken", allergies: "None" },
  { name: "Jamie Lee", role: "Player", bringing: "Pasta salad", allergies: "None" },
  { name: "Lea Salazar", role: "Player", bringing: "Beef sliders", allergies: "None" },
  { name: "May Nguyen", role: "Player", bringing: "Pineapple fried rice", allergies: "None" },
  { name: "Linda Williams", role: "Coach", bringing: "Mac and cheese", allergies: "Gluten" },
  { name: "Mike Peterson", role: "Coach", bringing: "Grilled vegetables", allergies: "None" },
  {
    name: "Tom Chan",
    role: "Manager",
    bringing: "Drinks (soda & juice)",
    allergies: "Apples, pears",
  },
  { name: "Dr. Patricia Hall", role: "Advisor", bringing: "Tiramisu", allergies: "None" },
  { name: "Zach Cunningham", role: "Guest", bringing: "—", allergies: "Chamomile tea" },
  { name: "Thomas Brooke", role: "Guest", bringing: "—", allergies: "None" },
];

export default function PotluckPlanner() {
  const document = (
    <div className={styles.container}>
      <div className={styles.docHeader}>
        <h1 className={styles.title}>🏐 Volleyball Team Potluck - Winter 2016</h1>
        <p className={styles.subtitle}>Who&apos;s bringing what? 👇</p>
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr className={styles.headerRow}>
              <th className={styles.th}>Name</th>
              <th className={styles.th}>Role</th>
              <th className={styles.th}>Bringing</th>
              <th className={styles.th}>Allergies</th>
            </tr>
          </thead>
          <tbody>
            {teamMembers.map((member, index) => (
              <tr key={index} className={index % 2 === 0 ? styles.rowEven : styles.rowOdd}>
                <td className={styles.td}>{member.name}</td>
                <td className={styles.td}>{member.role}</td>
                <td className={styles.td}>{member.bringing}</td>
                <td className={styles.td}>{member.allergies}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.footer}>
        <p className={styles.note}>✏️ Last edited by Gina Moore · Dec 9, 2016 at 3:45 PM</p>
      </div>
    </div>
  );

  return <TabContentBase evidence={document} />;
}
