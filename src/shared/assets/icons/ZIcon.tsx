interface IProps {
	color: string
}

export const ZIcon = ({color}: IProps) => {
    return (
        <>
            <svg width="108" height="96" viewBox="0 0 108 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M14 55.4286L64.2913 14.5753C65.1033 13.9156 66.255 14.7884 65.8395 15.7486L37.9017 80.316C37.488 81.2722 38.6297 82.1448 39.4437 81.4944L94 37.9048"
                    stroke={color}
                    strokeWidth="28"
                    strokeLinecap="round"
                />
            </svg>
        </>
    )
}