function renderPlayerStats(players) {
  return players.map(p => `
    <div class='card'>
      <strong>${p.name}</strong><br>
      ⚡ Pace: ${p.pace}<br>
      🎯 Shooting: ${p.shooting}<br>
      🧠 Passing: ${p.passing || 50}<br>
      🛡️ Defending: ${p.defending || 50}
    </div>
  `).join('');
}