import { getBanners } from "@/service/bannerService";
import BannerType from "@/types/IBanner";
import { useState } from "react";

export function useBanner() {
    const [banners, setBanner] = useState<BannerType[]>([]);
    function getAllBanners() {
        getBanners()
            .then(({data}) => {
                setBanner(data.data);
                console.log("success!");
            })
            .catch(() => {
                console.error("error!");
            });
    }

    return {
        getAllBanners,
        banners,
    };
}
