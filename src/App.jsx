import MenuExample from "./MenuExample"
import SubmenuExample from "./SubmenuExample"

function App() {
    return (
        <div className="bg-neutral-300 w-full h-screen">
            <div className="h-full pt-20 bg-neutral-700 flex flex-row gap-10 justify-center container mx-auto">
                <div>
                    <p className="text-white">Menu Example:</p>
                    <MenuExample />
                </div>
                <div>
                    <p className="text-white">Submenu Example:</p>
                    <SubmenuExample />
                </div>
            </div>
        </div>
    )
}

export default App
