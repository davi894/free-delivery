
type TypeLayout = {
    children?: React.ReactNode
};

type TypeLoginValidation = {
    email: string;
    password: string;
};

type TypeRegisterValidation = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
};

type TypeStrokColor = {
    color?: string
};

export type { TypeLayout, TypeLoginValidation, TypeStrokColor, TypeRegisterValidation };