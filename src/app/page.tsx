// import Image from "next/image";
// import { PDFUploader } from "@/components/ui/uploader";
// import { getSession } from '@auth0/nextjs-auth0';
import { getSession } from '@auth0/nextjs-auth0';
import { redirect } from 'next/navigation';


export default async function Home() {
  const session = await getSession();
  const user = session?.user;
  if (!user) {
    redirect('https://fluyo.co');
  }

  return <main>

    </main>
}
