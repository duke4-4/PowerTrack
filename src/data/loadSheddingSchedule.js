export const loadSheddingStages = [1, 2, 3, 4, 5, 6, 7, 8];

export const zoneSchedules = {
  "Zone 1": {
    1: ["04:00-06:30", "12:00-14:30", "20:00-22:30"],
    2: ["06:00-08:30", "14:00-16:30", "22:00-00:30"],
    // Add more stages...
  },
  "Zone 2": {
    1: ["02:00-04:30", "10:00-12:30", "18:00-20:30"],
    2: ["04:00-06:30", "12:00-14:30", "20:00-22:30"],
    // Add more stages...
  },
  // Add more zones...
};

export const currentStage = 2; // This would normally come from an API 