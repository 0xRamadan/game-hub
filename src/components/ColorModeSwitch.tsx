import { HStack, Switch, useColorMode } from "@chakra-ui/react";
import React from "react";

export const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack spacing="24px" justify="flex-end">
      <Switch isChecked={colorMode === "dark"} onChange={toggleColorMode} colorScheme={'green'}/>
    </HStack>
  );
};
