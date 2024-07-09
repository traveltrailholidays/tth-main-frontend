
interface CategoryProps {
    selected: string[],
    onChange: any;
}


const Category = () => {
    return (
        <div className="flex flex-col gap-2 mt-3">
            <h1>Categories :</h1>
            <div className="flex gap-10 flex-wrap">
                <label className="flex gap-2 items-center">
                    <input type="checkbox" className="w-5 h-5" />
                    <span>Romantic</span>
                </label>
                <label className="flex gap-2 items-center">
                    <input type="checkbox" className="w-5 h-5" />
                    <span>Religious</span>
                </label>
                <label className="flex gap-2 items-center">
                    <input type="checkbox" className="w-5 h-5" />
                    <span>Adventure</span>
                </label>
            </div>
        </div>
    )
}

export default Category;