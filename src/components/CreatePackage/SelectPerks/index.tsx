
interface PerksProps {
    selected: string[], // or Perk[] if you have a Perk interface
    onChange: any;
}

const Perks = () => {
    return (
        <div className="flex flex-col gap-2 mt-3">
            <h1>Add Perks :</h1>
            <div className="flex gap-10 flex-wrap">
                <label className="flex gap-2 items-center">
                    <input type="checkbox" className="w-5 h-5" />
                    <span>24 x 7 Support</span>
                </label>
                <label className="flex gap-2 items-center">
                    <input type="checkbox" className="w-5 h-5" />
                    <span>24 x 7 Support</span>
                </label>
                <label className="flex gap-2 items-center">
                    <input type="checkbox" className="w-5 h-5" />
                    <span>24 x 7 Support</span>
                </label>
            </div>
        </div>
    )
}

export default Perks;