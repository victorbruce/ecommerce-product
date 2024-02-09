# Frontend Mentor - E-commerce product page solution

This is a solution to the [E-commerce product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6). I built this project using `ReactJs`, `Typescript`, `TailwindCss`.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Add a product to a cart
- Increase or decrease the product quantity
- Delete product from cart
- Switch the large product image by clicking on the small thumbnail images
- See hover states for all interactive elements on the page

### Demo

<video src="./screenshot/ecommerce-demo.mp4" muted autoplay></video>

### Links

- Solution URL: [Github](https://github.com/victorbruce/ecommerce-product)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## 💭 My process

I started by structuring the project folder and installing the essential packages to get me started.

Next, I defined by base styling as defined in the style guide which was part of the project starter pack.

To make things easier, I started with the deskep view design by building and testng each component at a time whiles striving for responsiveness on the mobile viewport.

After making the page full responsive, I started working on the interactivity of the page as well as the functionality needed to make the page functional.

Finally, I took time to resolve all warnings the compiler was throwing at me by searching via google to find poosible solutions.

### 📦 Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox and CSS Grid
- [React](https://reactjs.org/) - JS library
- [TailwindCss](https://styled-components.com/) - For styles
- [Typescript](https://typescript.org) - For type safety
- [React Slick](https://react-slick.neostack.com/) - Image sliders

## What I learned

### 🫙 React Context

- **State Management**: I applied React Context to manage the App state by passing data to children components without `prop drilling` or `raising state` without depending on any external third-party library like `Redux`.

### 👌 Optimizing Re-renders when passing objects and functions

- **Code Optimization**: As mentioned earlier, I used React Context to manage the state of this App. In using React Context, you can pass any values via context, including **objects** and **functions**. I created a `CartContext` that takes in an object with properties that are of type `array`(products) and `functions`(adding and deleting products).

  Now, when this App re-renders(for example, on a route update), React will also have to re-render all components deep in the tree that call `useContext(CartContext)`. **To avoid re-rendering of components even when the underlying data has not change**, we have to wrap our `functions`(addProduct and removeProduct) with the `useCallback` hook and wrap the object creation(in this case our context object) with `useMemo`

  As a result of this optimization, even if the App needs to re-render, the component calling `useContext(CartContext)` won't need to re-render unless the underlying data `products` has changed.

### 🌅 React Slick Library

- **Sliders**: I researched on NPM website to find one of the widely used image slider or carousel on the marketplace. React Slick was the package that stoodout for me based on its simplicity and clear docs.
  I found a way of customizing React Slick to suit the UI design I was implementing hence making it my go to package for projects with similar requirements in the future.

### 🛟 useMemo

- `useMemo` is a React Hook that lets you cache the results of a calculation between re-renders. It takes in two arguments, `a calculated value` and `a list of dependencies`. Below is an example.

```js
useMemo(() => ({
  products: products,
  numberOfProducts: products.length,
  addProduct: addProduct,
  removeProduct: removeProduct,
}), [products, addProduct, removeProduct.])
```

I learned how to useMemo as a performance optimization technique for expensive calculation and skipping re-rendering of components.

### ⏪ useCallback

- I used React's `useCallback` hook to cache function definitions that will cause re-rendering. This hook takes in a two arguments. `A call back function` and `a list of dependencies`

```js
const addProduct = useCallback(
  (product: Product) => {
    setProducts([...products, product]);
  },
  [products]
);
```

### ☣️ Resolving A Typescript Error

- **Cannot invoke an object which is possibly 'undefined' in TS**: I came across a new typescript error which indicates that the property I want to invoke as a function could be undefined. The solution was to use the optional chain operator(?) to ensure that the function is only called when it's defined.

`Reproducing the error:`

```js
addProduct({ id: 1, title: "Nike" });
```

`Solution`:

```js
addProduct?.({ id: 1, title: "Nike" });
```

## ✨ Continued development

Going forward, I will want to:

- Build User Interfaces using the mobile first development approach
- Incoporate TDD(Test Driven Development) in my projects.

### ℹ️ Useful resources

- [Blog Article on "Cannot invoke an object which is possibly 'undefined' in TS" - by Borislav Hadzhiev](https://bobbyhadz.com/blog/typescript-cannot-invoke-an-object-which-is-possibly-undefined#:~:text=The%20error%20%22Cannot%20invoke%20an,of%20how%20the%20error%20occurs.) - This helped me resolve a typescript error I had when building this project and the solution I found from this article was an eye openner.

- [React Docs(useContext, useMemo, useCallback)](https://react.dev/reference/react) - This resource helped me understand certain concepts such as handling state management with React Context, caching results of calculations and functions that may cause unexpected re-renders of components when underlying data haven't even changed.

## ✍️ Author

- Website - [Victor Bruce](https://victorbruce.vercel.app)
- Frontend Mentor - [@victorbruce](https://www.frontendmentor.io/profile/victorbruce)

## 🤝 Acknowledgments

A big shoutout to the designers at Frontend Mentor who came up with this User Interface for peopele to try out.
