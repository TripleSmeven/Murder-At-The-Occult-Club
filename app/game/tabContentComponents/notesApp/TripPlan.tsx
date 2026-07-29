import TabContentBase from "../TabContentBase";
import NotesApp from "./NotesApp";

export default function TripPlan() {
  const evidence = (
    <NotesApp title="Trip Plan" date="Jan 11">
      <div>
        <div>Room assignments</div>
        <ul>
          <li>flower girl: east wing bedroom 1 (view of forest)</li>
          <li>bookworm: attic room (cozy)</li>
          <li>the shadow: west wing bedroom 1</li>
          <li>star gazer: west wing bedroom 2</li>
          <li>Me: Master chambers (hell yeah)</li>
        </ul>

        <div>Day 1</div>
        <ul>
          <li>Settle in</li>
          <li>Systems check</li>
        </ul>

        <div>Day 2</div>
        <ul>
          <li>Final prep</li>
          <li>Rehersal dinner</li>
          <li>Showtime!</li>
        </ul>

        <div>Day 3</div>
        <ul>
          <li>Have a bout round the nearby town</li>
          <li>Shop for groceries</li>
          <li>Toy shop for the Verde twins&apos; lil bro</li>
          <li>Boating in lake? (Be in same boat as David)</li>
        </ul>

        <div>Food</div>
        <ul>
          <li>that banging lobster place</li>
          <li>Italian</li>
          <li>Sushi (might be bad)</li>
          <li>bagel shop</li>
        </ul>
      </div>
    </NotesApp>
  );

  return <TabContentBase evidence={evidence} />;
}
