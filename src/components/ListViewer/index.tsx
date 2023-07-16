import { Link } from "react-router-dom"
import { DeputyType } from "../../types"
export default function ListViewer({ result, name, party }: { result: DeputyType[], name: string, party: string }) {
    return (
        <>
            <li className={`overflow-hidden text-center w-full bg-red-900 font-extrabold  h-10 p-2`}>
                {name}
            </li>
            {result.map(deputy => (
                <Link to={`/${party}/${deputy.name}`} className={` hover:bg-red-900 `}><li className={`overflow-hidden font-semibold hover:bg-red-900`} key={deputy.name}>
                    {deputy.name}
                </li>
                </Link>
            ))}
        </>

    )
}
