import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import '../globals.css';
import QueryProvider from '@/components/Providers/QueryProvider';
import { ThemeProvider } from '@/components/Providers/ThemeProvider';
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
          <ThemeProvider>
            <main className="">
              {children}
            </main>
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
};