import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Darshil Desai — Website Developer',
  description: 'Portfolio of Darshil Desai — Website Developer specializing in fast, responsive, and visually stunning websites. React, Next.js, WordPress, Shopify.',
};

export default function Page() {
  return <PageClient />;
}
