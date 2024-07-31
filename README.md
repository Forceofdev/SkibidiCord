# SkibidiCord
this is the most horrible piece of dogshit ive ever made. but anyway, heres how to install it

## WARNING
this discord mod is INCREDIBLY broken (i wrote it at 3 am), so you WILL experience issues with it, and i mean a LOT of issues (such as 1.3 THOUSAND logs in the console)
and alongside that, this mod also eats up a LOT of ram (since its really unoptimized)

STEP 1
install node.js, if you don't have it, you won't even be able to unpack the .asar files

STEP 2
go into your discord directory, and locate the desktop-core folder with the core.asar files
it should be found in the same directory as the executable, in the `app-[insert random numbers]` folder, then modules

STEP 3 
unpack the core.asar file
to do this, you can either install the command-line tools yourself, or you can use npx like i did
i'd recommend creating a decompiled file, then open up a terminal and head over to the folders location, then run:
`npx @electron/asar core.asar [FOLDER OF CHOICE]`
OR
`npm i -g @electron/asar`
THEN
`asar extract core.asar [FOLDER OF CHOICE]`
(i'd recommend the npx approach)

STEP 4
open up app/mainScreen.js, and locate the the loadMainPage function (if you can't find it, just control f and search const loadMainPage = ())
then insert the code from this repository

STEP 5
`run npx @electron/asar pack [FOLDER OF CHOICE] core.asar` or `asar pack [FOLDER OF CHOICE] core.asar`
beware that you MUST have discord closed (from the task manager level), and also, keep a copy of the original .asar in case you want to revert back to your stable version of discord (or you can simply remove the code)

STEP 6
open discord and realize what you have just done
