function searchPlayer() {
  const input = document.getElementById("playerInput").value.trim();

  const playerMap = {
    "Fleta": "Fleta",
    "Profit": "Profit",
    "Carpe": "Carpe",
    "Ryujehong": "Ryujehong",
    "JJoNak": "JJoNak",
    "Fury": "Fury",
    "Gesture": "Gesture",
    "A1IEN" : "A1IEN"
  };

  const aliasMap = {
    "플레타": "Fleta",
    "프로핏": "Profit",
    "카르페": "Carpe",
    "류제홍": "Ryujehong",
    "쪼낙": "JJoNak",
    "퓨리": "Fury",
    "제스처": "Gesture",
  };

  if (input === "") {
    alert("선수 이름을 입력해주세요!");
    return;
  }

  const resolvedPlayer = aliasMap[input] || playerMap[input];

  if (resolvedPlayer) {
    const encodedName = encodeURIComponent(resolvedPlayer.replace(/ /g, "_"));
    const url = `https://liquipedia.net/overwatch/${encodedName}`;
    window.open(url, "_blank");
  } else {
    alert("해당 선수는 데이터에 없습니다.");
  }
}
