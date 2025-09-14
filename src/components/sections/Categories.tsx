import HexagonGrid from '../HexagonGrid'

export default function Categories() {
    const categories = [
        {id: 1, name: 'Makina ve Kazanlar'},
        {id: 2, name: 'Bal İşleme ve Dolum'},
        {id: 3, name: 'Bal Eritme ve Dolum'},
        {id: 4, name: 'Manuel Bal Süzme Makinaları'},
        {id: 5, name: 'Motorlu Bal Süzme Makinaları'},
        {id: 6, name: 'Dinlendirme Makinaları'},
        {id: 7, name: 'Koruyucu Kıyafetler'},
        {id: 8, name: 'Arıcı Ekipmanları'},
        {id: 9, name: 'Ana Arı Yetiştirme'},
        {id: 10, name: 'Arıcı Körükleri'},
        {id: 11, name: 'Polen Toplama/Kurutma Makinaları'},
        {id: 12, name: 'Bal Süzgeçleri'}
    ]

    type Item = {
        id: number
        name?: string
        hexSize?: number
    }

    function addRandomEmptyHex(items: Item[], emptyCount: number = 20): Item[] {
        const newItems = [...items]
        let nextId = Math.max(...newItems.map(i => i.id)) + 1

        for (let i = 0; i < emptyCount; i++) {
            const index = Math.floor(Math.random() * (newItems.length + 1))
            newItems.splice(index, 0, {id: nextId++, name: undefined})
        }

        return newItems
    }

    const itemsWithEmpty = addRandomEmptyHex(categories, 8)

    return (
        <div className="container mx-auto hidden md:block">
            <HexagonGrid items={itemsWithEmpty} hexSize={150} />
        </div>
    )
}
