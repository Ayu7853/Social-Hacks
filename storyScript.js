// Kangming Deng && Amy Yu
currentDayOfTheWeek = 1;
// Events
DIDNT_CHECK_MESSAGE = false;

function updateGameCalendar()  {
    document.getElementById("day").innerHTML = currentDayOfTheWeek;
}

function showGameCalendar() { 
    document.getElementById("day").style.display = "block";
}

function hideGameCalendar() { 
    document.getElementById("day").style.display = "none";
}

function setUpStory()
{
	gameVN = new VisualNovel(document.getElementById("frame"), document.getElementById("chars"), document.getElementById("prevCharState"), 
		document.getElementById("txtBox"), document.getElementById("avatar"), document.getElementById("nameBoxTxt"), 
		document.getElementById("txt"), document.getElementById("fx"), document.getElementById("choices"), document.getElementById("menu"));
			
	player = new Character(true, "p", "Jill", "", GIRL_AVATAR, 0);
	protagonist = new Character(false, "b", "Jack", BOY_PORTRAIT, "", 0);

	gameVN.script = {
		"-1":["#0"],
		0:[function() { gameVN.inquiring = true; gameVN.changeUI(MENU); }, "#1"],
		1:[function() { gameVN.changeUI(MONOLOGUE); gameVN.changeBG(BEDROOM); updateGameCalendar(); showGameCalendar();
                        gameVN.narrate("Yawn~ There's only a few more days of school left."); }, "#2"],
		2:[function() { gameVN.narrate("It seems like I received a text message."); }, "#3"],
		3:[function() { player.ask(gameVN, "Do you want to check it?", ["Yes#4a", "No#4b"]); }, "#3"],
		"4a":[function() { gameVN.narrate("Oh, it's from " + protagonist.name + "."); }, "#5"],
		"4b":[function() { DIDNT_CHECK_MESSAGE = true; gameVN.narrate("Oh well, it probably wasn't important anyway..."); }, "#5"],
		5:[function() { gameVN.narrate("Time to head to school! Yay..."); }, "#6"],
	};
	
	gameVN.play();
}