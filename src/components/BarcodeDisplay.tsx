import JsBarcode from 'jsbarcode';
import { useEffect, useRef } from 'react';
import { getBarcodeOptions } from '../lib/barcodeUtils';
import './BarcodeDisplay.css';

interface BarcodeDisplayProps {
  value: string;
}

export default function BarcodeDisplay({ value }: BarcodeDisplayProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current || !value) return;

    try {
      JsBarcode(svgRef.current, value, getBarcodeOptions());
    } catch (err) {
      console.error('바코드 생성 실패:', err);
    }
  }, [value]);

  if (!value) return null;

  return (
    <div className='barcode-display'>
      <svg ref={svgRef} className='barcode-svg' preserveAspectRatio='none' />
      <p style={{ textAlign: 'center', marginTop: 4 }}>{value}</p>
    </div>
  );
}
