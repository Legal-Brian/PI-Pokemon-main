import style from "./Sort.module.css"

const Sort = ({ allTypes, handlerClick, handleFilterType, handleFilterCreated, handleOrderedByName, handleOrderedByAttack, handleOrderedById }) => {

    return(
        <div className={style.filters}>
            <button className={style.restore} onClick={e=>{handlerClick(e)}}>Restore</button>
            <select  className={style.select} onChange={e => handleOrderedById(e)}>
                <option value="ascendant">Minor Id</option>
                <option value="descendant">Biggest Id</option>
            </select>
            <select  className={style.select} onChange={e => handleOrderedByName(e)}>
                <option value="ascendant">Ascendant</option>
                <option value="descendant">Descendant</option>
            </select>
            <select  className={style.select} onChange={e => handleOrderedByAttack(e)}>
                <option value="ascendant">Biggest Attack</option>
                <option value="descendant">Minor Attack</option>
            </select>
            <select  className={style.select} onChange={e => handleFilterType(e)}>
                <option value="all">All</option>
                {allTypes?.map((ele) => (
                <option value={ele.name}>{ele.name[0].toUpperCase()+ele.name.slice(1)}</option>
                ))}
            </select>
            <select  className={style.select} onChange={e => handleFilterCreated(e)}>
                <option value="all">All</option>
                <option value="created">Created</option>
                <option value="existing">Existing</option>
            </select>
        </div>
    )
}

export default Sort;