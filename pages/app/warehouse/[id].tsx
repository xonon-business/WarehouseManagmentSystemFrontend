import { useRouter } from 'next/router'


export default function Warehouse() {
    let router = useRouter()
    const { id } = router.query
  return (
      <>
        <h1>Warehouse: {id?.toString()}</h1>
      </>
  )  
}