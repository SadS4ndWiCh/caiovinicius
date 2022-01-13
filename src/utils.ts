export const date = (date: string) => {
  return Intl.DateTimeFormat('en').format(new Date(date));
};