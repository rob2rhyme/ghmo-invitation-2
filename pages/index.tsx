// pages/index.tsx
import { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

import styles from '../styles/Home.module.css';
import LetterheadForm, { LetterData } from '../components/LetterheadForm';
import Preview from '../components/Preview';

export default function Home() {
  const [data, setData] = useState<LetterData>({
    org: '',
    eventName: '',
    date: new Date(),
    time: '15:00',
    address: '',
    phone: '',
  });
  const previewRef = useRef<HTMLDivElement>(null);

  const handleChange = (updated: LetterData) => {
    setData(updated);
  };

  const downloadPdf = async () => {
    if (!previewRef.current) return;
    const canvas = await html2canvas(previewRef.current, { scale: 2 });
    const img = canvas.toDataURL('image/png');
    const pdf = new jsPDF({ unit: 'in', format: 'letter' });
    pdf.addImage(img, 'PNG', 0, 0, 8.5, 11);
    pdf.save('letter.pdf');
  };

  const downloadJpeg = async () => {
    if (!previewRef.current) return;
    const canvas = await html2canvas(previewRef.current, {
      scale: 2,
      backgroundColor: '#ffffff',
    });
    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/jpeg', 1.0);
    link.download = 'letter.jpg';
    link.click();
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <LetterheadForm
            data={data}
            onChange={handleChange}
            onPdf={downloadPdf}
            onJpeg={downloadJpeg}
          />
        </div>
        <div className={styles.previewWrapper} ref={previewRef}>
          <Preview {...data} />
        </div>
      </div>
    </div>
  );
}