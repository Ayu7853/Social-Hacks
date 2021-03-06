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
BAD_ENDING = "endings/BadEnding.png";
AMBIVALENT_ENDING = "endings/AmbivalentEnding.png";
TRUE_ENDING_1 = "endings/TrueEnd1.png";
TRUE_ENDING_2 = "endings/TrueEnd2.png";
TRUE_ENDING_3 = "endings/TrueEnd3.png";
TRUE_ENDING_4 = "endings/TrueEnd4.png";
SKY = "maps/Sky.png";
CG_JACK = "endings/Jack.png";
	
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
    HUGGING,
    BAD_ENDING,
    AMBIVALENT_ENDING,
    TRUE_ENDING_1,
    TRUE_ENDING_2,
    TRUE_ENDING_3,
    TRUE_ENDING_4,
    CG_JACK
];
		
function preloadGFX(source)
{
	for (var i = 0; i < source.length; i++)
	{
		var gfx = new Image();
		gfx.src = source[i];
	}
}