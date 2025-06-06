function searchPlayer() {
  const inputRaw = document.getElementById("playerInput").value.trim();
  if (inputRaw === "") {
    alert("선수 이름을 입력해주세요!");
    return;
  }

  const input = inputRaw.toLowerCase();

  // 별명 매핑용 (한글 or 별명 등)
  const aliasMap = {
    "플레타": "Fleta",
    "프로핏": "Profit",
    "카르페": "Carpe",
    "류제홍": "Ryujehong",
    "늙은이": "Ryujehong",
    "아나버림": "Ryujehong",
    "라위충": "Ryujehong",
    "쪼낙": "JJoNak",
    "퓨리": "Fury",
    "제스처": "Gesture"
  };

  let resolvedPlayer;

  // 입력값이 한글 혹은 별명(aliasMap에 있으면) -> 매핑된 영문 이름으로 이동
  if (aliasMap[input]) {
    resolvedPlayer = aliasMap[input];
  } else {
    // 그 외(영문 입력 등)는 입력한 값 그대로 이동
    resolvedPlayer = inputRaw;
  }

  const encodedName = encodeURIComponent(resolvedPlayer.replace(/ /g, "_"));
  const url = `https://liquipedia.net/overwatch/${encodedName}`;
  window.open(url, "_blank");
}
