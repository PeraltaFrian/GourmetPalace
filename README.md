Gourmet Palace: 

Gourmet Palace is an eCommerce website designed for showcasing and selling a variety of dishes. The platform allows customers to view details about each dish, including descriptions, prices, and images. It features a clean, user-friendly interface with the ability to filter dishes by categories, making it easier for customers to browse different types of meals such as main courses, desserts, and drinks.

Setup:
1. Clone the repository
    git clone <repository-url>
2. Install dependencies
    npm install
3. Start the app with:
    npm run dev
4. Open http://localhost:3000 to view the dishes.

Folder Structure: 
/gourmetpalace
    /src
        /app
            /components
                DishFilter.tsx
                Footer.tsx
                Header.tsx
            /styles
                button.module.css
                DishFilter.module.css
                dishItem.module.css
                dishList.module.css
                Footer.module.css
                globals.css
                Header.module.css
        layout.tsx
        page.tsx

Functionality:
1. Users can view dishes information retrieved from Contentful.
2. Dishes can be filtered by category (e.g., Main Course, Dessert, Drinks).
3. An "Order" button is provided, but the functionality is to be enhanced later.

Testing Instructions
Main Testing:
1. Verify that dishes are displayed correctly.
2. Test the category filter to ensure it filters dishes based on the selected category.
3. Check that the "Order" button appears for each dish (functionality to be enhanced later).
Responsive Testing:
1. Ensure the layout adjusts correctly for different screen sizes (e.g., mobile, tablet, desktop).
Future Testing:
1. Test the "Order" button functionality once it's implemented.

Headless CMS:
A headless CMS like Contentful allows you to manage content independently from how it's displayed. Unlike traditional CMSs, which control both the content and its presentation, a headless CMS focuses solely on delivering content. This gives you the freedom to design the frontend as you wish.

I chose Contentful because it's flexible, easy to use, and separates content from design. It integrates well with other tools. I also experimented with Sanity, but encountered numerous errors that cost me valuable time and energy. Additionally, I faced compatibility issues with Next.js versions during this assignment. Despite these challenges, I enjoyed the learning process, especially the ability to separate content from the frontend and update content without needing to touch the frontend design.