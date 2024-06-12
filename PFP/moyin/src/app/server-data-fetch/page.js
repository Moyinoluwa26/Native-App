
import Link from 'next/link';

//useEffect hook
//swr hook


async function SSfetch() {

    const fetcher = async () => {
        try {
            const res = await fetch('http://dummyjson.com/users')
            const data = await res.json()
            return data.users

        }
        catch (err) {
            console.log(err)

        }
    }

    const Data = await fetcher();


    return (
        <div className="min-h-screen  flex flex-col justify-between  items-center">
            <h1 className="text-xl pb-9">List of Users</h1>
            <ul>
                {Data && Data.length > 0 ? Data.map((user) =>
                    <li className="py-2 cursor-pointer">
                        <Link href={`/server-data-fetch/${user.id}`}>
                            {user.firstName}
                        </Link>
                    </li>) : null}
            </ul>
        </div>

    );
}

export default SSfetch;;