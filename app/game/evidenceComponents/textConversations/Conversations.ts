export interface ConversationJson {
  date: string;
  messages: Array<{
    sender: string;
    content: string;
  }>;
}

export const Police: ConversationJson = {
  date: "12/17/2016 15:06",
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
