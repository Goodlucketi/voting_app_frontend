
const Modal = ({modal, setModal, confirmVote, cancelVote, selectedCandidate})=>{
    if(!modal) return null
    return (
        <div className="modal absolute top-[30%] w-11/12 md:w-4/12 md:left-[30%] bg-slate-50/95 shadow-md p-8 rounded-md border-2 z-100">
            <div className="modal-content text-center left">
                <h2 className="font-bold text-2xl mb-3">Confirm Vote</h2>
                <img src={selectedCandidate.candidatesLogo} alt="" className="p-2 w-5/12 mx-auto"/>
                <p className="text-xl">Are you sure you want to Vote <span className="text-red-700 font-bold text-2xl">{selectedCandidate.candidateParty}</span></p>
                <div className="modal-actions mt-5">
                    <button onClick={cancelVote} className="cancel-button py-3 px-4 bg-red-700 text-white text-lg mx-3 rounded-md">
                        Cancel
                    </button>
                    <button onClick={confirmVote} className="confirm-button py-3 px-4 bg-green-700 text-white text-lg mx-3 rounded-md">
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Modal