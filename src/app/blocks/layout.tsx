export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="flex items-start justify-center p-20">{children}</div>;
}
