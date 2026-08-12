import { QRCodeSVG } from 'qrcode.react';

interface QRCodeDisplayProps {
  value: string;
}

export default function QRCodeDisplay({ value }: QRCodeDisplayProps) {
  if (!value) return null;

  return (
    <div style={{ textAlign: 'center' }}>
      <QRCodeSVG value={value} size={180} />
      <p style={{ marginTop: 4 }}>{value}</p>
    </div>
  );
}
