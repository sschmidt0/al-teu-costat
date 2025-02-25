import { formatDateTimeActivityCard } from "./date";
import { daysOfWeek, months } from "../constants/date";

describe("date", () => {
  describe("formatDateTimeActivityCard", () => {
    it("should format the date and time correctly for a given date", () => {
      const date = new Date(2023, 0, 1, 14, 30); // January 1, 2023, 14:30
      const formattedDate = formatDateTimeActivityCard(date);
      expect(formattedDate).toBe("dg., gen 1 • 14:30");
    });

    it("should format the date and time correctly for another date", () => {
      const date = new Date(2023, 11, 31, 23, 59); // December 31, 2023, 23:59
      const formattedDate = formatDateTimeActivityCard(date);
      expect(formattedDate).toBe("dg., des 31 • 23:59");
    });

    it("should pad single digit hours and minutes with leading zeros", () => {
      const date = new Date(2023, 5, 15, 9, 5); // June 15, 2023, 09:05
      const formattedDate = formatDateTimeActivityCard(date);
      expect(formattedDate).toBe("dj., juny 15 • 09:05");
    });

    it("should handle edge case of start of the year", () => {
      const date = new Date(2023, 0, 1, 0, 0); // January 1, 2023, 00:00
      const formattedDate = formatDateTimeActivityCard(date);
      expect(formattedDate).toBe("dg., gen 1 • 00:00");
    });

    it("should handle edge case of end of the year", () => {
      const date = new Date(2023, 11, 31, 23, 59); // December 31, 2023, 23:59
      const formattedDate = formatDateTimeActivityCard(date);
      expect(formattedDate).toBe("dg., des 31 • 23:59");
    });
  });
});
