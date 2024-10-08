// Splash 화면이 일정 시간 후 사라지게 설정
window.onload = function() {
    setTimeout(function() {
        document.getElementById('splash-screen').style.display = 'none';
        document.getElementById('content').classList.remove('hidden');
    }, 2000); // 2초 후에 스플래시 화면 사라짐
};

// 이미지 배열
const images1 = [
    "DSCN4437.jpg", "DSCN4416.jpg", "DSCN4684.jpg", 
    "DSCN3951.jpg", "DSCN3963.jpg", "DSCN3990.jpg", 
    "DSCN4002.jpg", "DSCN4015.jpg", "DSCN4404.jpg",
    "DSCN4422.jpg", "DSCN4423.jpg", "DSCN4428.jpg",
    "DSCN4431.jpg", "DSCN4433.jpg", "DSCN4435.jpg",
    "DSCN4440.jpg", "DSCN4539.jpg", "DSCN4569.jpg",
    "DSCN4587.jpg", "DSCN4487.jpg", "DSCN4686.jpg", 
    "DSCN4444.jpg"
];

const images2 = [
    "DSCN4047.jpg", "DSCN4023.jpg", "2.jpg", 
    "3.jpg", "4.jpg", "DSCN4370.jpg", "DSCN4388.jpg", 
    "DSCN4394.jpg", "DSCN4395.jpg", "DSCN4389.jpg",
    "DSCN4429.jpg", "DSCN4432.jpg", "DSCN4590.jpg",
    "DSCN4840.jpg", "DSCN4602.jpg", "DSCN4605.jpg",
    "DSCN4661.jpg", "DSCN4647.jpg", "DSCN4664.jpg",
    "DSCN4665.jpg", "DSCN4609.jpg", "DSCN4600.jpg",
    "DSCN4728.jpg", "DSCN4800.jpg", "DSCN4808.jpg"
];

// 커서 이동 시 따라다니는 텍스트 설정
document.addEventListener('mousemove', function(e) {
    const cursorText = document.getElementById('cursor-text');
    cursorText.style.left = e.pageX + 'px';
    cursorText.style.top = e.pageY + 'px';
});

// 이미지 클릭 시 텍스트 랜덤화 및 커서 애니메이션
document.querySelectorAll('.image-container').forEach(container => {
    container.onclick = function(event) {
        const cursorText = document.getElementById('cursor-text');
        const letters = ['S', 'H', 'U', 'F', 'F', 'L', 'E'];
        const updates = 10; // 텍스트와 이미지 업데이트 횟수
        let currentUpdate = 0; // 현재 업데이트 횟수
        const originalX = event.pageX; // 클릭된 X 좌표
        const originalY = event.pageY; // 클릭된 Y 좌표

        // 텍스트 애니메이션 및 이미지 변경
        const intervalId = setInterval(() => {
            // 배열 복사 및 랜덤 섞기
            const shuffledLetters = [...letters].sort(() => 0.5 - Math.random());
            cursorText.innerHTML = shuffledLetters.join('');

            // 클릭된 이미지 컨테이너의 이미지 셔플
            const imgElement = container.querySelector('img');
            const randomIndex = Math.floor(Math.random() * (container === document.getElementById('images1-container') ? images1.length : images2.length));
            imgElement.src = (container === document.getElementById('images1-container') ? images1 : images2)[randomIndex];

            // 커서 위치 업데이트
            cursorText.style.left = originalX + 'px';
            cursorText.style.top = originalY + 'px';

            currentUpdate++;

            // 설정한 업데이트 수가 남아있지 않으면 멈추기
            if (currentUpdate >= updates) {
                clearInterval(intervalId);
                // 최종 커서 위치 유지
                cursorText.innerHTML = shuffledLetters.join(''); // 최종 텍스트 유지
            }
        }, 100); // 0.1초 간격으로 텍스트 및 이미지 업데이트
    };
});


