import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

const Accordion = ({faqs})=>{
    const[activeIndex, setActiveIndex] = useState(null)

    const toggleAccordion = (index)=>{
        setActiveIndex(activeIndex===index ? null : index)
    }
    return(
        <main className="p-4">
            {faqs.map((faq, index)=>(
                <div key={index} className="shadow-md p-4">
                    <div className="question flex justify-between" onClick={()=>toggleAccordion(index)}>
                        <h3>{faq.question}</h3>
                        <button>                    
                            {activeIndex==index ?<FontAwesomeIcon icon={faMinus} className="text-sm" /> : <FontAwesomeIcon icon={faPlus} className="text-sm" /> }
                        </button>
                    </div>
                    {activeIndex==index && (
                        <div className="answer p-4">
                            {faq.answer}
                        </div>
                    )}
                </div>
            ))}
        </main>
    )
}

export default Accordion
