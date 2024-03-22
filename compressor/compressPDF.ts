import { PDFDocument } from 'pdf-lib';

async function compressPDF(file: File): Promise<Blob> {
  const pdfBytes = await file.arrayBuffer();
  const pdfDoc = await PDFDocument.load(pdfBytes);

  pdfDoc.setTitle('PDF Comprimido');

  const compressedPdfBytes = await pdfDoc.save();

  return new Blob([compressedPdfBytes], { type: 'application/pdf' });
}

async function handleCompressPDF() {
  const fileInput = document.getElementById('fileInput') as HTMLInputElement;
  const file = fileInput.files?.[0];

  if (!file) return;

  const compressedPdfBlob = await compressPDF(file);

  const url = URL.createObjectURL(compressedPdfBlob);
  window.open(url);
}
