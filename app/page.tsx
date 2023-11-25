'use client'

import { Donation, DonationResponse } from '@/types';
import { useEffect, useState } from 'react';

export default function Home() {

  const [donations, setDonations] = useState<DonationResponse>([]);
  useEffect(() => {
    fetch(`http://localhost:3000/api/donations`)
      .then((response) => response.json())
      .then((data: {data: DonationResponse}) => {
        console.log(data.data)
        setDonations(data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  console.log(donations)

  return (
    <table>
      {donations.map((donation) => (
        <tr key={donation.id}>
          <td>{donation.donation.createdAtUtc}</td>
          <td>{donation.donation.firstName}</td>
          <td>{donation.donation.lastName}</td>
          <td>{donation.donation.amount}</td>
        </tr>
      ))}
    </table>
  );
}
