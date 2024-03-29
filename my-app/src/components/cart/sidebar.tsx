'use client'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components//ui/sheet"
import { Button } from "@/components/ui/button"
import { MenuIcon } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { useCartStore } from "@/stores/cart-store"
import { CartItem } from "./item"
import { useState } from "react"
import { ChecOutDialog } from "../checkout/dialog"

export const Sidebar = () => {
    const [checkOutOpen, setCheckOutOpen] = useState(false);
    const { cart } = useCartStore(state => state);

    let subtotal = 0;
    for(let item of cart) {
        subtotal += item.quantity * item.product.price
    }

    return(
        <Sheet>
            <SheetTrigger asChild>
                <Button className="relative">
                    <MenuIcon/>
                    {
                        cart.length > 0 &&
                            <div className="absolute size-3 bg-red-600 rounded-full -right-1 -top-1"></div>
                    }
                </Button>
            </SheetTrigger>

            <SheetContent>
                <SheetHeader>
                    <SheetTitle>
                        Meu Carrinho
                    </SheetTitle>
                </SheetHeader>

                <div className="flex flex-col gap-5 my-3">
                    {cart.map(item => (
                        <CartItem key={item.product.id} item={item}/>
                    ))}
                </div>
                <Separator className="my-4"/>
                <div className="flex justify-between items-center text-xs">
                    <div>Subtotal:</div>
                    <div>R$ {subtotal.toFixed(2)}</div>
                </div>
                <Separator className="my-4"/>
                <div className="text-center">
                    <Button
                        onClick={()=>setCheckOutOpen(true)}
                        disabled={cart.length === 0}
                        >
                            Finalizar Compra
                    </Button>
                </div>

                <ChecOutDialog
                    open={checkOutOpen}
                    onOpenChange={setCheckOutOpen}
                />
            </SheetContent>
        </Sheet>
    )
}