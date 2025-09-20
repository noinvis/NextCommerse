import VerifySection from '@/components/verify-section/VerifySection';
import { memo } from 'react';

const Verify = async ({searchParams}: {searchParams: Promise<{q: string}>}) => {
  const {q} = await searchParams
  const user = atob(q)
  return (
    <VerifySection user={user}/>
  );
};

export default memo(Verify);