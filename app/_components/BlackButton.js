"use client"
import Link from 'next/link';
import { useFormStatus } from 'react-dom';
import './blackButton.css';

function BlackButton({ children }) {
  const {pending} = useFormStatus();

  return (
    <button className="btn" disabled={pending ?? false}>
      {children}
    </button>
  );
}

export default BlackButton;
