import { useRouter } from 'next/router'

export default function Card() {

    const router = useRouter()
  return (
    <div>
        <p>Post: {router.query.cardId}</p>
    </div>
  )
}
