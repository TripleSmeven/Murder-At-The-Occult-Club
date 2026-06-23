import { OrdersList } from "./OrdersList";
import { JSX, useContext, useState } from "react";
import styles from "./AmazingOrders.module.css";
import CustomCarousel from "../../components/CustomCarousel";
import TabContentBase from "../TabContentBase";
import { CHAPTER1_NAMES, Color } from "../../components/WordPicker";
import { ObjectivesJson } from "../../context/ObjectivesJson";
import { ObjectivesContext } from "../../context/ObjectivesContext";
import { ProgressContext, ProgressKeys } from "../../components/ProgressContext";

const INDEX_TO_UNKNOWN_MAP: Record<number, string> = {
  0: "A",
  1: "B",
  2: "C",
};

function OrderRow({
  entries,
  rowClassName,
  color,
  customName,
}: {
  entries: string[];
  rowClassName?: string;
  color?: string;
  customName?: string;
}) {
  return (
    <tr className={`${rowClassName} ${color && styles[color]}`}>
      <td className={styles.numberCell}>{entries[0]}</td>
      <td className={styles.dateCell}>{entries[1]}</td>
      <td className={styles.nameCell}>{customName || entries[2]}</td>
      <td className={styles.titleCell}>{entries[3]}</td>
      <td className={styles.categoryCell}>{entries[4]}</td>
      <td className={styles.priceCell}>{entries[5]}</td>
    </tr>
  );
}

function OrderRowHeader({ entries }: { entries: string[] }) {
  return (
    <tr className={styles.orderRowHeader}>
      <td className={`${styles.numberCell} ${styles.ignoreInHeaderRow}`}>{entries[0]}</td>
      <td className={styles.dateCell}>{entries[1]}</td>
      <td className={styles.nameCell}>{entries[2]}</td>
      <td className={styles.titleCell}>{entries[3]}</td>
      <td className={styles.categoryCell}>{entries[4]}</td>
      <td className={styles.priceCell}>{entries[5]}</td>
    </tr>
  );
}

function AmazingOrdersTable() {
  const { answers } = useContext(ObjectivesContext);

  const { isSolved } = useContext(ProgressContext);
  const completedObjective = isSolved(ProgressKeys.ONLINE_ORDERS);

  const orderRows: JSX.Element[] = [];
  let rowCount = 2;
  OrdersList.forEach((order, index) => {
    order.items.forEach((item) => {
      let customName;
      if (INDEX_TO_UNKNOWN_MAP[index]) {
        const storageKey = `Customer Name-Unknown ${INDEX_TO_UNKNOWN_MAP[index]}`;
        if (answers[storageKey]) {
          customName = completedObjective
            ? `[${answers[storageKey]}]`
            : `[${answers[storageKey]}?]`;
        }
      }
      orderRows.push(
        <OrderRow
          key={rowCount}
          color={order.color}
          entries={[
            rowCount.toString(),
            order.date,
            order.customerName,
            item.name,
            item.category,
            item.price,
          ]}
          customName={customName}
        />,
      );
      rowCount++;
    });
  });

  return (
    <div className={styles.amazingOrdersParent}>
      <table className={styles.amazingOrdersTable}>
        <thead className={styles.tableHeader}>
          <OrderRow rowClassName={styles.lettersRow} entries={["", "A", "B", "C", "D", "E"]} />
        </thead>
        <tbody>
          <OrderRowHeader
            entries={["1", "Date", "Customer Name", "Item Name", "Category", "Price"]}
          />
          {orderRows}
        </tbody>
      </table>
    </div>
  );
}

export default function AmazingOrders() {
  const item1 = <AmazingOrdersTable />;
  const evidenceComponent = <CustomCarousel items={[item1]} />;

  const objectives: ObjectivesJson = {
    heading: "Who are unknown purchasers in the list of orders?",
    sections: [
      {
        title: "Customer Name",
        questions: [
          {
            question: "Unknown A",
            answers: CHAPTER1_NAMES,
            answer: "Candace Eng",
            color: Color.RED,
          },
          {
            question: "Unknown B",
            answers: CHAPTER1_NAMES,
            answer: "Andrew Wolfe",
            color: Color.ORANGE,
          },
          {
            question: "Unknown C",
            answers: CHAPTER1_NAMES,
            answer: "Carlos Sanchez",
            color: Color.YELLOW,
          },
        ],
      },
    ],
  };

  const { isSolved, setSolved } = useContext(ProgressContext);
  const onCorrect = () => {
    if (!isSolved(ProgressKeys.ONLINE_ORDERS)) {
      setSolved(ProgressKeys.ONLINE_ORDERS, true);
    }
  };

  return (
    <TabContentBase
      evidence={evidenceComponent}
      objectivesJson={objectives}
      onCorrect={onCorrect}
    />
  );
}
