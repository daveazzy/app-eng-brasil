import { Speaker } from "../screens/home";

export const getUniqueTitle = (speakers: Speaker[]): string[] => {
    const titlesSet = new Set<string>();
    speakers.forEach(speaker => {
      if (speaker.categoryName) {
        titlesSet.add(speaker.categoryName);
      }
    });
    return Array.from(titlesSet);
  };
  