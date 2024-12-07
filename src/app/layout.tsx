import type { Metadata } from "next";
import "../index.css";

export const metadata: Metadata = {
  title: "Jayam Builders",
  description: "Portfolio of Jayam Builders.",
  icons: { icon: "/icon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  <html lang="en" className="scroll-smooth">
    <head>
      <meta charSet="UTF-8" />
      <link rel="icon" href="/icon.ico" />
      <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body>
      <div id="root">{children}</div>
      <script type="module" src="/src/main.tsx"></script>
    </body>
    <script></script>
  </html>;
}
