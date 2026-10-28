import {useParams} from 'react-router-dom';
import {useKoleksi} from '../hooks/useKoleksi.js';

// Buat tujuh berkas ini di src/pages/ dengan isi sementara seperti ini.
// Isinya diganti satu per satu saat mengikuti panduan setiap halaman.
export default function Detail() {
  const {id} = useParams();
  const {items, hapus} = useKoleksi();
  return (
    <div>
      <h1>Detail ID: {id}</h1>
    </div>
  );
}