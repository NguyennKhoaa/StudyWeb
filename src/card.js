import React, { useState } from "react";
import "./ListeningPage.css"; // Tạo file CSS như hướng dẫn
import backgroundImg from './Background.png';

const categories = [
    "Tất cả",
    "Công nghệ dễ hiểu",
    "Đào tạo",
    "Year in review",
    "Hướng dẫn",
    "Thông báo",
    "Phát hành",
    "Thành viên",
    "Hợp tác",
];

const cards = [
    {
        title: "Hướng Dẫn Tạo App Python Với Huggingface & Streamlit",
        date: "17/2/2025",
        readTime: "10 phút đọc",
        category: "Công nghệ dễ hiểu",
        description:
            "Khám phá cách tạo app python với Streamlit trên Huggingface, từ cài đặt môi trường đến triển khai ứng dụng của bạn.",
        image: backgroundImg,
    },
    {
        title: "Huggingface là gì? Cách chia sẻ app python phân tích...",
        date: "16/2/2025",
        readTime: "10 phút đọc",
        category: "Công nghệ dễ hiểu",
        description:
            "Khám phá Huggingface là gì, tìm hiểu các dịch vụ nổi bật như Datasets, Spaces, và cách chia sẻ app python dễ dàng.",
        image: backgroundImg,
    },
    {
        title: "Streamlit Là Gì? Tạo App Python Phân Tích Chứng...",
        date: "15/2/2025",
        readTime: "13 phút đọc",
        category: "Công nghệ dễ hiểu",
        description:
            "Khám phá Streamlit là gì và cách tạo app Streamlit với Python để trực quan hóa dữ liệu nhanh chóng.",
        image: backgroundImg,
    },
    {
        title: "Phát Hành Sản Phẩm Mới Tháng 2",
        date: "14/2/2025",
        readTime: "7 phút đọc",
        category: "Phát hành",
        description:
            "Cập nhật các tính năng mới được phát hành trong tháng 2, giúp cải thiện trải nghiệm người dùng.",
        image: backgroundImg,
    },
    {
        title: "Hướng Dẫn Sử Dụng Listening Page",
        date: "13/2/2025",
        readTime: "5 phút đọc",
        category: "Hướng dẫn",
        description:
            "Tìm hiểu cách sử dụng hiệu quả mục luyện nghe và cá nhân hóa lộ trình học của bạn.",
        image: backgroundImg,
    },
    {
        title: "Tổng Kết Năm 2024 - Những Con Số Ấn Tượng",
        date: "12/2/2025",
        readTime: "8 phút đọc",
        category: "Year in review",
        description:
            "Nhìn lại các cột mốc quan trọng trong năm 2024 và kế hoạch phát triển trong năm tới.",
        image: backgroundImg,
    },
];

export default function ListeningPage() {
    const [selectedCategory, setSelectedCategory] = useState("Tất cả");

    const filteredCards =
        selectedCategory === "Tất cả"
            ? cards
            : cards.filter((card) => card.category === selectedCategory);

    return (
        <div className="container">
            <div className="hero">
                <img src="https://picsum.photos/200/300" alt="Listening Hero" />
                <p>
                    Here you can find activities to practise your listening skills. Listening
                    will help you to <span>improve</span> your understanding of the language and your pronunciation.
                </p>
                <p>The learning materials in this section are written and organised by level...</p>
                <h2 style={{ marginTop: "32px", color: "#0070f3" }}>Choose a level</h2>
            </div>

            <div className="categories">
                <h3>DANH MỤC</h3>
                <div className="category-buttons">
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`category-button ${selectedCategory === category ? "active" : ""}`}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            <div className="cards fade-in" key={selectedCategory}>
                {filteredCards.slice(0, 6).map((card, index) => (
                    <div key={index} className="card">
                        <img src={card.image} alt={card.title} />
                        <div className="card-content">
                            <p className={`card-description ${card.category === "Công nghệ dễ hiểu" ? "tech-easy-text" : ""}`}>
                                {card.category}
                            </p>
                            <h4>{card.title}</h4>
                            <p>{card.description}</p>
                            <p className="card-meta">{card.date} • {card.readTime}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
