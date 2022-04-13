import {
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input as ChakraInput,
} from "@chakra-ui/react";

export default function Input({ label, errors, ...rest }) {
    return (
        <FormControl isRequired isInvalid={errors}>
            <FormLabel fontWeight="normal">{label}</FormLabel>
            <ChakraInput
                {...rest}
                type="email"
                name="email"
                value={data.email}
                onChange={onHandleChange}
            />
            {errors && <FormErrorMessage>{errors}</FormErrorMessage>}
        </FormControl>
    );
}
