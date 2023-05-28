import { TypeLayout } from "./global/interfaces/globals";

import "./global/styles/globals.css";

export const metadata = {
  title: 'FREE-DELIVERY',
  description: 'Hire couriers quickly and easily',
};

export default function RootLayout({ children }: TypeLayout) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};
