

async function DetailPage({ params }) {
    console.log(params)
    const currentUser = async (userId) => {
        try {

            const res = await fetch(`http://dummyjson.com/users/${userId}`)
            const data = await res.json()
            return data
        }
        catch (err) {
            console.log(err)
        }
    }

    const Data = await currentUser(params.details)
    return (
        <div className="min-h-screen">
            <h1>Detail of User : {Data.firstName + " " + Data.lastName}</h1>
            {Data &&
                <div className="py-2 cursor-pointer">
                    <h1>{Data.firstName}</h1>
                    <h1>{Data.lastName}</h1>
                    <h1>{Data.email}</h1>
                    <h1>{Data.phone}</h1>
                </div>}
        </div>
    );
}

export default DetailPage;