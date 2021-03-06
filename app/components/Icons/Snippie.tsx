import React from "react"

export function SnippieLogo({ bgFill = "#e2e2e2", ...props }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="109.36"
            height="101.965"
            viewBox="0 0 109.36 101.965"
            {...props}
        >
            <rect
                width="64"
                height="64"
                rx="32"
                transform="translate(25.142 16.344)"
                fill={bgFill}
            />
            <text
                transform="translate(5.142 28.344) rotate(40)"
                fill="#d38f2a"
                fontSize="42"
                fontFamily="Bangers-Regular, Bangers"
            >
                <tspan x="0" y="0">
                    Snippie
                </tspan>
            </text>
        </svg>
    )
}
