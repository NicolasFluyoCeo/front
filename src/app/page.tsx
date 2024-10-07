import { getSession } from '@auth0/nextjs-auth0';
import { redirect } from 'next/navigation';

export default async function Home() {

  return (
    <main>
      <h1>Welcome </h1>
    </main>
  );
}
