import { Mock } from "vitest";
import { fetchFruits } from "./getListFruits";

const URL = import.meta.env.VITE_URL;

global.fetch = vi.fn();

afterAll(() => {
    vi.clearAllMocks();
});
describe("InputSearch", () => {
    it("should add two numbers", async () => {
        const fakeData = {
            data: {
                description: "list",
                fruits: ["apple", "banana"],
            },
        };

        (fetch as Mock).mockResolvedValueOnce({
            json: () => Promise.resolve(fakeData),
        });

        const list = await fetchFruits(URL);
        expect(list).toEqual(fakeData);
        expect(fetch).toHaveBeenCalledWith(URL);
    });
});
