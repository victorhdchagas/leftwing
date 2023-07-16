import { LoaderFunction, Outlet, useLoaderData } from "react-router-dom";
import ListViewer from "../components/ListViewer";
import { PartiesName, PartiesType, getPartiesData } from "../lib";


export const partyLoader: LoaderFunction = ({ params }) => {
    const party = getPartiesData(params.party as PartiesType);

    if (!party) throw new Error("Não encontrado")
    return { party: { data: party, tag: params.party } };
}

export default function Party() {
    const _data = useLoaderData() as {
        party: {
            data: {
                name: string;
                instagram: string;
                twitter: string;
            }[], tag: PartiesType
        }
    }
    if (!_data) return (<h1>no data</h1>)
    const { data: party, tag } = _data.party
    return (
        <div className="flex flex-row justify-between  items-start ">
            <div id="sidebar" className="w-1/5    ">
                <h1 className="text-white text-xl font-semibold">Lista de Deputados de esquerda</h1>
                <nav className="bg-red-800 text-slate-50 overflow-auto h-[calc(100vh-110px)]">
                    <ul>
                        <ListViewer name={PartiesName[tag]} result={party} party={tag} />
                    </ul>
                </nav>
            </div>
            <div id="detail" className="overflow-hidden w-4/5 flex flex-row justify-center">
                <Outlet />

            </div>
        </div>
    );
}