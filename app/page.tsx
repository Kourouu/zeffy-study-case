'use client'

import { usePathname, useRouter } from 'next/navigation';

import Donations from './donations/page';

export default function Home() {
  const pathname = usePathname();
  const { replace } = useRouter();

  pathname === '/' && replace('donations?page=1');

  return <Donations />;
}
