import { useState } from 'react';
import Header from './components/Header';
import Galaxy from './components/Galaxy';
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlinePlus } from "react-icons/ai";
import { BsArrowsFullscreen } from "react-icons/bs";
import { HiOutlineArrowsPointingIn } from "react-icons/hi2"

export default function App() {
  const [galaxies, setGalaxies] = useState([
    {
      id: 1,
      name: "Magellan",
      diameter: 14000
    },
    {
      id: 2,
      name: "Mata Hitam",
      diameter: 52962
    },
    {
      id: 3,
      name: "Sombrero",
      diameter: 61000
    },
    {
      id: 4,
      name: "Bima Sakti",
      diameter: 100000
    }
  ]);

  const [newGalaxy, setNewGalaxy] = useState({
    id: galaxies.length + 1,
    name: "",
    diameter: 0
  });

  const [EditById, setEditById] = useState(1);

  const addGalaxyStart = (e) => {
    e.preventDefault();
    setGalaxies([newGalaxy, ...galaxies]);
    setNewGalaxy({ id: [...galaxies, newGalaxy].length + 1, name: "", diameter: 0 });
  }

  const addGalaxyEnd = (e) => {
    e.preventDefault();
    setGalaxies([...galaxies, newGalaxy]);
    setNewGalaxy({ id: [...galaxies, newGalaxy].length + 1, nama: "", diameter: 0 });
  }

  const EditNameGalaxy = (e) => {
    galaxies.map((x) => {
      x.id == EditById ?
        x.name = e.target.value : galaxies;
      setGalaxies([...galaxies]);
    });
  }

  const EditPlusDiameterGalaxy = (e) => {
    e.preventDefault();
    setGalaxies(
      galaxies.map((galaxy) =>
        galaxy.id == EditById ?
          { ...galaxy, diameter: galaxy.diameter + 1 } : galaxy)
    );
  }

  const EditMinDiameterGalaxy = (e) => {
    e.preventDefault();
    setGalaxies(
      galaxies.map((galaxy) =>
        galaxy.id == EditById ?
          { ...galaxy, diameter: galaxy.diameter + 1 } : galaxy)
    );
  }

  const DeleteByIndexGalaxy = (e) => {
    e.preventDefault();
    setGalaxies(galaxies.filter((galaxy) => galaxy.id != EditById));
  }

  return (
    <div>
      <Header />
      <main className="container">
        {/* Untuk menampilkan objek galaxy */}
        <div className="show-galaxy">
          {
            galaxies.map((galaxie, dex) => (
              <Galaxy key={dex}
                id={galaxie.id}
                name={galaxie.name}
                diameter={galaxie.diameter}
              />
            ))
          }
        </div>
        {/* Untuk menambahkan data pada objek */}
        <form className="form-galaxy">
          <h1>Tambah Galaxy...</h1>
          <label>
            ID :
            <input type="number" value={newGalaxy.id}
              onChange={(e) => setNewGalaxy({ ...newGalaxy, id: e.target.value })}
            />
          </label>
          <label >
            Nama :
            <input type="text" value={newGalaxy.name}
              onChange={(e) => setNewGalaxy({ ...newGalaxy, name: e.target.value })}
            />
          </label>
          <label >
            Diameter :
            <input type="number" value={newGalaxy.diameter}
              onChange={(e) => setNewGalaxy({ ...newGalaxy, diameter: parseInt(e.target.value) })}
            />
          </label>
          <div className="add-content">
            <button onClick={addGalaxyStart}>
              <AiOutlinePlus size={18} />  Depan
            </button>
            <button onClick={addGalaxyEnd}>
              <AiOutlinePlus size={16} />  Belakang
            </button>
          </div>
          {/* Untuk mengedit ataupun menghapus data berdasarkan id */}
        </form>
        <form className="form-galaxy">
          <h3>Edit/Hapus Berdasarkan ID</h3>
          <label>
            ID :
            <input type="number" value={EditById} onChange={(e) => setEditById(e.target.value)} />
          </label>
          <label>
            Nama :
            <input
              value={galaxies.find((x) => x.id == EditById)?.name ?? ""}
              onChange={EditNameGalaxy} />
          </label>
          <label >
            Diameter :
            <div className="diameter">
              <button onClick={EditPlusDiameterGalaxy}
              > <BsArrowsFullscreen size={14} /> Perbesar
              </button>
              <button onClick={EditMinDiameterGalaxy}><HiOutlineArrowsPointingIn size={18} /> Perkecil</button>
            </div>
          </label>
          <button onClick={DeleteByIndexGalaxy} > <RiDeleteBin6Line size={16} />  Hapus
          </button>
        </form>
        <div className="delete-content">
          <h2>Hapus</h2>
          <button onClick={() => setGalaxies(galaxies.slice(1))}><RiDeleteBin6Line size={16} />  Depan</button>
          <button onClick={() => setGalaxies(galaxies.slice(0, -1))}><RiDeleteBin6Line size={16} /> Belakang</button>
          <div className="all-delete-content">
            <button onClick={(e) => { e.preventDefault(); setGalaxies([]) }}><RiDeleteBin6Line size={16} />  Semua</button>
          </div>
        </div>
      </main>
      <form></form>
      <footer>&copy; 2023 Syawaluddin</footer>
    </div>
  );
}
