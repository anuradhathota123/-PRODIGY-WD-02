let startTime = 0;
let running = false;

document.querySelector('.start').addEventListener('click', () => {
	startTime = new Date().getTime();
	running = true;
	updateTime();
});

document.querySelector('.stop').addEventListener('click', () => {
	running = false;
});

document.querySelector('.reset').addEventListener('click', () => {
	startTime = 0;
	running = false;
	document.querySelector('.time').textContent = '00:00:00';
});

function updateTime() {
	if (running) {
		const currentTime = new Date().getTime();
		const elapsed = currentTime - startTime;
		const seconds = Math.floor(elapsed / 1000);
		const minutes = Math.floor(seconds / 60);
		const hours = Math.floor(minutes / 60);
		document.querySelector('.time').textContent = `${pad(hours)}:${pad(minutes % 60)}:${pad(seconds % 60)}`;
		requestAnimationFrame(updateTime);
	}
}

function pad(number) {
	return (number < 10 ? '0' : '') + number;
}
