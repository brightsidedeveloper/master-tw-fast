import tw from "twin.macro"

export default function App() {
  return (
    <>
      {/* <HTML /> */}
      {/* <WidthAndHeight /> */}
      {/* <Colors /> */}
      <MarginPadding />
      {/* <Flex /> */}
      {/* <Grid /> */}
      {/* <Hover /> */}
    </>
  )
}

const HTML = () => {
  //* This is an example of 'all' the HTML elements you can use in React
  //* Now as we continue these are the building blocks that you will
  //* use to build your components.

  return (
    <>
      <h1>This is a h1</h1>
      <h2>This is a h2</h2>
      <h3>This is a h3</h3>
      <h4>This is a h4</h4>
      <h5>This is a h5</h5>
      <h6>This is a h6</h6>
      <p>This is a paragraph (p)</p>
      <div>
        This is a Div, commonly used as a container to position or layout other
        div/p/h/img/input/button within them.
      </div>
      <span>
        This is a span, commonly used to style text within a paragraph.
      </span>
      <ul>
        {/* [U]nordered [L]ist */}
        <li>- This is a list item</li>
        <li>- This is a list item</li>
        <li>- This is a list item</li>
      </ul>
      <ol>
        {/* [O]rdered [L]ist */}
        <li>1. This is a list item</li>
        <li>2. This is a list item</li>
        <li>3. This is a list item</li>
      </ol>
      <button>This is a button</button>
      <input type="text" placeholder="This is an input" />
      <img src="https://picsum.photos/200" alt="200" />

      {/* The following are just divs that have different names so that screen readers can navigate the website */}
      <header>
        This is a header
        <nav>This is a nav</nav>
      </header>

      <main>
        This is a main
        <section>This is a section</section>
        <article>This is an article</article>
        <aside>This is an aside</aside>
      </main>

      <footer>This is a footer</footer>
    </>
  )
}

const SizeAndShape = () => {
  //* Now we can begin to use tw to style our our tool kit of HTML elements

  return (
    <>
      <Box1 />
      <Box2 />
      <Box3 />
      <Box4 />
    </>
  )
}
// This is some width and height (with a color so you can see it
// by default elements are transparent). We will start with size by
// doing w-[size as a fixed number] but we can also do w-[%]/h-[%] which is a percentage of the parent container.
// We can also do w-[vw]/h-[vh] which is a percentage of the screen's height/width (know as viewport)
// We can also do w-[max/min]-[size] which is the max or min size of the element
// We will get more into this laternts responsive
const Box1 = tw.div`w-96 h-96 bg-green-500`
const Box2 = tw.div`w-64 h-64 rounded-xl bg-yellow-500`
const Box3 = tw.div`w-44 h-44 rounded-md bg-blue-500`
const Box4 = tw.div`w-32 h-32 bg-red-500`

const Colors = () => {
  //* Color can be applied to the background, border, text, gradient, and shadow
  //* Here are all of tailwinds colors https://tailwindcss.com/docs/customizing-colors
  return (
    <>
      <Background></Background>
      <Border></Border>
      <Text>This is some Text that is RED</Text>
      <Gradient></Gradient>
      <Shadow></Shadow>
    </>
  )
}

// This is using bg-[color]-[deepness]/[opacity] to set the background color and opacity
// Deepness is a number from 50 then 100 to 900 (100 at a time) and opacity is a number from 0 to 100
const Background = tw.div`bg-red-500/70 w-96 h-96`
// This is using border-[size] border-[color]-[deepness] to set the border size and color
const Border = tw.div`bg-green-500 border-2 border-red-500 w-96 h-96`
// This is using text-[color]-[deepness] to set the text color
const Text = tw.div`text-red-500`
// This is using bg-gradient-to-[direction] from-[color]-[deepness] to-[color]-[deepness] to set the gradient
const Gradient = tw.div`bg-gradient-to-r from-red-500 to-blue-500 w-96 h-96`
// This is using shadow-[size] to set the shadow
const Shadow = tw.div`bg-white shadow-2xl w-96 h-96`

const MarginPadding = () => {
  return (
    <>
      <Margin>This is a p with margin all around it </Margin>
      <Padding>This is a p with padding all around it</Padding>
    </>
  )
}

// Margin and Padding can be applied to all sides, top, right, bottom, left, and x and y axis

// ml = margin left mr = margin right mt = margin top mb = margin bottom mx = margin x axis my = margin y axis
const Margin = tw.p`m-4 bg-pink-500`
// pl = padding left pr = padding right pt = padding top pb = padding bottom px = padding x axis py = padding y axis
const Padding = tw.p`p-4 bg-pink-800`

const Flex = () => {
  return <>Flex</>
}

const Grid = () => {
  return <>Grid</>
}

const Hover = () => {
  return <>Hover</>
}

const MediaQueries = () => {
  return <>Media Queries</>
}
