import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const Feature = ({title, description, icon}) => {
    return ( 
        <main>
            <div className="feature text-slate-50 flex flex-col items center shadow-md px-6 py-12 h-60 relative border rounded-lg">
                <FontAwesomeIcon icon={icon} className="text-4xl mb-5 absolute -top-6 left-10 " />
                <h3 className="font-bold text-2xl mb-5">{title}</h3>
                <p className="text-lg">{description}</p>
            </div>
        </main>
     );
}
 
export default Feature;