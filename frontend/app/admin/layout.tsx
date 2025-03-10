import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import '../globals.css';
import QueryProvider from '@/components/Providers/QueryProvider';

const inter = Inter({
  subsets: ['latin'],
  weight: '400',
});

export const metadata: Metadata = { 
  title: 'OU Insight Hub - Admin Dashboard',
  description: '',
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryProvider>
          <main className="">
            {children}
          </main>
        </QueryProvider>
      </body>
    </html>
  );
};