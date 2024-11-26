export default function Home() {

  const WORLD = process.env.NEXT_PUBLIC_WORLD

  return (
    <>
      <div className="container">
        <p className="text">Hello {WORLD}!</p>
      </div>
    </>
  );
}
