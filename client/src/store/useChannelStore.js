import { toast } from "react-toastify";
import { create } from "zustand"
import { axiosInstance } from "../lib/axios";

export const useChannelStore = create((set, get) => ({
    channels: [],
    categories: [],
    isChannelLoading: false,

    getChannelData: async () => {

        set({ isChannelLoading: true });
        const odiaChannels = [
            { category: "devotional", name: "Alankar TV", ip: "" },
            { category: "devotional", name: "Prarthana TV", ip: "" },

            { category: "music", name: "Tarang Music", ip: "" },

            { category: "entertainment", name: "Nandighosha TV", ip: "" },
            { category: "entertainment", name: "Tarang TV", ip: "" },
            { category: "entertainment", name: "Star Kiran", ip: "" },

            { category: "news", name: "Kalinga TV", ip: "" },
            { category: "news", name: "Naxatra News", ip: "" },
            { category: "news", name: "Prameya News7", ip: "" },
            { category: "news", name: "Odisha TV", ip: "" },
            { category: "news", name: "Kanak News", ip: "" },

            { category: "government", name: "DD Odia", ip: "" }
        ];
        try {
            const res = await axiosInstance.get("/streams.json");
            const formattedChannels = odiaChannels.map(channel => {
                const matched = res.data.find(
                    stream => stream.title && stream.title.toLowerCase() === channel.name.toLowerCase()
                );
                return { ...channel, ip: matched ? matched.url : "" };
            });

            set({ channels: formattedChannels });
            get().getCategoriesData();

        } catch (error) {
            toast.error(error);
        } finally {
            set({ isChannelLoading: false }); 
        }

    },
    getCategoriesData: async () => {
        const { channels } = get();
        const uniqueCategories = [
            ...new Set(channels.map(ch => ch.category))
        ]
        console.log(uniqueCategories)
        set({ categories: uniqueCategories })

    },


}))