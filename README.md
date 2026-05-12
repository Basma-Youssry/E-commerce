## ✨ Project Features

- 🌍 Multi-language support (Arabic & English)
- 🖥️ Modern and responsive Landing Page
- 📱 Fully responsive across all screen sizes
- ⚡ Uses Signals instead of Angular Zone.js
- 🎨 Styled with Tailwind CSS v4
- 🚀 Developed with Angular 20

  ## 🚧 Challenges Faced
    ## 1- 🚧 Tailwind & `routerLinkActive` Issue
    
    - Faced an issue with `routerLinkActive` because of incorrect Tailwind CSS syntax.
    
    ### ❌ Incorrect Syntax
    
    ```html
    routerLinkActive="text-#09C"
    ```
    
    ### ✅ Correct Syntax
    
    ```html
    routerLinkActive="text-[#09C]"
    ```
    
    ### 💡 Why the Issue Happened
    
    - Tailwind CSS works at **build time** and generates classes only from the valid class names it detects in the source code.
    - Since the original syntax was invalid, Tailwind could not generate the required CSS class.
    - As a result, when `routerLinkActive` became active, no style was applied because the generated class did not exist.
    ````

    ## 2- 🖼️ Angular 20 Image Path Issue
  
      - In Angular 20, image paths should be referenced **without** using `/public/`.
      
      ### ✅ Correct Path
      
      ```html
      /images/example.png
      ```
      
      ### ❌ Incorrect Path
      
      ```html
      /public/images/example.png
      ```
      
    ## 3-💡 Explanation
      
      - Angular automatically serves files inside the `public` folder as static assets.
      - Because of that, there is no need to include `/public/` in the image path.
      - Adding `/public/` manually can cause the image not to load correctly.
    ## 🚧 Input Validation Issue (`required="true"`)

      - Faced an issue when using `required="true"` on input fields.  
      - It caused problems because Angular treated it as a strict compile-time requirement, meaning the property had to            always have a value during compilation; otherwise, it could lead to unexpected behavior or removal during build.
      
      ### 💡 Solution
      
      - Removing `required="true"` provided more flexibility in handling inputs.  
      - It allowed the use of dynamic values such as `product` or `category`.  
      - It also enabled conditional validation directly in templates instead of enforcing strict compile-time rules.

    ## 4- API Data Enhancement (Adding Price Field)
      - Used the Categories API, which did not originally include a `price` field. To handle this, I used the `map()` method       to inject dynamic price values into each object, assigning different prices to each category item within the API data.

    ## 5- Best Selling Styling with Flowbite Integration
      - Implemented **Best Selling styling** to enhance the UI design and improve the visual structure of the section.
      - Used **Flowbite** to integrate the **Group Buttons component** inside the project, enabling reusable and consistent         UI elements.

    ## 6- Sub Slider Issue Fixed Using Swiper
      - Faced an issue with the **Sub Slider**, which was the second slider implemented in the project.
      - Solved the problem by integrating the **Swiper** package into the project.
      - Used Swiper components to build a highly flexible and feature-rich slider system with a wide range of customization          options.

    ## 7- Customizing Swiper Navigation Buttons
      - While using the **Swiper** library to create sliders, I faced a challenge customizing the navigation arrows based on         the required UI design.
      - The default arrow styling did not match the desired appearance, so I customized the navigation buttons separately            from the arrow icons.
      - Used Swiper’s dedicated selectors to fully control the button and arrow styling independently.
      - Applied custom `width` and `height` values to resize the navigation buttons and achieve the exact design                     requirements instead of relying on **Font Awesome** icons.

    ## 8- Dynamic Class Binding in Best Selling Section
      - In the **Best Selling** section, I implemented dynamic styling for the **Buttons Group** to control the card                position based on user interaction.
      - Used Angular **Class Binding** to apply conditional classes dynamically when a button is clicked.
      - Implemented logic that checks a condition:
        - If the condition is `true`, a specific set of classes is applied.
        - If the condition is `false`, a different set of classes is applied.
      - This approach ensures that only one group of classes is rendered at a time instead of applying both simultaneously.

    ## 9- Planning Required Libraries Before Starting the Project
      - Identified and selected the required libraries before starting the project development process.
      - This approach helps ensure that all project requirements are covered efficiently without adding unnecessary                  dependencies later.
      - Focused on choosing libraries that provide the needed features while maintaining good performance and scalability.
      - Considered the impact of external packages on the application's **Bundle Size** to avoid performance issues and              unnecessary project bloat.

    ## 10- Using SVG Instead of Font Awesome for Better Center Alignment
      - In the **Details Page**, I needed to perfectly center the `+` icon inside a flex container.
      - Faced alignment issues while using **Font Awesome** icons because they behave similarly to text characters and are           affected by font rendering and line-height behavior.
      - Replaced the Font Awesome icon with an **SVG** solution to achieve more accurate positioning and consistent                  alignment.
      - Learned that SVGs are **vector graphics** rather than traditional font-based icons, which makes them easier to               control inside flex layouts.
      - Using SVG improved the centering behavior and prevented unwanted font-related styling issues.

    ## 11- Deploying the Angular Project and Handling SSR Limitations
      - Used **Render** and **Rootsite** for deploying and hosting the project on a server.
      - Faced a deployment limitation because the project was built with **Angular 20 SSR (Server-Side Rendering)**.
      - Learned that the free hosting setup on **Rootsite** only supports **Static Hosting**, which is not compatible with           SSR applications.
      - Due to this limitation, I switched to another hosting platform that supports SSR deployment properly.

    ## 12- Fixing Phone Input Validation with Regex
      - Faced an issue while applying **Regex validation** to the phone input field.
      - The validation was not working correctly because the input field was initially set to `type="number"`.
      - Discovered that browsers automatically remove leading zeros from number inputs, which caused the Regex pattern               validation to fail.
      - Solved the issue by changing the input type from `number` to `tel`.
      - Using `type="tel"` preserved the phone number formatting and allowed the Regex validation to work correctly.

    ## 13- Problem Solving Approach in Angular Projects
      - Learned that in Angular projects, it is important to thoroughly investigate issues when the application becomes              unresponsive or “freezes” during runtime.
      - Avoided immediately escalating problems and instead focused on reproducing and analyzing the issue carefully.
      - Tried different solutions independently before seeking help, as many problems can be resolved with proper debugging          and understanding of the root cause.
      - Strengthened my problem-solving skills by relying on hands-on practice and debugging rather than assumptions.

    ## 14- Fixing Angular SSR Routing Issue with Dynamic Checkout IDs
      - Faced an issue in Angular SSR where the **checkout route with dynamic ID parameters** was causing errors.
      - Solved the problem by defining a **static route without parameters**, since SSR requires predictable (static) routes         during server rendering.
      - After that, Angular was able to correctly interpret the dynamic ID as part of the checkout path during client-side           navigation.
      - Another issue appeared because the server-side rendering could not resolve dynamic route values at runtime.
      - Fixed this by ensuring that the **checkout route is rendered on the client-side instead of the server-side**, since          dynamic parameters cannot be resolved during SSR.
      - Applied the solution in **`server.js` / app server configuration** by delegating this route to client-side rendering         only.

    ## 15- Preventing Unintended Form Submission in Checkout Page
      - Faced an issue in the **Checkout Page** where clicking on inputs or buttons was triggering an unintended form                submission.
      - Discovered that in HTML, the default behavior for buttons inside a form is `type="submit"`, which causes automatic           submission when interacting with inputs or buttons.
      - Solved the issue by explicitly setting all buttons to `type="button"` instead of relying on the default behavior.
      - This prevented the browser from triggering automatic form submission when clicking inputs or buttons.
      - Ensured that the form submission happens only manually through a controlled click event that executes the required           functions properly.

    ## 16- Using Signals with Form Data in Angular Checkout
      - Learned that **Signals** in Angular behave differently from regular **Inputs/Props**, especially regarding initial           values.
      - Unlike standard props, signals may require an initial value to avoid undefined state issues.
      - In the **Checkout Component**, I needed to pass a `FormGroup` as a value directly to a signal.
      - Solved the issue by initializing the signal properly and binding the **FormGroup value directly to the signal**.
      - This ensured consistent state management and avoided runtime errors related to undefined or missing form data.
    
  ## 17- Handling Multilingual Data Between Front-End and Back-End
    - Identified that proper handling of **multi-language support** should ideally be managed by the back-end when sending         localized data.
    - In the project, the API was returning data only in **English**, while the requirement was to display content in              **Arabic** for better user experience and localization consistency.
    - Implemented a front-end solution to map or transform the received English data into Arabic translations before               displaying it to the user.
    - This approach ensured that the UI matches the expected language, although it required additional effort on the front-        end side due to missing back-end localization support.

    ## 18- Zone.js vs Zoneless in Angular 20 & Angular 21 (SSR vs CSR)
    - In **Angular 20 with SSR**, removing `Zone.js` is not recommended because it is still required for proper change             detection and application stability.
    - Initially removed `Zone.js`, but had to re-add it because the application broke under SSR.
    - Learned that **Zoneless change detection** is mainly suitable for **CSR (Client-Side Rendering)** scenarios rather           than SSR setups.
    - In **Angular 21**, Zoneless support became available by default, reducing the need to manually import `Zone.js` in           `main.ts`.
    - Conclusion:  
      - Use `Zone.js` in SSR projects for Angular 20.  
      - Use **Zoneless approach** in CSR projects or Angular 21 where it is supported by default.

    ## 19- Wishlist Remove Issue & Refreshing Data
      - Faced an issue while removing items from the Wishlist because the data returned from the Backend only contained              product IDs instead of full product details.
      - Because of that, the remaining products inside the Wishlist could not be displayed correctly after removing an item.
      - To solve this issue, after the `remove` function and the `subscribe` response from the Backend, I re-called the              `getLoggedUserWishlist()` function.
      - This ensures fetching the updated Wishlist data again and displaying the remaining products correctly in the UI.
      
    ## 20- Handling SSR Authentication & Interceptor Issues in Angular
    - Faced an issue in the **SSR application** because the app runs on the server first before loading in the browser.
    - Since browser cookies are not directly available during the initial server-side rendering, the server treated the user       as if they were not logged in.
    - As a result, the server returned `401 Unauthorized` responses during SSR requests.
    - Another issue was that the `HTTP Interceptor` handled these errors normally and triggered error notifications using         `Toastr`, without distinguishing whether the error happened during SSR or inside the browser.
    - This caused unnecessary error messages to appear during the SSR rendering phase.
    - Solution:
      - Prevented `Toastr` notifications from appearing during SSR.
      - Prevented handling `401 Unauthorized` errors inside the Interceptor during SSR requests.
      - This improved the SSR user experience and avoided showing false authentication errors before the application was             fully loaded in the browser.

    ## 21- Signals vs Subscription in Angular
    - Learned the difference between using `Signals` and `Subscriptions` in Angular state management.
    - `Signals` directly manage and update the state reactively without the need for manual subscriptions.
    - Unlike `Subscription`, Signals do not continuously listen for emitted values through an `Observer` pattern.
    - `Subscription` works with Observables and requires subscribing to data streams to receive updates.
    - Signals provide a simpler and cleaner reactive approach for local state management compared to traditional                   subscriptions.

    ## 22- Fixing Font Issue During Angular SSR Build
    - Faced a build error while working with SSR because the server could not properly resolve the font files during the           build process.
    - Solved the issue by updating the `angular.json` configuration file.
    - Added the font optimization configuration and set it to `false`.
    - This prevented SSR from trying to process the fonts incorrectly during the build step and fixed the application build        successfully.
