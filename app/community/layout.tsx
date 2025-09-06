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
        <div className='pt-24 px-16'>{children}</div>
      </body>
    </html>
  );
}
