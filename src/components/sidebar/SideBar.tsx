import React from "react";
import { ProductBrand } from "../../models/product-brands";

type Props = {
    items: ProductBrand[];
    activeItem: ProductBrand | null;
    onItemSelect: (item: ProductBrand | null) => void;
}

const SideBar: React.FC<Props> = (props) => {

    const handleItemClick = (item: ProductBrand | null) => {
        props.onItemSelect(item);
    };

    return (
        <div className="flex flex-col gap-2 w-64 p-2 border-t-2 border-slate-300 text-xs md:text-base">
            <div
                className={`p-2 cursor-pointer ${
                    props.activeItem === null 
                        ? "bg-red-400 text-white rounded-md" 
                        : ""
                }`}
                onClick={() => handleItemClick(null)}
            >
                Todos
            </div>
            {props.items.map((item, i) => {
                return (
                    <div
                        key={i}
                        className={`p-2 cursor-pointer ${
                            props.activeItem === item 
                                ? "bg-red-400 text-white rounded-md"
                                : ""
                        }`}
                        onClick={() => handleItemClick(item)}
                    >
                        {item.title}
                    </div>
                )
            })}
        </div>
    )
}

export default SideBar;
