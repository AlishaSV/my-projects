'use client'

import React from "react";

export type TButtonProps = {
   text: string,
    onClick: () => void
}

export function Button({text, onClick}: TButtonProps) {
    return (
        <button
            onClick={onClick}
            className={'flex justify-center items-center rounded-full bg-stone-400 p-5 w-14 h-14 border-2 text-2xl text-slate-600'}>
            {text}
        </button>
    )
}