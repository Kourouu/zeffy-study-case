'use client'
import { useEffect, useState } from 'react';

import { DonationResponse } from '@/types';

import { Table } from './components/table/page'

export default function Home() {

  const [donations, setDonations] = useState<DonationResponse>([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(0);
  
  useEffect(() => {
    setIsLoading(true)
    fetch(`http://localhost:3000/api/donations/${page}`)
      .then((response) => {
        return response.json()
      }
      )
      .then((data: {data: DonationResponse}) => {
        setIsLoading(false)
        setDonations(data.data)
      })
      .catch((error) => {
        setIsLoading(false)
        setError(error)
      });
  }, [setIsLoading, setDonations, setError, page]);

  if (isLoading) {
    return (<>Chargement en cours</>)
  }

  if (error) {
    return (<>Une erreur est survenue</>)
  }

  return (
  <Table donations={donations} />
  )
}
