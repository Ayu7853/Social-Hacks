// Kangming Deng && Amy Yu
PAGE_ROUTINE_INDEX = 0;
// User Interface Modes
GAME = -1, MENU = 0, MONOLOGUE = 1, DIALOGUE = 2, CG = 3;

function VisualNovel(frame, chars, prevChars, txt, avt, name, msg, fx, choices, menu)
{
	this.mainFrame = frame;
	this.charFrame = chars;
	this.prevCharFrame = prevChars;
	this.textFrame = txt;
	this.textAvatar = avt;
	this.textName = name;
	this.textMessage = msg;
	this.choiceFrame = choices;
	this.fxFrame = fx;
	this.mainMenu = menu;
	
		// Place in VN
	this.page = -1;			// Initial Story Position
	this.uiMode = 0;
	this.inquiring = false;
	this.events = [];		// Story Altering Events
		// Images
	this.bg = "";
	this.characters = [];
	this.weather = "";
	
	this.script = {};
	
	this.inGameMode = false;
	this.switchToGame = function() { inGameMode = true; uiMode = GAME; this.gfx(); };
	
	this.play = function()
	{
		if (!this.inquiring && !this.inGameMode)
		{
			this.clearInquiry();
			var jumper = this.script[this.page][this.script[this.page].length - 1];	
			this.page = jumper.substring(jumper.lastIndexOf("#") + 1);
			this.script[this.page][PAGE_ROUTINE_INDEX]();
			this.gfx();
		}
	}
	
	this.narrate = function(t)			{ this.textMessage.innerHTML = t; }
	
	this.changeUI = function(ui)		{ this.uiMode = ui; this.gfx(); }
	this.changeBG = function(back)		{ this.bg = "url('" + back + "')"; }
	this.changeFX = function(w, anim)	{ this.weather = w; this.fxFrame.style.webkitAnimation = anim; this.fxFrame.style.animation = anim; this.gfx(); }
	this.clearInquiry = function()		{ this.choiceFrame.innerHTML = ""; }
	this.clearFX = function()			{ this.weather = ""; this.fxFrame.style.webkitAnimation = ""; this.fxFrame.style.animation = ""; this.gfx(); }
		
	this.gfx = function()
	{
			// Background
		this.mainFrame.style.backgroundImage = this.bg;
			// Weather
		this.fxFrame.style.backgroundImage = "url('" + this.weather + "')";
			// Characters
		this.charFrame.innerHTML = "";
		for (var i = 0; i < this.characters.length; i++)
		{
			var crt = document.createElement("img");
			crt.id = this.characters[i].code;
			crt.src = this.characters[i].sprite;
			crt.style.left = "-" + this.characters[i].xPos + "px";
			this.charFrame.appendChild(crt);
		}
		
			// UI Mode
		if (this.uiMode == GAME)
		{
			this.mainFrame.style.display = "none";
		}
		if (this.uiMode == MENU)
		{
			this.charFrame.style.display = "none";
			this.textFrame.style.display = "none";
			this.fxFrame.style.display = "none";
			this.mainMenu.style.display = "block";
		}
		if (this.uiMode == MONOLOGUE)
		{
			this.textAvatar.style.display = "none";
			this.textName.style.display = "none";
			this.charFrame.style.display = "block";
			this.textFrame.style.display = "block";
			this.textFrame.style.textAlign = "center";
			this.fxFrame.style.display = "block";
			this.mainMenu.style.display = "none";
		}
		if (this.uiMode == DIALOGUE)
		{
			this.textName.style.display = "block";
			this.charFrame.style.display = "block";
			this.textFrame.style.display = "block";
			this.textFrame.style.textAlign = "left";
			this.fxFrame.style.display = "block";
			this.mainMenu.style.display = "none";
		}
		if (this.uiMode == CG)
		{
			this.charFrame.style.display = "none";
			this.textFrame.style.display = "none";
			this.fxFrame.style.display = "block";
			this.mainMenu.style.display = "none";
		}
	}
}

function Character(m, c, n, s, a, p)
{
	this.isMainPlayer = m;
	this.code = c; // ID
	this.name = n;
	this.sprite = s;
	this.lastSprite = "";
	this.avatar = a;
	this.xPos = p;
	
	this.appear = function(vn, xP, exp)	{ this.move(xP); this.sprite = exp; vn.characters.push(this); vn.gfx(); }
	this.disappear = function(vn)
	{
		for (var i = 0; i < vn.characters.length; i++)
		{
			if (vn.characters[i].code = this.code)
			{
				vn.characters.splice(i, 1);
				vn.gfx();
			}
		}
	}
	this.move = function(xP)		{ this.xPos = xP; }
	this.express = function(vn, exp)
	{
		this.lastSprite = this.sprite;
		this.sprite = exp;
		
		for (var i = 0; i < vn.characters.length; i++)
		{
			if (vn.characters[i].code == this.code)
			{
				vn.characters[i].sprite = this.sprite;
			}
		}
		
		vn.prevCharFrame.src = this.lastSprite;
		vn.prevCharFrame.style.left = "-" + this.xPos + "px";
		vn.prevCharFrame.style.opacity = "1";
		
		var opacity = 1.0;
		var fade = setInterval(function()
		{
			if (opacity <= 0)
			{
				vn.prevCharFrame.src = "";
				clearInterval(fade);
			}
			opacity = (opacity - .1).toFixed(1);
			vn.prevCharFrame.style.opacity = opacity;
		}, 35);
	}
	
	this.say = function(vn, t)
	{
		vn.textMessage.innerHTML = t;
		
		if (this.isMainPlayer) {
			vn.textAvatar.src = this.avatar;
			vn.textAvatar.style.display = "block";
		}
		else {
			vn.textAvatar.style.display = "none";
		}
		
		vn.textName.innerHTML = this.name;
		vn.textFrame.style.bottom = 0;
		vn.textFrame.style.transition = "";
	}
	
	this.ask = function(vn, question, answers)
	{
		vn.inquiring = true;
		vn.clearInquiry();
		this.say(vn, question);
		
		for (var i = 0; i < answers.length; i++)
		{
			var choice = document.createElement("div");
			choice.innerHTML = answers[i].substring(0, answers[i].indexOf("#"));
			var jumper = answers[i].substring(answers[i].indexOf("#"));
			
			choice.onclick = function (num)
			{
				return function ()
				{
					vn.script[vn.page][vn.script[vn.page].length - 1] += answers[num].substring(answers[num].indexOf("#"));
					vn.inquiring = false;
					vn.choiceFrame.style.maxHeight = "0";
				};
			}(i);
			
			vn.choiceFrame.appendChild(choice);
		}
		
		var choicesPosition = (answers.length - 2) * 7 + 16;
		var textPosition = answers.length * 9;
		vn.textFrame.style.bottom = textPosition + "%";
		vn.choiceFrame.style.maxHeight = "576px";
	}
}