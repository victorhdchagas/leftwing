import { Link } from 'react-router-dom';
import { PartiesName, PartiesType } from '../../lib'

export default function Navbar() {
    const partiesName = PartiesName;
    const parties = Object.keys(partiesName) as PartiesType[];
    
  return (
    <div className="flex flex-row w-full justify-center gap-x-10 py-2">
        {parties.map((party) =>(
            <div key={party} className="rounded-lg bg-red-900 opacity-20 hover:opacity-100  h-16 w-16 flex justify-center items-center cursor-pointer transition-all">
                <Link to={`/${party}`}><img src={`${party}.png`} alt={partiesName[party]}/></Link>
            </div>
        ))}
        </div>
  )
}
