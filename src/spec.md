# Specification

## Summary
**Goal:** Add a decorated, accessible personal-note pop-up modal in the Closing section of the Rose Day page, with variant-specific copy.

**Planned changes:**
- In the Closing section (`#closing`), add a prominent button (e.g., “One more thing, Ira…”) that opens a themed modal/pop-up.
- Implement an accessible modal behavior: focus moves into the modal on open, stays trapped while open, closes via a close button and Escape, and returns focus to the trigger button on close.
- Add a rose-themed decorative frame/background image to the modal and style it to match the existing rose/pink/cream palette.
- Extend `frontend/src/content/roseDayContent.ts` so `closing` includes pop-up trigger label and pop-up body text for both `classic` and `emotional` variants.
- Render pop-up copy based on `?variant=` selection (default remains emotional), with the emotional variant using the exact line: “Ira baby, please never leave me — I can’t live without you. You are my whole world.”

**User-visible outcome:** In the last Closing section, the user can click a button to open a romantic, rose-themed pop-up note (with copy that changes based on the selected variant) and dismiss it accessibly via close controls or Escape.
