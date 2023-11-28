import { DonationResponse } from "@/types";

import styles from './styles.module.css'

export const Table = ({donations}: {donations: DonationResponse}) => {
  return (
    <table>
      <thead>
        <tr className={styles.tr}>
          <th>Date</th>
          <th>Prenom</th>
          <th>Nom</th>
          <th>Montant</th>
        </tr>
      </thead>
      <tbody>
      {donations.map((donation) => (
        <tr className={styles.tr} key={donation.id}>
          <td className={styles.td}>{donation.donation.createdAtUtc}</td>
          <td className={styles.td}>{donation.donation.firstName}</td>
          <td className={styles.td}>{donation.donation.lastName}</td>
          <td className={styles.td}>{donation.donation.amount}</td>
        </tr>
      ))}
      </tbody>
    </table>
  );
}