export const getPostedAgoTime = (date: number): string => {
    const currentDate: number = new Date().valueOf();
    const postedDate: number = new Date(date * 1000).valueOf();

    const diff: number = currentDate - postedDate;
    const minutes: number = (diff / (1000 * 60)) % 60;
    const hours: number = (diff / (1000 * 60 * 60)) % 24;
    const timeToShow: string =
      hours > 1 ? Math.round(hours) + "h" : Math.round(minutes) + "m";
    return timeToShow;
  };