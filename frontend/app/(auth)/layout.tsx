import type { Metadata } from 'next';
import '../globals.css';
import { Inter } from 'next/font/google';
import { Toaster } from "@/components/ui/sonner"
import QueryProvider from '@/components/Providers/QueryProvider';
import { UserProvider } from '@/components/Providers/UserProvider';
import { ThemeProvider } from '@/components/Providers/ThemeProvider';

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
        <QueryProvider>
          <UserProvider>
            <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
              <main>
                {children}
              </main>
              <Toaster />
            </ThemeProvider>
          </UserProvider>
        </QueryProvider>
      </body>
    </html>
  );
};