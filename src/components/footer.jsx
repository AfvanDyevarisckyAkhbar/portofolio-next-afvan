export default function Footer(){
    const tahun = new Date(). getFullYear();

return(
    <footer className="mt-auto bg-footer p-6 text-center text-latar">
        <p>&copy; {tahun} Afvan Dyevariscky Akhbar. Dibuat dengan Next.js di kelas Industri UBIG.</p>
    </footer>
);
}