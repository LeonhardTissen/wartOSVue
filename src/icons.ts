export interface DesktopIcon {
    category: string;
    width: number;
    height: number;
    zoom: number;
    iconname: string;
    imagedata: string;
    url: string;
    windowname: string;
}
export interface DesktopLink {
    category: string;
    iconname: string;
    imagedata: string;
    url: string;
}

export const desktopIcons: Array<DesktopIcon | DesktopLink> = [
    {
        "category": "Miscellaneous",
        "height": 800,
        "iconname": "Command Prompt",
        "imagedata": "cmd.png",
        "url": "https://cmd.warze.org",
        "width": 800,
        "windowname": "Command Prompt",
        "zoom": 1
    },
    {
        "category": "Games",
        "height": 600,
        "iconname": "microGame",
        "imagedata": "microgame.svg",
        "url": "https://microgame.warze.org",
        "width": 800,
        "windowname": "microGame",
        "zoom": 0.5
    },
    {
        "category": "Games",
        "height": 700,
        "iconname": "Laibart",
        "imagedata": "laibart.png",
        "url": "https://fun.warze.org/laibart",
        "width": 700,
        "windowname": "Laibart",
        "zoom": 1
    },
    {
        "category": "Games",
        "height": 540,
        "iconname": "Casino1",
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
        "imagedata": "randomspace.jpg",
        "url": "https://leonhardtissen.github.io/spaceBackgroundJS/",
        "width": 600,
        "windowname": "Random Space",
        "zoom": 1
    },
    {
        "category": "Community",
        "height": 600,
        "iconname": "Test",
        "imagedata": "test.png",
        "url": "https://warze.org/test",
        "width": 800,
        "windowname": "Test",
        "zoom": 1
    },
    {
        "category": "Miscellaneous",
        "height": 600,
        "iconname": "Cursor Jumper",
        "imagedata": "cursor.png",
        "url": "https://leonhardtissen.github.io/cursorJumperJS/",
        "width": 800,
        "windowname": "CursorJumperJS",
        "zoom": 1
    },
    {
        "category": "Miscellaneous",
        "height": 600,
        "iconname": "Guy",
        "imagedata": "guy.png",
        "url": "https://fun.warze.org/guy",
        "width": 600,
        "windowname": "Guy",
        "zoom": 0.4
    },
    {
        "category": "Games",
        "height": 540,
        "iconname": "Casino",
        "imagedata": "casino.png",
        "url": "https://warze.org/casino",
        "width": 800,
        "windowname": "Casino",
        "zoom": 0.5
    },
    {
        "category": "Games",
        "height": 600,
        "iconname": "JollyWorld",
        "imagedata": "jollyworld.jpg",
        "url": "https://jollyworld.app/",
        "width": 800,
        "windowname": "JollyWorld",
        "zoom": 1
    },
    {
        "category": "Games",
        "height": 800,
        "iconname": "Jellys Venture",
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
        "imagedata": "permaplace.png",
        "url": "https://warze.org/permaplace",
        "width": 800,
        "windowname": "Permaplace",
        "zoom": 0.8
    },
    {
        "category": "Miscellaneous",
        "height": 600,
        "iconname": "Notepad",
        "imagedata": "notepad.webp",
        "url": "https://fun.warze.org/notepad",
        "width": 600,
        "windowname": "Notepad",
        "zoom": 1
    },
    {
        "category": "Social",
        "height": 700,
        "iconname": "Gifun",
        "imagedata": "gifun.png",
        "url": "https://warze.org/gifun",
        "width": 700,
        "windowname": "Gifun",
        "zoom": 0.7
    },
    {
        "category": "Games",
        "height": 600,
        "iconname": "Leaderboard",
        "imagedata": "leaderboard.png",
        "url": "https://warze.org/lb",
        "width": 800,
        "windowname": "Leaderboard",
        "zoom": 0.6
    },
    {
        "category": "Games",
        "height": 600,
        "iconname": "Happy Wheels",
        "imagedata": "happywheels.jpg",
        "url": "https://happywheelslevels.netlify.app/",
        "width": 800,
        "windowname": "Happy Wheels",
        "zoom": 0.5
    },
    {
        "category": "Miscellaneous",
        "height": 600,
        "iconname": "Discord Roles",
        "imagedata": "discordaboutmeroles.png",
        "url": "https://leonhardtissen.github.io/DiscordAboutMeRoles/",
        "width": 550,
        "windowname": "Discord About Me Roles",
        "zoom": 1
    },
    {
        "category": "Miscellaneous",
        "height": 600,
        "iconname": "Theme Store",
        "imagedata": "workshop.svg",
        "url": "https://warze.org/wartos/workshop",
        "width": 820,
        "windowname": "Theme Store",
        "zoom": 1
    },
    {
        "category": "Miscellaneous",
        "height": 600,
        "iconname": "Calculator",
        "imagedata": "calculator.png",
        "url": "https://fun.warze.org/calculator",
        "width": 400,
        "windowname": "Calculator",
        "zoom": 1
    },
    {
        "category": "Games",
        "height": 600,
        "iconname": "Doomed.io",
        "imagedata": "doomed.jpg",
        "url": "https://doomed.io/",
        "width": 800,
        "windowname": "Doomed.io",
        "zoom": 1
    },
    {
        "category": "Games",
        "height": 600,
        "iconname": "Lights on!",
        "imagedata": "lightson.png",
        "url": "https://lightson.warze.org/",
        "width": 600,
        "windowname": "Lights on!",
        "zoom": 0.6
    },
    {
        "category": "Games",
        "height": 600,
        "iconname": "Flag Quiz",
        "imagedata": "flagquiz.png",
        "url": "https://flagquiz.warze.org/",
        "width": 800,
        "windowname": "Flag Quiz",
        "zoom": 0.8
    },
    {
        "category": "Games",
        "height": 600,
        "iconname": "React Idle",
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
        "imagedata": "trash.png",
        "url": "https://fun.warze.org/",
        "width": 600,
        "windowname": "Fun",
        "zoom": 1
    },
    {
        "category": "Games",
        "height": 666,
        "iconname": "Pushy",
        "imagedata": "pushy.png",
        "url": "https://pushy.warze.org/",
        "width": 950,
        "windowname": "Pushy",
        "zoom": 1
    },
    {
        "category": "Games",
        "height": 600,
        "iconname": "Snake",
        "imagedata": "snake.jpg",
        "url": "https://snake.warze.org/",
        "width": 800,
        "windowname": "Snake",
        "zoom": 1
    },
    {
        "category": "Social",
        "height": 600,
        "iconname": "Profiles",
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
        "imagedata": "edge.svg",
        "url": "https://bing.com/",
        "width": 800,
        "windowname": "Microsoft Edge",
        "zoom": 1
    },
    {
        "category": "Miscellaneous",
        "height": 700,
        "iconname": "Zip Editor",
        "imagedata": "winrar.png",
        "url": "https://zipeditor.warze.org/",
        "width": 800,
        "windowname": "Zip Editor",
        "zoom": 1
    },
    {
        "category": "Miscellaneous",
        "height": 700,
        "iconname": "Squishy Earth",
        "imagedata": "earth.png",
        "url": "https://squishyearth.warze.org",
        "width": 700,
        "windowname": "Squishy Earth",
        "zoom": 0.7
    },
    {
        "category": "Miscellaneous",
        "height": 700,
        "iconname": "Virtual Machine",
        "imagedata": "virtualbox.png",
        "url": "https://virtualbox.warze.org",
        "width": 700,
        "windowname": "Virtual Manager",
        "zoom": 1
    },
    {
        "category": "Social",
        "iconname": "Warze on YouTube",
        "imagedata": "youtube.svg",
        "url": "+https://youtube.com/warze",
    },
    {
        "category": "Miscellaneous",
        "iconname": "Discord",
        "imagedata": "discord.png",
        "url": "+https://discord.gg/jtcqgvkZY7",
    },
    {
        "category": "Social",
        "iconname": "Warze on GitHub",
        "imagedata": "github.png",
        "url": "+https://github.com/LeonhardTissen",
    },
    {
        "category": "Social",
        "iconname": "Warze on GitLab",
        "imagedata": "gitlab.svg",
        "url": "+https://gitlab.com/LeonhardTissen",
    },
    {
        "category": "Social",
        "iconname": "Warze on LinkedIn",
        "imagedata": "linkedin.svg",
        "url": "+https://www.linkedin.com/in/leonhard-tissen/",
    },
    {
        "category": "Social",
        "iconname": "Warze on X",
        "imagedata": "x.svg",
        "url": "+https://twitter.com/leonhard_tissen",
    },
]

