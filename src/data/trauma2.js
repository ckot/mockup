const ASSESS = "assessment";
const INTERV = "intervention";
const CHECK = "check-box";
const RADIO = "radio-button";
// const CRIT_FAIL = "critical-criteria";


const data = {
    outline: [
        { id: "bsi", label: "BSI" },
        { id: "scene-size-up", label: "Scene Size-Up" },
        {
            id: "initial-assessment-resuscitation",
            label: "Primary Assessment/Resuscitation",
            children: [
                { id: 'general-assessment', label: 'General Assessment' },
                { id: "airway", label: "Airway" },
                { id: "breathing", label: "Breathing" },
                { id: "circulation", label: "Circulation" },
                { id: "transport-decision", label: "Transport Decision" }
            ]
        },
        { id: "history-taking", label: "History Taking" },
        {
            id: "detailed-physical-examination",
            label: "Secondary Assessment",
            children: [
                { id: "head", label: "Head" },
                { id: "neck", label: "Neck" },
                { id: "chest", label: "Chest" },
                { id: "abdomen-pelvis", label: "Abdomen/pelvis" },
                { id: "lower-extremities", label: "Lower extremities" },
                { id: "upper-extremities", label: "Upper extremities" },
                { id: "posterior-thorax-lumbar-buttocks", label: "Posterior thorax, lumbar, & buttocks" },
                {
                    id: "550",
                    label: "Manages secondary injuries & wounds appropriately",
                },
                {
                    id: "560",
                    label: "Performs ongoing assessment",
                }
            ]
        },

    ],
    items: {
        'bsi': [
            { id: "apply-ppe",                  type: "????", label: "Takes or verbalizes body substance isolation precautions." } // crit criteria 590
        ],
        'scene-size-up': [
            { id: "assess-scene-safety",        type: ASSESS, label: "Determines the scene/situation is safe", calloutLabel: "Scene Safety"},
            { id: "assess-injury-mechanism",    type: ASSESS, label: "Determines the mechanism of injury/nature of illness", calloutLabel: "Mechanism of Injury"},
            { id: "assess-num-patients",        type: ASSESS, label: "Determines the number of patients", calloutLabel: "Num Patients"},
            { id: "request-addl-help",          type: ASSESS, label: "Requests additional help if necessary", calloutLabel: "Additional Help"},
            { id: "assess-spinal-stability",    type: ASSESS, label: "Considers stabilization of spine" }, // crit criteria 610
            { id: "stabilizes-spine",           type: INTERV, label: "Stabilizes or directs assistant to stabilize the cervical spine, as indicated" } // crit criteria 610
        ],
        'general-assessment': [
            { id: "verbalizes-patient-condition", type: ASSESS, label: "Verbalizes general impression of the patient", calloutLabel: "Condition" },
            { id: "determines-loc",               type: ASSESS, label: "Determines responsiveness/level of consciousness", calloutLabel: "LOC"},
            { id: "determines-life-threats",      type: ASSESS, label: "Determines chief complaint/apparent life-threats", calloutLabel: "Life Threats" }
        ],
        'airway': [
            { id: "assess-airway", type: ASSESS, label: "Opens & assesses airway", calloutLabel: "Airway" },
            { id: "manages-aiway",  type: INTERV, label: "Inserts adjunct as indicated" } // action / crit criteria 690
        ],
        'breathing': [
            { id: "assess-breathing",        type: ASSESS, label: "Assess breathing", calloutLabel: "Breathing" },
            { id: "assess-ventilation",      type: ASSESS, label: "Assess adequate ventilation", calloutLabel: "Ventilations"},
            { id: "oxygen-therapy",          type: INTERV, label: "Initiates appropriate oxygen therapy" }, // crit criteria 620
            { id: "manage-breathing-injury", type: INTERV, label: "Manages any injury which may compromise breathing/ventilation" } // crit criteria 630
        ],
        'circulation': [
            { id: "assess-pulse",     type: ASSESS, label: "Checks pulse", calloutLabel: "Pulse"},
            { id: "assess-skin",      type: ASSESS, label: "Assess skin [color, temperature, or condition]", calloutLabel: "Skin" },
            { id: "control-bleeding", type: INTERV, label: "Assesses for & controls major bleeding if present", calloutLabel: "Bleeding" },
            { id: "control-shock",    type: INTERV, label: "Initiates shock management" } // crit criteria 640
        ],
        'transport-decision': [ 
            { id: "260",              type: ASSESS, label: "Identifies priority patients/makes transport decision based upon calculated GCS" } // crit criteria 650
        ],
        'history-taking': [
            { id: "obtains-vitals",        type: ASSESS, label: "Obtains, or directs assistant to obtain, baseline vital signs" }, // point to vitals
            { id: "attempt-obtain-sample", type: ASSESS, label: "Attempts to obtain SAMPLE history" } // point to SAMPLE
        ],
        'head': [
            { id: "assess-mouth-nose-face", type: ASSESS, label: "Inspects mouth, nose, & assesses facial area", calloutLabel: "Face" },
            { id: "assess-scape-ears",      type: ASSESS, label: "Inspects & palpates scalp & ears", calloutLabel: "Ears" },
            { id: "assess-perrl",           type: ASSESS, label: "Assesses eyes for PERRL", calloutLabel: "PERRL" }
        ],
        'neck': [
            { id: "assess-trachea-position", type: ASSESS, label: "Checks position of trachea", calloutLabel: "Trachea"},
            { id: "assess-jugular",          type: ASSESS, label: "Checks jugular veins", calloutLabel: "Jugular" },
            { id: "assess-spine",            type: ASSESS, label: "Palpates cervical spine", calloutLabel: "Assess C-Spine" }
        ],
        'chest': [
            { id: "inspect-chest",    type: ASSESS, label: "Inspects chest", calloutLabel: "Inspect Chest"},
            { id: "palpate-chest",    type: ASSESS, label: "Palpates chest", calloutLabel: "Palpate Chest" },
            { id: "auscultate-chest", type: ASSESS, label: "Auscultates chest", calloutLabel: "Auscultates Chest" }
        ],
        'abdomen-pelvis': [
            { id: "assess-abdomen",    type: ASSESS, label: "Inspects & palpates abdomen", calloutLabel: "Inspect Abdomen"},
            { id: "assess-pelvis",     type: ASSESS, label: "Assesses pelvis", calloutLabel: "Assess Pelvis" },
            { id: "assess-nads-taint", type: ASSESS, label: "Verbalizes assessment of genitalia/perineum as needed", calloutLabel: "Assess Genitalia" }
        ],
        'lower-extremities': [
            { id: "assess-left-leg",  type: ASSESS, label: "Left Leg: Inspects, palpates, & assesses motor, sensory, & distal circulatory functions", calloutLabel: "Left Leg" },
            { id: "assess-right-leg", type: ASSESS, label: "Right Leg: Inspects, palpates, & assesses motor, sensory, & distal circulatory functions", calloutLabel: "Right Leg" }
        ],
        'upper-extremities': [
            { id: "assess-left-arm",  type: ASSESS, label: "Left Arm: Inspects, palpates, & assesses motor, sensory, & distal circulatory functions", calloutLabel: "Left Arm" },
            { id: "assess-right-arm", type: ASSESS, label: "Right Arm: Inspects, palpates, & assesses motor, sensory, & distal circulatory functions", calloutLabel: "Right Arm" }
        ],
        "posterior-thorax-lumbar-buttocks": [
            { id: "assess-posterior-thorax", type: ASSESS, label: "Inspects & palpates posterior thorax", calloutLabel: "Assess posterior" },
            { id: "assess-lumbar-buttocks",  type: ASSESS, label: "Inspects & palpates lumbar & buttocks area", calloutLabel: "Assess buttocks" }
        ]
    },
    criticalCriteria: [
        { id: "580", label: "Failure to initiate or call for transport of the patient within 10 minutes of time limit" },

        // true if 'apply-ppe' not checked?
        { id: "590", label: "Failure to take or verbalize body substance isolation precautions" },
        // true if 'assess-scene-safety' not checked?
        { id: "600", label: "Failure to determine scene safety" },
        // true if 'stabilize-spine' not checked AND indicated?
        { id: "610", label: "Failure to assess for and provide spinal protection when indicated" },

        { id: "620", label: "Failure to voice & ultimately provide high concentration of oxygen" },
        // true if ANY of the ventiliation
        { id: "630", label: "Failure to assess/provide adequate ventilation" },
        { id: "640", label: "Failure to find or appropriately manage problems associated with airway, breathing, hemorrhage or shock [hypoperfusion]" },

        { id: "650", label: "Failure to differentiate patient's need for immediate transportation versus continued assessment/treatment at the scene" },

        { id: "660", label: "Does other detailed/focused history or physical exam before assessing/treating threats to airway, breathing, & circulation" },
        { id: "670", label: "Exhibits unacceptable affect with patient or other personnel" },
        { id: "680", label: "Failure to manage the patient as a competent EMT-P" },
        { id: "690", label: "Uses or orders a dangerous or inappropriate intervention" }
    ],
    interventionForms: {
        // Each selected intervention should, by default, also include an 'other / incorrect intervention' option
        // Each object title matches checklist item id for easier mapping
        // TODO: may have to assign type to individual steps to account for medical scenarios (or for a mix or radios/checks)
        "stabilizes-spine": {
            id: "c-spine-interventions",
            type: CHECK,
            steps: [
                { id: "c-spine-intervention-10", label: "Holds manual stabilization" },
                { id: "c-spine-intervention-20", label: "Applies cervical collar" }
            ],
            criticalCriteria: []
        },
        "assess-ventilation": {
            id: "ventilation-interventions",
            type: RADIO,
            steps: [
                { id: "ventilation-intervention-10", label: "Endotracheal intubation" },
                { id: "ventilation-intervention-20", label: "Bag-valve mask" },
            ],
            criticalCriteria: []
        },
        "control-bleeding": {
            id: "bleeding-interventions",
            type: RADIO,
            steps: [
                { id: "bleeding-intervention-10", label: "Applies direct pressure" },
                { id: "bleeding-intervention-20", label: "Applies tourniquet" }
            ],
            criticalCriteria: [ // Critical criteria should automatically be check boxes
                { id: "bleeding-crit-10", label: "Did not control hemorrhage using correct procedures in a timely manner" },
                { id: "bleeding-crit-20", label: "Did not apply direct pressure to wound before applying tourniquet" },
                { id: "bleeding-crit-30", label: "Did not properly position the patient" },
                { id: "bleeding-crit-40", label: "Did not take steps to prevent heat loss" }
            ]
        },
        "control-shock": {
            id: "shock-interventions",
            type: RADIO,
            steps: [
                { id: "shock-intervention-10", label: "IV fluid therapy--Peripheral IV insertion" },
                { id: "shock-intervention-20", label: "IV fluid therapy--IV Push/Bolus" },
                { id: "shock-intervention-30", label: "Covers patient" }
            ],
            criticalCriteria: [
                { id: "shock-crit-10", label: "Fails to establish a patent and properly adjusted IV within 6-minute time limit" },
                { id: "shock-crit-20", label: "Fails to establish IV within 3 attempts during 6-minute time limit" },
                { id: "shock-crit-30", label: "Contaminates equipment or site without appropriately correcting situation" },
                { id: "shock-crit-40", label: "Performs any improper technique resulting in the potential for uncontrolled hemorrhage, catheter shear, or air embolism" },
                { id: "shock-crit-50", label: "Fails to dispose/verbalize disposal of blood-contaminated sharps immediately in proper container at point of use" }
            ]
        },
        "transport-decision": {
            id: "transport-interventions",
            type: RADIO,
            steps: [
                { id: "transport-intervention-10", label: "Scoop Stretcher" },
                { id: "transport-intervention-20", label: "Supine Long Backboard" },
            ],
            criticalCriteria: [
                { id: "transport-crit-10", label: "Did not immediately direct or take manual immobilization of head" },
                { id: "transport-crit-20", label: "Did not properly apply appropriately sized cervical collar before ordering releaseof manual immobilization" },
                { id: "transport-crit-30", label: "Released or ordered relase of manual immobilization before it was maintained mechanically" },
                { id: "transport-crit-40", label: "Manipulated or moved patient excessively causing potential spinal compromise" },
                { id: "transport-crit-50", label: "Head immobilized to the device before device sufficiently secured to torso" },
                { id: "transport-crit-60", label: "Patient moves excessively up, down, left, or right on the device" },
                { id: "transport-crit-70", label: "Head immobilization allows for excessive movement" },
                { id: "transport-crit-80", label: "Upon completion of immobilization, head is not in a neutral, in-line position" },
                { id: "transport-crit-90", label: "Did not reassess motor, sensory, and circulatory functions in each extremity after immobilizing patient to the device" }
            ]
        }
    }
};

module.exports = data;
// export default data;