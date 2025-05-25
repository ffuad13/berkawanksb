export const formatDateToLocal = (
  isoDateStr: string,
  overrideTimeStr?: string,
  locale: string = "id-ID",
) => {
  let date = new Date(isoDateStr);

  if (overrideTimeStr) {
    const [hour, minute, second = "00"] = overrideTimeStr
      .split(":")
      .map(Number);

    date.setHours(hour, minute, Number(second), 0);
  }

  const options: Intl.DateTimeFormatOptions = {
    dateStyle: "full",
    timeStyle: overrideTimeStr ? "short" : undefined,
    timeZone: "Asia/Makassar",
  };

  const formatter = new Intl.DateTimeFormat(locale, options);

  return formatter.format(date);
};
