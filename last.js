let currentVisibleRole = null;

function showHeroes(role) {
  const heroListDiv = document.getElementById('heroList');

  if (currentVisibleRole === role) {
    heroListDiv.innerHTML = '';
    currentVisibleRole = null;
    return;
  }

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

  currentVisibleRole = role;
}

function searchCharacter() {
  const input = document.getElementById("characterInput").value.trim();

  const characterMap = {
    "애쉬": "애쉬(오버워치)", "리퍼": "리퍼(오버워치)", "트레이서": "트레이서(오버워치)",
    "겐지": "겐지(오버워치)", "D.Va": "D.Va", "라인하르트": "라인하르트(오버워치)",
    "루시우": "루시우(오버워치)", "자리야": "자리야", "시그마": "시그마(오버워치)",
    "아나": "아나(오버워치)", "메르시": "메르시", "모이라": "모이라(오버워치)",
    "한조": "한조(오버워치)", "위도우메이커": "위도우메이커", "정크랫": "정크랫",
    "시메트라": "시메트라", "토르비욘": "토르비욘", "메이": "메이(오버워치)",
    "윈스턴": "윈스턴(오버워치)", "레킹볼": "레킹볼(오버워치)", "소전": "소전(오버워치)",
    "키리코": "키리코(오버워치)", "라마트라": "라마트라", "에코": "에코(오버워치)",
    "바스티온": "바스티온", "캐서디": "캐서디", "솔저: 76": "솔저: 76",
    "오리사": "오리사", "젠야타": "젠야타", "브리기테": "브리기테", "일리아리": "일리아리",
    "벤처": "벤처(오버워치)", "해저드": "해저드", "프레야": "프레야"
  };

  const aliasMap = {
    "키리": "키리코(오버워치)", "브리": "브리기테", "라인": "라인하르트(오버워치)",
    "혜지": "메르시", "도우": "위도우메이커", "위도우": "위도우메이커",
    "봉디햄": "정크랫", "사봉디": "정크랫", "강오목": "정크랫", "정크": "정크랫",
    "토르": "토르비욘", "윈스": "윈스턴(오버워치)", "라마": "라마트라",
    "바스": "바스티온", "야타": "젠야타", "일리": "일리아리", "시메": "시메트라",
    "디바": "D.Va", "학살": "겐지(오버워치)", "겐겔이 앙": "겐지(오버워치)",
    "겐겔": "겐지(오버워치)", "아이치": "레킹볼(오버워치)", "박상현": "레킹볼(오버워치)",
    "볼": "레킹볼(오버워치)", "볼~": "레킹볼(오버워치)", "볼~~": "레킹볼(오버워치)",
    "바지": "레킹볼(오버워치)", "바지~": "레킹볼(오버워치)", "솔저": "솔저: 76",
    "맥크리": "캐서디", "트레": "트레이서(오버워치)", "류제홍": "아나(오버워치)"
  };

  if (input === "") {
    alert("캐릭터 이름을 입력해주세요!");
    return;
  }

  const resolvedTitle = aliasMap[input] || characterMap[input];

  if (resolvedTitle) {
    const encodedTitle = encodeURIComponent(resolvedTitle);
    window.open(`https://namu.wiki/w/${encodedTitle}`, "_blank");
  } else {
    alert("해당 캐릭터는 오버워치에 없습니다.");
  }
}

const heroData = {
  tank: [
    { name: "마우가", img: "마우가.jpeg" }, { name: "시그마", img: "시그마.jpeg" },
    { name: "레킹볼", img: "볼.jpeg" }, { name: "오리사", img: "오리사2.jpeg" },
    { name: "자리아", img: "자리아.jpeg" }, { name: "정커퀸", img: "퀸.jpeg" },
    { name: "로드호그", img: "호그.jpeg" }, { name: "해저드", img: "해저드.jpeg" },
    { name: "라마트라", img: "라마2.jpeg" }, { name: "둠피스트", img: "둠.jpeg" },
    { name: "라인하르트", img: "라인.jpeg" }, { name: "D.Va", img: "디바.jpeg" },
    { name: "윈스턴", img: "윈스.jpeg" },
  ],
  damage: [
    { name: "소전", img: "소전.jpeg" }, { name: "시메", img: "시메.jpeg" },
    { name: "애쉬", img: "애쉬.jpeg" }, { name: "위도우메이커", img: "위도우.jpeg" },
    { name: "정크랫", img: "정크랫.jpeg" }, { name: "캐서디", img: "캐서디.jpeg" },
    { name: "바스티온", img: "바스.jpeg" }, { name: "한조", img: "한조.jpeg" },
    { name: "토르비욘", img: "토르.jpeg" }, { name: "솔저76", img: "솔저.jpeg" },
    { name: "밴처", img: "밴처.jpeg" }, { name: "겐지", img: "겐지.jpeg" },
    { name: "트레이서", img: "트레.jpeg" }, { name: "리퍼", img: "리퍼.jpeg" },
    { name: "에코", img: "에코.jpeg" }, { name: "파라", img: "파라.jpeg" },
    { name: "프레야", img: "프레야.jpeg" },
  ],
  support: [
    { name: "키리코", img: "키리.jpeg" }, { name: "젠야타", img: "야타.jpeg" },
    { name: "모이라", img: "모이라.jpeg" }, { name: "루시우", img: "루.jpeg" },
    { name: "바티", img: "바티.jpeg" }, { name: "아나", img: "아나.jpeg" },
    { name: "일리", img: "일리.jpeg" }, { name: "주노", img: "주노.jpeg" },
    { name: "메르시", img: "메.jpeg" }, { name: "라이프위버", img: "라.jpeg" },
  ]
};
