type TranscriptJson = {
  date?: string;
  interviewer?: string;
  interviewee?: string;
  location?: string;
  firstPage?: boolean;
  lines: { name: string; text: string }[];
};

const SAMSON = "Samson";
const LARSSEN = "Larssen";
const KATARIA = "Kataria";

const kataria1: TranscriptJson = {
  date: "1/14/26 10:10 AM",
  interviewer: "Troy Samson",
  interviewee: "Sandeep Kataria",
  location: "Phone Call",
  firstPage: true,

  lines: [
    { name: SAMSON, text: "Good morning. Mr. Kataria?" },
    { name: KATARIA, text: "Yes that's me. Who am I speaking to?" },
    {
      name: SAMSON,
      text: "This is Troy Samson from the Kaiser County Police Department. How are you doing?",
    },
    { name: KATARIA, text: "Police? What's going on?" },
    { name: SAMSON, text: "Mr. Kataria, do you know the current whereabouts of your son?" },
    { name: KATARIA, text: "My son? Which one?" },
    { name: SAMSON, text: "David. David Kataria." },
    {
      name: KATARIA,
      text: "Ah, my oldest. Um...he went to a friend's vacation house a few days ago. Said he'd be there for a week.",
    },
    { name: SAMSON, text: "Do you know where this friend's house is?" },
    { name: KATARIA, text: "Somewhere in Hamper I think." },
    { name: SAMSON, text: "And do you know the name of this friend and who else he is with?" },
    { name: KATARIA, text: "Yeah, it's Matthew's house. Officer, is my son okay?" },
    {
      name: SAMSON,
      text: "We're trying to verify that. We got a missing person report for one Martin Larssen, and I believe your son is a good friend of his.",
    },
  ],
};

const kataria2: TranscriptJson = {
  firstPage: false,
  lines: [
    { name: KATARIA, text: "Martin, yes. They're best friends." },
    {
      name: SAMSON,
      text: "And do you remember any of his other friends? Friends that he might be with right now?",
    },
    { name: KATARIA, text: "Wait, let me call my son on my other phone." },
    { name: SAMSON, text: "Of course." },
    { name: KATARIA, text: "(AFTER SEVERAL MINUTES OF SILENCE) He's not picking up!" },
    { name: SAMSON, text: "Mr. Kataria, do you know the names of any of his other friends?" },
    {
      name: KATARIA,
      text: "I, uh...He has this postcard. Hold on. (SOUNDS OF PAPERS SHUFFLING) Yes! It's his friend group. They do everything together.",
    },
    { name: SAMSON, text: "Can you read them out for me?" },
    { name: KATARIA, text: "Matthew Crocker, Daisy Verde, Nikki Yu, and Martin Larssen." },
    { name: SAMSON, text: "And that Matthew is the same Matthew you mentioned before?" },
    { name: KATARIA, text: "Yeah, yeah. British guy. Rich family. Did something happen to David?" },
    { name: SAMSON, text: "I'm not sure, Mr. Kataria. I'm trying to figure that out right now." },
    { name: KATARIA, text: "What about Martin? You said he's missing?" },
    {
      name: SAMSON,
      text: "Sir, thank you again for your help. I have some calls to make, but I will contact you as soon as I have something to share with you, alright? Take care.",
    },
  ],
};

