import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { OrdersList } from "./OrdersList";
import { JSX } from "react";

function OrderRow({ entries, rowClassName }: { entries: string[]; rowClassName?: string }) {
  return (
    <Row className={rowClassName}>
      <Col>{entries[0]}</Col>
      <Col>{entries[1]}</Col>
      <Col>{entries[2]}</Col>
      <Col>{entries[3]}</Col>
      <Col>{entries[4]}</Col>
      <Col>{entries[5]}</Col>
    </Row>
  );
}

export default function AmazingOrders() {
  const orderRows: JSX.Element[] = [];
  let rowCount = 2;
  OrdersList.forEach((order, index) => {
    order.items.forEach((item) => {
      orderRows.push(
        <OrderRow
          key={rowCount}
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
    <Container>
      <OrderRow entries={["", "1", "2", "3", "4", "5"]} />
      <OrderRow entries={["1", "Order Date", "Order ID", "Title", "Category", "Price"]} />
      {orderRows}
    </Container>
  );
}
