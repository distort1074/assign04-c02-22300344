// 두 페이지에서 동일하게 브라우저 기본 입력 검증을 사용한다.
const checkoutForm = document.querySelector('#checkout-form');
const result = document.querySelector('#result');

checkoutForm.addEventListener('submit', (event) => {
  event.preventDefault();
  result.textContent = '필수 입력 항목을 확인했습니다. 실습이 완료되었습니다. 실제 주문은 생성되지 않습니다.';
  result.focus();
});

checkoutForm.addEventListener('reset', () => {
  result.textContent = '';
});

checkoutForm.addEventListener('input', () => {
  result.textContent = '';
});
