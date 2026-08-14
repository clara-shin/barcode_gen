import { useRef } from 'react';

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
    <div
      style={{ display: 'flex', flexDirection: 'column', gap: 4, margin: '0 auto', minWidth: 300 }}
    >
      <div style={{ position: 'relative' }}>
        <input
          ref={inputRef}
          type='text'
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder='바코드 값을 입력하세요'
          style={{ padding: 8, fontSize: 18, boxSizing: 'border-box', width: '100%' }}
        />
        {value && (
          <button
            onClick={handleClear}
            style={{
              position: 'absolute',
              right: 8,
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: 24,
              color: '#9ca3af',
              padding: 0,
              lineHeight: 1,
            }}
          >
            ✕
          </button>
        )}
      </div>
      {errorMessage && <p style={{ color: 'red', fontSize: 14, marginTop: 4 }}>{errorMessage}</p>}
    </div>
  );
}
