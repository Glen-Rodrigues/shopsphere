# Copilot Instructions

## Product Requirements Document

# Vibe Coding PRD

## 1. Product Overview

**Purpose**
A client-side prototype web app for browsing and ordering fruit products.

**Problem Statement**
Online shoppers need a simple product browsing and checkout experience that demonstrates core ecommerce flows without backend complexity.

**Value Proposition**
This prototype shows how users can explore products, view details, manage a cart, and complete a checkout summary using only HTML, CSS, and JavaScript.

## 2. Target Audience

- Online shoppers interested in ordering fruit products.
- Users on desktop and phone devices.
- Users who want a lightweight, easy-to-use prototype for product discovery and ordering.

## 3. Scope & Goals

**In scope**

- Static client-side web app only.
- Pages: `Products`, `ProductDetails`, `ShoppingCart`, `Checkout`.
- Basic navigation between pages.
- Sample dataset of 10 fruit products.
- Browser-memory state management.
- Basic visual styling with adaptive scaling.

**Out of scope**

- Backend functionality.
- User authentication.
- Payment processing.
- Database integration.

## 4. Core Pages

### Products

- Displays a product list with name, price per unit, and emoji image.
- Provides quantity selection for each product.
- Allows users to add selected items to the shopping cart.
- Includes a search/filter box to find products by name.
- Shows product descriptions in the list view.
- Displays in-app notification when items are added to cart.

### ShoppingCart

- Displays products added to the cart.
- Shows product name, quantity, and total price per item.
- Supports updating quantity and removing products from the cart.

### Checkout

- Displays a purchase summary with product name, quantity, and price.
- Clearly shows the total order price.
- Includes a `Process Order` button to complete the prototype flow.

### Success / Thank You Page

- Displays after an order is successfully processed.
- Shows order summary with item count and total amount.
- Includes a confirmation message and "Continue Shopping" button.
- Clears cart and resets search when returning to products.

## 5. Navigation / User Flows

**Navigation**

- A left-side menu links to `Products`, `ShoppingCart`, and `Checkout`.
- The navigation bar remains positioned on the left side for all device types and sizes.
- Each navigation item displays an emoji icon:
  - 🍎 Products
  - 🛒 ShoppingCart (with cart item count badge)
  - ✅ Checkout
- On wider screens (above 600px), the nav displays full labels alongside icons.
- On narrower screens (below 600px), the nav collapses to display only abbreviations and icons centered horizontally, maintaining its left position.

**User flow examples**

1. Search/browse products → select quantity → add to cart (notification appears) → view cart → checkout → see thank you page.
2. Browse products → add quantity → add to cart → continue shopping → add more items → proceed to checkout → process order → success confirmation.

## 6. Key Features

- A sample dataset of 10 fruit products.
- Responsive UI that scales automatically for desktop and phone screens.
- Left-side navigation bar that remains in a fixed position for all device sizes, with responsive label display.
- Navigation emoji icons for each page (🍎 Products, 🛒 ShoppingCart with cart counter badge, ✅ Checkout).
- Navigation emojis are centered horizontally in the collapsed mobile view (below 600px).
- Emoji-based product images for a simple visual design.
- Product list with add-to-cart controls.
- Product search and filter functionality on the Products page.
- Product descriptions displayed in the list view.
- In-app notification toasts when items are added to cart.
- Cart counter badge on the navigation bar showing number of items.
- Cart item quantity updates and remove-item support.
- Checkout summary with total price display.
- Order confirmation page with order summary and total.
- Auto-clearing of cart and search filters after successful order.

## 7. Sample Dataset Requirements

- 10 fruit products.
- Product fields:
  - `id`
  - `name`
  - `description`
  - `pricePerUnit`
  - `unit` (item, ounce, pound, etc.)
  - `image` emoji

**Example product types**

- Apple
- Banana
- Grapes
- Orange
- Strawberry
- Pineapple
- Watermelon
- Kiwi
- Mango
- Blueberry

## 8. UI / Styling Requirements

- Clean and simple layout.
- Left-side navigation bar.
- Adaptive scaling for large and small screens.
- Navigation remains on the left for all device types and sizes.
- On screens below 600px, labels collapse to abbreviations while nav stays positioned left.
- Navigation emojis are centered horizontally in the collapsed view (below 600px).
- Basic styling that is visually appealing without needing full polish.

## 9. Technical Requirements

- Client-side only: HTML, CSS, JavaScript.
- No server-side or backend code.
- No authentication or payment integration.
- State stored in browser memory during the session.
- Data defined in JavaScript as a hard-coded sample dataset.
- Page navigation can be implemented with sections or simple client-side routing.

## 10. Acceptance Criteria

