import { DonationResponse } from "@/types";
import { formatDate } from "@/utils";

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
        <tr key={donation.id}>
          <td>{formatDate(donation.donation.createdAtUtc)}</td>
          <td>{donation.donation.firstName}</td>
          <td>{donation.donation.lastName}</td>
          <td>{donation.donation.amount}</td>
        </tr>
      ))}
      </tbody>
    </table>
  );
}