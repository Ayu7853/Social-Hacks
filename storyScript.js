// Kangming Deng && Amy Yu
currentDayOfTheWeek = 1;
// Events
DIDNT_CHECK_MESSAGE = false;
APATHETIC = false;
I_PROMISED_JACK = false;

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
"7ENDa":[function() { hideGameCalendar(); gameVN.changeBG(CLASSROOM); teacher.appear(gameVN, 0, TEACHER_PORTRAIT); gameVN.narrate("Jack isn't in class today. I wonder where he is."); }, "#7ENDb"], 
"7ENDb":[function() { gameVN.narrate("There's still a bit of time before class starts, so I guess I'll check my phone."); }, "#7ENDc"],
"7ENDc":[function() { gameVN.narrate("You take out your phone in class and see over 10 messages from Jack.<br/ >One text reads, &#34;I don't think I can do this. I don't want to go to school.&#34;"); }, "#7ENDd"],
"7ENDd":[function() { gameVN.narrate("I guess that would explain why he isn't here today.") }, "#7ENDe"],
"7ENDe":[function() { gameVN.changeBG(BEDROOM); progressGameDay(); teacher.disappear(gameVN);
											gameVN.narrate("Jack wasn't in class today either. I guess he decided to stay home... forever?") }, "#7ENDf"],
"7ENDf":[function() { progressGameDay(); gameVN.narrate("Jack never showed up again for class nor graduation.") }, "#7ENDg"],
"7ENDg":[function() { progressGameDay(); gameVN.narrate("You wonder what you could have done differently and go on with the rest of your life.") }, "#7FINAL"],
"7FINAL":[function() { hideGameCalendar(); gameVN.changeUI(CG); gameVN.changeBG(BAD_ENDING); }, "#REFRESH"],

// APATHETIC
7:[function() { gameVN.changeBG(CLASSROOM); protagonist.appear(gameVN, 0, BOY_PORTRAIT); player.ask(gameVN, "You arrive to class and notice that " + protagonist.name + " is there. Nothing seems out of the ordinary.", ["Talk to him.#10", "He seems to be fine.#8"]); }, "#7"],
8:[function() { player.ask(gameVN, "It's probably nothing to worry about. It's none of my business anyway.", ["Just ignore him.#9ENDa", "Talk to him.#10"]); }, "#8"], 
"9ENDa":[function() { gameVN.narrate("Best to leave him be. Time to go home and sleep!"); }, "#9ENDb"],
"9ENDb":[function() { gameVN.changeBG(BEDROOM); progressGameDay(); VN.narrate("Apparently " + protagonist.name + " wasn't in class today. Oh well..."); }, "#9ENDc"],
"9ENDc":[function() { gameVN.narrate(protagonist.name + " never came to school afterward..."); }, "#9ENDd"],
"9ENDd":[function() { gameVN.narrate("Maybe apathy is a <strong><em>bad</em></strong> thing."); }, "#9FINAL"],
"9FINAL":[function() { hideGameCalendar(); gameVN.changeUI(CG); gameVN.changeBG(BAD_ENDING); }, "#REFRESH"],

        10:[function() { player.say(gameVN, "Hey, " + protagonist.name + ". How are you feeling?"); }, "#11"],
        11:[function() { gameVN.narrate("Jack just stares at you."); }, "#12"],
        12:[function() { player.say(gameVN, "Jack...?"); }, "#13"],
        13:[function() { protagonist.say(gameVN, "I... can we talk in private? I would <em>appreciate</em> your advice."); }, "#14"],
        14:[function() { player.say(gameVN, "Okay, where?"); }, "#15"],
        15:[function() { protagonist.say(gameVN, "Can we talk about it at my house?"); }, "#16"],
        16:[function() { player.say(gameVN, "Sure! I'll help anytime. Is tomorrow okay?"); }, "#17"],
        17:[function() { protagonist.say(gameVN, "Yeah &#58;&#62;"); }, "#18"],
        18:[function() { protagonist.express(gameVN, BOY_SMILE); gameVN.narrate("Jack genuinely smiles and gives you his home address."); }, "#19"],
