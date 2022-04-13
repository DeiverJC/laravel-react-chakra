import { Button } from "@chakra-ui/react";
import React from "react";

export default function LinkButton({ children, ...rest }) {
    return (
        <Button variant="link" fontWeight="normal" {...rest}>
            {children}
        </Button>
    );
}
