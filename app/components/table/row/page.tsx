import { Donation } from "@/types";
import { formatDate } from "@/utils";

export const Row = ({donation}: {donation: Donation}) => {
  return (
    <tr>
      <td>{formatDate(donation.donation.createdAtUtc)}</td>
      <td>{donation.donation.firstName}</td>
      <td>{donation.donation.lastName}</td>
      <td>{donation.donation.amount}</td>
    </tr>
  );
}