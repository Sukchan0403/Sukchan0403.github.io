let currentVisibleRole = null; // 현재 보여지는 역할 저장

function showHeroes(role) {
  const heroListDiv = document.getElementById('heroList');

  // 이미 보여지고 있는 역할을 다시 클릭한 경우 → 숨김
  if (currentVisibleRole === role) {
    heroListDiv.innerHTML = '';
    currentVisibleRole = null; // 상태 초기화
    return;
  }

  // 새로운 역할 선택한 경우 → 목록 새로 표시
  heroListDiv.innerHTML = '';
  heroData[role].forEach(hero => {
    const heroDiv = document.createElement('div');
    heroDiv.className = 'hero';

    heroDiv.innerHTML = `
      <img src="${hero.img}" alt="${hero.name}" class="hero-img" />
      <p>${hero.name}</p>
    `;

    heroListDiv.appendChild(heroDiv);
  });

  currentVisibleRole = role; // 현재 역할 저장
}


const heroData = {
  tank: [
    { name: "마우가", img: "마우가.jpeg" },
    { name: "시그마", img: "시그마.jpeg" },
    { name: "레킹볼", img: "볼.jpeg" },
    { name: "오리사", img: "오리사2.jpeg" },
    { name: "자리아", img: "자리아.jpeg" },
    { name: "정커퀸", img: "퀸.jpeg" },
    { name: "로드호그", img: "호그.jpeg" },
    { name: "해저드", img: "해저드.jpeg" },
    { name: "라마트라", img: "라마2.jpeg" },
    { name: "둠피스트", img: "둠.jpeg" },
    { name: "라인하르트", img: "라인.jpeg" },
    { name: "D.Va", img: "디바.jpeg" },
    { name: "윈스턴", img: "윈스.jpeg" },
  ],
  damage: [
    { name: "소전", img: "소전.jpeg" },
    { name: "시메", img: "시메.jpeg" },
    { name: "애쉬", img: "애쉬.jpeg" },
    { name: "위도우메이커", img: "위도우.jpeg" },
    { name: "정크랫", img: "정크랫.jpeg" },
    { name: "캐서디", img: "캐서디.jpeg" },
    { name: "바스티온", img: "바스.jpeg" },
    { name: "한조", img: "한조.jpeg" },
    { name: "토르비욘", img: "토르.jpeg" },
    { name: "솔저76", img: "솔저.jpeg" },
    { name: "밴처", img: "밴처.jpeg" },
    { name: "겐지", img: "겐지.jpeg" },
    { name: "트레이서", img: "트레.jpeg" },
    { name: "리퍼", img: "리퍼.jpeg" },
    { name: "에코", img: "에코.jpeg" },
    { name: "파라", img: "파라.jpeg" },
    { name: "프레야", img: "프레야.jpeg" },
  ],
  support: [
    { name: "키리코", img: "키리2.jpeg" },
    { name: "젠야타", img: "야타.jpeg" },
    { name: "모이라", img: "모이라.jpeg" },
    { name: "루시우", img: "루.jpeg" },
    { name: "바티", img: "바티.jpeg" },
    { name: "아나", img: "아나.jpeg" },
    { name: "일리", img: "일리.jpeg" },
    { name: "주노", img: "주노.jpeg" },
    { name: "루시우", img: "루.jpeg" },
    { name: "메르시", img: "메.jpeg" },
    { name: "라이프위버", img: "라.jpeg" },
  ]
};
