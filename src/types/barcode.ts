export type CodeMode = 'barcode' | 'qrcode';

export interface ValidationResult {
  isValid: boolean;
  isLocationBarcode: boolean;
  errorMessage?: string;
}
