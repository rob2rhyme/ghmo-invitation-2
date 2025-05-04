// components/LetterheadForm.tsx
import { ChangeEvent } from 'react';
import styles from '../styles/LetterheadForm.module.css';

export interface LetterData {
  org: string;
  eventName: string;
  date: Date;
  time: string;
  address: string;
  phone: string;
}

interface Props {
  data: LetterData;
  onChange: (d: LetterData) => void;
  onPdf: () => void;
  onJpeg: () => void;
}

export default function LetterheadForm({ data, onChange, onPdf, onJpeg }: Props) {
  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    onChange({
      ...data,
      [name]: name === 'date' ? new Date(value) : value,
    });
  }

  return (
    <div className={styles.formWrapper}>
      <div className={styles.field}>
        <label htmlFor="org">Organization</label>
        <input
          id="org"
          name="org"
          type="text"
          value={data.org}
          onChange={handleChange}
        />
      </div>
      <div className={styles.field}>
        <label htmlFor="eventName">Event Name</label>
        <input
          id="eventName"
          name="eventName"
          type="text"
          value={data.eventName}
          onChange={handleChange}
        />
      </div>
      <div className={styles.field}>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          name="date"
          type="date"
          value={data.date.toISOString().slice(0, 10)}
          onChange={handleChange}
        />
      </div>
      <div className={styles.field}>
        <label htmlFor="time">Time</label>
        <input
          id="time"
          name="time"
          type="time"
          value={data.time}
          onChange={handleChange}
        />
      </div>
      <div className={styles.field}>
        <label htmlFor="address">Address</label>
        <textarea
          id="address"
          name="address"
          rows={3}
          value={data.address}
          onChange={handleChange}
        />
      </div>
      <div className={styles.field}>
        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          name="phone"
          type="text"
          value={data.phone}
          onChange={handleChange}
        />
      </div>
      <div className={styles.buttons}>
        <button type="button" onClick={onPdf} className={styles.button}>
          Download PDF
        </button>
        <button
          type="button"
          onClick={onJpeg}
          className={`${styles.button} ${styles.buttonSecondary}`}
        >
          Download JPEG
        </button>
      </div>
    </div>
  );
}