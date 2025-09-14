export default function Blog() {
    const posts = [
        {
            id: 1,
            title: 'Arı Bakımı 101',
            excerpt: 'Yeni başlayanlar için arı kovanı bakımı ve püf noktaları.'
        },
        {
            id: 2,
            title: 'Balın Faydaları',
            excerpt: 'Farklı bal türleri ve sağlık etkileri.'
        },
        {
            id: 3,
            title: 'Mevsime Göre Arıcılık',
            excerpt: 'Kovan hazırlığı ve çiçek dönemleri.'
        }
    ]

    return (
        <section id="blog" className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-semibold">Son Blog Yazıları</h2>
            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map(p => (
                    <article
                        key={p.id}
                        className="bg-white rounded-lg p-4 shadow">
                        <h3 className="font-semibold">{p.title}</h3>
                        <p className="text-sm text-slate-600 mt-2">
                            {p.excerpt}
                        </p>
                        <a className="mt-3 inline-block text-amber-600">
                            Devamını Oku →
                        </a>
                    </article>
                ))}
            </div>
        </section>
    )
}
