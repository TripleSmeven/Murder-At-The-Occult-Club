import styles from "./Recipe.module.css";

export default function Recipe() {
  return (
    <div className={styles.recipeParent}>
      <div className={styles.recipeHeader}>
        <h2>THE ELIXIR OF OBLIVION</h2>
      </div>
      <div>Ingredients:</div>
      <ol>
        <li>A tuft of fur from a small mammalian</li>
        <li>A fistful of sodium compound</li>
        <li>A feather of waterfowl</li>
        <li>A drop of concentrated liquid energy</li>
        <li>Petals from a sun-like flower</li>
      </ol>
      <div>Procedure:</div>
      <ol>
        <li>Burn both the animal fur and feather until nothing but ash is left.</li>
        <li>
          Prepare your cauldron by placing it over your heating implement. Surround the cauldron
          with fae salt.
        </li>
        <li>Stir ashes and rest of materials in a cauldron of boiling water for 3 hours.</li>
        <li>
          Every hour (totaling three times), recite Grimm&apos;s incantation. Amendment 3 is
          recommended.
        </li>
      </ol>
      <div>
        This elixir allows the strong-willed to glimpse into the Realm of Oblivion. For the
        weak-minded, the elixir has no effect. It is best to drink this elixir as a group, as those
        entering the Realm may need to enlist allies to help combat whatever entities they may
        encounter.
      </div>
    </div>
  );
}
