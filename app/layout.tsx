import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';

import { Toaster } from '@/components/ui/sonner';
import { cn } from '@/lib/utils';

import { Footer } from '@/components/footer';
import { DrawerProvider } from '@/providers/sheet-provider';
import './globals.css';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Inventory Manager',
  description: 'Inventory Manager by Nathan Marcellous',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
    >
      <body className={cn('font-sans antialiased', fontSans.variable)}>
        <DrawerProvider />
        <Toaster />
        {children}
      </body>
    </html>
  );
}