const larssen1: TranscriptJson = {
  date: "1/12/26 11:39 AM",
  interviewer: "Troy Samson",
  interviewee: "Beatrice Larssen",
  location: "Interview Room 1",
  firstPage: true,

  lines: [
    { name: SAMSON, text: "Mrs. Larssen, please have a seat." },
    {
      name: LARSSEN,
      text: "Is all of this necessary? I've been waiting for two hours already. You could have been looking for my son by now.",
    },
    { name: SAMSON, text: "Just standard procedure, ma'am. I have to follow protocol." },
    { name: LARSSEN, text: "Does your protocol involve actually doing your job?" },
    {
      name: SAMSON,
      text: "Right. Let's start from the beginning. You're here to report your son missing, is that correct?",
    },
    {
      name: LARSSEN,
      text: "God, for the third time, yes! His name is Martin Larssen. I haven't seen him in over 12 hours!",
    },
    { name: SAMSON, text: "I'm sorry, did you say 12 hours?" },
    {
      name: LARSSEN,
      text: "Yes! I woke up this morning and he wasn't in his bed! I haven't see or heard from him since yesterday.",
    },
    {
      name: SAMSON,
      text: "Okay. Do you know where he went?",
    },
    { name: LARSSEN, text: "No. He turned off his location." },
    {
      name: SAMSON,
      text: "Mrs. Larssen, how old is your son?",
    },
    { name: LARSSEN, text: "He's 20. Why is that important?" },
    {
      name: SAMSON,
      text: "It doesn't seem that out of the ordinary for a 20 year-old to go somewhere without telling his mom.",
    },
    { name: LARSSEN, text: "What are you trying to say?" },
    {
      name: SAMSON,
      text: "Well...maybe the young man just needs some space. He is an adult, after all.",
    },
  ],
};

const larssen2: TranscriptJson = {
  firstPage: false,
  lines: [
    {
      name: LARSSEN,
      text: "Officer, you're not listening to me. My son is missing and I need you to find him. He's been falling in the wrong crowd recently. I think he might be doing drugs.",
    },
    {
      name: SAMSON,
      text: "What kind of crowd are we talking about?",
    },
    {
      name: LARSSEN,
      text: "I think he's made some bad friends from school. He went to their house for a New Year's party and came home at 3am!",
    },
    {
      name: SAMSON,
      text: "And when he came home, was he acting strangely? Did he smell like alcohol, or did you find any illegal substances on him?",
    },
    { name: LARSSEN, text: "Well, no, but I'm sure these friends of his are up to no good." },
    {
      name: SAMSON,
      text: "Okay. Can you tell me more about these friends? Have you met them before?",
    },
    {
      name: LARSSEN,
      text: "Yes, one of them's named is David. Dropped Martin off at home after that party. Don't like him one bit. He looks like a drug dealer. Or maybe drug dealer's bodyguard.",
    },
    {
      name: SAMSON,
      text: "And do you know David's last name?",
    },
    {
      name: LARSSEN,
      text: "No, I don't. Why does this matter? Can you just track my son's phone or something? Don't the police have tracking devices?",
    },
    {
      name: SAMSON,
      text: "We can't just track any phone we want to, ma'am. We need probable cause and an active missing person's case",
    },
    { name: LARSSEN, text: "Well, get on it then!" },
    {
      name: SAMSON,
      text: "(SIGHS) What was your son wearing the last time you saw him?",
    },
    {
      name: LARSSEN,
      text: "His pajamas! He left in the middle of the night, officer. I don't know what he was wearing.",
    },
    {
      name: SAMSON,
      text: "Got it. Let me take this to my supervisor and I'll call you with the next steps, if your son doesn't show up by then.",
    },
    { name: LARSSEN, text: "That's it? So you're not going to do anything?" },
    {
      name: SAMSON,
      text: "I am doing something, Mrs. Larssen. I'm following protocol.",
    },
    {
      name: LARSSEN,
      text: "This is unbelievable! Is this really how the police department operates?",
    },
    {
      name: SAMSON,
      text: "Just standard procedure. Right this way, ma'am. I'll walk you out.",
    },
    {
      name: LARSSEN,
      text: "Officer, do you have children?",
    },
    {
      name: SAMSON,
      text: "Yes, Mrs. Larssen. One daughter.",
    },
    {
      name: LARSSEN,
      text: "Just the one? We're the same then. How would you feel if your daughter was the one missing?",
    },
    {
      name: SAMSON,
      text: "Ma'am, I promise you I will do everything that I can to help. I'll call you if anything comes up, alright? Take care.",
    },
  ],
};

export const transcripts = [kataria1, kataria2, larssen1, larssen2];
