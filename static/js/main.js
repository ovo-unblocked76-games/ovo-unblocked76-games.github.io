const gamesData = [
    {
        title: "Slope Unblocked 76",
        image: "static/images/Slope-Unblocked-76.jpg",
        link: "https://slopeunblocked76.com/",
        alt: "Slope Unblocked 76 and experience the heart-racing adventure of rolling a ball through endless slopes filled with obstacles. Your goal is to keep the ball rolling as far as possible, offering a thrilling experience with every twist and turn!"
    },
    {
        title: "Mini Crossword",
        image: "static/images/minicrossword.jpg",
        link: "https://minicrossword.app/",
        alt: "Mini Crossword is a compact word puzzle game where you solve clues to fill the grid. Use arrow keys or the mouse to navigate, type letters with your keyboard, and press Enter or Tab to switch clues. Complete each puzzle quickly and correctly to win!"
    },
    {
        title: "Club Penguin",
        image: "static/images/club-penguin.jpg",
        link: "https://club-penguin.pro/",
        alt: "Club Penguin is a virtual world multiplayer game where players create penguin avatars, explore snowy landscapes, participate in mini-games, socialize with friends, and customize their igloos, using keyboard controls to navigate, earn coins, and complete quests. "
    },
    {
        title: "2048 Cupcakes",
        image: "static/images/2048-Cupcakes.jpg",
        link: "https://2048cupcakesgame.app/",
        alt: "2048 Cupcakes is a delightful puzzle game where you combine matching cupcakes by sliding tiles with arrow keys (desktop) or swipe gestures (mobile) to create the ultimate 2048 cupcake and achieve the highest score!"
    },
    {
        title: "Agar IO",
        image: "static/images/agar-io.jpg",
        link: "https://agariogame.app/",
        alt: "Agar IO Game is a massively multiplayer online action game where players control a cell, consuming smaller cells and agar while avoiding larger ones, using mouse movements to navigate and the space bar to split, with the goal of becoming the largest cell on the map!"
    },
    {
        title: "Block Blast",
        image: "static/images/block-blast.jpg",
        link: "https://blockblast.pro/",
        alt: "Block Blast is a fast-paced puzzle game where players match colored blocks to clear the board. Use mouse/arrow keys to move and spacebar to rotate. Clear blocks quickly to score as high as possible before time runs out!"
    },
    {
        title: "Minesweeper",
        image: "static/images/minesweeper.jpg",
        link: "https://minesweepergame.net/",
        alt: "Minesweeper is a classic single-player puzzle game where players uncover hidden tiles on a grid, avoiding mines while using number clues to determine safe spots, with left-click to uncover and right-click to flag, aiming to clear the grid without detonating any mines!"
    },
    {
        title: "Retro Bowl",
        image: "static/images/Retro-Bowl.jpg",
        link: "https://retro-bowl.cc/",
        alt: "Retro Bowl is a retro-style football game where players become a coach, making strategic plays, passing, and kicking to lead the team to victory using mouse and keyboard controls, with arrow keys for movement, space bar for passing, and other keys for kicking! "
    },
    {
        title: "Retro Ping Pong",
        image: "static/images/retro-ping-pong.jpg",
        link: "https://retropingpong.app/",
        alt: "Retro Ping Pong is a classic table tennis game where players use arrow keys or W and S keys to control paddles, aiming to score 7 points in solo or multiplayer matches with exciting gameplay twists!"
    },
    {
        title: "Battleship Online",
        image: "static/images/battleship-online.jpg",
        link: "https://battleshiponline.net/",
        alt: "Battleship is a strategic guessing game where two players place fleets on a 10×10 grid and take turns using mouse controls to locate and sink each other’s ships; the goal is to outsmart your opponent and destroy their fleet first!"
    },
    {
        title: "Flappy Bird 2",
        image: "static/images/flappy-bird-2.jpg",
        link: "https://flappybird2.app/",
        alt: "Flappy Bird 2 is an addictive arcade game where players tap the screen to help the bird flap through a rotating world of obstacles; your goal is to fly as far as possible without crashing, challenging your reflexes and timing in this exciting sequel!"
    },
    {
        title: "Tiny Fishing",
        image: "static/images/tiny-fishing.jpg",
        link: "https://tinyfishing.xyz/",
        alt: "Tiny Fishing is a fun and relaxing game where players cast lines and use mouse controls to hook fish, earning money for upgrades; your goal is to catch as many fish as possible, including rare ones, to upgrade gear and explore deeper waters for bigger catches!"
    },
    {
        title: "Fireboy and Watergirl Forest",
        image: "static/images/fireboy-and-watergirl-forest.jpg",
        link: "https://fireboyandwatergirlforest.com/",
        alt: "Fireboy and Watergirl Forest is the first installment in the popular Fireboy and Watergirl series, a co-op puzzle-platformer where players use arrow keys for Fireboy and WASD for Watergirl to navigate levels, gather gems, and reach the exit with teamwork."
    },
    {
        title: "Fire Boy and Water Girl 1",
        image: "static/images/fireboy-and-watergirl-1-forest-temple.jpg",
        link: "https://fireboyandwatergirl1.com/",
        alt: "Fire Boy and Water Girl 1 is a puzzle-platform game where players control two characters; use arrow keys for Fireboy and WASD for Watergirl to avoid hazards, collect diamonds, and reach exits, relying on teamwork to succeed."
    },
    {
        title: "Drive Mad Truck",
        image: "static/images/Drive-Mad.jpg",
        link: "https://drivemadtruck.com/",
        alt: "Drive Mad is an exciting car game where players navigate their vehicles through obstacle-filled tracks. Your goal is to reach the finish line safely and without damage. The controls are as follows: press W, D, or X to steer forward, and S, A, or Z to steer backward."
    },
    {
        title: "Eggy Car",
        image: "static/images/eggy-car.jpg",
        link: "https://eggy-car-unblocked.net/",
        alt: "Eggy Car, In this game, you control a vehicle carrying a fragile egg. Use A/D or the Left/Right arrow keys to steer, and your goal is to transport the egg as far as possible without breaking it—but navigating the steep slopes is no easy task."
    },
    {
        title: "Blob Beats",
        image: "static/images/blob-beats.jpg",
        link: "https://blobbeats.games/",
        alt: "Blob Beats is the perfect game for you! Use the mouse to control the character’s tone, offering a highly satisfying and entertaining experience that lets you create your own opera concertos in a delightfully humorous and unconventional way."
    },
    {
        title: "Dreadhead Parkour",
        image: "static/images/dreadhead-parkour.jpg",
        link: "https://dreadheadparkour.games/",
        alt: "Dreadhead Parkour isn’t just a game—it’s an electrifying adventure where you defy gravity and test human agility. Use WASD or ↑←↓→ to jump, move, and slide. Ready for heart-pounding stunts, gravity-defying jumps, and jaw-dropping flips? "
    },
    {
        title: "Ragdoll Hit",
        image: "static/images/ragdoll-hit.jpg",
        link: "https://ragdollhit.games/",
        alt: "Ragdoll Hit is here to light up your screen with thrilling action and captivating physics mechanics! Use the following controls to dominate the battlefield: [→] or [D]: Hold and attack, [↑] or [W]: Jump up, [↓] or [S]: Use the leg, [←] or [A]: Turn reverse, SPACEBAR: Grab and throw. Prepare for explosive battles where every punch, kick, and attack unleashes pure chaos while showcasing your unique fighting style! "
    },
    {
        title: "Ragdoll Archers",
        image: "static/images/ragdoll-archers.jpg",
        link: "https://ragdollarchers.games/",
        alt: "Ragdoll Archers is an exhilarating archery game perfect for shooting enthusiasts. Take control of a stickman archer with an infinite supply of bows and arrows: Left Mouse Button: Aim and shoot. Spacebar: Jump. Your mission is to eliminate waves of enemies, with your score climbing higher for every target you take down. Precision is key—make every shot count!"
    },
    {
        title: "Electron Dash",
        image: "static/images/electron-dash.jpg",
        link: "https://electrondash.games/",
        alt: "Electron Dash, Use the arrow keys on your keyboard or tap the screen to control your intergalactic space runner. Be wary of laser beams and gaps in the tunnel floor. How long can you last?"
    },
    {
        title: "Time Shooter",
        image: "static/images/time-shooter.jpg",
        link: "https://timeshooter.games/",
        alt: "Time Shooter is a first-person shooter where time stands still until you move. Plan your shots and movements carefully. Use WASD to control your character’s movement, Left-Click to shoot or pick up weapons, and Right-Click to throw them. "
    },
    {
        title: "Fire Red Rom",
        image: "static/images/fire-red-rom.jpg",
        link: "https://fireredrom.games/",
        alt: "Fire Red Rom, Developed by Game Freak and published by Nintendo, it marked the debut of the Pokémon series on the Game Boy Advance platform. In this game, you can use Z and X keys to scroll through dialogues and ↑←↓→ keys to navigate options. "
    },
    {
        title: "Funny Shooter",
        image: "static/images/funny-shooter.jpg",
        link: "https://funnyshooter.games/",
        alt: "Funny Shooter, Get ready to dive into the wild, adrenaline-charged world of Funny Shooter. Use WASD to control your character, Left-Click to shoot, and Right-Click to aim. "
    },
    {
        title: "Miniblox",
        image: "static/images/Miniblox.jpg",
        link: "https://miniblox.games/",
        alt: "Miniblox is an exciting online multiplayer voxel game packed with a variety of features. Enjoy competitive minigames, a vast selection of building blocks, challenging parkour levels, and so much more! The possibilities are endless in this creative and action-packed world."
    },
    {
        title: "Soccer Random",
        image: "static/images/soccer-random.jpg",
        link: "https://soccerrandom.games/",
        alt: "Soccer Random"
    },
    {
        title: "Ball Surfer 3D",
        image: "static/images/ball-surfer-3d.jpg",
        link: "https://ballsurfer3d.games/",
        alt: "Ball Surfer 3D"
    },
    {
        title: "Crazy Cars",
        image: "static/images/Crazy-Cars.jpg",
        link: "https://crazycars.games/",
        alt: "Crazy Cars"
    },
    {
        title: "Temple of Boom",
        image: "static/images/temple-of-boom.jpg",
        link: "https://temple-of-boom.com/",
        alt: "Temple of Boom"
    },
    {
        title: "Car King Arena",
        image: "static/images/Crazy-Car-Arena.jpg",
        link: "https://carkingarena.games/",
        alt: "Car King Arena"
    },
    {
        title: "Traffic Jam 3D",
        image: "static/images/Traffic-Jam-3D.jpg",
        link: "https://traffic-jam-3d.com/",
        alt: "Traffic Jam 3D"
    },
    {
        title: "Geometry Dash Wave",
        image: "static/images/Geometry-Dash-Wave.jpg",
        link: "https://geometrydashwave.games/",
        alt: "Geometry Dash Wave"
    },
    {
        title: "Cluster Rush",
        image: "static/images/Cluster-Rush.jpg",
        link: "https://clusterrush.games/",
        alt: "Cluster Rush"
    },
    {
        title: "Pokemon Emerald Seaglass",
        image: "static/images/pokemonemeraldseaglass.jpg",
        link: "https://pokemonemeraldseaglass.games/",
        alt: "Pokemon Emerald Seaglass"
    },
    {
        title: "Crazy Cars",
        image: "static/images/Crazy-Cars.jpg",
        link: "https://shadowbonnie.com/",
        alt: "Crazy Cars"
    },
    {
        title: "Space Waves",
        image: "static/images/Space-Waves.jpg",
        link: "https://spacewaves.games/",
        alt: "Space Waves"
    },
    {
        title: "Pokemon Emerald Rogue",
        image: "static/images/pokemonemeraldrogue.jpg",
        link: "https://pokemonemeraldrogue.games/",
        alt: "Pokemon Emerald Rogue"
    },
    {
        title: "Rocket Soccer Derby",
        image: "static/images/Rocket-Soccer-Derby.jpg",
        link: "https://rocketsoccerderby.games/",
        alt: "Rocket Soccer Derby"
    },
    {
        title: "Curve Ball 3D",
        image: "static/images/curveball3d.jpg",
        link: "https://curveball3d.games/",
        alt: "Curve Ball 3D"
    },
    {
        title: "Multiplication Duck",
        image: "static/images/Multiplication-Duck.jpg",
        link: "https://multiplicationduck.games/",
        alt: "Multiplication Duck"
    },
    {
        title: "Big Tall Small",
        image: "static/images/Big-Tall-Small.jpg",
        link: "https://bigtallsmall.games/",
        alt: "Big Tall Small is a puzzle platformer where players control three unique characters of different sizes. Use arrow keys or WASD to move, Space/Enter to switch, and R to reset. Work together to solve puzzles and reach the shared exit in each level."
    },
    {
        title: "Deadshot io",
        image: "static/images/deadshotio.jpg",
        link: "https://deadshotio.games/",
        alt: "Deadshot.io is a fast-paced online shooter where players battle using WASD to move, the mouse to aim and shoot, and R to reload. Outsmart and outshoot opponents to climb the leaderboard in fast-paced multiplayer matches."
    },
    {
        title: "Eparkour",
        image: "static/images/eparkour-io.jpg",
        link: "https://eparkour.games/",
        alt: "eParkour is an action-packed platformer where players navigate challenging parkour courses. Use WASD or arrow keys to move, Spacebar to jump, and Shift to sprint. Complete each level quickly while mastering moves and collecting stars."
    },
    {
        title: "Duck Duck Clicker",
        image: "static/images/duckduckclicker.jpg",
        link: "https://duckduckclicker.games/",
        alt: "Duck Duck Clicker game is a fun clicker where players tap the duck to earn Ducket$, use the mouse to click, unlock upgrades for auto-earnings, and customize ducks with outfits. Aim to build a duck paradise and collect bonuses along the way."
    },
    {
        title: "Spinel Steven Universe",
        image: "static/images/Spinel-Steven-Universe.jpg",
        link: "https://spinelstevenuniverse.com/",
        alt: "Spinel Steven Universe, Use your finger or mouse to click and join in the Meat Beat Mania game to start playing a groovy dancing game! Can you help Garnet memorize all the moves and perform an awesome routine?"
    },
    {
        title: "Color Tunnel",
        image: "static/images/color-tunnel.jpg",
        link: "https://colortunnel.games/",
        alt: "Color Tunnel is an exciting arcade game where your goal is to score the highest while navigating a tunnel full of moving obstacles. Use A/← to steer left and D/→ to steer right. Stay focused and dodge the obstacles!"
    },
    {
        title: "Super Liquid Soccer",
        image: "static/images/Super-Liquid-Soccer.jpg",
        link: "https://superliquidsoccer.games/",
        alt: "Super Liquid Soccer brings an exciting football experience. Use WASD to control, P to accelerate, M to pass, L to curve the bal, and J to shoot. Move, pass, and shoot with precision! "
    },
    {
        title: "Conquer the City",
        image: "static/images/Conquer-the-City.jpg",
        link: "https://conquerthecity.games/",
        alt: "Conquer The City is a simple and fun puzzle game where you conquer cities of other colors while defending your own. Use your mouse or finger to link cities, and when all cities turn blue, you win! "
    },
    {
        title: "Blitz Slices",
        image: "static/images/blitz-slicer.jpg",
        link: "https://blitzslices.com/",
        alt: "Blitz Slices is a simple fruit-cutting game. Use your finger or mouse to control the knife. In the game, chop as many fruits or vegetables as possible while avoiding various obstacles."
    },
    {
        title: "Zombie Hunter Survival",
        image: "static/images/Zombie-Hunter-Survival.jpg",
        link: "https://zombiehuntersurvival.com/",
        alt: "Zombie Hunter Survival is an action-packed survival game where you fight waves of zombies using various weapons and tactics; control with WASD or arrow keys, aim with the mouse, and shoot with left click—survive as long as possible and protect your base!"
    },
    {
        title: "Sausage Flip",
        image: "static/images/Sausage-Flip.jpg",
        link: "https://sausageflip.games/",
        alt: "Sausage Flip is a whimsical physics-based game where you launch a lively sausage through various challenges by dragging your mouse to aim and releasing to flip, with the goal of navigating to the end of each level while avoiding obstacles and collecting rewards."
    },
    {
        title: "Rooftop Snipers 2",
        image: "static/images/rooftop-snipers-2.jpg",
        link: "https://rooftopsnipers2.com/",
        alt: "Rooftop Snipers 2 is an intense sniper game where you can play solo or in two-player mode. Player 1 jumps with W and shoots with E, while Player 2 jumps with I and shoots with O. Knock your opponent off the rooftop to win each round!"
    },
    {
        title: "Jump Jousts 2",
        image: "static/images/jump-jousts-2.jpg",
        link: "https://jumpjousts2.com/",
        alt: "Jump Jousts 2 is an exciting multiplayer battle game where players jump, attack, and use special moves to knock each other off platforms. Use AD to move, Spacebar to jump, Q to attack, and QS for your special move to win!"
    },
    {
        title: "Rooftop Snipers",
        image: "static/images/rooftop-snipers.jpg",
        link: "https://rooftopsnipers.games/",
        alt: "Rooftop Snipers is a chaotic two-button local multiplayer game.Use W to jump and E to shoot. Challenge your friends side by side or play against the computer. Shoot your opponent off the map to win."
    },
    {
        title: "Dreadhead Parkour",
        image: "static/images/dreadhead-parkour.jpg",
        link: "https://dreadhead-parkour.com/",
        alt: "Dreadhead Parkour isn’t just a game—it’s an electrifying adventure where you defy gravity and test human agility. Use WASD or ↑←↓→ to jump, move, and slide. Ready for heart-pounding stunts, gravity-defying jumps, and jaw-dropping flips?"
    },
    {
        title: "Blumgi Slime",
        image: "static/images/blumgi-slime.jpg",
        link: "https://blumgi-slime.com/",
        alt: "Blumgi Slime is a fun arcade game where you control a bouncy slime through colorful worlds. Hold the left mouse button to charge and release to jump, reaching the finish line. In 2-player mode, use ‘A’ and ‘M’. Perfect your timing to beat each level’s challenges."
    },
    {
        title: "Shady Bears",
        image: "static/images/shady-bears.jpg",
        link: "https://shady-bears.com/",
        alt: "Shady Bears takes players on a delightful platform adventure where you play as a bear collecting acorns. One player uses the ←↑→ arrow keys, while another uses AWD to move and jump. Your shadow mirrors your actions, chasing you through each level."
    },
    {
        title: "Time Shooter 2",
        image: "static/images/time-shooter2.jpg",
        link: "https://time-shooter2.com/",
        alt: "Time Shooter 2"
    },
    {
        title: "Time Shooter 3",
        image: "static/images/time-shooter-3.jpg",
        link: "https://time-shooter3.com/",
        alt: "Time Shooter 3"
    },
    {
        title: "Rooftop Snipers",
        image: "static/images/rooftop-snipers.jpg",
        link: "https://rooftop-snipers.com/",
        alt: "Rooftop Snipers"
    },
    {
        title: "Stickde Fenders",
        image: "static/images/stickde-fenders.jpg",
        link: "https://stickdefenders.games/",
        alt: "Stickde Fenders"
    },
    {
        title: "Tube Jumpers",
        image: "static/images/tube-jumpers.jpg",
        link: "https://tubejumpers.games/",
        alt: "Tube Jumpers"
    },
    {
        title: "Escape Road io",
        image: "static/images/escape-road.jpg",
        link: "https://escaperoadio.com/",
        alt: "Escape Road io"
    },
    {
        title: "Tower of Destiny",
        image: "static/images/tower-of-destiny.jpg",
        link: "https://towerofdestiny.games/",
        alt: "Tower of Destiny"
    },
    {
        title: "Mad Driving io",
        image: "static/images/Drive-Mad.jpg",
        link: "https://maddrivingio.com/",
        alt: "Mad Driving io"
    },
    {
        title: "Two Ball 3D",
        image: "static/images/two-ball-3d.jpg",
        link: "https://twoball3d.games/",
        alt: "Two Ball 3D"
    },
    {
        title: "Stickman Climb",
        image: "static/images/stickman-climb.jpg",
        link: "https://stickmanclimb.com/",
        alt: "Stickman Climb"
    },
    {
        title: "Burrito Craft",
        image: "static/images/burrito-craft.jpg",
        link: "https://burritocraft.games/",
        alt: "Burrito Craft"
    },
    {
        title: "Sand Tetris",
        image: "static/images/Sand-Tetris.jpg",
        link: "https://sandtetris.games/",
        alt: "Sand Tetris"
    },
    {
        title: "Sand Strike",
        image: "static/images/sandstrike.jpg",
        link: "https://sandstrike.games/",
        alt: "Sand Strike"
    },
    {
        title: "Planet Clicker",
        image: "static/images/planet-clicker.jpg",
        link: "https://planetclicker.games/",
        alt: "Planet Clicker"
    },
    {
        title: "Planet Clicker 2",
        image: "static/images/planet-clicker-2.jpg",
        link: "https://planetclicker2game.com/",
        alt: "Planet Clicker 2"
    },
    {
        title: "The Planet Clicker",
        image: "static/images/planet-clicker.jpg",
        link: "https://theplanetclicker.com/",
        alt: "The Planet Clicker"
    },
    {
        title: "Sprunki Game 3",
        image: "static/images/sprunki-phase-3.jpg",
        link: "https://sprunkigame3.com/",
        alt: "Sprunki Game 3"
    },
    {
        title: "Oren Sprunki",
        image: "static/images/oren-sprunki.jpg",
        link: "https://orensprunki.com/",
        alt: "Oren Sprunki"
    },
    {
        title: "Simon Sprunki",
        image: "static/images/simon-sprunki.jpg",
        link: "https://simonsprunki.com/",
        alt: "Simon Sprunki"
    },
    {
        title: "Sprunki Remake",
        image: "static/images/Sprunki-Retake-1.jpg",
        link: "https://sprunkiremake.com/",
        alt: "Sprunki Remake"
    },
    {
        title: "Sprunki 4",
        image: "static/images/sprunki-4.jpg",
        link: "https://sprunki4.com/",
        alt: "Sprunki 4"
    },
    {
        title: "Sprunki 5",
        image: "static/images/sprunki-5.jpg",
        link: "https://sprunki5.com/",
        alt: "Sprunki 5"
    },
    {
        title: "Sprunki 6",
        image: "static/images/sprunkir-6.jpg",
        link: "https://sprunki6.com/",
        alt: "Sprunki 6"
    },
    {
        title: "Sprunki 10",
        image: "static/images/sprunki-10.jpg",
        link: "https://sprunki10.com/",
        alt: "Sprunki 10"
    },
    {
        title: "Sprunki 34",
        image: "static/images/sprunkir-34.jpg",
        link: "https://sprunkir34.com/",
        alt: "Sprunki 34"
    },
    {
        title: "Sprunki Phase 100",
        image: "static/images/Sprunki Phase 100.jpg",
        link: "https://sprunkiphase100.com/",
        alt: "Sprunki Phase 100"
    },
    {
        title: "Sprunki Phase 2",
        image: "static/images/sprunki-phase-2.jpg",
        link: "https://sprunkiphase2.com/",
        alt: "Sprunki Phase 2"
    },
    {
        title: "Sprunki Phase 8",
        image: "static/images/Sprunki-Phase-8.jpg",
        link: "https://sprunkiphase8.com/",
        alt: "Sprunki Phase 8"
    },
    {
        title: "Papas Freezeria",
        image: "static/images/papas-freezeria.jpg",
        link: "https://papasfreezeria.app/",
        alt: "Papas Freezeria"
    },
    {
        title: "Papas Taco Mia",
        image: "static/images/Papas-Taco-Mia.jpg",
        link: "https://papastacomia.com/",
        alt: "Papas Taco Mia"
    },
    {
        title: "Papas Pizzeria",
        image: "static/images/papas-pizzeria.jpg",
        link: "https://papaspizzeria.app/",
        alt: "Papas Pizzeria"
    },
    {
        title: "Papas Cupcakeria",
        image: "static/images/Papas-Cupcakeria.jpg",
        link: "https://papas-cupcakeria.com/",
        alt: "Papas Cupcakeria"
    },
    {
        title: "Papas Pizzeria Games",
        image: "static/images/papas-pizzeria.jpg",
        link: "https://papaspizzeriagames.com/",
        alt: "Papas Pizzeria Games"
    },
    {
        title: "Papas Bakeria",
        image: "static/images/papas-bakeria.jpg",
        link: "https://papasbakeria.app/",
        alt: "Papas Bakeria"
    },
    {
        title: "Papas Scooperia",
        image: "static/images/papas-scooperia.jpg",
        link: "https://papasscooperia.app/",
        alt: "Papas Scooperia"
    },
    {
        title: "Papas Sushiria",
        image: "static/images/Papas-Sushiria.jpg",
        link: "https://papassushiria.app/",
        alt: "Papas Sushiria"
    },
    {
        title: "Papas Wingeria",
        image: "static/images/papas-wingeria.jpg",
        link: "https://papaswingeria.app/",
        alt: "Papas Wingeria"
    },
    {
        title: "Papas Burgeria",
        image: "static/images/papas-burgeria.jpg",
        link: "https://papasburgeria.app/",
        alt: "Papas Burgeria"
    },
    {
        title: "Drift Boss",
        image: "static/images/Drift-Boss.jpg",
        link: "https://driftboss.games/",
        alt: "Drift Boss"
    },
    {
        title: "Sprunki Music",
        image: "static/images/Sprunki-Music-Game.jpg",
        link: "https://sprunkimusic.games/",
        alt: "Sprunki Music"
    },
    {
        title: "Stickman Hook",
        image: "static/images/StickmanHook.jpg",
        link: "https://stickmanhook.games/",
        alt: "Stickman Hook"
    },
    {
        title: "1v1 LoL",
        image: "static/images/1V1.jpg",
        link: "https://1v1lol.co/",
        alt: "1v1 LoL"
    },
    {
        title: "Pizza Edition",
        image: "static/images/Pizza Edition.jpg",
        link: "https://pizzaedition.games/",
        alt: "Pizza Edition"
    },
    {
        title: "Monkey Mart",
        image: "static/images/monkey-mart.jpg",
        link: "https://monkeymartjogo.com/",
        alt: "Monkey Mart"
    },
    {
        title: "Bullet Rush",
        image: "static/images/bulletrush.jpg",
        link: "https://bulletrush.games/",
        alt: "Bullet Rush"
    },
    {
        title: "Drive Mad",
        image: "static/images/Drive-Mad.jpg",
        link: "https://drivemad.games/",
        alt: "Drive Mad"
    },
    {
        title: "Basketball Legends",
        image: "static/images/basketball legends.jpg",
        link: "https://basketballlegends-unblocked.com/",
        alt: "Basketball Legends"
    },
    {
        title: "Eggy Car Unblocked",
        image: "static/images/eggy-car.jpg",
        link: "https://eggycarunblocked.net/",
        alt: "Eggy Car Unblocked"
    },
    {
        title: "Riseup Balloon",
        image: "static/images/Rise-Up-Balloon.jpg",
        link: "https://riseupballoongame.com/",
        alt: "Riseup Balloon"
    }
];

