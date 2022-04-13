import React from "react";
import { Link as InertiaLink, Head } from "@inertiajs/inertia-react";
import { Box, ButtonGroup, Flex, Heading, Text } from "@chakra-ui/react";
import { BrandButton, OutlineButton } from "@/Shared";

export default function Welcome(props) {
    return (
        <Box h="100vh" w="full">
            <Head title="Welcome" />
            <Flex py={2} px={3} justify="flex-end">
                {props.auth.user ? (
                    <BrandButton as={InertiaLink} href={route("register")}>
                        Dashboard
                    </BrandButton>
                ) : (
                    <ButtonGroup>
                        <OutlineButton as={InertiaLink} href={route("login")}>
                            Log in
                        </OutlineButton>
                        <BrandButton as={InertiaLink} href={route("register")}>
                            Sign up
                        </BrandButton>
                    </ButtonGroup>
                )}
            </Flex>
            <Flex
                py={2}
                px={3}
                justify="center"
                alignItems="center"
                minH="80vh"
            >
                <Heading
                    fontSize={{ base: "5xl", md: "7xl", lg: "9xl" }}
                    fontWeight="extrabold"
                    textAlign="center"
                >
                    <Text
                        as="span"
                        bgGradient="linear(to-r, purple.500, blue.500)"
                        bgClip="text"
                    >
                        Welcome to
                    </Text>
                    <br />
                    Laravel + Reactjs
                </Heading>
            </Flex>
        </Box>
    );
}
