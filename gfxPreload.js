// Kangming Deng && Amy Yu
// Graphics

BG = "images/BG.png";
BOY_PORTRAIT = "portraits/Boy6x.png";
GIRL_AVATAR = "portraits/Girl.png";
BEDROOM = "maps/BedroomBig.png";
	
images = [
	BG,
	BOY_PORTRAIT,
    GIRL_AVATAR,
    BEDROOM,
];
		
function preloadGFX(source)
{
	for (var i = 0; i < source.length; i++)
	{
		var gfx = new Image();
		gfx.src = source[i];
	}
}