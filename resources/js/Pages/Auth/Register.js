import AuthLayout from "@/Layouts/AuthLayout";
import { BrandButton, Input, LinkButton } from "@/Shared";
import { ButtonGroup, Flex, VStack } from "@chakra-ui/react";
import { Link as InertiaLink, useForm } from "@inertiajs/inertia-react";
import React, { useEffect } from "react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
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

        post(route("register"));
    };

    return (
        <AuthLayout title="Sign up">
            <form onSubmit={submit}>
                <Flex flexDir="column" justifyContent="flex-end">
                    <VStack>
                        <Input
                            isFocused
                            type="text"
                            name="name"
                            label="Name"
                            value={data.name}
                            errors={errors?.name}
                            onChange={onHandleChange}
                        />
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
                        <Input
                            label="Confirm password"
                            type="password"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            errors={errors?.password_confirmation}
                            onChange={onHandleChange}
                        />
                    </VStack>
                    <ButtonGroup mt={6} alignSelf="flex-end" spacing={4}>
                        <LinkButton as={InertiaLink} href={route("login")}>
                            Already registered?
                        </LinkButton>
                        <BrandButton type="submit" isLoading={processing}>
                            REGISTER
                        </BrandButton>
                    </ButtonGroup>
                </Flex>
            </form>
        </AuthLayout>
    );
}
