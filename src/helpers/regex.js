/*
Valid formats:
  (123) 456-7890, (123)456-7890, 123-456-7890
  123.456.7890, 1234567890, +31636363634, 075-63546725
*/
export const validPhonePattern =
  /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im;

export const validZipPattern = /^\d{5}$|^\d{5}-\d{4}$/i;

export const validSSNPattern =
  /^(?!000|666)[0-8][0-9]{2}-?(?!00)[0-9]{2}-?(?!0000)[0-9]{4}$/i;

export const validEmailPattern =
  /[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})/i;
