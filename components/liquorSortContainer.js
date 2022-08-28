

export default function LiquorSortContainer({
    _style, handleUpdateReverseList, isReverse, genreLists, handleUpdateDisplayGenre, currentInd
}) {
    return (
        <div className={_style.categoryContainer}>
            <div className="flex just-between">
                <p className={_style.category__title}>カテゴリー一覧</p>
                <p className={_style.listReverseButton} onClick={()=>handleUpdateReverseList()}>
                    { !isReverse ? (
                        <span>新しい順に並び替える▲</span>
                        ) : (
                        <span>古い順に並び替える▼</span>
                    )}
                </p>
            </div>
            <ul className={_style.category}>
                {
                    genreLists.map( (item, index) => (
                        <li onClick={()=>handleUpdateDisplayGenre(index)} className={`${_style.category__item} ${currentInd === index ? _style.current : ""}`} key={item.name}>
                            <span className={_style.category__item__name}>{item.name}</span>
                            <span className={_style.category__length}>{item.list.length}</span>
                        </li>
                    ) )
                }
            </ul>
        </div>
    )
};