import Accordion from "./Accordion"
import triangle_down from "./assets/triangle-down.svg"

function App() {
  return (
    <div className="bg-neutral-300 w-full h-screen">
      <div className="h-full pt-20 bg-neutral-700 flex flex-col items-center container mx-auto">
        <Accordion
          controllerElement={(isExpanded) => (
            <div className="flex flex-row bg-gradient-to-tr from-red-400 to-orange-400 p-10 rounded-lg cursor-pointer">
              {isExpanded ? "Hide" : "Show"} Content
              <img src={triangle_down} alt="triangle" className={isExpanded ? "rotate-180" : ""} />
            </div>
          )}
          contentDescription="list"
        >
          <ul className="flex flex-col gap-1 bg-slate-300 w-40 px-4">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </Accordion>
      </div>
    </div>
  )
}

export default App
