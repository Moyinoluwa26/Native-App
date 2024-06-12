import Link from "next/link";

function NotFound() {
    return (
        <div className="min-h-screen justify-between items-center">
            <h1 className="text-4xl text-center ">This Page doesn't exist</h1>
            <Link href="/" className="text-lg  text-center" >Go Back to Home</Link>
        </div>
    );
}

export default NotFound;