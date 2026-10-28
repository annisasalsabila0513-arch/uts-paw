// Buat tujuh berkas ini di src/pages/ dengan isi sementara seperti ini.
// Isinya diganti satu per satu saat mengikuti panduan setiap halaman.
import {useNavigate} from 'react-router-dom';
import useKoleksi from '../hooks/useKoleksi.js';


export default function Tambah() {
  const navigate = useNavigate();
  const {tambah} = useKoleksi();
  const handleSubmit = (e)=>{
    e.preventDefault();
    tambah({judul,kategori,penulis,tahunTerbit})
    navigate('/koleksi');
  };
  
  return (
    <form onSubmit={handleSubmit}>
      {/*Input form*/}
    </form>
  );

}