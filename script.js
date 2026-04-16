const content = document.getElementById('content');

function loadPage(page){

 // HOME
 if(page==='home'){
  content.innerHTML = `
    <div class='card'>
      Rivals: Queen of Mokušnice & Sv. Jovan
    </div>
  `;
 }

 // SQUAD (use clubData now)
 if(page==='squad'){
  content.innerHTML =
  clubData.squad.forEach(p=>{
    html += `
      <div class='card'>
        ${p.name}<br>
        ⚡ ${p.pace} | 🎯 ${p.shooting}
      </div>
    `;
  });
  
 }

 // TABLE (auto points)
 if(page==='table'){
  let pts = 0;
  content.innerHTML =
  
  clubData.fixtures.forEach(f=>{
    if(f.gf > f.ga) pts += 3;
    else if(f.gf === f.ga) pts += 1;
  });

  content.innerHTML = `
    <div class='card'>
      Zalgrilska Milicija FC Points: ${pts}
    </div>
  `;
 }

 // ✅ FIXED FIXTURES (ONLY new system)
 if(page==='fixtures'){
  content.innerHTML = renderMatchList(clubData.fixtures);
 }

 // ✅ FIXED ADMIN (with login)
 if(page==='admin'){

  if(!loggedIn){
    content.innerHTML = `
      <div class='card'>
        <h3>Admin Login</h3>
        <input id='adminPass' placeholder='Password'>
        <button onclick='handleLogin()'>Login</button>
      </div>
    `;
    return;
  }

  // after login → show matches same as fixtures
  content.innerHTML = renderMatchList(clubData.fixtures);
 }
}

window.loadPage = loadPage;
window.handleLogin = handleLogin;

loadPage('home');