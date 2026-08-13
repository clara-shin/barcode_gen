import { useState } from 'react';
import BarcodeDisplay from './components/BarcodeDisplay';
import BarcodeInput from './components/BarcodeInput';
import CodeTypeToggle from './components/CodeTypeToggle';
import QRCodeDisplay from './components/QRCodeDisplay';
import { validateInput } from './lib/validators';
import type { CodeMode } from './types/barcode';

export default function App() {
  const [value, setValue] = useState('');
  const [mode, setMode] = useState<CodeMode>('barcode');

  const validation = validateInput(value);

  return (
    <div style={{ width: 380, margin: '40px auto', padding: 16 }}>
      <h1 style={{ fontSize: 20, marginBottom: 16 }}>바코드 / QR코드 생성기</h1>

      <BarcodeInput
        value={value}
        onChange={setValue}
        errorMessage={value && !validation.isValid ? validation.errorMessage : undefined}
      />

      <div style={{ margin: '16px 0' }}>
        <CodeTypeToggle mode={mode} onChange={setMode} />
      </div>

      {validation.isValid && (
        <>
          {mode === 'barcode' ? <BarcodeDisplay value={value} /> : <QRCodeDisplay value={value} />}
        </>
      )}
    </div>
  );
}
