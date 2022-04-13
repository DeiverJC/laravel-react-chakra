import React, { useEffect } from "react";
import { Link as InertiaLink, useForm } from "@inertiajs/inertia-react";
import {
    Checkbox,
    Flex,
    FormControl,
    VStack,
    ButtonGroup,
} from "@chakra-ui/react";
import { BrandButton, Input, LinkButton } from "@/Shared";
import AuthLayout from "@/Layouts/AuthLayout";

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
        <AuthLayout title="Log in">
            <form onSubmit={submit}>
                <Flex flexDir="column" justifyContent="flex-end">
                    <VStack>
                        <Input
                            label="Email"
                            type="email"
                            name="email"
                            value={data.email}
                            errors={errors?.email}
                            onChange={onHandleChange}
                        />
                        <Input
                            label="Password"
                            type="password"
                            name="password"
                            value={data.password}
                            errors={errors?.password}
                            onChange={onHandleChange}
                        />
                        <FormControl>
                            <Checkbox
                                name="remember"
                                fontWeight="normal"
                                value={data.remember}
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
        </AuthLayout>
    );
}
