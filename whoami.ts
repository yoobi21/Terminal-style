const whoamiObj = {
  "message" : [
    [
      "Data not found. Who are you, really?",
      "Connection established. User identity is unverified. - "
    ],
    [
      "System is aware of your request. But identity remains unclear.",
      "Your identity is not in the system records. Proceed with caution.",
      "............. - "
    ],
    [
      "I stand before the mirror, wondering who I really am,",
      "is the reflection I see the real me, or just another mask I wear to hide my doubts?",
      "what a clueless person - ",
    ],
    [
      "I’m the jack of all trades, master of none, yet somehow I find meaning in every little pursuit.",
      "My purpose is to submit to His will and trust in His plan, no matter where my journey leads.",
      "Contemplating silently. - ",
    ],
    [
      "I am a servant of Allah, created to worship Him and seek His guidance.",
      "My journey is shaped by His wisdom,",
      "through challenges, I learn patience, knowing that every test is a chance to strengthen my faith. - "
    ],
  ],
}

export const createWhoami = () : string[] => {
  const whoami : string[] = [];  
  const r = Math.floor(Math.random() * whoamiObj.message.length);
  whoami.push("<br>");

  whoamiObj.message[r].forEach((ele, idx) => {
    if (idx === whoamiObj.message[r].length - 1) {
      ele += "<span class='command'>who am I?</span>";
    }
    whoami.push(ele);
  });

  whoami.push("<br>");

  return whoami
}
