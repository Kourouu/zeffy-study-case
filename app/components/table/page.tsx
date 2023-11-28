import { DonationResponse } from "@/types";
import { Row } from "./row/page";

export const Table = ({donations}: {donations: DonationResponse}) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Prenom</th>
          <th>Nom</th>
          <th>Montant</th>
        </tr>
      </thead>
      <tbody>
      {donations.map((donation) => (
        <Row 
          key={donation.id}
          donation={donation}
        />
      ))}
      </tbody>
    </table>
  );
}