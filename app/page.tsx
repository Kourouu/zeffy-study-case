'use client'
import { useEffect, useState } from 'react';


import { DonationResponse } from '@/types';

import { Table } from './components/table/page'

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
    <Table donations={donations} />
  );
}
