import type { Metadata } from 'next';
import '../globals.css';
import { Inter } from 'next/font/google';

export const metadata: Metadata = {
  title: 'OU Insight Hub',
  description: '',
};

const inter = Inter({ subsets: ['latin'] });

export default function AuthLayout ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
};