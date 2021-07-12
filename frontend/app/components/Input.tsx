import React, { FormEvent, useState } from "react";
import styled from "styled-components";
import { Content } from "../css/content";
import { useData } from "../context/DataProvider";
import { ActionText } from "../css/typography";
import { Button } from "./Button";
import { CopyLink } from "./CopyLink";

const InputWrapper = styled.div`
    padding: 1.5rem;
    border-radius: 0.5rem;
    border: 0.1rem solid ${p => p.theme.gray200};
    background-color: ${p => p.theme.gray100};

    @media ${p => p.theme.bp.xl} {
        padding: 4rem;
        padding-right: 5rem;
    }
`;

const InputResult = styled.div`
    padding-top: 2rem;
`;

const InputError = styled.div`
    color: ${p => p.theme.red700};
`;

const InputForm = styled.form`
    display: flex;
    align-items: center;
`;

const InputBox = styled.input`
    flex: 1;
    background: none;
    height: 4rem;
    padding: 0 1rem;
    margin-right: 1rem;
    border-radius: 0.5rem;
    border: 0.1rem solid ${p => p.theme.gray400};
    color: ${p => p.theme.gray900};
    transition: border-color 0.1s;
    will-change: border-color;

    &::placeholder {
        color: ${p => p.theme.gray400};
    }

    &:focus,
    &:not(:placeholder-shown) {
        border-color: ${p => p.theme.gray600};
    }

    @media ${p => p.theme.bp.l} {
        height: 5rem;
        margin-right: 2rem;
    }
`;

export const Input: React.FC = () => {
    const { createLink } = useData();
    const [value, setValue] = useState<string>("");
    const [tinyUrl, setTinyUrl] = useState<string>("");
    const [errors, setErrors] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (!value) {
            return;
        }

        reset();
        setLoading(true);

        const { tinyUrl, errors } = await createLink(value);

        setLoading(false);

        if (errors) {
            setErrors(errors);
            return;
        }

        setTinyUrl(tinyUrl);
    };

    const reset = () => {
        setTinyUrl("");
        setErrors([]);
    };

    return (
        <Content>
            <InputWrapper>
                <InputForm onSubmit={onSubmit}>
                    <InputBox
                        type="text"
                        placeholder="Shorten your link ..."
                        value={value}
                        onInput={e => setValue((e.target as HTMLInputElement).value)}
                    />
                    <Button type="submit">
                        <ActionText>Submit</ActionText>
                    </Button>
                </InputForm>
                {(loading || tinyUrl || errors.length > 0) && (
                    <InputResult>
                        {loading && "Loading..."}
                        {tinyUrl && <CopyLink value={tinyUrl} />}
                        {errors.length > 0 &&
                            errors.map(error => <InputError key={error}>{error}</InputError>)}
                    </InputResult>
                )}
            </InputWrapper>
        </Content>
    );
};
