import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <nav className="nav-menu">
            <Link to="/">Beranda</Link> |{' '}
            <Link to="/koleksi">Koleksi</Link> |{' '}
            <Link to="/tambah">Tambah</Link> |{' '}
            <Link to="/statistik">Statistik</Link> |{' '}
            <Link to="/tentang">Tentang</Link> 
        </nav>
    );
}