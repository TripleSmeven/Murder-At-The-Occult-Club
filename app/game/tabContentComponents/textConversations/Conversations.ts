export interface ConversationJson {
  date: string;
  messages: Array<{
    sender: string;
    content: string;
  }>;
  linkedAnswerKey?: string;
}

const Police: ConversationJson = {
  date: "12/18/16 15:06",
  messages: [
    {
      sender: "Troy Samson",
      content: "We're seriously just gonna drop the investigation?",
    },
    {
      sender: "Troy Samson",
      content: "Just like that?",
    },
    {
      sender: "Sebastian Waller",
      content: "Sheriff said so. You know the drill. You can take it up with him if you want",
    },
    {
      sender: "Troy Samson",
      content: "I just can't believe we're doing this again",
    },
    {
      sender: "Troy Samson",
      content: "Is it because of the occult ties we found?",
    },
    {
      sender: "Sebastian Waller",
      content: "Who knows",
    },
    {
      sender: "Sebastian Waller",
      content: "I just shut up and take the bag",
    },
    {
      sender: "Troy Samson",
      content: "My daughter goes to that school.",
    },
    {
      sender: "Troy Samson",
      content:
        "I have to go home and pretend that the president of her school AND the sheriff of our county's PD aren't corrupt pieces of shit",
    },
    {
      sender: "Troy Samson",
      content: "And that a kid from her school didn't just get poisoned by another kid.",
    },
    {
      sender: "Sebastian Waller",
      content: "Technically, the kid died from asphyxiation",
    },
    {
      sender: "Troy Samson",
      content: "Whatever.",
    },
    {
      sender: "Sebastian Waller",
      content:
        "Look at it this way. If you're president of some shady dark magic club, and you made some weird drink out of stuff you bought online then drank it, it's kind of on you, don't you think?",
    },
    {
      sender: "Troy Samson",
      content: "But still. He was just a kid.",
    },
    {
      sender: "Sebastian Waller",
      content:
        "Listen, I get you have a guilty conscience or whatever. Just take the gift that we're all about to get in the mail and buy your daughter something nice",
    },
  ],
};

const Aftermath1: ConversationJson = {
  date: "12/13/16 20:31",
  messages: [
    {
      sender: "Unknown A",
      content: "Noone has texted the group chat and there are police on campus now.",
    },
    {
      sender: "Unknown A",
      content: "He's dead, isn't he?",
    },
    {
      sender: "Unknown B",
      content: "Don't text me about ZC.",
    },
    {
      sender: "Unknown A",
      content: "Why, because you killed him?",
    },
    {
      sender: "Unknown B",
      content: "No, because we are all accomplices.",
    },
    {
      sender: "Unknown B",
      content: "All of us, including you.",
    },
    {
      sender: "Unknown A",
      content: "What? I'm not the one that killed him!",
    },
    {
      sender: "Unknown B",
      content: "No, but you didn't call for help either. None of us did.",
    },
    {
      sender: "Unknown B",
      content: "Instead, we just ran for our lives when his eyes started doing that.",
    },
    {
      sender: "Unknown A",
      content: "I figured at least someone else there would have.",
    },
    {
      sender: "Unknown B",
      content: "Can't you see? They're all delusional!",
    },
    {
      sender: "Unknown B",
      content:
        "They all thought he was glimpsing. They wouldn't want any interruptions. I bet they kept watching until he died.",
    },
    {
      sender: "Unknown A",
      content: "What have we done...",
    },
    {
      sender: "Unknown B",
      content: "I don't even understand what happened. Did someone poison him?",
    },
    {
      sender: "Unknown A",
      content: "If it was poison, we would have all died.",
    },
    {
      sender: "Unknown B",
      content: "You're right",
    },
    {
      sender: "Unknown B",
      content: "Anyway, DO NOT say a word to the cops!!",
    },
    {
      sender: "Unknown B",
      content:
        "And idk if you're still talking with MM. But you CANNOT say ANYTHING to her either!!",
    },
  ],
  linkedAnswerKey: "Text Message 2",
};

const Aftermath2: ConversationJson = {
  date: "12/13/16 21:20",
  messages: [
    {
      sender: "Unknown A",
      content: "You didn't call the cops, did you?",
    },
    {
      sender: "Unknown B",
      content: "No, of course not!",
    },
    {
      sender: "Unknown B",
      content: "That means... he's dead and someone found his body.",
    },
    {
      sender: "Unknown B",
      content: "Did the Oblivion really kill him?",
    },
    {
      sender: "Unknown A",
      content: "It must be. That means the ritual actually worked.",
    },
    {
      sender: "Unknown B",
      content:
        "But why only him? Maybe not the rest, but at least you would have glimpsed too, right?",
    },
    {
      sender: "Unknown A",
      content: "Not even I can match Zach's level. He's a prodigy.",
    },
    {
      sender: "Unknown A",
      content:
        "Regardless, we need to contact the other clubs and tell them about Zach. Maybe there's someone knows more about the Oblivion who can help.",
    },
    {
      sender: "Unknown B",
      content: "I think I might know someone. Hold on.",
    },
    {
      sender: "Unknown B",
      content:
        "...And I guess this means you're the president, now? According to the rules? You're the oldest.",
    },
    {
      sender: "Unknown A",
      content: "We'll deal with that later.",
    },
  ],
};

