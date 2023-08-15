export const debounce = (func: (props?: unknown) => void, delay: number) => {
  let timeout: number;

  return (...args) => {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), delay);
  };
};
