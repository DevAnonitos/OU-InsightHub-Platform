import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import '../globals.css';
import QueryProvider from '@/components/Providers/QueryProvider';
import AdminNavbar from '@/components/Custombar/AdminNavbar';
import AdminSidebar from '@/components/Custombar/AdminSidebar';

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