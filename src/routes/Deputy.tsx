import { LoaderFunction, useLoaderData } from "react-router-dom";
import { PartiesType, getDeputy } from "../lib";
import { DeputyType } from "../types";

export const loader: LoaderFunction = ({ params }) => {
    const deputy = getDeputy(params.party as PartiesType, params.deputyName!,);
    if (!deputy) throw new Error("Não encontrado")
    return { deputy,party:params.party };
}

export default function Deputy() {
    const { deputy,party } = useLoaderData() as { deputy: DeputyType,party:PartiesType }

    return (
        <div className="text-white p-4 mt-10 w-4/6  ">
            <img src={`/${party}.png`} alt={party} className="h-24  rounded-xl"/>

            <h1 className="text-3xl ">{deputy.name}</h1>
            {deputy.twitter && (
                <p>
                    <a
                        target="_blank"
                        href={`${deputy.twitter}`}
                    >
                        {deputy.twitter.substring(deputy.twitter.lastIndexOf("/") + 1)}
                    </a>
                </p>
            )}
            {deputy.instagram && (
                <p>
                    <a
                        target="_blank"
                        href={`${deputy.instagram}`}
                    >
                        {deputy.instagram.substring(deputy.instagram.lastIndexOf("/") + 1)}
                    </a>
                </p>
            )}

        </div>
    );
}