const readline = require('readline');

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
  });

const profile = {};

  // rl.question('What do you think about Node.js? ', (answer) => {
  //   profile.name = answer;
  //   rl.close();
  // });


  rl.question('What\'s your name ? Nicknames are also acceptable ', (nam) => {
    profile.name = nam;
    rl.question('What\'s an activity you like doing? ', (hobby) => {
      profile.activity = hobby
      rl.question('What do you listen to while doing that? ', (song) => {
        profile.music = song;
        rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (meal) => {
          profile.food = meal;
          rl.question('What\'s your favourite thing to eat for that meal? ', (answer) => {
            rl.question('Which sport is your absolute favourite? ', (answer) => {
              rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer) => {
                console.log(`Your generated profile has ${profile.length}`);
                rl.close()
              }); //7
            }); //6
          }); //5
        }); //4
      }); //3
    }); //2
  }); //1
  
// profile.property = 1;
console.log(profile);