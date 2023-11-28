import { Donation } from "@/types";
import { formatDate } from "@/utils";

export const Row = ({donation}: {donation: Donation}) => {
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
        <tr>
          <td>{formatDate(donation.donation.createdAtUtc)}</td>
          <td>{donation.donation.firstName}</td>
          <td>{donation.donation.lastName}</td>
          <td>{donation.donation.amount}</td>
        </tr>
      </tbody>
    </table>
  );
}