document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('.floating-header');
    const toggleContainer = document.querySelector('.toggle-container');
    const toggleText = document.querySelector('.toggle-text');
    const arrow = document.querySelector('.arrow');
    let isVisible = true;

    // 初始状态隐藏文本
    toggleText.style.opacity = '0';
    toggleText.style.display = 'none';
    toggleContainer.style.minWidth = '40px';

    toggleContainer.onclick = function() {
        isVisible = !isVisible;
        arrow.classList.toggle('collapsed');
        header.classList.toggle('hidden');

        if (!isVisible) {
            // 隐藏状态：显示文本
            toggleText.style.display = 'inline';
            requestAnimationFrame(() => {
                toggleContainer.style.minWidth = '160px';
                toggleText.style.opacity = '1';
            });
        } else {
            // 显示状态：隐藏文本
            toggleText.style.opacity = '0';
            setTimeout(() => {
                toggleText.style.display = 'none';
                toggleContainer.style.minWidth = '40px';
            }, 150);
        }
    };
});

function toggleAccordion(header) {
    const content = header.nextElementSibling;
    const isCollapsed = content.classList.contains('collapsed');

    // 切换箭头状态
    header.classList.toggle('active');

    // 切换内容显示状态
    if (isCollapsed) {
        content.classList.remove('collapsed');
    } else {
        content.classList.add('collapsed');
    }
}

