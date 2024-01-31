
import notFound from "../../../public/not_found.gif";
import Image from 'next/image';
import './page.css'
export default async function about() {
    return (
        <>
            <div className="not_found">
                <Image src={notFound} alt="not_found" />
                <h1 className="text">Page Not Found</h1>
            </div>
        </>
    )
}

