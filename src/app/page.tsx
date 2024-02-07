'use client'

// import React, { useRef } from 'react';
import React from 'react';
import Navbar from "@/components/Navbar";
import ResizableComponent from "@/components/Resizable/ResizableComponent";
// import generatePdf from './pdfGenerator';
import { Margin, usePDF } from 'react-to-pdf';

import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';

async function createPdf() {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage();
  const { width, height } = page.getSize();
  const font = await pdfDoc.embedFont(StandardFonts.TimesRoman);

  const text = 'Hello, PDF-lib!';
  page.drawText(text, { x: 50, y: height - 100, font });

  // Save the PDF to a Uint8Array
  const pdfBytes = await pdfDoc.save();

  // Return the generated PDF bytes
  return pdfBytes;
}

export default function Home() {
  // const componentRef = useRef<HTMLDivElement>(null);
  const { toPDF, targetRef } = usePDF({
    filename: "usepdf-example.pdf",
    page: { margin: Margin.MEDIUM }
  });

  // const handleGeneratePdf = () => {
  //   // generatePdf(componentRef, 'output.pdf');
  //   window.print()
  // };
  const handleGeneratePdf = async () => {
    try {
      const pdfBytes = await createPdf();
      downloadPdf(pdfBytes, 'generated_pdf.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  const downloadPdf = (pdfBytes: BlobPart, fileName: string) => {
    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className="flex flex-col items-center justify-between w-full">
      <div className="w-full">
      {/* <div ref={componentRef}> */}
      {/* <div ref={targetRef} className="w-full">
        <div className="w-full">
          <ResizableComponent />
        </div>
      </div> */}
      {/* <button onClick={() => handleGeneratePdf()}>Generate PDF</button> */}
      {/* <button onClick={() => toPDF()}>Download PDF</button> */}
      {/* <button onClick={handleGeneratePdf}>PDF Lib</button> */}
    </div>
    </main>
  );
}