- All four pages render correctly (Products, ShoppingCart, Checkout, Success).
- Users can navigate between `Products`, `ShoppingCart`, and `Checkout`.
- The `Products` page displays the 10 sample fruit products with descriptions.
- Search/filter functionality works and filters products by name.
- Items can be added to the cart from the `Products` page.
- A notification toast appears when items are added to cart.
- Cart counter badge on nav updates with item count.
- Cart quantities update correctly and items can be removed.
- The `Checkout` page displays an accurate order summary and total price.
- The `Success` page displays after order processing with order confirmation.
- The navigation bar remains on the left side for all device sizes and resolutions.
- Navigation labels collapse to abbreviations on screens below 600px width.
- Cart and search filters clear when returning to products from success page.

## 11. Assumptions & Constraints

- The app is a static prototype only.
- There is no backend service.
- No persistent storage beyond runtime memory is required.
- The prototype focuses on demonstrating concepts, not production readiness.

## 12. Optional Enhancements

**Implemented:**

- ✓ Add product search or filtering on the `Products` page.
- ✓ Display a confirmation/thank you page after `Process Order`.
- ✓ In-app notification toasts when items are added to cart.
- ✓ Cart counter badge on navigation bar.

**Not Implemented:**

- Add additional analytics or tracking.
- Add user preferences/favorites system.

## Wireframes

### Navigation

Expanded left navigation (desktop / wide view):

+-------------------------------------------------------------+
| NAVIGATION | HEADER |
| +----------------------+ |------------------------------|
| | 🍎 Products | | Page title |
| | 🛒 ShoppingCart | | |
| | ✅ Checkout | | |
| +----------------------+ +------------------------------+
| |
| MAIN CONTENT |
| |
| |
+-------------------------------------------------------------+

Collapsed left navigation (narrow view < 600px):

+-----------------------------------+
| NAV | HEADER |
| +---+----------------------------|
| |🍎| | Page title |
| |🛒| | |
| |✅| | |
| +---+----------------------------|
| |
| MAIN CONTENT |
| |
+-----------------------------------+

Notes:

- The navigation bar remains positioned on the left side of the screen for all devices.
- On screens below 600px, nav labels are hidden and abbreviations are shown.
- Navigation emojis are centered horizontally below 600px.
- On screens above 600px, full labels appear alongside icons.

Abbreviations:

- P = Products (🍎)
- C = ShoppingCart (🛒)
- O = Checkout (✅)

### Products Page

Products Page Wireframe:

+-------------------------------------------------------------+
| 🍎 Products |
+-------------------------------------------------------------+
| [Search / filter optional] |
|-------------------------------------------------------------|
| [🍎 Apple] Apple $1.25 / item [Qty: 1] [+ Add] |
| [🍌 Banana] Banana $0.75 / item [Qty: 2] [+ Add] |
| [🍇 Grapes] Grapes $3.50 / lb [Qty: 1] [+ Add] |
| [🍊 Orange] Orange $1.10 / item [Qty: 3] [+ Add] |
| [🍓 Strawberry] Strawberry $2.90 / box [Qty: 1] [+ Add] |
| ... |
+-------------------------------------------------------------+

Notes:

- Each product row includes emoji, name, price per unit, quantity selector, and add button.
- Clicking a product name or image opens ProductDetails.

### ProductDetails Page

ProductDetails Page Wireframe:

+-------------------------------------------------------------+
| 🧃 Product Details |
+-------------------------------------------------------------+
| [Back to Products] |
| |
| [🍍 Pineapple] |
| Name: Pineapple |
| Description: Sweet tropical fruit. |
| Price: $2.50 / item |
| |
| [Qty: 1] [+ Add to Cart] |
+-------------------------------------------------------------+

Notes:

- Includes selected product image, name, description, and price.
- Provides a back navigation control to return to Products.

### ShoppingCart Page

ShoppingCart Page Wireframe:

+-------------------------------------------------------------+
| 🛒 Shopping Cart |
+-------------------------------------------------------------+
| Item Qty Unit Price Total |
| ----------------------------------------------------------- |
| 🍎 Apple 2 $1.25 $2.50 |
| [ - ] [2] [ + ] [Remove] |
| 🍌 Banana 3 $0.75 $2.25 |
| [ - ] [3] [ + ] [Remove] |
| ----------------------------------------------------------- |
| Subtotal: $4.75 |
| |
| [Continue Shopping] [Proceed to Checkout] |
+-------------------------------------------------------------+

Notes:

- Supports quantity updates and item removal.
- Displays cart totals clearly.

### Checkout Page

Checkout Page Wireframe:

+-------------------------------------------------------------+
| ✅ Checkout |
+-------------------------------------------------------------+
| Order Summary |
| ----------------------------------------------------------- |
| 🍎 Apple 2 $1.25 $2.50 |
| 🍌 Banana 3 $0.75 $2.25 |
| ----------------------------------------------------------- |
| Total: $4.75 |
| |
| [Process Order] |
+-------------------------------------------------------------+

Notes:

- Displays checkout summary and clear total.
- Includes a Process Order button for prototype completion.
