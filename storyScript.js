// Kangming Deng && Amy Yu
currentDayOfTheWeek = 1;
// Events
DIDNT_CHECK_MESSAGE = false;
APATHETIC = false;	

function updateGameCalendar()  {
    document.getElementById("day").innerHTML = currentDayOfTheWeek;
}

function showGameCalendar() { 
    document.getElementById("day").style.display = "block";
}

function hideGameCalendar() { 
    document.getElementById("day").style.display = "none";
}

function progressGameDay() { 
		currentDayOfTheWeek++;
    updateGameCalendar();
  	showGameCalendar();
}

function setUpStory()
{
	gameVN = new VisualNovel(document.getElementById("frame"), document.getElementById("chars"), document.getElementById("prevCharState"), 
		document.getElementById("txtBox"), document.getElementById("avatar"), document.getElementById("nameBoxTxt"), 
		document.getElementById("txt"), document.getElementById("fx"), document.getElementById("choices"), document.getElementById("menu"));
			
	player = new Character(true, "p", "Jill", "", GIRL_AVATAR, 0);
	protagonist = new Character(false, "b", "Jack", BOY_PORTRAIT, "", 0);
  teacher = new Character(false, "t", "Mr. Solon", TEACHER_PORTRAIT, "", 0);


gameVN.script = {
  	"REFRESH":[function() { location.reload(); }, "#0"],
        
		"-1":["#0"],
		0:[function() { gameVN.inquiring = true; gameVN.changeUI(MENU); }, "#1"],
		1:[function() { gameVN.changeBG(BEDROOM); updateGameCalendar(); showGameCalendar();
                        gameVN.narrate("Yawn~ There's only a few more days of school left."); }, "#2"],
		2:[function() { gameVN.narrate("It seems like I received a text message."); }, "#3"],
		3:[function() { player.ask(gameVN, "Do you want to check it?", ["Yes#4a", "No#4b"]); }, "#3"],
		"4a":[function() { gameVN.narrate("Oh, it's from " + protagonist.name + "."); }, "#5"],
		 "4b":[function() { DIDNT_CHECK_MESSAGE = true; gameVN.narrate("Oh well, it probably wasn't important anyway..."); }, "#6"],
        5:[function() { gameVN.narrate(protagonist.name + ": I don't think I can do this. I don't want to go to school."); }, "#5a"],
        "5a":[function() { gameVN.narrate(player.name + ": What's wrong?"); }, "#5b"],
        "5b": [function() { player.ask(gameVN, protagonist.name + ": I haven't been feeling like myself lately.", ["Comfort#5c", "It's his own problem#5d"]); }, "#5b"],
        "5c":[function() { gameVN.narrate(player.name + ": I hope you'll feel better. Please remember that I'll be there for you."); }, "#6"],
        "5d":[function() { APATHETIC = true; gameVN.narrate(player.name + ": Oh."); }, "#6"],
        6:[function() { gameVN.narrate("Time to head to school! Yay...");  if (DIDNT_CHECK_MESSAGE == true) { gameVN.jump("7ENDa"); } }, "#7"], 
// Didn't Check Message Ending]
"7ENDa":[function() { hideGameCalendar(); gameVN.changeBG(CLASSROOM); gameVN.narrate("Jack isn't in class today. I wonder where he is."); }, "#7ENDb"], 
"7ENDb":[function() { gameVN.narrate("There's still a bit of time before class starts, so I guess I'll check my phone."); }, "#7ENDc"],
"7ENDc":[function() { gameVN.narrate("You take out your phone in class and see over 10 messages from Jack.<br/ >One text reads, &#34;I don't think I can do this. I don't want to go to school.&#34;"); }, "#7ENDd"],
"7ENDd":[function() { gameVN.narrate("I guess that would explain why he isn't here today.") }, "#7ENDe"],
"7ENDe":[function() { gameVN.changeBG(BEDROOM); progressGameDay(); 
											gameVN.narrate("Jack wasn't in class today either. I guess he decided to stay home... forever?") }, "#7ENDf"],
"7ENDf":[function() { progressGameDay(); gameVN.narrate("Jack never showed up again for class nor graduation.") }, "#7ENDg"],
"7ENDg":[function() { progressGameDay(); gameVN.narrate("You wonder what you could have done differently and go on with the rest of your life.") }, "#7FINAL"],
"7FINAL":[function() { hideGameCalendar(); gameVN.changeUI(CG); gameVN.changeBG(BAD_ENDING); }, "#REFRESH"],

// APATHETIC
7:[function() { player.ask(gameVN, "You arrive to class and notice that " + protagonist.name + " is there. Nothing seems out of the ordinary.", ["Talk to him.#10", "He seems to be fine.#8"]); }, "#7"],
8:[function() { player.ask(gameVN, "It's probably nothing to worry about. It's none of my business anyway.", ["Just ignore him.#9ENDa", "Talk to him.#10"]); }, "#8"], 
"9ENDa":[function() { gameVN.narrate("Best to leave him be. Time to go home and sleep!"); }, "#9ENDb"],
"9ENDb":[function() { gameVN.changeBG(BEDROOM); progressGameDay(); VN.narrate("Apparently " + protagonist.name + " wasn't in class today. Oh well..."); }, "#9ENDc"],
"9ENDc":[function() { VN.narrate(protagonist.name + " never came to school afterward..."); }, "#9ENDd"],
"9ENDd":[function() { VN.narrate("Maybe apathy is a <strong><em>bad</em></strong> thing."); }, "#9FINAL"],
"9FINAL":[function() { hideGameCalendar(); gameVN.changeUI(CG); gameVN.changeBG(BAD_ENDING); }, "#REFRESH"],

        10:[function() { player.say(gameVN, "Hey, " + protagonist.name + ". How are you feeling?"); }, "#11"],
        11:[function() { gameVN.narrate("Jack just stares at you."); }, "#12"],
        12:[function() { player.say(gameVN, "Jack...?"); }, "#13"],
        13:[function() { protagonist.say(gameVN, "I... can we talk in private? I would <em>appreciate</em> your advice."); }, "#14"],
        14:[function() { player.say(gameVN, "Okay, where?"); }, "#15"],
        15:[function() { protagonist.say(gameVN, "Can we talk about it at my house?"); }, "#16"],
        16:[function() { player.say(gameVN, "Sure! I'll help anytime. Is tomorrow okay?"); }, "#17"],
        17:[function() { protagonist.say(gameVN, "Yeah &#58;&#62;"); }, "#18"],
        18:[function() { gameVN.narrate("Jack genuinely smiles and gives you his home address."); }, "#19"],
// DAY2
        19:[function() { gameVN.narrate("After school the next day, you head over to Jack's house."); }, "#20"],
        20:[function() { player.say(gameVN, "Thanks for having me over."); }, "#21"],
        21:[function() { protagonist.say(gameVN, "No, thank you for taking the time to get here."); }, "#22"],
        22:[function() { player.say(gameVN, "Soooo... nice bed, huh?"); }, "#23"],
        23:[function() { protagonist.say(gameVN, "Uh.. thanks?"); }, "#24"],
        24:[function() { player.say(gameVN, "I'm just playing with you~ Anyways... wasn't there <em>something</em> you wanted to talk about?"); }, "#25"],
        25:[function() { protagonist.say(gameVN, "I, uhm..."); }, "#26"],
        26:[function() { player.say(gameVN, "...Jack?"); }, "#27"],
        27:[function() { protagonist.say(gameVN, "It's just that..."); }, "#28"],
        28:[function() { gameVN.narrate("...?"); }, "#29"],
        29:[function() { protagonist.say(gameVN, "I know this may sound weird..."); }, "#30"],
        30:[function() { player.say(gameVN, "What's the matter...?"); }, "#31"],
        31:[function() { protagonist.say(gameVN, "I feel kinda... worthless all the time."); }, "#32"],
        32:[function() { gameVN.narrate("Jack grimaces"); }, "#33"],
}

	gameVN.play();
}