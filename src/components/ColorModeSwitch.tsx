import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
import React from "react";

export const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack>
      <Switch isChecked={colorMode === "dark"} onChange={toggleColorMode} colorScheme={'green'}/>
      <Text whiteSpace='nowrap'>Dark Mode</Text>
    </HStack>
  );
};
