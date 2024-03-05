'use client'

import {useState} from "react";
import {Button} from "@/components/thermometer";

export default function Thermometer() {
    const [score, setScore] = useState(0)

    function getColor(score: number) {
        switch (true) {
            case score < 0: {
                return 'bg-blue-500'
            }
            case score < 6: {
                return 'bg-blue-400'
            }
            case score < 11: {
                return 'bg-blue-300'
            }
            case score < 16: {
                return 'bg-yellow-300'
            }
            case score < 21: {
                return 'bg-yellow-400'
            }
            case score < 26: {
                return 'bg-amber-400'
            }
            case score < 31: {
                return 'bg-orange-400'
            }
            default:
                return 'bg-orange-500'
        }
    }

    return (
        <div className={'flex justify-center flex-col items-center'}>
            <div
                className={`flex justify-center items-center rounded-full ${getColor(score)} p-5 w-24 h-24 text-2xl border-2 border-blue-100 text-slate-600`}>
                {score}
            </div>
            <div className={'flex justify-center items-center'}>
                <Button text={'+'} onClick={() => setScore(score + 1)}/>
                <Button text={'-'} onClick={() => setScore(score - 1)}/>
            </div>
        </div>
    );
}
