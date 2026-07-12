import TabContentBase from "../TabContentBase";
import NotesApp from "./NotesApp";

export default function TripPlan() {
  const evidence = (
    <NotesApp title="Trip Plan" date="Jan 11">
      <div>
        <div>Room assignments</div>
        <ul>
          <li>flower girl: east wing bedroom 1 (closest to the greenhouse)</li>
          <li>bookworm: attic room (cozy)</li>
          <li>gym bro: west wing bedroom 1</li>
          <li>star gazer: west wing bedroom 2</li>
          <li>Me: Master chambers (hell yeah)</li>
        </ul>

        <div>Stuff to do</div>
        <ul>
          <li>Explore the grounds</li>
          <li>Have a bout round the nearby town</li>
          <li>Shop for groceries</li>
          <li>Toy shop for the Verde twins&apos; lil bro</li>
          <li>Boating in lake? (Be in same boat as David)</li>
          <li>Bowling</li>
          <li>Karoke</li>
        </ul>
        <div>Food</div>
        <ul>
          <li>that banging lobster place</li>
          <li>Italian</li>
          <li>Sushi (might be bad)</li>
          <li>bagel shop</li>
        </ul>
      </div>
      <div>Remember to</div>
      <ul>
        <li>Mention mansion library to bookworm</li>
        <li>Remind star gazer about the hill</li>
        <li>Remind them to bring snacks for the road</li>
      </ul>
      <div>
        Address: The Crocker Estate, 42 W Wilson Dr, Hamper, NY 14533
      </div>
    </NotesApp>
  );

  return <TabContentBase evidence={evidence} />;
}
