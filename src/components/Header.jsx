import {FaGalacticRepublic} from "react-icons/fa"
import {BiDoorOpen} from "react-icons/bi"

export default function Header(){
  return (
    <header>
        <div className="logo">
          <FaGalacticRepublic size={24} />
            <div>SyawalJr</div>
        </div>
        <button>Login <BiDoorOpen size={18} style={{textAlign:"center"}} /></button>
    </header>
  );
}