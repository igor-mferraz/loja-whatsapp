import { Tabs, TabsList, TabsTrigger,TabsContent } from "@/components/ui/tabs"

export const ProductsTab = () => {
    return(
        <Tabs defaultValue="tab1">
            <TabsList className="flex">
                <TabsTrigger className="flex-1" value="tab1">
                    Tab 1
                </TabsTrigger>
                <TabsTrigger className="flex-1" value="tab2">
                    Tab 2
                </TabsTrigger>
            </TabsList>
            <TabsContent value="tab1" className="mt-6">
                tb1
            </TabsContent>
            <TabsContent value="tab2" className="mt-6">
                tb2
            </TabsContent>

        </Tabs>
    )
}