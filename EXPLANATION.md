# Explanation

I build this web app by using "Mobile First" design. The reason is, for easy develop and easy to maintain display between mobile and web (example on the market, like kitabisa, garasi.id, etc).

## Feature

* Anime Gallery
* Search Anime
* Add to Favorite's Feature

## Library

#### Zustand

I use Zustand as a state management. The reason is:
- Zustand has very small package (around 1kb) compared to other state management library and made it one of the smallest state management library.
- Zustand API already have some feature like Storage that I use in Favorite Page.

#### React Query

I use react-query as data fetcher. The other reason I use `react-query` is because it has built in <em>caching-strategy</em> and provide API for infinite scrolling by use `useInfiniteQuery`

#### Tailwind CSS

I use Tailwind CSS for rapid styling with scss. Also following BEM rules to naming className

#### Typescript

I Use Typescript for better type checking.

#### Vitest

Since I create project by using Vite, it would be nice if I also integrated it with Vitest for Component & API Testing

## Improvement

* Adding Fallback image shimmer when loading
* Using react-intersection-observer to support me to implement Infinite Scroll
* Using zustand persistStorage to save favorite anime


## Things to Improve

* Image Optimization (implement lazy-loading image)
* useTransition API for better transition when loading
* Design System using CVA (for better handling long className from tailwind css)
* Offline First (react-query actuallyl have feature for this, but still in <em>Experimental</em>)
* Protected Route