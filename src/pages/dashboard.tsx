import { GetServerSideProps } from 'next';

import { DashboardLayout } from 'layouts';
import { parseCookies } from 'nookies';

export default function Dashboard() {
  return <DashboardLayout />;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { 'next-template--token': existingToken } = parseCookies(ctx);

  if (!existingToken) {
    return { redirect: { destination: '/', permanent: false } };
  }

  return {
    props: {},
  };
};
