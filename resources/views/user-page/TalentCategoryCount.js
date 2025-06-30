import React, { useEffect, useState } from "react";
import api from "../publicApi";

const TalentCategoryCount = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        try {
            const res = await api.get("/categories-with-talent-count");
            setCategories(res.data);
        } catch (err) {
            console.error("Failed to fetch categories:", err);
        }
    };
    return (
        <div>
            <div className="row row-gap-4 row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 align-items-center">
                {categories.map((cat) => (
                    <div className="col d-flex" key={cat.id}>
                        <div className="pop-category flex-fill" data-aos="flip-left">
                            <span><i className="ti ti-movie"></i></span>
                            <h6 className="mb-1">
                                <a href={`/talents/category/${cat.slug}`}>{cat.name}</a>
                            </h6>
                            <p>{cat.talents_count} Talents</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TalentCategoryCount