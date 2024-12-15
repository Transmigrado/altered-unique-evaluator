import { CardDbResponse } from "@/interfaces/card"
import { useAppSelector } from "@/lib/hooks"
import { RootState } from "@/lib/store"



export default function CardGrid() {

  const cards = useAppSelector<RootState, CardDbResponse[]>(state => state.cards.myCards)

  return (
    <ul role="list" className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
      {cards.map((card) => (
        <li key={card.uid} className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
          <a href={`/card/`}>
          <img alt="" src={card.card.imagePath} className="shrink-0 bg-gray-300 rounded-lg" />
          </a>
        </li>
      ))}
    </ul>
  )
}
