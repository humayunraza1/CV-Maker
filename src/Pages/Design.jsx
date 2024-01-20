import { useEffect, useState } from "react"
import ComponentsDrawer from "../components/ComponentsDrawer"
import DNavbar from "../components/DesignNav"
import EmptyPage from "../components/EmptyPage";

function Design() {
    const [isOpenComp, setOpenComp] = useState(false);
    const [onComp, addComp] = useState([])
    useEffect(() => {
        console.log('Added components: ', onComp)
    }, [onComp])
    return (
        <div>
            <DNavbar setOpenComp={setOpenComp} />
            <ComponentsDrawer isOpenComp={isOpenComp} setOpenComp={setOpenComp} onComp={onComp} addComp={addComp} />
            <div className="w-full flex justify-center">
                <EmptyPage onComp={onComp} />
            </div>
        </div>
    )
}

export default Design
