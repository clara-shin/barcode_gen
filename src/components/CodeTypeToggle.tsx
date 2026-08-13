import type { CodeMode } from '../types/barcode';
import './CodeTypeToggle.css';

interface CodeTypeToggleProps {
  mode: CodeMode;
  onChange: (mode: CodeMode) => void;
}

export default function CodeTypeToggle({ mode, onChange }: CodeTypeToggleProps) {
  const isQrCode = mode === 'qrcode';

  return (
    <label className={`toggle-switch ${isQrCode ? 'qrcode' : ''}`}>
      <input
        type='checkbox'
        checked={isQrCode}
        onChange={(e) => onChange(e.target.checked ? 'qrcode' : 'barcode')}
      />
      <span className='toggle-switch__thumb'>{isQrCode ? 'QR코드' : '바코드'}</span>
    </label>
  );
}
