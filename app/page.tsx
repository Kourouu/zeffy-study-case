'use client'
import { useEffect, useState } from 'react';


import { DonationResponse } from '@/types';

import { Table } from './components/table/page'

export default function Home() {

  const [donations, setDonations] = useState<DonationResponse>([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:3000/api/donations`)
      .then((response) => response.json())
      .then((data: {data: DonationResponse}) => {
        setDonations(data.data);
      })
      .catch((error) => setError(error));
  }, []);

  console.log(donations)

  return (
    error ? 
      (<>Une erreur est survenue</>) :
      (<Table donations={donations} />)    
  );
}
