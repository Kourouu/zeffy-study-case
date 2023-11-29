'use client'
import { useEffect, useState } from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

import { DonationResponse } from '@/types';

import { Table } from '../components/table/page'

export default function Donations({
  searchParams,
}: {
  searchParams?: {
    page?: string;
  };
}) {
  const pathname = usePathname();
  const { replace } = useRouter();
  const [donations, setDonations] = useState<DonationResponse>([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (value: number) => {
    let page;
    if(value < 1) page = '1'
    else if(value > 10) page = '10'
    else page = value.toString()
    const params = new URLSearchParams(searchParams);
    params.set('page', page)
    console.log(pathname);
    replace(`${pathname}?${params}`);
  }
  
  useEffect(() => {
    setIsLoading(true)
    fetch(`http://localhost:3000/api/donations/${searchParams?.page ?? ''}`)
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
  }, [setIsLoading, setDonations, setError, searchParams]);

  if (isLoading) {
    return (<>Chargement en cours</>)
  }

  if (error) {
    return (<>Une erreur est survenue</>)
  }

  return (
    <>
      <Table donations={donations} />
      <input
        type='number'
        min={1}
        max={10}
        onChange={(e) => handleInputChange(parseInt(e.target.value, 10))}
        defaultValue={searchParams?.page}
      />
    </>
  )
}