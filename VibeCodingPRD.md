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

### ProductDetails

- Shows detailed information for one selected product.
- Displays product name, description, price per unit, and emoji image.
- Includes a navigation control to return to the `Products` page.

### ShoppingCart

- Displays products added to the cart.
- Shows product name, quantity, and total price per item.
- Supports updating quantity and removing products from the cart.

### Checkout

- Displays a purchase summary with product name, quantity, and price.
- Clearly shows the total order price.
- Includes a `Process Order` button to complete the prototype flow.

## 5. Navigation / User Flows

**Navigation**

- A left-side menu links to `Products`, `ProductDetails`, `ShoppingCart`, and `Checkout`.
- The nav menu collapses to a one- or two-letter abbreviation when the viewport width is below 300 pixels.

**User flow examples**

1. Browse products → choose a quantity → add to cart → view cart → checkout.
2. Select a product to view details → return to products → update cart → process order.

## 6. Key Features

- A sample dataset of 10 fruit products.
- Responsive UI that scales automatically for desktop and phone screens.
- Left-side navigation menu with collapse behavior below 300px.
- Emoji-based product images for a simple visual design.
- Product list with add-to-cart controls.
- Cart item quantity updates and remove-item support.
- Checkout summary with total price display.

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
- Navigation collapses to abbreviations below 300px width.
- Basic styling that is visually appealing without needing full polish.

## 9. Technical Requirements

- Client-side only: HTML, CSS, JavaScript.
- No server-side or backend code.
- No authentication or payment integration.
- State stored in browser memory during the session.
- Data defined in JavaScript as a hard-coded sample dataset.
- Page navigation can be implemented with sections or simple client-side routing.

## 10. Acceptance Criteria

- All four pages render correctly.
- Users can navigate between `Products`, `ProductDetails`, `ShoppingCart`, and `Checkout`.
- The `Products` page displays the 10 sample fruit products.
- The `ProductDetails` page shows the selected product details.
- Items can be added to the cart from the `Products` page.
- Cart quantities update correctly and items can be removed.
- The `Checkout` page displays an accurate order summary and total price.
- The navigation menu collapses appropriately under 300px.

## 11. Assumptions & Constraints

- The app is a static prototype only.
- There is no backend service.
- No persistent storage beyond runtime memory is required.
- The prototype focuses on demonstrating concepts, not production readiness.

## 12. Optional Enhancements

- Add product search or filtering on the `Products` page.
- Add quantity controls directly in the cart.
- Display a simple confirmation message after `Process Order`.
