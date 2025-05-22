import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {

  const session = await getServerSession(authOptions); // Get the session from the server-side using getServerSession

  if (!session) {
    return (
      <main className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl text-amber-500">Please log in to access this page.</h1>
      </main>
    );
  }
  console.log(session);
  return (
    <main className="p-[34] font-light">
      <h2 className="text-2xl text-amber-500 justify-self-end">Hello {session?.user!.email}</h2>
      <h1 className="text-3xl text-amber-500">HOME PAGE</h1>
      <div className="flex items-center justify-center h-screen">
        <div
          className="w-[640px] h-[480px] bg-cover bg-center rounded-lg shadow-lg"
          style={{ backgroundImage: "url('/MK-BG.png')" }}
        >
          <h1 className="flex drop-shadow-lg text-4xl text-white align-bottom">Scorpion</h1>
        </div>
      </div>
      <footer>
        <div className="flex justify-center items-center h-16 bg-gray-800 text-white">
          <p className="text-lg">© 2023 Your Company. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
