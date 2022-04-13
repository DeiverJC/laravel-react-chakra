import { Button } from "@chakra-ui/react";
import React from "react";

export default function BrandButton({ children, ...rest }) {
    return (
        <Button
            {...rest}
            colorScheme="purple"
            bgGradient="linear(to-r, purple.500, blue.500)"
            _hover={{
                bgGradient: "linear(to-r, purple.500, blue.500)",
            }}
        >
            {children}
        </Button>
    );
}
