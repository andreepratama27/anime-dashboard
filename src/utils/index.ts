/* eslint-disable @typescript-eslint/no-explicit-any */
export const debounce = (func: (props: any) => void, delay: number) => {
  let timeout: number;

  return (...args: any) => {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), delay);
  };
};
