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

    
