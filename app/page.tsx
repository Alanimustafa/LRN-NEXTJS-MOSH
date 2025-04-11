
export default function Home() {

  return (
    <main className="p-[34] font-light">
      <h1 className="text-3xl text-amber-500">HOME PAGE</h1>
      <div className="flex items-center justify-center h-screen">
        <div
          className="w-[640px] h-[480px] bg-cover bg-center rounded-lg shadow-lg"
          style={{ backgroundImage: "url('/MK-BG.png')" }}
        >
          <h1 className="flex drop-shadow-lg text-4xl text-white align-bottom">Scorpion</h1>
        </div>
      </div>
    </main>
  );
}
