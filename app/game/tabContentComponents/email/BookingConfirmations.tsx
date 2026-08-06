import CustomCarousel from "../../components/CustomCarousel";
import TabContentBase from "../TabContentBase";
import styles from "./BookingConfirmations.module.css";
import Email from "./Email";

type ConfirmationProps = {
  reservationName: string;
  reservationDetails: string;
  guestName: string;
  confirmationNumber: string;
  address: string;
};

export function Confirmation({
  reservationName,
  reservationDetails,
  guestName,
  confirmationNumber,
  address,
}: ConfirmationProps) {
  return (
    <div className={styles.confirmationContainer}>
      <h2 className={styles.mainTitle}>Thank you for booking with Round 10!</h2>

      <h3 className={styles.restaurantName}>{reservationName}</h3>
      <p className={styles.reservationDetails}>{reservationDetails}</p>

      <div className={styles.detailsBox}>
        <div className={styles.detailsLine}>
          <strong>Name:</strong> {guestName}
        </div>
        <div className={styles.detailsLine}>
          <strong>Confirmation #:</strong> {confirmationNumber}
        </div>
      </div>

      <div className={styles.addressBox}>
        <div className={styles.addressContent}>{address}</div>
        <div className={styles.getDirections}>Get Directions</div>
      </div>

      <div className={styles.buttonGroup}>
        <div className={styles.button}>Modify Reservation</div>
        <div className={styles.button}>Cancel Reservation</div>
      </div>
    </div>
  );
}

export default function BookingConfirmations() {
  const confirmationIds = ["32345", "67890", "54321", "09876"];
  const emails = [
    "January 8, 2026",
    "December 18, 2025",
    "November 11, 2025",
    "October 19, 2025",
  ].map((date, index) => {
    return (
      <Email
        title="Your booth reservation is confirmed"
        senderName="reservations@round10.com"
        timestamp={date}
        key={index}
      >
        <Confirmation
          reservationName="Booth 1892"
          reservationDetails={`6:00pm - 9:00pm on ${date}`}
          guestName="M. Crocker"
          confirmationNumber={confirmationIds[index]}
          address="Round 10, 186 Pleasant Grove Rd, Kaiser County, NY 14850"
        />
      </Email>
    );
  });

  const evidence = <CustomCarousel items={emails} />;
  return <TabContentBase evidence={evidence} />;
}
