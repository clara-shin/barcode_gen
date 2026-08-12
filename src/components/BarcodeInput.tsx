interface BarcodeInputProps {
  value: string;
  onChange: (value: string) => void;
  errorMessage?: string;
}

export default function BarcodeInput({ value, onChange, errorMessage }: BarcodeInputProps) {
  return (
    <div>
      <input
        type='text'
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder='바코드 값을 입력하세요 (예: 3018-32L30-60-301)'
        style={{ width: '100%', padding: 8, fontSize: 16 }}
      />
      {errorMessage && <p style={{ color: 'red', fontSize: 14, marginTop: 4 }}>{errorMessage}</p>}
    </div>
  );
}
