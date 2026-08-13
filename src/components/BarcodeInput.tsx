interface BarcodeInputProps {
  value: string;
  onChange: (value: string) => void;
  errorMessage?: string;
}

export default function BarcodeInput({ value, onChange, errorMessage }: BarcodeInputProps) {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', gap: 4, margin: '0 auto', minWidth: 300 }}
    >
      <input
        type='text'
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder='바코드 값을 입력하세요'
        style={{ padding: 8, fontSize: 16, boxSizing: 'border-box' }}
      />
      {errorMessage && <p style={{ color: 'red', fontSize: 14, marginTop: 4 }}>{errorMessage}</p>}
    </div>
  );
}