// DAY2
        19:[function() { gameVN.changeBG(BEDROOM); protagonist.disappear(gameVN); progressGameDay(); gameVN.narrate("After school the next day, you head over to Jack's house."); }, "#20"],
        20:[function() { hideGameCalendar(); gameVN.changeBG(BEDROOM_BOY); protagonist.appear(gameVN, 0, BOY_SMILE); player.say(gameVN, "Thanks for having me over."); }, "#21"],
        21:[function() { protagonist.say(gameVN, "No, thank you for taking the time to get here."); }, "#22"],
        22:[function() { player.say(gameVN, "Soooo... nice bed, huh?"); }, "#23"],
        23:[function() { protagonist.express(gameVN, BOY_PORTRAIT); protagonist.say(gameVN, "Uh.. thanks?"); }, "#24"],
        24:[function() { player.say(gameVN, "I'm just playing with you~ Anyways... wasn't there <em>something</em> you wanted to talk about?"); }, "#25"],
        25:[function() { protagonist.say(gameVN, "I, uhm..."); }, "#26"],
        26:[function() { player.say(gameVN, "...Jack?"); }, "#27"],
        27:[function() { protagonist.say(gameVN, "It's just that..."); }, "#28"],
        28:[function() { gameVN.narrate("...?"); }, "#29"],
        29:[function() { protagonist.say(gameVN, "I know this may sound weird..."); }, "#30"],
        30:[function() { player.say(gameVN, "What's the matter...?"); }, "#31"],
        31:[function() { protagonist.say(gameVN, "I feel kinda... worthless all the time."); }, "#32"],
        32:[function() { protagonist.express(gameVN, BOY_GRIMACE); gameVN.narrate("Jack grimaces."); }, "#33"],
        33:[function() { player.say(gameVN, "Why would you <em>even think that way?</em>"); }, "#34"],
        34:[function() { protagonist.express(gameVN, BOY_SOBBING); protagonist.say(gameVN, "I feel like I am just a <strong><em>burden</em></strong>. I don't even know if those who are around me can even <strong>STAND</strong> me... You know?"); }, "#35"],
        35:[function() { player.say(gameVN, ":( ... Jack."); }, "#36"],
        36:[function() { protagonist.say(gameVN, "I'm sorry. I'm just ranting and wasting your time."); }, "#37"],
        37:[function() { player.say(gameVN, "If you really think that way, what does that mean about me?"); }, "#38"],
        38:[function() { protagonist.express(gameVN, BOY_GRIMACE); protagonist.say(gameVN, "Huh?"); }, "#39"],
        39:[function() { protagonist.express(gameVN, BOY_PORTRAIT); player.say(gameVN, "Why do you think I'm here?"); }, "#40"],
        40:[function() { protagonist.express(gameVN, BOY_SMILE); protagonist.say(gameVN, "Yeah... you're definitely right. Thank you, Jill."); }, "#41"],
        41:[function() { player.say(gameVN, "Anytime!"); }, "#42"],
        42:[function() { protagonist.ask(gameVN, "Also... could you please not tell anyone?", ["I won't.#43", "Why not?#44"]); }, "#42"],
        43:[function() { I_PROMISED_JACK = true; protagonist.say(gameVN, "Okay. Thanks for listening."); }, "#52"],
        44:[function() { protagonist.express(gameVN, BOY_PORTRAIT); protagonist.say(gameVN, "Because it's just something I need to 'get over'"); }, "#45"],
        45:[function() { player.say(gameVN, "What do you mean by <strong>THAT</strong>?"); }, "#46"],
        46:[function() { protagonist.express(gameVN, BOY_GRIMACE); protagonist.say(gameVN, "It's just another phase in my life. It's not a big deal... seriously."); }, "#47"],
        47:[function() { player.express(gameVN, BOY_PORTRAIT); player.say(gameVN, "It really is a big deal! I'm concerned for you obviously!!"); }, "#48"],
        48:[function() { gameVN.narrate("There's an awkward pause."); }, "#49"],
        49:[function() { protagonist.say(gameVN, "Can I have some time alone now...?"); }, "#50"],
        50:[function() { player.say(gameVN, "...Alright. Just remember that I'll always be there if you need help."); }, "#51"],
        51:[function() { protagonist.say(gameVN, "Okay..."); }, "#52"],
        52:[function() { protagonist.say(gameVN, "Have a safe trip home."); }, "#53"],
        53:[function() { gameVN.changeBG(BEDROOM); showGameCalendar(); protagonist.disappear(gameVN); gameVN.narrate("You go home afterwards and rest for the day."); }, "#53a"],
// DAY 3
        "53a":[function() { progressGameDay(); gameVN.narrate("You had a good night of rest. Awakened by the sunlight, you feel rejuvenated and ready to take on the world."); }, "#54"],
        54:[function() { hideGameCalendar(); gameVN.changeBG(CLASSROOM); teacher.appear(gameVN, 0, TEACHER_PORTRAIT); gameVN.narrate("You arrive to school thinking about the conversation you had with Jack."); }, "#55"],
        55:[function() { protagonist.appear(gameVN, 0, BOY_SMILE); gameVN.narrate("After yesterday's conversation, Jack seems to feel better. Psych class is coming to a close."); }, "#56"],
        56:[function() { player.ask(gameVN, "You're wondering if you should discuss about Jack to an adult -- your psych teacher.", ["No#57", "Yes#60"]); }, "#56"],
        57:[function() { if(I_PROMISED_JACK == true) {gameVN.narrate("You kept your promise. It was for the best, right?");} else {gameVN.narrate("Jack trusted you enough to tell you.")}}, "#58"],
