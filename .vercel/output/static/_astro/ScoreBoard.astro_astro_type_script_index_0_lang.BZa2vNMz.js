const y=document.querySelectorAll(".tab"),f=document.getElementById("tab-games"),w=document.getElementById("tab-players"),p=document.getElementById("games-grid"),h=document.getElementById("player-search"),d=document.getElementById("player-results"),T=document.getElementById("spotlight"),m=document.getElementById("spotlight-card");let u=null;async function $(a,s=3,t=2e3){for(let e=0;e<s;e++){try{const i=await fetch(a);if(i.ok||e===s-1)return i}catch{if(e===s-1)throw new Error("fetch failed")}await new Promise(i=>setTimeout(i,t*(e+1)))}throw new Error("fetch failed")}y.forEach(a=>{a.addEventListener("click",()=>{y.forEach(t=>t.classList.remove("active")),a.classList.add("active");const s=a.dataset.tab;f.classList.toggle("active",s==="games"),w.classList.toggle("active",s==="players"),T.style.display=s==="games"?"":"none"})});function L(a){const s=a.homeTeam,t=a.awayTeam,e=a.statusCode;if(e===1){const l=new Date(a.startTime);return`
		<div class="game-card">
			<div class="game-header">
				<span class="game-status">UPCOMING</span>
				<span class="game-detail">${isNaN(l.getTime())?a.status||"TBD":l.toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit",hour12:!0})}</span>
			</div>
			<div class="game-matchup-upcoming">
				<div class="team-center">
					<div class="team-badge">${t.abbr}</div>
					<span class="team-name">${t.city} ${t.name}</span>
				</div>
				<span class="vs-label">VS</span>
				<div class="team-center">
					<div class="team-badge">${s.abbr}</div>
					<span class="team-name">${s.city} ${s.name}</span>
				</div>
			</div>
		</div>`}const i=e===2,n=e===3,c=n&&s.score>t.score,r=n&&t.score>s.score,o=i?"LIVE":"FINAL",v=i?`Q${a.period} ${a.clock}`:"FT";return`
	<div class="game-card">
		<div class="game-header">
			<span class="game-status">${o}</span>
			<span class="game-detail ${i?"detail-live":""}">${v}</span>
		</div>
		<div class="game-row">
			<div class="team-info">
				<div class="team-badge">${t.abbr}</div>
				<span class="team-name">${t.city} ${t.name}</span>
			</div>
			<span class="score ${r?"score-winner":""}">${t.score}</span>
		</div>
		<div class="game-row">
			<div class="team-info">
				<div class="team-badge">${s.abbr}</div>
				<span class="team-name">${s.city} ${s.name}</span>
			</div>
			<span class="score ${c?"score-winner":""}">${s.score}</span>
		</div>
	</div>`}function g(a){const s=`${(a.firstName||a.name?.[0]||"?")[0]}${(a.lastName||a.name?.split(" ")[1]?.[0]||"?")[0]}`.toUpperCase(),t=a.name||`${a.firstName} ${a.lastName}`,e=[a.teamCity,a.teamName||a.team].filter(Boolean).join(" ")||"Free Agent",i=a.jerseyNumber?`  |  #${a.jerseyNumber}`:"",n=a.position?`  |  ${a.position}`:"",c=a.seasonStats,r=c?.pts?.toFixed(1)??"--",o=c?.reb?.toFixed(1)??"--",v=c?.ast?.toFixed(1)??"--",l=c?.fgPct!=null?(c.fgPct*100).toFixed(1):"--";return`
	<div class="player-card">
		<div class="player-header">
			<div class="player-avatar">${s}</div>
			<div>
				<div class="player-name">${t}</div>
				<div class="player-meta">${e}${i}${n}</div>
			</div>
		</div>
		<div class="stats-grid">
			<div class="stat-box">
				<div class="stat-label">PTS</div>
				<div class="stat-value">${r}</div>
			</div>
			<div class="stat-box">
				<div class="stat-label">REB</div>
				<div class="stat-value">${o}</div>
			</div>
			<div class="stat-box">
				<div class="stat-label">AST</div>
				<div class="stat-value">${v}</div>
			</div>
			<div class="stat-box">
				<div class="stat-label">FG%</div>
				<div class="stat-value accent">${l}</div>
			</div>
		</div>
	</div>`}async function S(){try{const t=(await(await fetch("/api/scoreboard")).json()).games||[];if(t.length===0){p.innerHTML='<div class="empty-state">No games scheduled today</div>';return}p.innerHTML=t.map(L).join("")}catch{p.innerHTML='<div class="empty-state error">Failed to load games</div>'}}async function b(){try{const a=[{id:"2544",name:"LeBron James"},{id:"201939",name:"Stephen Curry"},{id:"203999",name:"Nikola Jokic"},{id:"1629029",name:"Luka Doncic"},{id:"203507",name:"Giannis Antetokounmpo"},{id:"1628369",name:"Jayson Tatum"},{id:"1630162",name:"Anthony Edwards"},{id:"1641705",name:"Victor Wembanyama"}],s=a[Math.floor(Math.random()*a.length)];m.innerHTML=`<div class="loading"><div class="spinner"></div><span>Loading ${s.name}...</span></div>`;const e=await(await $(`/api/player-stats/${s.id}`)).json();e.player?m.innerHTML=g(e.player):m.innerHTML='<div class="empty-state small">Stats not available right now</div>'}catch{m.innerHTML=`<div class="empty-state small">Could not load spotlight — NBA.com may be slow. <button class="retry-btn" onclick="this.closest('.spotlight').querySelector('.loading-placeholder, .empty-state')?.remove(); window.__retrySpotlight();">Retry</button></div>`}}window.__retrySpotlight=b;async function M(a){if(a.length<2){d.innerHTML='<div class="empty-state">Type at least 2 characters</div>';return}d.innerHTML='<div class="loading"><div class="spinner"></div><span>Searching players...</span></div>';try{const e=(await(await fetch(`/api/players?search=${encodeURIComponent(a)}`)).json()).players||[];if(e.length===0){d.innerHTML='<div class="empty-state">No players found</div>';return}const i=e.slice(0,5).map(n=>g({...n,seasonStats:null}));d.innerHTML=i.join("");for(let n=0;n<Math.min(e.length,5);n++){const c=e[n];try{const o=await(await $(`/api/player-stats/${c.id}`,2,1500)).json();o.player&&(i[n]=g(o.player),d.innerHTML=i.join(""))}catch{}}}catch{d.innerHTML='<div class="empty-state error">Search failed — try again in a moment</div>'}}h.addEventListener("input",()=>{u&&clearTimeout(u),u=setTimeout(()=>{M(h.value.trim())},500)});S();b();
