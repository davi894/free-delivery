'use client'
import { ClassAttributes, ReactNode,  } from 'react';

type ButtonProps  = ClassAttributes<HTMLButtonElement> & {
  children: ReactNode
}

export default function Button({ children, ...props }:ButtonProps){

    return <button {...props} >{children} </button>
}