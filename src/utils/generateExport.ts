// src/utils/generateExport.ts
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export async function exportAsPdf(elementId: string) {
  const el = document.getElementById(elementId);
  if (!el) return;
  // cast to any so TS won’t complain about unknown props
  const canvas = await html2canvas(el as HTMLElement, { scale: 2 } as any);
  const img = canvas.toDataURL('image/png');
  const pdf = new jsPDF({ unit: 'pt', format: 'letter' });
  const w = pdf.internal.pageSize.getWidth();
  const h = (canvas.height * w) / canvas.width;
  pdf.addImage(img, 'PNG', 0, 0, w, h);
  pdf.save('invitation.pdf');
}

export async function exportAsJpg(elementId: string) {
  const el = document.getElementById(elementId);
  if (!el) return;
  const canvas = await html2canvas(el as HTMLElement, { scale: 2 } as any);
  const jpg = canvas.toDataURL('image/jpeg', 0.95);
  const a = document.createElement('a');
  a.href = jpg;
  a.download = 'invitation.jpg';
  a.click();
}
