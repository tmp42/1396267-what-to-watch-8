import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);

const HOUR = 3600;

export const formatRuntime = (runtime: number): string => dayjs.duration(runtime, 'minutes').format('H[h] mm[m]');
export const formatDatetime = (date: Date): string => dayjs(date).format('YYYY-MM-DD');
export const formatHumanizedDate = (date: Date): string => dayjs(date).format('MMMM D, YYYY');

export const formatRemainingTime = (remainingTime: number): string => {
  const format = remainingTime >= HOUR ? '-HH:mm:ss' : '-mm:ss';
  return dayjs.duration(remainingTime, 'seconds').format(format);
};

export function validateEmail(email: string): boolean {
  if (!email.length) {
    return false;
  }
  const emailTest = /.+?@.+?\..+/;

  return emailTest.test(email);
}


export function validatePassword(password: string): boolean {
  if (password.length < 2) {
    return false;
  }

  const passwordLetterTest = /[a-z]+?/i;
  if (!passwordLetterTest.test(password)) {
    return false;
  }

  const passwordDigitTest = /\d+?/;
  if (!passwordDigitTest.test(password)) {
    return false;
  }

  return true;
}
