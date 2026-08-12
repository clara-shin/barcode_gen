export interface BarcodeOptions {
  format: string;
  displayValue: boolean;
  textPosition: 'top' | 'bottom';
  textAlign: 'left' | 'center' | 'right';
  width: number;
  height: number;
  margin: number;
}

// CODE128은 숫자/영문/dash를 모두 지원하므로 일반 바코드와 위치바코드 둘 다 CODE128 사용
export function getBarcodeOptions(): BarcodeOptions {
  return {
    format: 'CODE128',
    displayValue: false, // 텍스트는 별도 컴포넌트에서 렌더링
    textPosition: 'bottom',
    textAlign: 'center',
    width: 2,
    height: 80,
    margin: 10,
  };
}
