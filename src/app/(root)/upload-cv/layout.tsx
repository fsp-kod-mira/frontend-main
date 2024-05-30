export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="mt-10 grow flex flex-col justify-center items-center">
      {children}
    </section>
  );
}
