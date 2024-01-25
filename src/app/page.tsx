'use client'

import React, { useRef } from 'react';
import Navbar from "@/components/Navbar";
import ResizableComponent from "@/components/Resizable/ResizableComponent";
// import generatePdf from './pdfGenerator';
import { Margin, usePDF } from 'react-to-pdf';

export default function Home() {
  // const componentRef = useRef<HTMLDivElement>(null);
  const { toPDF, targetRef } = usePDF({
    filename: "usepdf-example.pdf",
    page: { margin: Margin.MEDIUM }
  });

  const handleGeneratePdf = () => {
    // generatePdf(componentRef, 'output.pdf');
    window.print()
  };


  return (
    <main className="flex flex-col items-center justify-between p-24 w-full">
      <div>
      {/* <div ref={componentRef}> */}
      <div ref={targetRef}>
        {/* Your Next.js component content goes here */}
        <div className="w-full">
        <Navbar />
      </div>
      <div className="w-full mt-5">
        <ResizableComponent />
      </div>
      </div>
      {/* <button onClick={() => handleGeneratePdf()}>Generate PDF</button> */}
      <button onClick={() => toPDF()}>Download PDF</button>
    </div>
    </main>
  );
}