const Tea: ConversationJson = {
  date: "12/10/16 11:01",
  messages: [
    {
      sender: "Evelyn Samson",
      content: "Thanks for reaching out. I'm glad at the very least it won't all go to waste",
    },
    {
      sender: "Unknown A",
      content: "of course! i'm really sorry about what happened 😢😢",
    },
    {
      sender: "Evelyn Samson",
      content: "Thanks, I appreciate that. Now, which ones did you want?",
    },
    {
      sender: "Evelyn Samson",
      content: "The only ones we have left are Yerba mate, chamomile, and youthberry",
    },
    {
      sender: "Unknown A",
      content: "i'll take the mate and youthberry 😁😁",
    },
    {
      sender: "Evelyn Samson",
      content:
        "For sure! I'll leave it with Professor Katz in the Office of Club Affairs. Just pick it up whenever you're free.",
    },
    {
      sender: "Unknown A",
      content: "tyyyy!🙌🙌",
    },
  ],
};

const PromiseMe: ConversationJson = {
  date: "11/30/16 18:31",
  messages: [
    {
      sender: "Heather Douglas",
      content: "Does the math even work out?",
    },
    {
      sender: "Heather Douglas",
      content: "3 years ago, he would have been still in college, not in highschool.",
    },
    {
      sender: "Unknown A",
      content:
        "Yeah, but rumor has it that it was actually a college student who was president of the club.",
    },
    {
      sender: "Heather Douglas",
      content: "Okay, so it's possible I guess.",
    },
    {
      sender: "Heather Douglas",
      content:
        "Let's say you do ask around and find out he went to that same highschool. What are you gonna do then?",
    },
    {
      sender: "Unknown A",
      content: "I haven't thought that far yet.",
    },
    {
      sender: "Heather Douglas",
      content: "Just promise me you won't do anything stupid, alright?",
    },
    {
      sender: "Unknown A",
      content: "Fine",
    },
    {
      sender: "Unknown A",
      content: "Also, if BB contacts you, IGNORE HIM!!",
    },
  ],
};

const Mom: ConversationJson = {
  date: "11/30/16 09:02",
  messages: [
    {
      sender: "Carlos Sanchez",
      content: "How are you doing, ma?",
    },
    {
      sender: "Maria Sanchez",
      content: "I'm alright mijo. How's school?",
    },
    {
      sender: "Carlos Sanchez",
      content: "Good. I've just been studying a lot and trying to make friends.",
    },
    {
      sender: "Maria Sanchez",
      content: "That's good.",
    },
    {
      sender: "Carlos Sanchez",
      content:
        "Ma, I was thinking I can come visit you this weekend. I'll bring your favorite flowers and my tablet. It must get boring sitting in bed all day.",
    },
    {
      sender: "Maria Sanchez",
      content: "You're so sweet mijo, but I'm too far away. A plane ticket is too much.",
    },
    {
      sender: "Maria Sanchez",
      content:
        "I want you to focus on school. Your uncle will come visit this Friday, so don't worry about me. Let me know how your exam goes tomorrow. Te amo.",
    },
  ],
};

const Welcome: ConversationJson = {
  date: "11/29/16 4:44",
  messages: [
    {
      sender: "Unknown A",
      content: "hi gurl! welcome to the club 😊😊😊",
    },
    {
      sender: "Unknown B",
      content: "Hi! Thanks so much!",
    },
    {
      sender: "Unknown A",
      content: "im so excited! finally another girl!",
    },
    {
      sender: "Unknown A",
      content: "i just wanted to let you know you can talk to me anytime about the club!",
    },
    {
      sender: "Unknown A",
      content: "im friendlier than the boys anyways 💅",
    },
    {
      sender: "Unknown B",
      content: "Haha, of course if I have any questions I'll let you know!",
    },
    {
      sender: "Unknown A",
      content: "yep 😁😁😁",
    },
    {
      sender: "Unknown A",
      content: "so what do you think? a frog 🐸 or a bat 🦇?",
    },
    {
      sender: "Unknown B",
      content: "I'm sorry?",
    },
    {
      sender: "Unknown A",
      content: "what kind of pet should I make my familiar?",
    },
    {
      sender: "Unknown A",
      content: "i would do cat (or gerbil) but others have that covered already",
    },
    {
      sender: "Unknown A",
      content: "so thoughts???",
    },
    {
      sender: "Unknown B",
      content: "Uhh...",
    },
    {
      sender: "Unknown B",
      content: "Maybe a frog?",
    },
    {
      sender: "Unknown A",
      content: "YES I LOVE FROGS 🐸🐸🐸",
    },
    {
      sender: "Unknown A",
      content: "THANKS BESTIE",
    },
    {
      sender: "Unknown A",
      content: "gtg! Ttyl!",
    },
  ],
};

const Help: ConversationJson = {
  date: "12/11/16 19:20",
  messages: [
    {
      sender: "Unknown A",
      content: "You got Zach's message right? He said I can help you make the elixir.",
    },
    {
      sender: "Unknown B",
      content: "Yes, I got the speech about mentoring new blood and all that.",
    },
    {
      sender: "Unknown A",
      content:
        "Great! I already got started. I actually have the sun-like flower for the recipe, and I can get the other ingredients too.",
    },
    {
      sender: "Unknown B",
      content:
        "Don't bother. I've already gotten everything since yesterday. Just meet me in the clubroom on the 13th at 8am. It takes 3 hours to make. You can watch.",
    },
    {
      sender: "Unknown A",
      content: "Sure! See you there!",
    },
  ],
};

export const allConversations = [
  Police,
  Aftermath1,
  Aftermath2,
  Help,
  Tea,
  PromiseMe,
  Mom,
  Welcome,
];
