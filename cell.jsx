const Cell=({id,cell,setCells,go,setGo,cells,winningMessage})=>{
    const handelClick = (e)=>{

        const taken = e.target.firstChild.classList.contains("circle") || e.target.firstChild.classList.contains("cross")
        if(!taken){
          if(go === "circle"){
              e.target.firstChild.classList.add("circle")
              handelCells("circle")
              setGo("cross")
          }
            if(go === "cross"){
                e.target.firstChild.classList.add("cross")
                handelCells("cross")
                setGo("circle")
            }
        }
    }
    const handelCells=(className)=>{
        const nextCell=cells.map((cell,index)=>{
            if (index === id){
                return className
            }else{
                return cell
            }
        })
        setCells(nextCell)
    }
    return(
        <>
            <div className={"square"} id={id} onClick={!winningMessage && handelClick}>
                <div className={cell}></div>

            </div>
        </>
    )
}
export {Cell}