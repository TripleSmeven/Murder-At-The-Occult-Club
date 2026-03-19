import { OrdersList } from "./OrdersList";
import { JSX, useState } from "react";
import styles from "./AmazingOrders.module.css";
import CustomCarousel from "../../components/CustomCarousel";
import TabContentBase from "../TabContentBase";

function OrderRow({
  entries,
  rowClassName,
  color,
}: {
  entries: string[];
  rowClassName?: string;
  color?: string;
}) {
  return (
    <tr className={`${rowClassName} ${color && styles[color]}`}>
      <td className={styles.numberCell}>{entries[0]}</td>
      <td className={styles.dateCell}>{entries[1]}</td>
      <td className={styles.idCell}>{entries[2]}</td>
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
      <td className={styles.idCell}>{entries[2]}</td>
      <td className={styles.titleCell}>{entries[3]}</td>
      <td className={styles.categoryCell}>{entries[4]}</td>
      <td className={styles.priceCell}>{entries[5]}</td>
    </tr>
  );
}

function AmazingOrdersTable() {
  const orderRows: JSX.Element[] = [];
  let rowCount = 2;
  OrdersList.forEach((order, index) => {
    order.items.forEach((item) => {
      orderRows.push(
        <OrderRow
          key={rowCount}
          color={order.color}
          entries={[
            rowCount.toString(),
            order.date,
            order.orderId,
            item.name,
            item.category,
            item.price,
          ]}
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
          <OrderRowHeader entries={["1", "Date", "Order ID", "Title", "Category", "Price"]} />
          {orderRows}
        </tbody>
      </table>
    </div>
  );
}

export default function AmazingOrders() {
  const item1 = <AmazingOrdersTable />;
  const evidenceComponent = <CustomCarousel items={[item1]} />;
  return <TabContentBase evidence={evidenceComponent} />;
}
