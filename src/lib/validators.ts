import type { ValidationResult } from '../types/barcode';

// 위치바코드 패턴: 영문자/숫자로 이루어진 세그먼트가 -(dash)로 2개 이상 연결된 형태
// 예) 3018-32L30-60-301
const LOCATION_BARCODE_PATTERN = /^[0-9A-Za-z]+(-[0-9A-Za-z]+)+$/;

// 일반 바코드 패턴: 숫자 또는 영문+숫자 조합 (dash 없음)
const GENERAL_BARCODE_PATTERN = /^[0-9A-Za-z]+$/;

export function validateInput(value: string): ValidationResult {
  if (!value) {
    return { isValid: false, isLocationBarcode: false, errorMessage: '값을 입력하세요.' };
  }

  if (LOCATION_BARCODE_PATTERN.test(value)) {
    return { isValid: true, isLocationBarcode: true };
  }

  if (GENERAL_BARCODE_PATTERN.test(value)) {
    return { isValid: true, isLocationBarcode: false };
  }

  return {
    isValid: false,
    isLocationBarcode: false,
    errorMessage: '숫자, 영문자, dash(-)만 입력 가능합니다.',
  };
}
