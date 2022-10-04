import { useSession } from 'next-auth/react';
import Router from 'next/router';
import { useEffect } from 'react';

export default function Protected() {
  const { status, data } = useSession();

  useEffect(() => {
    if (status === 'unauthenticated') Router.replace('/auth/signin');
  }, [status]);
  if (status === 'authenticated') {
    return (
      <div>
        You is AUTHENTICATED
        <br />
        {JSON.stringify(data.user, null, 2)}
      </div>
    );
  }

  return <div>loading</div>;
}
