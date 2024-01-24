import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const generatePdf = async (componentRef, fileName) => {
  const input = componentRef.current;

  if (!input) {
    console.error('Component reference is null');
    return;
  }

  const canvas = await html2canvas(input);
  const pdf = new jsPDF();
  pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0);
  pdf.save(fileName);
};

export default generatePdf;