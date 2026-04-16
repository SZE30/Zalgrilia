function openMatchUI(i) {
  const f = clubData.fixtures[i];

  document.getElementById('modal').style.display = 'flex';

  document.getElementById('modalContent').innerHTML = `
    <h2>Milicija vs ${f.team}</h2>
    <h1>${f.gf} - ${f.ga}</h1>

    <h3>📊 Stats</h3>
    Possession: <input value="${f.stats.possession}" onchange="updateStat(${i}, 'possession', this.value)"><br>
    Shots: <input value="${f.stats.shots}" onchange="updateStat(${i}, 'shots', this.value)"><br>
    xG: <input value="${f.stats.xg}" onchange="updateStat(${i}, 'xg', this.value)"><br>

    <h3>⚽ Scorers</h3>
    <input placeholder="e.g. Machoqueiro 67'" onkeydown="addScorer(event, ${i}, this)">
    <div>${f.scorers.join("<br>")}</div>

    <h3>⭐ Player Ratings</h3>
    ${f.players.map((p,pi)=>`
      ${p.name} 
      <input value="${p.rating}" onchange="updatePlayerRating(${i},${pi},this.value)">
      (${p.goals}⚽)
      <br>
    `).join("")}

    <h3>Admin</h3>
    GF: <input value="${f.gf}" onchange="updateGF(${i},this.value)">
    GA: <input value="${f.ga}" onchange="updateGA(${i},this.value)">

    <br><br>
    <button onclick="closeModal()">Close</button>
  `;
}

function updateStat(i, key, val){
  clubData.fixtures[i].stats[key] = val;
  saveData(clubData);
}

function updatePlayerRating(i, pi, val){
  clubData.fixtures[i].players[pi].rating = val;
  saveData(clubData);
}

function addScorer(e, i, input){
  if(e.key === "Enter"){
    clubData.fixtures[i].scorers.push(input.value);
    saveData(clubData);
    openMatchUI(i); // refresh UI
  }
}