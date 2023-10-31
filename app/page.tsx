export default function Home() {
  return (
    <main className="bg-white text-black h-screen w-screen">
      <div className="bg-zinc-900 text-white flex flex-col items-center">
        <h1 className="text-3xl text-center my-10 uppercase">Nerve</h1>
      </div>
      <div className="p-10 flex flex-col">
        <p>Welcome to Nerve.</p>
        <p>A game like truth or dare, minus the truth.</p>
        <p>Complete dares to earn money.</p>
        <p>Watch your friends twerk in Hugel and undie run in Farinon.</p>
        <p>Now available at Lafayette.</p>
      </div>
      <div className="p-10">
        <iframe
          height="100%"
          src="https://www.youtube.com/embed/o4limnFP0qM?autoplay=0&showinfo=0&controls=0"
        />
      </div>
    </main>
  );
}
