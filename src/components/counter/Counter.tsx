import { useState } from "react"

const Counter = ({ bgColor = '', customHeight = '' }) => {

    const [counter, setCounter] = useState(1)

    const handleIncrement = () => {
        setCounter(counter + 1)
    }

    const handleDecrement = () => {
        if (counter > 1) {
            setCounter(counter - 1)
        }
    }

  return (
    <>
        <div className={`flex w-16 ${customHeight && (customHeight)} items-center justify-between ${bgColor && (bgColor)} border border-slate-300 px-3 rounded-lg`}>
            <div className="font-semibold">{counter}</div>
            <div className="flex flex-col gap-1">
                <svg className="cursor-pointer" onClick={handleIncrement} width="8" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.422 4.97702L7.36216 0.660351C6.75084 0.0103513 5.76332 0.0103513 5.15199 0.660351L1.09216 4.97702C0.104639 6.02702 0.810014 7.82702 2.20509 7.82702L10.3247 7.82702C11.7198 7.82702 12.4095 6.02702 11.422 4.97702Z" fill="#393939"/>
                </svg>

                <svg className="cursor-pointer" onClick={handleDecrement} width="8" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.09656 3.02298L5.15639 7.33965C5.76771 7.98965 6.75524 7.98965 7.36656 7.33965L11.4264 3.02298C12.4139 1.97298 11.7085 0.172981 10.3135 0.172981L2.19381 0.172981C0.798738 0.172981 0.109039 1.97298 1.09656 3.02298Z" fill="#393939"/>
                </svg>
            </div>
        </div>
    </>
  )
}

export default Counter