import { fullsetHide, filterResult } from './selectors.js';

export function showAll() {
	filterResult.innerHTML = '';
	fullsetHide.style.display = 'block';
}
