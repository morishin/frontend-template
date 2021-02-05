import * as React from "react";
import { render } from "react-dom";
import { IndexContainer } from "~components/index/IndexContainer";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "~lib/theme";

const $app = document.getElementById("wrapper")!;
function renderApp() {
  render(
    <ChakraProvider theme={theme}>
      <IndexContainer />
    </ChakraProvider>,
    $app,
  );
}

renderApp();

if (module.hot) {
  module.hot.accept(renderApp);
}
