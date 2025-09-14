export default function Footer() {
    return (
        <footer className="bg-black text-white mt-20">
            <div className="container mx-auto px-6 py-10 grid md:grid-cols-3 gap-6">
                <div>
                    <h4 className="font-bold text-lg">Melipona</h4>
                    <p className="mt-2 text-sm">
                        Doğal arıcılık ürünleri, yerel üreticilerden.
                    </p>
                </div>
                <div>
                    <h5 className="font-semibold">Hızlı Linkler</h5>
                    <ul className="mt-2 text-sm space-y-1">
                        <li>Ürünler</li>
                        <li>Hakkımızda</li>
                        <li>SSS</li>
                    </ul>
                </div>
                <div>
                    <h5 className="font-semibold">İletişim</h5>
                    <p className="mt-2 text-sm">
                        example@mail.com
                        <br />
                        +90 5xx xxx xxxx
                    </p>
                </div>
            </div>
            <div className="text-center py-4 text-sm border-t border-slate-900">
                © {new Date().getFullYear()} Melipona — Tüm hakları saklıdır.
            </div>
        </footer>
    )
}
