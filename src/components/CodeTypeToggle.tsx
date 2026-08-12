import type { CodeMode } from '../types/barcode';

interface CodeTypeToggleProps {
  mode: CodeMode;
  onChange: (mode: CodeMode) => void;
}

export default function CodeTypeToggle({ mode, onChange }: CodeTypeToggleProps) {
  const isQrCode = mode === 'qrcode';

  return (
    <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
      <span>바코드</span>
      <input
        type='checkbox'
        checked={isQrCode}
        onChange={(e) => onChange(e.target.checked ? 'qrcode' : 'barcode')}
      />
      <span>QR코드</span>
    </label>
  );
}
