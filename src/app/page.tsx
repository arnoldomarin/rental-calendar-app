
import KPICards from "@/components/KPIs/KPICards";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24 w-full">
      <div className="w-full">
        <Navbar />
      </div>
      <div>
        <KPICards />
      </div>
    </main>
  );
}
