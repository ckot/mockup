import React from "react"

import classnames from "classnames"

const InterventionButton = ({step}) => {

    return (
        <>
        &nbsp;
        <button
            className={classnames("btn", "btn-sm", (step.intervention === "na") ? "btn-danger" :"btn-primary")}
            type="button"
        >
            {step.intervention}
        </button>
        </>
    )
}

export default InterventionButton