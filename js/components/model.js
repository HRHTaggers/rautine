//VISUAL DATA
export const state = {
  activityData: [
    {
      name: "breakfast",
      category: "eat",
      icon: `🥣`,
    },
    {
      name: "snack",
      category: "eat",
      icon: `🍎`,
    },
    {
      name: "lunch",
      category: "eat",
      icon: `🍽️`,
    },
    {
      name: "tea",
      category: "eat",
      icon: `🍽️`,
    },
    {
      name: "nap",
      category: "sleep",
      icon: `🛏️`,
    },
    {
      name: "bedtime",
      category: "sleep",
      icon: `🛏️`,
    },
    {
      name: "free-play",
      category: "play",
      icon: `🧸`,
    },
    {
      name: "playdate",
      category: "play",
      icon: `👭`,
    },
    {
      name: "music",
      category: "play",
      icon: `🎵`,
    },
    {
      name: "home",
      category: "location",
      icon: `🏡`,
    },
    {
      name: "nursery",
      category: "location",
      icon: `🏫`,
    },
    {
      name: "playgroup",
      category: "location",
      icon: `🏫`,
    },
    {
      name: "church",
      category: "location",
      icon: `⛪`,
    },
    {
      name: "outdoors",
      category: "play",
      icon: `🌳`,
    },
    {
      name: "grandma's",
      category: "location",
      icon: `👩🏻`,
    },
    {
      name: "shopping",
      category: "chore",
      icon: `🛒`,
    },
    {
      name: "car",
      category: "travel",
      icon: `🚗`,
    },
    {
      name: "bus",
      category: "travel",
      icon: `🚌`,
    },
  ],
  bookmarks: [],
};

//AUDIO DATA
export const fiveMinuteWarningAudio = new Audio(`../src/5-min-warning.wav`);
export const timeUpWarningAudio = new Audio(`../src/time-up-warning-mp3.mp3`);

export const createNewActivity = function (input) {
  const activity = input;
  return {
    name: activity.name,
    category: activity.category,
    icon: activity.icon,
  };
};
