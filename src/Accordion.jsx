import { useState } from "react"

const Accordion = ({controllerElement, contentDescription, children}) => {
    const [isExpanded, setIsExpanded] = useState(false)

    return (
        <>
            <div
                aria-expanded={isExpanded}
                aria-controls={contentDescription}
                aria-label={(isExpanded ? "hide " : "show ") + contentDescription}
                onClick={() => setIsExpanded(prevIsExpanded => !prevIsExpanded)}
            >
                {controllerElement(isExpanded)}
            </div>
            {isExpanded && <div id={contentDescription}>{children}</div>}
        </>
    )
}

export default Accordion