import './globals.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body className='font-regular *:text-cgray'>
        {children}
      </body>
    </html>
  );
}
