// Buat tujuh berkas ini di src/pages/ dengan isi sementara seperti ini.
// Isinya diganti satu per satu saat mengikuti panduan setiap halaman.
import useKoleksi from '../hooks/useKoleksi.js'

export default function Tambah() {
  const {tambah} = useKoleksi();
  
  return (
    <div>
      <h1>Tambah</h1>
    </div>
  );

}