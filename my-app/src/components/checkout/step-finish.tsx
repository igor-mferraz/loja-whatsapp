import { useCheckOutStore } from "@/stores/checkout-store"
import { Button } from "../ui/button"
import Link from "next/link"

export const StepFinish = () => {

    const { name } = useCheckOutStore(state => state)
    

    const message = 'oi'
    const link = `https://wa.me//${process.env.NEXT_PUBLIC_PHONE}?text=${encodeURI(message)}`

    return(
        <div className="text-center flex flex-col gap-5">
            <p>Pedido Realizado, <strong>{name}</strong></p>
            <p>Acompanhe seu pedido pelo WhatsApp</p>
            <Button>
                <Link target="_blank" href={link}>Acompanhar</Link>
            </Button>
        </div>
    )
}