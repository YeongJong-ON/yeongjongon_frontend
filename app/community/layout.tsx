import '../globals.css'
import NavBar from '@/components/nav-bar'

export default function CommunityLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body className='font-regular *:text-cgray'>
        <NavBar />
        <div>{children}</div>
      </body>
    </html>
  );
}
