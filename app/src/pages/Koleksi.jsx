// Buat tujuh berkas ini di src/pages/ dengan isi sementara seperti ini.
// Isinya diganti satu per satu saat mengikuti panduan setiap halaman.
import useKoleksi from '../hooks/useKoleksi.js'

export default function Koleksi() {
  const { items, hapus } = useKoleksi();
  return <h1>Koleksi</h1>
}