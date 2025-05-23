import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center" id="titlepage">
      <h1 className="mb-4 text-2xl font-semibold">A guide to good health</h1>
      <p>
        
        <Link
          href="/text"
          className="text-fd-foreground hover:text-fd-muted-foreground"
        >
          Click {' '}here{' '}
          to read more...
        </Link>
      </p>
    </main>
  );
}
