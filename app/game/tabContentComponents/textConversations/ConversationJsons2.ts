import { ConversationJson } from "./ConversationJsons";

export const matt = "looprevil99";
export const daisy = "justagreengirl";
export const nikki = "meremere";
export const david = "sam_slow_down";
export const martin = "playingWithMyHeart";

const Ritual: ConversationJson = {
  date: "1/13/26 9:25",
  messages: [
    {
      sender: matt,
      content: "Good morning team! Today's finally the day",
    },
    {
      sender: matt,
      content: "Hope everyone slept well. I tucked in early",
    },
    {
      sender: matt,
      content: "This is for later tonight:",
    },
    {
      sender: matt,
      content: "",
      attachment: {
        title: "instructions.pdf",
        bytes: 55,
      },
    },
    {
      sender: nikki,
      content: "I'm making pancakes and eggs in the kitchen for those who are awake.",
    },
    {
      sender: david,
      content: "I'm awake",
    },
    {
      sender: david,
      content: "bruh why did you password protect the pdf??",
    },
    {
      sender: matt,
      content:
        "You have until tonight to figure out the password! First one gets a sneak peak at tonight!",
    },
    {
      sender: david,
      content: "bruhhhhh",
    },
    {
      sender: daisy,
      content: "ooh sounds fun! Like a puzzle!",
    },
    {
      sender: nikki,
      content: "Pretty creative. It'd better be challenging at least.",
    },
    {
      sender: david,
      content: "nah you two can figure this out. Imma take my boy to the gym when he wakes up.",
    },
  ],
};

const Stars: ConversationJson = {
  date: "1/12/26 23:42",
  messages: [
    {
      sender: daisy,
      content: "where is everyone? Did everyone go to sleep already?",
    },
    {
      sender: nikki,
      content: "I'm just reading in my room.",
    },
    {
      sender: david,
      content: "We're outside!",
    },
    {
      sender: daisy,
      content: "huh? doing what",
    },
    {
      sender: martin,
      content: "Guys, look at what the stars look like tonight",
    },
    {
      sender: martin,
      content: "",
      attachment: {
        title: "photo.jpg",
        bytes: 21,
      },
    },
    {
      sender: david,
      content: "Looking at that ^",
    },
    {
      sender: daisy,
      content: "ooh is that through your telescope?",
    },
    {
      sender: david,
      content: "Yep. We set it up on the hill around the back.",
    },
    {
      sender: david,
      content: "It's heavy! Lucky I didn't do arm day this week!",
    },
    {
      sender: nikki,
      content: "So what's that constellation on the left?",
    },
    {
      sender: martin,
      content:
        "That square? That's the umbral cage. Symbolizes endless toils and the feeling of being trapped.",
    },
    {
      sender: daisy,
      content: "well that's dark",
    },
    {
      sender: nikki,
      content: "And on the right?",
    },
    {
      sender: martin,
      content: "The Eye of Elo. Represents knowledge, understanding, omniscience.",
    },
    {
      sender: nikki,
      content: "I like that one.",
    },
    {
      sender: david,
      content: "Where's the arm of the nine? The one that represents strength?",
    },
    {
      sender: daisy,
      content: "arent you right next to him?",
    },
    {
      sender: martin,
      content:
        "Strength but also community, support, friendship. I forgot when that one is supposed to be visible.",
    },
  ],
};

const NotSerious: ConversationJson = {
  date: "1/07/26 20:09",
  messages: [{ sender: matt, content: "Okay" }],
};

const AfterNYE: ConversationJson = {
  date: "1/01/26 03:02",
  messages: [
    {
      sender: matt,
      content: "Everyone get home alright?",
    },
    {
      sender: daisy,
      content: "yep yep",
    },
    {
      sender: nikki,
      content: "Safe and sound",
    },
    {
      sender: david,
      content: "Just dropped off mr stargazer",
    },
    {
      sender: david,
      content: "Saw him get an earful from his mom before I drove off, poor guy",
    },
    {
      sender: nikki,
      content: "His mom probably hates us and think we're doing drugs or something",
    },
    {
      sender: nikki,
      content: "My dad's a bit like that too",
    },
    {
      sender: david,
      content: "LOL I wish I had money for drugs",
    },
    {
      sender: matt,
      content: "Alright I'm gonna catch some zeds, gn everyone!",
    },
    {
      sender: daisy,
      content: "me too, nighty night!",
    },
    {
      sender: david,
      content: "LAME",
    },
    {
      sender: david,
      content: "Stop being responsible adults smh",
    },
    {
      sender: david,
      content: "Just gonna be me alone here huh",
    },
    {
      sender: nikki,
      content: "I'm around",
    },
    {
      sender: david,
      content: "Really? But ur like the most responsible one",
    },
    {
      sender: nikki,
      content: "I'm used to pulling all nighters",
    },
    {
      sender: david,
      content:
        "Wowwwww so you actually study huh. I thought you were one of those naturally smart never study types",
    },
    {
      sender: nikki,
      content: "You're gonna call me a nerd, but studying is actually fun for me",
    },
    {
      sender: david,
      content: "Thats disgusting",
    },
  ],
};

export const GroupChatConversations = [Ritual, Stars, AfterNYE];
