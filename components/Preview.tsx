// components/Preview.tsx
import styles from '../styles/Preview.module.css';
import { LetterData } from './LetterheadForm';

export default function Preview({ org, eventName, date, time, address, phone }: LetterData) {
  return (
    <div className={styles.preview}>
      <h1>{org || 'Organization'}</h1>
      <p><strong>Event:</strong> {eventName}</p>
      <p>
        <strong>Date:</strong> {date.toLocaleDateString()} at {time}
      </p>
      <p><strong>Address:</strong> {address}</p>
      <p><strong>Phone:</strong> {phone}</p>
    </div>
  );
}