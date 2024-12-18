import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../../../styles/Website/NewsDetail.css";
import "../../../styles/Website/mainContent.css";
import Breadcrumb from "@/components/Breadcrumb";
import HighlightNews from "@/components/HighlightNews";
import { NewsType } from '@/types/INew';



const NewsDetails: React.FC = () => {
    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get('id')
    const [newsDetail, setNewsDetail] = useState<NewsType | null>(null);

    useEffect(() => {
        if (id) {
            axios
                .get(`http://doantotnghiep.test/api/information/${id}`)
                .then((response) => {
                    setNewsDetail(response.data.data);
                })
                .catch((err) => {
                    console.log(err);

                });
        }
    }, [id]);

    const breadcrumbItems = [
        { nhan: 'Trang Chủ', duongDan: '/' },
        { nhan: 'Tin Tức', duongDan: 'news' },
    ];

    return (
        <>
            <Breadcrumb items={breadcrumbItems} />

            <div className="newDetails-container">
                <div className="newDetails-container-title">
                    <h3>{newsDetail?.title}</h3>
                </div>
                <div className="newDetails-container-main">
                    {newsDetail && (
                        <>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: newsDetail.summary,
                                }}
                            />
                            <br />
                            <img
                                src={`http://doantotnghiep.test/storage/${newsDetail.thumbnail_image}`}
                                alt={newsDetail.title}
                            />
                            <h3>Di tích Đền Hạ Tuyên Quang</h3>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: newsDetail.content,
                                }}
                            />
                            <br />
                            <br />
                            <p><strong>Views:</strong> {newsDetail.views_count}</p>
                        </>
                    )}
                </div>
                <div className="mainContent-container">
                    <HighlightNews />
                </div>
            </div>
        </>
    );
};

export default NewsDetails;
