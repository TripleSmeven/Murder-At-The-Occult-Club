export interface ConversationJson {
  date: string;
  messages: Array<{
    sender: string;
    content: string;
  }>;
}

const Police: ConversationJson = {
  date: "12/18/2016 15:06",
  messages: [
    {
      sender: "Roy Samson",
      content: "We're seriously just gonna drop the investigation?",
    },
    {
      sender: "Roy Samson",
      content: "Just like that?",
    },
    {
      sender: "Sebastian Walsh",
      content: "Sheriff said so. KARL protocol. You can take it up with him if you want",
    },
    {
      sender: "Roy Samson",
      content: "I just can't believe we're doing this again",
    },
    {
      sender: "Roy Samson",
      content: "Is it because of the occult ties we found?",
    },
    {
      sender: "Sebastian Walsh",
      content: "Who knows",
    },
    {
      sender: "Sebastian Walsh",
      content: "I just shut up and take the bag",
    },
    {
      sender: "Roy Samson",
      content: "My daughter goes to that school.",
    },
    {
      sender: "Roy Samson",
      content:
        "I have to go home and pretend that the principal of her school AND the sheriff of our county's PD aren't corrupt pieces of shit",
    },
    {
      sender: "Roy Samson",
      content: "And that a kid from her school didn't just get poisoned by another kid.",
    },
    {
      sender: "Sebastian Walsh",
      content: "Technically, the kid died from asphyxiation",
    },
    {
      sender: "Roy Samson",
      content: "Whatever.",
    },
    {
      sender: "Sebastian Walsh",
      content:
        "Look at it this way. If you're president of some shady dark magic club, and you made some weird drink out of stuff you bought online then drank it, it's kind of on you, don't you think?",
    },
    {
      sender: "Roy Samson",
      content: "But still. He was just a kid.",
    },
    {
      sender: "Sebastian Walsh",
      content:
        "Listen, I get you have a guilty conscience or whatever. Just take the gift that we're all about to get in the mail and buy your daughter something nice",
    },
  ],
};

const Aftermath1: ConversationJson = {
  date: "12/13/2016 20:31",
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
      content: "Don't text me",
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
      content: "Regardless, dont say a word to the police!",
    },
  ],
};

const Aftermath2: ConversationJson = {
  date: "12/13/16 21:20",
  messages: [
    {
      sender: "Unknown A",
      content:
        "I still don't understand. I had believed at least myself and possibly you would have joined him. Yet he glimpsed alone.",
    },
    {
      sender: "Unknown A",
      content: "He is dead because of that.",
    },
    {
      sender: "Unknown B",
      content: "I don't know what to say… it all happened so fast.",
    },
    {
      sender: "Unknown B",
      content: "So the Oblivion really did kill him?",
    },
    {
      sender: "Unknown A",
      content: "That is the only plausible explanation.",
    },
    {
      sender: "Unknown A",
      content:
        "We were not prepared. We should have consulted a master before trying an advanced ritual.",
    },
    {
      sender: "Unknown B",
      content: "A master? Hold on, let me get back to you.",
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
      content: "Of course! I'm really sorry about what happened.",
    },
    {
      sender: "Evelyn Samson",
      content: "Thanks, I appreciate that. Now, which ones did you want?",
    },
    {
      sender: "Evelyn Samson",
      content: "The only ones we have left are Yerba mate, chamomile,  and youthberry",
    },
    {
      sender: "Unknown A",
      content: "I'll take the mate and youthberry.",
    },
    {
      sender: "Evelyn Samson",
      content:
        "For sure! I'll leave it with Professor Katz in the Office of Club Affairs. Just pick it up whenever you're free.",
    },
    {
      sender: "Unknown A",
      content: "Thanks!",
    },
  ],
};

export const allConversations = [Police, Aftermath1, Aftermath2, Tea];
