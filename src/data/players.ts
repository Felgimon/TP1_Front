// src/data/players.ts
// Base de datos estática de jugadores NBA 2025-26.
// 0 API calls — búsqueda instantánea.

export interface Player {
	id: number;
	firstName: string;
	lastName: string;
	team: string;
	teamAbbr: string;
	position: string;
	jerseyNumber: string;
	stats: {
		season: string;
		gp: number;
		min: number;
		pts: number;
		reb: number;
		ast: number;
		stl: number;
		blk: number;
		fgPct: number;
		fg3Pct: number;
		ftPct: number;
	};
}

// [id, firstName, lastName, team, abbr, pos, jersey, gp, min, pts, reb, ast, stl, blk, fgPct, fg3Pct, ftPct]
type Row = [number, string, string, string, string, string, string, number, number, number, number, number, number, number, number, number, number];

const raw: Row[] = [
	// ---- Atlanta Hawks ----
	[1, 'Trae', 'Young', 'Atlanta Hawks', 'ATL', 'G', '11', 65, 34.8, 25.7, 3.1, 10.8, 1.1, 0.2, 0.435, 0.365, 0.863],
	[2, 'Jalen', 'Johnson', 'Atlanta Hawks', 'ATL', 'F', '1', 62, 32.5, 18.4, 8.5, 3.8, 1.2, 0.7, 0.485, 0.342, 0.768],
	[3, 'De\'Andre', 'Hunter', 'Atlanta Hawks', 'ATL', 'F', '12', 55, 28.1, 14.2, 4.3, 1.8, 0.8, 0.5, 0.455, 0.378, 0.812],
	[4, 'Clint', 'Capela', 'Atlanta Hawks', 'ATL', 'C', '15', 58, 24.3, 10.8, 9.5, 1.2, 0.5, 1.4, 0.615, 0.000, 0.542],
	[5, 'Bogdan', 'Bogdanovic', 'Atlanta Hawks', 'ATL', 'G', '13', 52, 25.6, 12.8, 3.0, 3.2, 0.9, 0.2, 0.428, 0.385, 0.845],
	[6, 'Onyeka', 'Okongwu', 'Atlanta Hawks', 'ATL', 'C', '17', 60, 20.2, 9.4, 6.8, 1.0, 0.5, 1.1, 0.585, 0.000, 0.722],
	[7, 'Zaccharie', 'Risacher', 'Atlanta Hawks', 'ATL', 'F', '10', 64, 26.3, 11.5, 4.8, 1.5, 0.9, 0.6, 0.418, 0.348, 0.795],
	[8, 'Dyson', 'Daniels', 'Atlanta Hawks', 'ATL', 'G', '5', 58, 22.4, 8.2, 3.5, 4.1, 1.6, 0.5, 0.445, 0.352, 0.758],

	// ---- Boston Celtics ----
	[9, 'Jayson', 'Tatum', 'Boston Celtics', 'BOS', 'F', '0', 66, 36.2, 27.0, 8.4, 5.5, 1.0, 0.7, 0.474, 0.378, 0.853],
	[10, 'Jaylen', 'Brown', 'Boston Celtics', 'BOS', 'G-F', '7', 64, 34.1, 23.5, 5.8, 3.8, 1.2, 0.5, 0.485, 0.362, 0.718],
	[11, 'Derrick', 'White', 'Boston Celtics', 'BOS', 'G', '9', 65, 32.8, 15.8, 4.5, 5.2, 1.0, 1.2, 0.458, 0.385, 0.892],
	[12, 'Jrue', 'Holiday', 'Boston Celtics', 'BOS', 'G', '4', 62, 30.5, 12.5, 5.2, 4.8, 1.3, 0.8, 0.462, 0.392, 0.815],
	[13, 'Kristaps', 'Porzingis', 'Boston Celtics', 'BOS', 'C', '8', 48, 28.4, 20.2, 7.1, 1.8, 0.7, 1.9, 0.512, 0.368, 0.858],
	[14, 'Al', 'Horford', 'Boston Celtics', 'BOS', 'C', '42', 55, 22.1, 8.2, 5.5, 2.8, 0.6, 0.9, 0.468, 0.375, 0.812],
	[15, 'Payton', 'Pritchard', 'Boston Celtics', 'BOS', 'G', '11', 66, 22.5, 12.4, 2.8, 3.2, 0.7, 0.2, 0.445, 0.408, 0.895],
	[16, 'Sam', 'Hauser', 'Boston Celtics', 'BOS', 'F', '30', 58, 18.2, 8.5, 3.2, 1.0, 0.5, 0.3, 0.452, 0.418, 0.865],

	// ---- Brooklyn Nets ----
	[17, 'Cam', 'Thomas', 'Brooklyn Nets', 'BKN', 'G', '24', 64, 33.5, 24.8, 3.5, 4.2, 0.9, 0.3, 0.432, 0.345, 0.862],
	[18, 'Nic', 'Claxton', 'Brooklyn Nets', 'BKN', 'C', '33', 60, 26.8, 11.2, 8.5, 1.8, 0.8, 2.1, 0.585, 0.000, 0.652],
	[19, 'Ben', 'Simmons', 'Brooklyn Nets', 'BKN', 'G-F', '10', 42, 22.5, 6.8, 6.2, 6.5, 1.2, 0.6, 0.562, 0.000, 0.425],
	[20, 'Day\'Ron', 'Sharpe', 'Brooklyn Nets', 'BKN', 'C', '20', 55, 20.1, 8.5, 7.2, 1.0, 0.5, 0.8, 0.548, 0.000, 0.685],
	[21, 'Dennis', 'Schroder', 'Brooklyn Nets', 'BKN', 'G', '17', 58, 28.5, 14.5, 2.8, 6.2, 1.0, 0.2, 0.425, 0.348, 0.848],
	[22, 'Ziaire', 'Williams', 'Brooklyn Nets', 'BKN', 'F', '1', 50, 22.8, 9.2, 3.8, 1.5, 0.7, 0.4, 0.412, 0.358, 0.782],

	// ---- Charlotte Hornets ----
	[23, 'LaMelo', 'Ball', 'Charlotte Hornets', 'CHA', 'G', '1', 45, 32.5, 23.8, 5.5, 8.2, 1.5, 0.4, 0.435, 0.368, 0.872],
	[24, 'Brandon', 'Miller', 'Charlotte Hornets', 'CHA', 'F', '24', 66, 33.8, 19.5, 5.2, 3.5, 1.0, 0.5, 0.448, 0.372, 0.835],
	[25, 'Miles', 'Bridges', 'Charlotte Hornets', 'CHA', 'F', '0', 62, 31.2, 18.2, 7.0, 3.2, 0.8, 0.6, 0.465, 0.335, 0.788],
	[26, 'Mark', 'Williams', 'Charlotte Hornets', 'CHA', 'C', '5', 55, 24.5, 11.5, 8.2, 1.2, 0.5, 1.8, 0.575, 0.000, 0.698],
	[27, 'Tre', 'Mann', 'Charlotte Hornets', 'CHA', 'G', '2', 58, 24.8, 12.5, 2.5, 3.8, 0.8, 0.2, 0.422, 0.362, 0.858],
	[28, 'Grant', 'Williams', 'Charlotte Hornets', 'CHA', 'F', '2', 55, 22.5, 8.8, 4.5, 1.8, 0.7, 0.5, 0.425, 0.358, 0.795],

	// ---- Chicago Bulls ----
	[29, 'Zach', 'LaVine', 'Chicago Bulls', 'CHI', 'G', '8', 55, 34.2, 24.5, 4.2, 4.5, 0.8, 0.4, 0.478, 0.385, 0.848],
	[30, 'Coby', 'White', 'Chicago Bulls', 'CHI', 'G', '0', 66, 33.5, 19.2, 4.5, 5.8, 0.9, 0.3, 0.445, 0.378, 0.855],
	[31, 'Nikola', 'Vucevic', 'Chicago Bulls', 'CHI', 'C', '9', 68, 30.5, 17.5, 10.2, 3.2, 0.8, 0.9, 0.495, 0.355, 0.788],
	[32, 'Josh', 'Giddey', 'Chicago Bulls', 'CHI', 'G', '3', 65, 28.5, 12.8, 6.5, 6.2, 0.9, 0.3, 0.462, 0.328, 0.712],
	[33, 'Patrick', 'Williams', 'Chicago Bulls', 'CHI', 'F', '44', 58, 26.8, 11.5, 4.8, 1.8, 1.0, 0.5, 0.452, 0.348, 0.772],
	[34, 'Ayo', 'Dosunmu', 'Chicago Bulls', 'CHI', 'G', '12', 62, 24.5, 9.8, 3.2, 3.8, 1.1, 0.3, 0.475, 0.365, 0.815],

	// ---- Cleveland Cavaliers ----
	[35, 'Donovan', 'Mitchell', 'Cleveland Cavaliers', 'CLE', 'G', '45', 65, 34.5, 26.8, 4.2, 5.5, 1.5, 0.4, 0.468, 0.378, 0.862],
	[36, 'Darius', 'Garland', 'Cleveland Cavaliers', 'CLE', 'G', '10', 60, 32.8, 19.5, 2.8, 7.2, 1.2, 0.2, 0.458, 0.385, 0.895],
	[37, 'Evan', 'Mobley', 'Cleveland Cavaliers', 'CLE', 'F-C', '4', 66, 33.2, 18.2, 9.5, 3.2, 0.8, 1.5, 0.528, 0.348, 0.728],
	[38, 'Jarrett', 'Allen', 'Cleveland Cavaliers', 'CLE', 'C', '31', 64, 30.1, 13.5, 10.8, 1.8, 0.6, 1.3, 0.625, 0.000, 0.682],
	[39, 'Max', 'Strus', 'Cleveland Cavaliers', 'CLE', 'G-F', '1', 62, 28.5, 13.2, 3.5, 2.5, 0.8, 0.3, 0.435, 0.392, 0.845],
	[40, 'Caris', 'LeVert', 'Cleveland Cavaliers', 'CLE', 'G-F', '3', 55, 22.8, 11.5, 3.2, 3.5, 0.9, 0.3, 0.442, 0.355, 0.822],
	[41, 'Isaac', 'Okoro', 'Cleveland Cavaliers', 'CLE', 'F', '35', 60, 22.5, 8.5, 3.0, 1.5, 1.0, 0.5, 0.485, 0.352, 0.752],

	// ---- Dallas Mavericks ----
	[42, 'Kyrie', 'Irving', 'Dallas Mavericks', 'DAL', 'G', '11', 58, 34.2, 25.5, 5.0, 5.2, 1.2, 0.5, 0.492, 0.405, 0.885],
	[43, 'Klay', 'Thompson', 'Dallas Mavericks', 'DAL', 'G', '31', 62, 28.5, 14.8, 3.2, 2.2, 0.7, 0.4, 0.432, 0.388, 0.895],
	[44, 'PJ', 'Washington', 'Dallas Mavericks', 'DAL', 'F', '25', 66, 30.2, 13.5, 6.5, 2.2, 1.0, 0.8, 0.465, 0.358, 0.775],
	[45, 'Daniel', 'Gafford', 'Dallas Mavericks', 'DAL', 'C', '21', 64, 22.5, 10.8, 6.2, 1.0, 0.5, 1.8, 0.655, 0.000, 0.628],
	[46, 'Dereck', 'Lively II', 'Dallas Mavericks', 'DAL', 'C', '2', 62, 24.8, 9.5, 7.8, 1.5, 0.5, 1.5, 0.612, 0.285, 0.652],
	[47, 'Naji', 'Marshall', 'Dallas Mavericks', 'DAL', 'F', '8', 58, 22.5, 9.2, 4.5, 2.5, 0.8, 0.4, 0.468, 0.342, 0.742],

	// ---- Denver Nuggets ----
	[48, 'Nikola', 'Jokic', 'Denver Nuggets', 'DEN', 'C', '15', 68, 34.5, 26.3, 12.4, 9.8, 1.4, 0.8, 0.563, 0.382, 0.810],
	[49, 'Jamal', 'Murray', 'Denver Nuggets', 'DEN', 'G', '27', 58, 32.5, 21.2, 4.2, 6.5, 1.0, 0.3, 0.465, 0.378, 0.852],
	[50, 'Michael', 'Porter Jr', 'Denver Nuggets', 'DEN', 'F', '1', 62, 30.2, 17.5, 7.2, 1.5, 0.6, 0.5, 0.498, 0.405, 0.815],
	[51, 'Aaron', 'Gordon', 'Denver Nuggets', 'DEN', 'F', '50', 60, 28.8, 14.2, 6.5, 3.2, 0.9, 0.8, 0.525, 0.335, 0.738],
	[52, 'Christian', 'Braun', 'Denver Nuggets', 'DEN', 'G-F', '0', 66, 26.5, 12.8, 4.5, 3.2, 1.0, 0.5, 0.475, 0.365, 0.795],
	[53, 'Peyton', 'Watson', 'Denver Nuggets', 'DEN', 'F', '8', 58, 20.5, 8.2, 4.2, 1.2, 0.7, 0.8, 0.445, 0.328, 0.725],
	[54, 'Russell', 'Westbrook', 'Denver Nuggets', 'DEN', 'G', '4', 55, 22.8, 10.5, 4.8, 5.5, 1.2, 0.3, 0.438, 0.285, 0.665],

	// ---- Detroit Pistons ----
	[55, 'Cade', 'Cunningham', 'Detroit Pistons', 'DET', 'G', '2', 64, 34.5, 23.5, 4.8, 8.2, 1.2, 0.4, 0.442, 0.358, 0.852],
	[56, 'Jaden', 'Ivey', 'Detroit Pistons', 'DET', 'G', '23', 60, 28.5, 16.8, 3.2, 4.5, 0.9, 0.3, 0.432, 0.345, 0.808],
	[57, 'Ausar', 'Thompson', 'Detroit Pistons', 'DET', 'F', '5', 55, 26.2, 10.5, 6.8, 2.5, 1.5, 0.8, 0.478, 0.312, 0.685],
	[58, 'Jalen', 'Duren', 'Detroit Pistons', 'DET', 'C', '0', 66, 28.5, 13.2, 10.5, 1.5, 0.6, 1.2, 0.575, 0.000, 0.628],
	[59, 'Marcus', 'Sasser', 'Detroit Pistons', 'DET', 'G', '25', 55, 22.5, 9.8, 2.5, 3.2, 0.8, 0.2, 0.412, 0.365, 0.835],
	[60, 'Tobias', 'Harris', 'Detroit Pistons', 'DET', 'F', '12', 58, 26.5, 12.5, 5.5, 2.2, 0.7, 0.4, 0.468, 0.362, 0.828],

	// ---- Golden State Warriors ----
	[61, 'Stephen', 'Curry', 'Golden State Warriors', 'GSW', 'G', '30', 64, 32.8, 22.8, 5.0, 6.4, 0.9, 0.3, 0.451, 0.408, 0.923],
	[62, 'Andrew', 'Wiggins', 'Golden State Warriors', 'GSW', 'F', '22', 60, 28.5, 15.2, 5.5, 1.8, 0.8, 0.5, 0.452, 0.352, 0.658],
	[63, 'Draymond', 'Green', 'Golden State Warriors', 'GSW', 'F', '23', 58, 26.5, 8.5, 6.2, 5.8, 1.2, 0.8, 0.448, 0.325, 0.682],
	[64, 'Jonathan', 'Kuminga', 'Golden State Warriors', 'GSW', 'F', '00', 62, 28.2, 16.2, 5.2, 2.5, 0.7, 0.6, 0.485, 0.328, 0.718],
	[65, 'Brandin', 'Podziemski', 'Golden State Warriors', 'GSW', 'G', '2', 64, 24.5, 10.5, 5.8, 4.2, 1.0, 0.2, 0.442, 0.358, 0.795],
	[66, 'Kevon', 'Looney', 'Golden State Warriors', 'GSW', 'C', '5', 60, 18.5, 5.5, 6.8, 2.2, 0.5, 0.4, 0.565, 0.000, 0.582],
	[67, 'Moses', 'Moody', 'Golden State Warriors', 'GSW', 'G', '4', 55, 20.2, 8.8, 3.2, 1.5, 0.6, 0.3, 0.435, 0.365, 0.815],

	// ---- Houston Rockets ----
	[68, 'Jalen', 'Green', 'Houston Rockets', 'HOU', 'G', '4', 66, 33.5, 22.5, 4.2, 3.8, 0.8, 0.3, 0.442, 0.358, 0.832],
	[69, 'Alperen', 'Sengun', 'Houston Rockets', 'HOU', 'C', '28', 65, 30.2, 18.5, 9.5, 4.8, 1.2, 0.8, 0.535, 0.325, 0.728],
	[70, 'Fred', 'VanVleet', 'Houston Rockets', 'HOU', 'G', '5', 62, 32.8, 15.2, 4.0, 7.2, 1.5, 0.3, 0.418, 0.378, 0.862],
	[71, 'Jabari', 'Smith Jr', 'Houston Rockets', 'HOU', 'F', '10', 66, 30.5, 14.8, 7.5, 1.5, 0.8, 1.0, 0.445, 0.358, 0.752],
	[72, 'Dillon', 'Brooks', 'Houston Rockets', 'HOU', 'F', '9', 64, 28.2, 12.5, 3.8, 2.5, 1.0, 0.4, 0.428, 0.345, 0.778],
	[73, 'Amen', 'Thompson', 'Houston Rockets', 'HOU', 'G-F', '1', 60, 24.5, 11.8, 6.2, 3.5, 1.2, 0.8, 0.508, 0.298, 0.658],
	[74, 'Reed', 'Sheppard', 'Houston Rockets', 'HOU', 'G', '15', 55, 20.5, 10.2, 2.5, 4.5, 1.0, 0.2, 0.448, 0.412, 0.885],
	[75, 'Cam', 'Whitmore', 'Houston Rockets', 'HOU', 'F', '7', 50, 18.8, 9.5, 3.8, 1.2, 0.6, 0.4, 0.435, 0.335, 0.748],

	// ---- Indiana Pacers ----
	[76, 'Tyrese', 'Haliburton', 'Indiana Pacers', 'IND', 'G', '0', 62, 33.5, 20.8, 4.0, 10.5, 1.5, 0.3, 0.462, 0.378, 0.852],
	[77, 'Pascal', 'Siakam', 'Indiana Pacers', 'IND', 'F', '43', 66, 33.2, 21.5, 7.2, 4.2, 0.9, 0.5, 0.498, 0.332, 0.768],
	[78, 'Myles', 'Turner', 'Indiana Pacers', 'IND', 'C', '33', 60, 28.5, 16.2, 6.5, 1.5, 0.6, 2.0, 0.525, 0.368, 0.798],
	[79, 'Bennedict', 'Mathurin', 'Indiana Pacers', 'IND', 'G', '00', 64, 26.8, 14.8, 4.0, 1.8, 0.7, 0.3, 0.445, 0.365, 0.842],
	[80, 'Andrew', 'Nembhard', 'Indiana Pacers', 'IND', 'G', '2', 65, 28.2, 10.5, 3.5, 5.5, 1.2, 0.4, 0.472, 0.382, 0.822],
	[81, 'Obi', 'Toppin', 'Indiana Pacers', 'IND', 'F', '1', 58, 20.5, 10.2, 4.8, 1.2, 0.5, 0.5, 0.545, 0.342, 0.728],
	[82, 'TJ', 'McConnell', 'Indiana Pacers', 'IND', 'G', '9', 55, 18.2, 6.5, 2.5, 4.8, 1.0, 0.2, 0.505, 0.328, 0.785],

	// ---- LA Clippers ----
	[83, 'James', 'Harden', 'LA Clippers', 'LAC', 'G', '1', 60, 34.5, 21.8, 5.5, 8.8, 1.2, 0.5, 0.438, 0.358, 0.878],
	[84, 'Kawhi', 'Leonard', 'LA Clippers', 'LAC', 'F', '2', 42, 30.5, 22.5, 6.2, 3.5, 1.5, 0.8, 0.495, 0.385, 0.862],
	[85, 'Norman', 'Powell', 'LA Clippers', 'LAC', 'G', '24', 64, 28.8, 16.8, 3.0, 2.5, 1.0, 0.3, 0.475, 0.395, 0.858],
	[86, 'Ivica', 'Zubac', 'LA Clippers', 'LAC', 'C', '40', 66, 26.5, 12.5, 9.8, 1.8, 0.5, 1.2, 0.585, 0.000, 0.685],
	[87, 'Terance', 'Mann', 'LA Clippers', 'LAC', 'G-F', '14', 58, 22.5, 9.5, 4.2, 2.8, 0.8, 0.4, 0.455, 0.345, 0.762],
	[88, 'Bones', 'Hyland', 'LA Clippers', 'LAC', 'G', '5', 55, 20.2, 10.2, 2.5, 3.5, 0.7, 0.2, 0.415, 0.362, 0.825],

	// ---- Los Angeles Lakers ----
	[89, 'LeBron', 'James', 'Los Angeles Lakers', 'LAL', 'F', '23', 62, 35.2, 23.5, 7.9, 9.0, 1.2, 0.6, 0.504, 0.365, 0.750],
	[90, 'Anthony', 'Davis', 'Los Angeles Lakers', 'LAL', 'F-C', '3', 58, 34.5, 25.8, 12.2, 3.2, 1.2, 2.2, 0.552, 0.282, 0.785],
	[91, 'Austin', 'Reaves', 'Los Angeles Lakers', 'LAL', 'G', '15', 66, 32.8, 17.5, 4.2, 6.5, 1.0, 0.3, 0.465, 0.378, 0.848],
	[92, 'Luka', 'Doncic', 'Los Angeles Lakers', 'LAL', 'G', '7', 55, 36.1, 28.1, 8.3, 7.8, 1.3, 0.4, 0.472, 0.348, 0.786],
	[93, 'Rui', 'Hachimura', 'Los Angeles Lakers', 'LAL', 'F', '28', 62, 26.5, 13.5, 5.2, 1.5, 0.5, 0.5, 0.488, 0.352, 0.775],
	[94, 'Dalton', 'Knecht', 'Los Angeles Lakers', 'LAL', 'G-F', '4', 58, 22.2, 11.2, 3.5, 1.5, 0.6, 0.3, 0.438, 0.382, 0.818],
	[95, 'Gabe', 'Vincent', 'Los Angeles Lakers', 'LAL', 'G', '7', 50, 18.5, 7.8, 2.2, 3.2, 0.7, 0.2, 0.415, 0.365, 0.845],

	// ---- Memphis Grizzlies ----
	[96, 'Ja', 'Morant', 'Memphis Grizzlies', 'MEM', 'G', '12', 52, 32.5, 25.2, 5.5, 8.5, 1.0, 0.4, 0.465, 0.328, 0.758],
	[97, 'Desmond', 'Bane', 'Memphis Grizzlies', 'MEM', 'G', '22', 62, 32.8, 22.5, 4.8, 5.2, 1.0, 0.4, 0.462, 0.395, 0.858],
	[98, 'Jaren', 'Jackson Jr', 'Memphis Grizzlies', 'MEM', 'F-C', '13', 60, 30.5, 20.8, 6.5, 1.8, 0.8, 2.4, 0.475, 0.342, 0.768],
	[99, 'Marcus', 'Smart', 'Memphis Grizzlies', 'MEM', 'G', '36', 55, 26.5, 10.5, 3.5, 5.2, 1.5, 0.3, 0.398, 0.332, 0.795],
	[100, 'Santi', 'Aldama', 'Memphis Grizzlies', 'MEM', 'F-C', '7', 60, 24.8, 12.8, 7.2, 2.5, 0.7, 0.8, 0.478, 0.358, 0.745],
	[101, 'GG', 'Jackson', 'Memphis Grizzlies', 'MEM', 'F', '45', 55, 22.5, 11.2, 4.5, 1.5, 0.6, 0.5, 0.425, 0.345, 0.752],

	// ---- Miami Heat ----
	[102, 'Bam', 'Adebayo', 'Miami Heat', 'MIA', 'C', '13', 66, 33.5, 20.5, 10.2, 4.8, 1.2, 0.9, 0.528, 0.275, 0.805],
	[103, 'Tyler', 'Herro', 'Miami Heat', 'MIA', 'G', '14', 62, 32.8, 22.8, 5.2, 5.5, 0.8, 0.3, 0.458, 0.388, 0.872],
	[104, 'Jimmy', 'Butler', 'Miami Heat', 'MIA', 'F', '22', 48, 30.5, 18.5, 5.8, 4.5, 1.5, 0.5, 0.485, 0.298, 0.852],
	[105, 'Terry', 'Rozier', 'Miami Heat', 'MIA', 'G', '2', 55, 28.5, 15.8, 3.5, 4.2, 0.9, 0.3, 0.432, 0.362, 0.848],
	[106, 'Jaime', 'Jaquez Jr', 'Miami Heat', 'MIA', 'F', '11', 66, 28.2, 13.5, 5.0, 2.8, 0.8, 0.4, 0.465, 0.348, 0.815],
	[107, 'Nikola', 'Jovic', 'Miami Heat', 'MIA', 'F', '5', 60, 22.5, 10.8, 5.5, 2.2, 0.6, 0.5, 0.452, 0.355, 0.778],

	// ---- Milwaukee Bucks ----
	[108, 'Giannis', 'Antetokounmpo', 'Milwaukee Bucks', 'MIL', 'F', '34', 63, 35.0, 31.2, 11.6, 5.8, 1.1, 1.4, 0.606, 0.274, 0.657],
	[109, 'Damian', 'Lillard', 'Milwaukee Bucks', 'MIL', 'G', '0', 62, 34.2, 25.5, 4.5, 7.2, 1.0, 0.3, 0.452, 0.368, 0.912],
	[110, 'Khris', 'Middleton', 'Milwaukee Bucks', 'MIL', 'F', '22', 48, 28.5, 16.2, 4.8, 4.5, 0.8, 0.3, 0.468, 0.385, 0.878],
	[111, 'Brook', 'Lopez', 'Milwaukee Bucks', 'MIL', 'C', '11', 60, 28.8, 13.5, 5.2, 1.5, 0.5, 2.5, 0.485, 0.362, 0.778],
	[112, 'Bobby', 'Portis', 'Milwaukee Bucks', 'MIL', 'F-C', '9', 62, 24.5, 12.8, 7.5, 1.5, 0.5, 0.4, 0.478, 0.365, 0.752],
	[113, 'Malik', 'Beasley', 'Milwaukee Bucks', 'MIL', 'G', '5', 58, 22.5, 11.5, 3.0, 1.8, 0.7, 0.2, 0.425, 0.392, 0.862],
	[114, 'AJ', 'Green', 'Milwaukee Bucks', 'MIL', 'G', '20', 55, 18.5, 8.5, 2.5, 1.5, 0.5, 0.2, 0.415, 0.405, 0.878],

	// ---- Minnesota Timberwolves ----
	[115, 'Anthony', 'Edwards', 'Minnesota Timberwolves', 'MIN', 'G', '5', 65, 35.8, 25.9, 5.5, 5.2, 1.5, 0.6, 0.462, 0.368, 0.825],
	[116, 'Rudy', 'Gobert', 'Minnesota Timberwolves', 'MIN', 'C', '27', 62, 30.5, 13.5, 12.8, 1.5, 0.5, 2.2, 0.658, 0.000, 0.618],
	[117, 'Jaden', 'McDaniels', 'Minnesota Timberwolves', 'MIN', 'F', '3', 64, 30.2, 13.8, 4.2, 2.8, 1.2, 0.8, 0.448, 0.358, 0.748],
	[118, 'Mike', 'Conley', 'Minnesota Timberwolves', 'MIN', 'G', '10', 58, 26.5, 9.5, 3.0, 5.8, 1.0, 0.2, 0.445, 0.382, 0.885],
	[119, 'Naz', 'Reid', 'Minnesota Timberwolves', 'MIN', 'C', '11', 62, 22.8, 13.2, 5.8, 1.5, 0.5, 0.8, 0.498, 0.368, 0.785],
	[120, 'Nickeil', 'Alexander-Walker', 'Minnesota Timberwolves', 'MIN', 'G', '9', 55, 20.5, 8.5, 2.8, 2.2, 0.8, 0.3, 0.418, 0.345, 0.818],
	[121, 'Rob', 'Dillingham', 'Minnesota Timberwolves', 'MIN', 'G', '0', 50, 18.5, 10.2, 2.0, 4.5, 0.8, 0.2, 0.442, 0.362, 0.855],

	// ---- New Orleans Pelicans ----
	[122, 'Zion', 'Williamson', 'New Orleans Pelicans', 'NOP', 'F', '1', 48, 30.5, 24.5, 6.8, 4.5, 1.0, 0.7, 0.585, 0.318, 0.698],
	[123, 'Brandon', 'Ingram', 'New Orleans Pelicans', 'NOP', 'F', '14', 55, 32.8, 22.8, 5.5, 5.2, 0.8, 0.5, 0.472, 0.358, 0.852],
	[124, 'CJ', 'McCollum', 'New Orleans Pelicans', 'NOP', 'G', '3', 58, 30.5, 18.2, 3.5, 4.2, 0.9, 0.2, 0.442, 0.378, 0.862],
	[125, 'Dejounte', 'Murray', 'New Orleans Pelicans', 'NOP', 'G', '5', 60, 32.2, 17.5, 5.2, 6.5, 1.5, 0.5, 0.448, 0.335, 0.798],
	[126, 'Herb', 'Jones', 'New Orleans Pelicans', 'NOP', 'F', '5', 62, 28.5, 10.5, 4.8, 2.5, 1.5, 0.8, 0.455, 0.332, 0.728],
	[127, 'Jonas', 'Valanciunas', 'New Orleans Pelicans', 'NOP', 'C', '17', 58, 24.5, 12.2, 8.5, 1.5, 0.5, 0.8, 0.545, 0.325, 0.752],
	[128, 'Trey', 'Murphy III', 'New Orleans Pelicans', 'NOP', 'F', '25', 55, 26.8, 14.5, 4.2, 1.8, 0.7, 0.5, 0.448, 0.395, 0.858],

	// ---- New York Knicks ----
	[129, 'Jalen', 'Brunson', 'New York Knicks', 'NYK', 'G', '11', 66, 34.2, 26.5, 3.5, 7.2, 0.9, 0.2, 0.478, 0.388, 0.868],
	[130, 'Karl-Anthony', 'Towns', 'New York Knicks', 'NYK', 'C', '32', 64, 32.5, 24.2, 10.5, 3.2, 0.8, 0.5, 0.518, 0.392, 0.852],
	[131, 'Mikal', 'Bridges', 'New York Knicks', 'NYK', 'F', '1', 66, 34.5, 19.5, 4.5, 3.5, 1.0, 0.5, 0.462, 0.372, 0.818],
	[132, 'OG', 'Anunoby', 'New York Knicks', 'NYK', 'F', '8', 58, 30.2, 15.8, 5.2, 1.8, 1.5, 0.8, 0.478, 0.368, 0.785],
	[133, 'Josh', 'Hart', 'New York Knicks', 'NYK', 'G-F', '3', 66, 28.5, 10.5, 8.2, 3.8, 0.8, 0.3, 0.468, 0.342, 0.728],
	[134, 'Donte', 'DiVincenzo', 'New York Knicks', 'NYK', 'G', '0', 62, 26.5, 13.2, 3.5, 3.2, 1.0, 0.3, 0.432, 0.395, 0.838],
	[135, 'Mitchell', 'Robinson', 'New York Knicks', 'NYK', 'C', '23', 45, 22.5, 8.5, 8.5, 1.0, 0.5, 1.8, 0.618, 0.000, 0.548],

	// ---- Oklahoma City Thunder ----
	[136, 'Shai', 'Gilgeous-Alexander', 'Oklahoma City Thunder', 'OKC', 'G', '2', 66, 34.5, 31.5, 5.5, 6.2, 2.0, 1.0, 0.522, 0.358, 0.885],
	[137, 'Jalen', 'Williams', 'Oklahoma City Thunder', 'OKC', 'G-F', '8', 66, 32.8, 21.2, 5.8, 5.5, 1.5, 0.8, 0.485, 0.362, 0.828],
	[138, 'Chet', 'Holmgren', 'Oklahoma City Thunder', 'OKC', 'C', '7', 58, 28.5, 16.5, 7.5, 2.5, 0.8, 2.5, 0.518, 0.368, 0.798],
	[139, 'Lu', 'Dort', 'Oklahoma City Thunder', 'OKC', 'G', '5', 62, 28.2, 12.8, 4.0, 2.5, 1.5, 0.4, 0.425, 0.345, 0.768],
	[140, 'Alex', 'Caruso', 'Oklahoma City Thunder', 'OKC', 'G', '6', 64, 26.5, 9.5, 3.8, 3.5, 1.8, 0.5, 0.445, 0.372, 0.795],
	[141, 'Isaiah', 'Hartenstein', 'Oklahoma City Thunder', 'OKC', 'C', '55', 58, 24.5, 10.5, 8.5, 2.8, 0.7, 1.2, 0.565, 0.285, 0.718],
	[142, 'Aaron', 'Wiggins', 'Oklahoma City Thunder', 'OKC', 'G-F', '21', 60, 20.5, 8.2, 3.5, 1.5, 0.6, 0.4, 0.475, 0.348, 0.762],

	// ---- Orlando Magic ----
	[143, 'Paolo', 'Banchero', 'Orlando Magic', 'ORL', 'F', '5', 62, 34.2, 24.5, 7.8, 5.5, 0.8, 0.6, 0.468, 0.338, 0.748],
	[144, 'Franz', 'Wagner', 'Orlando Magic', 'ORL', 'F', '22', 64, 33.5, 22.8, 5.5, 5.8, 1.2, 0.5, 0.478, 0.358, 0.828],
	[145, 'Jalen', 'Suggs', 'Orlando Magic', 'ORL', 'G', '4', 62, 30.5, 14.8, 3.5, 4.2, 1.5, 0.5, 0.438, 0.345, 0.768],
	[146, 'Wendell', 'Carter Jr', 'Orlando Magic', 'ORL', 'C', '34', 55, 26.5, 11.2, 8.5, 2.5, 0.6, 0.8, 0.528, 0.318, 0.718],
	[147, 'Jonathan', 'Isaac', 'Orlando Magic', 'ORL', 'F', '1', 42, 22.5, 8.5, 5.2, 1.2, 0.8, 1.5, 0.465, 0.342, 0.712],
	[148, 'Cole', 'Anthony', 'Orlando Magic', 'ORL', 'G', '50', 55, 22.8, 11.2, 3.2, 3.8, 0.8, 0.3, 0.415, 0.352, 0.842],
	[149, 'Moritz', 'Wagner', 'Orlando Magic', 'ORL', 'C', '21', 58, 18.5, 10.8, 4.5, 1.5, 0.5, 0.4, 0.498, 0.332, 0.765],

	// ---- Philadelphia 76ers ----
	[150, 'Joel', 'Embiid', 'Philadelphia 76ers', 'PHI', 'C', '21', 45, 32.5, 28.5, 11.2, 3.5, 1.0, 1.8, 0.528, 0.345, 0.878],
	[151, 'Tyrese', 'Maxey', 'Philadelphia 76ers', 'PHI', 'G', '0', 66, 34.5, 25.8, 3.5, 6.2, 1.2, 0.3, 0.462, 0.378, 0.872],
	[152, 'Paul', 'George', 'Philadelphia 76ers', 'PHI', 'F', '8', 58, 32.8, 22.5, 5.8, 4.5, 1.5, 0.4, 0.455, 0.385, 0.862],
	[153, 'Kelly', 'Oubre Jr', 'Philadelphia 76ers', 'PHI', 'F', '9', 62, 26.5, 13.5, 4.5, 1.8, 1.0, 0.3, 0.445, 0.348, 0.748],
	[154, 'Caleb', 'Martin', 'Philadelphia 76ers', 'PHI', 'F', '6', 60, 24.5, 9.8, 4.2, 2.2, 1.0, 0.5, 0.455, 0.352, 0.775],
	[155, 'Andre', 'Drummond', 'Philadelphia 76ers', 'PHI', 'C', '1', 55, 18.5, 7.5, 8.5, 1.0, 0.5, 1.0, 0.558, 0.000, 0.542],

	// ---- Phoenix Suns ----
	[156, 'Kevin', 'Durant', 'Phoenix Suns', 'PHX', 'F', '35', 58, 34.5, 27.2, 6.5, 5.2, 0.8, 1.2, 0.518, 0.405, 0.878],
	[157, 'Devin', 'Booker', 'Phoenix Suns', 'PHX', 'G', '1', 62, 34.2, 26.5, 4.2, 6.8, 1.0, 0.3, 0.475, 0.365, 0.875],
	[158, 'Bradley', 'Beal', 'Phoenix Suns', 'PHX', 'G', '3', 55, 30.5, 18.5, 4.0, 4.5, 1.0, 0.3, 0.465, 0.372, 0.858],
	[159, 'Jusuf', 'Nurkic', 'Phoenix Suns', 'PHX', 'C', '20', 60, 24.5, 10.5, 9.2, 2.5, 0.8, 0.8, 0.535, 0.285, 0.698],
	[160, 'Grayson', 'Allen', 'Phoenix Suns', 'PHX', 'G', '10', 64, 26.5, 12.5, 3.8, 3.2, 0.7, 0.2, 0.452, 0.398, 0.875],
	[161, 'Royce', 'O\'Neale', 'Phoenix Suns', 'PHX', 'F', '00', 58, 24.5, 7.5, 4.5, 2.5, 0.8, 0.4, 0.418, 0.368, 0.785],

	// ---- Portland Trail Blazers ----
	[162, 'Anfernee', 'Simons', 'Portland Trail Blazers', 'POR', 'G', '1', 60, 32.8, 22.5, 3.2, 5.5, 0.8, 0.2, 0.438, 0.378, 0.878],
	[163, 'Scoot', 'Henderson', 'Portland Trail Blazers', 'POR', 'G', '0', 62, 28.5, 14.5, 3.5, 5.8, 1.0, 0.3, 0.412, 0.318, 0.762],
	[164, 'Deandre', 'Ayton', 'Portland Trail Blazers', 'POR', 'C', '2', 64, 28.5, 16.2, 10.5, 1.5, 0.5, 0.8, 0.565, 0.000, 0.698],
	[165, 'Jerami', 'Grant', 'Portland Trail Blazers', 'POR', 'F', '9', 58, 30.2, 20.5, 4.5, 2.5, 0.8, 0.8, 0.445, 0.362, 0.842],
	[166, 'Shaedon', 'Sharpe', 'Portland Trail Blazers', 'POR', 'G', '17', 60, 26.5, 15.8, 3.8, 2.2, 0.6, 0.3, 0.438, 0.345, 0.798],
	[167, 'Deni', 'Avdija', 'Portland Trail Blazers', 'POR', 'F', '8', 62, 28.5, 12.5, 6.8, 3.5, 1.0, 0.5, 0.445, 0.348, 0.782],
	[168, 'Donovan', 'Clingan', 'Portland Trail Blazers', 'POR', 'C', '33', 55, 18.5, 7.5, 6.2, 0.8, 0.4, 1.8, 0.568, 0.000, 0.618],

	// ---- Sacramento Kings ----
	[169, 'De\'Aaron', 'Fox', 'Sacramento Kings', 'SAC', 'G', '5', 64, 34.5, 26.2, 4.5, 6.8, 2.0, 0.5, 0.475, 0.348, 0.738],
	[170, 'Domantas', 'Sabonis', 'Sacramento Kings', 'SAC', 'C', '10', 66, 34.8, 19.8, 13.5, 7.5, 1.0, 0.5, 0.565, 0.352, 0.712],
	[171, 'DeMar', 'DeRozan', 'Sacramento Kings', 'SAC', 'F', '10', 62, 32.5, 22.5, 5.2, 5.5, 1.0, 0.4, 0.485, 0.348, 0.852],
	[172, 'Keegan', 'Murray', 'Sacramento Kings', 'SAC', 'F', '13', 66, 30.5, 15.8, 5.5, 2.2, 0.8, 0.5, 0.455, 0.375, 0.808],
	[173, 'Malik', 'Monk', 'Sacramento Kings', 'SAC', 'G', '0', 62, 26.5, 14.8, 3.2, 3.5, 0.8, 0.2, 0.452, 0.385, 0.855],
	[174, 'Kevin', 'Huerter', 'Sacramento Kings', 'SAC', 'G', '9', 55, 24.5, 11.2, 3.0, 2.5, 0.7, 0.3, 0.438, 0.392, 0.828],

	// ---- San Antonio Spurs ----
	[175, 'Victor', 'Wembanyama', 'San Antonio Spurs', 'SAS', 'C', '1', 64, 32.5, 24.4, 10.5, 3.8, 1.2, 3.6, 0.478, 0.354, 0.797],
	[176, 'Devin', 'Vassell', 'San Antonio Spurs', 'SAS', 'G-F', '24', 55, 30.5, 18.5, 4.0, 4.2, 1.0, 0.5, 0.452, 0.372, 0.858],
	[177, 'Keldon', 'Johnson', 'San Antonio Spurs', 'SAS', 'F', '3', 62, 26.5, 14.2, 4.5, 2.2, 0.8, 0.3, 0.455, 0.338, 0.728],
	[178, 'Jeremy', 'Sochan', 'San Antonio Spurs', 'SAS', 'F', '10', 60, 28.5, 13.5, 6.8, 3.5, 1.0, 0.7, 0.468, 0.315, 0.665],
	[179, 'Tre', 'Jones', 'San Antonio Spurs', 'SAS', 'G', '33', 62, 24.5, 9.5, 3.2, 5.2, 1.0, 0.2, 0.475, 0.328, 0.795],
	[180, 'Stephon', 'Castle', 'San Antonio Spurs', 'SAS', 'G', '5', 58, 22.5, 11.5, 3.5, 3.8, 1.2, 0.4, 0.425, 0.332, 0.748],
	[181, 'Zach', 'Collins', 'San Antonio Spurs', 'SAS', 'C', '23', 55, 18.5, 8.8, 5.5, 1.8, 0.4, 0.8, 0.498, 0.358, 0.785],

	// ---- Toronto Raptors ----
	[182, 'Scottie', 'Barnes', 'Toronto Raptors', 'TOR', 'F', '4', 64, 34.5, 22.5, 8.2, 6.5, 1.2, 0.8, 0.475, 0.342, 0.738],
	[183, 'RJ', 'Barrett', 'Toronto Raptors', 'TOR', 'F', '9', 60, 32.8, 20.5, 6.2, 4.5, 0.8, 0.4, 0.455, 0.342, 0.768],
	[184, 'Immanuel', 'Quickley', 'Toronto Raptors', 'TOR', 'G', '5', 62, 30.5, 18.2, 4.0, 6.8, 1.2, 0.3, 0.432, 0.368, 0.855],
	[185, 'Jakob', 'Poeltl', 'Toronto Raptors', 'TOR', 'C', '25', 66, 28.5, 13.5, 9.8, 2.5, 0.5, 1.2, 0.575, 0.000, 0.668],
	[186, 'Gradey', 'Dick', 'Toronto Raptors', 'TOR', 'G', '1', 62, 24.5, 12.8, 3.2, 2.5, 0.7, 0.3, 0.438, 0.378, 0.848],
	[187, 'Ochai', 'Agbaji', 'Toronto Raptors', 'TOR', 'G-F', '30', 55, 22.5, 9.5, 3.5, 1.5, 0.8, 0.3, 0.428, 0.355, 0.795],

	// ---- Utah Jazz ----
	[188, 'Lauri', 'Markkanen', 'Utah Jazz', 'UTA', 'F', '23', 60, 32.5, 24.5, 8.2, 2.2, 0.6, 0.5, 0.485, 0.388, 0.862],
	[189, 'Jordan', 'Clarkson', 'Utah Jazz', 'UTA', 'G', '00', 62, 28.5, 18.5, 3.5, 4.5, 1.0, 0.2, 0.438, 0.352, 0.858],
	[190, 'Collin', 'Sexton', 'Utah Jazz', 'UTA', 'G', '2', 58, 26.5, 16.2, 2.8, 3.8, 0.8, 0.2, 0.465, 0.342, 0.828],
	[191, 'Walker', 'Kessler', 'Utah Jazz', 'UTA', 'C', '24', 64, 24.5, 10.2, 8.5, 1.2, 0.5, 2.5, 0.628, 0.000, 0.648],
	[192, 'John', 'Collins', 'Utah Jazz', 'UTA', 'F', '20', 58, 26.5, 14.8, 6.5, 1.8, 0.5, 0.6, 0.518, 0.342, 0.738],
	[193, 'Keyonte', 'George', 'Utah Jazz', 'UTA', 'G', '3', 60, 24.5, 12.5, 3.0, 4.2, 0.9, 0.2, 0.405, 0.348, 0.818],

	// ---- Washington Wizards ----
	[194, 'Kyle', 'Kuzma', 'Washington Wizards', 'WAS', 'F', '33', 58, 32.5, 21.8, 6.5, 3.5, 0.6, 0.4, 0.455, 0.335, 0.742],
	[195, 'Jordan', 'Poole', 'Washington Wizards', 'WAS', 'G', '13', 62, 30.5, 18.5, 3.2, 5.2, 0.8, 0.2, 0.422, 0.345, 0.868],
	[196, 'Bilal', 'Coulibaly', 'Washington Wizards', 'WAS', 'F', '0', 64, 28.5, 12.5, 5.2, 3.2, 1.2, 0.6, 0.438, 0.332, 0.712],
	[197, 'Alex', 'Sarr', 'Washington Wizards', 'WAS', 'C', '20', 62, 26.5, 13.2, 7.5, 1.8, 0.8, 2.0, 0.462, 0.305, 0.682],
	[198, 'Corey', 'Kispert', 'Washington Wizards', 'WAS', 'F', '24', 55, 24.5, 11.5, 3.5, 1.8, 0.5, 0.3, 0.452, 0.395, 0.855],
	[199, 'Jonas', 'Valanciunas', 'Washington Wizards', 'WAS', 'C', '17', 58, 22.5, 10.5, 7.8, 1.2, 0.4, 0.7, 0.548, 0.325, 0.745],
	[200, 'Malcolm', 'Brogdon', 'Washington Wizards', 'WAS', 'G', '7', 48, 24.5, 13.8, 3.5, 4.8, 0.8, 0.2, 0.455, 0.372, 0.868],
];

export const players: Player[] = raw.map(r => ({
	id: r[0],
	firstName: r[1],
	lastName: r[2],
	team: r[3],
	teamAbbr: r[4],
	position: r[5],
	jerseyNumber: r[6],
	stats: {
		season: '2025-26',
		gp: r[7],
		min: r[8],
		pts: r[9],
		reb: r[10],
		ast: r[11],
		stl: r[12],
		blk: r[13],
		fgPct: r[14],
		fg3Pct: r[15],
		ftPct: r[16],
	},
}));

export function searchPlayers(query: string, limit = 10): Player[] {
	const q = query.toLowerCase();
	return players
		.filter(p => `${p.firstName} ${p.lastName}`.toLowerCase().includes(q))
		.sort((a, b) => {
			const aName = `${a.firstName} ${a.lastName}`.toLowerCase();
			const bName = `${b.firstName} ${b.lastName}`.toLowerCase();
			const aExact = aName === q ? 0 : aName.startsWith(q) ? 1 : 2;
			const bExact = bName === q ? 0 : bName.startsWith(q) ? 1 : 2;
			return aExact - bExact || aName.length - bName.length;
		})
		.slice(0, limit);
}

export function getPlayerById(id: number): Player | undefined {
	return players.find(p => p.id === id);
}
