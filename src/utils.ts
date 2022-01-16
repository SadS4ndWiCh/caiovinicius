export const date = (date: string) => {
  const options = {
    month: 'long',
    weekday: 'long',
    year: 'numeric',
    day: 'numeric'
  }
  // @ts-ignore
  return Intl.DateTimeFormat('en', options).format(new Date(date));
};