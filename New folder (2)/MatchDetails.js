function openMatchDetails(match) {
  return `
    <div class='card'>
      <h3>${match.team}</h3>
      <p>Score: ${match.gf}-${match.ga}</p>
      <p>Rating: ${match.rating || 7}</p>
      <p>Comment: ${match.comment || "No comment"}</p>
    </div>
  `;
}