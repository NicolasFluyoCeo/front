// app/layout.jsx
import { UserProvider } from '@auth0/nextjs-auth0/client';



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
    <UserProvider
    auth0={
      {
        audience: 'https://api.fluyo.co',
        domain: 'dev-zpu0bmc0ijrv1gne.us.auth0.com',
        clientId: 'hm4ibUYwME78sGXvr6WS8pQ88BRqWiTb',
        clientSecret: 'W7lkEGvpoAviYKAiLX4WyEjRl90iNaIf4VLngCKOD5_z2bK1U_JYSyyoygsjwj_x'
      }
    }>
      <body>{children}</body>
    </UserProvider>
    </html>
  );
}