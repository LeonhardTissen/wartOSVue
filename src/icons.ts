// External links to new tabs that don't require CORS
export type DesktopLink = {
    category: string;       // Only used for providing search results in the start menu
    iconname: string;       // Name of the desktop icon shown below the image
    iconpixelated: boolean; // Whether the icon has no antialiasing 
    imagedata: string;      // URL or base64 data of the desktop icon image
    url: string;            // URL of the program that's used in the Iframe's source
    windowname?: string;    // Name of the window when launched, defaults to "iconname"
}

export type DesktopIcon = DesktopLink & {
    width: number;      // Width of the Iframe
    height: number;     // Height of the Iframe
    zoom: number;       // Scale transform applied to the Iframe, absolute dimensions are maintained
}

export const desktopIcons: Array<DesktopIcon | DesktopLink> = [

    // In-page apps, these must allow CORS.

    {
        "category": "Miscellaneous",
        "height": 800,
        "iconname": "Command Prompt",
        "iconpixelated": false,
        "imagedata": "cmd.png",
        "url": "https://cmd.warze.org",
        "width": 800,
        "zoom": 1
    },
    {
        "category": "Games",
        "height": 600,
        "iconname": "microGame",
        "iconpixelated": false,
        "imagedata": "microgame.svg",
        "url": "https://microgame.warze.org",
        "width": 800,
        "zoom": 0.5
    },
    {
        "category": "Games",
        "height": 700,
        "iconname": "Laibart",
        "iconpixelated": true,
        "imagedata": "laibart.png",
        "url": "https://fun.warze.org/laibart",
        "width": 700,
        "zoom": 1
    },
    {
        "category": "Games",
        "height": 540,
        "iconname": "Casino1",
        "iconpixelated": false,
        "imagedata": "casino1.png",
        "url": "https://warze.org/casino1",
        "width": 800,
        "windowname": "Casino 1",
        "zoom": 0.5
    },
    {
        "category": "Games",
        "height": 600,
        "iconname": "Drinking Contest",
        "iconpixelated": false,
        "imagedata": "casinodrink.png",
        "url": "https://warze.org/casinodrink",
        "width": 800,
        "windowname": "Casino",
        "zoom": 0.6
    },
    {
        "category": "Games",
        "height": 540,
        "iconname": "Casino2",
        "iconpixelated": false,
        "imagedata": "casino2.png",
        "url": "https://warze.org/casino2",
        "width": 800,
        "windowname": "Casino 2",
        "zoom": 0.5
    },
    {
        "category": "Games",
        "height": 540,
        "iconname": "Casino3",
        "iconpixelated": false,
        "imagedata": "casino3.png",
        "url": "https://warze.org/casino3",
        "width": 800,
        "windowname": "Casino 3",
        "zoom": 0.5
    },
    {
        "category": "Miscellaneous",
        "height": 600,
        "iconname": "Random Space",
        "iconpixelated": false,
        "imagedata": "randomspace.jpg",
        "url": "https://spacebackground.warze.org/",
        "width": 600,
        "zoom": 1
    },
    {
        "category": "Community",
        "height": 600,
        "iconname": "Test",
        "iconpixelated": false,
        "imagedata": "test.png",
        "url": "https://warze.org/test",
        "width": 800,
        "zoom": 1
    },
    {
        "category": "Miscellaneous",
        "height": 600,
        "iconname": "Cursor Jumper",
        "iconpixelated": false,
        "imagedata": "cursor.png",
        "url": "https://cursorjumper.warze.org/",
        "width": 800,
        "windowname": "CursorJumperJS",
        "zoom": 1
    },
    {
        "category": "Miscellaneous",
        "height": 600,
        "iconname": "Guy",
        "iconpixelated": false,
        "imagedata": "guy.png",
        "url": "https://fun.warze.org/guy",
        "width": 600,
        "zoom": 0.4
    },
    {
        "category": "Games",
        "height": 540,
        "iconname": "Casino",
        "iconpixelated": false,
        "imagedata": "casino.png",
        "url": "https://warze.org/casino",
        "width": 800,
        "zoom": 0.5
    },
    {
        "category": "Games",
        "height": 600,
        "iconname": "JollyWorld",
        "iconpixelated": false,
        "imagedata": "jollyworld.jpg",
        "url": "https://jollyworld.app/",
        "width": 800,
        "zoom": 1
    },
    {
        "category": "Games",
        "height": 800,
        "iconname": "Jellys Venture",
        "iconpixelated": false,
        "imagedata": "jelly.png",
        "url": "https://fun.warze.org/jellyventure",
        "width": 650,
        "windowname": "Jellys Venture",
        "zoom": 0.5
    },
    {
        "category": "Miscellaneous",
        "height": 800,
        "iconname": "Discord Status",
        "iconpixelated": false,
        "imagedata": "discordstatus.png",
        "url": "https://discordstatus.warze.org",
        "width": 800,
        "windowname": "Discord Status Creator",
        "zoom": 1
    },
    {
        "category": "Community",
        "height": 800,
        "iconname": "Permaplace",
        "iconpixelated": true,
        "imagedata": "permaplace.png",
        "url": "https://warze.org/permaplace",
        "width": 800,
        "zoom": 0.8
    },
    {
        "category": "Miscellaneous",
        "height": 600,
        "iconname": "Notepad",
        "iconpixelated": false,
        "imagedata": "notepad.png",
        "url": "https://fun.warze.org/notepad",
        "width": 600,
        "zoom": 1
    },
    {
        "category": "Social",
        "height": 700,
        "iconname": "Gifun",
        "iconpixelated": false,
        "imagedata": "gifun.png",
        "url": "https://warze.org/gifun",
        "width": 700,
        "zoom": 0.7
    },
    {
        "category": "Games",
        "height": 600,
        "iconname": "Leaderboard",
        "iconpixelated": true,
        "imagedata": "leaderboard.png",
        "url": "https://warze.org/lb",
        "width": 800,
        "zoom": 0.6
    },
    {
        "category": "Games",
        "height": 600,
        "iconname": "Happy Wheels",
        "iconpixelated": false,
        "imagedata": "happywheels.jpg",
        "url": "https://happywheels.warze.org/",
        "width": 800,
        "zoom": 0.5
    },
    {
        "category": "Miscellaneous",
        "height": 600,
        "iconname": "Discord Roles",
        "iconpixelated": false,
        "imagedata": "discordaboutmeroles.png",
        "url": "https://discordroles.warze.org/",
        "width": 550,
        "windowname": "Discord About Me Roles",
        "zoom": 1
    },
    {
        "category": "Miscellaneous",
        "height": 600,
        "iconname": "Theme Store",
        "iconpixelated": false,
        "imagedata": "workshop.svg",
        "url": "https://warze.org/wartos/workshop",
        "width": 820,
        "zoom": 1
    },
    {
        "category": "Miscellaneous",
        "height": 600,
        "iconname": "Calculator",
        "iconpixelated": false,
        "imagedata": "calculator.png",
        "url": "https://fun.warze.org/calculator",
        "width": 400,
        "zoom": 1
    },
    {
        "category": "Games",
        "height": 600,
        "iconname": "Doomed.io",
        "iconpixelated": false,
        "imagedata": "doomed.jpg",
        "url": "https://doomed.io/",
        "width": 800,
        "zoom": 1
    },
    {
        "category": "Games",
        "height": 600,
        "iconname": "Lights On!",
        "iconpixelated": false,
        "imagedata": "lightson.png",
        "url": "https://lightson.warze.org/",
        "width": 600,
        "zoom": 0.6
    },
	{
        "category": "Games",
        "height": 600,
        "iconname": "Lights On! 2",
        "iconpixelated": false,
        "imagedata": "lightson2.png",
        "url": "https://lightson2.warze.org/",
        "width": 600,
        "zoom": 1
    },
    {
        "category": "Games",
        "height": 600,
        "iconname": "Flag Quiz",
        "iconpixelated": false,
        "imagedata": "flagquiz.png",
        "url": "https://flagquiz.warze.org/",
        "width": 800,
        "zoom": 0.8
    },
    {
        "category": "Games",
        "height": 600,
        "iconname": "React Idle",
        "iconpixelated": false,
        "imagedata": "react.png",
        "url": "https://reactidle.warze.org/",
        "width": 600,
        "windowname": "React Idle Game",
        "zoom": 0.6
    },
    {
        "category": "Miscellaneous",
        "height": 600,
        "iconname": "Fun",
        "iconpixelated": false,
        "imagedata": "trash.png",
        "url": "https://fun.warze.org/",
        "width": 600,
        "zoom": 1
    },
    {
        "category": "Games",
        "height": 666,
        "iconname": "Pushy",
        "iconpixelated": true,
        "imagedata": "pushy.png",
        "url": "https://pushy.warze.org/",
        "width": 950,
        "zoom": 1
    },
    {
        "category": "Games",
        "height": 600,
        "iconname": "Snake",
        "iconpixelated": false,
        "imagedata": "snake.jpg",
        "url": "https://snake.warze.org/",
        "width": 800,
        "zoom": 1
    },
    {
        "category": "Social",
        "height": 600,
        "iconname": "Profiles",
        "iconpixelated": false,
        "imagedata": "group.svg",
        "url": "https://warze.org/profiles",
        "width": 800,
        "windowname": "User Profiles",
        "zoom": 0.6,
    },
    {
        "category": "Miscellaneous",
        "height": 700,
        "iconname": "Microsoft Edge",
        "iconpixelated": false,
        "imagedata": "edge.svg",
        "url": "https://bing.com/",
        "width": 800,
        "zoom": 1
    },
    {
        "category": "Miscellaneous",
        "height": 700,
        "iconname": "Zip Editor",
        "iconpixelated": false,
        "imagedata": "winrar.png",
        "url": "https://zipeditor.warze.org/",
        "width": 800,
        "zoom": 1
    },
    {
        "category": "Miscellaneous",
        "height": 700,
        "iconname": "Squishy Earth",
        "iconpixelated": false,
        "imagedata": "earth.png",
        "url": "https://squishyearth.warze.org",
        "width": 700,
        "zoom": 0.7
    },
    {
        "category": "Miscellaneous",
        "height": 700,
        "iconname": "Virtual Machine",
        "iconpixelated": false,
        "imagedata": "virtualbox.png",
        "url": "https://virtualbox.warze.org",
        "width": 700,
        "windowname": "Virtual Manager",
        "zoom": 1
    },
    {
        "category": "Miscellaneous",
        "height": 700,
        "iconname": "Explorer",
        "iconpixelated": false,
        "imagedata": "explorer.png",
        "url": "https://warze.org/cloud",
        "width": 700,
        "windowname": "Explorer",
        "zoom": 0.8
    },
    {
        "category": "Games",
        "height": 510,
        "iconname": "Ball 2",
        "iconpixelated": false,
        "imagedata": "ball2.png",
        "url": "https://ball2.warze.org",
        "width": 480,
        "windowname": "Ball 2",
        "zoom": 1
    },

    // External links that open a new tab when clicked

    {
        "category": "Social",
        "iconname": "Warze on YouTube",
        "iconpixelated": false,
        "imagedata": "youtube.svg",
        "url": "https://youtube.com/warze",
    },
    {
        "category": "Miscellaneous",
        "iconname": "Discord",
        "iconpixelated": false,
        "imagedata": "discord.png",
        "url": "https://discord.gg/jtcqgvkZY7",
    },
    {
        "category": "Social",
        "iconname": "Warze on GitHub",
        "iconpixelated": false,
        "imagedata": "github.png",
        "url": "https://github.com/LeonhardTissen",
    },
    {
        "category": "Social",
        "iconname": "Warze on GitLab",
        "iconpixelated": false,
        "imagedata": "gitlab.svg",
        "url": "https://gitlab.com/LeonhardTissen",
    },
    {
        "category": "Social",
        "iconname": "Warze on LinkedIn",
        "iconpixelated": false,
        "imagedata": "linkedin.svg",
        "url": "https://www.linkedin.com/in/leonhard-tissen/",
    },
    {
        "category": "Social",
        "iconname": "Warze on X",
        "iconpixelated": false,
        "imagedata": "x.svg",
        "url": "https://twitter.com/leonhard_tissen",
    },
]

