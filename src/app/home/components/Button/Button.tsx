'use client'

import { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  children: ReactNode;
};

export default function Button({ className, children, ...props }: ButtonProps) {
  return <button className={className} {...props}>{children}</button>;
}