import { Box } from "@chakra-ui/react";
import { Head } from "@inertiajs/inertia-react";
import React from "react";

export default function AuthLayout({ children, title }) {
    return (
        <Box
            w="full"
            minH="100vh"
            display="flex"
            justifyContent="center"
            alignItems="center"
            bg="gray.50"
        >
            <Head title={title} />
            <Box minW="md" rounded="lg" shadow="lg" p={5} bg="white">
                {children}
            </Box>
        </Box>
    );
}
