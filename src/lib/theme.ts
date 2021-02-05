import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        color: "gray.600",
        lineHeight: "tall",
        background: "gray.100",
      },
      a: {
        color: "teal",
        textDecoration: "none",
      },
    },
  },
});
