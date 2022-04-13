import React, { useEffect } from "react";
import { Head, Link as InertiaLink, useForm } from "@inertiajs/inertia-react";
import {
    Box,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    VStack,
    Input as ChakraInput,
    FormErrorMessage,
    ButtonGroup,
} from "@chakra-ui/react";
import { BrandButton, LinkButton } from "@/Shared";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: "",
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <Box
            w="full"
            minH="100vh"
            display="flex"
            justifyContent="center"
            alignItems="center"
            bg="gray.50"
        >
            <Head title="Log in" />
            <Box minW="md" rounded="lg" shadow="lg" p={5} bg="white">
                <form onSubmit={submit}>
                    <Flex flexDir="column" justifyContent="flex-end">
                        <VStack>
                            <FormControl isRequired isInvalid={errors?.email}>
                                <FormLabel fontWeight="normal">Email</FormLabel>
                                <ChakraInput
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    onChange={onHandleChange}
                                />
                                {errors?.email && (
                                    <FormErrorMessage>
                                        {errors?.email}
                                    </FormErrorMessage>
                                )}
                            </FormControl>
                            <FormControl
                                isRequired
                                isInvalid={errors?.password}
                            >
                                <FormLabel fontWeight="normal">
                                    Password
                                </FormLabel>
                                <ChakraInput
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    onChange={onHandleChange}
                                />
                                {errors?.password && (
                                    <FormErrorMessage>
                                        {errors?.password}
                                    </FormErrorMessage>
                                )}
                            </FormControl>
                            <FormControl>
                                <Checkbox
                                    name="remember"
                                    value={data.remember}
                                    fontWeight="normal"
                                    onChange={onHandleChange}
                                >
                                    Remember me
                                </Checkbox>
                            </FormControl>
                        </VStack>
                        <ButtonGroup mt={6} alignSelf="flex-end" spacing={4}>
                            {canResetPassword && (
                                <LinkButton
                                    as={InertiaLink}
                                    href={route("password.request")}
                                >
                                    Forgot your password?
                                </LinkButton>
                            )}
                            <BrandButton type="submit" isLoading={processing}>
                                LOG IN
                            </BrandButton>
                        </ButtonGroup>
                    </Flex>
                </form>
            </Box>
        </Box>
    );
}

/*
import { BrandButton, LinkButton } from "@/Shared";
import {
    Box,
    ButtonGroup,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Input,
    VStack,
} from "@chakra-ui/react";
import { Head, useForm } from "@inertiajs/inertia-react";
import React, { useEffect } from "react";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: "",
    });

    useEffect(() => {
        return () => reset("password");
    }, []);

    const onHandleChange = (e) => {
        setData(
            e.target.name,
            e.target.type === "checkbox" ? e.target.checked : e.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();
        post(route("login"));
    };

    return (
        <Box
            w="full"
            minH="100vh"
            display="flex"
            justifyContent="center"
            alignItems="center"
            bg="gray.50"
        >
            <Head title="Log in" />
            <Box minW="md" rounded="lg" shadow="lg" p={5} bg="white">
                {status && <pre>{JSON.stringify(status, null, 2)}</pre>}
                <pre>{JSON.stringify(data, null, 2)}</pre>
                <form onSubmit={submit}>
                    <Flex flexDir="column" justifyContent="flex-end">
                        <VStack>
                            <FormControl isRequired isInvalid={errors?.email}>
                                <FormLabel fontWeight="normal">Email</FormLabel>
                                <Input
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    onChange={onHandleChange}
                                />
                                {errors?.email && (
                                    <FormErrorMessage>
                                        {errors?.email}
                                    </FormErrorMessage>
                                )}
                            </FormControl>
                            <FormControl
                                isRequired
                                isInvalid={errors?.password}
                            >
                                <FormLabel fontWeight="normal">
                                    Password
                                </FormLabel>
                                <Input
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    onChange={onHandleChange}
                                />
                                {errors?.password && (
                                    <FormErrorMessage>
                                        {errors?.password}
                                    </FormErrorMessage>
                                )}
                            </FormControl>
                            <FormControl>
                                <Checkbox
                                    name="remember"
                                    value={data.remember}
                                    fontWeight="normal"
                                    onChange={onHandleChange}
                                >
                                    Remember me
                                </Checkbox>
                            </FormControl>
                        </VStack>
                        <ButtonGroup mt={6} alignSelf="flex-end" spacing={4}>
                            {canResetPassword && (
                                <LinkButton>Forgot your password?</LinkButton>
                            )}
                            <BrandButton type="submit" isLoading={processing}>
                                LOG IN
                            </BrandButton>
                        </ButtonGroup>
                    </Flex>
                </form>
            </Box>
        </Box>
    );
}
*/
