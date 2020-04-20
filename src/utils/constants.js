const domain = "portal.interspace.chat";

export const JitsiInstances = [
  "stop-covid-19",
  "conference-room",
  "mentor-ring",
];

export const RoomURLs = {
  "stop-covid-19": {
    jitsi: {
      domain,
      roomName: "stop-covid-19",
    },
    mozillaHub: {
      externalUrl: "https://hubs.mozilla.com/nKCuNrg/house-of-defiance",
    },
    youtube: {
      videoId: "pLq2xC_wGMg",
      externalUrl: "https://youtu.be/X5k8Cbr0d44",
    },
  },
  "conference-room": {
    jitsi: {
      domain,
      roomName: "conference-room",
    },
    mozillaHub: {
      externalUrl: "https://hubs.mozilla.com/nKCuNrg/house-of-defiance",
    },
    youtube: {
      videoId: "X5k8Cbr0d44",
      externalUrl: "https://youtu.be/X5k8Cbr0d44",
    },
  },
  "mentor-ring": {
    jitsi: {
      domain,
      roomName: "mentor-ring",
    },
    mozillaHub: {
      externalUrl: "https://hubs.mozilla.com/nKCuNrg/house-of-defiance",
    },
    youtube: {
      videoId: "X5k8Cbr0d44",
      externalUrl: "https://youtu.be/X5k8Cbr0d44",
    },
  },
};

export const RoomNames = Object.keys(RoomURLs);
