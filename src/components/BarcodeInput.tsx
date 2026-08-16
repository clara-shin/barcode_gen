import { useRef } from 'react';
import './BarcodeInput.css';

interface BarcodeInputProps {
  value: string;
  onChange: (value: string) => void;
  errorMessage?: string;
}

export default function BarcodeInput({ value, onChange, errorMessage }: BarcodeInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClear = () => {
    onChange('');
    inputRef.current?.focus();
  };

  return (
    <div className='barcode-input-wrapper'>
      <div style={{ position: 'relative' }}>
        <input
          ref={inputRef}
          type='text'
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder='바코드 값을 입력하세요'
          className='barcode-input'
        />
        {value && (
          <button onClick={handleClear} className='clear-button'>
            ✕
          </button>
        )}
      </div>
      {errorMessage && <p style={{ color: 'red', fontSize: 14, marginTop: 4 }}>{errorMessage}</p>}
    </div>
  );
}
