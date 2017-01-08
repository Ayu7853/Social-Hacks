// Kangming Deng && Amy Yu
// Graphics

BG = "images/BG.png";
BOY_PORTRAIT = "portraits/Boy6x.png";
BOY_SMILE = "portraits/Boy6xSmile.png";
BOY_GRIMACE = "portraits/Boy6xGrimace.png";
BOY_SOBBING = "portraits/Boy6xSobbing.png";
GIRL_AVATAR = "portraits/Girl.png";
TEACHER_PORTRAIT = "portraits/Teacher.png";
BEDROOM = "maps/BedroomBig.png";
BEDROOM_BOY = "maps/BedroomBoy.png";
CLASSROOM = "maps/ClassroomBig.png";
HUGGING = "portraits/Hugging.png";
	
images = [
	BG,
	BOY_PORTRAIT,
    BOY_SMILE,
    BOY_GRIMACE,
    BOY_SOBBING,
    GIRL_AVATAR,
    TEACHER_PORTRAIT,
    BEDROOM,
    BEDROOM_BOY,
    CLASSROOM,
    HUGGING
];
		
function preloadGFX(source)
{
	for (var i = 0; i < source.length; i++)
	{
		var gfx = new Image();
		gfx.src = source[i];
	}
}