// 页面加载完成后初始化所有手风琴面板为展开状态
document.addEventListener('DOMContentLoaded', function() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.classList.remove('active');
        header.nextElementSibling.classList.remove('collapsed');
    });
});

function generateGameHTML(game) {
    return `
        <div class="game-area-list">
            <div class="game-thumb">
                <a href="${game.link}">
                    <img src="${game.image}" alt="${game.title}">
                </a>
            </div>
            <div class="game-content">
                <a href="${game.link}">
                    <h4 class="game-title">${game.title}</h4>
                </a>
            </div>
        </div>
    `;
}

// Fisher-Yates 洗牌算法（随机排序数组）
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));  // 生成随机索引
        [array[i], array[j]] = [array[j], array[i]];  // 交换元素
    }
    return array;
}

// 游戏随机排序
document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('games-container');

    const shuffledGames = shuffleArray([...gamesData]);

    const gamesHTML = shuffledGames.map(generateGameHTML).join('');
    container.insertAdjacentHTML('beforeend', gamesHTML);
});

// // 默认排序
// document.addEventListener('DOMContentLoaded', function() {
//     const container = document.getElementById('games-container');
//     const gamesHTML = gamesData.map(generateGameHTML).join('');
//     container.insertAdjacentHTML('beforeend', gamesHTML);
// });

