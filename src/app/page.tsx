import { getSession } from '@auth0/nextjs-auth0';
import { redirect } from 'next/navigation';

export default async function Home() {
  // Si estás usando componentes del lado del servidor
  const session = await getSession();

  // Si no hay usuario en la sesión, redirige
  if (!session?.user) {
    redirect('https://fluyo.co');
    return;
  }

  return (
    <main>
      <h1>Welcome {session.user.name}</h1>
    </main>
  );
}
