// Kangming Deng && Amy Yu

function setUpStory()
{
	cosmicLatte = new VisualNovel(document.getElementById("frame"), document.getElementById("chars"), document.getElementById("prevCharState"), 
		document.getElementById("txtBox"), document.getElementById("avatar"), document.getElementById("nameBox"), 
		document.getElementById("txt"), document.getElementById("fx"), document.getElementById("choices"), document.getElementById("menu"));
			
	boyPlaceHolder = new Character(false, "b", "Boy", BOY_PORTRAIT, "", 0);

	cosmicLatte.script = {
		"-1":["#0"],
		0:[function() { cosmicLatte.inquiring = true; cosmicLatte.changeUI(MENU); cosmicLatte.changeBG(BG); }, "#1"],
		1:[function() { cosmicLatte.inquiring = false; cosmicLatte.changeUI(DIALOGUE); 
						boyPlaceHolder.appear(cosmicLatte, 0, BOY_PORTRAIT); boyPlaceHolder.say(cosmicLatte, "Are you serious?"); }, "#1"],
	};
	
	cosmicLatte.play();
}