// 按照游戏名称进行排序
// document.addEventListener('DOMContentLoaded', function() {
//     const container = document.getElementById('games-container');
//
//     const sortedGames = gamesData.sort((a, b) => {
//         if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
//         if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
//         return 0;
//     });
//
//     const gamesHTML = sortedGames.map(generateGameHTML).join('');
//     container.insertAdjacentHTML('beforeend', gamesHTML);
// });

// 指定要排到前面的游戏标题
// document.addEventListener('DOMContentLoaded', function() {
//     const container = document.getElementById('games-container');
//
//     const gamesToMoveFront = [
//         "Rocket Soccer Derby",
//         "Multiplication Duck",
//         "Pokemon Emerald Rogue"
//     ];
//
//     const frontGames = gamesData.filter(game => gamesToMoveFront.includes(game.title));
//     const otherGames = gamesData.filter(game => !gamesToMoveFront.includes(game.title));
//     const sortedGames = [...frontGames, ...otherGames];
//
//     const gamesHTML = sortedGames.map(generateGameHTML).join('');
//     container.insertAdjacentHTML('beforeend', gamesHTML);
// });

// 按照标题中是否包含 "Sprunki" 进行排序
// document.addEventListener('DOMContentLoaded', function() {
//     const container = document.getElementById('games-container');
//
//     const sortedGames = gamesData.sort((a, b) => {
//         const aContainsSprunki = a.title.toLowerCase().includes("sprunki");
//         const bContainsSprunki = b.title.toLowerCase().includes("sprunki");
//
//         if (aContainsSprunki && !bContainsSprunki) return -1;
//         if (!aContainsSprunki && bContainsSprunki) return 1;
//
//         return 0;
//     });
//
//     const gamesHTML = sortedGames.map(generateGameHTML).join('');
//     container.insertAdjacentHTML('beforeend', gamesHTML);
// });