import Navbar from "@/components/Navbar";
import ResizableComponent from "@/components/Resizable/ResizableComponent";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24 w-full">
      <div className="w-full">
        <Navbar />
      </div>
      <div className="w-full mt-5">
        <ResizableComponent />
      </div>
    </main>
  );
}
