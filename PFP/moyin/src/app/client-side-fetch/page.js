
'use client';

//import { useState, useEffect } from "react";

function Clfetch() {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            setLoading(true)
            const res = await fetch("http://dummyjson.com/users")
            const data = await res.json()
            if (data.users) {
                setData(data.users)
                setLoading(false)
            }

        } catch (err) {
            console.log(err)
            setData([])
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            {loading ? <h1 className="min-h-screen text-4xl items-center justify-center flex flex-col">Loading...</h1> :
                <div className="flex-col flex items-center justify-between min-h-screen">
                    <h1 className="my-7 ">This are the List of clients from the Client Side </h1>
                    {data.map((user) => (
                        <div key={user.id}>

                            <h3 className="py-2">{user.firstName}</h3>

                        </div>

                    ))}
                </div>
            }
        </div>


    );
}

export default Clfetch;