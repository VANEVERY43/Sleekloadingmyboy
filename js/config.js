/*    _           _    _                     _ 
     | |         | |  | |                   | |
  ___| | ___  ___| | _| |     ___   __ _  __| |
 / __| |/ _ \/ _ \ |/ / |    / _ \ / _` |/ _` |
 \__ \ |  __/  __/   <| |___| (_) | (_| | (_| |
 |___/_|\___|\___|_|\_\______\___/ \__,_|\__,_|
    version 2.06
*/

/*URL for the server logo
Leave it blank to use text instead*/
var l_serverImage = "images/logo.png";

/*Custom server name configuration
Leave it blank for automatic server name*/
var l_serverName = "S.T.A.L.K.E.R Roleplay";

/*Use a video for the background?
Otherwise it will just use images*/
var l_bgVideo = false;

/*Video background
Avaiable options:
"backgrounds/videos/aurora.webm"
"backgrounds/videos/bluefall.webm"
"backgrounds/videos/bluetilefloor.webm"
"backgrounds/videos/bluewhitecircles.webm"
"backgrounds/videos/bokehlens.webm"
"backgrounds/videos/cleanbokeh.webm"
"backgrounds/videos/coldnight.webm"
"backgrounds/videos/colorfulburst.webm"
"backgrounds/videos/dancingstars.webm"
"backgrounds/videos/dropsflares.webm"
"backgrounds/videos/focusorangebokeh.webm"
"backgrounds/videos/glimmering.webm"
"backgrounds/videos/glowingrings.webm"
"backgrounds/videos/greencircles.webm"
"backgrounds/videos/hues.webm"
"backgrounds/videos/inthedeep.webm"
"backgrounds/videos/modernflourish.webm"
"backgrounds/videos/orangeaura.webm"
"backgrounds/videos/warminside.webm"
"backgrounds/videos/yellowgreen.webm"

You can add custom backgrounds
Just make sure it is at webm VP8 format */
var l_background = "";

/*(Image-background only)
Place one or more images
Multiple images will automatically shuffle between them*/
var l_bgImages = [
	"backgrounds/images/1.jpg",
	"backgrounds/images/2.jpg",
	"backgrounds/images/3.jpg",
	"backgrounds/images/4.jpg",
	"backgrounds/images/5.jpg",
	"backgrounds/images/6.jpg",
	"backgrounds/images/7.jpg",
	"backgrounds/images/8.jpg",
	"backgrounds/images/9.jpg",
	"backgrounds/images/10.jpg",
	"backgrounds/images/11.jpg",
];

/*Random background images order?*/
var l_bgImagesRandom = true;

/*(Image-background only)
Delay between background images changes
in milliseconds*/
var l_bgImageDuration = 5000;

/*(Image-background only)
Image background fade velocity
in milliseconds*/
var l_bgImageFadeVelocity = 2000;

/*Enable background overlay?*/
var l_bgOverlay = true;

/*Background darkening amount
0 for none (0%), 100 for pitch black (100%)*/
var l_bgDarkening = 50;

/*Music player
'true' or 'false' to enable music in the background*/
var l_music = true;

/*Display actual song's name?*/
var l_musicDisplay = true;

/*Music playlist
Place how much Youtube IDs/.ogg you want*/
var l_musicPlaylist = [
	{youtube: "97CHAUnDkC8", name: "Billy Joel - Goodnight Saigon"},
	{youtube: "7jLNKzYWRTk", name: "The Music Machine - Hey Joe (Jimi Hendrix cover)"},
	{youtube: "eFaUJbcis-M", name: "World of Silence - Strawberry Fields Forever (Beatles cover)"},
	{youtube: "ntLsElbW9Xo", name: "Barry McGuire - Eve of Destruction"},
	{youtube: "NocG_xZBQT8", name: "Bob Seger System - Ramblin' Gamblin' Man"},
	{youtube: "wJVpihgwE18", name: "The Animals - We Gotta Get Out Of This Place"},
	{youtube: "dpWEv9Q0XQ4", name: "The Animals - House of the Rising Sun"},	
	{youtube: "Gu2pVPWGYMQ", name: "Creedence Clearwater Revival - Have You Ever Seen The Rain?"},	
	{youtube: "5BmEGm-mraE", name: "Creedence Clearwater Revival - Bad Moon Rising"},	
	{youtube: "drsMyeXzLSo", name: "Johnny Cash - Heart Of Gold (Neil Young cover)"},
	{youtube: "vt1Pwfnh5pc", name: "Johnny Cash - Hurt (Nine Inch Nails Cover)"},
	{youtube: "iAbgmXVaOc8", name: "Johnny Cash - Drive On"},
	{youtube: "-qCHogez_jM", name: "Johnny Cash - Like a Soldier"},
	{youtube: "9unWRsD2QQM", name: "Iced Earth - Highwayman"},
	{youtube: "0E686beMSqE", name: "The Bob Seger System - 2+2=?"},
	{youtube: "zaFMODV9tTU", name: "Týr - The Lay of Our Love"},
	{youtube: "3JE4ILhcomo", name: "Johnny Wright - Hello Vietnam"},
	{youtube: "r7N1yGe_HYs", name: "Sabaton - The Ballad Of Bull"},
	{youtube: "NZ975hR64dc", name: "Unknown Soldier - The Doors"},
	{youtube: "NdXCsXcs6nA", name: "Akira Yamaoka - Room of Angel"},
	{youtube: "lt9hJD64OsU", name: "Akira Yamaoka - Remodeling"},
	{youtube: "dMlj-OEzETg", name: "Aphex Twin - Stone in Focus"},
	{youtube: "rpyQSFtfLuE", name: "Andreas Rönnberg - Intro"},
	{youtube: "TZUo7nANi4o", name: "Andreas Rönnberg - Sophie"},
	{youtube: "1gn1ff2VJpY", name: "Andreas Rönnberg - Crow"},
	{youtube: "qL3osHj-Myc", name: "Cryo Chamber - Azathoth 1"},
	{youtube: "8aas1Qrksls", name: "Cryo Chamber - Nyarlathotep 1"},
	{youtube: "MpVTssMS72M", name: "Xenojam - Cthulhu"},
];

/*Random music order?*/
var l_musicRandom = true;

/*Music volume
Choose a value between 0 and 100*/
var l_musicVolume = 10;

/*Enable custom messages?*/
var l_messagesEnabled = true;

/*Enter your custom messages below*/
var l_messages = [
"That is not dead which can eternal lie, And with strange aeons even death may die. -HP Lovecraft",
"The oldest and strongest emotion of mankind is fear, and the oldest and strongest kind of fear is fear of the unknown. -HP Lovecraft",
"The world is indeed comic, but the joke is on mankind. -HP Lovecraft",
"We make up horrors to help us cope with the real ones. -Stephen King",
"I was weak. That's why I needed you... needed someone to punish me for my sins... -James Sunderland",
"I pull my blanket over my head. Not wanting to see the faceless ghosts outside. -Intig ~ We are nothing",
];

/*Random message order?*/
var l_messagesRandom = true;

/*Delay between message changes
in milliseconds*/
var l_messagesDelay = 5000;

/*Messages fade time
in milliseconds*/
var l_messagesFade = 1000;