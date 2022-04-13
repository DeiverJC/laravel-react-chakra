import {
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input as ChakraInput,
} from "@chakra-ui/react";
import { useEffect, useRef } from "react";

export default function Input({ label, errors, isFocused, ...rest }) {
    const inputRef = useRef();

    useEffect(() => {
        if (isFocused) {
            inputRef.current.focus();
        }
    }, []);
    return (
        <FormControl isRequired isInvalid={errors}>
            <FormLabel fontWeight="normal">{label}</FormLabel>
            <ChakraInput {...rest} ref={inputRef} />
            {errors && <FormErrorMessage>{errors}</FormErrorMessage>}
        </FormControl>
    );
}