// AMBIVALENT ENDING
58:[function() { gameVN.changeBG(BEDROOM); showGameCalendar(); teacher.disappear(gameVN); protagonist.disappear(gameVN); gameVN.narrate("Although Jack <em>SEEMED</em> fine, it was nothing but a facade."); }, "#59"],
59:[function() { currentDayOfTheWeek += 4; updateGameCalendar(); showGameCalendar(); gameVN.narrate("You soon learn that the issues were bigger: depression. He has dropped out of school... I wonder what I could've done to change this unfortunate outcome of his."); }, "#AMBIVALENT"],
"AMBIVALENT":[function() { hideGameCalendar(); gameVN.changeUI(CG); gameVN.changeBG(AMBIVALENT_ENDING); }, "#REFRESH"],

				60:[function() { if (I_PROMISED_JACK == false) { gameVN.narrate("I have to tell " + teacher.name + "."); gameVN.jump("61"); return; } player.ask(gameVN, "Are you sure? You promised him.", ["No#57", "Yes#61"]); }, "#60"],
        61:[function() { protagonist.express(gameVN, BOY_PORTRAIT); gameVN.narrate("The teacher requests to speak to Jack in private."); }, "#62"],
        62:[function() { gameVN.narrate("Brrrzzrrzr! The school bell rings."); }, "#63"],
        63:[function() { teacher.say(gameVN, "Jack, can we talk in my office?"); }, "#64"],
        64:[function() { protagonist.express(gameVN, BOY_GRIMACE); protagonist.say(gameVN, "Okay..."); }, "#65"],
        65:[function() { teacher.disappear(gameVN); protagonist.disappear(gameVN); gameVN.narrate("After 15 minutes."); }, "#66"],
        66:[function() { protagonist.appear(gameVN, 0, BOY_GRIMACE); if(I_PROMISED_JACK == true) 
                { protagonist.say(gameVN, "Jill... I trusted you to not tell anyone."); gameVN.jump("I Trusted You"); return; }
                protagonist.say(gameVN, "Jill..."); }, "#67"],
				"I Trusted You":[function() { player.say(gameVN, "Sorry but I had to. I genuinely care about your well-being. So... what did you talk about?"); }, "#67"],
				67:[function() { protagonist.express(gameVN, BOY_SOBBING); gameVN.narrate("Jack breaks down into tears."); }, "#68"],
        68:[function() { protagonist.say(gameVN, "If I told you something really personal, would you treat me like always?"); }, "#69"],
        69:[function() { player.say(gameVN, "What is it...?"); }, "#70"],
        70:[function() { gameVN.narrate("Jack takes a deep breath."); }, "#71"],
        71:[function() { protagonist.say(gameVN, "Mr. Solon and I had a long discussion about my problems... He suggested that I go see a therapist regarding signs of depression."); }, "#72"],
				72:[function() { player.say(gameVN, "I..."); }, "#73"],
        73:[function() { gameVN.narrate("You are left speechless by Jack's words."); }, "#74"],
        74:[function() { protagonist.express(gameVN, HUGGING); gameVN.narrate("The only thing you could do was give him a long hug."); }, "#75"],
        75:[function() { player.say(gameVN, "You are <strong><em>strong</em></strong>. I wish you the best."); }, "#76"],
        76:[function() { gameVN.changeBG(BEDROOM); showGameCalendar(); protagonist.disappear(gameVN); gameVN.narrate("The day shortly comes to an end as the sun began setting."); }, "#77"],
        77:[function() { gameVN.narrate("Basked in light, you can only imagine what it might be like to be Jack in his shoes."); }, "#78"],
// DAY 4
        78:[function() { progressGameDay(); gameVN.narrate("You couldn't really sleep well that night, but life still continues for you."); }, "#79"],
        79:[function() { gameVN.narrate("You head to school and notice that Jack isn't there."); }, "#80"],
        80:[function() { gameVN.narrate("He has informed you that he will be at therapy."); }, "#81"],
        81:[function() { gameVN.narrate("You hope that things go well for him as another day passes by."); }, "#82"],
// In the future
        82:[function() { currentGameDay = "?"; hideGameCalendar(); gameVN.changeBG(SKY); gameVN.narrate("You decide to visit Jack after the school year ends."); }, "#83"],
        83:[function() { protagonist.appear(gameVN, 0, BOY_SMILE); protagonist.say(gameVN, "Thanks for everything you've done for me"); }, "#84"],
        84:[function() { gameVN.uiMode = CG; gameVN.changeBG(CG_JACK); }, "#End Credits 1"],
				"End Credits 1":[function() {	gameVN.changeBG(TRUE_ENDING_1); }, "#End Credits 2"],
				"End Credits 2":[function() { gameVN.changeBG(TRUE_ENDING_2); }, "#End Credits 3"],
				"End Credits 3":[function() { gameVN.changeBG(TRUE_ENDING_3); }, "#End Credits 4"],
				"End Credits 4":[function() { gameVN.changeBG(TRUE_ENDING_4); }, "#REFRESH"],
}

	gameVN.play();
}