import Accordion from "./Accordion";

const Faq = () => {
    const faqs = [
        {
            question: "What is this app for?",
            answer: "This app allows registered voters to securely cast their votes in elections, view real-time results, and access their voting history."
        },
        {
            question: "Is my vote anonymous?",
            answer: "Yes, your vote is completely anonymous. The app securely stores your participation record without linking it to your vote choice."
        },
        {
            question: "How do I vote using the app?",
            answer: "Log in with your NIN and BVN, select the election you’re participating in, choose your candidate, and cast your vote."
        },
        {
            question: "What personal information is required to use the app?",
            answer: "You will need your NIN and BVN for secure authentication. This data is only used for identity verification and is not shared."
        },
        {
            question: "How will I know my vote was counted?",
            answer: "After voting, you’ll receive a confirmation, and your participation will be reflected in your voting history."
        }
    ]
    return ( 
        <main className="w-11/12 mx-auto">
            <h2 className="font-bold text-2xl text-green-700 md:text-3xl text-center lg:text-3xl">Frequently Asked Questions</h2>
            <Accordion faqs = {faqs} />
        </main>
     );
}
 
export default Faq;