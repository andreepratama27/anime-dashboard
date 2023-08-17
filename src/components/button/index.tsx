import { cva } from "class-variance-authority";

export const button = cva(["px-2 py-1 text-sm text-white"], {
  variants: {
    intent: {
      primary: ["bg-green-500"],
      danger: ["bg-red-500"],
    },
  },
  defaultVariants: {
    intent: "primary",
  },
});
