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
    ALL_Gamers_Global: [
      { name: "Ade", img: "에이드.jpeg" },
      { name: "Jasm1ne", img: "자스민.jpeg" },
      { name: "LeeSooMin", img: "이선민.jpeg" },
      { name: "MAKA", img: "마카.jpeg" },
      { name: "Mealgaru", img: "밀가루.jpg" },
      { name: "SeonJun", img: "성진.jpeg" },
    ],
    Crazy_Raccon: [
      { name: "CHORONG", img: "초롱.jpeg" },
      { name: "HeeSang", img: "희상.jpeg" },
      { name: "Junbin", img: "준빈.jpeg" },
      { name: "LIP", img: "립.jpeg" },
      { name: "MAX", img: "맥스.jpg" },
      { name: "Shu", img: "슈.jpg" },
    ],
    Old_ocean: [
      { name: "Ryujehong", img: "류제홍.jpg" },
      { name: "Becky", img: "베키.jpeg" },
      { name: "Probe", img: "프로비.jpeg" },
      { name: "KIVIS", img: "키리스.jpeg" },
      { name: "Gur3um", img: "구마유시.jpeg" },
    ],
    Team_Falcons: [
      { name: "ChiYo", img: "치요(팔콘).jpeg" },
      { name: "Fielder", img: "필더(팔콘).jpeg" },
      { name: "Hanbin", img: "한빈(팔콘).jpeg" },
      { name: "MER1T", img: "메릿.jpeg" },
      { name: "proper", img: "프로퍼2.jpeg" },
      { name: "SOMEONE", img: "섬원(팔콘).jpeg" },
      { name: "Stalk3r", img: "스토커.jpeg" },
    ],
    Poker_Face: [
      { name: "A1IEN", img: "에이리언(포커).png" },
      { name: "CARU", img: "카루(옵치).jpeg" },
      { name: "D4RT", img: "다트(포커).jpeg" },
      { name: "HEISER", img: "헤이저(포커).jpeg" },
      { name: "Misin", img: "미신(포커).jpeg" },
      { name: "SP1NT", img: "스핀트(포커).jpeg" },
    ],
    T1: [
      { name: "DONGHAK", img: "동헉.jpg" },
      { name: "Proud", img: "프라우드2.jpeg" },
      { name: "skewed", img: "스컬.jpg" },
      { name: "vigilante", img: "바이클.jpg" },
      { name: "Viper", img: "바이퍼.jpg" },
      { name: "ZEST", img: "제스틑.jpg" },
    ],
    VEC: [
      { name: "Scarlett", img: "권문경.jpeg" },
      { name: "search", img: "서치.jpeg" },
      { name: "SeungAn", img: "성안.jpeg" },
      { name: "ZeSin", img: "제신.jpeg" },
    ],
    ZETA_DIVISION: [
      { name: "ALphaYi", img: "알파이.jpg" },
      { name: "BERNAR", img: "베르.jpg" },
      { name: "FARMER", img: "농부.jpeg" },
      { name: "FiNN", img: "핀.jpg" },
      { name: "Flora", img: "플로라.jpg" }
    ],
  };
