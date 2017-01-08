// Kangming Deng && Amy Yu
// Graphics

BG = "images/BG.png";
BOY_PORTRAIT = "portraits/Boy6x.png";
BOY_SMILE = "portraits/Boy6xSmile.png";
BOY_GRIMACE = "portraits/Boy6xGrimace.png";
BOY_SOBBING = "portraits/Boy6xSobbing.png";
GIRL_AVATAR = "portraits/Girl.png";
BEDROOM = "maps/BedroomBig.png";
BEDROOM_BOY = "maps/BedroomBoy.png";
CLASSROOM = "maps/ClassroomBig.png";
	
images = [
	BG,
	BOY_PORTRAIT,
    BOY_SMILE,
    BOY_GRIMACE,
    BOY_SOBBING,
    GIRL_AVATAR,
    BEDROOM,
    BEDROOM_BOY,
    CLASSROOM
];
		
function preloadGFX(source)
{
	for (var i = 0; i < source.length; i++)
	{
		var gfx = new Image();
		gfx.src = source[i];
	}
}