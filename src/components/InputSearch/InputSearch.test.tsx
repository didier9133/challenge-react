import { describe, expect, vi, Mock } from "vitest";
import Search from "./index";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import { act } from "react-dom/test-utils";

global.fetch = vi.fn();

beforeEach(() => {
    const fakeData = {
        data: {
            description: "list",
            fruits: ["apple", "banana"],
        },
    };

    (fetch as Mock).mockResolvedValueOnce({
        json: () => Promise.resolve(fakeData),
    });

    render(<Search />);
});

describe("InputSearch", () => {
    it("should render text placeholder ", () => {
        expect(screen.getByPlaceholderText(/Select an item/i)).toBeDefined();
    });
    it("should show list and render a text", async () => {
        const inputElement = screen.getByPlaceholderText(/Select an item/i);
        const btnElement = screen.getByTestId("drop");
        act(() => {
            fireEvent.click(btnElement);
            fireEvent.change(inputElement, { target: { value: "some" } });
        });

        expect(screen.getByText(/No items were found/i)).toBeDefined();
    });
});
