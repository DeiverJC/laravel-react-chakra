import { Button } from "@chakra-ui/react";
import React from "react";

export default function OutlineButton({ children, ...rest }) {
    return (
        <Button colorScheme="purple" variant="outline" {...rest}>
            {children}
        </Button>
    );
}
