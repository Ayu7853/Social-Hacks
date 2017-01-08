// Kangming Deng && Amy Yu
// Graphics

BG = "images/BG.png";
BOY_PORTRAIT = "portraits/Boy6x.png";
BOY_SMILE = "portraits/Boy6xSmile.png";
BOY_SMILE = "portraits/Boy6xGrimace.png";
GIRL_AVATAR = "portraits/Girl.png";
BEDROOM = "maps/BedroomBig.png";
BEDROOM_BOY = "maps/BedroomBoy.png";
CLASSROOM = "maps/ClassroomBig.png";
	
images = [
	BG,
	BOY_PORTRAIT,
    BOY_SMILE,
    BOY_GRIMACE,
    GIRL_AVATAR,
    BEDROOM,
    BEDROOM_BOY,
    CLASSROOM,
];
		
function preloadGFX(source)
{
	for (var i = 0; i < source.length; i++)
	{
		var gfx = new Image();
		gfx.src = source[i];
	}
}